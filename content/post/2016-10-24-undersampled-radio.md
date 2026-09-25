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

This transcript was recovered from YouTube's automatic captions and lightly edited into shorter timestamped passages. The captions do not expose reliable speaker labels or punctuation, so neither has been invented here.

**[00:00]** oh we are live we're live hi Matt love it good morning welcome to you I'm I'm amazing especially amazing because you know what we're doing right now we're podcasting man we're podcasting episode 24 of undersampled radio how's that for an organic introduction that I'm derailing right now that was pretty good yeah our best one ever so we are on episode 24 I'm getting pretty excited because we're

**[00:30]** nearing a quarter century and I think I mentioned that last episode but deal with it I'm going to mention it again especially oh we should have confetti next episode that'd be nice did you I don't know I don't really believe in these arbitrary base 10 Milestones don't really buy that why not it's our gold it's our silver birthday whatever man I'm looking forward to episode 32 okay noted you're buying the confetti then in that case

**[01:00]** hey did you hear that your friends at the European Space Agency shot the probe to Mars well yeah but didn't didn't they shoot it into Mars didn't yeah no one really knows well half of it still okay half of it's orbiting and sending yeah it's just the other half kind of went dark I 50% that's not even a 22 well I mean 50% on Earth is crappy but 50% on Mars is pretty impressive I think okay yeah fair enough the I put

**[01:33]** a link in the show notes to the hand wavy ESA plan to build a lunar habitat because I'm pretty psyched about a moon base yeah you know take a little vacation up to the moon what was so I guess I just don't pay very much attention but today was the first time I'd heard of this mission do you know what ExoMars is [Music] specifically no no no idea okay oh

**[02:06]** okay Al moving on that good the link is in the notes check it out scg was awesome ish Matt wasn't there were you there though I was there in spirit my schedule was hijacked by meetings but it was lovely you can read the oh actually I don't even have a link but you know where the abstracts are you can read them wait so hang on did you go to Dallas or not yeah oh you did oh okay lovely okay did you go

**[02:39]** through any talks yes but barely I walked around the exhibition floor briefly it was it was nice I think I'd like to do another show on sort of like highlights of the conference but it's probably not the best one to do this year so whatever I felt a little bit I seem to I don't know I seem to get a lot of emails and DMS on Twitter and stuff about asking me if I was there and could we

**[03:10]** meet up and so I kind of really felt bad I suppose about not being there and you know seeing mri's tweets and the hand the very small handful of people who actually use social media at the event made me miss it a little bit I still have no desire to go to Dallas but yeah I suppose I anyway we'll make up for it next year I think it's in Houston next year right so yeah

**[03:40]** also not all that appealing but still probably show up next year and I think by the way is as a footnote I'm also still toying with eag in Paris and a hack on there so if anyone's listening in Europe and wants to and that gets excited about that and would like maybe to help figure it out especially if you're in Paris or in France Andor speak brench really well I could probably use some help finding

**[04:11]** Caterers and venues and that kind of thing if indeed we do go ahead and or have a sweet flat in downtown Paris for with a guest bedroom for Matt yeah sure there you go side note I actually want to introduce our guests today before we do our little notes and stuff because I think that he well certainly my notes he knows more than I do about what I've written there and this there's a paper that's really cool and I think he'll he'll he'd like to

**[04:42]** chime in on that so without further Ado Our Guest today is Tim Hopper he has an awesome blog which is linked in the show notes his website's pretty extensive he's got he's on Twitter and LinkedIn and all this stuff seriously Rivals Matt's Blog you got to do a better job Matt Tim welcome to the show thank you do I have theme music or anything that welcomes me no no no confetti either uh

**[05:13]** but work on it music yeah so Tim is a is a data scientist at Distil Networks it looks I don't know Tim I've just stalked him on the internet for the past few weeks it looks like he is man Renaissance Man varied interests outside of the attention span is another way of putting that right what kind of what kind of data science do you do Tim at the

