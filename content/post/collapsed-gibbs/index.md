---
title: "Collapsed Gibbs Sampling for Bayesian Mixture Models (with a Nonparametric Extension)"
date: 2015-10-14
slug: collapsed-gibbs
math: true
categories:
  - Article
tags:
  - bayesian-statistics
  - dirichlet-processes
  - python
description: "Derivation of a collapsed Gibbs sampler for a finite mixture model with a uniform Dirichlet prior, and extension to the Dirichlet Process Mixture Model."
image: /images/collapsed-gibbs-mr-men.png
---

[In an earlier notebook](/blog/mixture-model/), I showed how we can fit the parameters of a Bayesian mixture model using a Gibbs sampler. The sampler defines a Markov chain that, in steady state, samples from the posterior distribution of the mixture model. To move the chain forward by one step we:

* Sample the cluster assignment $z_i$.
* Sample the mixture weights $\pi$
* Sample the cluster means $\mu_n$.

It turns out that we can derive a Gibbs sampler that _just_ samples the assignments instead of the mixture weights and cluster means. This is known as a _collapsed_ Gibbs sampler. If we integrate out the cluster means $\theta_k$ and mixture weights from the margial distribution of cluster assignment
$$p(z_i=k \,|\,
        z_{\neg i}, \pi,
        \theta_1, \theta_2, \theta_3, \sigma, \mathbf{x}, \alpha
        )$$ we are left with
$$p(z_i\,|\, z_{\neg i}, \sigma, \mathbf{x}, \alpha).$$

By the conditional independence, we can factorize this marginal distribution
$$
\begin{align}
p(z_i=k\,|\, z_{\neg i}, \sigma, \mathbf{x}, \alpha)
    &\propto
    p(z_i=k\,|\, x_i, z_{\neg i}, \sigma, \mathbf{x}_{\neg i}, \alpha)\\
    &=
    p(z_i=k\,|\, z_{\neg i}, \sigma, \mathbf{x}_{\neg i}, \alpha)
    p(x_i \,|\, z, \sigma, \mathbf{x}_{\neg i}, \alpha)\\
    &=
    p(z_i=k \,|\, z_{\neg i}, \alpha) p(x_i \,|\, z, \mathbf{x}_{\neg i}, \sigma)\\
    &=
    p(z_i=k \,|\, z_{\neg i}, \alpha)p(x_i \,|\, z_i=k, z_{\neg i}, x_{\neg_i}, \sigma)\\
    &=
    p(z_i=k \,|\, z_{\neg i}, \alpha)p(x_i \,|\, \left\{x_j \,|\, z_j=k, j\neq i\right\}, \sigma).
\end{align}
$$

The two terms have intuitive explanations. $p(z_i = k \,|\, z_{\neg i}, \alpha)$ is the probability point $x_i$ will be assigned to component $k$ given the current assignments. Because we are using a symmetric Dirichlet prior, this is the predictive likelihood of a Dirichlet-categorical distribution. This is given by:
$$p(z_i=k \,|\, z_{\not i}, \alpha)=
    \frac{N_k^{-i}+\alpha / K}{N-1+\alpha}$$
 where $N_k^{-i}=\sum_{j\neq i} \delta(z_j, k)$ is the number of observation assigned to $k$ (except $x_i$). We also need to define $\bar{x}_k^{-i}$ to be the mean of all observations assigned to component $k$ (except $x_i$).

The second term is the predictive likelihood that point $x_i$ is distributed according to cluster $k$ (given the data currently in cluster $k$). For our example, we are assuming unknown cluster means are distributed according to a normal distribution with hyperparameter mean $\lambda_1$ and variance $\lambda_2^2$ and known cluster variance $\sigma^2$.

Thus,
$$
\begin{align}
p(x_i \,|\, \left\{x_j \,|\, z_j=k, j\neq i\right\}, \sigma)
    &= \mathcal{N}(x_i \,|\, \mu_k, \sigma_k^2+\sigma^2)
\end{align}
    $$
where
$$\sigma_k^2 = \left( \frac{N_k^{-i}}{\sigma^2} + \frac{1}{\lambda_2^2} \right)^{-1}$$
and
$$\mu_k = \sigma_k^2 \left(
    \frac{\lambda_1}{\lambda_2^2}+\frac{N_k^{-i}\cdot \bar{x}_k^{-i}}{\sigma^2}
\right).$$
This is derived in Kevin Murphey's fantastic article [Conjugate Bayesian analysis of the Gaussian distribution](http://www.cs.ubc.ca/~murphyk/Papers/bayesGauss.pdf).


At each step of the collapsed sampler, we sample each $z_i$ as follows:

