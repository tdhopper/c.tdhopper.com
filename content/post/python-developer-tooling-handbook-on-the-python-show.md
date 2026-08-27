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

**Tim:** It was an interesting question to reflect on, because like many folks, it was somewhat nonlinear. The first thing I ever programmed was a TI-83 graphing calculator.

**Mike:** Nice.

**Tim:** That was in the '90s in middle school, when you could do TI-BASIC and my friends and I would make random number generators and things. Later in high school I got into making static websites. I was the perfect age for Geocities sites, so my friends and I started making websites, which led to me getting curious about more dynamic aspects. In high school I taught myself some PHP to be able to do a little more server-side stuff.

Then in college, I'll give you the very short version. I ended up minoring in computer science, because I'd started studying computer science but realized I was a lot more interested in the theory side than most of the CS students, and I wasn't that interested in programming in particular. I ended up doing a math major instead. I dabbled in some C++, and in my math classes I used Mathematica quite a bit, which probably set me up in a lot of ways for really enjoying Python as a dynamic scripting language.

It was finally in grad school, when I was 24 and trying to figure out what I was going to do with my life, that I started to realize if I wanted to get a job, programming was a great route. This was in 2010, when data science was really blowing up, at least on the internet. Folks like Hilary Mason and John Cook, a prolific blogger who was and still is a Python user. These people I respected were using Python, so I started dabbling with it, and eventually I read the O'Reilly book *Learning Python*, back in the old days of learning a programming language by reading the book cover to cover and then trying it out. That was sixteen and a half years ago now, and I've been using Python in various ways ever since.

**Mike:** You've been using it almost as long as I have. That's cool.

**Tim:** I remember when I was first getting into it, meeting someone who had used Python for seven years, and I was like, wow, that's an eternity. Now I'm sixteen years in.

**Mike:** People keep telling me, Mike, why do you only do Python? You can't have a real job and just do Python. And I'm like, what are you talking about? I've been doing it for twenty years now.

**Tim:** It's a fun language.

### Favorite packages

**Mike:** Speaking of fun things about Python, what are your favorite Python packages?

**Tim:** Another interesting question, and I think in the long run it's the most interesting to me. One that helped make my career in a lot of ways was scikit-learn, when I was getting interested in machine learning. It's still one of the most beautifully implemented tools for machine learning, and the model that was put into it for how the different pieces work together was so brilliant. It taught me a lot about machine learning. It has always had amazing documentation. I don't use it as much these days for a variety of reasons, but I'm sure the documentation is still really solid.

It's such a great example to the Python community of building world-class software that's been used by more companies than anyone will ever know, on more projects, by researchers all around the world. It's always had a special place in my heart. The first presentation I ever gave on Python was at a local meetup on scikit-learn. I have a friend now, this was in the Raleigh area, whose career trajectory I helped set by him coming to that talk and then getting into data science.

Another oldie but goodie is Flask. I've never been a great web developer, and thankfully now AI tools can do a lot of the web work for me, but I built so many things on Flask over the years: websites, APIs. Like a lot of things in Python, pytest is probably another favorite, and pytest and Flask are similar in that they make it easy to get started on something that in another language, or with less careful implementation, would be really hard to use. The ability to rapidly start a web server and write Python that interacts with the browser was a very cool thing to learn early on. These days if I want to make a website, I just tell Claude Code to make one for me, because I've never been a front-end person. But I like to share things with people, and I think that shaped me a lot. So: scikit-learn and Flask, with an honorable mention to pytest.

**Mike:** I like Flask too, but whenever I think about it I'm like, that thing started out as a joke by the main guy, and it's so funny that it's become number three, I want to say, in the Python web frameworks.

**Tim:** It's pretty amazing. A lot of folks now are using FastAPI, but we wouldn't have FastAPI if it wasn't for Flask. It really set the stage, and it's obviously still widely used.

