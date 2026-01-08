---
title: Lessons from Using Claude Code Effectively
date: 2026-01-08T8:00:00.000Z
description: Practical lessons learned from months of using Claude Code as my primary development tool.
tags:
categories: Article
image: /images/mr-men-claude-code.png
---

I've been relying on Claude Code more and more since March 2025, not just for development but for [all things computer automation](https://tdhopper.com/blog/how-im-using-ai-at-the-end-of-2025/).
Developers are transitioning to be the conductor of the orchestra more than flute player. I believe 2025 marked a fundamental shift in software development. These tools are changing what our jobs are.

Here are some practical patterns I've learned over the last year:

## Let It Touch Your Git

I've embraced letting Claude handle many of my git operations. It's great at finding the right changes to commit and [opening PRs](https://github.com/tdhopper/dotfiles2.0/blob/master/.claude/skills/creating-pull-requests/SKILL.md). It's also amazing at more complex tasks like cherry-picks, rebases, splitting large features into logical PRs. 

I recently had Claude split a large feature into four separate, logically sequenced PRs in a single session. The PRs were much cleaner than I would have done myself, and I [saved mental energy](https://www.johndcook.com/blog/2015/12/22/automate-to-save-mental-energy-not-time/).

## Start Fresh When Stuck

When Claude starts giving consistently bad answers, don't keep pushing it. Clear the context and start a new chat. A fixated agent won't suddenly become unfixated. Starting fresh gives you better results faster than trying to course-correct an existing conversation.

## Error Recovery is the Superpower

I think of Claude's capability the way a [favorite math professor](https://www.gcc.edu/Home/Staff-Directory/Staff-Detail/gary-l-thompson) once described his advantage: "I'm not smarter than you. I can just recover from mistakes faster than you." Agents recover from errors at speeds humans can't match (and, usually, don't get as frustrated).

## Use It for System Automation, Not Just Code

Claude Code is a misnomer; it's a computer automation tool. It's far better at using CLI tools than I'll ever be. I use it for git operations, generating complex shell commands, and even working with cloud CLI tools to quickly learn data patterns from blob storage. Tasks that used to take me time and energy to piece together now happen in seconds.

## Build Skills and Slash Commands for Repeated Tasks

I've developed a [skill for opening pull requests](https://github.com/tdhopper/dotfiles2.0/blob/master/.claude/skills/creating-pull-requests/SKILL.md) with well-structured, useful messages. I also use a slash command for [code reviews](https://github.com/tdhopper/dotfiles2.0/tree/eb26bddb146951c51d94a0ed0cc56cdb5279f8b9/.claude/skills/reviewing-code) that focuses on correctness, performance impact, and unnecessary complexity. These tools make repeated workflows consistent and fast.

## Fast Feedback is Essential

The value of fast feedback can't be overstated. Being able to execute code and validate assumptions quickly makes development fundamentally different. Agents benefit from this in the same way as humans; the more they can validate the work, the better their results.

## Use It to Navigate Unfamiliar Code

Agents excel at building understanding of complex codebases. They can grep, search, and trace dependencies far faster than I can manually. When I joined a new project, Claude helped me understand where components fit together and how data flowed through the system.

## Define the Problem Before Starting

The hardest part is still [understanding what problem you're actually solving](https://tdhopper.com/blog/no-silver-bullet/). I've wasted plenty of agent time by not thinking through what I wanted before asking. Spending five minutes clarifying the goal (sometimes [_with the agent_](https://github.com/tdhopper/dotfiles2.0/blob/master/.claude/commands/spec.md)) saves thirty minutes of iterating on the wrong solution. 

## Prototype Aggressively, Throw Away Freely

I prototype more now than I ever did before. The cost of trying something dropped dramatically. I'll have Claude generate a quick script or CLI to test an idea, knowing I'll probably throw it away. This changes how I approach problems: I can test assumptions with real implementations.

