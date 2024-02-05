---
title: Entropy of a Discrete Probability Distribution
date: Mon, 05 Sep 2016 16:05:00 +0000
math: true
---
Supposed we have a discrete set of possible events $1,\ldots, n$ that occur
with probabilities $(p_1, p_2, ..., p_n)$. Claude Shannon asked the question

> Can we find a measure of how much "choice" is involved in the selection of
> the event or of how uncertain we are of the outcome?

For example, supposed we have coin that lands on heads with probability $p$
and tails with probability $1-p$. If $p=1$, the coin always lands on heads.
Since there is no uncertainty, we might want to say the uncertainty is 0.
However, if the coin is fair and $p=0.5$, we maximize our uncertainty: it's a
complete tossup whether the coin is heads or tails. We might want to say the
uncertainty in this case is 1.

In general, Shannon wanted to devise a function $H(p_1, p_2, ..., p_n)$
describing the uncertainty of an arbitrary set of discrete events (i.e. a
$n$-sided die). He thought that "it is reasonable" that $H$ should have three
properties:

First, $H$ should be a continuous function of each $p_i$. A small change in a
single probability should result in a similarly small change in the entropy
(uncertainty).

Second, If each event is equally likely ($p_i=1/n$), $H$ should increase as a
function of $n$: the more events there are, the more uncertain we are.

Finally, entropy should be recursive with respect to independent events.
Supposed we generate a random variable $x$ by the following process: Flip a
fair coin. If it is heads, $x=0$. If the flip was tails, flip the coin again.
If the second flip is heads, $x=1$, if tails $x=2$.

We can compute the entropy as $H(p_0=1/2, p_1=1/4, p_2=1/4)$. However, the
independence property tells us that this relationship should hold:



![](https://images.squarespace-cdn.com/content/v1/5ea0e0117d85a34f661e1b52/1588341138162-P2GS5THZQ6C98PY88Q65/2020-05-01+at+9.52.09+AM.png)



As [David MacKay
explains](http://www.inference.phy.cam.ac.uk/itprnn/book.pdf), this is the
general claim that

![](https://images.squarespace-cdn.com/content/v1/5ea0e0117d85a34f661e1b52/1588341411740-U4LE87O2D1H952IP5OH1/2020-05-01+at+9.56.41+AM.png)

Shannon showed that given these three assumptions, there is unique for that
$H$ must take:



![](https://images.squarespace-cdn.com/content/v1/5ea0e0117d85a34f661e1b52/1588341466171-X77Z3ODCI1DOT2A27RZI/2020-05-01+at+9.57.38+AM.png)



He named this measure of uncertainty _entropy_ , because the form of $H$ bears
striking similarity to that of [Gibbs
Entropy](https://en.wikipedia.org/wiki/Entropy_\(statistical_thermodynamics\)#Gibbs_entropy_formula)
in statistical thermodynamics.

Shannon observes that $H$ has many other interesting properties:

  1. Entropy $H$ is 0 if and only if exactly one event has probability 1 and the rest have probability 0. (Uncertainty vanishes only when we are certain about the outcomes.)
  2. Entropy $H$ is maximized when the $p_i$ values are equal.
  3. The joint entropy of two events is less than or equal the sum of the individual entropies. $H(x, y)=H(x)+H(y)$ only when $x$ and $y$ are independent events.

You can read more about this in Shannon's seminal paper [A Theory of
Mathematical
Communication](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6773024).

* * *

Interestingly, [Caianiello and Aizerman
say](https://books.google.com/books?id=ak6qCAAAQBAJ&lpg=PP1&ots=bzAoIDJk1K&dq=Topics%20in%20the%20General%20Theory%20of%20Structures&pg=PA200#v=onepage&q=cross%20entropy&f=false)
the name entropy is thanks to von Neumann who said

> You should call it entropy, for two reasons. In the first place your
> uncertainty function has been used in statistical mechanics under that name,
> so it already has a name. In the second place, and more important, nobody
> knows what entropy really is, so in a debate you will always have the
> advantage.

They argue that the name "uncertainty" would have been much more helpful since
"Shannon entropy is simply and avowedly the 'measure of the uncertainty
inherient in a pre-assigned probability scheme.'"
