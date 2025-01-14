---
title: Operations Research, Machine Learning, and Optimization
categories:
    - Article
date: 2012-04-03
Author: Tim
slug: operations-research-machine-learning-and-optimization
aliases: [/blog/2012/Apr/03/operations-research-machine-learning-and-optimization/]
---

Over the past 18 months, I've been slowly learning some machine learning. One thing I've noticed is that most of the math in machine learning is optimization. Regression is typically minimization of some error term. Support vector machines are a quadratic optimization problem with linear constraints. Learning a neural network is _simply_ solving a nonconvex optimization problem. Clustering often takes the form of expectation-maximization. I'm currently learning Bayesian network structure learning which is an extremely difficult combinatorial optimization problem.

Yesterday on Twitter, I commented that I am surprised at how little operations research people and machine learning people talk. Most of the math of OR is, like machine learning, optimization. All the same [theorems](http://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions) apply, and we use many of the same [algorithms](http://en.wikipedia.org/wiki/Newton%27s_method); we just apply them in different ways. I got helpful feedback from the nerds that follow me. [Jeff Linderoth](https://twitter.com/#!/jefflinderoth) pointed to the recent book [Optimization for Machine Learning](http://mitpress.mit.edu/catalog/item/default.asp?ttype=2&tid=12674) by his colleague (et al) Stephen J. Wright at University of Wisconsin, Madison. From what I can tell, Wright is an OR guy in a computer scientists clothing. There's a [two-hour lecture](http://videolectures.net/nips2010_wright_oaml/) by Wright on the same topic that I look forward to watching. Jeff also pointed to the work of his colleague [Ben Recht](http://pages.cs.wisc.edu/~brecht/publications.html) who's looking at the optimization problems in ML from a theoretical standpoint. 

[Paul Kerl](https://twitter.com/#!/pykpyk) linked to [Jorge Nocedal](http://users.eecs.northwestern.edu/~nocedal/publications.html)'s work at Northwestern. Nocedal and Recht seem to have feet in both worlds. [John Myles White](https://twitter.com/johnmyleswhite) noted that the legendary optimizer Stephen Boyd came to the New York Academy of Science's Machine Learning event last year. I also came across a 2006 paper on [The Interplay of Optimization and Machine Learning Research](http://jmlr.csail.mit.edu/papers/volume7/MLOPT-intro06a/MLOPT-intro06a.pdf). The authors note some difference between an OR and ML perspective on optimization:

> We observe that the qualities of good optimization algorithms from the machine learning and optimization perspectives can be quite different. Mathematical programming puts a premium on accuracy, speed, and robustness. Since generalization is the bottom line in machine learning and training is normally done off-line, accuracy and small speed improvements are of little concern in machine learning. Machine learning prefers simpler algorithms that work in reasonable computational time for specific classes of problems[^1optimization].

A bigger question might be where optimization lies as a discipline. Since I've been in OR, I've always considered optimization as a subfield of OR. But as I read applied OR literature, I find it jarring to see the details of _solving_ a difficult optimization problem mixed with the application of the solution to a real world problem. Of course, both ML and OR require practitioners to understand how the algorithms work. Optimization problems are hard, and a black box solution rarely works for any of us. But perhaps optimization will become a field of its own that OR and ML can both feed from instead of the two working independently.

[^1optimization]: I haven't read the whole paper (that's from the abstract), but I'm not entirely convinced that is true. Modern machine learning often requires large scale problems to be solved quickly on-line, while optimizers often solve a problem  offline and speed is negotiable.