**Mike:** You mentioned scikit-learn. What's the new popular machine learning package for Python, do you know?

**Tim:** A lot of people are still using scikit-learn in more traditional machine learning cases. In the deep learning and LLM world, PyTorch leads the charge.

**Mike:** Okay.

**Tim:** Which was a surprising twist over the last ten years. From my perspective PyTorch started off as the thing academics used, but now it's widely used in industry. You can do a lot of things in it that you do in scikit-learn, but they're not really equivalents, and I don't know if people have figured out the term for it, but there's still a lot of interesting pre-deep-learning traditional machine learning work. It's hard to beat scikit-learn there.

**Mike:** Since you're doing stuff with agents, is there a Python library you'd recommend as a good intro to using agents with Python?

**Tim:** I don't have a whole lot of experience there. Mostly for me it's relying on Claude Code or Codex or something like that. But I've tinkered a little with Anthropic's Agent SDK in Python, which is pretty neat. One of the superpowers there is that Claude Code is quite good at using it. Instead of having Claude Code as this generic agent to write code and do things on your computer, you can build your own agent that has access to specific tools. You define what those tools are. I've experimented with it on some non-code research projects where you add your different data sources as tools it can access. It's neat to tinker with, but it hasn't been a big focus of mine.

### Why the handbook exists

**Mike:** That's totally fine. I was curious because it sounds like you do more with agents than I do. Let's pivot and move on to you becoming an author. How did you get into book writing?

**Tim:** I don't know that I think of myself as a book writer. I do like to think about the Python Developer Tooling Handbook as a book, from the perspective that it's not just documentation. It is documentation, but it's really trying to bring cohesion to a topic that has lacked cohesion basically forever in the Python world.

A little of the backstory on me is that I enjoy understanding things and then explaining things I think other people don't understand. If there's something people are talking about a lot that is poorly understood, even if I don't understand it well, I get this drive to dig in. One of my earlier Python projects, which is still up and which I just did a revision on, is pythonplot.com, a website about how to make data visualizations in Python. When I was doing a lot of this ten years ago, ggplot, the R library, was the gold standard, and there was a lot of confusion about how to do things like that in Python. There was confusion about even what Matplotlib was in relation to ggplot. People compared them, but they weren't the same thing. So I rage-built this site to help myself make plots in Python, as a way to try to help others too.

The handbook came from the same place. In my own work I've gotten more and more involved in different packaging challenges, from building packages to helping developers manage their environments. But more and more, through social media and friends over ten years now, I kept having conversations where, one, people just don't understand things and are confused, and two, people don't understand things but are talking very confidently about Python and misrepresenting it a lot of the time.

Then there's the growth in the number of tools we have, not just in packaging but in tooling generally. Python's had all these different formatters, all these different packaging tools. I remember the days when there was competition over testing tools, in the early days of pytest and nose, and then nose2. We've had this breadth of tools and, from my perspective, not a great source on how to know which to use and then how to actually use them. Over the years you get a comparison of Python packaging tools on the front page of Hacker News, somebody's blog post that they put a lot of time into, and those are out of date almost instantly. They're not always totally accurate, and it's really hard to go into the depth you need for people to understand what you're talking about.

So I've had this desire for a number of years to bring clarity here. My general view, which I had before uv came on the scene and which uv has strengthened, is that there's a lot of really good tooling out there. It's just a matter of being able to wade through it and figure out how to apply it to your situation. The handbook came out of that drive. I wanted it to be somewhat comprehensive, somewhat opinionated, but also beginner friendly, and able to expand. I wanted it to be like Wikipedia, where you can read something and dig into different things by clicking around. One of the strengths of the handbook is that I aggressively cross-link. If you're reading about uv and it starts to talk about wheels, and maybe you don't know what a wheel is, you don't have to sit there and wonder or go Google around. I'm going to provide that as a resource on the site as well.

**Mike:** Nice.

