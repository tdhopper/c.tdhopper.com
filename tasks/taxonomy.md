# Tag Taxonomy for tdhopper.com

Consolidated from 201 proposed tags down to 25 canonical tags.

## Final Tag Table

| # | Tag | Posts | Merged From |
|---|-----|-------|-------------|
| 1 | `python` | 59 | `pandas`, `jupyter`, `ipython`, `pymc3`, `conda`, `python-environments`, `virtualenv`, `fish-shell`, `json`, `parallel-computing`, `matplotlib`, `unicode` |
| 2 | `data-science` | 40 | `statistics`, `data-analysis`, `data-visualization`, `exploratory-data-analysis`, `ab-testing`, `time-series`, `quantified-self`, `dataframes`, `r-lang`, `r`, `agriculture`, `public-health`, `geospatial`, `open-data`, `economics`, `cybersecurity` |
| 3 | `machine-learning` | 32 | `bayesian-statistics`, `bayesian-inference`, `bayesian-nonparametrics`, `gibbs-sampling`, `mcmc`, `monte-carlo`, `scikit-learn`, `reinforcement-learning`, `support-vector-machines`, `bandit-algorithms`, `recommender-systems`, `mixture-models` |
| 4 | `career` | 31 | `career-advice`, `career-lessons`, `job-search`, `interviewing`, `hiring`, `startups` |
| 5 | `mathematics` | 28 | `calculus`, `linear-algebra`, `probability`, `probability-theory`, `probability-distributions`, `number-theory`, `combinatorics`, `graph-theory`, `computational-complexity`, `computational-geometry`, `stochastic-processes`, `information-theory` |
| 6 | `software-engineering` | 28 | `code-review`, `code-quality`, `technical-debt`, `software-architecture`, `software-complexity`, `testing`, `programming`, `programming-languages`, `functional-programming`, `team-practices`, `enterprise-software`, `product-development`, `computer-science`, `cpp`, `data-structures`, `tech-management` |
| 7 | `developer-tools` | 26 | `developer-tooling`, `developer-experience`, `tools`, `macos-productivity`, `macos`, `text-editors`, `markdown`, `build-tools`, `debugging` |
| 8 | `command-line` | 23 | `command-line-tools`, `bash`, `ssh`, `linux`, `ruby`, `audio` |
| 9 | `data-engineering` | 21 | `distributed-systems`, `distributed-computing`, `apache-spark`, `spark`, `stream-processing`, `feature-stores`, `impala`, `sql`, `elasticsearch`, `mapreduce`, `kafka`, `apache-pulsar`, `event-streaming`, `duckdb`, `big-data`, `mlops`, `docker`, `devops`, `redis`, `data-persistence`, `csv`, `scala`, `robotics`, `ml-engineering` |
| 10 | `education` | 18 | `graduate-school`, `teaching`, `learning`, `phd`, `academia`, `grad-school`, `book-recommendations`, `programming-books`, `research`, `problem-solving`, `science`, `psychology` |
| 11 | `productivity` | 17 | `remote-work`, `office-culture`, `focus`, `simplicity`, `getting-things-done`, `process-management`, `automation` |
| 12 | `operations-research` | 13 | `optimization`, `simulation`, `linear-programming`, `integer-programming`, `mathematica` |
| 13 | `personal` | 13 | `hobbies`, `outdoors`, `backpacking`, `wildlife`, `knitting`, `fitness`, `strongman`, `parenting`, `risk-taking`, `philosophy`, `creativity`, `podcasts` |
| 14 | `writing` | 12 | `blogging`, `book-review`, `communication` |
| 15 | `ai` | 11 | `llm`, `llms`, `ai-assisted-development`, `ai-assisted-programming`, `ai-agents` |
| 16 | `twitter` | 10 | (no merges) |
| 17 | `open-source` | 10 | `side-projects` |
| 18 | `git` | 9 | `github` |
| 19 | `dirichlet-processes` | 9 | (no merges) |
| 20 | `natural-language-processing` | 7 | `topic-modeling`, `text-to-sql` |
| 21 | `history` | 6 | `history-of-science`, `history-of-computing` |
| 22 | `web-development` | 6 | `javascript`, `css`, `flask` |
| 23 | `aws` | 5 | `aws-lambda`, `security` |
| 24 | `photography` | 3 | `camera-gear`, `sony` |
| 25 | `homelab` | 3 | `self-hosting`, `tailscale`, `networking`, `ansible`, `video-streaming`, `ffmpeg` |

## Rationale for Controversial Decisions

### Keeping `dirichlet-processes` as its own tag
Despite being a narrow topic, the author wrote a dedicated 9-post series on Dirichlet processes.
This is a signature content area for the blog, and readers interested in this topic would benefit from a dedicated tag.
Merging it into `machine-learning` would lose this signal.

### Merging `bayesian-statistics`, `mcmc`, `monte-carlo`, etc. into `machine-learning`
These are methodological subcategories. On a personal blog with ~180 posts, having separate tags for each
Bayesian method would create too many small tags. The Dirichlet process series is the exception because of its size and coherence.

### Merging `remote-work` and `office-culture` into `productivity`
The remote-work posts are fundamentally about productivity and work habits, just with a remote-work angle.
With only 5 remote-work posts and 2 office-culture posts, they are better served under the broader `productivity` umbrella.

### Keeping `operations-research` separate from `mathematics`
Although OR is applied mathematics, the author's OR posts form a distinct cluster (grad school experience,
OR-specific algorithms, OR history). These 13 posts share a common theme that would be diluted in `mathematics`.

### Merging `R`, `Scala`, etc. into broader tags rather than keeping language-specific tags
Only Python has enough posts (60) to warrant its own language tag. Other languages appear in 1-2 posts
and are better categorized by their use case (e.g., R posts are about data science, Scala about data engineering).

### Merging `startups` into `career`
The startup-tagged posts are really about career paths and business decisions, not startup-specific technology.

### `photography` and `homelab` at 3 posts each
These are at the minimum threshold but represent genuinely distinct non-overlapping content areas.
The author's photography and homelab posts would not fit naturally under any other tag.

### Using `writing` as a catch-all for blogging, book reviews, and communication
These are all fundamentally about written expression and reading. With 12 posts total, it is a healthy tag size.

### Dropping category-duplicate tags
Per the requirements, no tags were created for `article`, `quote`, `humor`, `link`, `til`, `podcast`, or `presentation`
since these are already handled by the blog's category system.

## Summary Statistics

- **Total tags**: 25
- **Total posts**: 182
- **Avg posts per tag**: 17.6
- **Min posts per tag**: 3 (photography, homelab)
- **Max posts per tag**: 59 (python)
- **Avg tags per post**: 2.4
- **Min tags per post**: 2
- **Max tags per post**: 4
- **Total tag assignments**: 440
