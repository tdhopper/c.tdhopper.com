/*
 * Interactive visualizations for
 * "When to Transplant: Value Iteration and Optimal Stopping".
 *
 * Dependency-free. The Markov decision process is solved exactly in the browser
 * (value iteration, discount lambda = 0.95): V* = (112.40, 75, 60, 0, 0),
 * optimal policy = (wait, transplant, transplant). Two widgets: a playable
 * simulator (you choose wait vs transplant against the real transition odds and
 * can die) and a discount-factor explorer that shows the control-limit policy flip.
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
  // Value iteration from V=0. Returns the fixed point plus per-iteration trace.
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

  /* ================================================== 1. play it yourself */
  function vizPlay(mount) {
    const Vstar = solve(0.95).V;              // optimal values, for the policy hint
    const START = 0;
    // node positions in fractional canvas coords
    const POS = { 0: [0.14, 0.30], 1: [0.36, 0.30], 2: [0.58, 0.30], 4: [0.86, 0.46], 3: [0.58, 0.80] };
    const SHORT = ["Good", "Fair", "Poor", "Death", "Transpl."];

    let health = START, reward = 0, period = 0, ended = null;   // ended: "T" | "D" | null
    let curNode = START;
    const stats = { runs: 0, sum: 0, best: 0 };
    const log = [];

    const body = card(mount,
      "Play it yourself: can you match the optimal policy?",
      "You start in <b>Good</b> health. Each period, <b>wait</b> (live another period for +17, but your health may slip or you may die) or <b>transplant now</b> (take the payoff and stop). Wait too long and you can leave with almost nothing. The optimal policy averages <b>112.40</b> starting from Good.");
    const wrap = el("div", "mdpviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const odds = el("p", "mdpviz__odds"); body.appendChild(odds);

    const controls = el("div", "mdpviz__controls");
    const btns = el("div", "mdpviz__buttons");
    const bWait = el("button", "mdpviz__btn", "Wait (+17)");
    const bTrans = el("button", "mdpviz__btn", "Transplant now");
    const bAgain = el("button", "mdpviz__btn", "Play again");
    btns.appendChild(bWait); btns.appendChild(bTrans); btns.appendChild(bAgain);
    controls.appendChild(btns); body.appendChild(controls);

    const readout = el("div", "mdpviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="mdpviz__stat"><span class="k">reward this run</span><span class="v" data-r="reward"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">optimal policy would</span><span class="v" data-r="hint"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">your average (runs)</span><span class="v" data-r="avg"></span></div>' +
      '<div class="mdpviz__stat"><span class="k">best run (optimal 112.40)</span><span class="v" data-r="best"></span></div>';
    const logEl = el("p", "mdpviz__note"); body.appendChild(logEl);

    function nodePix(i, w, h) { return [POS[i][0] * w, POS[i][1] * h]; }

    function edge(ctx, sx, sy, dx, dy, rad, color, text) {
      const a = Math.atan2(dy - sy, dx - sx);
      const x1 = sx + Math.cos(a) * rad, y1 = sy + Math.sin(a) * rad;
      const x2 = dx - Math.cos(a) * (rad + 7), y2 = dy - Math.sin(a) * (rad + 7);
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1.6; ctx.globalAlpha = 0.9;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - Math.cos(a - 0.4) * 7, y2 - Math.sin(a - 0.4) * 7);
      ctx.lineTo(x2 - Math.cos(a + 0.4) * 7, y2 - Math.sin(a + 0.4) * 7);
      ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
      label(ctx, text, (x1 + x2) / 2, (y1 + y2) / 2 - 3, color, "600 11px -apple-system, sans-serif", "center", "bottom");
    }

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const rad = Math.min(w * 0.062, 27);

      // choice edges from the current health state while the run is live
      if (ended === null) {
        const row = P[WAIT][health];
        const src = nodePix(health, w, h);
        for (let d = 0; d < 5; d++) {
          if (!row[d] || d === health) continue;
          const dst = nodePix(d, w, h);
          edge(ctx, src[0], src[1], dst[0], dst[1], rad, d === 3 ? p.alert : p.absorb, (row[d] * 100).toFixed(0) + "%");
        }
        const t = nodePix(4, w, h);
        edge(ctx, src[0], src[1], t[0], t[1], rad, p.trans, "+" + R[TRANSPLANT][health]);
      }

      // nodes
      [0, 1, 2, 4, 3].forEach(i => {
        const c = nodePix(i, w, h), absorb = i >= 3;
        ctx.beginPath(); ctx.arc(c[0], c[1], rad, 0, 2 * Math.PI);
        ctx.globalAlpha = absorb ? 0.2 : 1;
        ctx.fillStyle = absorb ? (i === 3 ? p.alert : p.trans) : p.bg; ctx.fill();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1.6; ctx.strokeStyle = absorb ? (i === 3 ? p.alert : p.trans) : p.dim; ctx.stroke();
        label(ctx, SHORT[i], c[0], c[1], p.text, "600 12px -apple-system, sans-serif", "center", "middle");
      });

      // the patient: a colored ring on the current node
      const b = nodePix(curNode, w, h);
      const tcol = ended === "D" ? p.alert : ended === "T" ? p.trans : p.wait;
      ctx.beginPath(); ctx.arc(b[0], b[1], rad + 4, 0, 2 * Math.PI);
      ctx.strokeStyle = tcol; ctx.lineWidth = 3; ctx.stroke();
    }

    const r = responsive(body, canvas, 0.58, draw);

    function setButtons() {
      const playing = ended === null;
      bWait.disabled = !playing; bTrans.disabled = !playing;
      bWait.style.display = ended === null ? "" : "none";
      bTrans.style.display = ended === null ? "" : "none";
      bAgain.style.display = ended === null ? "none" : "";
    }

    function update() {
      const p = palette(mount);
      draw(canvas.getContext("2d"), r.w, r.h);
      readout.querySelector('[data-r="reward"]').textContent = reward.toFixed(0);
      const hintEl = readout.querySelector('[data-r="hint"]');
      if (ended === null) {
        const act = greedy(Vstar, health, 0.95);
        hintEl.textContent = act === TRANSPLANT ? "transplant" : "wait";
        hintEl.style.color = act === TRANSPLANT ? p.trans : p.wait;
      } else { hintEl.textContent = "run over"; hintEl.style.color = p.dim; }
      readout.querySelector('[data-r="avg"]').textContent =
        stats.runs ? (stats.sum / stats.runs).toFixed(1) + " (" + stats.runs + ")" : "no runs yet";
      readout.querySelector('[data-r="best"]').textContent = stats.runs ? stats.best.toFixed(0) : "0";

      if (ended === null) {
        const row = P[WAIT][health], parts = [];
        for (let d = 0; d < 5; d++) {
          if (!row[d]) continue;
          const nm = d === health ? "stay " + NAMES[d] : d === 3 ? "die" : NAMES[d];
          parts.push((row[d] * 100).toFixed(0) + "% " + nm);
        }
        odds.innerHTML = "<b>Wait</b> from " + NAMES[health] + ": " + parts.join(", ") +
          ". &nbsp;&nbsp; <b>Transplant now</b>: +" + R[TRANSPLANT][health] + ".";
      } else {
        odds.innerHTML = ended === "T"
          ? "<b>Transplanted from " + NAMES[health] + ".</b> Final reward " + reward.toFixed(0) + ". The optimal policy averages 112.40 from Good."
          : "<b>Died while waiting.</b> Final reward " + reward.toFixed(0) + ". That is the risk of holding out too long.";
      }
      logEl.innerHTML = log.slice(0, 4).map((s, i) =>
        '<span style="opacity:' + (1 - i * 0.22).toFixed(2) + '">' + s + "</span>").join("<br>");
      setButtons();
    }

    function sampleNext() {
      const row = P[WAIT][health]; let x = Math.random(), acc = 0;
      for (let j = 0; j < 5; j++) { acc += row[j]; if (x < acc) return j; }
      return 3;
    }
    function finish() { stats.runs += 1; stats.sum += reward; if (reward > stats.best) stats.best = reward; }

    function doWait() {
      if (ended !== null) return;
      reward += 17; period += 1;
      const d = sampleNext();
      if (d === 3) { ended = "D"; curNode = 3; finish(); log.unshift("Period " + period + ": waited (+17), then died."); }
      else {
        const moved = d !== health; health = d; curNode = d;
        log.unshift("Period " + period + ": waited (+17), " + (moved ? "declined to " + NAMES[d] : "held at " + NAMES[d]) + ".");
      }
      update();
    }
    function doTransplant() {
      if (ended !== null) return;
      const pay = R[TRANSPLANT][health];
      reward += pay; period += 1; ended = "T"; curNode = 4; finish();
      log.unshift("Period " + period + ": transplanted from " + NAMES[health] + " (+" + pay + ").");
      update();
    }
    function reset() {
      health = START; reward = 0; period = 0; ended = null;
      curNode = START;
      log.length = 0; log.unshift("New patient admitted in Good health.");
      update();
    }

    bWait.addEventListener("click", doWait);
    bTrans.addEventListener("click", doTransplant);
    bAgain.addEventListener("click", reset);
    reset();
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
        : "<b>Good transplants now.</b> With the future discounted this hard, the option value of waiting no longer clears the immediate payoff of 100, so every health state acts immediately.";
    }
    const r = responsive(body, canvas, 0.6, draw);
    sl.addEventListener("input", r.relayout);
  }

  /* -------------------------------------------------------------------- bootstrap */
  const REG = { "play": vizPlay, "discount": vizDiscount };
  function boot() {
    document.querySelectorAll("[data-mdp]").forEach(node => {
      const fn = REG[node.getAttribute("data-mdp")];
      if (fn && !node.dataset.mdpReady) { node.dataset.mdpReady = "1"; try { fn(node); } catch (e) { console.error("mdpviz", e); } }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