**[05:44]** moment Distil Networks is a cyber security company we provide a product to typically large websites to block malicious web traffic so our it's our belief that a large percentage of traffic on the internet meaning things making HTTP requests are malicious bots malicious maybe meaning people trying to scrape content off your website or do DOS attacks or various

**[06:15]** things so I'm on the research team and it's our mission to improve our product and find malicious bots in an automated fashion largely based on just what we can see from incoming HTTP requests that's fascinating I so do you know roughly what percentage of traffic it is or is it just a completely it's like dark matter I

**[06:47]** I should know more off the top of my head but so we publish a report each year that we call the bot report it's like a an industry white paper kind of thing and it's something like 20 to 40% of traffic we think is malicious traffic so there's also non-malicious bots so like a Google bot for example Google's constantly scraping the whole internet and you want that to happen but you don't want your competitor to come and scrape all your price data for example and it happens at

**[07:18]** extremely large scales and so people often many companies like e-commerce companies think have internal teams that try and detect it but it's it's an incredibly varied world of complexity of how those things happen and it's a very fast moving Target because I mean they're all computer systems but they all have people behind them and so things are people are responding to

**[07:49]** defense yeah changing their means of attack but yeah right no I just like you know as I was a bit of a lagered I guess in terms of being an a web publisher of any kind but and I think probably everyone well depending on the platform you're using but many people who start a blog or in my case the first thing I did on the web was started a Wiki it's it's my it's like a complete Revelation and mindblowing how you just get spam from day one

**[08:21]** exactly and at first you're like who are these people posting about Gucci handbags what a waste of time like who's got time for that and then you gradually realize oh no this is just software and right yeah and so and there's and people actually do end up clicking those links so if you can do it at large enough scale you can scam off the margins of people do that and so that you know it's annoying for people who have a Blog on the side but for businesses it's potentially cuts into their revenue for a variety of

**[08:52]** reasons I mean if nothing else there is a sense in which every request someone makes an HTTP request you click on a link it's a cost to the business right because they have to have a server so if you have 40 40% of your traffic is pointless maybe you could cut down your Hardware by 40% which it you know already starts to make sense so it's a big incentive for people and so this is a relatively new world of computer security to me I've been

**[09:22]** doing this for about a year and it's it's fascinating but I think we've already derailed off your announcement that you're trying to get to talking about how exciting my life is yes your life sounds very exciting and I'd like to know more about why it is how do you guys how do you guys do this how do I mean what's the overall gist of 40% of HTTP requests so we do it there are a number

**[09:54]** of levels to how we do it so there are aspect of it that I mean on occasion for certain things you can just like identify IP addresses or various things that you get from request and you can Blacklist certain things but so we try to move beyond that but certainly clients still need that kind of thing we use JavaScript to get various to execute code in people's browsers

**[10:25]** which that sounds malicious on itself but everyone who's running a browser is executing JavaScript but so there are various like somewhat heuristic tests that you can use with JavaScript to identify malicious users and then our clients get to tune how they use our product like to decide you know what level that they want to block at and then also how they respond to certain things so they get they can just outright block things or they could then show you a

**[10:56]** CAPTCHA if they think you're suspect or they can just monitor the traffic they think is malicious our team is our team's task is so there's this whole initial level of how our product works using kind of JavaScript and more kind of domain knowledge of how browsers work and why things might be malicious or for example some clients don't want anyone using like something like Selenium

**[11:30]** a system where it's like a scriptable browser basically and they can just block all of that so but our team then gets all the incoming request data that we have from our clients meaning we have a row in a database for every HTTP request coming on our client websites and we sort of see that as a more of an abstract data problem and here's this like somewhat messy data set can we identify patterns that

**[12:02]** are malicious and the challenge for us is that there's a gap of training data because often we don't really know what is actually behind things and a lot of companies that do like fraud related things you can sort of identify things that appear to be suspicious and then you can escalate that to do a fraud investigation and so over time you're like building up more certainty and we can do that to some level we have a team that helps with that but