**Tim:** There's a multi-part motivation. One is that I really feel like Python has given me my career and I'd like to give back to the community. Secondarily, it's this urge to explain things that are poorly explained and commonly misrepresented. There's a big can of worms here: the Python Packaging Authority has a guide on packaging, which I have some criticisms of, and there's the Python documentation, and there's realpython.com, which I know you're involved with, and then the individual documentation from Astral and individual projects. But from my view there's not one source besides my handbook that tries, in a targeted way, to provide these answers. My hope is to be a source that humans and coding agents alike see as canonical, and to be really up to date and useful. That's a long answer to your short question.

**Mike:** That's a good answer though. The last month, when I've done Google searches on various Python topics, your handbook has popped up a lot as a potential answer to my question.

**Tim:** That's great. I spend a lot of time working with Claude Code on SEO optimization. That's my number one source of traffic for sure. And I'll say, in case there's not another opportunity, that it's a resource: every single page has a feedback form at the bottom. If you're using it and it's not useful, or not answering your question, or you feel like it's wrong, it's just me behind it. I invite that feedback.

**Mike:** I like that. That's kind of what my blog originally was. It was supposed to be a forum. People would ask me questions and I'd sometimes write new articles based on those questions. Then of course I got all the spam, so I had to disable some of that feedback.

**Tim:** I've had to tinker with the spam settings on mine. Either I'm just missing a bunch of stuff or it's actually gotten okay at filtering spam for now. I don't have it as an open source thing. You can't go open a pull request. It's something I own and edit, but I really welcome feedback. I very much feel like this is my way to contribute to the Python community, which has meant absolutely the world to me. I use Python every day at work, and it's fed my family for a long time now, so I'm glad to give back. I've done little open source things here and there, but I've never been a big open source maintainer. This has been a great outlet for me.

**Mike:** I keep thinking one day I'm going to come up with something cool and put it on GitHub, but so far it's just little tiny projects mainly for myself that sometimes people find helpful.

**Tim:** That's a great place to start, and once in a while those things take off, so you never know.

**Mike:** True. And I think it's a good idea that you don't let PRs happen, because some of these projects have started to have to turn off open PRs because of all the AI junk.

### What's next for the handbook

**Mike:** Are there any new projects you're working on? A new book, a new site, something to look forward to later this year?

**Tim:** I do a lot of tinkering, similar to you, a lot of stuff just for myself. I've enjoyed the ability of AI agents to make websites for me. Recently I've been chatting with Claude Code about my workout routines and having it develop new workout plans for me, and then I was like, let's just put this up on a website, and put it on Cloudflare. I do a lot of those kinds of things these days, where I'm happy to be the audience of one.

But my biggest effort is the handbook. There's a lot more to do. I'm exploring the idea of using agents like Claude Code to develop Python, and what the best practices are there as that's evolving. There are areas like profiling that aren't hit very hard in the handbook, a topic I'd like to develop more. I've been trying to put out more content on PyTorch and other modern packages that run on GPUs, which are poorly supported by Python. There are a lot of hacks at the moment just to get those things installed to run on your GPU, so I'm trying to document some of that better.

There's a lot of ongoing work. I use an AI agent to follow the release notes for different projects on GitHub. For a lot of the big projects, Astral's stuff and pip and core projects, I have an agent surface significant things to me so I can keep the handbook up to date. Astral is working faster than ever since they joined OpenAI. Something I'm struggling to keep up with is ty, Astral's type checker, and Pyrefly, the one out of Meta. They're developing very rapidly with a lot of functionality being added, and I'm waffling as to which to recommend to folks. I like to provide good recommendations on the site, and I think they're really neck and neck.

**Mike:** What about Zuban? I feel like that's up there too.

**Tim:** I have a page on it, but I've not experimented with it as much. I find them really hard to test, in that everybody's use cases are different, and even knowing what somebody wants out of a type checker is a hard thing to define. You see that in the different philosophies of the different tools.