* For each cluster $k$, compute $$f_k(x_i) =p(x_i \,|\, \left\{x_j \,|\, x_j=k, j\neq i\right\}, \lambda).$$ This is the predictive probability that $x_i$ is in cluster $k$ given the data currently assigned to that cluster.
* Sample $$z_i\sim \frac{1}{Z_i}\sum_{k=1}^K(N_k^{-i}+\alpha/K)f_k(x_i)\delta(z_i,k)$$

where the normalizing constant is $Z_i=\sum_{k=1}^K(N_k^{-i}+\alpha/K)f_k(x_i)$.

Let's write code for this Gibbs sampler!


```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from collections import namedtuple, Counter
from scipy import stats
from numpy import random
```


```python
np.random.seed(12345)
```

First, load the same dataset we used [previously](/blog/mixture-model/):


```python
data = pd.Series.from_csv("clusters.csv")
_=data.hist(bins=20)
```


![Histogram of clustered data](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_6_0.png)


Again, we want to define a state object and a function for updating the sufficient statistics of the state.


```python
SuffStat = namedtuple('SuffStat', 'theta N')

def initial_state(num_clusters=3, alpha=1.0):
    cluster_ids = range(num_clusters)

    state = {
        'cluster_ids_': cluster_ids,
        'data_': data,
        'num_clusters_': num_clusters,
        'cluster_variance_': .01,
        'alpha_': alpha,
        'hyperparameters_': {
            "mean": 0,
            "variance": 1,
        },
        'suffstats': {cid: None for cid in cluster_ids},
        'assignment': [random.choice(cluster_ids) for _ in data],
        'pi': {cid: alpha / num_clusters for cid in cluster_ids},
    }
    update_suffstats(state)
    return state

def update_suffstats(state):
    for cluster_id, N in Counter(state['assignment']).iteritems():
        points_in_cluster = [x
            for x, cid in zip(state['data_'], state['assignment'])
            if cid == cluster_id
        ]
        mean = np.array(points_in_cluster).mean()

        state['suffstats'][cluster_id] = SuffStat(mean, N)
```

Next we define functions to compute the two terms of our marginal distribution over cluster assignments (as we derived above).


```python
def log_predictive_likelihood(data_id, cluster_id, state):
    """Predictive likelihood of the data at data_id is generated
    by cluster_id given the currenbt state.

    From Section 2.4 of
    http://www.cs.ubc.ca/~murphyk/Papers/bayesGauss.pdf
    """
    ss = state['suffstats'][cluster_id]
    hp_mean = state['hyperparameters_']['mean']
    hp_var = state['hyperparameters_']['variance']
    param_var = state['cluster_variance_']
    x = state['data_'][data_id]
    return _log_predictive_likelihood(ss, hp_mean, hp_var, param_var, x)


def _log_predictive_likelihood(ss, hp_mean, hp_var, param_var, x):
    posterior_sigma2 = 1 / (ss.N * 1. / param_var + 1. / hp_var)
    predictive_mu = posterior_sigma2 * (hp_mean * 1. / hp_var + ss.N * ss.theta * 1. / param_var)
    predictive_sigma2 = param_var + posterior_sigma2
    predictive_sd = np.sqrt(predictive_sigma2)
    return stats.norm(predictive_mu, predictive_sd).logpdf(x)


def log_cluster_assign_score(cluster_id, state):
    """Log-likelihood that a new point generated will
    be assigned to cluster_id given the current state.
    """
    current_cluster_size = state['suffstats'][cluster_id].N
    num_clusters = state['num_clusters_']
    alpha = state['alpha_']
    return np.log(current_cluster_size + alpha * 1. / num_clusters)
```

Given these two functions, we can compute the posterior probability distribution for assignment of a given datapoint. This is the core of our collapsed Gibbs sampler.

To simplify the computation of things like $N_k^{-i}$ (where we remove point $i$ from the summary statistics), we create two simple functions to add and remove a point from the summary statistics for a given cluster.


```python
def cluster_assignment_distribution(data_id, state):
    """Compute the marginal distribution of cluster assignment
    for each cluster.
    """
    scores = {}
    for cid in state['suffstats'].keys():
        scores[cid] = log_predictive_likelihood(data_id, cid, state)
        scores[cid] += log_cluster_assign_score(cid, state)
    scores = {cid: np.exp(score) for cid, score in scores.iteritems()}
    normalization = 1.0/sum(scores.values())
    scores = {cid: score*normalization for cid, score in scores.iteritems()}
    return scores

def add_datapoint_to_suffstats(x, ss):
    """Add datapoint to sufficient stats for normal component
    """
    return SuffStat((ss.theta*(ss.N)+x)/(ss.N+1), ss.N+1)


def remove_datapoint_from_suffstats(x, ss):
    """Remove datapoint from sufficient stats for normal component
    """
    return SuffStat((ss.theta*(ss.N)-x*1.0)/(ss.N-1), ss.N-1)
```