**[12:34]** the nature of web request is it's like very ephemeral someone makes a request and then it they might never make a request again and you might know nothing about that system ever again or people can change the appearance of their you can manipulate almost everything that a web browser returns because I mean at some at some level HTTP is just like exchanging text documents and so you could go and change whatever you how

**[13:06]** you want to exchange that so we try and work around that for on a variety of ways and then devise like find various ways that we can identify patterns that we see as being problematic and then giving our clients and our support staff the ability to block based on those things yeah that's it's fascinating I mean it's you know that many companies back in the in the Bronze

**[13:38]** Age of the 90s did the thing where it was sort of brute forcey build this database as you say and manually pick and choose things but it's interesting to know that those databases now are being learned on I guess by some deep learning algorithms you guys yeah yeah yeah so I mean there's still like for email spam you can you can buy like basically lists of IP addresses that you should just block all email coming from those IP addresses and I

**[14:11]** mean the other thing people have done for many years is display CAPTCHAs and our product is essentially an alternative to CAPTCHAs and what we're trying to say is don't inconvenience your users by making them jump through some hoop but let's just do that automatically and we have a strong belief also that CAPTCHAs are actually really terrible and there's evidence behind that I mean Google has shown they can write programs to clear their own CAPTCHAs at

**[14:42]** like a 90 over a 99% success rate or something pretty good it's pretty good it makes be the you mentioned the difficulty of having good labels because you don't necessarily know what is malicious it strikes me that you could instead of blocking known bad IPS just use them see what they do on I guess you could divert them to some system that didn't matter

**[15:12]** essentially and use that behavior so do you try to learn from known yeah we do yeah so that I mean that's a big part of what we do and we're currently in discussions of doing even more of that where we're thinking about like can you can you take the risk of occasionally letting a malicious actor through to then like monitor their behavior and use that as more

**[15:44]** training data and more kind of experimental design sort of but the challenge is I mean a challenge is we have zero control over someone making repeat requests so for a given website the mode number of requests or probably even the median number of requests that someone make is one right so someone clicks on a link and they load your website and

**[16:14]** then you never see them again and then it has this enormous taale where some computer will make like 100,000 requests in a certain time area period or something but that becomes very hard if you want to think about you know designing you there's no basically no way to ensure that anyone that you want to look at is going to ever come back again right and so it's and you have

**[16:44]** no you have no knowledge of that whatsoever like you can't you have no idea what's happening behind that IP address as to what's going on as to whether or not someone will ever be seen again so even' been thinking you know of routing people into sample groups or something you're all almost immediately biasing the way you do that because you're looking at people who make multiple requests so we also want to make there are also

**[17:15]** malicious actors who only make one request and we want to block them but you can't monitor their behavior over time because it just happens once so it's very very complex in a lot of moving parts and after a year of working at this company I'm starting to get some sense of how hard the problem is and all my idealism of a year ago is having to be converted to reality of now yeah that really really feels like a feature of data science is

**[17:48]** is this sort of early promise of all the awesome tasks there are to try and then the realization gradually that things are just a total Nightmare and the day is a mess and problem really hard and this huge you know I really value my academic learning and I think the preparation is really helpful but when you're in school you get really deceived and maybe no one's fault but into

**[18:19]** thinking the way things are presented in the textbook are going to be how you actually apply them and ends up for so many reasons that not being the case I mean you know for us is a lack of training data and then the reality of deploying something like this at scale so when you're looking at thousands and thousands of data points coming you every second how do you how do you deploy a model on that isn't going to

**[18:50]** fall apart how do you validate these things over time and all this is right right and you already mentioned another kind of unique feature that you have to deal with that in geoscience we don't have to worry about because we're you know also concerned with anomaly detection sometimes on quite small samples and sometimes without a lot of label data but our targets aren't in a sort of evolutionary way or a Quantum

**[19:22]** way they don't respond to our efforts to detect them like your targets like there's an actual cat and mouse arms race going on that means you can't necessarily use data from three years ago y yeah absolutely what nightmare a very cool problem my little Zinger that I was saving for you guys is that I worked my first job out of grad school I worked at a government contractor and wrote I ended up I was

