---
title: What Three Years of Building Feature Stores Taught Me
date: 2025-11-06T12:00:00.000Z
description: Hard-earned lessons from rebuilding a feature platform for batch and streaming ML at Varo Bank
categories: Article
draft: true
---

I spent three years at Varo Bank helping the Machine Learning Platform team rebuild their platform for batch and streaming machine learning features. Much of my career has been focused on helping machine learning teams get the data they need, in the place they need it, in the form they need it. This was a chance to tackle that challenge head-on. Here are the hard-earned lessons for anyone building feature stores.

## **Point-in-time correctness is harder than it looks**

Getting historically accurate data as of a specific time while also serving up-to-date real-time data is deceptively difficult. It's not just about writing a temporal join - you need proper event time semantics (not just query time), handling of late-arriving data, clear TTL and retention policies, and consistency guarantees in distributed systems. Most teams fail in the implementation details, not in understanding the concept. The computational complexity of these joins at scale can be a real barrier.

## **Training-serving skew comes from transformation code duplication**

The most common cause of training-serving skew isn't point-in-time join problems - it's duplicating feature transformation logic between training and serving environments. If you're doing any feature engineering beyond simple lookups, keeping transformation logic identical is harder than getting point-in-time correctness right. This demands careful education of ML practitioners on how to use the tools correctly, but even the best education can't prevent misuse if the platform allows it.

## **Schema evolution will break things**

You can't avoid schema changes, and they're one of the top operational pain points. Features evolve, data types change, new fields get added. Without a clear strategy for schema versioning and evolution, you'll constantly be putting out fires. This ties directly into governance and lineage - you need to know who's consuming what version of which features before you can safely make changes.

## **The cold start problem is real**

When you deploy a new feature, you immediately face the cold start problem. How do you backfill historical data? What's your strategy for generating training data when the feature didn't exist six months ago? This isn't just a technical challenge - it affects how quickly teams can iterate and what kinds of features are feasible to build.

## **Feature discoverability unlocks reuse**

A centralized feature store becomes valuable not just for machine learning but across the organization. Good documentation and discoverability - both at the feature level and at the data warehouse level - are essential for teams to find and reuse existing features instead of recreating them. This multiplies the value of every feature created and reduces the maintenance burden.

## **Governance keeps the chaos in check**

You need clear rules about who can modify which data, who can change feature names, and who can create new features in specific domains. Without governance, the system quickly becomes unmanageable. The challenge is enabling democratization of feature creation while maintaining guardrails that prevent chaos.

## **ML monitoring is different from data monitoring**

Data observability - detecting drift, staleness, and missing updates - is table stakes. But ML-specific monitoring goes further: distribution shift detection, feature correlation changes, and label leakage detection. Teams need confidence that the features they depend on are not only fresh but behaving correctly in the context of their models. Without ML-aware monitoring, subtle issues can degrade model performance for weeks before anyone notices.

## **Event time vs processing time matters**

Teams need a common understanding of feature availability, especially in real-time settings. But it's not just about latency - it's about event time versus processing time semantics. When you query for "the features as of timestamp T," are you getting the data that was available at time T, or the data whose events occurred at time T? This distinction is fundamental to correct temporal joins and real-time feature computation.

## **Unified batch and streaming requires operational maturity**

There's tremendous value in having features consistently defined for both batch and real-time access. But the reality is that most unified systems (Flink, Beam, etc.) still require different execution engines and operational expertise. The goal of avoiding multiple code paths for feature logic is achievable, but don't underestimate the operational complexity of running both a batch system and a streaming system in production.

## **ML platforms aren't just data engineering**

Feature platforms have specific concerns that distinguish them from general data engineering platforms. The focus on data leakage prevention, point-in-time correctness, and training-serving consistency requires specialized thinking. You can't simply treat ML data like any other data pipeline.

## **Metadata and lineage are debugging lifelines**

Tracking where features come from and how they're built is essential for debugging, compliance, and understanding downstream impacts. When something goes wrong - and it will - you need to be able to trace the problem back to its source quickly. Without good lineage tracking, debugging becomes detective work.

## **Tooling enforces what platforms guarantee**

There's enormous value in good developer tooling: precommit hooks, tests, and CI systems that do automated checks. These tools enforce style guidelines and catch basic errors before production. But be clear about responsibilities: the platform ensures infrastructure correctness (joins, freshness, consistency) while feature owners ensure semantic correctness (business logic, data quality). Confusing this boundary creates a liability gap.

## **Cost management means thinking about serving**

Cost isn't just about batch joins and materializations. The bigger driver is usually online feature serving at scale - the storage and compute for real-time lookups typically dwarf batch join costs. Without careful attention to serving costs and careful selection of what needs to be real-time versus what can be precomputed, the computational demands can blow your budget.

## **Democratization and enforcement create tension**

Democratization of feature creation is a worthy goal - different teams across the company should be able to safely contribute features with the right guardrails and tooling. But requiring teams to use the platform (not deploying models that bypass it) creates tension with customer-centricity. The way to resolve this: make the platform so valuable and easy to use that teams want to adopt it, then enforce adoption to prevent the chaos of fragmented tooling. Build carrots first, then use the stick.

## **Customer-centricity is non-negotiable**

Platform teams must stay close to their end users. Build a tool that actually solves the problems they have, not the problems you think they should have. Listen to their pain points, understand their workflows, and iterate based on real usage patterns. A technically perfect platform that nobody wants to use is a failure.

---

Feature stores are more than just data pipelines - they're about making machine learning reliable, scalable, and accessible across an organization. They sit at the intersection of data engineering, ML engineering, and platform engineering, requiring you to get all three right. These lessons made me a better platform builder and leader, and I hope they help you avoid some of the pitfalls I encountered along the way.
