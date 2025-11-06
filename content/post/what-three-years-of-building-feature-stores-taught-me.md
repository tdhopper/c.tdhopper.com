---
title: What Three Years of Building Feature Stores Taught Me
date: 2025-11-06T12:00:00.000Z
description: Hard-earned lessons from rebuilding a feature platform for batch and streaming ML at Varo Bank
categories: Article
draft: true
---

I spent three years at Varo Bank helping the Machine Learning Platform team rebuild their platform for batch and streaming machine learning features. Much of my career has been focused on helping machine learning teams get the data they need, in the place they need it, in the form they need it. This was a chance to tackle that challenge head-on. Here are the hard-earned lessons for anyone building feature stores.

## **Point-in-time joins are the heart of correctness**

Getting historically accurate data as of a specific time while also serving up-to-date real-time data is deceptively difficult. But it's absolutely critical for preventing data leakage and ensuring reliable predictions. The computational complexity of real-time joins can be a real barrier - you often need to write features that are not just logically correct but computationally feasible.

## **Training-serving skew can kill your models**

Avoiding training-serving skew requires more than just correct point-in-time joins. It demands careful education of your researchers and ML practitioners on how to use the tools correctly. Even the best platform can't prevent misuse if users don't understand the pitfalls.

## **Feature discoverability unlocks reuse**

A centralized feature store becomes valuable not just for machine learning but across the organization. Good documentation and discoverability - both at the feature level and at the data warehouse level - are essential for teams to find and reuse existing features instead of recreating them. This multiplies the value of every feature created.

## **Governance keeps the chaos in check**

You need clear rules about who can modify which data, who can change feature names, and who can create new features in specific domains. Without governance, the system quickly becomes unmanageable. Platform teams should enable democratization of feature creation while maintaining guardrails.

## **Monitoring makes your platform trustworthy**

Data observability - detecting drift, staleness, and missing updates - is what makes a feature platform reliable. Teams need confidence that the features they depend on are fresh and correct. Without monitoring, that trust evaporates quickly.

## **Unified batch and streaming is worth the effort**

There's tremendous value in having a unified platform where features are consistently defined and can be accessed in either batch or real-time. Features you think you'll only use in batch mode often become surprisingly useful in real-time systems, sometimes even outside of machine learning. Implementing this so you avoid multiple code paths is valuable but challenging.

## **ML platforms aren't just data engineering**

Feature platforms have specific concerns that distinguish them from general data engineering platforms. The focus on data leakage prevention, point-in-time correctness, and training-serving consistency requires specialized thinking. You can't simply treat ML data like any other data pipeline.

## **Metadata and lineage matter**

Tracking where features come from and how they're built is essential for debugging, compliance, and understanding downstream impacts. When something goes wrong, you need to be able to trace the problem back to its source quickly.

## **Set clear availability expectations**

Teams need a common understanding of feature availability, especially in real-time settings. What's the latency between an event happening and that event being represented in your feature data? Making this explicit prevents misaligned expectations and enables teams to design systems appropriately.

## **Tooling enforces quality**

There's enormous value in good developer tooling: precommit hooks, tests, and CI systems that do automated checks. These tools can enforce style guidelines, validate basic correctness, and catch issues before they reach production. The platform team shouldn't be responsible for ensuring contributed data is correct - automate what you can.

## **Cost management isn't optional**

Optimizing joins and materializations keeps your platform sustainable. Without careful attention to cost, the computational demands of point-in-time joins and real-time serving can blow your budget. Design with efficiency in mind from the start.

## **Democratization should be intentional**

Democratization of feature creation is possible even in unified batch and streaming systems, and it should be a goal. Different teams across the company can safely contribute features if you build the right guardrails and tooling. But platform teams need to enforce adoption - don't deploy models that bypass the platform.

## **Customer-centricity is everything**

Platform teams must have a customer-centric mindset and stay close to their end users. Build a tool that actually solves the problems they have, not the problems you think they should have. This partnership approach is what makes a feature platform successful.

---

Feature stores are more than just data pipelines - they're about making machine learning reliable, scalable, and accessible across an organization. These lessons made me a better platform builder and leader, and I hope they help you avoid some of the pitfalls I encountered along the way.
