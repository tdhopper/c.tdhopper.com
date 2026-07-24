---
title: "When to Transplant: Value Iteration and Optimal Stopping"
date: 2011-12-08
slug: transplant-value-iteration
math: true
categories:
  - Article
tags:
  - operations-research
  - reinforcement-learning
  - dynamic-programming
  - mathematica
description: "A stylized Markov decision process from a healthcare-optimization seminar, solved by value iteration: why the healthiest patient on the list should keep waiting."
---

<link rel="stylesheet" href="/css/mdp-viz.css">

Notes from ISE 789, the healthcare-optimization seminar I am taking this term at NC State. We keep circling a small, stylized model of a hard question: if you are on a transplant waiting list, when should you accept an organ rather than hold out for a better moment? The model is a toy, but the machinery behind it, [value iteration](https://en.wikipedia.org/wiki/Markov_decision_process) on a Markov decision process, is the same dynamic programming that scales up to real sequential-decision problems. The math below is solved live, not baked in.

## The model

The patient occupies one of five states. Three describe pre-transplant health, from **Good** to **Fair** to **Poor**. Two are absorbing: **Transplanted** (the organ has been accepted) and **Death**.

Each period the patient chooses one of two actions:

- **Wait.** Stay on the list and live another period. Reward $r = 17$. Health may hold, decline, or, at worst, end in death.
- **Transplant now.** Accept an organ. The reward is larger the healthier the patient, $100$, $75$, or $60$ from Good, Fair, and Poor. The process then ends.

{{< mdpfig >}}

Waiting moves the patient between health states, or to death, with these probabilities:

| From \ to | Good | Fair | Poor | Death |
|---|---|---|---|---|
| **Good** | 0.80 | 0.10 | 0.05 | 0.05 |
| **Fair** | 0.10 | 0.20 | 0.40 | 0.30 |
| **Poor** | 0.05 | 0.05 | 0.10 | 0.80 |

Transplanting sends any health state to **Transplanted** with probability 1. Future rewards are discounted by $\lambda = 0.95$ per period.

## Solving it by value iteration

The optimal value of a state satisfies the Bellman optimality equation: the best action is the one whose immediate reward plus discounted expected future value is largest.

$$V(s) = \max_{a \in \{\text{wait},\, \text{transplant}\}} \left[\, r(s, a) + \lambda \sum_{s'} P(s' \mid s, a)\, V(s') \,\right]$$

Value iteration turns this equation into an algorithm. Start from $V_0 = 0$ and apply the right-hand side as an update, $V_{k+1} = \mathcal{T} V_k$. Because $\lambda < 1$, the update $\mathcal{T}$ is a contraction, so the $V_k$ converge to the unique fixed point $V^\star$ regardless of where they start. The optimal policy reads off greedily: in each state, pick the action attaining the maximum.

## The result: the healthiest patient waits

Value iteration converges to

$$V^\star = (\,112.40,\ 75,\ 60,\ 0,\ 0\,), \qquad \pi^\star = (\,\text{wait},\ \text{transplant},\ \text{transplant}\,).$$

The Fair and Poor states transplant immediately: their values equal the transplant payoffs $75$ and $60$ exactly, because acting now is best and the process ends. The interesting state is **Good**. Its value, $112.40$, is larger than the $100$ it would earn by transplanting today:

$$\begin{aligned}
Q(\text{Good}, \text{wait}) &= 17 + 0.95\big(0.8 \cdot 112.40 + 0.1 \cdot 75 + 0.05 \cdot 60 + 0.05 \cdot 0\big) = 112.40, \\
Q(\text{Good}, \text{transplant}) &= 100, \qquad\text{so waiting wins.}
\end{aligned}$$

That gap is the **option value of waiting**. A healthy patient is likely to stay healthy, collecting the $17$ per-period reward and keeping the choice open, so holding the organ in reserve beats spending it now. This is a [control-limit policy](https://en.wikipedia.org/wiki/Optimal_stopping): wait while you are above a health threshold, act once you cross it. Such thresholds show up throughout optimal stopping, from equipment replacement to exercising an option.

## Play it yourself

The numbers make the case, but the tradeoff is easier to feel than to read. You are the patient, starting in Good health. Each period you choose: wait for a better moment, or accept the organ in front of you. The panel shows the odds you face and what the optimal policy would do; your job is to beat its long-run average of 112.40. Wait too long in a declining state and you will learn firsthand why the threshold exists.

<div data-mdp="play"></div>

## What the discount factor decides

The whole story hinges on how much the future is worth. The discount factor $\lambda$ trades immediate payoff against the option value of waiting. Drag it and watch the policy move: a patient future keeps Good on the list, while a heavily discounted future tips every state toward transplanting now.

<div data-mdp="discount"></div>

I built the model in Mathematica for the seminar and explored the policy with an interactive `Manipulate`; the playable version here tells the same story. The interaction is the teaching: the optimal policy is three lines of algebra, but having to choose, and sometimes losing a patient to waiting, makes the control limit feel earned. For the theory behind scaling these ideas well past five states, Warren Powell's *Approximate Dynamic Programming* is where I first met the subject.

<script src="/js/mdp-viz.js" defer></script>
