---
title: Lessons from Using Claude Code Effectively
date: 2026-01-08T12:00:00.000Z
description: Practical lessons learned from months of using Claude Code as my primary development tool.
tags:
  - ai
  - claude
  - development
categories: Article
---

After months of using [Claude Code](https://www.anthropic.com/claude/code) as my primary development tool, I've learned a lot about what makes it effective. Here are some practical patterns that have worked for me.

## Let It Touch Your Git

One of the most common anxieties I hear from developers is fear of letting Claude handle git operations. This fear is misplaced. Git is reversible. I've embraced letting Claude handle complex git operations—cherry-picks, rebases, splitting large features into logical PRs. It's faster and more reliable than doing it manually.

I recently had Claude split a large feature into four separate, logically sequenced PRs in a single session. The git operations it generated were cleaner than I would have done myself.

## Start Fresh When Stuck

When Claude starts giving consistently bad answers, don't keep pushing it. Clear the context and start a new chat. A fixated agent won't suddenly become unfixated. Starting fresh gives you better results faster than trying to course-correct an existing conversation.

## Error Recovery is the Superpower

I think of Claude's capability the way a math professor once described their advantage: "I'm not smarter than you. I can just recover from mistakes faster than you." That's exactly what makes these agents powerful—they divide problems and recover from errors at speeds humans can't match.

## Use It for System Automation, Not Just Code

Claude Code isn't just a coding tool—it's a computer automation tool. It's far better at using CLI tools than I'll ever be. I use it for git operations, generating complex shell commands, and even working with GCS utilities to quickly learn data patterns from blob storage. Tasks that used to take me significant time to piece together now happen in seconds.

## Build Skills and Slash Commands for Repeated Tasks

I've developed a [skill for opening pull requests](https://github.com/tdhopper/dotfiles2.0/blob/master/.claude/skills/creating-pull-requests/SKILL.md) with well-structured, useful messages. I also use a slash command for code reviews that focuses on correctness, performance impact, and unnecessary complexity. These tools make repeated workflows consistent and fast.

I've even experimented with a "self review" slash command that leaves line comments on my own PRs for high-risk issues before I open them.

## Fast Feedback is Essential

The value of fast feedback can't be overstated. Being able to execute code and validate assumptions quickly makes development fundamentally different. If you don't have the right environments for quick validation, you're forced to agonize over code in ways that slow you down.

## Multi-Model Consensus for Complex Questions

When I need to review code or plan complex work, I sometimes use multi-model functionality (in Cursor) to run prompts across multiple models simultaneously. If they all confidently agree, I'm more likely to trust the answer. If they diverge significantly, that tells me I need to dig deeper and ask more specific questions.

## The Role is Changing

Pierre and I have talked about how the developer role is evolving into being a "conductor of the orchestra and not the flute player." I believe 2025 marked a fundamental shift in software development. These tools aren't just productivity boosters—they're changing what the job is.

My self-assigned mandate is helping researchers on my team use these agents more effectively. The goal isn't just speed—it's building confidence in the correctness of generated code and accelerating work that's historically been slow.

## The Confidence Shift

One subtle change: when Claude can't solve a problem, I now feel more confident that the limitation is a fundamental design constraint rather than the agent's inability. In the past, I might have concluded "the agent can't figure this out." Now I'm more likely to believe it actually explored the space and the problem is real.

---

These tools are still evolving rapidly. What works today might be obsolete in six months. But the core principle remains: treat Claude as a capable partner for both code and system automation, give it room to work, and start fresh when things go sideways.
