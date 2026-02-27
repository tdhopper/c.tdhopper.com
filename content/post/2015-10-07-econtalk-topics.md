---
title: "Econtalk Topics: Nonparametric LDA in Practice"
date: 2015-10-07
slug: econtalk-topics
math: true
categories:
  - Article
tags:
  - bayesian-statistics
  - dirichlet-processes
  - python
description: "Applying nonparametric latent Dirichlet allocation to discover topics in Econtalk podcast transcripts using a hierarchical Dirichlet process."
---

*The interactive visualizations in this analysis require a live notebook. [View the original notebook on NBViewer](http://nbviewer.ipython.org/github/tdhopper/notes-on-dirichlet-processes/blob/master/2015-10-07-econtalk-topics.ipynb) for the full interactive experience, including the pyLDAvis topic visualization.*

## Nonparametric Latent Dirichlet Allocation

### Analysis of the topics of [Econtalk](http://www.econtalk.org/)

In 2003, a groundbreaking statistical model called "[Latent Dirichlet Allocation](https://www.cs.princeton.edu/~blei/papers/BleiNgJordan2003.pdf)" was presented by David Blei, Andrew Ng, and Michael Jordan.

LDA provides a method for summarizing the topics discussed in a document. LDA defines topics to be discrete probability distrbutions over words. For an introduction to LDA, see [Edwin Chen's post](http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/).

The original LDA model requires the number of topics in the document to be specfied as a known parameter of the model. In 2005, Yee Whye Teh and others published [a "nonparametric" version of this model](http://www.cs.berkeley.edu/~jordan/papers/hdp.pdf) that doesn't require the number of topics to be specified. This model uses a prior distribution over the topics called a hierarchical Dirichlet process. [I wrote an introduction to this HDP-LDA model](/blog/nonparametric-lda/) earlier this year.

For the last six months, I have been developing a Python-based Gibbs sampler for the HDP-LDA model. This is part of a larger library of "robust, validated Bayesian nonparametric models for discovering structure in data" known as [Data Microscopes](http://datamicroscopes.github.io).

This notebook demonstrates the functionality of this implementation.

The Data Microscopes library is available on [anaconda.org](https://anaconda.org/datamicroscopes/) for Linux and OS X. `microscopes-lda` can be installed with:

    $ conda install -c datamicroscopes -c distributions microscopes-lda

The Econtalk transcript data used in this analysis is [available on GitHub](https://github.com/tdhopper/notes-on-dirichlet-processes/tree/master/econtalk-data).

```python
import pyLDAvis
import json
import sys
import cPickle

from microscopes.common.rng import rng
from microscopes.lda.definition import model_definition
from microscopes.lda.model import initialize
from microscopes.lda import utils
from microscopes.lda import model, runner

from numpy import genfromtxt
from numpy import linalg
from numpy import array
```

`dtm.csv` contains a document-term matrix representation of the words used in Econtalk transcripts. The columns of the matrix correspond to the words in `vocab.txt`. The rows in the matrix correspond to the show urls in `urls.txt`.

Our LDA implementation takes input data as a list of lists of hashable objects (typically words). We can use a utility function to convert the document-term matrix to the list of tokenized documents.


```python
vocab = genfromtxt('./econtalk-data/vocab.txt', delimiter=",", dtype='str').tolist()
dtm = genfromtxt('./econtalk-data/dtm.csv', delimiter=",", dtype=int)
docs = utils.docs_from_document_term_matrix(dtm, vocab=vocab)
urls = [s.strip() for s in open('./econtalk-data/urls.txt').readlines()]
```

Let's set up our model. First we created a model definition describing the basic structure of our data. Next we initialize an MCMC state object using the model definition, documents, random number generator, and hyper-parameters.


```python
N, V = len(docs), len(vocab)
defn = model_definition(N, V)
prng = rng(12345)
state = initialize(defn, docs, prng,
                        vocab_hp=1,
                        dish_hps={"alpha": .6, "gamma": 2})
r = runner.runner(defn, docs, state, )
```

When we first create a state object, the words are randomly assigned to topics. Thus, our perplexity (model score) is quite high. After running 1000 iterations of the MCMC, the perplexity drops significantly:

    randomly initialized model:
     number of documents 454
     vocabulary size 16445
     perplexity: 16523.1820356 num topics: 9

    after 1000 iterations:
     perplexity: 2363.65138771 num topics: 11

We can extract the term relevance for each topic. Here are the 10 most relevant words for each of the 11 discovered topics:

    topic 0 : banks fed bank money financial monetary debt inflation crisis rates
    topic 1 : party republicans constitution vote democrats republican tax election president stalin
    topic 2 : fat science diet eat insulin disease immune replication scientific eating
    topic 3 : growth trade water cities china city development climate inequality oil
    topic 4 : people think don just going like say things lot way
    topic 5 : smith hayek moral economics society adam liberty coase theory rules
    topic 6 : bitcoin internet software google technology store bitcoins computer machines company
    topic 7 : prison health drug care drugs medicaid medical patients patient women
    topic 8 : schools teachers school kids teacher education students parents teaching sports
    topic 9 : bees honey pollination colony ants bee queen cheung ant colonies
    topic 10 : museum museums art gallery galleries monet seating trustees admission director

We could assign titles to each of these topics. For example, _Topic 5_ appears to be about the _foundations of classical liberalism_. _Topic 6_ is obviously _Bitcoin and Software_.  _Topic 0_ is the _financial system and monetary policy_. _Topic 4_ seems to be _generic words used in most episodes_; unfortunately, the prevalence of "don" is a result of my preprocessing which splits up the contraction "don't".

Topic 5 appears to be about the theory of classical liberalism. The 20 episodes with the highest proportion of words from that topic include discussions of the Theory of Moral Sentiments, foundations of liberty, and microeconomics:

    The Economics of Organ Donations
    Klein on The Theory of Moral Sentiments, Episode 2
    Boudreaux on Law and Legislation
    Klein on The Theory of Moral Sentiments, Episode 4
    Klein on The Theory of Moral Sentiments, Episode 5
    Wolfe on Liberalism
    Boettke on Katrina and the Economics of Disaster
    Richard Thaler on Libertarian Paternalism
    ...

We can also use the topic distributions as low-dimensional projections of the documents, allowing us to find episodes that are similar in content. For example, episodes similar to "Kling on Freddie and Fannie and the Recent History of the U.S. Housing Market" include many episodes about the financial crisis:

    Irwin on the Great Depression and the Gold Standard
    Rustici on Smoot-Hawley and the Great Depression
    Reinhart on Financial Crises
    Posner on the Financial Crisis
    Sumner on Monetary Policy
    Calomiris on the Financial Crisis
    John Taylor on the Financial Crisis
    ...

We can also find the topics a given word is most likely to appear in. For example, the word "Munger" (as in [Mike Munger](http://www.michaelmunger.com/)) appears most frequently in discussions of classical liberalism and microeconomics:

```python
def topics_related_to_word(word, n=10):
    for wd, rel in zip(word_dists, relevance):
        score = wd[word]
        rel_words = ' '.join([w for w, _ in rel][:n])
        if bars(score):
            print bars(score), rel_words
```

    ==== growth trade water cities china city development climate inequality oil
    ================== smith hayek moral economics society adam liberty coase theory rules
    === bitcoin internet software google technology store bitcoins computer machines company

Where does Munger come up? In discussing the moral foundations of classical liberalism and microeconomics!

The word "lovely"---which Russ Roberts uses often when talking about the _Theory of Moral Sentiments_---appears most in that topic as well:

    = smith hayek moral economics society adam liberty coase theory rules
