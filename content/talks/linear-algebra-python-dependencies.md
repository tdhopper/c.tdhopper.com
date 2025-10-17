---
title: "Five semesters of linear algebra and all I do is solve Python dependency problems"
date: 2022-12-15
description: "A humorous take on the reality of data science work versus academic preparation."
image: images/thinkido.png
youtube: "6flt_3yMNb0"
---

{{< youtube 6flt_3yMNb0 >}}

This is a reflection I've carried around for years: the evolution of my career interests and how they relate (or don't relate) to my core passion, which has always been math. It's an overly introspective look at how my love for mathematics led me toward data science and machine learning, only to find myself 10 years later doing basically no pure math in my job.

If you're like me, and I know there are others out there, this one's for you.

### The Gap Between Expectation and Reality

When I was a grad student studying machine learning 10 or 12 years ago, I thought my time would be spent choosing kernels for Support Vector Machines (SVMs). I even made a plot in Mathematica for a paper I wrote on SVMs during that time. Today, I can confidently say I have *never* needed to choose an SVM kernel.

Of course, what I *want* people on Twitter to think I do is work on deep learning and large language models. What I actually do as a Staff Software Engineer at Varo Bank is often searching Stack Overflow for how to solve python dependency issues, like installing TensorFlow on an M1 Mac.

My biggest contributions, in fact, are often figuring out how to get pip to work the way we need it to.

I help build and maintain our feature platform for the data science team at Varo Bank, which involves making machine learning features available for model training, batch inference, and real-time inference. This system design work is great, but a large part of my career has been about trying to master the Python language and its ecosystem and using that knowledge to assist my teams. That means a lot of debugging people's pip issues, Googling for exceptions, and encouraging better software engineering practices. This work is satisfying, but it's certainly not where I expected to end up.

### Following the Math

I really do love math. I loved linear algebra from the get-go; it came pretty naturally to me. I’ve always loved algorithms, algorithmic thinking, and mathematical models. This goes back a long way. When I was eight years old, my mom wrote in a Christmas letter that "Math is entertainment for him".

My passion for math led me to study it as an undergrad at Grove City College. I initially started as a Physics major, dreaming of becoming a professor, but quickly switched to Computer Science when I realized I enjoyed the math side of physics more than the lab work.

However, even as a computer science student, I realized I preferred the abstract, theoretical side of computation (like theory of computation class) over pure programming. Programming felt like a tool, not the main interest. By the end of my sophomore year, I realized math was truly for me and changed my major. I graduated in 2008 with highest honors in math, having taken my first two semesters of linear algebra plus numerical linear algebra.

Around 2006, while an undergrad, I found a [compelling article in *Business Week*](https://www.bloomberg.com/news/articles/2006-01-22/math-will-rock-your-world). I remember this quote from James R. Schatz, chief of mathematical research group at the NSA: "There has never been a better time to be a mathematician". The article went on to describe what would later be called data science, discussing how companies needed skilled mathematicians and computer scientists to sort through their "swelling oceans of data". To me, that sounded perfect: a job using the math I loved.

### The Academic Detours and the Realization

My academic path continued. I entered the University of Virginia as a PhD student in the history of mathematics (a third semester of linear algebra was included in that program). But I quickly understood that the program was setting me up only for an increasingly unattractive career in Academia.

More critically, I started to realize that my math skills alone probably weren't going to be valuable to anybody outside of instruction. I was "somewhat skillless" despite having a math degree and being good at math, as almost no one was hiring for that directly.

I found Operations Research (OR) next, which seemed like a perfect opportunity to merge math, real-world problems, and computation. I became a PhD student at North Carolina State University. This was 2010–2012, the era when data science was blowing up on Twitter, offering a clear career path using math and computation to solve real problems.

During grad school, I interned at Kiva Systems (now Amazon Robotics) in the algorithms research group. I thought I had hit "the glory land" where I could focus on pure algorithms and optimization problems. However, I was deeply discouraged to find my boss—a PhD who studied vehicle routing problems—spending a lot of his time on the "lowly work of getting Java code ready for production". Right then, I committed myself: I would never fall down the route of just becoming a software developer; I was going to do math in my career.

### The Shift to ML Engineering (The Dirty Work)

After leaving grad school, I took a "perfect job" in 2015 working on a DARPA project implementing inference for Bayesian non-parametric models. It involved deriving equations, learning interesting statistics and math, and reading complex papers. But after two or three years, the project died suddenly.

Back on the job market, I had a realization: there isn't an enormous market for algorithm implementers who get to do only the pure work. A great implementation, like those in scikit-learn, PyTorch, or even decades-old Fortran implementations, can be used over and over again.

I shifted back toward traditional data science roles, deciding if I couldn't be responsible for the underlying algorithms, I could focus on the math modeling side. But in many companies, especially smaller ones where I worked, the engineering barriers to using data science models were often momentous. The math modeling became one of the least important parts because of challenges like political tensions, organizational issues, and massive engineering deficits to getting anything into production.

I got so frustrated with the engineering deficits that I decided to solve those problems first. I became what we now call a Machine Learning Engineer. My goal was to be the change I wanted to see: a data scientist who didn't have to fight with Python dependency issues, who could instead spend time thinking about deep learning architectures or SVM kernels. I decided to do the engineering, the "Dirty Work," to enable data scientists to focus on what I thought was the interesting work.

### Finding Joy in Logic and Software

Here’s the unexpected twist: I started to learn that there is something quite enjoyable about writing great software and getting it ready for production. As a software developer, I still get to originate ideas in my head and write them out with my fingertips. Unlike pure math work, I get to see that work scale—to millions of people, providing value for a company and its customers. It's satisfying to do something useful.

I don't regret studying math at all. I followed my passions, even though I didn't really have a plan. But reflecting on the 2006 quote that there was "never been a better time to be a mathematician," I think that was misleading.

There has never been a better time to be competent and good at math, but being a mathematician on its own is often a poor career path. Today, I tell most people that math skills without programming skills in 2022 are going to be all but worthless.

While I still cherish the ideas from the three linear algebra texts I studied over the years, I rarely reference them in my day-to-day work. However, I've learned that software provides many of the same joys we find in mathematics:

*   Problem solving.
*   Abstractions.
*   Worlds generated just by logic.
*   Reproducibility.
*   Endless areas of study.

For me, the beauty of software was often hidden behind the frustrations of things like pip resolution and impossible exceptions. But I’ve learned to uncover the joy of creating things with software, just as in math you can create things with ideas.

My career has been a crazy, unpredictable road, and I suspect it will continue to be that way. I’ve spent far less time thinking about Support Vector Machine kernels and far more time solving Python dependency issues, but it’s turned out all right.