**[19:54]** hired as a data scientist and they had nothing for me to do and I ended up working on a environmental mine modeling software for the EPA for six months or so Zing developing the UI and doing horrific modeling of like so it's like surface mining in West Virginia

**[20:25]** so they you take all these core samples to measure the various whatever what whatever things are in rocks acidity and all this various stuff and then we tried to like interpolate and I knew nothing about any kind of Geo modeling and I'm horrified at the thought that someone might actually be using that software to make real life I hope that's not the case yeah we all are we're doing we're all doing the same thing they tell us where oh where should we drill for oil we just throw

**[20:55]** that dart at the map and that's it no but actually I feel like that rises an interesting point actually because I was chatting to someone yesterday about this how you know we're working with a guy at the moment who just graduated in astrophysics and he's helping us with a data science project that we're working on and he has really no domain knowledge at all in GE science right he doesn't really know what the problem is

**[21:26]** or anything about rocks or the D that he's handling and that's kind of a feature as well as a bug right because he can just look at the data as data he's unencumbered by this kind of the mishmash of caveats and yeah all that background but you know sometimes we'll get together and chat about the dator and he has his like oh right okay everything I've done is completely invalid because I didn't know

**[21:57]** about that physical kind of constraint on the system so I mean there's a lot to be said for having domain experts work with non-domain experts I think in data science because they got these different views absolutely that's something we deal with and kind of think about a lot in our company because our team is non-domain experts there are three of us and we have kind of varied engineering backgrounds and then we have another team that aren't are we call them

**[22:28]** analysts and they're not we don't call them data scientists but in many ways they are but they have like this deep domain knowledge of how browsers work and how internet protocols work and even how malicious actors behave on the internet and so we kind of try to figure out how those thing two things mesh together and we've made a lot of Headway and I do think yeah I think that's can be an extremely valuable tool even as long as you

**[22:59]** know you say unencumbered by all these various things but that you know you could also be unencumbered by nuances that people have learned about a certain thing over many years just looking at for example geodata you know you have all these you know thinking about your data having the geospatial correlations that someone who just looks at a raw data set that maybe isn't going to be obvious to them sure take that into account yeah totally yeah yeah so I

**[23:30]** guess then it just comes down to how many of those things are valid and how and are any of them because I think some of them are you know they're spurious there or their limitations that we that we see that really aren't maybe aren't there you know or I don't know it's an age-old discussion really in especially in geophysics about whether you to the extent to which you're prepared to sort of br group Force Insight from the data or should the

**[24:01]** Insight only come from known physical relationships right yeah that's a that's a very that translates directly into my own experience outside of geop physics so let's let me just give distill a little plug here and say so what kind of deliverables do you guys have is it all service based or is there an interface like for doing reporting or tuning parameters on your

**[24:31]** yeah so both so I mean largely it's a service so our client's web traffic gets routed either through their own Hardware that we install our platform on or through our like hosted system and we for those who know we basically act as like a reverse proxy kind of a load balancer so the internet requests that are made the DNS just gets routed

**[25:01]** us so people don't know making the request don't actually know that unless they're doing like a trace route or something try to detect that and then that there's also each client has a an online dashboard where they can do exactly tuning and monitoring and various things and our hope is you to make it as hands off as possible but U people do have various questions and various things thankfully I don't I don't interact with

**[25:31]** clients or do the support at that level or anything so I largely get to ignore that good good and how many how many Russian hackers do you have working at the company like I always feel like cyber you guys must hire actual malicious programmers yeah so that's funny this the team that I was just describing that has this domain knowledge we actually did a like an aqua hire of a team and they're they're based in

**[26:03]** Stockholm and but the they're not all they're all European they're not all Swedish but they really do so when they when we were looking into hiring or to buying this company one of their analysts basically so we some of our leadership went over to dude like due diligence and one of their analysts like sat down at a computer and showed how he could just like work around our whole

