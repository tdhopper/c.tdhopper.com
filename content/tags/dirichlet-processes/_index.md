---
title: "Dirichlet Processes"
description: "Notes on Dirichlet processes, hierarchical Dirichlet processes, and nonparametric Bayesian methods."
image: /images/dirichlet-processes-tag-mr-men.png
---

I taught myself Dirichlet processes and Hierarchical DPs in the spring of 2015 in order to understand nonparametric Bayesian models and related inference algorithms. I wrote a bunch of code and took a bunch of notes that I published here for the benefit of others trying to learn this material. I also contributed an implementation of [Nonparametric Latent Dirichlet Allocation](https://github.com/datamicroscopes/lda) to the [data microscopes](http://datamicroscopes.github.io) project.

The posts below are best read in this order:

1. [Dirichlet Distribution and Dirichlet Processes](/blog/dirichlet-distribution/): A quick review of the Dirichlet Distribution and an introduction to the Dirichlet Process by analogy with the Dirichlet Distribution.
2. [Sampling from a Hierarchical Dirichlet Process](/blog/hdp-sampling/): Code demonstrating how you can sample from a Hierarchical Dirichlet Process without generating an infinite number of parameters first.
3. [Nonparametric Latent Dirichlet Allocation](/blog/nonparametric-lda/): An alternative view of latent Dirichlet allocation using a Dirichlet process, and a demonstration of how it can be easily extended to a nonparametric model using a hierarchical Dirichlet process.
4. [Fitting a Mixture Model with Gibbs Sampling](/blog/mixture-model/): Derivation of a full Gibbs sampler for a finite mixture model with a uniform Dirichlet prior.
5. [Collapsed Gibbs Sampling for Bayesian Mixture Models (with a Nonparametric Extension)](/blog/collapsed-gibbs/): Derivation of a collapsed Gibbs sampler for a finite mixture model, extended to the Dirichlet Process Mixture Model.
6. [Notes on Gibbs Sampling in Hierarchical Dirichlet Process Models](/blog/hdp-lda/): Notes on applying the equations from the [Hierarchical Dirichlet Process](http://www.cs.berkeley.edu/~jordan/papers/hdp.pdf) paper to nonparametric Latent Dirichlet Allocation.
7. [Econtalk Topics: Nonparametric LDA in Practice](/blog/econtalk-topics/): Applying nonparametric LDA to discover topics in Econtalk podcast transcripts.
8. [Nomenclature of Dirichlet Processes](/blog/nomenclature/): A discussion of the confusing use of the term "Dirichlet process" in the literature.
9. [Sample from Antoniak Distribution with Python](/blog/antoniak/): Code for drawing samples from the distribution of tables created by a Chinese restaurant process after `n` patrons are seated.
