---
title: "The Shortcomings of the Small Angle Approximation for Oscillating Systems"
date: 2005-12-13
slug: small-angle-approximation
math: true
categories:
  - Article
tags:
  - physics
  - mathematics
description: "A paper I wrote as a Grove City College physics undergrad in 2005, revised two decades later to incorporate my professor's handwritten feedback."
---

<link rel="stylesheet" href="/css/small-angle-viz.css">

## Abstract

Most undergraduate textbooks on classical mechanics cover the simple pendulum as an example of simple harmonic motion by making a small-angle approximation that yields an amplitude-independent period. Some authors even state that the small-angle approximation is an appropriate estimation for many oscillating systems besides simple pendulums. It can be shown that this estimation will not work for many systems; in fact, there are infinitely many simple oscillating systems whose oscillation is *intrinsically* nonlinear. The periods of these systems depend on the amplitude of oscillation, so methods other than the small-angle approximation must be used to describe their motion — otherwise the resulting equations of motion may be incorrect. Where a system does yield to approximation, one or two standard techniques suffice, and a careful writer notes which ones and why. Care must be taken when evaluating oscillating systems to be sure they are correctly solved.

## Introduction

The simple pendulum has been an area of scientific interest for at least five hundred years. A sketch by Leonardo da Vinci from about 1500 shows a pendulum in use (Grattan-Guinness 1082). Galileo was the first to note that a pendulum could be used in keeping time, yet he did not seem to realize that the period of a simple pendulum is amplitude dependent. Simple harmonic motion is now a standard subject in undergraduate mechanics at both the freshman and upperclassman level, and its classic problems are the mass suspended on a spring and the simple pendulum. In solving the differential equation that describes the motion of a simple pendulum, an approximation must be used. Likewise, there are other similar systems that appear to need approximations for their solutions. Unfortunately, for pendulums released at a large angle from the vertical — and for many systems even at small angles — this approximation fails, and the problem must be approached by other methods.

A simple pendulum has a "massless" rod of length $\ell$ connected to a mass $m$ at one end and rotating freely about a fixed, frictionless pivot at the other. Suspended in a uniform gravitational field, the pendulum at rest hangs with the mass directly below the pivot point. The force on the pendulum is described by Newton's laws as

$$m\ell\frac{d^{2}\theta}{dt^{2}} = -mg\sin\theta,$$

where $\theta$ is the angle between the equilibrium position of the rod and the rotated pendulum. Unfortunately, this differential equation cannot be solved analytically, and describing the pendulum's motion requires more than elementary techniques.

## The classical approximation

The common solution of undergraduate texts is to approximate the equation for a small value of $\theta$. For example, "For small $\theta$, $\sin\theta \approx \theta$" (Tipler 441), and most, if not all, other books include a similar statement. In such a case, the approximation makes the differential equation

$$\frac{d^{2}\theta}{dt^{2}} = -\frac{g}{\ell}\,\theta,$$

which — being the equation for simple harmonic motion — is readily solved. The solution yields an equation of motion for a simple harmonic oscillator,

$$\theta = \theta_{0}\cos(\omega t + \delta), \qquad \omega = \sqrt{\frac{g}{\ell}},$$

and a period that is independent of the amplitude. For small angles this approximation is very close: a plot of $\theta$ versus $\sin\theta$ shows that up to about 0.5 radians the two values are almost identical. But for angles greater than this, the approximation falls apart.

## A better approximation

Millet suggests a correction to the small-angle formula. Instead of

$$\sin\theta \approx \theta,$$

Millet uses

$$\sin\theta \approx \theta\cos\!\left(\frac{\theta_{0}}{2}\right),$$

where $\theta_{0}$ is the maximum angle of oscillation. This approximation is derived by noting that

$$\sin\theta = 2\sin\!\frac{\theta}{2}\cos\!\frac{\theta}{2},$$

and then approximating $\sin\frac{\theta}{2} \approx \frac{\theta}{2}$ and $\cos\frac{\theta}{2} \approx \cos\frac{\theta_{0}}{2}$.

Millet notes that at $\theta_{0} = 30^{\circ}$ his approximation gives a period with a percent error of 0.0075%, while the standard approximation gives an error of 1.7%. At $\theta_{0} = 90^{\circ}$ his approximation has an error of 0.75% and the standard approximation an error of 15%. He strongly suggests that this new formula be included in textbooks, so that students "will be able to find more realistic values for some current textbook problems" (Millet 163).

<div data-viz="pendulum"></div>

## The exact solution

In *Classical Dynamics*, Thornton and Marion provide a discourse on the exact solution in a chapter on nonlinear oscillations. By calculating the potential energy at the point of maximum oscillation, they show that the differential equation can be expressed in the form