**[26:33]** system and they do various they're they're really amazing like they just they look at a computer system or any you know interface something and they just start to think like how could how could someone you know manipulate the vulnerabilities of the system which you know and some those of us who have en computers for a long time think always think about that on some level but they like think about this like 10x the way that I've ever been able to

**[27:04]** think about it you should have known me in my former life I want to change taxs a little bit here and ask you about something that Matt is an expert in and actively pushes at his audience on the internet which is openness of Pro s and data and specifically the aim to not only make things open but

**[27:36]** to make things accessible so on Tim's website he has a video and he has a blog post about making open projects mean something by making them beautiful basically and why don't you touch on that a little bit I mean why does it matter I mean if I put all my stuff up on the internet for free isn't that good enough yeah so that the context of that is I just gave this talk we had a

**[28:07]** pi data Carolina here I'm in RI North Carolina and we hosted this Pi data conference for the first time and the angle of my talk was largely trying to encourage people who are in kind of the data science realm that they should be more proac L sharing things and the emphasis of my talk was really for their own benefit not really for the benefit of having the knowledge out there but you know that was that's not the

**[28:38]** whole story but my own experience is like I tinkered on all kinds of interesting things for the last 15 years of my life and all through grad school like you know I was like many a curious grad student and so I would instead of working on my school workor you know pull down some data set and look at it or do these interesting side projects or you know write some Mathematica script to do some interesting computation and then that

**[29:11]** just it never went anywhere beyond that and my encouragement to people is you can do well for yourself by not being quite so humble about that and like make those things available to world but at the same time as you alluded to you can't just like go post a script online and a GitHub gist or something with zero context and zero instruction and zero exam like that no one's going to look at that right

**[29:43]** typically so what I was encouraging people to do and what I've tried to do in my own life is think about you know how to present yourself and how to make that more accessible to people and so selfishly you know hopefully that makes me an attractive candidate when someone is wanting to hire me and but you know I there's a clear double benefit there

**[30:14]** because you're making something available and other people are actually it's not just recruiters who are going to look at that and benefit but my entire life depends on software that often you know many things in the Python space started as someone's side project when they were in grad school or something like I mean NumPy and SciPy are all you know Travis Oliphant's kind of side project as an academic and I use IPython notebooks all the time and that was like Fernando Pérez

**[30:46]** doing that as a as a side project as a grad student and now has become something I'm using every day and so and the other angle of that is I think those who don't really have very formal training or experience in kind of the software world don't no one ever teaches you how to share things and how to make your code usable by other people because you know those of us who

**[31:17]** are who are learning to program in the classroom but not really in kind of a software development oriented thing you're learning from your professor and they have definitely no idea how to share code with people so all that to say I think everyone can win when we do this and I just I it fell through but I was recently asked by some Duke computer science

**[31:50]** students to come speak to them on the same topic because they you know here at Duke which is a leading Institution and has some world class computer science research going on there that the students there feel like they aren't really getting practical skills like how to how to share things and how to interact with people and it the internet's really just revolutionized not to be cliche but revolutionize the way that we can share code and I guess in summary I think you know it's

**[32:21]** worth doing well and worth Thinking Beyond just the code but thinking about kind of self-marketing a little bit yeah I mean I think that's really important work and that really resonates with me this what you said that no one teaches you how to share things so I absolutely see that in the geosciences as well where we badly need I mean you know could argue that there's there's so many people sharing awesome stuff in Tech that I feel like you know I already can't keep

**[32:52]** up in geoscience there's a real dir of kind of both you know openly available and sort of discoverable and sort of documented stuff and I think you know the tools are one thing and things like GitHub are you know just incredible powerful tools but there's also a thing there's something about the cultural side and

**[33:22]** getting over I guess getting over that humility that you're talking about there a lot of people I talk to about Ving or even putting their stuff on GitHub which to you and I kind of feels like just a thing that you do any I mean I couldn't I couldn't keep track of my own stuff if I wasn't using these tools right I mean I couldn't keep track of my own it's as much for me as anyone but they sort of say oh no one's going to be interested in my stuff or they're even afraid like just downright worried

