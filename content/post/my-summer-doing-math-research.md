---
title: My summer doing math (?) research
date: 2024-09-19T13:20:00.000Z
description: A reflection on the summer I finally got to do math research but
  spent the whole time writing C
categories: Article
math: true
image: /images/graphtheory.jpg
---
I started college as a physics major, but I switched to computer science my sophomore year when I realized I didn't want to take more lab classes. After a year as a CS major, I realized I loved the theory classes but didn't care as much about the practical and programming portions of the curriculum. Going into my junior year, I switched—for the last time—to major in math.

During the winter of my junior year, I applied to a bunch of math [Research Experience for Undergraduates](https://new.nsf.gov/funding/opportunities/reu-research-experiences-undergraduates) programs at schools around the country. I was thrilled to be accepted to the program at Rochester Institute of Technology organized by [Darren Narayan](https://www.rit.edu/science/directory/dansma-darren-narayan) for the summer of 2007.

I headed to Rochester starry eyed about spending the summer doing math research. On my first day, I found out I'd be working with the inimitable mathematician [Stanisław P. Radziszowski](https://en.wikipedia.org/wiki/Stanis%C5%82aw_Radziszowski) on computational combinatorics with [another student researcher](https://www.linkedin.com/in/evanheidtmann/), Evan Heidtmann. The first question Dr. Radziszowski had for us was "How are your programming skills?" This was not what I expected--or wanted--to hear at a math research program.

We spent the summer investigating the [Ramsey number](https://en.wikipedia.org/wiki/Ramsey%27s_theorem) $R_4(C_4)$. This is the smallest number $n$ such that a [complete graph](https://en.wikipedia.org/wiki/Complete_graph) with $n$ vertices where the edges are colored by four colors is _guaranteed_ to have a monochromatic cycle with 4 vertices.

At the time, the number was known to be either 18 or 19. Due to combinatorial explosion, it's not possible to enumerate every graph 4-coloring for graphs of this size. A graph with 18 vertices has 153 edges which could be colored in $4^{153}$ ways (ignoring isomorphisms). This is a very, very big number.

Since the number was one of two options, one way to prove it had to be 19 would be to find a complete graph with 18 vertices where the edges are colored by four colors while not containing a 4-cycle subgraph in one color. Evan and I spent the summer hunting for this mythical graph coloring by writing C code to generate and check graphs.

Before showing up in Rochester, I had no experience writing C code. Fortunately, my brilliant and patient research partner Evan did, and he quickly got me up to speed enough to manipulate and generate graphs using [nauty](https://users.cecs.anu.edu.au/bdm/nauty/).

I had also never used version control, but Evan was running a version control (I don't recall which one) platform on his home server, so we were able to easily version and collaborate on our code.

We also had access to fifty Unix machines in the RIT computing lab, so this summer introduced me to the Unix command line, shell scripting, and distributed computing. I wrote bash scripts that would send our processing jobs out to these machines and aggregate results back to a host node.

Well, we failed to solve our problem. It turns out the solution was actually [published by Chinese mathematicians](https://utilitasmathematica.com/index.php/Index/article/view/481) while we were working on it. $R_4(C_4)=18$, so the graph we looked for didn't even exist.

Nonetheless, that experience ended up being one of the most important of my higher education. I learned some of the most fundamental skills of my career (version control, working in terminal, writing fast code, and persevering through computer challenges), and I learned to enjoy writing code.

I didn't write much code between 2007 and starting my operations research master's degree research in 2011, but when I started again, the skills and tenacity I developed at that REU set me up for success in grad school and joining industry as a data scientist in 2012. I wouldn't have picked that research project had I been given a choice; I'm so glad I wasn't asked.