$$\dot{\theta} = 2\sqrt{\frac{g}{\ell}}\,\sqrt{\sin^{2}\!\frac{\theta_{0}}{2} - \sin^{2}\!\frac{\theta}{2}}\,,$$

from which the period can be found:

$$\tau = 2\sqrt{\frac{\ell}{g}}\int_{0}^{\theta_{0}}\left[\sin^{2}\!\frac{\theta_{0}}{2} - \sin^{2}\!\frac{\theta}{2}\right]^{-1/2}d\theta.$$

But this equation for the period is an elliptic integral of the first kind, which cannot be evaluated without numerical methods. To recast it, Thornton and Marion make the substitution

$$z = \frac{\sin(\theta/2)}{\sin(\theta_{0}/2)}, \qquad k = \sin\!\frac{\theta_{0}}{2}, \qquad dz = \frac{\cos(\theta/2)}{2\sin(\theta_{0}/2)}\,d\theta = \frac{\sqrt{1-k^{2}z^{2}}}{2k}\,d\theta,$$

which puts the period in the form

$$\tau = 4\sqrt{\frac{\ell}{g}}\int_{0}^{1}\left[(1-z^{2})(1-k^{2}z^{2})\right]^{-1/2}dz.$$

Then, with a power-series expansion and some algebra, the period becomes

$$\tau = 2\pi\sqrt{\frac{\ell}{g}}\left(1 + \frac{1}{16}\theta_{0}^{2} + \frac{11}{3072}\theta_{0}^{4} + \cdots\right).$$

This form clearly shows how the small-angle approximation functions. For example, in calculating the period of a pendulum with a maximum oscillation of fifteen degrees, the last two terms in the parenthesis total about 0.0042, which is clearly dominated by the leading $1$.

## Intrinsically nonlinear oscillators

While the simple pendulum can be correctly estimated for small angles, there turn out to be infinitely many systems for which the approximation is not at all accurate. In his paper "Theory and Examples of Intrinsically Nonlinear Oscillators," Mohazzabi demonstrates this fact. He begins by explaining that the potential energy of an oscillator — assuming it is continuous at its equilibrium point ($x = 0$) and that the potential energy there is zero — is given by

$$V(x) = V_{0}^{(1)}x + \frac{1}{2}V_{0}^{(2)}x^{2} + \cdots.$$

Because the potential energy at a stable equilibrium point is a local minimum, the power series must begin with an even function; that is,

$$V(x) = \frac{1}{2}V_{0}^{(2)}x^{2} + \frac{1}{6}V_{0}^{(3)}x^{3} + \cdots.$$

The total energy of the system is therefore

$$E = \frac{1}{2}\left[m\left(\frac{dx}{dt}\right)^{2} + V_{0}^{(2)}x^{2} + \frac{1}{3}V_{0}^{(3)}x^{3} + \cdots\right],$$

which is equivalent to the equation for harmonic oscillation when the third- and higher-order terms of the potential-energy series vanish and the equation is differentiated with respect to time. But, Mohazzabi notes, this cannot always be taken as true or even approximately true. First, it is not always the case that the potential-energy function of an oscillating system can be expanded about its equilibrium configuration in a Taylor series. Second, even when such an expansion is possible, there are cases where the coefficient of the quadratic term vanishes and the series begins with a term higher than second order (Mohazzabi 492). This is the inadequacy of the small-angle approximation: some highly regarded texts even claim, incorrectly, that all oscillators can be estimated with it — Mohazzabi cites *Classical Mechanics* by Barger and Olsson as an example.

<div data-viz="potential"></div>

### A tethered mass

The typical example of an intrinsically nonlinear oscillator is a mass tethered above and below by identical springs of constant $k$ and relaxed length $\ell_{0}$. For simplicity, gravity is not present in this example. If $x$ is the displacement of the particle from equilibrium, Mohazzabi calculates the potential energy of the particle as

$$V(x) = k(\ell - \ell_{0})^{2} = k\ell_{0}^{2}\left[\sqrt{1 + \left(\tfrac{x}{\ell_{0}}\right)^{2}} - 1\right]^{2} = k\ell_{0}^{2}\left[\frac{1}{4}\left(\tfrac{x}{\ell_{0}}\right)^{4} - \frac{1}{8}\left(\tfrac{x}{\ell_{0}}\right)^{6} + \cdots\right]. \tag{1}$$

It is clear that this system is not a simple harmonic oscillator, because the lowest power of $x$ is four, not two; therefore the estimation used for a simple pendulum will not work. Equivalent to this situation, one can imagine a block at the end of a spring, tethered to a frictionless surface so that it moves only in the $x$-direction.

### Two charged rings