**[33:53]** about being judged or you know being hated on or whatever it is right like what would you say to people in that sort of situation who feel like oh I don't want to put my stuff out there yeah well you know so I had a I had a tweet about this a year or two ago that the idea basically being that we say this like oh no one's going to be interested in that well at the same time many of us spend half our days

**[34:23]** Googling to find people who talked about some really obscure thing and wanting to have like some concise and clear explanation of this very obscure thing and then like in the same sentence almost we're saying like oh but no one's gonna be interested in my like really obscure thing one of my most-read blog posts is I was working with PySpark a few years ago and there's this aggregateByKey function and I

**[34:53]** thought the documentation was unclear so I just like sat down one morning I was like okay I'm going to figure out an example of really how this thing works just because it's just a little bit convoluted and so I wrote up this blog post just a short example of how PySpark aggregateByKey works and it's my like second or third most I think third most popular blog post right and yeah so it just you know I think

**[35:24]** at some level it's just getting people over the absurdity of saying well there are seven billion people in the world and there are at least like five other people who are probably interested in this thing that you're interested in or have this problem that year and so you know if nothing else do them the courtesy of not making them go through the same frustration you went to figure something out or something like that not you know so that there's there's both the self-promotion but there's the Goodwill aspect I just

**[35:54]** gave a presentation at our local data science Meetup two nights ago on late deay allocation which is basian model for text analysis and the whole motivation for my presentation I was telling the organizer of the group like the whole motivation is I found the ratees out there on this topic so painful that in some weird way like that gives

**[36:26]** me the ire to like let other people have less pain like I maybe some people like have that experience and then they want to like oh you have to be annoyed too because I was annoyed but like I guess I just think like it doesn't have to be this way like it doesn't have to be as confusing as academic literature makes it or something like that yeah right yeah half the things I write I think I'm really writing to myself in the past like I'm I wish I'd read this yeah and then you know we you

**[36:56]** people see on Twitter all the time people like stumble on their own answers on Stack Overflow they're confused about something and they found that they had answered it three years ago I just saw someone had was like started to respond in a comment to something on sa overflow and realized he was responding to himself from like you're an idiot yeah okay so you're either WR yourself in the past or you're writing to yourself in the future yeah and you know I don't want to minimize the it does take to do

**[37:27]** this kind of thing right and there are lots of things I pass over that I should be documenting or something but I you know I want people to know that it really is valuable it's valuable for other people it's gonna be valuable for themselves and at the same time in this presentation I gave at Pi also trying to give people a little bit of direction as to how to do this because when I was a grad student six years ago I just you

**[37:59]** know GitHub is kind of second nature to me now but at the time I was so confused as like what's the difference between get and GitHub and what's the what's the relationship between my repositories locally and what's there and you know these things and I just didn't know what to do and I think that actually is for grad students oftentimes they just there's just sincere lack of knowledge and they're you know trying to do their own things in school and learn this stuff at the same time but I think it's worth it um

**[38:29]** and another important aspect of this is these same kind of principles end up being valuable as you work in a company too right so even if you're not sharing things publicly you know it's it's kind of a joke to say oh I'm just going to whip up this script real quick and it doesn't matter how I write it because no one's going to ever see it except for me like that's like famous last words like as soon as you say that it's going to be something the company depends on forever

**[38:59]** and so thinking about you know how you could then document things internally and present things well internally is such a important thing and that's something my team thinks about a lot yeah amongst our own team and then amongst our own company and these days the tools that you use for that are pretty much the same I mean it's GitHub right or all these similar kinds of tools is the same you're in the broader space so the there's a lot of translation between

**[39:29]** those things yeah right no I think that kind of writing to your past self or future self it sort of extends in a way to a lot of a lot of stuff that we do like we do a lot of work with the government and I'm constantly Railing at them to get better at open data and managing things like their code bases not necessarily for anyone else but just for themselves like just you know just for your

