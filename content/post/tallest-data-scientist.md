---
portfolio: true
slug: tallest-data-scientist
external: http://adversariallearning.com/episode-2-the-tallest-data-scientist.html
Thumbnail: /projects/al02.png
title: Tallest Data Scientist
date: 2016-12-08
description: An interview with me on the Adversarial Learning podcast about
  being the tallest data scientist and other things.
tags:
  - data-science
  - career
categories:
  - Personal Update
image: /images/datascientist.png
---
I was honored to [join my friends Joel and Andrew on the Adversarial Learning](http://adversariallearning.com/episode-2-the-tallest-data-scientist.html) podcast to talk about my career in data science (and what it's like to be the tallest one).

<iframe src="https://podcasters.spotify.com/pod/show/adversarial-learning/embed/episodes/Episode-Two-The-Tallest-Data-Scientist-eooh8a/a-a4acm9p" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>

## Transcript

**[00:00] Joel Grus:** Welcome to episode 2 of Adversarial Learning. Joel here. Welcome to episode 2. We're glad to have you with us. We're glad to be here. I hope you enjoyed the new theme music this week. I worked pretty hard on it. And today we've got a really interesting episode for you. We've got the tallest data scientist, Tim Hopper, with us.

**[00:53] Tim Hopper:** Hi, Tim.

**[00:53] Joel Grus:** And we're going to talk about data science and about being tall and about a variety of other things that are all pretty good. So let's do a word from our sponsor and then we'll get into things. Adversarial Learning is brought to you by Data Science from Scratch: First Principles with Python. If you're looking for a book about data science and you'd like it to be from scratch and you want it to be about first principles and you'd like it to be in Python, then Data Science from Scratch: First Principles with Python is the book you're looking for, available from Amazon.com, O’Reilly.com, or wherever books are sold. Data Science from Scratch. One of these days we’ll get a real sponsor and then we won’t have to have my book being the sponsor, although I like recording those sponsorship things, so maybe we’ll keep doing that too. Okay, on to the episode.

**[01:50] Andrew Musselman:** Rolling.

**[01:51] Joel Grus:** Hey there, I'm Joel.

**[01:52] Andrew Musselman:** I'm Andrew, and today we have a very special guest named Tim Hopper, who is otherwise known as the Tallest Data Scientist.

**[02:00] Tim Hopper:** Good afternoon.

**[02:02] Andrew Musselman:** Yeah, we met you through the community, and we found that you were fun to talk to, so we're very happy to have you on the show.

**[02:11] Joel Grus:** Thank you.

**[02:12] Andrew Musselman:** Tell us about yourself.

**[02:14] Tim Hopper:** I'm a data scientist, I guess, in North Carolina. I work for a company at the moment called Distil Networks, which is a bot detection and mitigation tool for websites. We help filter malicious bot traffic, and our team works on analysis and improvement of that product.

**[02:34] Andrew Musselman:** A typical question we like to ask is: how did you get into this field? Where'd you come from, and what brought you to where you are now?

**[02:46] Tim Hopper:** Yeah, so like you, Andrew, I studied math as an undergrad.

**[02:53] Andrew Musselman:** Like Joel too, right?

**[02:54] Tim Hopper:** Yep, also like Joel. And I've always been into computers since I was a kid, and I wasn't that interested in programming in college, but through sort of a roundabout way, I ended up as a master's student in operations research. And I was interested in sort of how math and computers could help solve real-world, everyday problems outside of what I thought of as traditional engineering problems.

**[03:25] Joel Grus:** What is operations research, for those of us who don't know?

**[03:29] Tim Hopper:** Well, no one really knows, but the idea is applying math models to sort of like business problems and industrial problems, as opposed to what I think of as more like hard engineering—like thinking of materials and building things—but this is like optimizing processes and supply chains and schedules and things like that.

**[03:54] Andrew Musselman:** Yeah, I had never known what it was about until this year or so, and some of my newest colleagues came from an operations research-focused firm. And so what I'm learning is that there are a lot of things in common with, you know, the kinds of things I've typically done in this field, and then with more of a focus on discrete problems. So, I mean, discrete framing of solutions: looking at things that are like more, you know, looking for integer values rather than continuous or, you know, floats or whatever.

**[04:27] Joel Grus:** When I was an undergrad, I went to an REU, as a research experience for undergraduates, as math people tend to do, and they had a guest speaker who talked to us about operations research. And the only thing I remember from their talk was the case study about a skyscraper that didn't have enough elevators. And so they had big backups at the elevators every morning, and they brought in the operations research team to figure out how to fix it. But they were using some math and then some like, let's have the elevators leave while the doors are still closing, and let's hire, you know, big burly sumo wrestlers to like shove people into the elevators and things like that. So that's what I always thought operations research was.

**[05:04] Tim Hopper:** I thought where you're going with that is the famous story that people tell is when people were studying that, and then they installed mirrors outside the elevators, and people got so distracted just looking at the mirrors that they stopped caring about waiting for the elevators. That's a very popular story.

**[05:24] Joel Grus:** I haven't heard that one.

**[05:28] Tim Hopper:** But back to me.

**[05:30] Joel Grus:** Right, back to you.

**[05:34] Tim Hopper:** So I was in grad school here at North Carolina State in 2011, and I started getting more involved on Twitter and following this new thing called data science, and seeing people like Hilary Mason and Drew Conway and John White, who had some website back then—Dataists or something that they had—and realized that what was being touted as data science was really like the same thing I was interested in for operations research, which is like math and computers and computation applied to real-world problems. And it appeared to me that data science wasn't stuck in the past, which is a criticism that could possibly be levied against the operations research field.

**[06:25] Joel Grus:** Got it, got it. And so how tall are you?

**[06:28] Tim Hopper:** I'm 6 feet 9 inches, unless you ask my mom—I'm 6'10. Which is taller than Drew Conway, as I am very proud of, and Doug Cutting.

**[06:43] Joel Grus:** How tall is he?

**[06:47] Tim Hopper:** I think he's like 6'7, and Drew is 6'8 or something like that.

**[06:51] Joel Grus:** Got it, got it. So you are the tallest?

**[06:53] Tim Hopper:** As far as I know, I'm the tallest data scientist.

**[06:56] Joel Grus:** Fantastic. So when I first got to know you on Twitter—actually before I got to know you—when I first encountered you, I was actually kind of scared of you because you had this really frightening avatar pic with like a Harley-Davidson bandana and a scowl.

**[07:14] Andrew Musselman:** Yeah.

**[07:16] Joel Grus:** Was that by design?

**[07:17] Tim Hopper:** It was my Twitter profile picture for like 4 years. So I'm wearing a Harley-Davidson bandana, and I had cut my beard into a Fu Manchu. And I just—so I'm a very tall and—do you want to try and get Andrew back? I was enjoying going without him.

**[07:42] Joel Grus:** I can still hear you, Andrew.

**[07:57] Andrew Musselman:** You can?

**[07:57] Joel Grus:** Yes.

**[07:58] Tim Hopper:** I can hear you too.

**[07:59] Andrew Musselman:** Have you heard me groaning and bitching?

**[08:02] Joel Grus:** No, no more than usual.

**[08:05] Andrew Musselman:** Okay, okay, cool. Well, let's just go with it because I—

**[08:09] Tim Hopper:** This—

**[08:09] Andrew Musselman:** So the interface tells me I was muted and then unmuted, and no, it never unmuted me, but okay. So sorry about that.

**[08:16] Joel Grus:** Yeah, no, I hear you the whole time.

**[08:19] Andrew Musselman:** Okay.

**[08:23] Joel Grus:** So Tim, do you play basketball?

**[08:25] Tim Hopper:** I am the worst basketball player of all time. One time when I was 18, I was put onto a basketball team when I worked at a summer camp, and I was the starting center, and we got the ball and we got it down to our side of the court, and someone passed the ball to me, and I was so shocked that he passed it to me that it just hit me in the face and fell. Oh boy.

**[08:55] Andrew Musselman:** But it's weird because you're tall. Do you have a—

**[09:01] Tim Hopper:** How am I supposed to answer that?

**[09:02] Andrew Musselman:** I don't know. Well, I mean, there's—I think people might be interested in your blog about how many times a day or month you get—

**[09:09] Tim Hopper:** Yeah, so in 2015 I wrote down for the entire year every—I tried to write every single thing a stranger said to me, or within my hearing, about my height. And I work at home, so I'm not even out in public all that much. I'm a fairly—I'm kind of a homebody. But I can't remember the total. I think I had 157 things that people said, which I have shared on Tumblr.

**[09:39] Andrew Musselman:** Over 1 year?

**[09:40] Tim Hopper:** Yeah, over 1 year. You know, if I spent my days in public around other people, I suspect it would be significantly higher.

**[09:51] Joel Grus:** Probably a lot more.

**[09:52] Tim Hopper:** Most of them come from the grocery store, actually.

**[09:55] Joel Grus:** And now, is this dataset publicly available?

**[09:58] Tim Hopper:** It is publicly available, ready for natural language processing.

**[10:02] Joel Grus:** Have you done any of that?

**[10:04] Tim Hopper:** I have not.

**[10:05] Andrew Musselman:** I think it does some pretty natural clustering, doesn't it?

**[10:09] Tim Hopper:** Yeah, most people say, "Are you tall?" Yeah. Or, "How tall are you?" Honestly, the thing that drives me the most crazy is people say, "How tall are you?" And then they say, "I bet you get asked that a lot." But people aren't aware that I also get asked a lot, "I bet you get asked that a lot."

**[10:30] Andrew Musselman:** Yeah.

**[10:31] Tim Hopper:** So that's what really just, like, drives me over the edge.

**[10:35] Andrew Musselman:** It's like the—I forget his name—Cary Grant, I think. Somebody asked him at the—you know, I said at the ballgame, "I really hate to ask you for this," and he said, "Well, then don't."

**[10:46] Tim Hopper:** Yeah, that's—yes.

**[10:48] Andrew Musselman:** You can, you can not.

**[10:49] Tim Hopper:** And it's really funny, like, I'm happy to talk to people about it, but it's really that it's so boring because people just, like, say the same stupid things over and over and over.

**[10:58] Joel Grus:** Yeah. What's the best one that anyone's ever said?

**[11:01] Tim Hopper:** Oh, you can't ask me that without giving me a little time to think about that.

**[11:09] Andrew Musselman:** There were a couple of funny ones I read, but yeah, it's escaping me too.

**[11:15] Tim Hopper:** One that people have particularly appreciated is where I just wrote something in Korean with hand gestures indicating great height, which people find that one very funny. That was at a Korean grocery store.

**[11:32] Andrew Musselman:** It's a universal topic.

**[11:34] Tim Hopper:** Yes. Once I was in Mexico and I was just walking down the street and this—I was with a group of people—and this guy, like, grabbed me by the arm and pulled me into his store and is pointing at me and talking about me in Spanish, which I don't speak, to his friends, while my friends continued to walk down the street in Mexico.

**[11:54] Joel Grus:** I'm going to Mexico next month. I need to learn Spanish. You reminded me of that. Thank you.

**[12:02] Andrew Musselman:** You'll get it. It's easy. I know.

**[12:05] Joel Grus:** Just read.

**[12:06] Andrew Musselman:** Just get a phrasebook. You're fine.

**[12:08] Joel Grus:** I studied it in high school, but that was a long time ago. Yeah. And mostly I can name, like, parts of the classroom, which I don't think will come in that handy. ¿Dónde está la biblioteca?

**[12:19] Andrew Musselman:** Oh, there you go.

**[12:21] Joel Grus:** Yeah, let's see how—

**[12:21] Andrew Musselman:** You never know. You never know.

**[12:23] Joel Grus:** I've still got it. Yeah, if I end up needing to go to the library, then it's the wrong kind of vacation.

**[12:32] Andrew Musselman:** Yeah, you have another thing online that's pretty amusing for folks too, and it's related to the topic, you know, that we're talking about, and that's a robot that answers the question, should you get a PhD?

**[12:45] Tim Hopper:** Yeah, so people love that. There's the Twitter account, which is—I think it's Should You Get PhD, Should I Get PhD.

**[12:57] Joel Grus:** No, should you get PhD?

**[12:59] Tim Hopper:** Should you get PhD? Which the bot actually isn't running at the moment, but it used to mostly just tweet "no" over and over, and then sometimes it would say "unlikely," or occasionally it would say "maybe," sometimes it would say "probably not."

**[13:15] Andrew Musselman:** So is that an expression of your ambivalence about advanced degrees?

**[13:18] Tim Hopper:** Well, so more to the story is there's a companion website, which is shouldigetaphd.com, where I interviewed 9 basically Twitter friends, some of whom have PhDs and some of whom don't, and kind of asked them the questions I wished I had asked before starting a PhD program. Yeah, I read some of those.

**[13:46] Andrew Musselman:** That's a nice site.

**[13:47] Tim Hopper:** Yeah, so I started 2 PhD programs, one in math and one in operations research. And in 3 and a half years, I came out of all that with a master's degree in operations research and part of a master's degree in computer science and part of one in math.

**[14:08] Andrew Musselman:** Oh, wow.

**[14:11] Tim Hopper:** So I have this strong interest in the whole topic, largely because I think I went into all of that extremely uninformed about why someone might do a PhD and what the value of it might be. I think I was kind of starry-eyed because I admired my professors in undergrad so much. I was like, well, these people I really admire have PhDs. If I wanna be an admirable person, I should also get one.

**[14:40] Andrew Musselman:** Right.

**[14:41] Tim Hopper:** Which is pretty bad advice, reasoning in hindsight. So I—

**[14:49] Andrew Musselman:** Well, it's— I mean, but I think it's pretty typical, right?

**[14:52] Tim Hopper:** It is, yeah.

**[14:53] Andrew Musselman:** People often do it because they think they need it and, you know, how could you get a job without it?

**[14:57] Tim Hopper:** Right, which is the question I want people to ask more: how am I going to get a job with it? Because a lot of people— I think this is especially like— and the site is directed at like 22-year-olds who are finishing up their undergrad degree. All they know is school. They're really good at school. They like school. And so they think, oh, well, I should just go do more school. And in a lot of fields, getting a PhD is— you're gonna be doomed in terms of getting a job. In the humanities, I mean, the statistics are really bad in terms of job options.

**[15:34] Andrew Musselman:** Yeah, I saw a really grim chart which was almost constant tenure positions and the really huge swoop up of PhDs being awarded.

**[15:48] Joel Grus:** So, but the thing is, like, in the humanities, even without a PhD, you're still gonna have a hard time getting a job, right?

**[15:53] Tim Hopper:** Sure, although, I mean, I think the risk is that you're, like, overqualifying yourself. And maybe this isn't true, I don't have great evidence, but that getting a job in the humanities is difficult, but getting a job in anything once you're overqualified for the humanities is potentially even more difficult. That's my reasoning.

**[16:19] Joel Grus:** Yeah, I mean, it's funny. I have, along the same lines, I wrote a blog post in 2013 entitled “Should You Get a PhD?” And then the content of the blog post is no.

**[16:32] Andrew Musselman:** Yeah, so you're like the Leibniz and Newton of our day.

**[16:38] Tim Hopper:** Well, I mean, Joel would be the guy except he just doesn't know that blogs are dead, so Twitter is where it's at.

**[16:44] Joel Grus:** So I update Twitter far more than I do my blog, but my best blog posts have gotten a lot more attention than my best tweets, so.

**[16:55] Tim Hopper:** Yeah, well, yeah. I— the should you— should I— what is it? ShouldIGetAPhD.com is probably my most successful project that I've done in terms of traffic. It's linked from a number of sites where people have similar kind of things, discussions of this, and it gets a lot of traffic. And I mean, the Twitter is pretty sarcastic and cranky, but the interview site I really hope is helpful for people, and I've gotten a lot of feedback that it is.

**[17:31] Joel Grus:** Did you—

**[17:33] Tim Hopper:** I'm glad there are people with PhDs in the world and people who wanted to do it, but I really think there are a lot of people like me who did it really without a good reason to and ended up being somewhat unhappy.

**[17:48] Andrew Musselman:** Yeah, as far as getting jobs, when we've been hiring for data science, it seems like it really depends— I mean, this is going to sound trite, but just like, you know, is large company X good to work for? It really always depends on, you know, what team you land in and who you're going to be working with every day and whether they're actually going to guide you towards something that's relevant to making, you know, making a living. And, you know, so that— it's to me, I don't know if I've seen any, like, any correlation between, you know, viability and having that degree.

**[18:25] Joel Grus:** Yeah, so I have a slightly different perspective, especially in terms of data science jobs, and that's that you can—

**[18:31] Tim Hopper:** I think we should really, we should mark this down. This is the first time that Joel has had a different perspective on something, so.

**[18:36] Joel Grus:** Well, I always have a different perspective. I think you can do really well with a PhD, and I think you can do really well without a PhD, and at the margin, there are certain kinds of things that are easier to work on if you have that PhD experience, and there are probably certain kind of things that are harder to work on if you have that experience. But where it comes down a lot to me is the concept of opportunity cost. Okay, I'm going to spend 5-ish years of my life not making much money, working all hours of the day, all days of the week, and kind of being an indentured servant in some ways and jumping through hoops. And if the place I'm going to get at the end of that is pretty similar to the place where I could go instead of that, then I have to really like 5 years of that lifestyle to make it worth my while.

**[19:29] Tim Hopper:** Yeah, absolutely. And, you know, I went to a public university for my second— well, both my PhD programs, and I, as a result, my professors' salaries were public information, and I happened to know that after 2 years out of my graduate program, I was making more money than my PhD advisor, who was a tenured faculty member, was making. And I'm not sure that I ever considered the possibility as an undergrad that— I don't know. I don't think I did a very good job of wanting to make money and really thinking about that. And so I was quite happy to be making $22,000 a year as a PhD student.

**[20:16] Joel Grus:** Yeah.

**[20:19] Tim Hopper:** I also think one of the things that's really— the idea that is horrific that people float around is you shouldn't do a PhD unless you want to be in academia. And that is extremely troubling advice for young people to hear because they hear that as, oh, if I get a PhD, then I can be in academia. But the converse isn't true there, and we've already mentioned this, but the academic job market is really, really, really bad. And so I would discourage anyone from thinking about a PhD program without thinking about what might my life be like if I don't get a decent academic job. Right.

**[21:02] Joel Grus:** Well, in some sense—

**[21:03] Tim Hopper:** Go ahead, Joel.

**[21:04] Joel Grus:** Oh, I was gonna say, in some sense, that's like a symptom of a broader problem, which is that people don't understand how to do conditional probabilities.

**[21:13] Tim Hopper:** Yeah.

**[21:13] Andrew Musselman:** I don't.

**[21:16] Joel Grus:** You should read my book. It talks about them.

**[21:19] Andrew Musselman:** I only read half of it.

**[21:20] Joel Grus:** Right, I remember.

**[21:23] Andrew Musselman:** The one thing I've noticed, and it's not a constant, but it does seem like the right PhD program definitely instills really solid research skills. Being able to go out and scour and scatter-gather, figure out what's actually relevant, what's actually good, and what's garbage, and then look at what you can actually bring back into your jobs. That's a real valuable skill, but it really does—you got to wonder, like you guys were saying—what's it gonna get you as far as what you want out of your career and your life?

**[21:59] Joel Grus:** Well, I mean, some jobs that's a really good skill set, and then some jobs you're better off if you can, like, hack shit together and throw D3 on top of it and impress potential customers.

**[22:08] Andrew Musselman:** Yeah, yeah.

**[22:09] Tim Hopper:** The other thing is we have this very bad selection bias in how we evaluate the quality of PhD programs because I think we tend to look at people who went through PhD programs and were very successful, and we say, “Oh, a PhD program must equip you with X, Y, and Z.” And we don't look at people who tried a PhD and then ended up depressed alcoholics, or got a PhD and are now like a barber in Charlottesville.

**[22:42] Andrew Musselman:** Yeah, I mean, that's one thing I've noticed. And I mean, I've done a lot of interviews in my current role, and I've had PhDs on the phone who just—I've had one guy who, you know, his whole focus was data mining and recommenders, pretty heavy overlay with data science. And I asked him what he knew about linear algebra, and he refused to answer the question as though it was beneath him. But he just—I don't think he understood it. So he actually hung up halfway through the interview. Yeah, and there might be that too, if you ask me. Yeah.

**[23:22] Joel Grus:** Although I will say that when I started math grad school a long time ago, I went to UW, which is a big state school, and I asked the director of the graduate program, you know, what percentage of the people who start the program finish it? And he's like, “Oh, you know, about a third.” So he was pretty forthcoming with that information. He just didn't seem to care that much.

**[23:43] Tim Hopper:** Yeah, I will say in my defense also, I'm worried sometimes that I just sound cranky because I tried a PhD program and I couldn't do it.

**[23:58] Joel Grus:** Don't worry, when you come on this podcast, you're always the least cranky person on the podcast.

**[24:02] Andrew Musselman:** Yeah, you're not a serious person.

**[24:04] Tim Hopper:** I'm offering this feedback as someone who did really well in grad school. My grades were really good. I passed my operations research qualifying exams the first time. I had a great advisor, and I push back on it, and I push back with hyperbole sometimes because I want to get people to think about this. But I really do have a sincere desire to help others think through this more carefully because I've been there. I care, guys. I really care.

**[24:44] Andrew Musselman:** Yeah. I mean, you're doing the equivalent of the suggestion of a gap year after high school, which is something that when I was growing up, nobody did. Nobody did that at all. I did terribly in my first round in college. I probably would have benefited by taking a year off and doing something else because I didn't want to go to college, but it was just—I mean, I didn't want to go to the college I went to for complicated reasons. I dropped out after two years, and I might have been better off just going out and trying something and coming to it my own way.

**[25:16] Tim Hopper:** Yeah, and at the same time, I would be lying if I didn't routinely look at PhD program websites and be like, “Oh, I could study the philosophy of statistics. That would be really valuable and interesting.”

**[25:34] Joel Grus:** I know, it's like when the ex-smoker walks by and sees all the people smoking, they're like, “Wow, you know, I could light one up.”

**[25:39] Tim Hopper:** Yeah, I know. Without a doubt, it's very tempting to me.

**[25:43] Joel Grus:** So changing topics a little bit, is the weather really different up where you are?

**[25:52] Tim Hopper:** I want the listeners to know that Joel did not prepare me for this just being all his height jokes coming out.

**[26:04] Andrew Musselman:** These aren't—yeah, this is just the beginning. But there's another thing about you, and that is you do a lot of self-retweeting, which wasn't allowed for a long time, and then it was allowed, and it seems like you really, really took to that medium. So is that something that just pops in your mind that—sometimes it looks like you had a tweet from a year or two ago and all of a sudden it's relevant again. But along with that, you seem to have really good skills at search—so looking at stuff that you remember you did or someone else posted and being able to find that stuff. Do you have any tips for the listeners?

**[26:51] Tim Hopper:** Yeah, so it all started because people used to ask questions on Twitter or say something, and I'd be like, “Well, I made that same comment.” Part of the motivation for me is I spent a long time on Twitter with basically no one listening to me. I have a good number of followers now, but for a long time it was just like spammers that used to follow you in the old days. And so I used to just kind of, like, somewhat jokingly just copy and paste the link to a tweet I had shared in reply to someone.

**[27:23] Andrew Musselman:** I like doing that.

**[27:24] Tim Hopper:** Yeah, I like doing that.

**[27:25] Joel Grus:** That's fun.

**[27:26] Tim Hopper:** And Twitter search used to be really bad, but there was a third-party service where you could search your own tweet history. So I added an Alfred, which is like an application launcher on OS X. I added an Alfred quick search so I could search my own Twitter history. And then a year or so ago, Twitter added the ability to search your own timeline going all the way back, or all of Twitter all the way back to the beginning, which is really powerful. And so you can just type “from:” and then your handle, and you can search your own timeline. Why don't they—

**[27:57] Andrew Musselman:** They should put a tooltip on that search bar.

**[28:01] Tim Hopper:** Yeah, well, you can go into the advanced search and it has—it explains it more. But you can also filter by date really powerfully, and you can do a little Boolean stuff.

**[28:12] Andrew Musselman:** And I don't know, I usually just go on Google, and that's successful.

**[28:17] Tim Hopper:** Oh, I've never even tried that.

**[28:18] Andrew Musselman:** And that's another one where you need a tooltip. You just do site:twitter and what you're looking for.

**[28:25] Joel Grus:** Have you ever thought about trying to automate that process? Like, you know, write one bot which scours the news or maybe a Twitter feed to find out what's topical today, and then have another piece that knows all of your tweets?

**[28:36] Tim Hopper:** I have thought about that. I already spend enough time on hacky stupid things, and so I have not put the time into that.

**[28:49] Joel Grus:** No such thing.

**[28:50] Tim Hopper:** Yeah. So recent— well, a few months back, I wrote a Bash script that will generate a Twitter search URL that shows me all my tweets from one day ago. And you have to manually generate from/until clauses for every day. So it just loops through all the past 7 years or something and generates this search. So I have this Alfred thing where I can type Command+Space and pull up Alfred and type old tweets, and it just loads all my tweets from the day. So most days I load that, and I just go through, and if there's some interesting stuff... I mean, Twitter is so ephemeral, and I do think people actually can say interesting things in 140 characters, and sometimes I do. And so that allows me to sort of go back and pick out the best things and share them again. Sometimes it's funny to see how things change but don't really change.

**[29:46] Andrew Musselman:** I think my favorite one is the one you did about putting a ring on it.

**[29:51] Tim Hopper:** Yeah, well, obviously that's— I mean, it combined Beyoncé and linear algebra, so—

**[29:58] Andrew Musselman:** Yeah, it was a winner.

**[29:59] Tim Hopper:** Or abstract algebra, I mean. So it's really hard to beat that. I mean, I love math jokes. You guys all enjoy math and humor, so I'm sure you understand.

**[30:09] Andrew Musselman:** No, my wife even liked it once I explained it.

**[30:12] Joel Grus:** So are you long-term bullish on Twitter or long-term skeptical?

**[30:24] Tim Hopper:** I have no idea what the future of Twitter is, but I really love Twitter. Love Twitter. I love— I mean, I wouldn't know you guys if it wasn't from Twitter. Well, you know, who knows what the— that's true.

**[30:35] Andrew Musselman:** Your life would be better.

**[30:35] Tim Hopper:** Yeah. Who knows what the counterfactual is, but, you know, I've gotten jobs, basically my last 3 jobs through Twitter. I love it for networking and entertainment, and I just learn things. I occasionally click links and read blog posts, and like, oh, I know about a lot of data science tools and open source tools.

**[30:59] Andrew Musselman:** Yeah, it's really made the world smaller in that way.

**[31:02] Tim Hopper:** Yeah, one of my prized tweets is something like, data science is the art of putting things into production at your company that you've only read about on Twitter.

**[31:12] Andrew Musselman:** Yep.

**[31:12] Tim Hopper:** And, you know, it's kind of a joke, but it's kind of true too, right?

**[31:15] Andrew Musselman:** Yes.

**[31:16] Tim Hopper:** We use things all the time that we just learned about because somebody tweeted about it.

**[31:19] Andrew Musselman:** I just legitimately recommended a project that's still in incubation for a client, which, you know—

**[31:28] Joel Grus:** Was it Mahout?

**[31:30] Andrew Musselman:** No, no, no, no, that's out of incubation. It's still not in the attic. So no, it was— I think it was Airflow. ETL tool?

**[31:43] Tim Hopper:** I'm currently learning Airflow, so I don't really want to go there.

**[31:48] Andrew Musselman:** Oh, okay, I take it back.

**[31:51] Tim Hopper:** So I hope, you know, if Twitter doesn't— we don't really know what happens to social media networks long term, but I hope we can all move to a similar place. I mean, the same place. If things happen and Twitter dies for whatever reason, I hope I can find a lot of the same people again on Google+.

**[32:13] Andrew Musselman:** Yeah, good luck. It's fun you mentioned that Twitter's kind of changed the job search process. I know we all have fun interview stories and things like that. Do you have any you'd like to share with the listeners?

**[32:27] Tim Hopper:** I do. As you guys know, one of my favorite interview stories is I started interviewing for a job that I think I found out about through Twitter.

**[32:43] Andrew Musselman:** See?

**[32:44] Tim Hopper:** And was offered the job and was offered more money than I've ever been offered anywhere else, which was quite flattering. But I thought it was weird that the job offer didn't have anything about vacation time or how any of that worked, and no one had ever mentioned it at all during the interview process.

**[33:08] Andrew Musselman:** So it's at least an orange flag, right?

**[33:11] Tim Hopper:** Yeah, it was. Yeah, but for the money, I was like, well, if they, you know, if I get 10 days a year, that's a lot of money. So I even pulled up the email so I can read to you the very simple question I asked. It said, "Hi, [name]— a few questions. I see no mention of PTO, company holidays, vacation, sick days, etc. Can you please send me the current policy on that?" You know, not adversarial, not, you know, and I asked a few other questions about equipment and, you know, what are the number of outstanding shares? Those kind of things. Oh, okay.

**[33:54] Andrew Musselman:** But nothing within bounds, right?

**[33:57] Tim Hopper:** Very within bounds. It was there.

**[33:58] Andrew Musselman:** I would be fine with those questions. Yeah, I would have said, "Oh, sorry, we forgot to include that." Here you go.

**[34:07] Tim Hopper:** Absolutely. So I get a reply from the recruiter: We have an open vacation policy. What that means is we do not have a set number of days we give. Okay, that's fine. Then she says, if it becomes a problem, we would speak to you about it. We just ask that you let us know about time off in advance if possible. So that was a little concerning—that it was approached in the negative, like, “If it's a problem, we'll talk to you,” not in the positive, like, “We want you to live your life.” So—and there were some other—she answered my other questions. So I emailed the CEO, who I'd also been talking to in this process, and I said, I have another offer on the table. I'm really having a hard time deciding. You know, I was just trying to be honest with him. I don't like a lot of pretense. I asked some more questions about what I would be working on, and then I said, I understand you have an open vacation policy. Can you give me a better sense of how that works in practice? What is a normal amount of vacation for an employee to take? It was a bit disconcerting that it was mostly explained to me in the negative, and I quoted back what—you know, I was just trying to be fair. I was still very interested in this job at this point. And the CEO, let's see, 18 minutes later replies. The most unbelievable email I've ever received. “Tim, quite honestly, given your questions and the fact you're considering other options, company name may not be the best choice for you. I was pretty transparent about working hard being one of the things we valued most. Also, I want to hire people who see company name as the obvious choice for them. Please don't take this the wrong way. We were impressed with you and thought you'd be a great fit here. Thanks again for considering us.”

**[35:59] Andrew Musselman:** And so did you take it the wrong way?

**[36:03] Tim Hopper:** I have never spoken to him ever again and never heard from him again, so I assume that's the way he wanted me to take it.

**[36:10] Andrew Musselman:** What's the right way? To just take the job and shut up?

**[36:16] Tim Hopper:** I have no idea.

**[36:17] Andrew Musselman:** I've never understood that.

**[36:18] Tim Hopper:** It just blew my mind. I tell everyone and they're like, “Oh, you dodged a bullet.” I mean, that's true, I did dodge a bullet. This is still someone who is recruiting my friends, and I've decided not to publicly denounce them, but I privately will share with anyone and discourage people from taking a job there, because that is not someone you want to work for.

**[36:44] Joel Grus:** Yeah, so I have a similar story, not as good, but I got a recruiter a few weeks ago who emailed me about a job, and this happens with some frequency. And you know they never tell you the name of the company. They're like, “Oh, you know, venture-backed and downtown Seattle and ping pong table” and all this crap. But I've gotten pretty good at trying to figure out what are the statistically improbable phrases in the description they sent me so that I can kind of Google and figure out what the company is. So I went and I looked at this company, and they're talking about, you know, the work is challenging and the hours are long, but we're in it to build a great company. So I wrote him back and I said, you know what, I'm at a point in life where “the hours can be long” is not an enticement, it's a turnoff. So sorry.

**[37:28] Tim Hopper:** Absolutely. Yeah, there's a—well, there are some studies that argue that long hours are largely something employees use to signal their loyalty to a company. I feel like in technical fields where mental effort is paramount, I don't have the mental stamina to work 14-hour days. And if that's what someone needs—

**[37:58] Andrew Musselman:** Same thing with hard labor. Same thing with hard labor. You need to rest.

**[38:01] Tim Hopper:** Yeah, I really like to associate me sitting here drinking my Hint water, tapping on keys, with hard labor. That's very much how I feel.

**[38:10] Andrew Musselman:** Oh no, I'm saying—if you can call it work, right?

**[38:16] Tim Hopper:** Right. Right.

**[38:17] Joel Grus:** So, Tim, you work remotely.

**[38:19] Tim Hopper:** I do.

**[38:20] Joel Grus:** Which means you work on your porch or basement or—

**[38:24] Tim Hopper:** I work—so I work mostly remotely at the moment. My company actually has a local office, but my team is all further away than I am, and we largely work from home and then come in as we need. But, uh, so I have a bonus room that I work in, and when mornings are warm enough or cool enough, I sit outside on my porch a good chunk of a lot of days, which I enjoy thoroughly.

**[38:52] Joel Grus:** What's the best part and the worst part of working remotely as a data scientist?

**[38:57] Tim Hopper:** The best part for me, honestly, is that I have a quiet place where I can think. I mean, thinking hard is an important part of my job. I think open floor plan offices are a difficult place to think.

**[39:17] Joel Grus:** Yeah, no, that's wrong. The right answer was commute. Commutes suck. Yeah.

**[39:23] Andrew Musselman:** That's another one.

**[39:25] Tim Hopper:** No, I do hate commuting, though my commute to my office here is really not bad at all. Although I did get bus sick on the bus riding in recently.

**[39:35] Joel Grus:** Like puke bus sick or just like feeling nauseated?

**[39:39] Tim Hopper:** No, I just felt like it. I was trying to work on the bus. But yeah, I live about 6 miles away, and in Raleigh, people leave the city to work in the Research Triangle Park, so getting into the city where my office is is actually quite easy. Yeah, that's right. But the worst part for me is sometimes I just get a little kind of cabin fever being at home all the time. When I first started working from home, my desk was next to my bed, and I lived alone. And so I basically never left the same room, and that was a bad situation.

**[40:14] Andrew Musselman:** Even still living alone—that violates Geneva Conventions, doesn't it?

**[40:18] Tim Hopper:** It might. Even after that, I lived alone and worked in a separate room. I got a 2-bedroom place that was really good, and I got married last year, and so now, you know, I at least see my wife, which is great. I enjoy that a lot, but sometimes I just need to get out of my house.

**[40:40] Joel Grus:** Yeah.

**[40:41] Andrew Musselman:** Yeah, I found that too with working from home is that you can—well, the commute is short, but then sometimes it's easy to keep working. So you just—there's stuff coming in still 6, 7 at night, and if you're neurotic and obsessive, any notification that's not handled is something that you feel you need to. My wife just last night told me she wished that she—she wished I had a more regular schedule, so fair point.

**[41:10] Tim Hopper:** Though, you know, I think with that—within the day of smartphones and everyone just having laptops—that line is becoming increasingly blurry, to where that's no less true for other employees. For anyone who's doing, like, computer work, they are supposed to take their laptops home. But even then, you know, I actually—

**[41:34] Andrew Musselman:** Some—

**[41:34] Tim Hopper:** One of the challenges for me sometimes is I finish working and then walk up the stairs and my wife is home. And sometimes I actually miss having a little bit of a commute—just that I need to, like, detox from work a little bit. I might just need to start walking around the block or something.

**[41:49] Andrew Musselman:** Mm-hmm.

**[41:50] Tim Hopper:** It's like, get my work—my wife will say, "Oh, you're still in your post-work haze," because I'll just be, like, fighting with Airflow all afternoon, and I'll be in this dazy mood. I love working from home. And, you know, one of the more important things is that I don't really work from home. I work remotely, and I can go wherever I want. So if I want to, like, go work at a coffee shop, I can do that. And, you know, we go visit my in-laws and I can work from their house or do something like that, and it's no problem. As long as I'm showing up to my meetings, no one's really worried about it.

**[42:28] Andrew Musselman:** Yeah, I got to work remotely over Thanksgiving from Los Angeles. That was fun.

**[42:34] Tim Hopper:** Yeah, I mean, you never have to celebrate a holiday again when you work remotely.

**[42:38] Andrew Musselman:** It's great. Nope, always on.

**[42:40] Joel Grus:** That does sound appealing.

**[42:40] Tim Hopper:** It's great.

**[42:42] Joel Grus:** Yeah, so I think we're starting to run low on time. I just had one last question, which is: what's it like being the first person to know when it's raining?

**[42:55] Andrew Musselman:** Do you have, like, a bathroom book of jokes?

**[43:00] Joel Grus:** No, I keep math books in my bathroom.

**[43:04] Tim Hopper:** I do too, actually. Well, physics books. But, well, I guess both. But I think Joel is just going through and reading off my list of questions I've been asked, because—

**[43:15] Andrew Musselman:** Oh, you should read out the URL for that so listeners can go visit.

**[43:20] Joel Grus:** Actually, I didn't look at that. I should have.

**[43:23] Andrew Musselman:** It's doyplayball.tumblr.com. There was another thing that we wanted to ask you, and that was: why is your blog called Stigler Diet?

**[43:34] Tim Hopper:** Oh yeah. So the Stigler Diet problem—George Stigler, who was the economist at the University of Chicago—worked on it in the early days when people were studying linear optimization, like linear constraint optimization. They were thinking, like, could you design a diet that's optimally, like, cheap and healthy? And so that's what Stigler Diet is all about. I think there's a paper that George Stigler published. I think it's largely just a way to demonstrate how linear programming can be used. But actually, as with all good things in life, that name came through Twitter. I tweeted back in 2011—I was looking for a blog name—and David Curran, whose name—I Am Red Dave—who's my favorite Irishman, who I think works for IBM on Watson and studied operations research, was suggesting some great blog names, and he said stiglerdiet.com is available or something. I thought it sounded catchy. So I think one of my first blog posts actually is about an optimization-based diet model.

**[44:58] Andrew Musselman:** Yeah.

**[44:59] Tim Hopper:** Yeah, May 9th, 2000—sorry, January 9th, 2012: "Carrots, Oatmeal, and Operations Research." I wrote a blog post about my classmate at UvA.

**[45:09] Joel Grus:** Sounds delicious.

**[45:10] Tim Hopper:** My classmate at UvA in the math department, his skin was turning orange because all he was eating was carrots and oatmeal and beer and marijuana and amphetamines.

**[45:23] Andrew Musselman:** You're not supposed to eat that.

**[45:25] Tim Hopper:** But I'm not even—his skin actually was turning orange because he was eating so many carrots, because he was like, carrots and oatmeal are healthy and cheap.

**[45:33] Andrew Musselman:** So is amphetamines.

**[45:35] Tim Hopper:** I don't know if they're cheap, but I'm not informed. But so I wrote a blog post showing how to optimize your intake of carrots and oatmeal and explaining linear programming in the process. So you can—

**[45:52] Andrew Musselman:** I forgot what the topic was. I'll have to catch up on the back catalog.

**[45:56] Joel Grus:** So what's your one piece of advice to people who want to get started in data science or thinking about getting into data science?

**[46:08] Andrew Musselman:** Don't.

**[46:09] Joel Grus:** No.

**[46:09] Tim Hopper:** I mean, look, data science is great. We all like to complain about it, but we also like to sit at computers and make money. So I wrote this blog post, "How I Became a Data Scientist Despite Being a Math Major," that largely is saying math isn't enough. You need other things. And I do think it's really important for people to understand math and statistics and stuff, but a lot of what a lot of us do is fight with computers to get our programs to do what we want, or get our dependencies installed, or to get our servers provisioned, and all these things. And you can read about that, but—

**[46:50] Andrew Musselman:** It's always funny to me when people try to say that 90% of data science is data engineering. And then they want to separate it out into a different team that's data engineers versus data scientists, and it's just not realistic to draw a strict line there.

**[47:05] Tim Hopper:** Yeah, and with that, I mean, for me, a lot of my success has been—like, I understand these things partially because I had some computer science classes, but a lot of it for me has been, like, fighting to understand how things work and how to fix things, and just not giving up until you fix them. And even doing that in your private life, outside of your work: when you have a computer thing, figure out how to script something, and then figure out how to get your cron to run on your Mac.

**[47:34] Andrew Musselman:** Yeah.

**[47:34] Tim Hopper:** And just figure these things out. And that has been the most important transferable skill. I mean, one of my other tweeted personal aphorisms is that tenacity is my most important transferable skill. Just, I can keep Googling my error messages until I figure out what's going on.

**[47:55] Andrew Musselman:** That's solid advice.

**[47:58] Tim Hopper:** And read Joel's book, obviously.

**[47:59] Joel Grus:** And read my book, of course.

**[48:02] Tim Hopper:** Of course. If it ever comes out.

**[48:06] Joel Grus:** Right.

**[48:07] Andrew Musselman:** What?

**[48:07] Joel Grus:** How's the book going, Andrew?

**[48:12] Andrew Musselman:** It's good. It's great. One of these days.

**[48:18] Joel Grus:** I can't wait to read it. I can't wait to be a technical reviewer for it.

**[48:23] Andrew Musselman:** Guess what? You might have to wait.

**[48:25] Joel Grus:** Okay, sounds good.

**[48:27] Andrew Musselman:** Well, yeah, thanks for your time, Tim. It's been a pleasure.

**[48:32] Tim Hopper:** The pleasure is all mine.

**[48:34] Andrew Musselman:** And, you know, it's probably easy for people to find you on social media.

**[48:43] Tim Hopper:** We gave them one URL if you want to. TD Hopper—yeah, you can find me on twitter.com/tdhopper, tdhopper.com, instagram.com/tdhopper, linkedinhopper.com/tdhopper.

**[48:57] Joel Grus:** Pinterest, Snapchat?

**[48:59] Tim Hopper:** Yeah, I just deleted Snapchat. Instagram is the new thing.

**[49:03] Joel Grus:** Yeah, there's probably even some newer ones that I don't even know about. Grindr?

**[49:13] Tim Hopper:** I don't know. I'm not as hip as you.

**[49:15] Andrew Musselman:** All right, well, with that, episode 1 is in the can.

**[49:23] Joel Grus:** This is episode 2.

**[49:24] Andrew Musselman:** Right, episode 2. The first real interview, though.

**[49:29] Joel Grus:** Right, the first one that I had a guest. It wasn't just us jabbering back and forth, joshing.

**[49:40] Andrew Musselman:** Joking.

**[49:40] Joel Grus:** And so that's a wrap. Make sure to tell your friends to listen. Make sure to check out our website, adversariallearning.com, and make sure to follow us on Twitter, adversarial_L. If you'd like to follow us individually, I'm @JoelGroose on Twitter, Andrew is @akm, and today's guest Tim Hopper is @TimHopper. TD Hopper. So thanks again, and I know you want to hear that theme music again, so here it is.
