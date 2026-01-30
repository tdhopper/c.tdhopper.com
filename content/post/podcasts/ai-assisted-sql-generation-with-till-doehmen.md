---
title: AI-Assisted SQL Generation with Till Döhmen
date: 2026-01-26T15:05:00.000-05:00
draft: true
description: "Tim speaks with Till Döhmen, AI Lead at MotherDuck, about AI agents and SQL generation, from text-to-SQL to agentic workflows, query optimization, and whether letting AI write our queries changes how we understand our data."
categories:
  - Podcast
image: /images/podcast.png
---
## Listen
<iframe src="[SPOTIFY_EMBED_PLACEHOLDER]" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

## Links
- [Till's LinkedIn](https://www.linkedin.com/in/tdoehmen/)
- [Till's Website](https://tdoehmen.github.io/)
- [MotherDuck](https://motherduck.com/)
- [DuckDB](https://duckdb.org/)
- [Hopsworks](https://www.hopsworks.ai/)
- [Till on Practical AI Podcast](https://changelog.com/practicalai/292)
- [Spider Text-to-SQL Benchmark](https://yale-lily.github.io/spider)
- [mviz - Observable Dashboard Skill by Jacob Matson](https://github.com/matsonj/mviz)

## Subscribe
* [RSS Feed](https://tdhopper.com/podcast/feed)
* [Apple Podcasts](https://podcasts.apple.com/us/podcast/into-the-hopper/id1499693201)
* [Spotify](https://open.spotify.com/show/63NrgKMVb0VTwkklGboIjy)
* [Overcast](https://overcast.fm/itunes1499693201/into-the-hopper)

## Summary

In this episode of *Into the Hopper*, I sit down with Till Döhmen, AI Lead at MotherDuck, to explore the evolving landscape of AI-assisted SQL generation. Till brings a unique perspective from his PhD research in databases and his work building AI features at MotherDuck, the serverless data warehouse built on DuckDB.

We discuss how text-to-SQL has matured from academic benchmarks to practical tools, the importance of documentation and schema context for agents, and the emerging role of MCP servers and skills in customizing agent behavior. Till shares insights on building trust in agent-generated queries, why thinking about what a new hire would need to know helps you build better AI workflows, and how agents are reshaping the analyst's role from SQL writing to question refinement.

## Transcript

**Tim:** Welcome to Into the Hopper podcast. Today I'm sitting down with Till Döhmen, the AI Lead at MotherDuck. With a background spanning PhD research in databases to ML ops engineering at Hopsworks, Till sits at the intersection of database theory and modern AI. Welcome, Till.

**Till:** Thanks for having me.

**Tim:** We're going to dive into AI-assisted SQL generation, which is something I've explored a little bit but don't know a lot about. We'll move beyond the simple text-to-query prompts to discuss agentic workflows, optimization, and whether letting AI write our queries changes how we understand our data.

**Till:** Great.

---

### About MotherDuck

**Tim:** First of all, do you want to tell us about MotherDuck?

**Till:** Yeah, for sure. I joined MotherDuck two and a half years ago, after ChatGPT came out. I joined as the AI guy. Before that I was working at Hopsworks, mostly working on classical machine learning ops. Hopsworks is a feature store platform.

Coming from my PhD research, I was super interested in how we can automate data engineering for data science pipelines, and that felt like a great place to work on these types of problems. Hopsworks was doing feature processing and data engineering workloads on that platform. They were using Spark, and there were small and medium-sized datasets that felt a little bit painful because of startup times and so on. There was a demo we were doing for customers—I think it took seven minutes or so to run end to end.

My biggest project there ended up being migrating these workflows to a second path where we could do the data engineering with DuckDB. That got me even more interested in working more on DuckDB.

Research-wise, I was looking into foreign key detection—how can we identify which columns in tables have foreign key references in the database? LLMs turned out to be really useful for that. The second step was realizing that LLMs are actually really good at translating text to SQL. Surprisingly good at that time, though still far away from being super useful in practice. But that's how my journey at MotherDuck started.

MotherDuck is a data warehouse for analytics based on DuckDB. We run DuckDB instances in the cloud, and users use those instances to process their queries. It's integrated pretty nicely with the local DuckDB client. People typically use DuckDB or Polars to process data locally very efficiently—you can process tens or even hundreds of gigabytes on your local machine.

When the dataset gets really big, or when you're processing data stored in the cloud—say you want to analyze a hundred gigabytes or a terabyte of partitioned data, or Iceberg tables—the processing power of the local machine isn't optimal anymore. We provide a very simple way to connect your local DuckDB client to the instances we host and expand the processing capabilities seamlessly. You can keep writing the same queries, but the processing happens on the server side when needed.

The other benefits are data sharing. DuckDB is usually single-player mode—you have a local database file or just data in memory. With MotherDuck, you can work more within teams. You can share data between users, have a shared workspace. You also have a web UI where you can query DuckDB—in that case, DuckDB runs in the browser with WebAssembly.

That's also pretty interesting from a technology standpoint because you can do a lot of interesting things. Potentially you can save the network overhead—you don't have to go to the server for everything. It's a web application, but still you have an entire database running in your browser that can do query parsing and binding. That also plays a role in the AI features we have at MotherDuck.

---

### Building AI Features at MotherDuck

**Till:** I was the AI guy, so I did everything that involved AI. In the beginning I worked on text-to-SQL features. But they weren't at the point yet where they were useful enough to position prominently—this was end of 2023. We couldn't confidently put that in the primary path and say, "Hey, when you come to the UI, you don't have to write SQL anymore. Just give us your question and we'll generate the SQL for you."

It was more framed as a way to help SQL analysts be a little more efficient. And then it turns out, when you focus on that, there are other problems worth solving beyond text-to-SQL.

For example, fixing queries. That's very common—you type a query, mix up two letters, and get an error message. DuckDB actually has pretty useful error messages. But still, it's so obvious when the database says, "This table does not exist. Did you mean this other table?" And 99.9% of the time, yes, that's exactly what I meant. Can you please just use it?

That's basically what this feature we call "Fix It" does. It kicks in and asks a language model to do the fix for the user. We added other things like editing queries—if you're not sure how a function signature looks, you can mark that part of the query and describe in natural language what kind of change you want to apply. Those things have been very useful.

---

### The History of Text-to-SQL

**Tim:** Do you know much about the world pre-2023 of automation in SQL generation?

**Till:** I don't think I've been around long enough in the data world to really go back to the beginnings. When I hear Jordan talk about this, he refers to things that happened probably when I was still a student—10, 12, 15 years ago. And the history goes back even further.

**Tim:** Probably to the seventies.

**Till:** I think it's even part of the philosophy of SQL when you read the very first papers. They wanted to design it to be close to natural language. So this vision has always been there.

But when I started looking into it, there was a ton of research around text-to-SQL. Not so many products, but a lot of papers. It was the time of fine-tuning—everyone was fine-tuning small models for text-to-SQL. Before large language models, it was BERT-style models or very small transformers.

There were these benchmarks—Spider and others—that's what people were typically competing on. When you look at the benchmarks, they're very simple: small databases with three to five tables, very well-known columns. They're not really a reflection of enterprise database reality. So there was always this limitation because the results didn't translate to the real world.

---

### The State of Text-to-SQL Today

**Tim:** I'm interested in what's possible today from two angles. First, if I'm an analyst with a business problem I think I can describe, and I don't want to write a bunch of CTEs and conditionals—how far can I get using natural language to generate queries? And how does that differ from other agentic software development?

**Till:** I remember about four years ago, there was a Hacker News discussion about what's exciting about LLMs. Some people talked about text-to-SQL, others about code generation. Code generation felt much more unattainable at that time. SQL has a relatively simple grammar compared to a general-purpose programming language.

When I think back to that time and where we are now—where people routinely use AI tools for coding—that has changed massively. That makes me say more comfortably that language models are actually really good at doing these types of things in SQL.

I use LLMs as a coding assistant. I so often use them to debug user queries. When a customer has some issue with a query, I have conceptual ideas in my mind for how to optimize it, but these might be huge queries. Especially for experimentation—could this approach be useful? Could the other one? I just let them do it more efficiently than I could ever do manually.

But it's in a scenario where I assume the user has some degree of SQL knowledge, and maybe is also opinionated about how the SQL should be written. So I can see some friction, especially when models are used out of the box without additional context or prompting. Which dialect should they even write? DuckDB is not that prevalent in the pre-training data. There are things in the DuckDB documentation that models out of the box aren't aware of.

---

### MCP Servers and Documentation

**Tim:** Say I'm a Postgres developer wanting to do analytics. What's the best toolset out there? Can I just tell Claude Code I have access to psql, say "go learn my schemas," and then give it my prompt? Or are there more specific agents doing this better?

**Till:** There are multiple aspects to the answer. The question understanding part and translating that to a query that semantically makes sense—you give the LLM access to the schemas so it knows the tables, the column names. It can potentially also explore the data a bit, because data content is quite important for filters and so on. If the model doesn't have access to data content, it's pretty certain it'll hallucinate filter parameters.

Providing that access nowadays is super simple. You give an agent the right tools. There's a Postgres MCP server. I would probably just take Cursor or Claude Code or whatever tool I like, plug in a Postgres MCP server, and start kicking the tires. I'd expect that to work fairly reliably.

I recently wrote a research paper about this—it's not published yet. I was looking at the DuckDB and Postgres database documentation, every single function, every single statement, and probing language models for their knowledge about these things.

It was interesting that even Postgres functions that have been around for quite some time—the frontier models have very little knowledge about some function names, parameters, and how to use them. It's a small subset of functionality, but I could imagine as a database admin or data engineer deep into optimizing certain aspects of workloads, I care about those features. At that point you actually need to provide the human-written documentation as context to the LLM.

Some MCP servers do that. It's basically a RAG pipeline that chunks and indexes the documentation and makes it retrievable through natural language questions. If that's exposed in the MCP server, the agent can call an "ask docs question" tool when it's in doubt about functionality. It passes a natural language question—"How does this feature work?"—and gets an answer grounded in the documentation.

**Tim:** So your MCP can talk to the documentation as well as your own data?

**Till:** Exactly. We're actually using the exact same documentation chatbot for the MCP that we use for our human-facing documentation.

The point of the paper I was writing is that these things should actually be built into the database to some degree. There are functions in DuckDB—you can do `SELECT * FROM duckdb_functions()` and get a table of all functions with descriptions. But the description field is only populated for half the functions. Database developers assume humans can always go to the documentation website.

It's similar for Postgres—only 30-40% of functions have descriptions, and the textual descriptions are often uninformative. I believe if database developers invested a little more into built-in documentation, that problem could easily go away, because agents are quite good at searching for information that way.

---

### The Challenge of Undocumented Data

**Tim:** What about data documentation? At my previous job at a bank, we had a large data warehouse with data dumps from production tables into AWS data lake storage. It was weakly documented in terms of what the tables meant. Even analysts were looking at things and trying to infer from the data what columns they were looking at. Sometimes even wondering if a column is a key for another table with different names. Are agents getting good at discovering those kinds of things? Or is that just a way to shoot yourself in the foot by letting the agent hallucinate what it's seeing?

**Till:** If you give the agent infinite time to do data exploration—you prompt it saying "here's my question, please write the SQL to answer it, but before you start, explore the entire database, look at every table, every column, think about what the columns are about, make a plan to explore the database extensively, write a report, and only then start writing the SQL"—I think that could work quite effectively.

But you have to think about it this way: what would happen if you gave a proficient analyst who has never seen your database access to your data warehouse and asked that person the same question? How much of a hard time would this person have? What are the things this person cannot know or cannot infer from the data? The same limitations apply to the LLM.

If there are things that are really not documented, non-obvious, or not inferable from how the data looks, it definitely needs to be provided in context in some shape or form. But this exploration takes an insane amount of time and it's expensive. You have to run queries and you're wasting tokens. You don't want to do this every single time.

Another thing is query history, if you have access to that—the queries people have run in the past, sometimes even comments in those queries. That's also very good for the agent to dig into.

I think this exploration of schema and query history and collection of relevant context shouldn't happen on the user path where the user asks a question. It should be considered part of data engineering work or data maintenance work.

If I create a new table as a data engineer, I might usually have written into a data catalog or some internal documentation page what the data is about. Maybe I've sent a Slack message or added info to a Linear ticket. But nowadays, it's probably also part of the job to document this in a form that agents can consume easily.

I wish I could tell you there's an established standard for how to do this. Different companies try different things, and we're one of those companies with a particular approach. DuckDB and other databases have table and column comments in the metadata catalog. You can add natural language comments. It's a bit underused, but we recommend people start with using those to add context.

There's a gap in our product where I think there's a real need to capture knowledge at a database level and organization level. Our MCP server could surface this information to the agent. It could be as simple as a markdown document.

Other companies go more toward the semantic layer direction—a much more structured format to represent semantic information about your data. Which columns and tables are related—this goes back to foreign key detection.

My experience specifically with foreign keys is that LLMs are really good out of the box at finding them. But if the schema is very complex, or you have multiple possible tables—staging or landing tables, different transformation layers side by side—you don't want the join path to use unclean data.

---

### Building Trust in Agent-Generated SQL

**Tim:** I tweeted three years ago when ChatGPT was fresh that World War III was going to be started by AI-generated SQL. My fear is that this potentially makes it seem too easy. It's somewhat easy to get syntactically correct SQL or something that looks like SQL, and then with an agent, something that runs.

Two questions. One: what are good practices to build confidence that agent-generated SQL is correct? As anyone who's spent time with SQL knows, that's also a challenge with human-generated SQL—testing SQL is a hard problem.

Two: do you have a concern that by not writing our SQL, we're not thinking about our data enough?

**Till:** I would say we're thinking about it in different ways now.

**Tim:** So what practices can help us know that agent-generated queries are correct?

**Till:** It really depends on the type of question you're asking and what the stakes are. If I'm doing exploratory data analysis, just interested in digging into things, I always have the option to question certain results. If the agent gives me an answer that feels off, I have an intuition for the data. Building that intuition is a starting point.

But an agent can be useful for that as well. If I would do it manually, I'd run a SELECT star on the table, look at summary statistics, drill down into dimensions. The agent can do the same thing for me. The SQL it generates is typically not that complex. If I want to build trust, I could double-check the SQL. Also, there's no reason for the agent to be intentionally deceiving. On average, the things the agent does are going in the right direction.

Maybe it's off on a few things because it's making implicit assumptions that are wrong. Part of the issue could be the prompting or not having provided enough context. As I said earlier, it's important to think: how would someone approach this who has never seen that data before? If I have a new hire onboarding today and ask them to calculate this metric, could that person succeed? What would be the typical mistakes? What can I do to help that person or the agent succeed?

This exploration helps build intuition about the data. Either way, whether SQL is hand-written or agent-written. If I have doubt, I can ask the model to explain it.

I believe in this Socratic questioning approach. If I just keep questioning and asking, and there are no contradictions in the evidence, I can build up certainty and trust. I don't need to know the answers, but by double-checking and poking, I can find out whether what the agent said is correct.

**Tim:** An interesting thing with SQL is you can do the inverse. Generate the SQL and then in a different session with new context, say "given this SQL, tell me what it does" and see if that matches what you think.

**Till:** Yeah.

**Tim:** That's a neat feature of Cursor now—you can run multiple models and have multiple responses.

**Till:** Oh, I didn't know that.

**Tim:** You click which models you want, each model can run multiple times, and you review the outputs. If reviews are coming in similar from OpenAI, Google, and Anthropic, I feel pretty confident.

**Till:** One of the things I really like about Claude Code is how self-critical it can be at times. It almost feels like it stops and thinks for a second whether the direction it's going is good or not. This is not a quality of the base model itself—if I use Opus in Claude Code versus Cursor versus the Claude web app, it behaves very differently. A lot of the behavior that makes these agents good comes down to the implementation of the agent on top of the model.

It's the same with handwriting you mentioned, or writing itself. It's a way to train the mind, keep the mind sharp, think more clearly about what I'm writing. I think it's true in some sense that at this level of abstraction, you'll probably start to lose a little bit of intuition. But it frees up mental space for other things.

For analysts—I'm not an analyst myself, I have to think about it from the outside—I could imagine this really frees up time. If SQL is not the main part of my work anymore... I've written a lot of SQL in my life and never gotten really good at it. I'm always dreading having to write a window function. I'd rather try to do the analysis in a slightly different way so I don't have to write that stupid window function.

With the agent, I can just let it do that. All the ideas I have of things that could be interesting, I can play through all of them with very little effort. Once I'm through that, I have mental capacity left to think about what other data sources could be interesting to integrate—something I wouldn't have had time for if I'd spent all my time just figuring out the SQL syntax.

It has the potential to reshape the scope of the analyst's work. At the same time, I could start thinking more about the actual business question.

We were talking to a company working on a text-to-SQL agent. One interesting story: their customers were using the agent to help business users refine their questions. The agent was basically a thinking partner. The user would say, "I kind of want to look into that, but I don't even know if we have data for that." The agent would go look. At the end, the output was a very refined question—and then they sent it to the human analyst to write the SQL. But this whole part of refining the question was also taking up a lot of time.

**Tim:** I've found in Claude Code you can use the Ask User Question tool to get it to help me think through what problem I'm trying to solve. It surfaces things I know I should be thinking about but don't always think about. That's a very helpful way to work.

**Till:** Indeed.

---

### Skills and Agent Customization

**Tim:** Let's talk about skills—this idea Anthropic came up with and is now making available to others. What are agent skills providing in this realm? You and I talked a little about being able to encode business-specific things.

**Till:** First of all, I think skills are—just like MCP itself and Claude Code and Sonnet—I have the feeling Anthropic really understands their users well. I really like skills because they fill this gap of shareable prompts and context that was difficult before.

When I think about agents, MCPs, and skills and how they work together: agents and tools are pretty clear. MCPs give the agent the capability to use tools—which could be a database, with tools like "run this query" or "list all tables." There's only a limited amount of context the MCP server comes with: the set of tools, short descriptions of what they do, and some clients support an initial system prompt.

In that prompt you can explain things—we explain specifics of DuckDB SQL syntax, for example. But when you go beyond that, especially if you want to customize things, the MCP server doesn't give you that option unless you fork it and change the system prompt.

Skills, especially because they're shareable in Claude Code—that's what I really like. I feel like overall in the skill ecosystem, what's missing is a general sharing mechanism. There's an effort that Val did, there's this NPX skill distribution mechanism. I also saw there's something coming in the MCP spec, potentially a proposal for providing an MCP service to surface skills.

Currently the biggest hurdle is distribution of skills. But once that's solved, they really let you customize the behavior of the agent to a useful extent. Skills can be not only prompts but also scripts. Coding agents with skills that contain scripts can be really powerful and provide better guardrails.

If the agent figures out the user has a specific intent and there's a script for that in the skill, it can use the script instead of writing its own Python or its own solution—which might be wrong. These skills provide better guardrails. And they're plug and play.

Jacob, one of our DevRel folks, released an Observable dashboard skill. If I load this skill in Claude Code, the agent suddenly has the capability to write very well-designed dashboards following a specific design principle. It also gives the agent knowledge of how to weave in MotherDuck for live-querying dashboards. Skills are pretty cool and useful for customization of agent behavior.

---

### Memory and the Future of Agents

**Tim:** Another thing people are talking about more—we discussed it in my last podcast—is memory as a useful tool.

**Till:** Yeah.

**Tim:** I'm not sure everybody agrees on what memory means.

**Till:** Indeed. I almost think of skills as a very primitive form of memory. If the agent had a way to also author skills—it's basically just markdown—that's a very simple form of memory. Could be a markdown file that the agent writes and can read.

I think memory is extremely interesting and will help a lot with making agents better at what they're doing. The current frontier of developments in the AI space is not in the model space anymore—it's more on the agent layer. Memory will be a very important part of the agent layer.

If you have to explain your agent over and over again how not to make the same stupid mistake, that's very annoying. If I have a skill I can plug in that already explains to the model how not to do that, great. But it's still some manual effort. Memory, there are a lot of things still to be developed and explored.

It's not only RAG anymore, or just saving a markdown file. I'm very curious where this is going. I don't really have a good answer for how memory looks like today beyond markdown files. I'm sure there's a lot of interesting research at labs and in industry on memory architectures. We'll see it.

---

### Looking Forward

**Tim:** That brings me to a great concluding question. If we look back two years, we didn't have agent tools particularly—we didn't have Claude Code for sure, maybe Cursor was starting to be around. What do you think the next two years looks like? At MotherDuck or in the industry in general?

**Till:** This is almost impossible to answer. Thinking about how the world looked two years ago, and assuming things are maybe exponentially accelerating—where are we going to be? I have no idea.

As I said, I think short to midterm, these agent architectures and memory are probably a space where developments will happen.

I wish context windows would become bigger. That could also solve a bit of the memory and retrieval problems.

I also find interesting things like diffusion models or new architectures for LLMs. Faster inference—if you're working with Claude Code, it's great, but it can be a little bit slow.

If I get off this call, I'll have 20 more things on my mind, but right now I'm blank.

**Tim:** The less you say now, the better you'll look in two years.

**Till:** I guess so. But thanks so much for having me. It was fun.

**Tim:** Any places people can find you online besides motherduck.com?

**Till:** People can go to my LinkedIn. I'm not active on Twitter or X. LinkedIn is a great place to connect.

**Tim:** Thanks for joining me on Into the Hopper.