**[40:02]** own I mean like you say anything else is a waste of effort it's a waste of human sort of Ingenuity and time to solve these problems over and over again but organizations especially like individuals maybe have some level of Tolerance but organizations have this Skyhigh level of tolerance for that kind of just erosive loss of capacity you know that kind of just creeping

**[40:33]** inefficiencies that they'll just tolerate for years and years and years and if you added it up it's probably the same as that 40% of militia web traffic it's there's a real cost to it yeah but it's it's sort of invisible or it's like tiny pin Pricks you know it's like annoying but so we need we need a class Tim we need a class man like a best practices in open sharing something totally yeah do you teach I remember reading something on your website or something like that about you used to

**[41:04]** teach math classes I think yeah you're teaching anything these days I'm not but I taught calculus through grad school and I really actually I really love teaching and I try to give talks on occasion because I enjoy yeah I just really enjoy it and I think it's a valuable thing I'm finding it increasingly hard to do a whole lot of technical things on

**[41:36]** top of my job just because I want to spend time with my wife and be outside and so I'm less and less motivated at this point to really do a lot of things but in the future I could imagine if had the flexibility doing more instruction on these kind of topics I would love even to you know I'm I went to NC State which is here in Raleigh and I would love even to the Future to have an adjunct position to tell computer science

**[42:07]** students things I wish I had known 20 years ago that kind of thing you know because you know this is a whole another issue but there is a real lack of your professors are not the ones for the most part to teach you these kind of things they just you know it's Chang a little bit but for the most part your professors don't know these things and you know I was I was emailing C++ files and Python

**[42:37]** files back and forth to my adviser in grad school like that's the only way he wanted to well cool we look forward to the future Tim Hopper data sciencey open sharing professional development course sounds great I look forward to that too I might benefit hey have you guys heard of turmix it is a Linux emulator for Android my goodness it's lovely I

**[43:11]** just started playing with this thing one of the oh I don't know if we told you this Tim but we've got and this is another good Shameless plug we've got a Forum slack instance that's sort of co- syndicated with this podcast called the software underground where we have a bunch of software people and Geo people and people of various scientific disciplines talking about whatever random things they're interested in one of the people on there was discussing this termix app

**[43:44]** and I started playing with it and I can't I can't get enough it's amazing you can just I mean you can use your phone and log in to you know just SSH into your Amazon web service instances and do work like actual work from your cell phone it is lovely nothing like the ability to keep working everywhere you go well also nothing like the ability to like check something when you don't have your laptop on hand I mean yeah I'm I am a

**[44:16]** horrible case of like work on the bus ride to X or whatever you know all the time but it just makes it accessible if you don't have to take your laptop everywhere it's kind of nice there's there's a really good so I'm on iPhone and I think it's called prompt it's a terminal emulator on the iPhone that I've used similarly in the past SSH into digital ocean yeah for

**[44:47]** me it's mostly been more of a novelty that oh this is possible well I'm excited about it and I'm hoping I don't I guess waste too many hours of my day screwing around with things for my cell phone but anyway I wanna let me just wrap up with a quick question here a nice easy question to answer are humans gonna kill ourselves before the AI take over

**[45:17]** I certainly live in the skeptical Camp of AI Doomsday although the Tesla announcing self-driving cars yesterday maybe it's it's coming but so I guess that would make the answer yes because that puts out the AI takeover quite in the future and humans aren't doing so well so Matt no I think it'll be the AI you

**[45:51]** think so yeah okay skyn not skyn good well I'm glad that we solve that it was a much easier than I thought yeah no problem no problem Tim thanks for joining us on the show man I very much appreciate you reaching out we will be back not next week but the week after that with what Matt what episode huh uhuh huh what is it like 25 or something like that I

**[46:25]** applaud you celebrating 25 episodes I just saw my calendar that in about a year I'm going to be celebrating a billion seconds of life and I'm planning to throw myself a party so nice see that is getting with the program Matt Tim you want a job Matt you're fired all right thanks again Tim Hopper coming joining us on episode 24 you're welcome thank you cheers everybody next week bye
