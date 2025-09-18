---
title: On Ramsey Numbers for Quadrilaterals in 3 and 4 Colors.
date: 2008-01-07T21:00:00.000Z
description: Overview of my summer research on combinatorial combinatorics
tags:
  - math
categories: Personal Update
image: /images/graph.png
math: true
---
Last summer, I had the privilege of serving as a student researcher in the [Rochester Institute of Technology](https://www.rit.edu/science/school-mathematics-and-statistics)'s Research Experience for Undergraduates alongside [Dr. Stanislaw Radziszowski]( https://en.wikipedia.org/wiki/Stanis%C5%82aw_Radziszowski).

Our research focused on computational combinatorics, specifically [Ramsey Numbers](https://mathworld.wolfram.com/RamseyNumber.html). My work focused on the Ramsey Number \\(R_4(C_4)\\), which is the smallest number \\(n\\) where, if you color all the edges of a complete graph with \\(n\\) vertices (called \\(K_n\\)) using four colors, you'll always get a monochromatic \\(C_4\\) (a 4-cycle all in the same color). Before our work, the number was known to be 18 or 19. I wrote fast, distributed programs to generate \\(C_4\\)-free 4-colorings of \\(K_{17}\\) with the hope that an 18th node could be added while preserving the cycle-free property. Had we discovered such a graph, we would have proven the Ramsey number to be 18.

This week, my research partner Evan Heidtmann and I presented our research at the [AMS-MAA-SIAM Special Session on Research in Mathematics by Undergraduates](https://jointmathematicsmeetings.org/meetings/national/jmm/2109_program_monday.html) in San Diego. Here is our abstract:

> We discuss the two multicolor Ramsey numbers concerning 4-cycles in 3 and 4 colors. For 3 colors, we find that there are exactly 1000 nonisomorphic critical colorings of \\(K_{10}\\) for the Ramsey number \\(R_3(C_4)\\) = 11, verifying our results using two independent computations. One of these colorings contains the Petersen graph as one of the colors and is more symmetric than all published colorings for this Ramsey number. In 4 colors, we were not able to improve the currently best known bounds \\(18 ≤ R_4 (C_4) ≤ 19\\), but we gather extensive computational evidence and then conjecture that no 4-coloring of \\(K_{18}\\) can avoid monochromatic \\(C_4\\)’s. We generate more than 28,000 nonisomorphic \\(C_4\\)-free 4-colorings of \\(K_{17}\\) (only 2 of which were previously published), but none can be extended to successfully color K18. Several searches, both heuristic and deterministic, also failed to produce a desired coloring. An exhaustive search seems to be extremely difficult computationally, even with all known constraints. We conjecture that \\(R_4(C_4) = 18\\).