I still spend time on all of those things, watching the ecosystem as it develops. My number one area of traffic by far is uv-related, which makes sense. It's probably the most used Python tool at this point in terms of people using it directly. I have a lot of uv content, and I try not to just duplicate what's in the docs. I try to add my own spin and different angles. They're also iterating on uv pretty quick, so I try to keep up.

A couple of little things have spun out of the handbook, and they're on the handbook's GitHub page. I made makefile.uv, which is for people who like to use Make to organize a project. It tries to make it really easy to use uv, and it can essentially replace tox a little bit by letting you test across multiple versions of Python using uv. I haven't really known how to market it, but as I work on the handbook I think about whether there are tools we're using just because, and whether there are other ways we could be doing it. That's one of the things that came out of that. Tox may be a tool that some workflows could consider replacing. But I'm not going to try to be a tool developer at this point. The handbook is my number one focus.

**Mike:** I was just browsing through the topics covered because I was curious what other tools you covered.

**Tim:** I did a big reorganization this spring. If you go to the handbook at pydevtools.com and click the topics page, it gives more of a high-level organization, which I didn't have previously. You can see testing, packaging, security, scientific Python, AI assistance, type checking, and so on. There are a dozen different topical pages at this point. If there are high-level things folks feel are missing, I'd love that feedback. Another one that's fairly light is documentation. I have some basic material there, but that's one that could be well developed. I'm cautiously optimistic that AI tools are going to make it easier for folks to actually have good documentation instead of no documentation, but I think a lot of the old foundational stuff like Sphinx or MkDocs is still really valuable there.

### The type checker race

**Mike:** I was looking at this and wondering if you want to cover mypy more, or, what is that, the one where you package Python scripts into an executable? I don't think that's even on there.

**Tim:** I do have a little of that. If you go into packaging there are some examples around it.

**Mike:** Okay.

**Tim:** I haven't spent a ton of time on those. They don't get a lot of traffic. But cx_Freeze and some of those things are there. And mypy is one where I'd be interested in your thoughts. I really feel like these days, if you're adopting a type checker, I'd encourage folks to go with Pyrefly or ty. Pyrefly even has some mypy migration tools to manage your configs. The speed of mypy seems hard to argue for at this point versus these faster Rust-based tools.

**Mike:** My take, because I ran mypy until, I want to say, January of this year, or maybe December of last. I switched because ty is so much faster, right? But ty, because it's still technically alpha, doesn't catch everything mypy was catching. After using mypy for over a year, I still see stuff that ty doesn't catch, and I'm like, these guys are so far behind on catching everything mypy used to catch. That makes me wonder if I should have gone with Pyrefly, which I wasn't aware of when I switched to ty.

**Tim:** Pyrefly has developed a lot over the last year. Part of it is philosophical, in that ty tries to not be as annoying, but by doing that it means there are things it's not catching. Pyrefly tries to be a little more comprehensive. I've thought a lot about whether there are baseline tests or cases you can come up with to compare them, and it's really hard. Every project is different in how it wants to think about types, and it's hard for me to come up with a single metric that's going to be useful in telling you which one to use. But I think both are very powerful, and I really like Pyrefly. I've been impressed by how far it's come and how much functionality it has at this point.

**Mike:** I want to try it out some more. If I recall correctly, Pyrefly started late in 2025, so it's not even quite a year old. That's when Zuban started, and I think ty was only a month or two younger, or older, so to speak. It's weird that they all came out in 2025.

**Tim:** There's a lot of investment in Pyrefly at Meta. They're using it very widely at the company. I've been able to talk to some of the folks. August of 2025 is when their first commits are on GitHub, but they were already working on it internally, and for now anyway they're very committed to it as an essential project for Python at Meta, which is still really big in Instagram, for example. It has investment as an internal tool in a way that maybe nothing else in Python does at the moment, outside of the CPython interpreter, because they have a lot of users. They're very responsive, and both Astral and Pyrefly have Discord servers where they invite people to come in, answer questions, and give feedback.

