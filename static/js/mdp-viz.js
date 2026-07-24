/*
 * Interactive visualizations for
 * "When to Transplant: Value Iteration and Optimal Stopping".
 *
 * Dependency-free. The Markov decision process is solved exactly by value
 * iteration in the browser, reproducing the 2011 Mathematica notebook:
 *   discount lambda = 0.95
 *   V* = (112.40, 75, 60, 0, 0)   policy = (wait, transplant, transplant)
 * The control-limit structure (wait while healthiest, transplant once you
 * decline) and the option value V(Good)=112.40 > 100 both fall out of the fixed point.
 */
(function () {
  "use strict";

  /* --------------------------------------------------------------------- model */
  // States (0-indexed): 0 Good, 1 Fair, 2 Poor (pre-transplant health),
  //                     3 Death (absorbing), 4 Transplanted (absorbing).
  // Actions: 0 wait, 1 transplant.
  const WAIT = 0, TRANSPLANT = 1;
  const NAMES = ["Good", "Fair", "Poor", "Death", "Transplanted"];
  const HEALTH = [0, 1, 2];               // decision states
  const R = [                             // R[action][state]
    [17, 17, 17, 0, 0],                   // wait: live another period
    [100, 75, 60, 0, 0],                  // transplant: payoff falls as health declines
  ];
  const P = [                             // P[action][state][dest]
    [ // wait
      [0.8,  0.1,  0.05, 0.05, 0],        // Good  -> mostly stays, small death risk
      [0.1,  0.2,  0.4,  0.3,  0],        // Fair  -> tends to decline
      [0.05, 0.05, 0.1,  0.8,  0],        // Poor  -> high death risk
      [0,    0,    0,    1,    0],        // Death absorbing
      [0,    0,    0,    0,    1],        // Transplanted absorbing
    ],
    [ // transplant
      [0, 0, 0, 0, 1],                    // Good  -> Transplanted (collect reward)
      [0, 0, 0, 0, 1],                    // Fair  -> Transplanted
      [0, 0, 0, 0, 1],                    // Poor  -> Transplanted
      [0, 0, 0, 1, 0],                    // Death absorbing
      [0, 0, 0, 0, 1],                    // Transplanted absorbing
    ],
  ];

  // Q(s,a) under a value vector V.
  function q(V, s, a, lambda) {
    let acc = R[a][s], row = P[a][s];
    for (let j = 0; j < 5; j++) acc += lambda * row[j] * V[j];
    return acc;
  }
  // greedy action at state s under V.
  function greedy(V, s, lambda) {
    return q(V, s, TRANSPLANT, lambda) > q(V, s, WAIT, lambda) ? TRANSPLANT : WAIT;
  }
  // Value iteration from V=0. Returns the full iteration trace for animation.
  function solve(lambda) {
    let V = [0, 0, 0, 0, 0];
    const trace = [V.slice()], gaps = [];
    let iters = 0;
    for (let n = 1; n <= 4000; n++) {
      const Vn = new Array(5);
      for (let s = 0; s < 5; s++) Vn[s] = Math.max(q(V, s, WAIT, lambda), q(V, s, TRANSPLANT, lambda));
      let gap = 0;
      for (let s = 0; s < 5; s++) gap = Math.max(gap, Math.abs(Vn[s] - V[s]));
      trace.push(Vn.slice()); gaps.push(gap);
      V = Vn; iters = n;
      if (gap < 1e-9) break;
    }
    const Q = [[], []], policy = [];
    for (let s = 0; s < 5; s++) {
      Q[WAIT][s] = q(V, s, WAIT, lambda);
      Q[TRANSPLANT][s] = q(V, s, TRANSPLANT, lambda);
      policy[s] = greedy(V, s, lambda);
    }
    return { V: V, Q: Q, policy: policy, trace: trace, gaps: gaps, iters: iters };
  }
  // Smallest discount at which Good stays "wait" (scan). Used for annotation.
  function goodWaitThreshold() {
    let lo = 0.5, hi = 0.99;
    for (let i = 0; i < 40; i++) {
      const mid = (lo + hi) / 2;
      const s = solve(mid);
      if (s.policy[0] === WAIT) hi = mid; else lo = mid;
    }
    return (lo + hi) / 2;
  }

  /* -------------------------------------------------------------------- theme */
  const redraws = [];
  function palette(el) {
    const cs = getComputedStyle(el);
    const g = n => cs.getPropertyValue(n).trim();
    return {
      wait:   g("--mdpviz-wait")  || "#3b7df0",
      trans:  g("--mdpviz-trans") || "#16a085",
      alert:  g("--mdpviz-alert") || "#e0553e",
      text:   g("--card-text-color-main") || "#111",
      dim:    g("--card-text-color-secondary") || "#666",
      sep:    g("--card-separator-color") || "rgba(128,128,128,0.3)",
      bg:     g("--card-background") || "#fff",
      absorb: g("--mdpviz-absorb") || "#9aa4b0",
    };
  }
  new MutationObserver(() => redraws.forEach(fn => { try { fn(); } catch (e) {} }))
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-scheme"] });

  /* --------------------------------------------------------------- canvas util */
  function hidpi(canvas, cssW, cssH) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.height = cssH + "px";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }
  function label(ctx, text, x, y, color, font, align, baseline) {
    ctx.fillStyle = color;
    ctx.font = font || "12px -apple-system, sans-serif";
    ctx.textAlign = align || "left";
    ctx.textBaseline = baseline || "alphabetic";
    ctx.fillText(text, x, y);
  }
  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ----------------------------------------------------------------- scaffold */
  function card(mount, title, sub) {
    mount.classList.add("mdpviz");
    mount.innerHTML =
      '<p class="mdpviz__title">' + title + "</p>" +
      (sub ? '<p class="mdpviz__sub">' + sub + "</p>" : "") +
      '<div class="mdpviz__body"></div>';
    return mount.querySelector(".mdpviz__body");
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function slider(min, max, step, val) {
    const s = el("input");
    s.type = "range"; s.min = min; s.max = max; s.step = step; s.value = val;
    return s;
  }
  function responsive(mount, canvas, aspect, draw) {
    let w = 0, h = 0;
    function relayout() {
      const cw = Math.max(240, mount.clientWidth);
      const ch = Math.round(cw * aspect);
      w = cw; h = ch;
      const ctx = hidpi(canvas, cw, ch);
      draw(ctx, cw, ch);
    }
    const ro = new ResizeObserver(() => { requestAnimationFrame(relayout); });
    ro.observe(mount);
    redraws.push(relayout);
    relayout();
    return { relayout: relayout, get w() { return w; }, get h() { return h; } };
  }
  function whenVisible(node, onShow, onHide, threshold) {
    new IntersectionObserver(es => {
      es.forEach(e => (e.isIntersecting ? onShow() : onHide()));
    }, { threshold: threshold || 0.01 }).observe(node);
  }

  /* ================================================== 1. value-iteration animation */
  function vizValueIteration(mount) {
    const lambda = 0.95;
    const sol = solve(lambda);
    const trace = sol.trace, gaps = sol.gaps;
    const DISPLAY = [0, 1, 2, 4, 3];        // Good, Fair, Poor, Transplanted, Death
    const YMAX = 120;

    const body = card(mount,
      "Watch value iteration converge",
      "Each state starts worth nothing. Every sweep applies the Bellman update &mdash; take the best of <em>wait</em> and <em>transplant now</em>, look one step ahead &mdash; and the values climb to a fixed point. The badge on each health state shows the current best action; watch the policy lock in.");
    body.appendChild(el("div", "mdpviz__legend",
      '<span class="l-wait">wait</span>' +
      '<span class="l-trans">transplant now</span>' +
      '<span class="l-absorb">absorbing state</span>'));
    const wrap = el("div", "mdpviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "mdpviz__controls");
    const btns = el("div", "mdpviz__buttons");
    const bPlay = el("button", "mdpviz__btn", "Pause");
    const bReset = el("button", "mdpviz__btn", "Reset");
    btns.appendChild(bPlay); btns.appendChild(bReset); controls.appendChild(btns);
    body.appendChild(controls);

    const readout = el("div", "mdpviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="mdpviz__stat"><span class="k">iteration</span><span class="v" data-r="iter"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">Bellman residual max|V<sub>k</sub>&minus;V<sub>k&minus;1</sub>|</span><span class="v" data-r="gap"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">optimal policy</span><span class="v" data-r="pol"></span></div>';

    let pos = 0;                            // continuous iteration index
    const RATE = 14;                        // iterations per second

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const k = Math.min(Math.floor(pos), trace.length - 1);
      const V = trace[k];

      const padL = 16, padR = 12, padT = 30, padB = 40;
      const plotW = w - padL - padR, plotH = h - padT - padB;
      const baseY = padT + plotH;
      const yOf = v => baseY - (Math.max(0, v) / YMAX) * plotH;

      // reference line at 100 (Good's transplant-now payoff)
      const y100 = yOf(100);
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(padL, y100); ctx.lineTo(padL + plotW, y100); ctx.stroke();
      ctx.setLineDash([]);
      label(ctx, "transplant-now payoff = 100", padL + plotW, y100 - 4, p.dim, "10.5px sans-serif", "right", "bottom");

      const n = DISPLAY.length;
      const slot = plotW / n, bw = Math.min(slot * 0.54, 66);
      for (let i = 0; i < n; i++) {
        const s = DISPLAY[i];
        const cx = padL + slot * (i + 0.5);
        const val = V[s];
        const isHealth = HEALTH.indexOf(s) >= 0;
        const act = isHealth ? greedy(V, s, lambda) : -1;
        const col = !isHealth ? p.absorb : act === TRANSPLANT ? p.trans : p.wait;

        // bar
        const top = yOf(val);
        ctx.fillStyle = col; ctx.globalAlpha = isHealth ? 1 : 0.5;
        roundRect(ctx, cx - bw / 2, top, bw, baseY - top, 4); ctx.fill();
        ctx.globalAlpha = 1;

        // value number
        label(ctx, val.toFixed(val < 100 ? 2 : 1), cx, top - 6, p.text, "600 13px -apple-system, sans-serif", "center", "bottom");
        // state name
        label(ctx, NAMES[s], cx, baseY + 6, p.dim, "12px -apple-system, sans-serif", "center", "top");
        // action badge for health states
        if (isHealth) {
          const txt = act === TRANSPLANT ? "TRANSPLANT" : "WAIT";
          label(ctx, txt, cx, baseY + 22, col, "700 10px -apple-system, sans-serif", "center", "top");
        }
      }

      // baseline
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, baseY); ctx.lineTo(padL + plotW, baseY); ctx.stroke();

      // readouts
      readout.querySelector('[data-r="iter"]').textContent = k;
      readout.querySelector('[data-r="gap"]').textContent =
        k === 0 ? "—" : gaps[k - 1] < 1e-4 ? gaps[k - 1].toExponential(1) : gaps[k - 1].toFixed(3);
      const stable = k >= trace.length - 1;
      const polEl = readout.querySelector('[data-r="pol"]');
      if (stable) {
        polEl.innerHTML = "wait &middot; transplant &middot; transplant";
        polEl.style.color = p.text;
      } else {
        polEl.textContent = HEALTH.map(s => greedy(V, s, lambda) === TRANSPLANT ? "T" : "W").join(" · ");
        polEl.style.color = p.dim;
      }
    }

    const r = responsive(body, canvas, 0.62, draw);

    let raf = null, last = 0, running = true;
    function frame(ts) {
      if (!running) return;
      if (!last) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      pos += dt * RATE;
      if (pos >= trace.length - 1) { pos = trace.length - 1; running = false; bPlay.textContent = "Replay"; draw(canvas.getContext("2d"), r.w, r.h); return; }
      draw(canvas.getContext("2d"), r.w, r.h);
      raf = requestAnimationFrame(frame);
    }
    function play() {
      if (pos >= trace.length - 1) pos = 0;
      running = true; last = 0; bPlay.textContent = "Pause";
      raf = requestAnimationFrame(frame);
    }
    function pause() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; bPlay.textContent = "Play"; }

    bPlay.addEventListener("click", () => (running ? pause() : play()));
    bReset.addEventListener("click", () => { pos = 0; running = false; last = 0; if (raf) cancelAnimationFrame(raf); raf = null; bPlay.textContent = "Play"; draw(canvas.getContext("2d"), r.w, r.h); });

    let userPaused = false;
    bPlay.addEventListener("click", () => { userPaused = running ? false : true; });
    whenVisible(mount,
      () => { if (!userPaused && pos < trace.length - 1) play(); },
      () => { if (raf) { cancelAnimationFrame(raf); raf = null; running = false; last = 0; } },
      0.4);
  }

  /* ============================================ 2. discount factor / option value */
  function vizDiscount(mount) {
    const thresh = goodWaitThreshold();

    const body = card(mount,
      "Why the healthiest patient waits",
      "For each health state, compare the value of acting now against waiting one more period. Transplanting pays more the healthier you are (100 / 75 / 60), but waiting keeps the option open. Drag the discount factor &lambda;: patient futures (high &lambda;) make waiting worth it; impatient ones (low &lambda;) tip every state toward transplanting now.");
    body.appendChild(el("div", "mdpviz__legend",
      '<span class="l-wait">Q(wait)</span>' +
      '<span class="l-trans">Q(transplant now)</span>'));
    const wrap = el("div", "mdpviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "mdpviz__controls");
    const c1 = el("div", "mdpviz__control");
    const lab = el("label", null, "<span>Discount factor &lambda;</span><b></b>");
    const sl = slider(50, 99, 1, 95);       // lambda * 100
    c1.appendChild(lab); c1.appendChild(sl); controls.appendChild(c1);
    body.appendChild(controls);

    const readout = el("div", "mdpviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="mdpviz__stat"><span class="k">optimal policy</span><span class="v" data-r="pol"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">value of Good state</span><span class="v" data-r="vg"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">Good waits only when</span><span class="v" data-r="thr"></span></div>';
    const note = el("p", "mdpviz__note"); body.appendChild(note);

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const lambda = (+sl.value) / 100;
      const sol = solve(lambda);
      const YMAX = 130;

      const padL = 16, padR = 12, padT = 16, padB = 42;
      const plotW = w - padL - padR, plotH = h - padT - padB;
      const baseY = padT + plotH;
      const yOf = v => baseY - (Math.max(0, v) / YMAX) * plotH;

      const n = HEALTH.length, slot = plotW / n;
      for (let i = 0; i < n; i++) {
        const s = HEALTH[i];
        const cx = padL + slot * (i + 0.5);
        const qw = sol.Q[WAIT][s], qt = sol.Q[TRANSPLANT][s];
        const chosen = qt > qw ? TRANSPLANT : WAIT;
        const bw = Math.min(slot * 0.3, 46), gap = 6;
        const pairs = [
          { v: qw, col: p.wait,  act: WAIT },
          { v: qt, col: p.trans, act: TRANSPLANT },
        ];
        pairs.forEach((d, j) => {
          const bx = cx - bw - gap / 2 + j * (bw + gap);
          const top = yOf(d.v);
          ctx.fillStyle = d.col; ctx.globalAlpha = d.act === chosen ? 1 : 0.4;
          roundRect(ctx, bx, top, bw, baseY - top, 4); ctx.fill();
          ctx.globalAlpha = 1;
          if (d.act === chosen) {
            ctx.strokeStyle = d.col; ctx.lineWidth = 2;
            roundRect(ctx, bx - 1, top - 1, bw + 2, baseY - top + 2, 5); ctx.stroke();
          }
          label(ctx, d.v.toFixed(1), bx + bw / 2, top - 5, p.text, "600 12px -apple-system, sans-serif", "center", "bottom");
        });
        label(ctx, NAMES[s], cx, baseY + 6, p.dim, "12px -apple-system, sans-serif", "center", "top");
        const act = chosen === TRANSPLANT ? "transplant" : "wait";
        label(ctx, act, cx, baseY + 22, chosen === TRANSPLANT ? p.trans : p.wait, "700 11px -apple-system, sans-serif", "center", "top");
      }
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padL, baseY); ctx.lineTo(padL + plotW, baseY); ctx.stroke();

      // readouts
      lab.querySelector("b").textContent = lambda.toFixed(2);
      readout.querySelector('[data-r="vg"]').textContent = sol.V[0].toFixed(2);
      const polTxt = HEALTH.map(s => sol.policy[s] === TRANSPLANT ? "transplant" : "wait").join(" · ");
      readout.querySelector('[data-r="pol"]').textContent = polTxt;
      readout.querySelector('[data-r="thr"]').textContent = "λ ≥ " + thresh.toFixed(2);
      const goodWaits = sol.policy[0] === WAIT;
      note.innerHTML = goodWaits
        ? "<b>Good waits.</b> Its option value " + sol.V[0].toFixed(2) + " beats transplanting now (100): staying on the list and transplanting later is worth more than acting today."
        : "<b>Good transplants now.</b> With the future discounted this hard, the option value of waiting no longer clears the immediate payoff of 100 &mdash; so every health state acts immediately.";
    }
    const r = responsive(body, canvas, 0.6, draw);
    sl.addEventListener("input", r.relayout);
  }

  /* -------------------------------------------------------------------- bootstrap */
  const REG = { "value-iteration": vizValueIteration, "discount": vizDiscount };
  function boot() {
    document.querySelectorAll("[data-mdp]").forEach(node => {
      const fn = REG[node.getAttribute("data-mdp")];
      if (fn && !node.dataset.mdpReady) { node.dataset.mdpReady = "1"; try { fn(node); } catch (e) { console.error("mdpviz", e); } }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
