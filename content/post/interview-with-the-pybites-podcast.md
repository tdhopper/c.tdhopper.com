---
title: Interview with the Pybites podcast
date: 2025-07-30T09:18:00.000-04:00
description: In which I talk about my career, uv, the Python Developer Tooling
  Handbook, and more
tags:
  - python
  - developer-tools
  - career
categories:
    - Personal Update
image: /images/podcast-interview-min.png
---
[Bob Belderbos](https://www.linkedin.com/in/bbelderbos/) invited me on the [Pybites podcast](https://www.pybitespodcast.com/1501156/episodes/17574426-198-tim-hopper-on-uv-and-smarter-python-development) to talk about my career, the [Python Developer Tooling Handbook](https://pydevtools.com/handbook/), [uv](https://pydevtools.com/handbook/reference/uv/), [photography](https://photos.tdhopper.com/), and more. Bob was a great interviewer and I hope you enjoy.

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/7xyb2HUcqPEpvLYo8qjQrV?utm_source=generator&theme=0&t=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

* [Listen on pybitespodcast.com](https://www.pybitespodcast.com/1501156/episodes/17574426-198-tim-hopper-on-uv-and-smarter-python-development)
* [Listen on Spotify](https://open.spotify.com/episode/7xyb2HUcqPEpvLYo8qjQrV?si=b828375cdfc243fa)
* [Listen on Apple Podcasts](https://podcasts.apple.com/us/podcast/198-tim-hopper-on-uv-and-smarter-python-development/id1545551340?i=1000719733285)
* [Watch on Youtube](https://www.youtube.com/watch?v=5DT_zL7SiAI)

## Transcript

**[00:00] Tim Hopper / Pybites intro:** One of my most popular pages right now is how to use uv and pytest together. Two great tools. And that's something Astral totally could write about, and maybe they will in the future. But that's not in the core of their documentation. And that's the kind of thing that I wanna help people be able to do. Hello, and welcome to the Pybites podcast, where we talk about Python, career, and mindset. We're your hosts. I'm Julian Sequeira.

**[00:27] Bob Belderbos:** And I am Bob Belderbos. If you're looking to improve your Python, your career, and learn the mindset for success, this is the podcast for you. Let's get started. Welcome back, everybody. This is Bob Belderbos. Welcome back to the Pybites podcast. I'm here with Tim Hopper for this very special episode. Tim, how are you doing?

**[00:47] Tim Hopper:** I'm doing well. Thanks for having me.

**[00:49] Bob Belderbos:** Yeah, our pleasure. Thanks for hopping on the show. I invited you—well, I recently learned about you because of your awesome work with the Python Dev Tooling Handbook. So I wanted to talk about that, but also about your experience and career. I mean, you have been contributing to quite some important libraries and some other things. But before we dive in, you want to quickly introduce yourself to the audience, to the Pybites audience?

**[01:17] Tim Hopper:** Sure. Yeah. Tim Hopper. I'm in North Carolina. I'm currently a machine learning engineer at Spotify. I've been doing Python since 2011, so it'll be 15 years this January that I first started picking up Python. I remember when I first was getting into Python, talking to someone who had done Python for seven years, and I was like, wow, that is just incredible. And now closing in on 15 years, it's really made my career. And yeah, I try to publish things online when I'm able. And my recent endeavor over the last year and a half has been the Python Developer Tooling Handbook, which we're gonna talk a bit about today, which is trying to be a unified and somewhat opinionated source on Python developer tools, which has especially been uv recently, but formatters, packaging, linters, potentially in the future editors. I haven't really gone down that route yet, but just things around the Python developer experience.

**[02:17] Bob Belderbos:** Yeah, let's dive straight into that. So what made you write the guide?

**[02:25] Tim Hopper:** So for the last 10 years, since 2015, I've just really been interested in kind of thinking proactively about Python developer tooling. And in large part because of work, just seeing Python developers without really a clear story on how to use their tooling, and even within companies and teams, just a lot of inconsistency. And then also seeing things that are just set up poorly. And so this kind of became a joke with friends of, you know, they'd ask these questions, I'd say, oh, you should read my book on this. And for years—literally years and years—always joke, "Oh, you should read my book on Python developer tooling," that I always wanted to do.

And then it finally got off the ground last year. I had to have back surgery, and I was sitting in my recliner for three weeks not working. And I was able to start putting it together in a more serious way. And then through 2024, really working on it, and then came out with a full launch this past March.

Interestingly, folks who have been paying attention realize that also coincided with the—I launched right before uv was announced by Charlie Marsh, which has revolutionized a lot of this stuff. And it's kind of interesting. A lot of the reason I wanted to write the handbook was to help people wade through the mess that was necessary kind of pre-uv. Like, you know, I had in mind I was gonna write all these deep comparisons of like, here's Poetry versus PDM, and here's packaging management versus project management, and all these different things. That has really shifted now largely to saying, "Hey, go use uv, and here's the best way to do it," which is not at all what I intended. But I'm actually not mad about that at all, because it's a much happier place to be.

And, you know, things like tutorials, running your first Python project—instead of being 11 steps long—is now literally: run this one command to run uv, and then run the second command to execute your program. Like, okay, that's easy.

**[04:41] Bob Belderbos:** Yeah, we'll link a nice meme about that, like seven steps to one uv command, basically, to get it up and running.

**[04:48] Tim Hopper:** Yeah, which is beautiful. And my—you know, I have had a little second-guessing. Is a tool like this—and my handbook doesn't just cover packaging and dependency-type things, but that's a big part of it—is that still necessary in the age of uv?

And my current conclusion is: where we're gonna be, and I think hopefully where we already are, is not just the same Python user base now using uv, but uv is gonna introduce a whole new swath of users who are able to pick up Python because of uv, and then because of LLMs. I think we're gonna just have more demand than ever for this kind of help.

So I'm glad I'm not gonna go into writing a lot of technical guides on, you know, setting up pyenv and then comparing pyenv to pipenv and all these different things that I had in mind. But instead, on the kind of uv side, I really see it as supplementing what the Astral team is doing in their own documentation. I'm not trying to replace that, but I think there's a lot of things they're not gonna necessarily do, or not do anytime soon, that I'm able to supplement.

**[06:05] Bob Belderbos:** Yeah. So did your page count go drastically down then when uv came out, or were you just lucky that it came out before you were going to write all these other things?

**[06:17] Tim Hopper:** Yeah, I can't remember the exact timeline, but I launched a blog first, and that was within weeks, I think, of Charlie first announcing uv. So I don't think I had any page count really prior to that. But no, I was, you know, in those early days, I was looking at Rye, which, you know, now nobody's talking about Rye, but a year and a half ago, Rye was like, oh, maybe this is the future.

**[06:45] Bob Belderbos:** Yeah.

**[06:46] Tim Hopper:** And so some of my early posts were about Rye, but then very quickly it was like, oh, uv is something. And, you know, as you know, that developed over the last year and a half from a pip replacement to now this very full-featured tool. So I've been trying to keep up with that and, you know, follow the announcements. And then, like I said, supplement a lot of what Astral's doing with, you know, for example, one of my most popular pages right now is how to use uv and pytest together. Two great tools. And that's something Astral totally could write about, and maybe they will in the future. But that's not in the core of their documentation. And that's the kind of thing that I want to help people be able to do.

**[07:29] Bob Belderbos:** Yeah, I mean, their docs are great, but they're also extensive, right? So again, great docs, but doesn't mean that people easily pick it up. What I really like about your handbook is that it's very short, like bite-sized, like we—as Pybites, right? You like these short nuggets. You can—because I thought, oh, another handbook I have to— the first time I heard about your book, yet another book to read. And then I actually started reading it. Oh, I can actually go through this pretty fast because very, very short articles. And I also like how you keep it up to date very well. Like the other day I learned that uv now has its own build system thanks to your handbook. I didn't even know that, right? So yeah, that's awesome. And I think the bite-sized makes it a nice reference. You don't have to sit hours there to read this thing. You can just go there, take what you need, and come back. Just bookmark it. But yeah, it was interesting. It was not in the prep, but I heard about it on the Python Bytes podcast. I heard one of the coaches share it. You share on LinkedIn. How did it get such traction? It was just, I guess you post a lot about it as well. Obviously, it's good. Great.

**[08:44] Tim Hopper:** Yeah.

**[08:45] Bob Belderbos:** What helped you market it?

**[08:47] Tim Hopper:** So far, the traction has really been through my own social media, primarily. I know the Python Bytes guys a little bit from just the internet and PyCon, but I've been on Twitter for 15 years, and I was very active in the early days of kind of the data science community on Twitter and just know a lot of people through that. Charlie Marsh followed me, and he'll often retweet my stuff, which helps a lot on Twitter. And then I've really tried to make LinkedIn a platform. You know, I've worked a number of places, just have a lot of connections on LinkedIn of people who are interested in this kind of thing. And so, yeah, for now I'm really going through kind of the viral marketing stuff has been my goal. I've not been able to make much headway other places actually yet. I've been trying on Reddit and Hacker News without any success yet. But Hacker News seems to love uv these days, so I'm hopeful one day something will end up there.

**[09:50] Bob Belderbos:** Yeah.

**[09:51] Tim Hopper:** But to jump back quickly to what you're saying, the bite-sized thing, that's really the goal of this: not to be a book that you read cover to cover. So, you know, I think I probably could get something like this published, but it's not something to sit down and read. It's a reference guide. And also it's something, as you're saying, keeping it up to date. It's something that's just changing all the time as different tools develop, different tools come out. And so I think the internet's a great place for it. And then being able to just share these one-off things on social media, which has really been my goal so far—each of them really do stand alone. And so that is very much the goal, and I'm glad that you've appreciated it in that way. What I've wanted to do with it, you know, there's been a lot of good content on the internet, especially around kind of the packaging and dependency management stuff—a lot of good blog posts over the years—but they've never been all in one place. And the style and level of detail has always been different. So what I've wanted to do is just be able to consolidate all that kind of information in one place. So you can just go read one article, but then I also have a lot of deep linking in it. So within the articles, I try to link to other relevant content that I have and then external content. And then every page also has backlinks, so you can see what links back to this page as well, to try to make it something that people can explore if they want. But I think for most people, I'm totally happy with it: they just dip in, find one article from, you know, Google or social media, and then move on. And that's—I'm happy to provide that.

**[11:35] Bob Belderbos:** Nice. And what do you use to build it? What's the stack?

**[11:39] Tim Hopper:** It's built on Hugo, which is a static site generator written in Go that I do a lot of my sites in, and it just runs on Netlify, which is a static site service. And then I use—there's a tool called Decap CMS where you can, like, have a content management platform on top of a static site. So actually, all my analytics I pay for, but the rest of it all just runs for free at the moment.

**[12:05] Bob Belderbos:** Yeah. And will it only be written, or are you planning to do some videos as well? Or is it just written?

**[12:12] Tim Hopper / Pybites ad:** I would love to do videos. I just don't have the time at the moment. And I am fearful about spending time on things that are then going to be out of date in three months. But that is very much on my mind. And if I ever have unexpected free time, it's something I would like to dip into. A quick break from the episode to talk about a product that we've had going for years now. This is the Pybites platform.

**[12:43] Bob Belderbos:** Bob, what's it all about? Now with AI, I think there's a bit of a sentiment that we're eroding our skills because AI writes so much code for us. But actually, I went back to the platform the other day, solved 10 bytes, and I'm still secure of my skills because it's good to be limited in your resources. You really have to write the code. It really makes you think about the code. It's really helpful.

**[13:03] Pybites ad:** Definitely helpful, as long as you don't use AI to solve the problems. If you do, you're just cheating. But in reality, this is an amazing tool to help you keep fresh with Python, keep your skills strong, keep you sharp so that when you are on a livestream like Bob over here, you can solve exercises live with however many people watching you code at the exact same time. So please check out pybitesplatform.com. It is the coding platform that beats all other coding platforms and will keep you sharper than you could ever have imagined. Check it out now, pybitesplatform.com. And back to the episode.

**[13:39] Bob Belderbos:** And so uv seems a bit of a panacea. It solves many problems. Are there still gaps that need solving? And yeah, is the handbook kind of done in the structure, or are there still major things you want to tackle? For example, now we have ty, right, for the type checking. Yeah, another amazing effort by Astral. But I think you mentioned editors, maybe. Is there other tooling you want to incorporate?

**[14:07] Tim Hopper:** Yeah, so I think there are a number of things potentially to tackle. You know, Brian Auken from the Python Bytes podcast is a testing guy. He also has the Test and Code podcast. He's encouraged me to do more testing stuff. And that one is a little tricky for me, 'cause I am very much wanting to stay at the level of developer tooling. I say right in the introduction, this is not a book about writing Python code, and testing kind of walks the line there a little bit. So I'm not sure what direction to go there. I think editors is one thing. You know, I would love to do some deeper dives into comparing different editors, the experience of using VS Code versus PyCharm. Also, you could add things, think about things like configuring Vim for Python development. There's just a lot that could do there that I don't—I'm pretty set in my own ways as far as editors go, so I don't have a lot of experience with it. It just takes some work. And I think there are things like going into CI stuff, like, you know, the Astral uv documentation has some nice stuff, actually, of using uv in your CI. But I think, you know, running Python in your CI—and I guess we're overlapping with testing there. So there certainly are some more areas to explore. The way the book is structured is not as topically as—it's based on something that I've really come to love called the Diátaxis framework for documentation, where you have 4 types of documentation: explanations, reference pages, how-to guides, and tutorials. And so the book is structured in that way. And so then I can really just drop in content in those different sections without needing to say, oh, I'm adding a whole new section about editors. For example, if I could just go add a how-to guide to configure Vim for Python development, I can do that whenever I want and may do that. And then the topical structure comes more through the deep linking that's there. So, you know, that organization is something that I've thought about and is hopefully gonna be useful to folks, but then that's also easier for me to not have to just add, you know, say, oh, I have to add a chapter about editors. That's just not how I'm working on it.

**[16:34] Bob Belderbos:** Yeah, cool. Well, I'm definitely happy to share my Vim config or experience. Yeah, I might come back to you on that. Do you expect any contributions, or is this a solo effort?

**[16:48] Tim Hopper:** So right now, the whole thing is a solo effort. I do have—on every single page—a feedback form. And I've not gotten a lot of feedback. But as people, if they see mistakes or things they would do differently, I'm very open to the feedback, and usually mistakes I can fix right away. But for now, I'm really just trying to execute on my vision of it. Yeah, if somebody's really dying to help, I'd be more than happy to talk to you about it. But this is kind of my baby at the moment.

**[17:24] Bob Belderbos:** Yeah, good to know. Because I do know a lot of people that want to get into content creation, and we always highly encourage that to do as a Python developer, because ultimately, you know, this is not only about coding, but also about communication, right, and transferring skills. So for newer Python developers out there, yeah, what do you recommend? What are some of the lessons learned maybe about writing, how to maybe also, like, the imposter syndrome of getting out there, right? And sharing your stuff, because that took me a while, right? To have enough confidence to go out there and tell my story, right? And—

**[18:05] Tim Hopper:** Yep.

**[18:05] Bob Belderbos:** Why I think the collections module is awesome. I don't know, you know, things like that. So yeah, maybe just one piece of advice or two for beginner Python content creators that want to do something like this?

**[18:19] Tim Hopper:** Yeah, I mean, my advice is simple, which is just put things out there. This is something I really made an intentional decision about when I was in grad school and data science was really taking off. There was some data science bloggers out there who were doing really interesting things and then blogging about it and getting a lot of attention on social media. And I realized, oh, I'm doing interesting things. Just nobody knows about them because I'm sitting here in my little grad school office by myself in North Carolina. But I could go start sharing those things. And so I started a blog in grad school, and, you know, tried to share those things, but I think it's valuable to just go start writing and sharing those things. And, you know, you promote them as best you can, but you just don't—in starting something like that—you can't count on having an audience. You just have to really be happy doing it for yourself to start with, and then hope over time that people are interested. And yeah, I mean, you can also delete things in the future. If you look back and are embarrassed about something you did, just go back and delete it. But I think going out and just putting things out there is one of the best things that folks can do, and writing and code and all these—just work on stuff. And the internet makes it easier than ever to publish those things. And then if you're lucky and you get an audience and you were wrong or bad about something, they're going to tell you about it. And then that's an opportunity for you to learn, right? So it's just a win-win, I think. So yeah, I don't know. I guess just do it is the advice there. Yeah.

**[20:11] Bob Belderbos:** What doesn't kill you makes you stronger.

**[20:13] Tim Hopper:** Something like that.

**[20:15] Bob Belderbos:** I like the idea that it's all editable, right? You might make mistakes and then you fix them. Nobody's gonna learn without mistakes, right?

**[20:23] Tim Hopper:** Yeah. I mean, once in a while I make changes to 15-year-old blog posts. I'll, like, go back and look at them and—or delete things, right? There are things that I liked at the time, and now I'm like, oh, I don't need that out there.

**[20:34] Bob Belderbos:** I probably should do that as well. Yeah, but I still have my 2010 post out there. Maybe also I just leave them there just to—yeah, I think I sucked at software development.

**[20:46] Tim Hopper:** Right. The reality is most people care about you a lot less than you think. Yeah, but also a lot of people really like to see the development of your thought over time, right? So, like, I'm kind of notorious on Twitter for retweeting myself for old tweets. You know, I have tweets from when I was trying to learn Python in 2011 that are just really fun to go back and see and think about how far I've come. And nobody cares about, like, you know—people just enjoy seeing that people learn. So I don't know, I—unless you're just going out and publishing something really heinous or, you know, mean or something. Like, if you're just learning, nobody's going to begrudge you for that.

**[21:32] Bob Belderbos:** Exactly. Yeah. So you retweet your old stuff and then with new, new views, like.

**[21:37] Tim Hopper:** Yeah, it's just kind of been—I mean, I've just had a lot of one-liners and things over the years that still amuse me. So I go back and retweet them or maybe add commentary to something from years ago.

**[21:54] Bob Belderbos:** Yeah. Yeah. Awesome. So on the mindset a bit, you also wrote about being turned down for data science jobs. What mindset or practices helped you stay resilient? Because that—yeah. And sorry, it's something that engineers are going through these days as well, because the job market is incredibly difficult now. So, yeah, I was definitely curious about that.

**[22:19] Tim Hopper:** Yeah, something I blogged about and talked about, it's kind of getting rejected from jobs. And I like to be as transparent about that as I can because I think you look around and see the selection bias of all the people—they have all these great jobs, but you don't necessarily know the jobs that they haven't gotten. I got rejected from my current employer three years before I got an offer from my current employer. So, yeah, and I encourage people to go read that post. It's linked right on the top of my website, tdhopper.com. But in terms of staying resilient, I think at this point in my life, it's easy. I have four kids, so I have a lot of mouths to feed. That makes you resilient. But I think—

**[23:12] Bob Belderbos:** Wow.

**[23:15] Tim Hopper:** Earlier, one of the realizations I had was: sometimes you can just interview poorly, and that's 100% true, but also you just don't know what's going on inside the company that you interviewed at. And a lot of this you learn through, you know, being in a company and being in the hiring process. But you can get turned down for any number of reasons that are completely unrelated to how well you interviewed. And so I think that's helpful to keep in mind. And not that you don't personally want to get better—I know that there are certain weaknesses I have in interviewing—but it's very possibly just not a personal thing at all. Like, there could be internal conflict at the company. Maybe they already were interviewing somebody else that they hired. Maybe they lost funding for reasons outside of the control of that department. There are just, like, so many reasons.

So you just have to keep at it and keep your head up even when it's discouraging. But yeah, that's a tough topic.

Something enjoyable: I think it's also linked somewhere on my blog, but some friends and I, on an old podcast called Adversarial Learning Podcast, talked about bad job interviewing experiences on a podcast maybe six or seven years ago. And it's quite humbling, and I don't know, it's—I feel for anyone looking for jobs. It's a difficult thing to do, and you just have to grind through it.

**[24:48] Bob Belderbos:** Yeah, I like this advice. So basically, look at the bigger picture and don't take it personal, right? Like there's probably more. It's very easy to think you did a bad job or it's all you. No, no, there can be a million things, right, going on their side, and they might not tell you, right? Yeah, I think it's difficult not to take it personally, but yeah.

**[25:11] Tim Hopper:** Yeah.

**[25:12] Bob Belderbos:** Okay. Yeah, that's extremely tough. And we'll link these posts because I think it will help people, especially in these tough times. Yeah.

**[25:22] Tim Hopper:** All right.

**[25:23] Bob Belderbos:** I got a couple more questions before we come up on time, but open source. So you have contributed to CPython, Pandas, other major libraries? And how has that shaped your approach to building tools? And yeah, let's start there.

**[25:38] Tim Hopper:** Yeah, I don't totally know how it's shaped my approach to building tools, other than I've never been a serious maintainer on an open-source project. Most of my contributions have been small and focused things that I need to go out and fix. And I mean, I think in a lot of ways that's just how I do things: here's a problem, go out and find a solution to it. And sometimes that means making a contribution; sometimes that means making an issue.

And I guess I try to have a similar mindset in my own—you know, I've done a lot of internal tool development—and just seeing things as, you know, everything can be improved, and then also seeing or setting things up in a way that others can improve.

So if you're building internal tools at a company, you could build your repo in such a way that you're the only one who understands it and knows how to modify it. Or you can set things up like a lot of the—you know, CPython's a big complicated project, and it's not trivial to get started to make contributions. But they actually do want you to be able to bring contributions, and they have documentation and things set up to help you do that.

And I think a lot of that can be applied, especially on internal tools—or, I mean, I guess any kind of open source tools—is building things in such a way that you invite contributions.

And, you know, a lot of my open source work has come through not just my own development, but then some handholding from more core developers on the thing. And I've been very thankful for that. Certainly when I made a—this has probably been almost 10 years ago—I made a Pandas contribution, and I was just helped a lot through that. But they didn't just say like, oh, you know—they didn't just turn me away just because I was new, but they were wanting to help me make a contribution. And I try to offer that same thing to others as well.

**[27:46] Bob Belderbos:** Right. No, awesome. And any additional tips for devs making their first—kind of similar to the content question, right? Like, there are developers that might not have ever done open source contributions, and it's scary. And now actually we learned that, yeah, they could have turned you away. And usually that's not the case because they do welcome the help because they usually are overworked and they need all the help they can get, right? So again, that's a bit of that imposter syndrome there. Anyway, just leave it open. So what is one tip you would give a beginning open source contributor and developer?

**[28:22] Tim Hopper:** Yeah, I think, yeah, just, I mean, it's the same thing. Look for something small. And whether it's something you identified or, you know, a lot of the bigger projects will tag tickets as like, you know, “good for beginners” or something like that. Look for something small and then just start to work your way through it and ask the questions you need to ask. And if it becomes apparent that you're not getting the help you need or you're not gonna be able to do it, it's okay to walk away from it. But yeah, I think it's a really good—like, I have friends who I really respect in the industry who've never made any kind of open source contribution, and I think it's a great experience to have. And I can think of very few cases where, like, somebody just didn't really seem to want contributions at all. And if you go into it carefully and, you know, you're not—you know, I think there's a problem right now of just kind of AI slop-type contributions. Don't do that, and don't get in over your head and write, you know, don't submit a 1,000-line PR that you don't even understand and expect somebody to make sense of it. But look for something you can do in 30 lines and then work your way through that. That's—I think probably my Python and pandas contributions, maybe aside from testing, are just a few lines, but very worthwhile experience for me.

**[29:46] Bob Belderbos:** Yeah, I think so much comes together, right? Because it's understanding a codebase, collaborating, making changes that don't break anything, adding tests, etc., etc.

**[29:58] Tim Hopper:** Yep.

**[29:58] Bob Belderbos:** So do you want to highlight one of these contributions? pandas, CPython— which one of those?

**[30:04] Tim Hopper:** My CPython contribution, I kind of like—I mean, I am proud to have made a change to it. But I literally was doing something for a colleague. And you can configure PDB, the Python debugger, with a config file. And there was something with how it looked for a config file in your home directory that relied on a certain way of looking for the home directory. You know, there are different ways of looking for a home directory. And so we were trying to do something where he was like calling PDB from inside IPython or something. And basically we just needed—another colleague and I worked on it together and went in to change, to generalize how it looked for your home directory so that this certain very nuanced thing we were doing would actually work. And it was a good improvement, but it wasn't something that most people would ever—I didn't even know there was a way to configure PDB prior to this. But yeah, it was a pretty, pretty subtle change within PDB. But again, through that, I got to learn how to build C Python and run the test suite, interact with the developers, and just see how that process worked. And it was 100% worthwhile. And I would love to do more. It just hasn't been a priority.

**[31:31] Bob Belderbos:** Yeah, yeah, cool story. Yeah. Well, let's leave the coding a bit. So you're also into photography, right? Wildlife photography. Yeah, a bit about that.

**[31:43] Tim Hopper:** These days I mostly photograph my kids, but I love wildlife photography. Around where I live, birds are kind of the big wildlife to do. But a few—I guess it was before COVID now, 2019—I was able to go out to Yellowstone National Park and do a wildlife tour and a lot of photography out there. But yeah, that's kind of one of my main hobbies that I really enjoy doing.

**[32:08] Bob Belderbos:** Yeah, nice. And do you see any parallels between that and programming in terms of focus, iteration, storytelling?

**[32:16] Tim Hopper:** I honestly, I think a lot of it is the exact same stuff we've been talking about, which is like photography and programming. The thing you need to be doing is just like practice, practice, practice. And digital photography has made that essentially free once you have some equipment. I mean, and most people, if nothing else, you can start with a phone. But also I think in both it's okay to make things that you throw away. Like we were talking about earlier, it's okay to make something you're proud of now. And then a few years from now you look back and say, maybe it wasn't that great, but that's just your step along the way. I think there's a lot of parallels there. And I think also interestingly, both are easier now than ever in that the tools are so accessible to people. You know, I'm old enough that I never had to buy a compiler, but when I was in high school trying to teach myself some programming, that's, you know, when people were still buying compilers, and learning to program even on the internet—this would've been, you know, 25 years ago—was very difficult. And now we just have so many resources of programming, but the same goes with photography. I mean, YouTube has just revolutionized learning photography where you can literally watch the photographers go out and do an HDMI capture of what they're seeing through their viewfinder on their camera. And you can see exactly what they're seeing, see what their settings are. And so both of those things are easier than ever. And folks can go out and start picking those up and just do it and then see where it goes. I think that's a really neat opportunity that I would have loved at earlier times in life, to have all the resources available today.

**[34:07] Bob Belderbos:** Yeah, we're spoiled in a sense, but that also brings like there's just too much. And how do you choose the right ones?

**[34:14] Tim Hopper:** Yep. That is a challenge.

**[34:17] Bob Belderbos:** And nothing beats hands on the keyboard or hands on the camera in this case, right? Like, you need to do it.

**[34:23] Tim Hopper:** So I think the big, big point there is you just do it, do it, do it with both things and be bad until you're a little better and a little better and a little better.

**[34:36] Bob Belderbos:** Deliberate practice. Yeah. Cool. So yeah, thanks for sharing all this. Definitely enjoyed it. Two more questions. Yeah, what's next? What are you learning? What are you excited about now in the industry? I mean, obviously keep doing the handbook, and that's—thanks again for that, that's amazing. But any other stuff you're planning to learn or develop or whatever?

**[35:00] Tim Hopper:** Yeah, I'm trying to get better at PyTorch for work. It's something I've kind of dabbled in over the years, but doing a lot of now. And I think kind of a less interesting answer is I'm just really excited to see what uv is gonna continue to bring in terms of accessibility. And I think we're gonna continue to see a lot of impact made by that, of it's becoming so easy to get started with Python where there were barriers before. And then I think at the same time, seeing that happen with LLMs, which are both running Python but then also helping people write Python, it's just going to be very, very interesting. So, you know, I think that there's a bright future for code still and for people to know about code. And I think Python is obviously going to play a huge role in that. So yeah, I'm hopefully going to play my own part in helping people in that direction, but I'm just really excited to see what that's gonna bring. Hey everyone, a quick break from the episode to introduce you to our brand new coaching program, the Pybites Developer Cohorts. Now these are cohort programs typical of a bootcamp-style interface of working together with a group of other people, except it's got that unique Pybites twist on it where you are going to be building all day, every day. There is very little material that you'll be consuming, so you won't be stuck in that tutorial paralysis. The point here is that you will be building from day one and alongside other people also building the same app in their own repositories. You can all talk, you can all share, you can all grow together. And of course you'll have a Pybites coach supporting you the whole way. So if you are interested, just check it out.

**[36:59] Bob Belderbos:** Click the link below.

**[37:00] Tim Hopper:** It is pybitescoaching.com, and we will see you in the next cohort.

**[37:05] Bob Belderbos:** And last question, what are you reading currently, or what have you read? What's a book recommendation?

**[37:11] Tim Hopper:** Yeah, I'm just started picking up the PyTorch Pocket Reference. Just trying to understand kind of the mechanics and semantics of PyTorch better. I don't really—a lot of the PyTorch books are kind of deep into, you know, modeling things that I don't—I like know the modeling, but I'm just trying to understand how to use PyTorch better. And then somewhat unrelated, just started actually listening to the audiobook, but a book called *Last Call: The Rise and Fall of Prohibition*, where 100 years ago alcohol was outlawed in the US. And that's been very fascinating. I'm kind of a history buff, and it's—I'm only a few chapters in, but it's shaping up to be one of my favorite history books I've ever read. Really just amazing history and, well, really well-told story. So, oh wow, that's kind of my other interest outside of photography and programming is history.

**[38:03] Bob Belderbos:** Nice. Well, we'll link that. Yeah, any—I like history as well. Any other resources you use for history?

**[38:10] Tim Hopper:** No, I mostly listen to a lot, a lot of my history on audiobooks, and mostly American history. But yeah, I just kind of pick and choose. I don't have any huge goals there necessarily, just find things that are interesting to me. And Spotify, to make a plug for, at least for American users: Spotify listeners get access to an audiobook catalog now, which has been really nice. It's allowed me to kind of dip into things and then give up if I'm not that interested. Which I guess can be bad too, but I've really enjoyed that for just exploring the breadth of audiobooks more.

**[38:55] Bob Belderbos:** Yeah, nice. Yeah, I like these extra hobbies and interests, right? Like coding, you can get sucked into, but it's also good to have different things. I have that with literature, for example. I really like the classics and then—

**[39:10] Tim Hopper:** Very good.

**[39:10] Bob Belderbos:** Good for balance. Yeah. Anyway, cool. Any final shout-out or piece of advice before we wrap up? Yeah.

**[39:19] Tim Hopper:** And only shout-out is I love a follow on social media. You can find me on LinkedIn. I might—I don't accept just like every connection on LinkedIn, but you can at least follow me and see my posts. And if you're on Twitter or X, I'm TD Hopper on there. Still try to be active on there as well. But love to connect with people and learn from others and hopefully have folks learn from me as well.

**[39:39] Bob Belderbos:** Yeah, we do. Well, thanks for hopping on today and sharing, and thanks for the amazing work. And I hope many more people check out your Dev Tooling Handbook because it's super useful. And yeah, thank you, Bob.

**[39:56] Tim Hopper:** All right, cheers. Hey everyone, thanks for tuning into the Pybites podcast. I really hope you enjoyed it. A quick message from me and Bob before you go: to get the most out of your experience with Pybites, including learning more Python, engaging with other developers, learning about our guests, discussing these podcast episodes, and much, much more, please join our community at pybites.circle.so. The link is on the screen if you're watching this on YouTube, and it's in the show notes for everyone else. When you join, make sure you introduce yourself. Engage with myself and Bob and the many other developers in the community. It's one of the greatest things you can do to expand your knowledge and reach and network as a Python developer. We'll see you in the next episode, and we will see you in the community.