It's fascinating to me where we are. Here's Meta supporting this major Python project in a big way, and now OpenAI, through acquiring Astral, also supporting a really core part of Python. It's fascinating especially for those of us who have been around for a while. You remember very meager support fifteen years ago.

**Mike:** mypy came out in 2014, and it was, and I'm not sure if it still is, originally created by Dropbox. I don't know if they've continued to develop it or if they just completely open-sourced it.

**Tim:** I'm not sure.

### Complexity checks and Ruff's autofixes

**Mike:** What was the other thing I was going to ask? Oh, have you thought about talking about complexity checkers or stuff like that?

**Tim:** I have not. Do you have thoughts on complexity checkers? I haven't looked at those in years, and I know the McCabe ones have gotten pushback over the years as to whether they're actually valuable.

**Mike:** Ruff has support for a complexity checker built into it, so I use that a little. Primarily to force, so, the people I work with are a wide variety. We have interns and we have people hired right out of college and then basically everyone in between. You can end up with some really screwy code because of that. So I started adding a gate to protect us from getting really complex code, because it's hard to review. If they put in something with all these different switch statements and if-elses plus other things in it, I'm like, that's not a good function to begin with. You're not really doing DRY. So I encouraged them by having that complexity checker: if you hit it, which is set to about 10 I want to say, you should fix it and try to make your code better. I'm not real strict about it, but I am strict enough that they have to fix it, because it bugs me.

**Tim:** That's interesting. I should take a look at it again. It's C901 in Ruff, the McCabe check. It'd be interesting with coding agents to see whether this is a useful way to rein in agents making things overly complex.

One of the things I've loved in recent years, and I think it's underappreciated, is Ruff introducing autofixing for a lot of its checks. If you enable that in your editor, and there are increasingly many good Ruff rules, including the SIM class around simplifying your code, then relatively small static checks can help prevent some of this. You can't do it perfectly. As the scope of the complexity widens it gets harder to rein in. But especially on a greenfield project, you can enable a lot of that stuff pretty aggressively and just let Ruff tell you what good style is today.

**Mike:** That's cool. I've been meaning to go back, because with Ruff's 0.16 release I think they enabled like 400 additional rules. I have yet to go through the entire list to see what they've enabled. But it didn't break anything by upgrading.

**Tim:** I think it's pretty cool, because they've been really conservative about rules. Overly conservative, I think, because most folks are just going to enable the defaults and move on. I've had some content in the handbook around recommending rules. Now they're recommending a lot more out of the box, and I think that's good. They also make it pretty easy to upgrade. A lot of people might already have the ones they're using pinned. I was able to upgrade my project without issue. That was a big step forward for Ruff just because of folks using the defaults.

I'm looking over at it now, the flake8-simplify class, SIM, in Ruff has maybe 40 rules. Something like a complex expression that could just be replaced by `True` or `False`, it can do that for you. Or using an index variable where you could use `enumerate`. Little Python things. They're nice cleanups, and the ability for it to do them for you, fast, integrated in your editor, is really neat.

### Advice for writing

**Mike:** We're going to pivot slightly, but do you have any tips for working on these blog posts or your book, for someone else who'd like to get started doing something similar?

**Tim:** Part of it is that you can just do it these days. The sky's the limit, but I think constraining yourself is smart. If you look at a site like Real Python, Real Python is trying to take on the breadth of Python, which is great and has been really good for the community. But as I was thinking about what I could do, I can't do everything, and I wanted to tackle one specific area that I thought I could do well. Getting into some constraint on yourself can improve the quality of things.