Finally, we're ready to create a function that takes a Gibbs step on the state. For each datapoint, it
1. Removes the datapoint from its current cluster.
2. Computes the posterior probability of the point being assigned to each cluster (given the other current assignments).
3. Assigns the datapoint to a cluster sampled from this probability distribution.


```python
def gibbs_step(state):
    pairs = zip(state['data_'], state['assignment'])
    for data_id, (datapoint, cid) in enumerate(pairs):

        state['suffstats'][cid] = remove_datapoint_from_suffstats(datapoint,
                                                                  state['suffstats'][cid])
        scores = cluster_assignment_distribution(data_id, state).items()
        labels, scores = zip(*scores)
        cid = random.choice(labels, p=scores)
        state['assignment'][data_id] = cid
        state['suffstats'][cid] = add_datapoint_to_suffstats(state['data_'][data_id], state['suffstats'][cid])
```

Here's our old function to plot the assignments.


```python
def plot_clusters(state):
    gby = pd.DataFrame({
            'data': state['data_'],
            'assignment': state['assignment']}
        ).groupby(by='assignment')['data']
    hist_data = [gby.get_group(cid).tolist()
                 for cid in gby.groups.keys()]
    plt.hist(hist_data,
             bins=20,
             histtype='stepfilled', alpha=.5 )
```

Randomly assign the datapoints to a cluster to start.


```python
state = initial_state()
plot_clusters(state)
```


![Random initial assignments](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_18_0.png)


Look what happens to the assignments after just one Gibbs step!


```python
gibbs_step(state)
plot_clusters(state)
```


![Assignments after one Gibbs step](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_20_0.png)


Two:


```python
gibbs_step(state)
plot_clusters(state)
```


![Assignments after two Gibbs steps](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_22_0.png)


After just two steps, our assignments look _really_ good. We can run it a few more times and see the assignments again.


```python
for _ in range(20): gibbs_step(state)
plot_clusters(state)
```


![Assignments after 22 Gibbs steps](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_24_0.png)


### Nonparametric Mixture Models!

It turns out, the collapsed Gibbs sampler for mixture models is almost identical in the context of a _nonparametric_ model. This model uses a _Dirichlet process prior_ instead of a _Dirichlet distribution prior_. It doesn't require us to specify how many clusters we are looking for in our data.

The cluster assignment score changes slightly. It is proportional to $N_k^{-i}$ for each known cluster. We assign a datapoint to a _new_ cluster with probability proportional to $\alpha$ (which is now the DP dispersion parameter).


```python
def log_cluster_assign_score_dp(cluster_id, state):
    """Log-likelihood that a new point generated will
    be assigned to cluster_id given the current state.
    """
    if cluster_id == "new":
        return np.log(state["alpha_"])
    else:
        return np.log(state['suffstats'][cluster_id].N)
```

The predictive likelihood remains the same for known clusters. However, we need to know the likelihood of assigning a datapoint to a new cluster. In this case, we fall back on the hyperparameters to get:

$$
\begin{align}
p(x_i \,|\, z, x_{\neg_i}, \sigma)
    &= \mathcal{N}(x_i \,|\, \lambda_1, \lambda_2^2+\sigma^2)
\end{align}
    $$


```python
def log_predictive_likelihood_dp(data_id, cluster_id, state):
    """Predictive likelihood of the data at data_id is generated
    by cluster_id given the currenbt state.

    From Section 2.4 of
    http://www.cs.ubc.ca/~murphyk/Papers/bayesGauss.pdf
    """
    if cluster_id == "new":
        ss = SuffStat(0, 0)
    else:
        ss = state['suffstats'][cluster_id]

    hp_mean = state['hyperparameters_']['mean']
    hp_var = state['hyperparameters_']['variance']
    param_var = state['cluster_variance_']
    x = state['data_'][data_id]
    return _log_predictive_likelihood(ss, hp_mean, hp_var, param_var, x)
```

Given this, we can define the marginal distribution over cluster assignment. The only change is that the "`new`" state enters in the distribution.


```python
def cluster_assignment_distribution_dp(data_id, state):
    """Compute the marginal distribution of cluster assignment
    for each cluster.
    """
    scores = {}
    cluster_ids = state['suffstats'].keys() + ['new']
    for cid in cluster_ids:
        scores[cid] = log_predictive_likelihood_dp(data_id, cid, state)
        scores[cid] += log_cluster_assign_score_dp(cid, state)
    scores = {cid: np.exp(score) for cid, score in scores.iteritems()}
    normalization = 1.0/sum(scores.values())
    scores = {cid: score*normalization for cid, score in scores.iteritems()}
    return scores
```

