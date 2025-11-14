---
title: Lessons from Developing a Machine Learning Feature Platform
date: 2024-11-14T12:00:00.000-05:00
description: Hard-earned lessons from rebuilding a feature platform for offline
  and online machine learning
categories: Article
image: /images/featureplat.png
---
Much of my career has been focused on helping machine learning researchers get the data they need, where they need it, and when they need it. 
Over the past three years, I helped lead the development of a new machine learning feature platform a the bank startup where I worked. 
Our platform could serve a variety of machine learning and analytics applications by enabling creation of custom data transformations to generate batch and real time data for model training and inference.

Here are some lessons from my experience:

## Point-in-time correctness is harder than it looks

To train machine learning @@@@


## Event time vs processing time matters

Teams need a common understanding of feature availability and event time versus processing time semantics. When you query for "the features as of timestamp T," are you getting the data that was available at time T, or the data whose events occurred at time T? This distinction is fundamental to correct temporal joins and real-time feature computation.

## Reduce skew by reducing code duplication

Many machine learning applications require offline data retrieve in batch to train the models but then up-to-date, realtime features for model inference. Because of technical challenges, these two sources are often provided through unique code paths. As soon as feature logic is reimplemented, you open the door to subtle (or not so subtle) bugs that can skew the features and the resulting model predictions. If you're doing online and offline retrieval, do whatever you must to have single code paths for the features.

## Unified batch and streaming requires operational maturity

The reality is that most unified systems (Flink, Beam, etc.) still require different execution engines and operational expertise. The goal of avoiding multiple code paths for feature logic is achievable, but don't underestimate the operational complexity of running both a batch system and a streaming system in production.

## Feature discoverability unlocks reuse

A centralized feature store becomes valuable not just for machine learning [but in rules engines and analytics](https://tdhopper.com/talks/streaming-machine-learning/) as well. Well documented and discoverable data in the feature store and the upstream data warehouse are essential for teams to find and reuse features instead of recreating them. This multiplies the value of every feature created and reduces the maintenance burden.

## Governance keeps reigns in complexity

You need clear rules about who can modify which data, who can change feature names, and who can create new features in specific domains. Without governance, the system quickly becomes unmanageable. The feature store platform team should democratize feature creation while maintaining guardrails that prevent chaos.

## Metadata and lineage are debugging lifelines

Tracking where features come from and how they're built is essential for debugging, compliance, and understanding downstream impacts. When (not _if_) something goes wrong, you need to be able to trace the problem back to its source quickly. 

## Monitoring and alerting are essential

As with governance, monitoring ensures the quality and reliability of the platform which is essential for building trust of your internal users and solving your business problems. Detecting drift, staleness, missing updates are essential. Without ML-aware monitoring, subtle issues can degrade model performance for weeks before anyone notices.

## ML platforms aren't just data engineering

Feature platforms have specific concerns that distinguish them from general data engineering platforms. The focus on data leakage prevention, point-in-time correctness, and training-serving consistency requires specialized thinking. You can't simply treat ML data like any other data pipeline.

## Tooling enforces what platforms guarantee

There's enormous value in good developer tooling: precommit hooks, tests, and CI systems that do automated checks. These tools enforce style guidelines and catch basic errors before production. But be clear about responsibilities: the platform team ensures infrastructure correctness (joins, freshness, consistency) while feature owners ensure semantic correctness (business logic, data quality). Confusing this boundary creates a liability gap.

## Enforcement create tension

Requiring teams to use the platform (not deploying models that bypass it) creates tension with customer-centricity. The way to resolve this: make the platform so valuable, reliable, and easy to use that teams want to adopt it, then enforce adoption to prevent the chaos of fragmented tooling. Build carrots first, then use the stick.

## Cost management means thinking about serving

In batch feature creation, your users will need to learn to define their features efficiently to avoid throwing away cost on expensive compute. On the other hand, the storage and compute for real-time lookups typically dwarf batch join costs. Without careful attention to serving costs and careful selection of what needs to be real-time versus what can be precomputed, the computational demands can blow your budget.

## Customer-centricity is non-negotiable

Platform teams must stay close to their end users. Build a tool that actually solves the problems they have, not the problems you think they should have. Listen to their pain points, understand their workflows, and iterate based on real usage patterns. A technically perfect platform that nobody wants to use is a failure.