<figure class="osc-fig"><svg viewBox="0 0 300 170" role="img" aria-label="Two concentric charged rings with a charge oscillating along the central axis.">
<ellipse class="s" cx="150" cy="98" rx="115" ry="26"/><ellipse class="s" cx="150" cy="98" rx="60" ry="14"/>
<line class="dash" x1="150" y1="20" x2="150" y2="152"/><text x="150" y="16" text-anchor="middle" class="lbl-i">z</text>
<line class="mv" x1="150" y1="54" x2="150" y2="74"/><polygon class="mvf" points="150,48 145,58 155,58"/>
<line class="mv" x1="150" y1="122" x2="150" y2="142"/><polygon class="mvf" points="150,148 145,138 155,138"/>
<circle class="mvf" cx="150" cy="98" r="5"/><text x="162" y="93" class="lbl-i" style="fill:var(--saviz-exact)">q</text>
<text x="88" y="102" text-anchor="middle">+Q</text><text x="33" y="102" text-anchor="middle">−βQ</text>
</svg><figcaption>Two concentric rings of radii <span class="lbl-i">R</span> and <span class="lbl-i">αR</span> carry charges +Q and −βQ; a charge <span class="lbl-i">q</span> oscillates along the axis. Tuned so β = α³, the potential is ∝ z⁴.</figcaption></figure>

Next, Mohazzabi provides an example from electrodynamics. He considers two thin concentric circular rings of radii $R$ and $\alpha R$, with $\alpha > 1$, lying in the $xy$-plane. Electric charges $Q$ and $-\beta Q$ (with $\beta > 0$) are uniformly distributed over the two rings, and a particle of mass $m$ and charge $q$ is placed on the $z$-axis near the center of the rings ($z \ll R$) and released (Mohazzabi 494). When the charges are chosen so that $\beta = \alpha^{3}$, the quadratic term of the potential vanishes and its leading behavior is quartic:

$$V(z) = \frac{3Qq}{32\pi\epsilon_{0}R^{5}}\left(1 - \frac{1}{\alpha^{2}}\right)z^{4}. \tag{2}$$

Once again the leading power is four, not two, so the motion of the particle is intrinsically nonlinear.

### A tunnel through a sphere

<figure class="osc-fig"><svg viewBox="0 0 300 205" role="img" aria-label="A sphere with a tunnel through its center and a mass dropped inside.">
<circle class="s" cx="150" cy="100" r="78"/>
<circle class="dash" cx="150" cy="100" r="52"/><circle class="dash" cx="150" cy="100" r="26"/>
<line class="dash" x1="150" y1="14" x2="150" y2="186"/>
<line class="mv" x1="150" y1="70" x2="150" y2="90"/><polygon class="mvf" points="150,96 145,86 155,86"/>
<line class="mv" x1="150" y1="130" x2="150" y2="110"/><polygon class="mvf" points="150,104 145,114 155,114"/>
<circle class="mvf" cx="150" cy="100" r="5.5"/><text x="163" y="95" class="lbl-i" style="fill:var(--saviz-exact)">m</text>
<line class="s" x1="150" y1="100" x2="215" y2="67"/><text x="197" y="72" class="lbl-i">R</text>
<text x="150" y="200" text-anchor="middle">ρ ∝ (r/R)ˢ</text>
</svg><figcaption>A mass dropped through a tunnel in a sphere whose density varies as <span class="lbl-i">ρ ∝ (r/R)ˢ</span>. Only <span class="lbl-i">s</span> = 0 (uniform density) gives simple harmonic motion.</figcaption></figure>

Mohazzabi also gives an example reminiscent of a favorite problem in elementary gravitational field theory. He considers a sphere of radius $R$ with a small tunnel along an axis through its center, into which a small mass is dropped. The sphere has a radially symmetric mass distribution with density

$$\rho = \rho_{0}\left(\frac{r}{R}\right)^{s}, \qquad (\rho_{0} > 0,\; s > -2), \tag{3}$$

and total mass $M$. If $s = 0$, the mass is uniform and the particle oscillates in simple harmonic motion — the familiar textbook case. In general, though, the potential energy is

$$V(r) = \frac{GMm}{(s+2)R}\left(\frac{|x|}{R}\right)^{s+2}, \qquad (r \le R). \tag{4}$$

For all values of $s$ not equal to zero, the motion is, once again, intrinsically nonlinear.

### A bouncing ball

