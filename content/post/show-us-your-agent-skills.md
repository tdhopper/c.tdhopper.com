---
title: How I'm Using Agents
date: 2026-07-30
description: I joined Hugo Bowne-Anderson, Thomas Wiecki, and Chip Huyen on Show Us Your (Agent) Skills to walk through my setup, from side projects I build on my phone to what I've learned reviewing code I didn't write.
categories:
  - Article
image: /images/how-im-using-agents.png
tags:
  - ai
  - developer-tools
  - side-projects
---

[Hugo Bowne-Anderson](https://hugobowne.github.io/) and [Thomas Wiecki](https://twiecki.io/) invited me onto the season two finale of [*Show Us Your (Agent) Skills*](https://hugobowne.github.io/show-us-your-agent-skills/agent-skills), alongside [Chip Huyen](https://huyenchip.com/). I demoed my setup, Chip showed the multi-agent runner she's built, and Thomas closed with a framework for agentic data science.

## Watch

{{< youtube NH-ic7-V-jY >}}

The show is a livestream series from [Vanishing Gradients](https://www.youtube.com/@vanishinggradients) where practitioners open up the systems they use: how their agents plan, hand off context, review one another, and recover when something breaks.

[The show's site](https://hugobowne.github.io/show-us-your-agent-skills/agent-skills) is the best way in. It collects every episode, a dossier page for each guest, and a searchable library of the skills and workflows people have demoed, 65 skills across 24 builders as of this episode. The raw material lives in the [companion repo](https://github.com/hugobowne/show-us-your-agent-skills), and the conversation continues in the [Discord](https://discord.gg/JZ2WGdFDU). Past guests include [Wes McKinney](https://wesmckinney.com/), [Hamel Husain](https://hamel.dev/), [Matt Rocklin](https://matthewrocklin.com/), and [Vincent Warmerdam](https://koaning.io/). I've found nothing better for seeing how people work rather than how they say they work.

My portion, cleaned up and reorganized by Claude:

## Getting my side projects back

I owe a lot of my career to the early days of data Twitter. I was a lazy grad student on Twitter instead of working, watching people like [Hilary Mason](https://hilarymason.com/), [John Myles White](https://www.johnmyleswhite.com/), and [Drew Conway](https://github.com/drewconway). At some point I realized they were building in public and so was I, except nobody knew, because I was alone in a quiet office.

I started putting more stuff online, deliberately. That's ranged from [pythonplot.com](https://pythonplot.com), a website about Python visualizations, to a site about [backpacking equipment for tall people](/blog/backpacking-for-the-very-tall/), to [shouldigetaphd.com](https://shouldigetaphd.com), where I collected interviews with people about their experience in PhD programs. The topics were all over the map.

I now have four small children, which dampened that hobby. Agents brought it back. The agent sustains focus on a project so I can dip in and out, and that trade is the whole thing for me.

## Encoding a magazine as a skill

My oldest child is eight and wants a high-end remote control car. He asked for a magazine about upgrading a remote control car he doesn't even own yet.

I have a skill that takes a vague prompt like that, finds pictures, does the research, and compiles it. You get a web version and a printable version that folds into a little bifold booklet on a normal printer. I built it by iterating with [Claude Code](https://www.claude.com/product/claude-code) until we landed on a magazine I liked, then made it reproducible by encoding it as a skill. It's a vibe-coded skill I've never fully read.

Here's [the issue it wrote him](/uploads/slash-upgrades-magazine.pdf) (450 KB PDF), on which upgrades a Traxxas Slash already ships with and which ones are worth buying.

Hugo argued during the show that we should share the *shape* of skills, not the skills. I agree. Give someone a few bullets about what yours does and they can rebuild it to fit how they work. Most of mine are throwaway, full of paths and assets specific to my machine. If you want the shape of them anyway, the [magazine skill](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/magazine-explainer/SKILL.md) is in my dotfiles, along with the [script that imposes the pages into a foldable booklet](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/magazine-explainer/scripts/make_booklet.py).

## Building on Cloudflare for $5 a month

Hugo, the Go static site generator, was my website stack for a long time: a decent template plus enough HTML and JavaScript to force it into shape, hosted on Netlify.

[Cloudflare](https://developers.cloudflare.com/workers/) changed that. It gives you easy databases, JavaScript-based serverless workers, static sites, model access, and a vector store for semantic search. I barely understand it. I pay $5 a month for the Workers plan, which is more than I will ever need for websites that get two visits a day.

I have a [skill for this](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/cloudflare/SKILL.md) too. Part of it is a [running list of gotchas](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/cloudflare/references/gotchas.md): when something doesn't work, I have the agent write a tip to itself. The agent could figure those things out again, but this way it goes faster.

## Building the Hopper Herald on a walk

I went for a walk the afternoon before the show and pulled up Claude Code on my phone to prep. It convinced me to demo a project I'd been mulling, then built it while I walked.

The result is [the Hopper Herald](https://hopper-herald.tdhopper.workers.dev), a web version of the magazine generator I made for my kids. Give it a prompt and it writes you a magazine. It runs entirely on Cloudflare: a Worker serves the site, and Cloudflare's own models generate the text. Those models are weak, so the output is thin, but it works. The agent also suggested the "surprise me" button on its own.

## Scraping an auction site for my father-in-law

I recently moved to Indianapolis, where my in-laws live. There's a local auction house that sells off Sam's Club returns, and it has a horrible website. My father-in-law uses it to buy fun toys for my kids, and he showed me the spreadsheet where he tracks price estimates so he knows how much to bid.

I built him a site that does it for us. The agent figured out on its own that it could scrape the auction site's GraphQL API. Cloudflare's models produced abysmal price estimates, so it now uses [Perplexity](https://www.perplexity.ai/) for prices and Gemini for image recognition to sharpen them. It'll tell you it sees a smokeless wood fire pit and price it accordingly.

That site is my learning lab, and I play fast and loose with permissions at home, giving the agents a lot of power. One experiment I keep coming back to there: use a strong vision model to label the images, then use those labels to steer the cheaper models. That trick should generalize.

## Working from my phone

Most of this happens away from a desk. The chain:

- A Mac Mini at home named PantherBane does the work.
- [Tailscale](https://tailscale.com/) lets me reach it from anywhere.
- [Mosh](https://mosh.org/) keeps the connection alive. Plain SSH sessions drop constantly when you move between networks; Mosh runs a persistent server on the target machine and picks right back up.
- [Moshi](https://getmoshi.app/), an iOS terminal built specifically to work with agents, is the client. It has native Mosh support and lists your multiplexer sessions.
- [Zellij](https://zellij.dev/) holds a named session per project. A [`zj` function](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.config/fish/fish-functions.fish#L117) opens a window named after the current folder and a [`c` alias](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.config/fish/fish-aliases.fish#L4) launches Claude Code, so from the phone I can jump straight back into whatever I was doing. Now I can sit at my kids' soccer practice and throw out some prompts.

[cmux](https://cmux.com/) is my desktop terminal now. It's built on [Ghostty](https://ghostty.org/), from [Mitchell Hashimoto](https://mitchellh.com/), with vertical tabs that integrate with agent sessions, so a tab shows what its agent is working on. I keep one vertical tab per project and split horizontally within it. It has a built-in browser the agent can drive, and SSH workspaces that connect to PantherBane automatically when I open a new pane.

I almost never open an IDE anymore. I read plenty of code, but I read it on GitHub as pull requests. If I need to dig through a codebase, I'll pull up VS Code.

## Talking instead of typing

I use [Spokenly](https://spokenly.app/) for dictation. It's similar to Wispr Flow but runs local models, which is how I used it before work approved any AI tools.

I'm an internal processor and I've never been much for dictation. Agents tolerate bad talking, which is changing my mind. I can't speak linearly: I pause and double back and wander. The transcription waits patiently through all of it, and the agent is forgiving about restarts and mistakes and typos. Between the two of them I get listened to better than I deserve. Speaking also gets more out of me, since you get lazy punching text into a phone.

## Making the agent tell me when it's done

I have a [Resend](https://resend.com/) API key and a [skill that uses it to email me](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/resend-email/SKILL.md). Moshi has hooks that push a notification when an agent finishes a turn, which covers short work. For longer work I'll say "send me an email with Resend when this is done, summarizing it and letting me know next steps," fire it off from bed, and wake up to the summary. I never have to check on it.

The notes I used to prep for this show came out of that walk. I talked at the agent, it synthesized the conversation, and it emailed me the result. I never touched a keyboard.

## Making the agent write fewer words

Two things help more than anything else I've tried.

The first is a sentence from Strunk and White's [*The Elements of Style*](https://en.wikipedia.org/wiki/The_Elements_of_Style): **omit needless words**. I say it to the agent after it writes a skill and it prunes about half of what it just wrote.

The second is a [`PROSE.md` file](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/PROSE.md) in my dotfiles, a set of rules poached from writing books. My `CLAUDE.md` points every prose task at it, and when the output ignores those rules I say "revise this according to prose.md" and it gets a lot better. I've since turned the same rules into a [prose-editor subagent](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/agents/prose-editor.md) that audits a draft and reports violations instead of rewriting it.

## Reviewing what agents produce

I'm not much of a model nerd. I use whatever's current in Claude Code, and for bigger tasks I'll reach for a stronger model and tell it to use cheaper models for the subagents. The one lesson I've learned the hard way: don't let the expensive model spin up subagents of itself. That destroyed my $100 a month plan in seconds.

At work, the constraint is how fast you can decide whether a pull request is a good idea.

We used to have a filter we didn't know we were relying on. If someone opened a PR and the code was sloppy, that correlated with the design being sloppy too, and you knew to look harder. Agents produce code that looks good all the time, so everything reads as compelling, and sorting the good ideas from the bad ones takes a different kind of discernment. Fifteen years of reading other people's code turned out to be the skill that carried over.

[Till Döhmen](https://tdoehmen.github.io/) made a version of this point on my podcast when we talked about [AI-assisted SQL generation](/blog/ai-assisted-sql-generation-with-till-d%C3%B6hmen/): the way to build trust is Socratic questioning, poking at the output until nothing contradicts. Ask the agent to explain what it wrote, or hand the code to a fresh session and ask what it does.

## Working with agents in public

I keep telling colleagues that we should be working with agents publicly.

Early on, when the only option was pasting company information into ChatGPT, talking about AI tools was taboo. That's mostly over, but people still say "my agent produced this code" apologetically, as if anyone is writing code by hand anymore. That's how we're all doing it. I'd rather my team talk about what we're learning than each quietly figure it out alone.

We're still working out what's fair. My team is split over whether an agent should write your PR description. Some people say you get generated slop, and that outsourcing the description means the author never had to think about the change. I've been reviewing pull requests for fifteen years and I almost never saw more than two words in a description. The fix is a [team skill that produces a structured description](https://github.com/tdhopper/dotfiles2.0/blob/6e19eb1a4814a2677e1bd9c0404d605d72bea34e/.claude/skills/creating-pull-requests/SKILL.md) containing the information we want.

My company has an AI code review tool you can point at an instructions file. Instead of using it to review for correctness, I've been aiming it at **reviewability**: getting the agent to prod people into shaping pull requests a human can read. It's an open experiment, and most days I'm trying a different version of it.

## Don't let agents help you do stupid things

My team is losing our most senior engineer this week. One of his best skills was reminding all of us not to let agents help us do stupid things.

It's easy to blame agents for the stupid things. All they did was accelerate the pace at which we can do them, and you still have to use your brain.

That's what worries me about people entering the field right now. Those of us adopting agents are doing it with years of judgment behind us, and the people just arriving don't have that yet. They aren't getting it in school either, so have some empathy there and teach people to use these things smartly. Shows like this one are a good place to start.

One thing I didn't get to demo: I've been assembling teams of persona-based subagents to pressure-test ideas, including reviewers whose only job is to argue against me. I'll write that one up separately.

## More from the show

- [The Show Us Your (Agent) Skills site](https://hugobowne.github.io/show-us-your-agent-skills/agent-skills), with guest dossiers and the skills and workflows library
- [My guest page](https://hugobowne.github.io/show-us-your-agent-skills/agent-skills/guests/tim-hopper/), the show's dossier on my setup and the skills I demoed
- [The companion repository](https://github.com/hugobowne/show-us-your-agent-skills), where the raw material from every episode lives
- [Vanishing Gradients on YouTube](https://www.youtube.com/@vanishinggradients) and [the newsletter](https://hugobowne.substack.com/)
- [Upcoming livestreams and workshops](https://luma.com/calendar/cal-8ImWFDQ3IEIxNWk)

The back catalog, if you want to binge it:

1. [Wes McKinney, Jeremiah Lowin, Randy Olson](https://youtube.com/live/Pq3xuChdwxQ)
2. [Hilary Mason, Bryan Bischof, Eric Ma, Tomasz Tunguz](https://youtube.com/live/l37PR-OkYKA)
3. [Matthew Honnibal, Eleanor Berger, Nico Gerold, Alan Nichol, Vincent Warmerdam, Paul Iusztin](https://youtube.com/live/ud2WzkKeDZs)
4. [Hamel Husain, Chris Fonnesbeck, Doug Turnbull](https://youtube.com/live/XaYQFtca798)
5. [John Berryman, Isaac Flath, Matt Palmer](https://youtube.com/live/6zju7hyCFl0)
6. [Matt Rocklin, Skylar Payne](https://youtube.com/live/UwAGIkWFQ78)
7. [Greg Ceccarelli, Han-Chung Lee](https://youtube.com/live/kfCi2EBu-nc)

## More from me

I've written up [lessons from using Claude Code effectively](/blog/lessons-from-using-claude-code-effectively/), [how I'm using AI more broadly](/blog/how-im-using-ai-at-the-end-of-2025/), [why you should build for the model six months from now](/blog/build-for-the-model-six-months-from-now/), and [how other developers are using LLMs](/blog/how-developers-are-using-llms/).

I also interview people about this on [my own podcast](/podcast/):

- [The Evolution of AI Agents with Ben Labaschin](/blog/the-evolution-of-ai-agents-with-ben-labaschin/), on agents in software development and org efficiency
- [AI-Assisted SQL Generation with Till Döhmen](/blog/ai-assisted-sql-generation-with-till-d%C3%B6hmen/), on text-to-SQL, MCP servers, and documenting data for agents
- [Writing a Math Textbook with Claude with Professor Ghrist](/blog/writing-a-math-textbook-with-claude-with-professor-ghrist/), on directing an agent through a linear algebra book in 55 days
- [Building a Startup with AI with Jowanza Joseph](/blog/building-a-startup-with-ai-with-jowanza-joseph/), on competing with incumbents using Cursor
- [AI Assisted Programming with Ravi Mody](/blog/ai-assisted-programming-with-ravi-mody/), from back when this all still felt novel
