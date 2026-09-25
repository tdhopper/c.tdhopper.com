---
title: Undersampled Radio Interview
categories:
    - Personal Update
tags:
  - data-science
  - career
date: 2016-10-24
slug: undersampled-radio
aliases: [/blog/2016/Oct/24/undersampled-radio/]
portfolio: true
description: An interview from 2016 about my work in data science for cybersecurity.
Thumbnail: /projects/undersampled_radio.png
external: http://undersampledrad.io/home/2016/10/intelligent-security
---

I was flattered to be asked to be on a burgeoning data science podcast called Undersampled Radio. You can listen on [YouTube](https://www.youtube.com/watch?v=q4e_hBUd6zI&feature=youtu.be).

## Watch

{{< youtube q4e_hBUd6zI >}}

## Transcript

This transcript was generated from the original recording with AssemblyAI speaker diarization and lightly edited for readability while preserving each speaker's voice.

**[00:00] Matt Hall:** Oh, we are live.

**[00:01] Gram Ganssle:** We're live. Hi, Matt.

**[00:04] Matt Hall:** Love it. Good morning.

**[00:06] Gram Ganssle:** Welcome to— How are you?

**[00:07] Matt Hall:** I'm amazing.

**[00:09] Gram Ganssle:** Especially, especially amazing because you know what we're doing right now?

**[00:13] Matt Hall:** We're podcasting, man.

**[00:15] Gram Ganssle:** We're podcasting episode 24 of Undersampled Radio. How's that for an organic introduction that I'm derailing right now? That was pretty good.

**[00:23] Matt Hall:** Yeah, it was good.

**[00:24] Gram Ganssle:** Our best one ever. So we are on episode 24. I'm getting pretty excited because we're nearing a quarter century. And I think I mentioned that last episode, but deal with it. I'm going to mention it again, especially— oh, we should have confetti next episode.

**[00:37] Matt Hall:** That'd be nice.

**[00:39] Gram Ganssle:** Did you hear— I don't know.

**[00:41] Matt Hall:** I don't really believe in these arbitrary base-10 milestones. Don't really buy that.

**[00:47] Tim Hopper:** Why not?

**[00:48] Gram Ganssle:** It's our gold— it's our silver birthday.

**[00:50] Matt Hall:** Whatever, man. I'm looking forward to episode 32.

**[00:53] Gram Ganssle:** OK. Noted. You're buying the confetti then, in that case. Hey, did you hear that your friends at the European Space Agency shot a probe to Mars?

**[01:06] Matt Hall:** Yeah, but didn't they shoot it into Mars?

**[01:11] Gram Ganssle:** Yeah, no one really knows. Well, half of it's still OK. Half of it's orbiting and sending data. Yeah, it's just the other half kind of went dark.

**[01:19] Matt Hall:** 50%, that's not even a 2-2.

**[01:23] Gram Ganssle:** Well, I mean, 50% on Earth is crappy, but 50% on Mars is pretty impressive, I think.

**[01:30] Tim Hopper:** Okay, yeah, fair enough.

**[01:31] Gram Ganssle:** The— I put a link in the show notes to the hand-wavy ESA plan to build a lunar habitat because I'm pretty psyched about a moon base. Yeah, you know, take a little vacation up to the moon.

**[01:47] Matt Hall:** What was— so I guess I just don't pay very much attention, but today was the first time I'd heard of this mission. Do you know what ExoMars is?

**[01:58] Gram Ganssle:** Specifically? No, no idea.

**[02:04] Tim Hopper:** Okay.

**[02:05] Gram Ganssle:** Oh, okay.

**[02:06] Matt Hall:** Awesome, moving on then.

**[02:07] Gram Ganssle:** Good. The link is in the notes, check it out. SEG was awesome. Ish. Matt wasn't there.

**[02:14] Matt Hall:** Were you there though?

**[02:16] Gram Ganssle:** I was there in spirit. My schedule was hijacked by meetings, but it was lovely. You can read the— oh, actually, I don't even have a link, but you know where the abstracts are. You can read them.

**[02:31] Matt Hall:** Wait, so hang on. Did you go to Dallas or not? Oh, you did? Oh, okay.

**[02:39] Gram Ganssle:** Lovely.

**[02:39] Matt Hall:** Okay, did you go to any talks?

**[02:40] Gram Ganssle:** Yes, but barely. I walked around the exhibition floor briefly. It was nice. I think I'd like to do another show on sort of like highlights of the conference, but it's probably not the best one to do this year, so whatever. Fair enough.

**[02:59] Matt Hall:** I felt a little bit— I seem to— I don't know, I seem to get a lot of emails and DMs on Twitter and stuff asking me if I was there and could we meet up. And so I kind of really felt bad, I suppose, about not being there and, you know, seeing Maitri's tweets and the very small handful of people who actually used social media at the event made me miss it a little bit. I still have no desire to go to Dallas. But yeah, I suppose I— anyway, we'll make up for it next year. I think it's in Houston next year, right? So also not all that appealing, but still, probably show up next year. And I think, by the way, just as a footnote, I'm also still toying with EAGE in Paris and a hackathon there. If anyone's listening in Europe and wants to— and gets excited about that and would like maybe to help figure it out, especially if you're in Paris or in France and/or speak French really well, I could probably use some help finding caterers and venues and that kind of thing, if indeed we do go ahead.

**[04:16] Gram Ganssle:** And/or have a sweet flat in downtown Paris with a guest bedroom for Matt.

**[04:20] Matt Hall:** Yeah, sure, there you go.

**[04:23] Gram Ganssle:** Side note. I actually want to introduce our guest today before we do our little notes and stuff, because I think that he— well, certainly my notes, he knows more than I do about what I've written there. And this— there's a paper that's really cool, and I think he'll— he'd like to chime in on that. So without further ado, our guest today is Tim Hopper. He has an awesome blog, which is linked in the show notes. His website's pretty extensive. He's got— he's on Twitter and LinkedIn and all this stuff. Seriously rivals Matt's blog. You got to do a better job, Matt. Tim, welcome to the show.

**[05:06] Tim Hopper:** Thank you. Do I have theme music or anything that welcomes me?

**[05:10] Gram Ganssle:** No, no, no confetti either, but we'll work on it.

**[05:14] Matt Hall:** No music.

**[05:16] Gram Ganssle:** Yeah, so Tim is a data scientist at Distil Networks. It looks— I don't know, Tim, I've just stalked him on the internet for the past few weeks. It looks like he is a Renaissance man, varied interests outside of the—

**[05:34] Tim Hopper:** Short attention span is another way of putting that. That's great.

**[05:40] Gram Ganssle:** What kind of data science do you do, Tim?

**[05:43] Tim Hopper:** At the moment, Distil Networks is a cybersecurity company. We provide a product to typically large websites to block malicious web traffic. So our— it's our belief that a large percentage of traffic on the internet, meaning things making HTTP requests, are malicious bots. Malicious maybe meaning people trying to scrape content off your website or do DDoS attacks or various things. So I'm on the research team, and it's our mission to improve our product and find malicious bots in an automated fashion, largely based on just what we can see from incoming HTTP requests.

**[06:34] Matt Hall:** That's fascinating. So do you know roughly what percentage of traffic it is, or is it just a completely— it's like dark matter?

**[06:47] Tim Hopper:** I should know more off the top of my head, but we publish a report each year that we call the Bot Report. That's like an industry white paper kind of thing, and it's something like 20 to 40% of traffic we think is malicious traffic. So there's also non-malicious bots, like a Googlebot, for example. Google is constantly scraping the whole internet, and you want that to happen, but you don't want your competitor to come and scrape all your price data, for example. And it happens at extremely large scales. People often—many companies, like e-commerce companies and things, have internal teams that try and detect it, but it's an incredibly varied world of complexity of how those things happen, and it's a very fast-moving target because, I mean, they're all computer systems, but they all have people behind them. And so people are responding to defense and changing their means of attack.

**[07:51] Matt Hall:** Yeah, right. No, I just, like, you know, I was a bit of a laggard, I guess, in terms of being a web publisher of any kind. But I think probably everyone—well, depending on the platform you're using—but many people who start a blog, or in my case, the first thing I did on the web was started a wiki, it's like a complete revelation and mind-blowing how you just get spam from day one.

**[08:20] Tim Hopper:** Right, exactly.

**[08:20] Matt Hall:** And at first you're like, who are these people posting about Gucci handbags? What a waste of time. Who's got time for that? And then you gradually realize, oh no, this is just software. And—

**[08:33] Tim Hopper:** Right, yeah. And people actually do end up clicking those links. So if you can do it at large enough scale, you can skim off the margins of people who do that. And so that, you know, it's annoying for people who have a blog on the side, but for businesses, it potentially cuts into their revenue for a variety of reasons. I mean, if nothing else, there is a sense in which every request someone makes—an HTTP request—you click on a link, it's a cost to the business, right? Because they have to have a server. So if 40% of your traffic is pointless, maybe you could cut down your hardware by 40%, which, you know, already starts to make sense. So it's a big incentive for people. And so this is a relatively new world of computer security to me. I've been doing this for about a year. It's fascinating. But I think we've already derailed off your announcement that you're trying to get to, talking about how exciting my life is.

**[09:32] Gram Ganssle:** Yes, your life sounds very exciting, and I'd like to know more about why it is. How do you guys do this? I mean, what's the overall gist of covering 40% of HTTP requests?

**[09:45] Tim Hopper:** So we do it—there are a number of levels to how we do it. There are aspects of it that, on occasion, for certain things you can just identify IP addresses or various things that you get from requests, and you can blacklist certain things. But we try to move beyond that, though certainly clients still need that kind of thing. We use JavaScript to execute code in people's browsers—which sounds malicious in itself, but everyone who's running a browser is executing JavaScript. But there are various, like, somewhat heuristic tests that you can use with JavaScript to identify malicious users. And then our clients get to tune how they use our product, like to decide, you know, what level that they want to block at, and then also how they respond to certain things. So they can just outright block things, or they could then show you a CAPTCHA if they think you're suspect, or they can just monitor the traffic they think is malicious. Our team's task is—so there's this whole initial level of how our product works using kind of JavaScript and more kind of domain knowledge of how browsers work and why things might be malicious. So for example, some clients don't want anyone using something like Selenium, or a system where it's like a scriptable browser, basically. And they can just block all of that. But our team then gets all the incoming request data that we have from our clients, meaning we have a row in a database for every HTTP request coming on our clients' websites. And we sort of see that as more of an abstract data problem: here's this somewhat messy dataset—can we identify patterns that are malicious? And the challenge for us is that there's a gap of training data because often we don't really know what is actually behind things. And a lot of companies that do fraud-related things, you can sort of identify things that appear to be suspicious, and then you can escalate that to do a fraud investigation. And so over time, you're building up more certainty. And we can do that to some level. We have a team that helps with that. But the nature of web requests is it's very ephemeral. Someone makes a request and then they might never make a request again, and you might know nothing about that system ever again. Or people can change the appearance of their— you can manipulate almost everything that a web browser returns because, I mean, at some level HTTP is just like exchanging text documents. And so you could go and change whatever you—how you want to exchange that. So we try and work around that in a variety of ways and then devise, like, find various ways that we can identify patterns that we see as being problematic, and then giving our clients and our support staff the ability to block based on those things.

**[13:29] Gram Ganssle:** Yeah, that's fascinating. I mean, it's, you know, many companies back in the bronze age of the '90s did the thing where it was sort of brute force-y, build this database, as you say, and manually pick and choose things. But it's interesting to know that those databases now are being learned on, I guess, by some deep learning algorithms.

**[13:54] Tim Hopper:** Yeah, yeah, yeah. So, I mean, there's still, like, for email spam, you can buy basically lists of IP addresses that you should just block all email coming from those IP addresses. And I mean, the other thing people have done for many years is display CAPTCHAs, and our product is essentially an alternative to CAPTCHA. And what we're trying to say is: don't inconvenience your users by making them jump through some hoop; let's just do that automatically. And we have a strong belief also that CAPTCHAs are actually really terrible. And there's evidence behind that. I mean, Google has shown they can write programs to clear their own CAPTCHAs at, like, over a 99% success rate or something.

**[14:46] Gram Ganssle:** Pretty good. It's pretty good.

**[14:47] Matt Hall:** You mentioned the difficulty of having good labels because you don't necessarily know what is malicious. It strikes me that you could, instead of blocking known bad IPs, just use them, see what they do on— I guess you could divert them to some system that didn't matter, essentially, and use that behavior. So do you try to learn from known bad IPs?

**[15:19] Tim Hopper:** Yeah, we do. Yeah, so that's a big part of what we do. And we're currently in discussions of doing even more of that, where we're thinking about, like, can you take the risk of occasionally letting a malicious actor through to then, like, monitor their behavior and use that as more training data, and more kind of experimental design, sort of? But the challenge is, I mean, a challenge is we have zero control over someone making repeat requests. So for a given website, the mode number of requests, or probably even the median number of requests that someone makes, is one, right? So someone clicks on a link and they load your website, and then you never see them again. And then it has this enormous tail where some computer will make, like, 100,000 requests in a certain time period or something. But that becomes very hard if you want to think about designing— there's basically no way to ensure that anyone that you want to look at is going to ever come back again.

**[16:41] Matt Hall:** Right.

**[16:42] Tim Hopper:** And so it's— and you have no knowledge of that whatsoever. Like, you can't— you have no idea what's happening behind that IP address as to what's going on, as to whether or not someone will ever be seen again. So even thinking, you know, of routing people into sample groups or something, you're almost immediately biasing the way you do that because you're looking at people who make multiple requests. So we also want to make— there are also malicious actors who only make one request, and we want to block them, but you can't monitor their behavior over time because it just happens once. So it's very, very complex and a lot of moving parts. And after a year of working at this company, I'm starting to get some sense of— of how hard the problem is, and all my idealism of a year ago is having to be converted to reality of now.

**[17:41] Matt Hall:** Yeah, that really feels like a feature of data science is this sort of early promise of all the awesome tasks there are to try, and then the realization gradually that things are just a total nightmare, and the data's a mess, and the problem's really hard.

**[18:03] Tim Hopper:** And this huge, you know, I really value my academic learning, and I think the preparation is really helpful, but when you're in school, you get really deceived, and maybe no one's fault, into thinking the way things are presented in the textbook are going to be how you actually apply them, and ends up, for so many reasons, that not being the case. I mean, you know, for us it's a lack of training data, and then the reality of deploying something like this at scale. So when you're looking at thousands and thousands of data points coming in every second, how do you deploy a model on that that isn't going to fall apart? And then— and how do you validate these things over time and all this?

**[18:56] Matt Hall:** Right, right. And you already mentioned another kind of unique feature that you have to deal with that in geoscience we don't have to worry about, because we're, you know, also concerned with anomaly detection, sometimes on quite small samples and sometimes without a lot of label data. But our targets aren't in a sort of evolutionary way or a quantum way—they don't respond to our efforts to detect them like your targets do. Like there's an actual cat-and-mouse arms race going on that means you can't necessarily use data from 3 years ago.

**[19:36] Tim Hopper:** Yep. Yeah, absolutely.

**[19:38] Matt Hall:** What a nightmare. It's a very cool problem.

**[19:42] Tim Hopper:** My little zinger that I was saving for you guys is that I worked my first job out of grad school. I worked at a government contractor and wrote— I ended up— I was hired as a data scientist and they had nothing for me to do, and I ended up working on an environmental mine modeling software for the EPA for 6 months or so.

**[20:11] Gram Ganssle:** Zing!

**[20:13] Tim Hopper:** Developing the UI and doing horrific modeling of, like— so it's like surface mining in West Virginia. So they take all these core samples to measure the various, whatever things are in rocks— acidity and all this various stuff. And then we tried to, like, interpolate, and I knew nothing about any kind of geo-modeling, and I'm horrified at the thought that someone might actually be using that software to make real-life decisions at this point. I hope that's not the case.

**[20:50] Gram Ganssle:** Yeah, we all are. I mean, we're doing— we're all doing the same thing. They tell us, oh, where should we drill for oil? We just throw that dart at the map and that's it.

**[20:58] Matt Hall:** No, but actually, I feel like that raises an interesting point, actually, because I was chatting to someone yesterday about this— how, yeah. We're working with a guy at the moment who's just graduated in astrophysics, and he's helping us with a data science project that we're working on. And he has really no domain knowledge at all in geoscience, right? He doesn't really know what the problem is, or anything about rocks, or the data that he's handling. And that's kind of a feature as well as a bug, right? Because he can just look at the data as data. He's unencumbered by this kind of mishmash of caveats and all that background. But sometimes we'll get together and chat about the data, and he's like, "Oh, right, OK— everything I've done is completely invalid because—"

**[21:56] Tim Hopper:** Right.

**[21:56] Matt Hall:** "—I didn't know about that physical kind of constraint on the system." So, I mean, there's a lot to be said for having domain experts work with non-domain experts, I think, in data science because they've got these different views.

**[22:11] Tim Hopper:** Absolutely. That's something we deal with and kind of think about a lot at our company because our team is non-domain experts. There are three of us, and we have kind of varied engineering backgrounds. And then we have another team that are—we call them analysts—and they're not—we don't call them data scientists, but in many ways they are. But they have this deep domain knowledge of how browsers work and how internet protocols work, and even how malicious actors behave on the internet. And so we kind of try to figure out how those two things mesh together, and we've made a lot of headway. And I do think, yeah, I think that can be an extremely valuable tool even. As long as you, you know—you say unencumbered by all these various things—but that, you know, you could also be unencumbered by nuances that people have learned about a certain thing over many years. Just looking at, for example, geodata, you know, you have all these—thinking about your data having the geospatial correlations—that someone who just looks at a raw dataset, that maybe isn't going to be obvious to them.

**[23:26] Matt Hall:** Sure.

**[23:27] Tim Hopper:** You have to take that into account.

**[23:28] Matt Hall:** Yeah, totally. Yeah, yeah. So I guess then it just comes down to how many of those things are valid and how—and are any of them? Because I think some of them are, you know, they're spurious, or they're limitations that we see that really aren't—maybe aren't there. Or, I don't know, it's an age-old discussion, really, especially in geophysics, about whether you—the extent to which you're prepared to sort of brute-force insight from the data, or should the insight only come from known physical relationships?

**[24:04] Tim Hopper:** Right. Yeah, that's a very—that translates directly into my own experience outside of... So let's—

**[24:16] Gram Ganssle:** Let me just give Distil a little plug here and say: what kind of deliverables do you guys have? Is it all service-based, or is there an interface, like for doing reporting or tuning parameters on your—

**[24:30] Tim Hopper:** Yeah, so both. I mean, largely it's a service, so our clients' web traffic gets routed either through their own hardware that we install our platform on, or through our hosted system. And we, for those who know, we basically act as like a reverse proxy, kind of a load balancer. So the internet requests that are made—the DNS just gets routed to us. And so people making the requests don't actually know that unless they're doing like a traceroute or something to try to detect that. And then there's also—each client has an online dashboard where they can do exactly tuning and monitoring and various things. And our hope is, you know, to make it as hands-off as possible, but people do have various questions and various things. Thankfully, I don't interact with clients or do the support at that level or anything, so I largely get to ignore that.

**[25:39] Gram Ganssle:** Good, good.

**[25:40] Matt Hall:** How many Russian hackers do you have working at the company? I always feel like cybersecurity—you guys must hire actual malicious programmers, no?

**[25:51] Tim Hopper:** Yeah, so that's funny. The team that I was just describing that has this domain knowledge, we actually did an acquihire of a team, and they're based in Stockholm. But they're not all—they're all European; they're not all Swedish. But they really do... So when we were looking into hiring, or buying this company, one of their analysts basically—so some of our leadership went over to do due diligence, and one of their analysts sat down at a computer and showed how he could just work around our whole system. And they do various... They're really amazing, and they just—they look at a computer system or any interface or something, and they just start to think, like, how could someone, you know, manipulate the vulnerabilities of the system. But, you know, and some—those of us who have enjoyed computers for a long time—always think about that on some level, but they think about this like 10x the way that I've ever been able to think about it.

**[27:05] Gram Ganssle:** You should have known me in my former life. I want to change tacks a little bit here and ask you about something that Matt is an expert in and actively pushes at his audience on the internet, which is openness of projects and data, and specifically the aim to not only make things open but to make things accessible. So on Tim's website, he has a video, and he has a blog post about making open projects mean something by making them beautiful, basically. And why don't you touch on that a little bit? I mean, why does it matter? I mean, if I put all my stuff up on the internet for free, isn't that good enough?

**[28:01] Tim Hopper:** Yeah. So the context of that is I just gave this talk at—we had a PI Data. Carolina is here. I'm in Raleigh, North Carolina, and we hosted this PI Data conference for the first time. And the angle of my talk was largely trying to encourage people who are in kind of the data science realm that they should be more proactively sharing things. And the emphasis of my talk was really for their own benefit, not really for the benefit of having the knowledge out there. But that's not the whole story. My own experience is I tinkered on all kinds of interesting things for the last 15 years of my life. And all through grad school, I was, like many, a curious grad student. And so I would, instead of working on my schoolwork, pull down some dataset and look at it or do these interesting side projects or, you know, write some Mathematica script to do some interesting computation. And then that just—it never went anywhere beyond that.

And my encouragement to people is you can do well for yourself by not being quite so humble about that and, like, make those things available to the world. But at the same time, as you alluded to, you can't just, like, go post a script online on a GitHub Gist or something with zero context and zero instruction and zero example. Like, no one's going to look at that, right? Typically. So what I was encouraging people to do, and what I've tried to do in my own life, is think about, you know, how to present yourself and how to make that more accessible to people. And so selfishly, you know, hopefully that makes me an attractive candidate when someone is wanting to hire me.

But, you know, there's a clear double benefit there because you're making something available and other people are actually—it's not just recruiters who are going to look at that and benefit, but my entire life depends on software that often, you know, many things in the Python space started as someone's side project when they were in grad school or something like—I mean, NumPy and SciPy are all Travis Oliphant's kind of side project as an academic. And I use IPython Notebooks all the time. And that was like Fernando Perez doing that as a side project as a grad student, and now has become something I'm using every day.

And so the other angle of that is I think those who don't really have very formal training or experience in kind of the software world don't—no one ever teaches you how to share things and how to make your code usable by other people. Because those of us who are learning to program in the classroom, but not really in kind of a software development-oriented thing, you're learning from your professors, and they have definitely no idea how to share code with people.

So all that to say, I think everyone can win when we do this. I was recently asked by some Duke computer science students to come speak to them on the same topic because they, you know, here at Duke, which is a leading institution and has some world-class computer science research going on there, the students there feel like they aren't really getting practical skills like how to share things and how to interact with people. And the internet's really just revolutionized it, not to be cliché, but revolutionized the way that we can share code. And I guess in summary, I think, you know, it's worth doing well and worth thinking beyond just the code, but thinking about kind of self-marketing it a little bit.

**[32:27] Matt Hall:** Yeah, I mean, I think that's really important work, and that really resonates with me—this, what you said, that no one teaches you how to share things. So I absolutely see that in the geosciences as well, where we badly need it. I mean, you know, you could argue that there's so many people sharing awesome stuff in tech that I feel like, you know, I already can't keep up. In geoscience, there's a real dearth of kind of both, you know, openly available and just sort of discoverable and sort of documented stuff.

**[33:05] Gram Ganssle:** Yeah.

**[33:05] Matt Hall:** And I think the tools are one thing, and things like GitHub are just incredible, powerful tools. But there's also a thing—there's something about the cultural side and getting over, I guess, getting over that humility that you were talking about. There's a lot of people I talk to about blogging or even putting their stuff on GitHub, which to you and I kind of feels like just a thing that you do anyway. I mean, I couldn't keep track of my own stuff if I wasn't using these tools, right?

**[33:41] Gram Ganssle:** Yeah.

**[33:41] Matt Hall:** I mean, I couldn't keep track of my own. It's as much for me as anyone. But they sort of say, oh, no one's going to be interested in my stuff. Or they're even afraid, like just downright worried about being judged or, you know, being hated on or whatever it is. What would you say to people in that sort of situation who feel like, oh, I don't want to put my stuff out there?

**[34:06] Tim Hopper:** Yeah, well, you know, I had a tweet about this a year or two ago. The idea basically being that we say this like, oh, no one's going to be interested in that. Well, at the same time, many of us spend half our days Googling to find people who talked about some really obscure thing and wanting to have, like, some concise and clear explanation of this very obscure thing. And then, like, in the same sentence almost, we're saying like, oh, but no one's gonna be interested in my, like, really obscure thing.

One of my most read blog posts is: I was working on PySpark a few years ago, or with PySpark a few years ago, and there's this aggregateByKey function, and I thought the documentation was unclear. So I just, like, sat down one morning. I was like, okay, I'm gonna figure out an example of really how this thing works, just 'cause it's just a little bit convoluted. And so I wrote up this blog post—just a short example of how PySpark aggregateByKey works. And then it's my, like, second or third most—I think third most popular blog post, right?

And yeah, so it just, you know, I think at some level it's just getting people over the absurdity of saying, well, there are 7 billion people in the world, and there are at least, like, five other people who are probably interested in this thing that you're interested in, or have this problem that you're—and so, you know, if nothing else, do them the courtesy of not making them go through the same frustration you went to figure something out or something like that.

**[35:46] Matt Hall:** Okay.

**[35:46] Tim Hopper:** That, you know, so that there's both the self-promotion, but there's the goodwill aspect. I just gave a presentation at our local data science meetup two nights ago on latent Dirichlet allocation, which is a Bayesian model for text analysis, and the whole motivation for my presentation, I was telling the organizer of the group, like, the whole motivation is I found the resources out there on this topic so painful that, in some weird way, that gives me the desire to, like, let other people have less pain. Like, maybe some people have that experience and then they want to— and I'll be like, oh, you have to be annoyed too because I was annoyed. But, like, I guess I just think it doesn't have to be this way. It doesn't have to be as confusing as academic literature makes it, or something like that.

**[36:44] Matt Hall:** Yeah, right. Yeah, half the things I write, I think I'm really writing to myself in the past. Like, I wish I'd read this.

**[36:54] Tim Hopper:** Yeah. And then, you know, people see on Twitter all the time people stumble on their own answers on Stack Overflow. They're confused about something and they found that they had answered it three years ago. I just saw someone had started to respond in a comment to something on Stack Overflow and realized he was responding to himself from several years ago. You're an idiot! Yeah.

**[37:19] Matt Hall:** Okay, so you're either writing to yourself in the past or you're writing to yourself in the future.

**[37:23] Tim Hopper:** Yeah, yeah. And I don't want to minimize the— it does take time to do this kind of thing, right? And there are lots of things I pass over that I should be documenting or something. But I want people to know that it really is valuable. It's valuable for other people. It's going to be valuable for themselves. And at the same time, in this presentation I gave at PyData, also trying to give people a little bit of direction as to how to do this. Because when I was a grad student six years ago, I just, you know, GitHub is kind of second nature to me now, but at the time I was so confused. I was like, what's the difference between Git and GitHub? And what's the relationship between my repositories locally and what's there? And, you know, these things. And I just didn't know what to do. And I think that actually is for grad students, oftentimes they just— there's a sincere lack of knowledge in there. Trying to do their own things in school and learn this stuff at the same time, but I think it's worth it. And another important aspect of this is these same kind of principles end up being valuable as you work in a company too, right? So even if you're not sharing things publicly, you know, it's kind of a joke to say, oh, I'm just gonna whip up this script real quick and it doesn't matter how I write it because no one's gonna ever see it except for me. Like, that's like famous last words. Like, as soon as you say that, it's going to be something the company depends on forever. And so thinking about, you know, how you could then document things internally and present things well internally is such an important thing, and that's something my team thinks about a lot.

**[39:12] Matt Hall:** Yeah.

**[39:14] Tim Hopper:** Amongst our own team and then amongst our own company. And these days, the tools that you use for that are pretty much the same. I mean, it's GitHub, right? Or all these similar kinds of tools. It's the same you're using in the broader space. So there's a lot of translation between those things.

**[39:30] Matt Hall:** Yeah, right. No, I think that kind of writing to your past self or future self, it sort of extends in a way to a lot of stuff that we do. Like, we do a lot of work with the government, and I'm constantly railing at them to get better at open data. And managing things like their code bases, not necessarily for anyone else, but just for themselves. Just for your own— I mean, like you say, anything else is a waste of effort. It's a waste of human ingenuity and time to solve these problems over and over again. Yeah. But organizations especially— individuals maybe have some level of tolerance, but organizations have this sky-high level of tolerance for that kind of just erosive loss of capacity, that kind of just creeping inefficiencies that they'll just tolerate for years and years and years. And if you added it up, it's probably the same as that 40% of malicious web traffic.

**[40:43] Tim Hopper:** There's a real cost to it.

**[40:44] Matt Hall:** Yeah, but it's sort of invisible, or it's like tiny pinpricks, you know, it's like annoying, but—

**[40:50] Gram Ganssle:** So we need a class, Tim. We need a class, man, like best practices in open sharing something.

**[40:58] Matt Hall:** Totally.

**[40:59] Gram Ganssle:** Yeah? Do you teach— I remember reading something on your website or something like that about you used to teach math classes, I think.

**[41:06] Matt Hall:** Yeah.

**[41:07] Gram Ganssle:** Are you teaching anything these days?

**[41:09] Tim Hopper:** I'm not, but I taught calculus through grad school, and I really— actually, I really love teaching. And I try to give talks on occasion because I enjoy— yeah, I just really enjoy it, and I think it's a valuable thing. I'm finding it increasingly hard to do a whole lot of technical things on top of my job just because I want to spend time with my wife and be outside. And so I'm less and less motivated at this point to really do a lot of things. But in the future, I could imagine, if I had the flexibility, doing more instruction on these kind of topics. I would love even to, you know, I went to NC State, which is here in Raleigh. And I would love even in the future to have some adjunct position to tell computer science students things I wish I had known 20 years ago, that kind of thing. Because this is a whole other issue, but there is a real lack of— your professors are not the ones, for the most part, to teach you these kind of things. They just— it's changing a little bit, but for the most part, your professors don't know these things. And no, I was emailing C++ files and Python files back and forth to my advisor in grad school. Like, that's the only way he wanted to deal with it.

**[42:42] Gram Ganssle:** Well, cool. We look forward to the future Tim Hopper data science-y open sharing professional development course.

**[42:56] Tim Hopper:** Sounds great. I look forward to that, too. I might benefit.

**[42:59] Gram Ganssle:** Hey, have you guys heard of Termux? It is a Linux emulator for Android. My goodness. It's lovely. I just started playing with this thing. One of the—oh, I don't know if we told you this, Tim, but we've got—and this is another good shameless plug—we've got a forum, a Slack instance that's kind of co-syndicated with this podcast called The Software Underground, where we have a bunch of software people and geo people and people of various scientific disciplines talking about whatever random things they're interested in. One of the people on there was discussing this, this Termux app, and I started playing with it, and I can't get enough. It's amazing. You can just—I mean, you can use your phone and log into, you know, just SSH into your Amazon Web Services instances and do work, like actual work from your cell phone. It is lovely.

**[44:01] Tim Hopper:** Nothing like the ability to keep working everywhere you go.

**[44:07] Gram Ganssle:** Well, also nothing like the ability to check something when you don't have your laptop on hand. I mean, yeah, I am a horrible, horrible case of work on the bus ride to X or whatever, you know, it's all the time. But it just makes it accessible if you don't have to take your laptop everywhere. It's kind of nice.

**[44:31] Tim Hopper:** There's a really good—so I'm on iPhone and I think it's called Prompt. It's a terminal emulator on the iPhone that I've used similarly in the past. SSH into DigitalOcean. Yeah, for me it's mostly been more of a novelty that, oh, this is possible.

**[44:50] Gram Ganssle:** Well, I'm excited about it, and I'm hoping I don't, I guess, waste too many hours of my day screwing around with things from my cell phone. But anyway, I want to—let me just wrap up with a quick question here. A nice easy question to answer. Are humans going to kill ourselves before the AIs take over?

**[45:12] Tim Hopper:** I certainly live in the skeptical camp of AI doomsday, although Tesla announcing self-driving cars yesterday, maybe it's coming. So I guess that would make the answer yes, because that puts the AI takeover quite in the future, and humans aren't doing so well. So—Matt?

**[45:46] Matt Hall:** No, I think it'll be the AIs.

**[45:50] Gram Ganssle:** You think so?

**[45:51] Matt Hall:** Yeah.

**[45:52] Gram Ganssle:** OK. Skynet. Skynet. Good. Well, I'm glad that we solved that.

**[45:58] Matt Hall:** It was much easier—

**[46:02] Gram Ganssle:** Yeah, no problem, no problem. Tim, thanks for joining us on the show, man.

**[46:06] Tim Hopper:** I very much appreciate you reaching out.

**[46:10] Gram Ganssle:** We will be back, not next week, but the week after that with what, Matt? What episode?

**[46:17] Matt Hall:** Huh? Huh? Huh? What is it, like 25 or something like that?

**[46:23] Tim Hopper:** I applaud you celebrating 25 episodes. I just saw my calendar that in about a year I'm going to be celebrating a billion seconds of life, and I'm planning to throw myself a party. So—

**[46:35] Gram Ganssle:** Nice! See, that is getting with the program, Matt. Tim, you want a job? Matt, you're fired. All right, thanks again, Tim Hopper, for coming and joining us on episode 24.

**[46:49] Tim Hopper:** You're welcome. Thank you. Cheers.

**[46:52] Matt Hall:** Bye.

**[46:52] Gram Ganssle:** See everybody next week. Bye.