<figure class="osc-fig"><svg viewBox="0 0 300 165" role="img" aria-label="A ball bouncing on a horizontal floor under gravity.">
<line class="s" x1="58" y1="140" x2="242" y2="140"/>
<line class="s" x1="64" y1="140" x2="56" y2="150"/><line class="s" x1="84" y1="140" x2="76" y2="150"/><line class="s" x1="104" y1="140" x2="96" y2="150"/><line class="s" x1="124" y1="140" x2="116" y2="150"/><line class="s" x1="144" y1="140" x2="136" y2="150"/><line class="s" x1="164" y1="140" x2="156" y2="150"/><line class="s" x1="184" y1="140" x2="176" y2="150"/><line class="s" x1="204" y1="140" x2="196" y2="150"/><line class="s" x1="224" y1="140" x2="216" y2="150"/>
<circle class="mvf" cx="150" cy="58" r="15"/><text x="150" y="62" text-anchor="middle" style="fill:var(--card-background)">m</text>
<line class="dash" x1="118" y1="58" x2="118" y2="140"/><text x="110" y="103" text-anchor="end" class="lbl-i">x</text>
<line class="mv" x1="190" y1="48" x2="190" y2="82"/><polygon class="mvf" points="190,88 185,78 195,78"/><text x="202" y="70" style="fill:var(--saviz-exact)" class="lbl-i">g</text>
</svg><figcaption>A ball under gravity has <span class="lbl-i">V = mgx</span> for x ≥ 0: a sharp corner at the floor, so no Taylor series can be written about the minimum.</figcaption></figure>

The paper also gives an example where the potential cannot be expanded in a Taylor series at all. When an elastic ball bounces freely up and down on a horizontal plane, the potential energy (taking $x$ positive upward) is

$$V(x) = mgx \;\; (x \ge 0), \qquad V(x) = \infty \;\; (x < 0). \tag{5}$$

This function has a minimum at $x = 0$, but it has a sharp corner there and so is not smoothly continuous — it is not differentiable at that point. Because it is not differentiable, the Taylor series cannot be expanded about it.

### A bead on a wire

<figure class="osc-fig"><svg viewBox="0 0 300 170" role="img" aria-label="A bead sliding on a curved wire under gravity.">
<path class="s" d="M40,38 C88,42 122,150 150,150 C178,150 212,42 260,38"/>
<line class="dash" x1="150" y1="150" x2="150" y2="28"/>
<circle class="mvf" cx="184" cy="117" r="6"/><text x="195" y="114" class="lbl-i" style="fill:var(--saviz-exact)">m</text>
<line class="mv" x1="184" y1="129" x2="184" y2="151"/><polygon class="mvf" points="184,155 179,145 189,145"/>
<text x="250" y="32" text-anchor="middle" class="lbl-i">y = c|x|ⁿ</text>
</svg><figcaption>A bead sliding on the wire <span class="lbl-i">y = c|x|ⁿ</span>. Its potential energy is ∝ |s|ⁿ, simple-harmonic only when n = 2.</figcaption></figure>

A fifth example imagines a bead sliding along a wire of shape $y = c|x|^{n}$, where $c$ and $n$ are constants. For small oscillations of the particle on this curve, using the differential relation $ds^{2} = dx^{2} + dy^{2}$, one can verify that along the curve the gravitational potential energy $V(y) = mgy$ can be written as $V(s) = mgc|s|^{n}$, so that the total energy of the particle is

$$\frac{1}{2}m\dot{s}^{2} + V(s) = E \tag{6}$$

(Mohazzabi 496). This is simple harmonic when $n = 2$, but for all other values of $n$ it is, once again, inherently nonlinear.

## Conclusion

The small-angle approximation is a powerful tool in physics, but it must be used only in very specific circumstances. It accurately describes a simple pendulum oscillating at an angle of less than about fifteen degrees, but it must not be used for larger oscillations. There are also other systems that cannot be described by the small-angle approximation even for small angles of oscillation. In fact, as Mohazzabi shows, there are infinitely many systems for which the approximation cannot be used at all.

## Works Cited

Cadwell, L. H., and E. R. Boyko. "[Linearization of the Simple Pendulum](https://doi.org/10.1119/1.16655)." *American Journal of Physics*, vol. 59, no. 11, 1991, pp. 979–981.

Grattan-Guinness, I. *Companion Encyclopedia of the History and Philosophy of the Mathematical Sciences.* New York: Routledge, 1994.

Millet, L. Edward. "[The Large-Angle Pendulum Period](https://doi.org/10.1119/1.1557505)." *The Physics Teacher*, vol. 41, no. 3, 2003, pp. 162–163.

Mohazzabi, Pirooz. "[Theory and Examples of Intrinsically Nonlinear Oscillators](https://doi.org/10.1119/1.1624114)." *American Journal of Physics*, vol. 72, no. 4, 2004, pp. 492–498.

Thornton, Stephen T., and Jerry B. Marion. *[Classical Dynamics of Particles and Systems](https://openlibrary.org/books/OL3696658M).* Ch. 4, "Nonlinear Oscillations." Belmont: Thomson Brooks/Cole, 2004.

Tipler, Paul A., and Gene Mosca. *[Physics for Scientists and Engineers](https://openlibrary.org/search?q=Tipler+Mosca+Physics+for+Scientists+and+Engineers),* vol. 1B, p. 441. New York: W. H. Freeman, 2004.

<script src="/js/small-angle-viz.js" defer></script>