Also, as I alluded to earlier, you're really building an understanding of the things you're talking about, trying to see what people are confused about and then explaining those. That's half my blog. tdhopper.com is just trying to explain things that seem confusing to folks, and that's really helpful information to get out there. I still highly recommend having a blog in this era, even if you don't update it all the time. It's a useful thing, and it's fun to be able to share stuff. I'm always just trying to understand things, and explaining things can often help you understand them. Having that attitude is useful.

There's plenty more opportunity. I'm fairly convinced Python is going to keep getting bigger, in no small part because AI tools like Python, and that's going to make programs more accessible to people than ever. I was talking to some folks at my co-working space who aren't developers at all, one guy who runs a nonprofit and a guy who runs a landscaping company, and they were both saying, yeah, we don't really know what Python is, but we see our agents writing Python files. They're using AI to solve problems in their domains and seeing Python being generated.

**Mike:** Nice.

**Tim:** As that happens, my view on developer tooling is that these agents are going to learn somewhere. They can consolidate from across different docs, but I've taken the approach of making the Python Developer Tooling Handbook as accessible to agents as possible, so that when folks are looking for help they get good answers. Maybe once in a while people will actually come see my site, but I'm sure sometimes they're going to get that help without any reference to me, which is okay too.

My point being that the age for this kind of thing is not over. Python is getting bigger and bigger, and even when AI can do things for people, they're still going to have questions and be looking for answers. We haven't talked as much about what the tooling handbook means for companies, but my general philosophy is that a lot of companies are underinvesting in their Python developer experience, letting every team figure it out on their own instead of saying, here are the best practices at this organization. That's my long rambling answer. If I were going to write that, I'd try to be clearer than I've spoken it.

**Mike:** What I would say, if someone asked me something like that, is that you want to create a blog for yourself first, because you want to record what you've learned. I'm not good at memorizing everything, because I'm usually drinking from a firehose. So I solved that problem, and I want to write it in a generic way so I don't forget how to do this, and I'll put it on my blog. And guess what, it might be next year, it might be next month, but I know I can go back to my own blog and solve my problem a lot faster because I already have that information there. If that helps someone, that's great.

Point two is that I want to write it in a way that can help someone else, so I try not to throw a bunch of slop onto the website. I try to make it look nice and understandable so the next person who reads it doesn't have to ask me a bunch of questions.

Thirdly, and I never thought about this when I started my blog, employers look at that. They're like, oh, you're active in the community, you're giving back, people find your content useful. That actually goes well on your resume or CV. The same goes with GitHub. That's also your resume. So be careful not to publish crap on your GitHub. Vet it a little, run it through Ruff or whatever, make it nice, because once it's out there that's what people look at. That's how they get to know you.

**Tim:** I fully agree with that philosophy. I've tried to do that over the last fifteen years, and I wish I had done it even earlier, because it's fun now to be able to go back and see years of posts and remember things I used to know about while reading about them.

**Mike:** It's really funny to Google something and find your own answer, and it's like, I did know this at some point.

**Tim:** Yes.

### Hobbies

**Mike:** My last question for you today: do you have any non-technical hobbies that you like to do?

**Tim:** I have four small children, so I don't have a ton of time for hobbies. In my adult life I've become an armchair historian. I have a lot of interest in the history of religion in America. One of my projects over the last year or so has been experimenting with how AI agents can help with that: reviewing documents, synthesizing things, even generating podcasts about it. I tinker on that here and there as I have time. I'm also interested in the history of science and the history of computing and software development.

**Mike:** Cool.

**Tim:** I was never that interested in history until after college, and now it's a favorite thing of mine. Those are my side projects.

**Mike:** Awesome. I really appreciate you taking some time out today to be on the show, and for those of you listening, I'm going to include all the links we mentioned during the show so you can go check out Tim's work, support him, give him some good feedback, and help him continue growing his handbook.

**Tim:** I'd love feedback from folks, and it's great to meet you, Mike.

**Mike:** Thanks so much for being on the show.
