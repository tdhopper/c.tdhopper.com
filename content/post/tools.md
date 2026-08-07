---
title: "Tools"
date: 2025-12-25
description: "The tools I actually use. Opinionated. Updated whenever I get annoyed enough."
---

## Who are you, and what do you do?

I'm a machine learning infrastructure and operations engineer. I build tools and platforms that help AI researchers shorten their feedback loops—spending more time on scientific and business problems and less time fighting engineering. I've done that across cybersecurity, weather forecasting, and banking, and I'm currently on Spotify's music information retrieval team. I'm mostly a Python programmer, and I care a lot about making Python more accessible and helping researchers use it effectively. In my free time, I write [pydevtools.com](https://pydevtools.com/), a free ebook about Python developer tooling.

---

## What hardware do you use?

**What's your primary work machine?**
A 14-inch MacBook Pro.

**Why this?**
It's fast enough that I can blame myself instead of the computer.

**And your phone?**
An iPhone Pro Max.

**What do you use it for?**
It's my capture device and the portable computer I pretend isn't a computer. If it can't happen from my phone, it usually doesn't happen until later.

**Keyboard?**
A [Glove80](https://www.moergo.com/collections/glove80-keyboards).

**Why that one?**
Minor RSI pain is a surprisingly good motivator. I made a custom layout similar to the Kinesis Advantage (which I used to use), so my hands didn't have to relearn civilization.
I've got brown switches at home and Plum Blossom switches for coworking.

**Mouse?**
Logitech MX Master.

**Why?**
Great ergonomics, and the scroll wheel is basically a cheat code.

**Displays?**
Two 27" monitors.

**Anything you're pining for?**
I wish I had an Apple Studio Display. I don't *need* one. That's not the same thing.

---

## And what software?

### What editor do you use?

[VS Code](https://code.visualstudio.com/).

**Why?**
It's the sweet spot between "real IDE" and "doesn't fight my terminal brain."

**Must-have extensions?**
- [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) — modal editing makes everything else feel like typing with mittens.
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) — fast repo switching without depending on my memory of folder paths.

### What's your terminal setup?

[iTerm2](https://iterm2.com/) + [fish](https://fishshell.com/) + [Starship](https://starship.rs/) + [tmux](https://github.com/tmux/tmux).

**Why that combo?**
It's reliable, powerful, and stays out of my way. I want sessions that survive context switches and bad decisions.

### What command line tools can't you live without?

- [ripgrep](https://github.com/BurntSushi/ripgrep) — if search is slow, I stop searching. That's unacceptable.
- [fd](https://github.com/sharkdp/fd) — `find`, but for humans.
- [eza](https://github.com/eza-community/eza) — `ls`, but with taste.
- [bat](https://github.com/sharkdp/bat) — `cat`, but pleasant.
- [direnv](https://direnv.net/) — auto-activate Python repos and load secrets when I `cd` into a project. Projects should configure themselves.
- [pandoc](https://pandoc.org/) — mostly Markdown → PDF. Shortest path from "I wrote it" to "I can share it."
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) — the Swiss Army knife for "I need this media offline/archived/in a different format."

### What do you use for Python?

- [uv](https://github.com/astral-sh/uv) — everything related to installing Python deps: project venvs, dependency management, tool installs. Fast enough that dependency work stops feeling like punishment.
- [Ruff](https://github.com/astral-sh/ruff) — speed + breadth. I want one tool that actually runs.
- [ty](https://github.com/astral-sh/ty) — I'm starting to use it actively because it's aiming at the holy grail: "fast enough to be default."
- [pytest](https://docs.pytest.org/) — the path of least resistance to tests that stay in the habit loop.
- [IPython](https://ipython.org/) — when I'm exploring, I want power tools, not training wheels.

### What do you use for version control and dotfiles?

**Git.** Mostly raw, with a couple small aliases (like `gc` for `git commit`).
https://git-scm.com/

**Dotfiles?**
[yadm](https://yadm.io/), backed by Git.

**Why?**
I want my environment reproducible without inventing a new religion.

My dotfiles repo is here: https://github.com/tdhopper/dotfiles2.0
(The full bootstrap script and the complete brew list live there; this page stays curated.)

---

## AI assistants?

**Which one changed your workflow the most?**
Claude Code.

**How so?**
It's the most impactful tool I've adopted. I use it to write code, but more and more I use it to automate command-line work. Recently I needed to batch edit a bunch of MP3s for my kids' Yoto player—I described what I wanted in natural language and it orchestrated the whole thing.

**Any caveats?**
Like everyone's learning in real time: if it's production code, you still read it, validate it, and test it.

**Do you use anything else?**
- ChatGPT — reasoning partner + quick lookups. Great for "talk through the system and find the edge cases."
- Gemini — long-context assistant + image generation. When the context is huge or I need an image, it's the fastest path.

---

## Notes and writing?

**What do you use for notes?**
[Drafts](https://getdrafts.com/) and Apple Notes.

**How do you split them?**
Drafts is where things start. Not much lives there forever, but writing projects stay there while I'm noodling.
Apple Notes is for longer-running stuff: things I need to share, things that need links, screenshots, and "real document" support.

---

## Publishing?

**How do you build your site?**
[Hugo](https://gohugo.io/).

**Where do you host it?**
[Netlify](https://www.netlify.com/).

**Do you use a CMS?**
[Decap CMS](https://decapcms.org/), with Netlify Identity + Git Gateway.

**Why?**
It's a ridiculously good combo for giving a static site a "real" CMS without turning it into an app.

---

## Photography?

**What do you use?**
Apple Photos for library management, and [Adobe Lightroom](https://www.adobe.com/products/photoshop-lightroom.html) when I care about the result.
