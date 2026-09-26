---
title: Writing a Math Textbook with Claude with Professor Ghrist
date: 2025-01-18T10:03:00.000Z
description: Dr. Robert Ghrist shares how he used Claude to "direct" the writing
  of a beautiful linear algebra textbook in 55 days.
categories:
  - Podcast
image: /images/podcast.png
tags:
  - ai
  - mathematics
  - writing
---
In this episode, Professor Robert Ghrist from the University of Pennsylvania discusses his beautiful new linear algebra book created with the help of the Claude LLM in just 55 days. Professor Ghrist explains how he used Claude to assist with the book’s outline, writing style, formatting, and consistency, emphasizing his role as a director guiding the LLM.

## Listen

{{< spotify 1JMdPOSlmk2oSsiYEfJzIs >}}

## Links

* [Professor Robert Ghrist](https://www2.math.upenn.edu/~ghrist/) from the University of Pennsylvania.
* [Professor Ghrist's Twitter](https://x.com/robertghrist)
* Professor G's [Twitter thread](https://x.com/robertghrist/status/1874105560641220830) about composing a linear algebra book with the assistance of the Claude LLM.
* [Funny Little Calculus Text (FLC)](https://www2.math.upenn.edu/~ghrist/FLCT/)
* [Elementary Applied Topology](https://www2.math.upenn.edu/~ghrist/notes.html)
* [PDF of the new linear algebra book](https://www2.math.upenn.edu/~ghrist/preprints/LAEF.pdf)
* [Order a print copy of the linear algebra book from Amazon](https://amzn.to/4apUkbe)

## Subscribe

* [RSS Feed](https://tdhopper.com/podcast/feed)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/into-the-hopper/id1499693201)
* [Spotify](https://open.spotify.com/show/63NrgKMVb0VTwkklGboIjy)
* [Overcast](https://overcast.fm/itunes1499693201/into-the-hopper)

## Transcript

**[00:11] Tim:** Welcome to episode 11 of the Into the Hopper podcast. I'm Tim Hopper, and this is my occasional podcast on topics that are interesting to me, which recently has been in the area of LLMs and generative AI. I have a special guest today, Professor Robert Ghrist from the University of Pennsylvania, who I have followed on Twitter for, I think, 14 years now, roughly that, who has done a very interesting effort. He had a tweet thread recently about how he composed a linear algebra book with the assistance of the Claude LLM from Anthropic. And I have a copy of the book and have been very intrigued by his process here and by the book itself and by him as an instructor and teacher. Very interesting background and history of book writing and I think a unique style in various ways. So thank you for joining me.

**[01:08] Robert Ghrist:** Thank you so much, Tim. Happy to be here.

**[01:10] Tim:** So your mathematical background is applied topology, which that means you turn coffee cups into donuts or something like that?

**[01:18] Robert Ghrist:** Something like that. My original background is in mechanical engineering. That's what I did my undergrad in, but I fell in love with the mathematics that I was learning there. So much so that I went to graduate school, got a PhD in applied math, and when I got to grad school, I took a topology course—algebraic topology—and found that was the thing that really got me. And so I spent the rest of my career finding applications of topology—algebraic, geometric, otherwise—to interesting engineering problems all over the place.

**[01:52] Tim:** Very cool. And you also, I think teaching seems to be a passion of yours as well. It is.

**[01:58] Robert Ghrist:** The teaching and the research really go together. I find that the more I teach the basics to students, the more it just opens up new vistas, even in the most advanced research stuff that I wind up doing.

**[02:12] Tim:** Oh, well, that's an interesting statement. That would be an interesting podcast of its own, but I won't go down that rabbit trail. I know you've gotten a lot of notoriety, at least on social media, for your calculus book, which was written maybe 15 years ago now in a somewhat whimsical way. Maybe you could tell us a little bit about that book or some of your book-writing history.

**[02:35] Robert Ghrist:** Yeah. So I have an unusual oeuvre of publications. I find it difficult to write. I get writer's block and then I just can't do anything. And so the way that I have gotten out of that in the past is I'll, I'll draw pictures. And, you know, sometimes it's doodling, sometimes it's a little more serious, but I got no training. So it's, you know, it's basically just doodling. So at one point, oh my gosh, yeah, it must be like 15 years ago, something like that, maybe more. I was doodling up some notes for the calculus course that I was teaching, and I decided, hey, I've got this, this cool tablet where I can, you you know, use a pen and draw on it. Why not make an electronic calculus book that's just all cartoon-like? Not exactly a comic book, 'cause I didn't know how to draw comic books, but, you know, just something whimsical and fun. And that was the Funny Little Calculus Text, or the FLCT, which I just put out there and, you know, let's see where it goes. And some people found it useful.

**[03:41] Tim:** It's a fun little volume, and I suggest, you You know, people just go find it. I'll link it in the show notes, but it's, it's neat to, to look through and it's helpful to see topics presented in new angles. Something I really enjoy. And I think if you've done some calculus, it's, it's, it's still interesting to go poke around that. Are there other textbooks you've written? I should have done some more background research here, but— Yeah.

**[04:04] Robert Ghrist:** So I've written a couple. I wrote a book on applied topology. It's called Elementary Applied Topology.

**[04:11] Tim:** I do remember that one coming out. Yeah.

**[04:13] Robert Ghrist:** Was, that was fun. But see, that one, it, it took me like 5 years to write it. I started it in 2009, didn't publish it till 2014. And, uh, again, I just, I had this writer's block. So I would sit down and try to take all the things that I was trying to explain in, in words and just draw little iconographic images that sort of had the kernel of the idea embedded in it. And that wound up becoming an essential feature of the text. There were no exercises that were ever produced. The images, about, about one per page, I think like about 200, those are the exercises. There's no captions to the figures. There's no textual labels of anything. It's just iconographic. And if you read the text and you look at the image and you're like, oh hey, I get it, it's like this puzzle thing where this means this and this means this, then you've understood. And if you don't get it, if you're like, what the heck, what is this, why is this here, then maybe you have some more thinking to do. So those images wound up being the exercises for the book.

**[05:22] Tim:** I, I'm interested in this new book, kind of 2 areas of background on here. One is This is just an undergraduate, quote, just an undergraduate linear algebra book that you've recently produced, which certainly there are unlimited number of undergraduate linear algebra books. So one leg of the background is why another one? And secondarily, you've been assisted with LLMs, interested in kind of your background with LLMs over the past few years, but let's start with the first one. Why another undergraduate linear algebra book?

**[05:53] Robert Ghrist:** Yeah. So the impetus for writing this is that we have a new undergraduate degree program in artificial intelligence in engineering at the University of Pennsylvania. I spent a lot of 2024 and late 2023 setting that program up, getting it launched, and this linear algebra course is in support of that program. So it's linear algebra and it's the basics, but it's oriented towards AI, towards machine learning, getting students just absolutely cracked on that aspect of linear algebra so that when they take their later courses in the AI degree program, really anything in engineering, they're really contemporaneous with where the field is at. I could have cribbed together this part from this book and this chapter from this book, and then And then all the notations would be conflicting. Some people call it a kernel, some people call it a null space. What is it? The usual complaint.

**[06:57] Tim:** Yep.

**[06:57] Robert Ghrist:** In a perfect world, a professor could just, you know, wave their hands and say, I like this, I like this, I'd rather do this, how about this notation, here's my philosophy, and then boom, out pops a book. Sadly, we can't do that yet. Yet. And what I'm really interested in is getting to the point where we can do that. So I decided to roll the dice and speedrun a book writing project. I, as I said before, have writer's block often, and it, it takes me so long to write. And then I'm really kind of idiosyncratic in the way I write things, way I do things. I love embedding puzzles into my books. And there's just no time for doing that kind of stuff on the cheap. But with everything that's happening in AI, and since I'm supposed to be teaching my students responsible usage, I figured let's do an experiment.

Let's spin up a couple of custom rigs to help me with a book writing assistant. So that is the way that I did this book. I began on November 4th, of 2024. That is when the Overleaf project opened up. And before that, the only thing that I had really done was an outline of the, the chapters that I wanted. And the project was concluded and uploaded to Amazon on December 28th. That's 55 days for those of you who don't want to do the math.

**[08:35] Tim:** Yeah, it's, it's really remarkable. And I, you know, I, one disadvantage of doing an audio podcast here is people aren't going to see this book necessarily, but you have shared the PDF for free, I believe. Is that correct?

**[08:48] Robert Ghrist:** That's correct.

**[08:49] Tim:** As well as you can order a print copy from Amazon. But one of the things about this is it's just a very beautifully typeset book. And I think maybe we could talk a little bit about this, but you use some of your, or a lot of your own LaTeX templates and things. But in thinking about something being done so quickly, it would be easy to think, oh, this is just like a really rough notes kind of document, like you see professors put together, but it's not. It's actually, it's a very beautifully typeset work, which is, is very neat.

**[09:21] Robert Ghrist:** Thank you. I appreciate that. I did put a lot of effort into making it a quality product to the degree that I could. Also getting the, the actual— I don't know how to put it— the narrative right. I mean, one of the things I hate about so many books, so many courses, is they're just this laundry list of different topics. You bounce around and there's no story, there's no hero's tale, there's no, you know, ups and downs and moment of crisis and denouement, all that kind of stuff. I really wanted to have that in this book, and I think I got it. And I think I got it with the help of my writing assistant, Claude.

**[10:07] Tim:** We'll just tell readers I haven't read all 280 pages cover to cover, but linear algebra is my very favorite mathematical topic, and I've just really enjoyed thumbing through it and reading some of the sections and Let's dive into a little bit to the process and you people, I'll link also to your thread on Twitter/X about this, but you decided to see how Claude could assist you in writing and you started with an outline. How detailed of an outline were we talking about on that day 1? Just chapters or sections? Yeah.

**[10:46] Robert Ghrist:** So on day 1, I had the list of 13 chapters and in each, you know, a couple of bullet points of some topics that I thought would be right. And then I used Claude to go through, scan that, suggest additions, suggest swapping things around in order to maximize the, the sort of smoothness of the flow and the intellectual coherence. So even the outline portion itself was highly influenced by the LLM. That was one layer, was sort of the, the structure and the flow. There are several other layers that wound up almost spawning separate processes, one being the writing style, the other being all of the LaTeX formatting issues, which, as you saw, you know, it was kind of non-trivial, the layout. The other being sort of global consistency, because I was writing in small chunks, section by section, and you got to make sure that it fits together nicely. And then a couple of other layers as well, things like generating the exercises, things like generating some of the artwork that went with it.

**[12:01] Tim:** I think this idea of, of using LLMs to help Evaluate structure, flow, consistency, those kinds of things in writing has been really useful to me. Because especially as the writer, it's so easy to lose the forest for the trees. And I often, if I have something that I've written, even just a long email, will say, evaluate this for its clarity, its structure, consistency. And it's so easy to write unevenly. You know, you're way down in the weeds about one thing and then barely scratching the surface on another. And I've really benefited from that. And I'm trying to use that kind of process more that you're describing of helping, not necessarily writing for you, but helping structuring your thoughts in a way and then evaluating them and giving you fast feedback that would be very time-consuming to get from someone else. For real.

**[12:57] Robert Ghrist:** And one of the things I love about working with LLMs with respect to feedback is that you can, you can turn the dial as far as what type of feedback you want. One of the things that makes it hard to improve in life is when people don't give you harsh enough feedback, or on the other extreme, if it's too harsh and you shut down. I love the ability to set the custom instructions. to a degree that I can specify what kind of feedback is gonna be most useful to me.

**[13:27] Tim:** So as you went about writing, what then was that process look— what did that process look like? Maybe I should put writing in air quotes here. As you went about producing this book with Claude, what did that process look like?

**[13:41] Robert Ghrist:** Yeah, this is really interesting because in the end I found myself acting more as a director a director-producer rather than the content generator. It's, it's weird because that's a skill set that is not usually associated with a book writing project, but it was super fun. Let me tell you a little bit about the process kind of involved. First of all, I wanted this book to sound like me and not like Claude, which plain vanilla Claude has a very distinctive tone that is interestingly very different from ChatGPT and very different from Gemini. So what I did was I uploaded a bunch of my writing to Claude with the instruction to read it, analyze it, and characterize the writing style. I told Claude, I want you to capture this writing style as, as best you can and compress it down into a JSON file that I can save and then upload later in order to have an LLM process it. And it did that. I probably shouldn't have looked at the JSON file because it told me things about myself that were a little uncomfortable at times. But—

**[15:01] Tim:** Yeah. There it is.

**[15:03] Robert Ghrist:** And what I would do is I would open up a project in Claude and put that JSON file in the project files with custom instructions to use that as a guide to the writing style. And then I would test it out on trying to generate, you know, a section here or there about something where I sort of knew how I wanted it to sound. And I calibrated how much it sounded like me. And it didn't take too much tweaking to get something that I was really happy with. At first, it was a little bit spooky how much it sounded like me at times.

**[15:38] Tim:** So.

**[15:40] Robert Ghrist:** That was the sort of first step. After that, what I did was I had a, a sort of a, a running draft of the LaTeX file in the Claude project files so that it knew what had been written so far. The context window was such that even at the end with a 300-page book, it could hold the entire thing in its context window. It filled up quite a bit of it. But still, little bit of room to spare. Worked really well. Then what I would do is just work chapter by chapter, section by section. I would open up a session with Claude and say, hey, let's take a look at chapter 3, section 4, which we haven't written yet. Here's the outline. Tell me, how would you flesh this out? And then it would come back with a more structured outline. And then we would go back and forth a little bit and I would say, well, I like this, but maybe this, you know, maybe this should come after that, or maybe there should be an extra example in here about this. And then after we had discussed it for a while, and I very much treated it like I was talking with a collaborator, after we discussed it for a while, I would say, okay, great. Now print out that detailed outline in like a markdown format.

**[16:58] Tim:** I would.

**[16:59] Robert Ghrist:** copy that, paste it into the LaTeX of the document, re-upload, start a new session and say, okay, check out the outline for chapter 3, section 4, draft up a, a draft of that section. And within the custom instructions for Claude, I had a whole bunch of instructions about what to do when I ask you to draft up a section. You gotta open up a side window artifact. You have to output to straight LaTeX code. You have to follow the LaTeX conventions that I've uploaded in a separate file that has things like my notational wants for, uh, different things, a little bit about the LaTeX template that is being used, all the macros, stuff like that. Asking Claude to write more than a section at a time— disaster, goes off the rails. But a single section, that turned out to be a really good chunk. I would take a look at it, we'd go back and forth, finalize it, pop it into the document, Rinse, repeat until I hit my rate limit.

**[18:04] Tim:** Why couldn't you just say, generate this section from that outline immediately in that same session versus wanting to put the outline back into the draft and then generate the section?

**[18:15] Robert Ghrist:** Yeah, I needed to start a new chat so that I didn't blow out my context window and rate limits. Shorter chats are better, and, and starting from the beginning when writing a section, that, that wound up giving much better results. And I needed to take breaks. So when setting on what the outline should be, popping it into the LaTeX document and re-uploading allowed me to take a break right there and then get back to it.

**[18:45] Tim:** Yeah.

**[18:46] Robert Ghrist:** I was really doing a lot of this stuff in my spare time, as in, you know, I'm, I'm on the train commuting home from Philly and I'm type in this stuff on my phone. A wonderful way to work.

**[18:58] Tim:** Yeah, that's remarkable. Was it able to, within the sections, generate the, the lemmas and theorems in the way that you expected them to flow through that section, or did you have to prompt it of, okay, here's, it's time for this lemma?

**[19:16] Robert Ghrist:** It was surprisingly adept doing independent generation. I did not have to do a lot of handholding. There was a lot of direction given, a lot of guidance given. For me, I structured the text so that there was sort of one maximally important result, the fundamental theorem of linear algebra. And I wanted that to be sort of front and center. And so we went back and forth a lot in terms of how that should be presented, how that should be structured. The way that I do it is a fair bit different than most other textbooks. And at first Claude just wanted to give the plain vanilla version and we, we had to arm wrestle a little bit to get it to work the way I wanted.

**[20:01] Tim:** And were there any particular portions where you ended up having to directly write significant chunks or was it all mostly Claude generated?

**[20:12] Robert Ghrist:** That's a really good question. I would say that at most, The most I ever wrote of myself would be 3 contiguous sentences.

**[20:24] Tim:** Wow.

**[20:25] Robert Ghrist:** At a time. I'm not saying that I didn't write lots of those, but I don't believe I ever wrote an entire full paragraph outside of the introduction. Let's say the introduction is mine. The first line. I gotta read this. Can I read this to you?

**[20:45] Tim:** Absolutely.

**[20:45] Robert Ghrist:** Absolutely. Mathematics is the language of modern engineering, and linear algebra, its American dialect. Inelegant, practical, ubiquitous. That was me. That was 100% me. That was not Claude. But once you get into the, the main text outside the introduction, Yeah, that's pretty much all Claude with me directing it.

**[21:11] Tim:** You know, one of the obvious questions with a mathematics book is, is it correct? Right? So you have examples throughout, you have a lot of, you know, what to most people is complex mathematical notation. I think folks who have a linear algebra background won't find it that shocking, but I guess, you know, what is, what was your review process and How often did it make mistakes and how worried are you that there are mistakes that are yet undiscovered, which of course can be in any textbook and is in any textbook?

**[21:43] Robert Ghrist:** Oh, sure. I'm very comfortable with mistakes, having lived a long life full of them. And yeah, this book has mistakes in it. I'm sure I've already found a couple, couple that are embarrassing, but hey, that's, that's the way it goes. I intend on cleaning up most of the mistakes this term as I am teaching my way through this book. The reason I had to speedrun this is because classes started yesterday, and this is, this is what I'm using for my students. So my students are my review process, and they're going to help me find all the mistakes, and I'll be embarrassed, but that's good for the soul, and I'll get over it. To you who bought a copy of a book that's got mistakes in it, man, I'm so sorry. I apologize. But, but here's the thing. Collector's item.

**[22:41] Tim:** Right, first edition.

**[22:43] Robert Ghrist:** I'm gonna fix these mistakes at the end of the semester, and then that's it. The, the, the wrong version of this book won't exist anymore. You're gonna have a Oh man, it's probably gonna be worth a ton of money someday.

**[22:56] Tim:** No doubt. Uh, did you use any kind of LLM-based process with Claude or anything else to try to identify mistakes, or was that just through your own review?

**[23:07] Robert Ghrist:** Yeah, I found that the different LLMs were, uh, sort of better at, at different things. GPT was really good with LaTeX issues. I mean, I, I really I got faster, better results with GPT on debugging the LaTeX issues and getting it to look exactly how I wanted. For proofreading, I found Google Gemini to be the thing because I could upload the entire LaTeX document into the active memory and it didn't even take up 10% of the context window. I've got the paid version, and yeah, the Gemini Pro is amazing. It's like a 2 million token context window. So I could upload the whole thing and ask it global questions like, go through this and look for any kinds of thematic temporal inconsistencies. So check that every time I use a term, it's already been defined. which is fantastically difficult in a long book because trying to do that with a book of length n, that's an n squared complexity problem. So I found Gemini was really good at handling that. However, is it perfect? No, no, of course not. There's still mistakes in there.

**[24:34] Tim:** Yeah, certainly inevitable. And I mean, you know, it'd be interesting to know The rate of mistakes in something like this versus something you had written by hand is, there's no guarantee that this is any more number of mistakes. Certainly. I think that that's interesting also, just that idea again of using an LLM not to— some people, and there's some projects you're not going to want to generate, I think for good reason. And I hope we continue to live in a world where there's text that comes entirely out of people's heads and not out of models. But The ability to do something like check for terms being defined is something that any textbook author could be doing. And I suspect we're only scratching the surface as to the possibilities here.

And that's not going to be a perfect process, but I think folks are going to keep finding new ways in which these tools are useful outside of the purely generative in terms of writing for you scenario. And yeah, I just think helpful for people to keep in mind that it's hard to get a good proofreader and LLMs will answer, they'll answer questions ad nauseam for you until you hit your Claude daily limit, which you're well familiar with.

**[25:52] Robert Ghrist:** Yeah, that's right. I gotta tell you that I've shared my production story for this book with some of my colleagues And some of them are genuinely excited at the prospect of being able to get around to writing a book. So many of my professor colleagues are just super busy. They got all kinds of stuff going on. Nobody has multiple years available to be able to sit down and write a book, but they've got all the ideas in their head. They've got these things that they want to get down. They have their way of sort of teaching their class. And the prospect of being able to work with LLM assistance and speedrun a decent quality book, that I think is really exciting. If you look in the outside the technical world and in the humanities where the, the standards for tenure are, you know, you, you write your one or your two books. And then that, that just takes years and years and years and years. I see those timelines compressing quite a bit, and I see potential for a little bit of chaos happening in the humanities and the social sciences because of the speed at which we can produce stuff now.

**[27:09] Tim:** For myself, I have not particularly academic interests, but just various writing interests that are outside of the scope of my day-to-day job that, and even things where, you know, I enjoy history and I have historical topics that I'd like to synthesize ideas more, or where I've collected lots of sources and not had the time or not made the time anyway to sit down and really try to synthesize those. And I'm getting more interested in, and I started to do this the other day actually, just uploading a bunch of those to a NotebookLM notebook and started to chat with that about some of these sources. And I'm excited for my own, you know, personal interests that don't go that far beyond, beyond my own personal interests, but be able to explore those more in limited free time.

**[28:01] Robert Ghrist:** Exactly. And smart man uploading that to Google's NotebookLM. One of the things that I've been saying to people when they, when they ask me what's going to happen when AI is able to do everything, One of the things I've been telling people is, look, right now, start thinking about aspirational projects that you would love to be able to work on if only you had the time and the resources. And I'm talking not just writing books, about whatever you're interested in. I'm talking making anime series. I'm talking making movies. I've low-key started collecting a couple of ideas for movies that I would love to see made, that I think I could make if I had access to an entire movie set, production studio, all that kind of stuff. If I could just will it into existence, what ideas would I want to get onto the screen? And I've got some ideas, and I'm not ready to launch into that yet. But I got a feeling that in a couple of years, yeah, I might make a movie. That'd be fun.

**[29:15] Tim:** That's neat. I, I appreciate that perspective. Have you been getting pushback from anyone that you've talked to about this or on your Twitter thread or colleagues?

**[29:26] Robert Ghrist:** Pushback on Twitter?

**[29:29] Tim:** What? Oh yeah, of course.

**[29:31] Robert Ghrist:** Never heard of that. Oh, I think most of the people who like to push back on Twitter are gone. So no, I haven't really heard that much. But, you know, I, I don't really pay attention either way. I'll just put it out there.

**[29:43] Tim:** Right.

**[29:43] Robert Ghrist:** I'm interested in just pushing the envelope, seeing what can be done. Mathematicians tend to judge things using the L-infinity norm. That is, the worth of x, where x is a paper, book, or mathematician, equals the L-infinity norm—the worst bit of it. That is the value of the work. I would argue more for an L2 norm for how you value things. But a lot of mathematicians are very conservative, and they will judge things based on the worst mistake that appears. So I bet there are probably some math colleagues of mine who would not like this because it is possible to make mistakes, and I'm sure there are mistakes in there.

**[30:36] Tim:** Yeah. And mathematicians, so I spent one year as a math PhD student at the University of Virginia. And if my experience is any, any generalizability, mathematicians are not necessarily the most technologically advanced or eager to keep up with technological trends. So I could, I could see a lot of folks scratching their heads at this, and I imagine there are many out there who haven't even tried these tools at all yet.

**[31:04] Robert Ghrist:** Yeah, I see lots of skepticism about using LLMs for doing real mathematics, skepticism that I do not share. Mathematicians are famously conservative.

**[31:17] Tim:** To that point, do you have— are there risks Or limitations of this process that you see? I mean, you know, I think one thing that people shouldn't miss here is the care and attention that you took in crafting this, in that you didn't just write a for loop that just kept saying, generate the next section, generate the next section. You put thought into capturing your own style, into helping instruct it into do consistent LaTeX. You're, you're working with it along the way. So there's a product here that was heavily generated by an LLM, but this was 55 days of a lot of care and attention from you.

**[32:05] Robert Ghrist:** Yes.

**[32:06] Tim:** So it seems to me one obvious concern is that someone comes along and says, oh, well, Dr. Ghrist did this, and I could just go generate something, but not put the same attention into it. What are your concerns or thoughts as a mathematician?

**[32:24] Robert Ghrist:** Right. So those 55 days were pretty intense. I was hitting my rate limits every day. It was a lot of work trying to keep all the parts moving and in my head, but it was working as a director. And direction is difficult work. I have had some people ask me, so, you know, who's the real author on this? Is it you or is it Claude? Maybe, maybe you should add Claude as a co-author. Was it ghostwritten? Is that the way you think about it? And my response is, I am the director of this work, and as such, it's my work. With Claude as an absolutely amazing assistant. You could look at a movie and you could say, ah, that's a Spielberg movie. And everyone knows that he wasn't running the camera. He wasn't running the audio. He wasn't doing the special effects himself. He was directing. Similar thing here. Directing well is hard work. Anyone can go out and make a movie. It's not necessarily going to be a high-quality movie. even if they have access to a full production studio and cool special effects, it's all about the vision and the execution. Similar thing here with getting an LLM to help with writing a book.

**[33:49] Tim:** That's helpful. And, and also, you know, something I, I didn't mention is you, you have the background here of, I'm sure, having taught linear algebra many times over. And so you came into this with a lot of thoughts about what you envisioned the outcome to be beyond just, here's a linear algebra textbook that's going to be useful for students in an AI program. But you had opinions and thoughts about structure and things that you were able to then drive along the way. And maybe this is going to, you know, this directing is going to change over the next 10, whatever number of years we're seeing growth in this area. Maybe the growth, The growth changed. But I think that there's enormous amounts of value in that. I don't know, the directing. I think that directing's a great, great title for it. What, what you brought specifically here, and not, you're not just turning a crank and getting an output, but you really are overseeing the process.

**[34:48] Robert Ghrist:** That's right. And that requires a great deal of organizational and artistic skill in order to bring it to a successful completion. I really hope that some other people try doing this, and I really hope that they're successful because that means that these tools are, are really just gonna revolutionize the amount and quality of good content that we're gonna see. I, I think the, the worst possible outcome is that other people try and do this and it doesn't go as well. I really hope that these tools unlock a lot of latent creativity that, that people have. And it's, it's just a matter of executing at scale, but we'll see. Some people are going to have to take a chance to try.

**[35:35] Tim:** Yeah. I was going to ask if, if you've known anyone trying to do something quite like this, it sounds like probably not yet.

**[35:41] Robert Ghrist:** Again, I've talked to a couple of my colleagues who are like, ooh, wow. I, you know, I really wanted to, to write down everything that I know about control theory into a book, but I never have time. I mean, that would take multiple years, but maybe I'll try.

**[35:57] Tim:** This is super interesting. I would love to talk forever about this, but I'm going to try to wrap us up soon. I'm interested here. One is, how are you talking to your students about this specifically? Are you telling them for this new class how all this came to be? And also, More generally, how are you talking to your students about LLMs and the, the place of LLMs in their learning and educational experience?

**[36:27] Robert Ghrist:** Yeah, the day that ChatGPT came out, I learned about it on Twitter, of course, went to go teach class and said, all right, class, forget about what we were gonna talk about today. Drop everything. This is what you need to be doing. Today and every day henceforth, 'cause everything is gonna change. So I am an early and enthusiastic adopter. Of course, I am completely upfront with my students about how their new shiny book came into being and have not only put up the PDF for free, but I've put up a Markdown version of it publicly available with the idea that Look, take that and pop it into your favorite LLM and then talk with the book, whether it's ChatGPT or Google Gemini or whatever. I built a custom GPT project that has that text in there along with a whole bunch of conventions for how I, I think about the way the course is going to go, et cetera. That's available. And my students are already starting to make use of that to talk to the text about the subject that they're learning.

**[37:40] Tim:** How are you teaching them to then just the necessity of wrestling through hard problems? I just think back, so I was an undergrad math major and one professor in particular, a really excellent professor who gave us, you know, the take-home test that you'd spend 15 hours on. And I just remember spending those hours in the library This is like abstract algebra, number theory, and just wrestling with these kinds of problems. That was the best preparation I had for grad school, which was very intentional on this professor's part. And probably a lot of those problems that I solved, and I think I have those tests, it'd be interesting to look at, probably a lot of those could be solved by one of the other LLMs. And I don't know. Yeah, I'm not— I think this is a problem a lot of professors are wrestling with, but how are you thinking about teaching your students to wrestle with hard problems?

**[38:40] Robert Ghrist:** This is a really tough one. There's a spectrum of different approaches to this. If you look at many of the introductory computer science courses at my institution, they have a policy that's on one end of the spectrum. That is, we're giving you these homework problems. It's the majority of your grade. You are not allowed to look up anything on the internet. You're not allowed to talk to other people in class. You're not allowed to use an LLM. You can talk to the prof and the TAs. That's it. Anything outside of that, you're busted. And they're hard problems, and it causes the students to really wrestle, struggle. That has some benefits. It has some risks associated with it as well. It particularly penalizes the honest students if there's enough dishonesty going on. I'm on the other end of the spectrum.

As an experiment, I'm telling my students, here's the homework set for the week. I'm giving you the problems in a PDF form. And hey, here's the Markdown version as well, so that you can cut and paste it into the GPT for the course. If you want to, you could just pop the whole thing in. Cut and paste the answers out. Turn that in. You're going to get 100%. It's you're going to get all those points that you want, and you're not going to understand anything. And when the midterm comes along and you're sitting in the classroom without a computer, you're screwed. It's kind of like a big marshmallow test for the students, and I'm telling them that it's got some benefits. It's got some risks. I'm going to try to guide the students to show them how to try the problem on their own first.

Get stuck, maybe get somewhere, then talk to their friends, upload things to the LLM, talk with the LLM. Okay, I saw that you said this, but I don't understand that part. What's it mean? And you get that sort of infinitely patient TA that you're working with. I gotta trust that students are gonna go through that, get to the point where they understand things, and then write up, type up their solutions and turn them in. Will there be students who just take the easy shortcut? Yep. Will it hurt them later? Yep. That, that opportunity, that temptation is always going to be there. I, I kind of want to give them a chance to deal with it, learn how to pass the marshmallow test, because if they do, that's going to help them so much later in life.

**[41:09] Tim:** Part of me is glad I was in school before all this and Didn't have as much to worry about. But, you know, at the same time as a software developer now, I mean, I'm using LLMs constantly and I'm very grateful to have things that are helping me solve problems. At the same time, trying to remember that sometimes the solutions to my problems is just to step away and think about it, which is, can, you know, can be a hard habit to to maintain, thinking hard. But, you know, that's not new either, right? There's the, the joke before LLMs came along is that software developers just copied and pasted everything from Stack Overflow.

**[41:50] Robert Ghrist:** Right.

**[41:50] Tim:** And which was just a less good language model in some ways. So yeah, I don't know. It's, it's very intriguing. I'm interested to see what this, what happens. And there's, there's no, there's no going back at this point. And it's, yeah, I'm just very curious to watch pedagogy develop here, but I will, I'll wrap us up here. Do you have any, well, first of all, anything we missed in the topic you'd like to share, or do you have any predictions or future projects that you're, you're thinking on besides your Hollywood blockbusters?

**[42:25] Robert Ghrist:** I got to tell you, I got really excited when I was writing this book, just seeing how fast things were progressing and the quality level. We'll see how things hold up, but I'd love it if I could put out like a book or 2 a year. That would be great. I got some ideas. We'll see what happens.

**[42:44] Tim:** Do you have predictions about where the tools are gonna go in terms of, you know, how maybe 2 years from now LLMs are gonna be different in how they assist you here, or is it one day at a time?

**[42:56] Robert Ghrist:** Two years is an immense amount of time in this new world. I hesitate to go more than a year out.

**[43:08] Tim:** Yeah. Yeah.

**[43:10] Robert Ghrist:** It's going to be an exciting year.

**[43:11] Tim:** Thank you for joining me.

**[43:12] Robert Ghrist:** Likewise, Tim. Great to be here.
