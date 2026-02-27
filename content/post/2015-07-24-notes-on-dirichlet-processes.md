---
title: Notes on Dirichlet Processes
categories:
    - Article
date: 2015-07-28
slug: notes-on-dirichlet-processes
aliases:
  - /blog/2015/Jul/24/notes-on-dirichlet-processes/
description: Educational notes on Dirichlet processes, hierarchical Dirichlet processes, and nonparametric Bayesian methods including Gibbs sampling for mixture models and latent Dirichlet allocation.
Thumbnail: /projects/dirichlet.png
Portfolio: true
tags:
  - python

  - dirichlet-processes
---

I taught myself Dirichlet processes and Hierarchical DPs in the spring of 2015 in order to understand nonparametric Bayesian models and related inference algorithms. In the process, I wrote a bunch of code and took a bunch of notes. I preserved those notes here for the benefit of others trying to learn this material.

------

## Table of Contents

* [Dirichlet Distribution and Dirichlet Processes](/blog/dirichlet-distribution/): A quick review of the Dirichlet Distribution and an introduction to the Dirichlet Process by analogy with the Dirichlet Distribution.
* [Sampling from a Hierarchical Dirichlet Process](/blog/hdp-sampling/): Code demonstrating how you can sample from a Hierarchical Dirichlet Process without generating an infinite number of parameters first.
* [Nonparametric Latent Dirichlet Allocation](/blog/nonparametric-lda/): An alternative view of latent Dirichlet allocation using a Dirichlet process, and a demonstration of how it can be easily extended to a nonparametric model (where the number of topics becomes a random variable fit by the inference algorithm) using a hierarchical Dirichlet process.
* [Fitting a Mixture Model with Gibbs Sampling](/blog/mixture-model/): Derivation of a full Gibbs sampler for a finite mixture model with a uniform Dirichlet prior. This is a step on the way to deriving a Gibbs sampler for the Dirichlet Process Mixture Model.
* [Collapsed Gibbs Sampling for Bayesian Mixture Models (with a Nonparametric Extension)](/blog/collapsed-gibbs/): Derivation of a collapsed Gibbs sampler for a finite mixture model with a uniform Dirichlet prior. Extension (without derivation) of this Gibbs sampler to the Dirichlet Process Mixture Model.
* [Notes on Gibbs Sampling in Hierarchical Dirichlet Process Models](/blog/hdp-lda/): Notes on applying the equations given in the [Hierarchical Dirichlet Process](http://www.cs.berkeley.edu/~jordan/papers/hdp.pdf) paper to nonparametric Latent Dirichlet Allocation.
* [Econtalk Topics: Nonparametric LDA in Practice](/blog/econtalk-topics/): Applying nonparametric LDA to discover topics in Econtalk podcast transcripts.
* [Nomenclature of Dirichlet Processes](/blog/nomenclature/): A discussion of the confusing use of the term "Dirichlet process" in the literature.
* [Sample from Antoniak Distribution with Python](/blog/antoniak/): Code for drawing samples from the distribution of tables created by a Chinese restaurant process after `n` patrons are seated.

## A Note on the term "Dirichlet Process"

Part of the impetus for compiling these notes was how carelessly the term "Dirichlet process" seemed to be used in literature on nonparametric Bayesian models.

Although I thought I had come to the correct understanding (which is presented here), [Dan Roy](https://twitter.com/roydanroy) [helpfully pointed out](http://danroy.org/marginalia/Nomenclature_for_stochastic_processes_and_Bayesian_nonparametric_statistics) that I probably got it wrong _given how Dirichlet Process is defined by [Ferguson 1973](http://www.cs.berkeley.edu/~jordan/courses/281B-spring04/readings/ferguson.pdf)_. Ferguson's use of Dirichlet process does not make it a "distribution over distributions" as [Neal](http://www.stat.columbia.edu/npbayes/papers/neal_sampling.pdf), [Teh](http://www.stats.ox.ac.uk/~teh/research/npbayes/Teh2010a.pdf), [Jordan](http://www.cs.berkeley.edu/~jordan/courses/281B-spring04/lectures/dp1.pdf), and [Blei](http://web.mit.edu/sjgershm/www/GershmanBlei12.pdf) call it. At best, I believe there is equivocation on the term "Dirichlet Process" in the NPB literature. At worst, there is wide scale confusion on what a Dirichlet process is!

At some point, I intend to write a post trying to explain the subtleties of this discussion. In the mean time, I would suggest that my posts will still be valuable in understanding the literature on nonparametric Bayes, even if it won't get you a Ph.D. in measure theory.

## Other Resources

* [A collection of links to resources I've found valuable](https://pinboard.in/u:tdhopper/t:%2540Bayes/)

### HDP-LDA Implementations

* [Gregor Heinrich's ILDA](http://www.arbylon.net/publications/ilda.pdf): A Java-based implementation of the "Posterior Assignment by Direct Sampling" MCMC algorithm from Teh et al (2005). Includes hyperparameter sampling.
* [Shuyo's Implementation](https://github.com/shuyo/iir/blob/master/lda/hdplda2.py): Pure Python implementation of "Posterior sampling in the Chinese restaurant franchise" MCMC algorithm. Doesn't include hyperparameter sampling.
* [Teh's Original Implementations](https://github.com/tdhopper/teh-npbayes): Matlab and C code for MCMC accompanying original paper. I found it impenetrable.
* [HCA](https://github.com/wbuntine/topic-models): C implementation
* [HDP-Faster](https://github.com/renaud/hdp-faster): C++ implementation by Chong Wang using [split-merge algorithm](http://arxiv.org/abs/1201.1657).
* [Gensim](https://radimrehurek.com/gensim/models/hdpmodel.html): Python-based variational inference (following [Chong Wang et al (2011)](http://jmlr.csail.mit.edu/proceedings/papers/v15/wang11a/wang11a.pdf)).
* [bnpy](https://github.com/bnpy/bnpy): Python implementation of variational inference.