We also need to be able to create a new cluster when "`new`" is drawn, and destroy a cluster if its emptied.


```python
def create_cluster(state):
    state["num_clusters_"] += 1
    cluster_id = max(state['suffstats'].keys()) + 1
    state['suffstats'][cluster_id] = SuffStat(0, 0)
    state['cluster_ids_'].append(cluster_id)
    return cluster_id

def destroy_cluster(state, cluster_id):
    state["num_clusters_"] = 1
    del state['suffstats'][cluster_id]
    state['cluster_ids_'].remove(cluster_id)

def prune_clusters(state):
    for cid in state['cluster_ids_']:
        if state['suffstats'][cid].N == 0:
            destroy_cluster(state, cid)
```

Finally, we can define the `gibbs_step_dp` function. It's nearly identical to the earlier `gibbs_step` function except
* It uses `cluster_assignment_distribution_dp`
* It creates a new cluster when the sampled assignment is "`new`".
* It destroys a cluster any time it is emptied.

For clarity, I split out the code for sampling assignment to its own function.


```python
def sample_assignment(data_id, state):
    """Sample new assignment from marginal distribution.
    If cluster is "`new`", create a new cluster.
    """
    scores = cluster_assignment_distribution_dp(data_id, state).items()
    labels, scores = zip(*scores)
    cid = random.choice(labels, p=scores)
    if cid == "new":
        return create_cluster(state)
    else:
        return int(cid)

def gibbs_step_dp(state):
    """Collapsed Gibbs sampler for Dirichlet Process Mixture Model
    """
    pairs = zip(state['data_'], state['assignment'])
    for data_id, (datapoint, cid) in enumerate(pairs):
        state['suffstats'][cid] = remove_datapoint_from_suffstats(datapoint, state['suffstats'][cid])
        prune_clusters(state)
        cid = sample_assignment(data_id, state)
        state['assignment'][data_id] = cid
        state['suffstats'][cid] = add_datapoint_to_suffstats(state['data_'][data_id], state['suffstats'][cid])

```

This time, we will start by randomly assigning our data to two clusters.


```python
state = initial_state(num_clusters=2, alpha=0.1)
plot_clusters(state)
```


![Initial assignment to 2 clusters](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_36_0.png)


Here's what happens when we run our Gibbs sampler once.



```python
gibbs_step_dp(state)
plot_clusters(state)
```


![After one DP Gibbs step: 4 clusters](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_38_0.png)


We went from 2 to 4 clusters!

After 100 iterations:


```python
for _ in range(99): gibbs_step_dp(state)
plot_clusters(state)
```


![After 100 DP Gibbs iterations: 3 clusters](2015-10-14-collapsed-gibbs-sampling-for-mixture-models_41_0.png)


After 100 iterations, our assignment looks correct! We went back to 3 clusters.

We can sample the mixture weights, if we need them, using the "Conditional Distribution of Mixture Weights" derived [here](/blog/mixture-model/).


```python
ss = state['suffstats']
alpha = [ss[cid].N + state['alpha_'] / state['num_clusters_']
         for cid in state['cluster_ids_']]
stats.dirichlet(alpha).rvs(size=1).flatten()
```




    array([ 0.21330625,  0.29838101,  0.48831275])



We can also sample the cluster means using [the method we derived earlier](/blog/mixture-model/):


```python
for cluster_id in state['cluster_ids_']:
    cluster_var = state['cluster_variance_']
    hp_mean = state['hyperparameters_']['mean']
    hp_var = state['hyperparameters_']['variance']
    ss = state['suffstats'][cluster_id]

    numerator = hp_mean / hp_var + ss.theta * ss.N / cluster_var
    denominator = (1.0 / hp_var + ss.N / cluster_var)
    posterior_mu = numerator / denominator
    posterior_var = 1.0 / denominator

    mean = stats.norm(posterior_mu, np.sqrt(posterior_var)).rvs()
    print("cluster_id:", cluster_id, "mean", mean)

```

    cluster_id: 1 mean -0.0176257860235
    cluster_id: 2 mean -0.400581819532
    cluster_id: 3 mean 0.600302879661


Much thanks to Erik Sudderth's excellent introduction to nonparametric Bayes in [Chapter 2 of his dissertation](http://cs.brown.edu/~sudderth/papers/sudderthPhD.pdf). Algorithms 2.2 and 2.3 in that piece are the clearest formulation of collapsed Gibbs sampling for mixture models that I have come across.
