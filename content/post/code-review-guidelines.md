---
title: Code Review Guidelines for Data Science Teams
date: Fri, 03 Dec 2021 15:37:00 +0000
slug: code-review-guidelines
description: A proposed code review guideline for data science teams,
  emphasizing the benefits of code reviews, what they are not intended for, and
  offering advice for both submitting and reviewing pull requests.
tags:
  - python
categories:
  - Article 
image: /images/code-review.png
---
Over the last 6 years, I've been able to help the teams I have been part of
develop guidelines for code review. Many teams require "code review" without
putting any effort into establishing a common understanding of what that
means. This post is adapted from proposed guidelines I prepared for one of my
teams. Of course, you don't have to adopt _my_ guidelines for review, but I
would encourage your team to set aside some time to make sure you all mean the
same thing by "code review".

## What is a code review for?

Code review has multiple benefits and objectives including:

  * **Code correctness** : someone seeing your code with fresh eyes may help uncover bugs.

  * **Code familiarity** : reading one another's code keeps everyone familiar with the codebase.

  * **Design feedback** : a constantly evolving code base is a fight against complexity; reviewers can guide one another on keeping the codebase coherent and maintainable.

  * **Mutual learning** : the reviewer and author will inevitably learn from one another.

  * **Regression protection** : future contributors to the code base have checks against breaking essential functionality; importantly, _this reduces fear of making necessary improvements to the code_.

## What code reviews aren't

  * An opportunity for the reviewer to impose their idiosyncrasies.

  * An opportunity for the developer to push off responsibility (e.g. correctness) for their code to the reviewer.

  * An opportunity to demand perfection (Per [Google’s Code Review Guidelines](https://google.github.io/eng-practices/review/reviewer/standard.html): _A key point here is that there is no such thing as "perfect" code—there is only better code_ ).

## Opening Pull Requests

  * Take care to write informative commit messages. This helps your reviewer understand the decisions you made.

  * Consider your contribution in the broader context of the code base. Do you need to take extra steps to make the code healthier and manage complexity?

  * Keep pull requests short whenever possible. `git --shortstat origin/main` will show you the size of your branch 's diff from main; under 400 lines changed is a great goal.

  * Write a pull request description that sets your reviewer up for success by helping them understand what the PR intends to accomplish.

    * If you have a particularly complex PR, consider doing a code walk-through with a reviewer first.
  * New code should ordinarily come with new tests.

## Reviewing Pull Requests

  * Have a positive, constructive, helpful attitude.

  * Wait for continuous integration tasks to complete. Let the author resolve any test failures before beginning your review.

    * As much as possible, configure your continuous integration to enforce your team's style guidelines and look for line-level bugs. In Python, this might include running mypy, flake8, black, and isort. Automation like this has multiple benefits: they're often better than humans at this task, they reduce cognative load on the reviewer, and they reduce interpersonal tension that results from interviewers nitpicking code.
  * Things to evaluate:

    * Does the code appear to do what it claims to do? (This requires you understanding what the code claims to do; you may need to ask the code author to write a better description.)

    * Was the new code put in the right place?

    * Is the new code unnecessarily complex—or unnecessarily clever?

      * "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. " – Brian Kernighan
    * Does the new code do all it can to avoid adding to the overall complexity of our codebase?

    * Did the author write tests for the new code?

  * Clarify when a comment is minor or not essential for merging (for example, preface with "Nit:").

  * If a PR is too large for you to reasonably review, you can ask the author to split it into multiple PRs.

## Additional Reading

  * [Google's excellent guide to code review](https://google.github.io/eng-practices/review/reviewer/standard.html) (Note: CL=change list=pull request)

  * [Curated list of articles about code review](https://github.com/joho/awesome-code-review/blob/master/readme.md)

  * [Gitlab's Code Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html)

  * [Proven Code Review Best Practices from Microsoft](https://www.michaelagreiler.com/code-review-best-practices/)

  * [Thoughtbot Code Review Guidelines](https://github.com/thoughtbot/guides/tree/master/code-review)

  * [Code reviews at Slack](https://slack.engineering/how-about-code-reviews/)

