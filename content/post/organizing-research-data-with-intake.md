---
title: Organizing research data with Intake
date: 2021-11-02T12:20:00.000Z
description: How a simple data cataloging tool transformed our team's research process
tags:
  - Python
categories: Article
image: /images/shelves.png
---
As someone providing engineering and infrastructure support for a small data science team, I've seen firsthand how the right tool can dramatically improve team productivity. Our team recently discovered [Intake](https://intake.readthedocs.io/en/latest/), a data cataloging tool by Anaconda that transformed how we work with Python-based data science projects.

Like many data science teams, we deal with data arriving through various channels, e.g., batch data in AWS S3, email-attached spreadsheets, and transformations of existing datasets. Before implementing [Intake](https://intake.readthedocs.io/en/latest/), our data scientists faced challenges in accessing datasets. They needed to:

1. Know the dataset existed
2. Locate its specific storage location
3. Understand the download process
4. Determine which Python library and arguments were needed to open it

This cognitive overhead was taking valuable time away from actual data science work.

Intake offered us an elegant solution through its lightweight interface and plugin system. We packaged it into a pip-installable library containing our data catalog, allowing data scientists to access datasets easily. Instead of juggling multiple parameters and commands, they could now load data with a clean, intuitive syntax:

```python
catalog.category.dataset.read()
```

The beauty of this approach is that data scientists don't need to know the underlying S3 infrastructure; they can focus purely on their analytical work.

To make this system reliable, we implemented several key components:

* A YAML-based catalog definition system for organizing our data assets
* An internal Python package distributed through our private repository
* Nightly automated tests ensuring dataset accessibility
* A custom Intake plugin (which we open-sourced as [intake-pattern-catalog](https://github.com/DTN-Public/intake-pattern-catalog)) for handling parameterized file paths and versioned files

This seemingly simple change had profound effects on our workflow. It eliminated:

* Friction in data access
* Redundant boilerplate code
* Reliance on unwritten institutional knowledge
* The constant need to search StackOverflow for boto3 solutions

Most importantly, it shortened feedback loops - a critical factor in data science productivity - allowing our team to focus on model development rather than data access logistics.
