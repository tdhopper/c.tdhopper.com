/*
 * Interactive visualizations for
 * "The Shortcomings of the Small Angle Approximation for Oscillating Systems".
 *
 * Dependency-free. All physics is exact:
 *   - Pendulum period via the complete elliptic integral K, evaluated with the
 *     arithmetic-geometric mean (machine precision):  T/T0 = 1 / AGM(1, cos(theta0/2)).
 *   - Millet / Kidd-Fogg correction:  T/T0 = 1 / sqrt(cos(theta0/2)).
 *   - Exact large-angle motion by RK4 integration of  theta'' = -sin(theta).
 * These reproduce the paper's error figures exactly (30 deg: 1.7% / 0.0075%; 90 deg: 15% / 0.75%).
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ physics */
  function agm(a, b) {
    for (let i = 0; i < 100; i++) {
      const a1 = (a + b) / 2, b1 = Math.sqrt(a * b);
      if (Math.abs(a1 - b1) <= 1e-16 * a1) return (a1 + b1) / 2;
      a = a1; b = b1;
    }
    return (a + b) / 2;
  }
  // Complete elliptic integral of the first kind, modulus k.
  function ellipticK(k) { return Math.PI / (2 * agm(1, Math.sqrt(1 - k * k))); }

  const Texact  = t0 => (2 / Math.PI) * ellipticK(Math.sin(t0 / 2)); // = 1/agm(1,cos(t0/2))
  const Tmillet = t0 => 1 / Math.sqrt(Math.cos(t0 / 2));
  const Tseries = t0 => 1 + t0 * t0 / 16 + 11 * Math.pow(t0, 4) / 3072;

  const DEG = Math.PI / 180;
  const fmtPct = x => (x >= 10 ? x.toFixed(1) : x >= 1 ? x.toFixed(2) : x.toFixed(3)) + "%";

  /* -------------------------------------------------------------------- theme */
  const redraws = [];
  function palette(el) {
    const cs = getComputedStyle(el);
    const g = n => cs.getPropertyValue(n).trim();
    return {
      exact:  g("--saviz-exact")  || "#3b7df0",
      millet: g("--saviz-millet") || "#16a085",
      small:  g("--saviz-small")  || "#e8853b",
      alert:  g("--saviz-alert")  || "#e0553e",
      neutral:g("--saviz-neutral")|| "#9aa4b0",
      text:   g("--card-text-color-main") || "#111",
      dim:    g("--card-text-color-secondary") || "#666",
      sep:    g("--card-separator-color") || "rgba(128,128,128,0.3)",
      bg:     g("--card-background") || "#fff",
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
  // Linear map factory for a plot region in pixel space.
  function mapper(px, py, pw, ph, xmin, xmax, ymin, ymax) {
    return {
      X: x => px + (x - xmin) / (xmax - xmin) * pw,
      Y: y => py + ph - (y - ymin) / (ymax - ymin) * ph,
      px, py, pw, ph, xmin, xmax, ymin, ymax,
    };
  }
  function line(ctx, m, f, color, width, dash) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = width || 2;
    ctx.strokeStyle = color;
    ctx.setLineDash(dash || []);
    ctx.lineJoin = "round";
    const N = Math.max(40, Math.round(m.pw));
    let started = false;
    for (let i = 0; i <= N; i++) {
      const x = m.xmin + (m.xmax - m.xmin) * i / N;
      const y = f(x);
      if (!isFinite(y)) { started = false; continue; }
      const px = m.X(x), py = m.Y(Math.max(m.ymin, Math.min(m.ymax, y)));
      if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }
  function dot(ctx, x, y, r, color) {
    ctx.beginPath(); ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill();
  }
  function label(ctx, text, x, y, color, font, align, baseline) {
    ctx.fillStyle = color;
    ctx.font = font || "12px -apple-system, sans-serif";
    ctx.textAlign = align || "left";
    ctx.textBaseline = baseline || "alphabetic";
    ctx.fillText(text, x, y);
  }

  /* ----------------------------------------------------------------- scaffold */
  function card(mount, title, sub) {
    mount.classList.add("saviz");
    mount.innerHTML =
      '<p class="saviz__title">' + title + "</p>" +
      (sub ? '<p class="saviz__sub">' + sub + "</p>" : "") +
      '<div class="saviz__body"></div>';
    return mount.querySelector(".saviz__body");
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
  // Responsive: re-fit canvas to card width, call draw(ctx, w, h). Registers redraw.
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
    return { relayout, get w() { return w; }, get h() { return h; } };
  }
  // Pause animation when the widget scrolls out of view.
  function whenVisible(node, onShow, onHide) {
    new IntersectionObserver(es => {
      es.forEach(e => (e.isIntersecting ? onShow() : onHide()));
    }, { threshold: 0.01 }).observe(node);
  }

  /* ============================================================ 1. theta vs sin */
  function vizApprox(mount) {
    const body = card(mount,
      "The approximation itself: sin&thinsp;&theta; &asymp; &theta;",
      "Drag the angle. The straight line is the approximation used in the textbook derivation; the curve is the truth. Watch the gap open up.");
    body.appendChild(el("div", "saviz__legend",
      '<span class="l-small">y = &theta; (approximation)</span>' +
      '<span class="l-exact">y = sin&thinsp;&theta; (exact)</span>' +
      '<span class="l-alert">error</span>'));
    const wrap = el("div", "saviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "saviz__controls");
    const c1 = el("div", "saviz__control");
    const lab = el("label", null, '<span>Amplitude &theta;</span><b></b>');
    const sl = slider(1, 120, 0.5, 35);
    c1.appendChild(lab); c1.appendChild(sl); controls.appendChild(c1);
    body.appendChild(controls);

    const readout = el("div", "saviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="saviz__stat"><span class="k">&theta; (radians)</span><span class="v" data-r="rad"></span></div>' +
      '<div class="saviz__stat"><span class="k">sin&thinsp;&theta;</span><span class="v" data-r="sin"></span></div>' +
      '<div class="saviz__stat"><span class="k">relative error &theta; vs sin&thinsp;&theta;</span><span class="v" data-r="err"></span></div>';

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const t0 = +sl.value * DEG;
      const xmax = 120 * DEG;
      const m = mapper(46, 14, w - 62, h - 40, 0, xmax, 0, xmax);

      // grid + axes
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let d = 0; d <= 120; d += 30) {
        const x = m.X(d * DEG); ctx.moveTo(x, m.py); ctx.lineTo(x, m.py + m.ph);
        label(ctx, d + "°", x, m.py + m.ph + 15, p.dim, "11px sans-serif", "center");
      }
      for (let v = 0; v <= 2; v += 0.5) {
        const y = m.Y(v); if (y < m.py) continue;
        ctx.moveTo(m.px, y); ctx.lineTo(m.px + m.pw, y);
        label(ctx, v.toFixed(1), m.px - 7, y, p.dim, "11px sans-serif", "right", "middle");
      }
      ctx.stroke();

      // error band between the curves up to t0
      ctx.save(); ctx.beginPath();
      const N = 80;
      for (let i = 0; i <= N; i++) { const x = t0 * i / N; ctx[i ? "lineTo" : "moveTo"](m.X(x), m.Y(x)); }
      for (let i = N; i >= 0; i--) { const x = t0 * i / N; ctx.lineTo(m.X(x), m.Y(Math.sin(x))); }
      ctx.closePath(); ctx.fillStyle = p.alert + "33"; ctx.fill(); ctx.restore();

      line(ctx, m, x => x, p.small, 2.5);           // y = theta
      line(ctx, m, x => Math.sin(x), p.exact, 2.5); // y = sin theta

      // markers at t0
      const yA = m.Y(t0), yS = m.Y(Math.sin(t0)), xM = m.X(t0);
      ctx.strokeStyle = p.alert; ctx.lineWidth = 2; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(xM, yA); ctx.lineTo(xM, yS); ctx.stroke(); ctx.setLineDash([]);
      dot(ctx, xM, yA, 4.5, p.small); dot(ctx, xM, yS, 4.5, p.exact);

      const err = (t0 - Math.sin(t0)) / Math.sin(t0) * 100;
      readout.querySelector('[data-r="rad"]').textContent = t0.toFixed(3);
      readout.querySelector('[data-r="sin"]').textContent = Math.sin(t0).toFixed(3);
      const ev = readout.querySelector('[data-r="err"]');
      ev.textContent = fmtPct(err);
      ev.style.color = err > 5 ? p.alert : err > 1 ? p.small : p.millet;
      lab.querySelector("b").textContent = (+sl.value).toFixed(1) + "°";
    }
    const r = responsive(body, canvas, 0.62, draw);
    sl.addEventListener("input", r.relayout);
  }

  /* ========================================================= 2. animated pendulum */
  function vizPendulum(mount) {
    const body = card(mount,
      "See it fail: exact swing vs the textbook prediction",
      "Both pendulums are released from rest at the same angle. Orange obeys the small-angle prediction &theta;&#8320;cos(&omega;&#8320;t); blue is the true motion. At small angles they lock together. Open the angle and the true pendulum falls behind — its period is longer.");
    body.appendChild(el("div", "saviz__legend",
      '<span class="l-exact">exact pendulum</span>' +
      '<span class="l-small">small-angle prediction</span>'));
    const wrap = el("div", "saviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "saviz__controls");
    const c1 = el("div", "saviz__control");
    const lab = el("label", null, '<span>Release angle &theta;&#8320;</span><b></b>');
    const sl = slider(5, 175, 1, 90);
    c1.appendChild(lab); c1.appendChild(sl); controls.appendChild(c1);
    const btns = el("div", "saviz__buttons");
    const bPlay = el("button", "saviz__btn", "Pause");
    const bReset = el("button", "saviz__btn", "Reset");
    btns.appendChild(bPlay); btns.appendChild(bReset); controls.appendChild(btns);
    body.appendChild(controls);

    const readout = el("div", "saviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="saviz__stat"><span class="k">true period T / T&#8320;</span><span class="v" data-r="ratio"></span></div>' +
      '<div class="saviz__stat"><span class="k">extra time per swing</span><span class="v" data-r="extra"></span></div>' +
      '<div class="saviz__stat"><span class="k">angle gap (exact &minus; approx)</span><span class="v" data-r="lag"></span></div>';

    // simulation state (units: omega0 = 1, so small-angle period = 2*pi)
    let th0 = +sl.value * DEG, te = th0, we = 0, t = 0;
    const buf = []; // {t, e, s}
    const SIM_PER_SEC = 1.7, WINDOW = 6 * Math.PI; // ~3 small-angle periods on the strip chart

    function step(dt) {
      // RK4 on [theta, omega], d/dt = [omega, -sin theta]
      const sub = 0.004; let rem = dt;
      while (rem > 1e-9) {
        const s = Math.min(sub, rem); rem -= s;
        const f = (a, w) => [w, -Math.sin(a)];
        const k1 = f(te, we);
        const k2 = f(te + s / 2 * k1[0], we + s / 2 * k1[1]);
        const k3 = f(te + s / 2 * k2[0], we + s / 2 * k2[1]);
        const k4 = f(te + s * k3[0], we + s * k3[1]);
        te += s / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
        we += s / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
        t += s;
      }
      const ts = th0 * Math.cos(t); // small-angle prediction
      buf.push({ t: t, e: te, s: ts });
      while (buf.length && buf[0].t < t - WINDOW) buf.shift();
    }
    // Pre-roll one window so the first painted frame already shows the divergence,
    // even when the tab is backgrounded (requestAnimationFrame throttled) or motion is reduced.
    function reset() {
      th0 = +sl.value * DEG; te = th0; we = 0; t = 0; buf.length = 0;
      while (t < WINDOW) step(0.05);
    }

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const split = Math.min(w * 0.42, h - 8);
      // ---- left: pendulums (pivot centered so the bob fits at any angle up to 175 deg) ----
      const cx = split / 2, pivY = h / 2, L = Math.min(split / 2 - 12, (h - 16) / 2);
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, pivY, 3, 0, 2 * Math.PI); ctx.stroke();
      // reference vertical (equilibrium)
      ctx.setLineDash([3, 4]); ctx.beginPath();
      ctx.moveTo(cx, pivY); ctx.lineTo(cx, pivY + L + 6); ctx.stroke(); ctx.setLineDash([]);
      const ts = th0 * Math.cos(t);
      function drawP(ang, color, r) {
        const x = cx + L * Math.sin(ang), y = pivY + L * Math.cos(ang);
        ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.globalAlpha = 0.95;
        ctx.beginPath(); ctx.moveTo(cx, pivY); ctx.lineTo(x, y); ctx.stroke();
        dot(ctx, x, y, r, color); ctx.globalAlpha = 1;
      }
      drawP(ts, p.small, 8);
      drawP(te, p.exact, 8);

      // ---- right: strip chart theta(t) ----
      const gx = split + 14, gw = w - split - 22, gy = 12, gh = h - 30;
      const amp = Math.max(th0, 0.2) * 1.05;
      const m = mapper(gx, gy, gw, gh, t - WINDOW, t, -amp, amp);
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(gx, m.Y(0)); ctx.lineTo(gx + gw, m.Y(0)); ctx.stroke();
      label(ctx, "θ(t)", gx, gy + 2, p.dim, "11px sans-serif", "left", "top");
      function trace(key, color) {
        ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2; let st = false;
        for (const s of buf) {
          const X = m.X(s.t), Y = m.Y(Math.max(-amp, Math.min(amp, s[key])));
          if (!st) { ctx.moveTo(X, Y); st = true; } else ctx.lineTo(X, Y);
        }
        ctx.stroke();
      }
      trace("s", p.small); trace("e", p.exact);
      // leading dots
      if (buf.length) {
        const last = buf[buf.length - 1];
        dot(ctx, m.X(last.t), m.Y(Math.max(-amp, Math.min(amp, last.s))), 3.5, p.small);
        dot(ctx, m.X(last.t), m.Y(Math.max(-amp, Math.min(amp, last.e))), 3.5, p.exact);
      }

      // readouts
      const ratio = Texact(th0);
      readout.querySelector('[data-r="ratio"]').textContent = ratio.toFixed(4);
      readout.querySelector('[data-r="extra"]').textContent = "+" + fmtPct((ratio - 1) * 100);
      // phase lag: fraction of a small-angle period between the two zero-crossings ~ (t - t*)/... approximate via angle diff
      const lag = ((te - ts));
      readout.querySelector('[data-r="lag"]').textContent = (lag >= 0 ? "+" : "") + lag.toFixed(2) + " rad";
      lab.querySelector("b").textContent = (+sl.value).toFixed(0) + "°";
    }

    const r = responsive(body, canvas, 0.5, draw);

    let raf = null, last = 0, running = true;
    function frame(ts) {
      if (!running) return;
      if (!last) last = ts;
      let dt = (ts - last) / 1000; last = ts;
      dt = Math.min(dt, 0.05) * SIM_PER_SEC; // clamp tab-switch jumps
      step(dt);
      draw(canvas.getContext("2d"), r.w, r.h);
      raf = requestAnimationFrame(frame);
    }
    function play() { if (running && raf) return; running = true; last = 0; bPlay.textContent = "Pause"; raf = requestAnimationFrame(frame); }
    function pause() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; bPlay.textContent = "Play"; }

    bPlay.addEventListener("click", () => (running ? pause() : play()));
    bReset.addEventListener("click", () => { reset(); r.relayout(); });
    sl.addEventListener("input", () => { reset(); r.relayout(); lab.querySelector("b").textContent = (+sl.value).toFixed(0) + "°"; });

    let userPaused = false;
    whenVisible(mount,
      () => { if (!userPaused) play(); },
      () => { if (raf) { cancelAnimationFrame(raf); raf = null; running = false; last = 0; } });
    // track explicit user intent so scrolling back doesn't override a manual pause
    bPlay.addEventListener("click", () => { userPaused = !running ? false : true; });
    reset();
  }

  /* ======================================================= 3. period vs amplitude */
  function vizPeriod(mount) {
    const body = card(mount,
      "The payoff: how the period grows with amplitude",
      "The textbook says the period never changes with amplitude (flat orange line). It does. Drag the cursor to compare the flat approximation, Millet's correction, and the exact elliptic-integral period.");
    body.appendChild(el("div", "saviz__legend",
      '<span class="l-small">small-angle (constant)</span>' +
      '<span class="l-millet">Millet correction</span>' +
      '<span class="l-exact">exact</span>'));
    const wrap = el("div", "saviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "saviz__controls");
    const c1 = el("div", "saviz__control");
    const lab = el("label", null, '<span>Amplitude &theta;&#8320;</span><b></b>');
    const sl = slider(1, 179, 1, 90);
    c1.appendChild(lab); c1.appendChild(sl); controls.appendChild(c1);
    body.appendChild(controls);

    const readout = el("div", "saviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="saviz__stat"><span class="k">exact T / T&#8320;</span><span class="v" data-r="ex"></span></div>' +
      '<div class="saviz__stat"><span class="k">small-angle error</span><span class="v" data-r="es"></span></div>' +
      '<div class="saviz__stat"><span class="k">Millet error</span><span class="v" data-r="em"></span></div>';

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const xmax = 180, ymax = 2.6;
      const m = mapper(48, 14, w - 64, h - 40, 0, xmax, 1, ymax);

      ctx.strokeStyle = p.sep; ctx.lineWidth = 1; ctx.beginPath();
      for (let d = 0; d <= 180; d += 30) {
        const x = m.X(d); ctx.moveTo(x, m.py); ctx.lineTo(x, m.py + m.ph);
        label(ctx, d + "°", x, m.py + m.ph + 15, p.dim, "11px sans-serif", "center");
      }
      for (let v = 1; v <= 2.5; v += 0.5) {
        const y = m.Y(v); ctx.moveTo(m.px, y); ctx.lineTo(m.px + m.pw, y);
        label(ctx, v.toFixed(1), m.px - 7, y, p.dim, "11px sans-serif", "right", "middle");
      }
      ctx.stroke();
      label(ctx, "T / T₀", m.px - 7, m.py - 2, p.dim, "11px sans-serif", "right", "bottom");

      line(ctx, m, () => 1, p.small, 2.5);
      line(ctx, m, d => Tmillet(d * DEG), p.millet, 2.5);
      line(ctx, m, d => Texact(d * DEG), p.exact, 2.5);

      // reference dots from the paper (30, 90 deg)
      [30, 90].forEach(d => dot(ctx, m.X(d), m.Y(Texact(d * DEG)), 3, p.exact));

      // cursor
      const d0 = +sl.value;
      const xC = m.X(d0);
      ctx.strokeStyle = p.dim; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(xC, m.py); ctx.lineTo(xC, m.py + m.ph); ctx.stroke(); ctx.setLineDash([]);
      const ex = Texact(d0 * DEG), mi = Tmillet(d0 * DEG);
      dot(ctx, xC, m.Y(1), 5, p.small);
      dot(ctx, xC, m.Y(Math.min(ymax, mi)), 5, p.millet);
      dot(ctx, xC, m.Y(Math.min(ymax, ex)), 5, p.exact);

      readout.querySelector('[data-r="ex"]').textContent = ex.toFixed(4);
      const es = readout.querySelector('[data-r="es"]');
      es.textContent = fmtPct(Math.abs(1 - ex) / ex * 100); es.style.color = p.small;
      const em = readout.querySelector('[data-r="em"]');
      em.textContent = fmtPct(Math.abs(mi - ex) / ex * 100); em.style.color = p.millet;
      lab.querySelector("b").textContent = d0 + "°";
    }
    const r = responsive(body, canvas, 0.6, draw);
    sl.addEventListener("input", r.relayout);
  }

  /* ===================================================== 4. nonlinear potentials */
  function vizPotential(mount) {
    const SYS = {
      spring:   { name: "Ideal spring", V: x => x * x, one: false, shm: true,
                  curv: "constant", verdict: "Simple harmonic ✓",
                  note: "The textbook oscillator. The well is a parabola at every scale, so the matched parabola sits exactly on top of it." },
      pendulum: { name: "Pendulum", V: x => 1 - Math.cos(x), one: false, shm: true,
                  curv: "nonzero", verdict: "Simple harmonic ✓ (small &theta; only)",
                  note: "Near the bottom V ≈ &theta;²/2, so it looks parabolic for small swings — the whole point of the paper. Zoom out and it drifts below the parabola: the period lengthens." },
      tethered: { name: "Tethered mass (double spring)", V: x => Math.pow(Math.sqrt(1 + x * x) - 1, 2), one: false, shm: false,
                  curv: "zero", verdict: "Intrinsically nonlinear ✗",
                  note: "Leading term ∝ x⁴. The bottom of the well is flatter than any parabola, so no matched parabola fits — there is no small-angle regime. This is the paper's key example." },
      ball:     { name: "Bouncing ball", V: x => (x >= 0 ? x : Infinity), one: true, shm: false,
                  curv: "corner", verdict: "Intrinsically nonlinear ✗",
                  note: "V = mgx has a sharp corner at x = 0 and is not differentiable there, so it has no Taylor series — the approximation can't even be written down." },
    };
    const order = ["spring", "pendulum", "tethered", "ball"];
    let cur = "tethered";

    const body = card(mount,
      "Why some oscillators are <em>intrinsically</em> nonlinear",
      "Simple harmonic motion needs a potential well shaped like a parabola at the bottom. Pick a system and zoom into its minimum. If a parabola (dashed) can hug the curve, you get SHM; if it can't, the system is nonlinear no matter how small the swing.");
    const seg = el("div", "saviz__seg");
    order.forEach(k => {
      const b = el("button", null, SYS[k].name);
      b.setAttribute("aria-pressed", k === cur ? "true" : "false");
      b.addEventListener("click", () => { cur = k; update(); });
      seg.appendChild(b);
    });
    body.appendChild(seg);
    body.appendChild(el("div", "saviz__legend",
      '<span class="l-exact">potential V(x)</span>' +
      '<span class="l-small">matched parabola</span>'));
    const wrap = el("div", "saviz__canvas-wrap");
    const canvas = el("canvas"); wrap.appendChild(canvas); body.appendChild(wrap);

    const controls = el("div", "saviz__controls");
    const c1 = el("div", "saviz__control");
    const lab = el("label", null, '<span>Zoom into the minimum</span><b></b>');
    const sl = slider(0, 100, 1, 55);
    c1.appendChild(lab); c1.appendChild(sl); controls.appendChild(c1);
    body.appendChild(controls);

    const readout = el("div", "saviz__readout"); body.appendChild(readout);
    readout.innerHTML =
      '<div class="saviz__stat"><span class="k">curvature at minimum V&Prime;(0)</span><span class="v" data-r="curv"></span></div>' +
      '<div class="saviz__stat"><span class="k">leading behavior near 0</span><span class="v" data-r="lead"></span></div>' +
      '<div class="saviz__stat"><span class="k">verdict</span><span class="v" data-r="verdict"></span></div>';
    const note = el("p", "saviz__note"); body.appendChild(note);

    function leadPower(V) {
      // numerically estimate exponent n from V(x) ~ x^n near 0 via log-log slope
      const a = 1e-3, b = 4e-3;
      return Math.log(V(b) / V(a)) / Math.log(b / a);
    }

    function draw(ctx, w, h) {
      const p = palette(mount);
      ctx.clearRect(0, 0, w, h);
      const S = SYS[cur];
      // zoom: window half-width from 2.2 down to 0.12
      const xr = 2.2 * Math.pow(0.12 / 2.2, +sl.value / 100);
      const xmin = S.one ? 0 : -xr, xmax = xr;
      const Vedge = Math.max(S.V(xmax), S.one ? 0 : S.V(xmin)) || 1;
      const m = mapper(30, 14, w - 46, h - 34, xmin, xmax, 0, Vedge * 1.08);

      // axes
      ctx.strokeStyle = p.sep; ctx.lineWidth = 1; ctx.beginPath();
      const x0 = m.X(0); ctx.moveTo(x0, m.py); ctx.lineTo(x0, m.py + m.ph);
      ctx.moveTo(m.px, m.py + m.ph); ctx.lineTo(m.px + m.pw, m.py + m.ph); ctx.stroke();
      label(ctx, "x", m.px + m.pw, m.py + m.ph - 4, p.dim, "11px sans-serif", "right", "bottom");
      label(ctx, "V", x0 + 4, m.py + 2, p.dim, "11px sans-serif", "left", "top");

      // matched parabola: p(x) = Vedge*(x/xr)^2  (equals curve value at the window edge)
      if (!S.one) line(ctx, m, x => Vedge * (x / xr) * (x / xr), p.small, 2, [6, 5]);
      else line(ctx, m, x => Vedge * (x / xr) * (x / xr), p.small, 2, [6, 5]);
      // potential
      line(ctx, m, x => S.V(x), p.exact, 2.75);
      dot(ctx, m.X(0), m.Y(0), 4, p.exact);

      // readouts
      readout.querySelector('[data-r="curv"]').textContent =
        S.curv === "constant" ? "constant > 0" : S.curv === "nonzero" ? "> 0" : S.curv === "zero" ? "= 0" : "undefined";
      const n = S.one ? 1 : leadPower(S.V);
      readout.querySelector('[data-r="lead"]').innerHTML =
        S.curv === "corner" ? "|x| (corner)" : "&asymp; x<sup>" + Math.round(n) + "</sup>";
      const vv = readout.querySelector('[data-r="verdict"]');
      vv.innerHTML = S.verdict; vv.style.color = S.shm ? p.millet : p.alert;
      note.innerHTML = "<b>" + S.name + ".</b> " + S.note;
      lab.querySelector("b").textContent = "±" + xr.toFixed(2);
      // reflect active button
      [...seg.children].forEach((b, i) => b.setAttribute("aria-pressed", order[i] === cur ? "true" : "false"));
    }
    let r;
    function update() { if (r) r.relayout(); }
    r = responsive(body, canvas, 0.6, draw);
    sl.addEventListener("input", r.relayout);
  }

  /* -------------------------------------------------------------------- bootstrap */
  const REG = { approx: vizApprox, pendulum: vizPendulum, period: vizPeriod, potential: vizPotential };
  function boot() {
    document.querySelectorAll("[data-viz]").forEach(node => {
      const fn = REG[node.getAttribute("data-viz")];
      if (fn && !node.dataset.savizReady) { node.dataset.savizReady = "1"; try { fn(node); } catch (e) { console.error("saviz", e); } }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
