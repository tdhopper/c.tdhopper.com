---
title: The Python Developer Tooling Handbook on The Python Show
date: 2026-08-27
description: Mike Driscoll had me on The Python Show to talk about the Python Developer Tooling Handbook, type checkers, Ruff's autofixes, why I keep writing things down, and what happens to blogs when agents read them.
categories:
  - Article
image: /images/podcast-interview-min.png
slug: python-developer-tooling-handbook-on-the-python-show
tags:
  - python
  - developer-tools
  - writing
  - podcast
---

[Mike Driscoll](https://blog.pythonlibrary.org/) invited me onto [The Python Show](https://www.pythonshow.com/podcast) to talk about the [Python Developer Tooling Handbook](https://pydevtools.com/handbook/). We covered how I got into Python, why I built the handbook, the current type checker race, Ruff's autofixes, and why I still think you should have a blog.

Mike has been writing about Python at [Mouse vs Python](https://blog.pythonlibrary.org/) for close to twenty years and has written a stack of Python [books](https://driscollis.gumroad.com/). His show is one of the few Python podcasts that gets into the tooling weeds. [Subscribe to it](https://www.pythonshow.com/podcast) and go read his blog.

## Listen

{{< spotify 40Qt5oKIpQjI3YkvVg7iX6 >}}

## Links

- [The Python Show](https://www.pythonshow.com/podcast) and [this episode's page](https://www.pythonshow.com/p/57-python-developer-tooling-handbook)
- [Mouse vs Python](https://blog.pythonlibrary.org/), Mike Driscoll's blog
- [Mike's books](https://driscollis.gumroad.com/)
- [Python Developer Tooling Handbook](https://pydevtools.com/handbook/) and its [topics page](https://pydevtools.com/handbook/topics/)
- [pythonplot.com](https://pythonplot.com/), my guide to plotting in Python
- [Into the Hopper](https://podcast.tdhopper.com/), my podcast
- [makefile.uv](https://github.com/python-developer-tooling-handbook/makefile.uv), a drop-in Makefile for uv-backed test orchestration
- [scikit-learn](https://scikit-learn.org/), [Flask](https://flask.palletsprojects.com/), [pytest](https://docs.pytest.org/), [PyTorch](https://pytorch.org/)
- [uv](https://docs.astral.sh/uv/) and [Ruff](https://docs.astral.sh/ruff/) from [Astral](https://astral.sh/)
- Type checkers: [ty](https://docs.astral.sh/ty/), [Pyrefly](https://pyrefly.org/), [Zuban](https://zubanls.com/), [mypy](https://mypy-lang.org/)
- [Real Python](https://realpython.com/)
- [Anthropic Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) and [Claude Code](https://www.claude.com/product/claude-code)

## Transcript

Lightly edited for readability.

### Getting into Python

**Mike:** Hello and welcome to The Python Show. I'm your host, Mike Driscoll, and today I'm honored to have a guest named Tim Hopper on the show. He's the author of the Python Developer Tooling Handbook. Welcome to the show, Tim.

**Tim:** Thanks for having me on, Mike.

**Mike:** It's good to have you. When I do these shows, I like to start out by having my guests tell us a little about their journey into programming.

**Tim:** That was an interesting question to reflect on, because like a lot of people, my path was nonlinear.

The first thing I ever programmed was a TI-83 graphing calculator.

**Mike:** Nice.

**Tim:** That was in the '90s in middle school, back when you could write TI-BASIC. My friends and I made random number generators and things like that.

Later in high school I got into building static websites. I was the perfect age for Geocities. That got me curious about the dynamic side, so I taught myself PHP to do a little server-side work.

Then in college, and I'll give you the short version, I started studying computer science but realized I was more interested in the theory than most of the CS students were. I wasn't that interested in programming itself. I ended up majoring in math and minoring in CS. I dabbled in C++, and in my math classes I used Mathematica a lot, which probably set me up to enjoy Python later as a dynamic scripting language.

It was finally in grad school, when I was 24 and trying to figure out what I was going to do with my life, that I realized programming was a great route to a job. This was 2010, when data science was blowing up, at least on the internet. People I respected, like Hilary Mason and John Cook, were using Python. So I started dabbling, and eventually I read the O'Reilly book *Learning Python* cover to cover and then tried it out, the way you learned a language back then.

That was sixteen and a half years ago. I've been using Python ever since.

**Mike:** You've been using it almost as long as I have. That's cool.

**Tim:** When I was first getting into it, I met someone who had used Python for seven years and thought that was an eternity. Now I'm sixteen years in.

**Mike:** People keep telling me, Mike, why do you only do Python? You can't have a real job and just do Python. And I'm like, what are you talking about? I've been doing it for twenty years now.

**Tim:** It's a fun language.

### Favorite packages

**Mike:** Speaking of fun things about Python, what are your favorite Python packages?

**Tim:** Another interesting question, and in the long run it's the one that interests me most.

The one that helped make my career is scikit-learn. I found it when I was getting interested in machine learning, and it's still one of the most beautifully implemented tools out there. The model for how the pieces fit together is brilliant, and it taught me a lot about machine learning. The documentation has always been excellent. I don't use it as much now, for a variety of reasons, but I'm sure that hasn't changed.

It's a great example to the Python community of building world-class software. It's been used by more companies than anyone will ever know, on more projects, by researchers all over the world. It has a special place in my heart. The first talk I ever gave on Python was at a local meetup on scikit-learn, and I have a friend in the Raleigh area whose career trajectory I helped set when he came to that talk and got into data science.

Another oldie but goodie is Flask. I've never been a great web developer, and thankfully AI tools can do a lot of that work for me now, but I built so many websites and APIs on Flask over the years. pytest is probably another favorite, and it's similar: both make it easy to start on something that would be painful in another language, or with a less careful implementation. Being able to spin up a web server quickly and write Python that talks to the browser was very cool to learn early on.

These days if I want a website, I tell Claude Code to make me one, because I've never been a front-end person. But I like to share things with people, and that shaped me a lot.

So: scikit-learn and Flask, with an honorable mention to pytest.

**Mike:** I like Flask too, but whenever I think about it I'm like, that thing started out as a joke by the main guy, and it's so funny that it's become number three, I want to say, in the Python web frameworks.

**Tim:** It's pretty amazing. A lot of folks use FastAPI now, but we wouldn't have FastAPI without Flask. It set the stage, and it's still widely used.

**Mike:** You mentioned scikit-learn. What's the new popular machine learning package for Python, do you know?

**Tim:** A lot of people still use scikit-learn for traditional machine learning. In the deep learning and LLM world, PyTorch leads the charge.

**Mike:** Okay.

**Tim:** Which is a surprising twist over the last ten years. PyTorch started out, from my perspective, as the thing academics used. Now it's everywhere in industry.

You can do some of the same things in it that you'd do in scikit-learn, but they aren't equivalents. I don't know if people have settled on a term for it, but there's still a lot of interesting pre-deep-learning machine learning work, and it's hard to beat scikit-learn there.

**Mike:** Since you're doing stuff with agents, is there a Python library you'd recommend as a good intro to using agents with Python?

**Tim:** I don't have a lot of experience there. Mostly I rely on Claude Code or Codex.

I have tinkered with Anthropic's Agent SDK in Python, which is neat, and one of the superpowers is that Claude Code is quite good at using it. Instead of Claude Code as a generic agent that writes code and does things on your computer, you can build your own agent with access to specific tools that you define. I've experimented with that on some non-code research projects, adding data sources as tools the agent can reach. It's fun to play with, but it hasn't been a big focus of mine.

### Why the handbook exists

**Mike:** That's totally fine. I was curious because it sounds like you do more with agents than I do. Let's pivot and move on to you becoming an author. How did you get into book writing?

**Tim:** I don't know that I think of myself as a book writer. I do think of the Python Developer Tooling Handbook as a book, in the sense that it's more than documentation. It is documentation, but it's trying to bring cohesion to a topic that has lacked cohesion basically forever in the Python world.

A little backstory on me: I enjoy understanding things and then explaining the ones other people don't understand. If people are talking a lot about something poorly understood, I get this drive to dig in, even when I don't understand it well myself.

One of my earlier Python projects is still up, and I just revised it: pythonplot.com, a site about making data visualizations in Python. Ten years ago, ggplot in R was the gold standard, and there was a lot of confusion about how to do the same things in Python. People compared Matplotlib to ggplot when they aren't the same kind of thing. So I rage-built a site to help myself make plots, and to help others along the way.

The handbook came from the same place. My own work pulled me deeper into packaging: building packages, helping developers manage environments. And over ten years of conversations on social media and with friends, two things kept showing up. People are confused about this stuff. And people who are confused about it talk very confidently about Python and misrepresent it.

Then there's the sheer growth in tooling, not just packaging. Python has had all these formatters and packaging tools. I remember when pytest and nose competed over testing, and then nose2. We have this breadth of tools and no great source on which ones to use, or how to actually use them.

Every so often a comparison of Python packaging tools hits the front page of Hacker News. Someone put a lot of time into that blog post, and it's out of date almost immediately. It isn't always accurate either, and a post can't go deep enough for people to understand what you're talking about.

So for a few years I've wanted to bring clarity here. My general view, which predates uv and which uv has strengthened, is that the tooling is good. The hard part is wading through it and figuring out how to apply it to your situation.

I wanted the handbook to be comprehensive, opinionated, beginner friendly, and able to grow. Mostly I wanted it to work like Wikipedia, where you read something and click around to dig deeper. One of its strengths is aggressive cross-linking. If you're reading about uv and it mentions wheels, and you don't know what a wheel is, you don't have to sit there wondering or go Google it. I'll give you that too.

**Mike:** Nice.

**Tim:** The motivation is a few things at once.

Python gave me my career, and I want to give back to the community. And I have this urge to explain what's poorly explained and commonly misrepresented.

There's a can of worms here. The Python Packaging Authority has a guide on packaging, which I have some criticisms of. There's the Python documentation, and realpython.com, which I know you're involved with, and the individual docs from Astral and other projects. But I don't see another single source that tries, in a targeted way, to answer these questions. My hope is to be a source that humans and coding agents both treat as canonical, and to keep it current and useful.

That's a long answer to your short question.

**Mike:** That's a good answer though. The last month, when I've done Google searches on various Python topics, your handbook has popped up a lot as a potential answer to my question.

**Tim:** That's great. I spend a lot of time working with Claude Code on SEO, and that's my number one source of traffic by far.

In case there's not another opportunity to say it: every page has a feedback form at the bottom. If it's not useful, or it doesn't answer your question, or you think it's wrong, tell me. It's just me behind it, and I want that feedback.

**Mike:** I like that. That's kind of what my blog originally was. It was supposed to be a forum. People would ask me questions and I'd sometimes write new articles based on those questions. Then of course I got all the spam, so I had to disable some of that feedback.

**Tim:** I've had to tinker with the spam settings on mine too. Either I'm missing a bunch of stuff or the filtering is holding up for now.

It isn't an open source project. You can't open a pull request. I own it and I edit it, but I welcome feedback. This is my way to contribute to a community that has meant the world to me. I use Python every day at work, and it's fed my family for a long time, so I'm glad to give back. I've done little open source things here and there, but I've never been a big maintainer. This has been a great outlet.

**Mike:** I keep thinking one day I'm going to come up with something cool and put it on GitHub, but so far it's just little tiny projects mainly for myself that sometimes people find helpful.

**Tim:** That's a great place to start, and once in a while those take off. You never know.

**Mike:** True. And I think it's a good idea that you don't let PRs happen, because some of these projects have started to have to turn off open PRs because of all the AI junk.

### What's next for the handbook

**Mike:** Are there any new projects you're working on? A new book, a new site, something to look forward to later this year?

**Tim:** I tinker a lot, like you, mostly on things for myself. I've enjoyed letting AI agents build websites for me. Recently I've been talking to Claude Code about my workout routines and having it write new plans, and then I figured I'd put it up on Cloudflare as a website. I do a lot of that now, where I'm happy to be the audience of one.

But my biggest effort is the handbook, and there's a lot left to do.

I'm exploring what best practices look like for writing Python with agents like Claude Code, which is still evolving. Profiling barely gets touched in the handbook and I'd like to develop it. I've been publishing more on PyTorch and other packages that run on GPUs, which Python supports poorly. Getting those installed to run on your GPU takes a lot of hacks right now, so I'm documenting what I can.

There's also ongoing maintenance. I use an agent to follow GitHub release notes for the big projects, Astral's tools and pip and other core projects, so it can surface anything significant and I can keep pages current. Astral is moving faster than ever since joining OpenAI.

What I'm struggling to keep up with is ty, Astral's type checker, and Pyrefly, the one out of Meta. Both are adding functionality fast, and I'm waffling on which to recommend. I like to give good recommendations on the site, and those two are neck and neck.

**Mike:** What about Zuban? I feel like that's up there too.

**Tim:** I have a page on it, but I haven't experimented with it as much.

They're all hard to test. Everybody's use case is different, and even defining what someone wants out of a type checker is hard. You can see that in the different philosophies behind the tools.

I still spend time on all of this, watching the ecosystem develop. My biggest source of traffic by far is uv, which makes sense: it's probably the most used Python tool right now in terms of people reaching for it directly. I try not to duplicate the docs, so I look for my own spin and different angles. They iterate on uv fast, so keeping up takes work.

A couple of small things have spun out of the handbook, and they're on its GitHub page. I made makefile.uv for people who organize projects with Make. It tries to make uv easy to use, and it can partly replace tox by letting you test across multiple Python versions with uv. I haven't figured out how to market it. But as I work on the handbook I keep asking whether we're using certain tools just because, and whether there's another way. That's where it came from, and tox may be a tool some workflows could replace.

I'm not going to become a tool developer, though. The handbook is my focus.

**Mike:** I was just browsing through the topics covered because I was curious what other tools you covered.

**Tim:** I did a big reorganization this spring. Go to pydevtools.com and click the topics page and you'll get a high-level organization I didn't have before: testing, packaging, security, scientific Python, AI assistance, type checking, and so on. There are a dozen topical pages now. If you think something high-level is missing, I'd love to hear it.

Documentation is another light one. I have some basic material there, but it could be developed a lot. I'm cautiously optimistic that AI tools will get people to have good documentation instead of no documentation, though the old foundations like Sphinx and MkDocs are still valuable.

### The type checker race

**Mike:** I was looking at this and wondering if you want to cover mypy more, or, what is that, the one where you package Python scripts into an executable? I don't think that's even on there.

**Tim:** I have a little of that. There are some examples under packaging.

**Mike:** Okay.

**Tim:** I haven't spent much time on those; they don't get a lot of traffic. But cx_Freeze and some of the others are in there.

mypy is one where I'd want your thoughts. If you're adopting a type checker today, I'd point you to Pyrefly or ty. Pyrefly even ships mypy migration tools for your configs. mypy's speed is hard to argue for against these Rust-based tools.

**Mike:** My take, because I ran mypy until, I want to say, January of this year, or maybe December of last. I switched because ty is so much faster, right? But ty, because it's still technically alpha, doesn't catch everything mypy was catching. After using mypy for over a year, I still see stuff that ty doesn't catch, and I'm like, these guys are so far behind on catching everything mypy used to catch. That makes me wonder if I should have gone with Pyrefly, which I wasn't aware of when I switched to ty.

**Tim:** Pyrefly has come a long way this year. Some of the difference is philosophical: ty tries not to be annoying, and that means it lets things through. Pyrefly aims to be more comprehensive.

I've thought about whether you could build a set of baseline cases to compare them, and it's genuinely hard. Every project thinks about types differently, and I can't come up with a single metric that would tell you which one to use. Both are powerful. I've been impressed by how far Pyrefly has come and how much it does now.

**Mike:** I want to try it out some more. If I recall correctly, Pyrefly started late in 2025, so it's not even quite a year old. That's when Zuban started, and I think ty was only a month or two younger, or older, so to speak. It's weird that they all came out in 2025.

**Tim:** Meta is investing heavily in Pyrefly and using it widely inside the company. I've talked to some of the people on it. Their first GitHub commits are August of 2025, but they'd been working on it internally before that, and for now they're committed to it as essential infrastructure for Python at Meta, which is still huge in Instagram, for example. It has the kind of internal backing that nothing else in Python has right now outside of CPython itself, because they have so many users. They're responsive, too. Astral and Pyrefly both run Discord servers where they answer questions and take feedback.

It's fascinating where we've landed. Meta is supporting a major Python project in a big way, and now OpenAI, by acquiring Astral, is supporting a core part of Python. That's striking for those of us who have been around a while. You remember how meager the support was fifteen years ago.

**Mike:** mypy came out in 2014, and it was, and I'm not sure if it still is, originally created by Dropbox. I don't know if they've continued to develop it or if they just completely open-sourced it.

**Tim:** I'm not sure.

### Complexity checks and Ruff's autofixes

**Mike:** What was the other thing I was going to ask? Oh, have you thought about talking about complexity checkers or stuff like that?

**Tim:** I haven't. Do you have thoughts on them? I haven't looked in years, and I know the McCabe ones have gotten pushback over whether they're actually valuable.

**Mike:** Ruff has support for a complexity checker built into it, so I use that a little. Primarily to force, so, the people I work with are a wide variety. We have interns and we have people hired right out of college and then basically everyone in between. You can end up with some really screwy code because of that. So I started adding a gate to protect us from getting really complex code, because it's hard to review. If they put in something with all these different switch statements and if-elses plus other things in it, I'm like, that's not a good function to begin with. You're not really doing DRY. So I encouraged them by having that complexity checker: if you hit it, which is set to about 10 I want to say, you should fix it and try to make your code better. I'm not real strict about it, but I am strict enough that they have to fix it, because it bugs me.

**Tim:** That's interesting. I should look at it again. It's C901 in Ruff, the McCabe check. I'd be curious whether it's a useful way to rein in coding agents that make things overly complex.

One thing I've loved in recent years, and I think it's underappreciated, is Ruff adding autofixes for so many of its checks. Turn that on in your editor, with the growing set of good rules like the SIM class for simplifying code, and small static checks catch a lot of this early. Not perfectly. As the scope of the complexity widens it gets harder to rein in. But on a greenfield project you can enable a lot of it aggressively and let Ruff tell you what good style looks like today.

**Mike:** That's cool. I've been meaning to go back, because with Ruff's 0.16 release I think they enabled like 400 additional rules. I have yet to go through the entire list to see what they've enabled. But it didn't break anything by upgrading.

**Tim:** I think it's great, because they've been conservative about rules, and overly conservative in my view, since most people enable the defaults and move on. I have some content in the handbook on recommending rules. Now they're recommending much more out of the box, which is good. Upgrading is easy too, and a lot of people already have the rules they use pinned. My own project upgraded without issue. For anyone on the defaults, that was a big step forward.

I'm looking at the flake8-simplify class, SIM, right now. It has maybe 40 rules. A complex expression that could just be `True` or `False`? It'll rewrite it. Using an index variable where `enumerate` would do? Same. Little Python things, nice cleanups, and having them applied for you, fast, in your editor is really neat.

### Advice for writing

**Mike:** We're going to pivot slightly, but do you have any tips for working on these blog posts or your book, for someone else who'd like to get started doing something similar?

**Tim:** Part of it is that you can just do it these days. The sky's the limit, which is exactly why constraining yourself is smart.

Look at a site like Real Python. It takes on the breadth of Python, which is great and has been good for the community. When I thought about what I could do, I knew I couldn't do everything, so I picked one area I thought I could do well. Constraints improve the quality of the work.

The other part, as I said earlier, is that you're building your own understanding. Find what people are confused about and explain it. That's half my blog. tdhopper.com is mostly me explaining things that seem to confuse people, and that's useful information to have out there.

I still recommend having a blog, even if you don't update it often. It's useful, and it's fun to share things. Explaining something is often how you come to understand it, and that attitude carries you a long way.

There's plenty of opportunity left. I'm fairly convinced Python will keep getting bigger, in no small part because AI tools like Python, and that makes programming more accessible than ever. I was talking to people at my co-working space who aren't developers at all, one who runs a nonprofit and one who runs a landscaping company, and they both said some version of: we don't really know what Python is, but we see our agents writing Python files. They're solving problems in their own domains with AI and watching Python get generated.

**Mike:** Nice.

**Tim:** As that happens, these agents have to learn somewhere. They can consolidate across docs, but I've taken the approach of making the Python Developer Tooling Handbook as accessible to agents as possible, so people looking for help get good answers. Once in a while someone will come see the site. Often they'll get the help without any reference to me, and that's okay too.

My point is that the age for this kind of thing isn't over. Python keeps growing, and even when AI can do the work, people still have questions and go looking for answers.

We haven't talked much about what the handbook means for companies, but my general philosophy is that a lot of them underinvest in their Python developer experience. They let every team figure it out alone instead of saying, here are the best practices at this organization.

That's my long rambling answer. If I were writing it, I'd be clearer than I've spoken it.

**Mike:** What I would say, if someone asked me something like that, is that you want to create a blog for yourself first, because you want to record what you've learned. I'm not good at memorizing everything, because I'm usually drinking from a firehose. So I solved that problem, and I want to write it in a generic way so I don't forget how to do this, and I'll put it on my blog. And guess what, it might be next year, it might be next month, but I know I can go back to my own blog and solve my problem a lot faster because I already have that information there. If that helps someone, that's great.

Point two is that I want to write it in a way that can help someone else, so I try not to throw a bunch of slop onto the website. I try to make it look nice and understandable so the next person who reads it doesn't have to ask me a bunch of questions.

Thirdly, and I never thought about this when I started my blog, employers look at that. They're like, oh, you're active in the community, you're giving back, people find your content useful. That actually goes well on your resume or CV. The same goes with GitHub. That's also your resume. So be careful not to publish crap on your GitHub. Vet it a little, run it through Ruff or whatever, make it nice, because once it's out there that's what people look at. That's how they get to know you.

**Tim:** I fully agree. I've tried to do that for fifteen years, and I wish I'd started earlier. It's fun to go back through years of posts and remember things I used to know while reading about them.

**Mike:** It's really funny to Google something and find your own answer, and it's like, I did know this at some point.

**Tim:** Yes.

### Hobbies

**Mike:** My last question for you today: do you have any non-technical hobbies that you like to do?

**Tim:** I have four small children, so I don't have a ton of time for hobbies.

In my adult life I've become an armchair historian, mostly interested in the history of religion in America. One project over the last year has been experimenting with how AI agents can help with that: reviewing documents, synthesizing them, even generating podcasts about what they find. I tinker on it when I have time. I'm also interested in the history of science and the history of computing and software development.

**Mike:** Cool.

**Tim:** I wasn't interested in history at all until after college. Now it's one of my favorite things. Those are my side projects.

**Mike:** Awesome. I really appreciate you taking some time out today to be on the show, and for those of you listening, I'm going to include all the links we mentioned during the show so you can go check out Tim's work, support him, give him some good feedback, and help him continue growing his handbook.

**Tim:** I'd love feedback from folks, and it's great to meet you, Mike.

**Mike:** Thanks so much for being on the show.
