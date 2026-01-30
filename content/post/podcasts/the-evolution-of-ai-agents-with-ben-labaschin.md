---
title: The Evolution of AI Agents with Ben Labaschin
date: 2026-01-09T16:41:00.000-05:00
description: "Tim speaks with Ben Labaschin, principal machine learning engineer
  at WorkHelix, about the role of AI agents in software development and
  enhancing organizational efficiency. "
categories:
  - Podcast
image: /images/podcast.png
---
## Listen
{{< spotify 2IcWcUKJRdjaXsLKh2J4ca >}}

## Links
- [Ben's Twitter](https://twitter.com/EconoBen)
- [Ben’s Website](https://econoben.dev/)
- [WorkHelix](https://www.workhelix.com)
- [What Are AI Agents - O'Reilly Book](https://www.oreilly.com/library/view/what-are-ai/9781098159726/)
- [Managing Memory for AI Agents - O'Reilly Book](https://www.oreilly.com/library/view/managing-memory-for/9798341661257/)
- [Bead Development Tool](https://github.com/steveyegge/beads)

## Subscribe
* [RSS Feed](https://tdhopper.com/podcast/feed)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/into-the-hopper/id1499693201)
* [Spotify](https://open.spotify.com/show/63NrgKMVb0VTwkklGboIjy)
* [Overcast](https://overcast.fm/itunes1499693201/into-the-hopper)

## Summary

In this episode of *Into the Hopper*, I sit down with Ben Labaschin, a Principal Machine Learning Engineer at WorkHelix and author of the O'Reilly books *What Are AI Agents* and *Managing Memory for AI Agents*.

We dive deep into the current state of AI engineering, moving beyond the hype to discuss the "brass tacks" of developer workflows. We cover how AI is reshaping personal projects, the shift from "coder" to "conductor," and the specific tool stacks (like Beads and Spec-Driven Development) that Ben uses to manage agent memory effectively.

## Transcript

**Tim:** Welcome to the Into the Hopper podcast. Today, I'm joined by Ben Labaschin, a principal machine learning engineer at WorkHelix, who has been instrumental in the company's growth from seed stage to its $75 million Series A valuation.

Ben is the author of O'Reilly Books, *What Are AI Agents* and *Managing Memory for AI Agents*. His work spans the full stack from building enterprise causal inference architectures and async-parallelized LLM APIs to delivering over $8 million in savings for global logistics through optimized machine learning systems.

Beyond the Code, Ben is a published researcher focusing on firm-level exposure to LLMs and the economic impact of those technologies on labor. Welcome, Ben.

**Ben:** Hey, man. I appreciate it. Thanks for having me, Tim.

**Tim:** You and I have known each other a while through the internet, though I think this is really the first time we've kind of talked one-on-one.

**Ben:** Yeah. You know, the internet can be really easy to communicate, but it's great to be able to actually speak to you in person.

**Tim:** Yeah. We're both former NormConf speakers. Shout out to Vicki Boykis and speaking on our NormConf official Shure microphones, which sound good.

**Ben:** It's one of the best things to come from the conference other than all the awesome talks.

---

### AI Workflows and Developer Experience

**Tim:** This is an interesting podcast for me because I've gotten more and more interested in AI workflows and how AI is impacting the developer experience. I did three interviews last year. And obviously, it's been a wild ride of 2025 and so many changes from what we were doing.

I interviewed Ravi Modi and at the time he talked about how his workflow was still copying and pasting code snippets into ChatGPT and that was his iterative process. I believe from talking to him he's given up on that. But that's what a lot of us were doing at least 18 months ago. And now, I think agents are taking over the world. You're an interesting case because not only are you using these tools as a developer, but your company is also looking at these tools from a different angle.

**Ben:** That's right. I mean, I've gotten the benefit of seeing both sides of things. We kind of started doing that work before AI agents really were a thing. So that's been a fascinating experience to see how companies were anticipating what was coming versus when it actually came.

The long and short of that is that companies really weren't interested in being told, "Hey, there's this new paradigm coming, you should prepare for it." When it actually happened, they weren't prepared for it. And now they're starting to adapt to it. So yeah, I get to use the tools and then I get to see how individuals actually use them at enterprise companies and sort of trying to measure the impact of that usage.

**Tim:** What's the TLDR of what WorkHelix provides for the companies?

**Ben:** Basically what we do is we do a deep dive into a company's labor system and say, *"Here's where your workers are. Here are some opportunities to leverage AI. Oh, you're already leveraging AI? Let's take that work that you're doing and measure quantifiably the impact that's having in real dollars on your company."*

Because the philosophy is: **if you can't measure it, then you can't really manage it.** And we're trying to help companies manage it because, quite frankly, I don't think there's a real grasp on how to manage using these tools, what's effective, and what's not.

---

### Measuring AI Impact on Productivity

**Tim:** Are AI agents making developers more efficient?

**Ben:** It's a really loaded conversation. Constantly you'll see published papers that seemingly contradict each other. One paper says, "Game's over. All jobs are going to be replaced." Another says, "We have evidence here that work can't be replaced." You can probably guess that it's somewhere in the middle.

If you measure it as **more lines of code**, then the answer is yes. More lines of code are being produced at a rapid speed. But is it effective? By effective, I mean, you're seeing more LLM-generated code being deployed into production where end users are actually using it.

At a personal level, I would say 100%. I am far more effective as a developer with an LLM than not. And the way that I measure that is: *How many personal projects am I actually finishing in a given year?*

**Tim:** Yeah, I think that's something a lot of us are seeing—the ability to work on personal projects.

---

### Personal Projects and AI Tools

**Tim:** My output on personal projects has gone down rapidly with my number of children. But two things are being powerful:

1. **Cloud Code on the phone:** The ability to code on the go is so cool.
2. **Codex/Agents grinding:** I just see on Twitter people talking about how Codex can just grind away on things. The ability to give it a task and just let it go for a few hours has been very cool.

I just deployed last night. I was thinking, it would be cool if I could write more applications that I just deploy on my local network. We are both home lab nerds. I told Codex: *"Get me a VPS, install Coolify on it, and put it behind my Tailscale network."*

It probably took 15 minutes of interacting with it for what would have been hours of work. That to me is so fun on the personal side.

**Ben:** It is. And I think that there's this universal pressure that we all know exists in this field of wanting to stay up to date and wanting to build more. I know the feeling of not feeling like I can take myself away from a problem. And now it's like, I can check my phone and it's working and then I can get back to being present.

However, I am multitasking in ways that I never did before. I have five different terminals open, perhaps more, of different projects. No one is forcing me to do that... but context switching and having all of these things you're attending to in your mind is probably not super healthy.

**Tim:** The observation folks have had is that we're becoming more like managers or conductors. I look at my manager's calendar and she's in meetings all day while in three different Slack discussions. That's kind of more how we're all operating now.

**Ben:** I think the expectations are slowly going to change for workers too. I haven't felt it yet, but as a hard worker, if I can do seven things at once, suddenly people start to say, *"Well, this is just the rate that Ben works."*

The rubber will meet the road when the quality of work starts going down or things start getting messed up. That's when people start saying, "Okay, we got to make sure that there's not too much being worked on simultaneously."

**Tim:** I agree. One of the things we're still emphasizing a lot is human review. I've been working on a Claude skill to review code. Using it to look for the things that *I* want to look for that are relevant to our team—it's finding bugs that I never would have found.

I’ve been pondering: How analogous is this to the transition off of punch card machines 40 years ago? You could bemoan that we missed the time when we had to really think through the instructions before putting them into the machine. Now, you get into a terminal and you can iterate fast.

**Ben:** Looking back at economic history is generally very helpful. I look back at the 18th and 19th centuries to understand technological shifts.

I think the **printing press** is a good analogy. It was a democratization of information. I feel agents are parallel to that because it's a democratization of being able to *build* things. I don't know what the consequences are going to be in 20 years, but I think they'll be seismic.

---

### Specialization in the Age of AI

**Ben:** One thing I think we wanted to talk about is this idea of specialization. Where does specialization go with the advent of agents? I think it's being flattened. I'm not a front-end engineer, but I can now do front-end work because agents are getting better at it.

However, I would argue that specialization is still going to be valuable. Just because you can generate art with Midjourney doesn't mean the meaning of a human artist painting a picture isn't valuable.

**Tim:** If you think about the **"T-shaped engineer"** idea—breadth and depth—you wonder, does this just enable us to have a bigger T?

I just merged a front-end task today using the Claude front-end skill on a Next.js project. I don't know JavaScript particularly well, and I definitely don't know Next.js. I implemented something that looks really nice and does what I want. This was previously an infinite-length task for me—go learn all the mechanics of Next.js.

**Ben:** Opus 4.5 has been one of those game-changing moments. It’s more expensive, yes, but it can do more with less, so it starts becoming cheaper because you're not coding as much.

But there is a detriment. In the past, you would have struggled through AWS documentation or CSS, and by failing, you learned. Junior engineers might leverage these tools to get ahead, but as a consequence, they might not be super knowledgeable about the depth of these things themselves.

**Tim:** It’s easy to have rose-colored glasses. The joke from 2010 to 2021 was that we just copy and paste things from Stack Overflow. In a lot of ways, we were really bad large language models!

You have to continue to be **deliberate to learn**. Yesterday I did some Kubernetes ops work. At the end, I asked my Cloud Code session: *"Teach me about all the things that we just did. Walk me through the steps."*

**Ben:** I completely agree. The tactics you're using to get that learning might look different, but you have to be deliberate.

---

### Toolset Evolution Over Time

**Tim:** Let's step back and talk about what your toolset has been. How has that changed over the last year?

**Ben:** My toolset has certainly changed. I used to focus on prompts. Now, I have an `agents.md` or a `claude.md` that I symlink so they are the same for different models.

If there are three things I use, it's:

1. **GitHub:** For that local vs. remote tracking of memory.
2. **Beads:** For consolidating how local memory is being used and breaking those down into atomic tasks.
3. **Spec-Driven Development:** I think the most important thing you can do to improve the memory and agentic power of your tool is to simply break down the problem into a spec that the tool can always return to.

**Tim:** I do a lot of spec-driven stuff too. One of the Claude Code developers shared a skill just for building a spec by using the "Ask User Question" skill. It forces me to think through things.

**Ben:** I have a rule in my `claude.md`. I say:

* There should be an `architecture.md` (diagrams, high-level goals).
* There should be a log that it returns to.
* Before we do anything, read the architecture, read the readme, read the log.
* Create **Beads** tasks from our next step in the architecture document.

It tends to be very effective.

**Tim:** I keep coming back to Fred Brooks in *The Mythical Man-Month*:

> "I believe the hard part of building software to be the specification, design, and testing of this conceptual construct, not the labor of representing it."

I’m spending more time articulating what I want than I've ever done in my entire career.

**Ben:** I just realized... I would always say, *"Being in the code helps me figure out what I'm going to do."* I'm so the opposite now. That's crazy.

**Tim:** And at the same time, it allows you the freedom to come up with a plan that you can throw away without being wed to it because you didn't spend hours typing it.

**Ben:** That's so astute. My ego is less invested in this code because I put less of myself into the code.

---

### Resources & Closing

**Tim:** This was great. Can you tell us a little bit about your books with O'Reilly?

**Ben:** I've written two publications:

* **What Are AI Agents**
* **Managing Memory for AI Agents**

My focus for the last year and a half has been agent memory. If we can work with their memory effectively, I believe we can get what we want done faster.

**Tim:** You can also find more about Ben at [econoben.dev](htps://econoben.dev). Thanks for joining us!
