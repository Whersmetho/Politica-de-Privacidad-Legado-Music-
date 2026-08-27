/* ===========================================================
   Legado Music — sistema de diseño "consola de sonido"
   Paleta cálida casi-negra + ámbar (señal en vivo) + verde (on-air)
   =========================================================== */

:root {
  --bg: #0b0c0c;
  --bg-2: #0e100f;
  --surface: #15181a;
  --surface-2: #1b1f21;
  --border: rgba(255, 255, 255, 0.09);
  --border-strong: rgba(255, 255, 255, 0.16);
  --text: #f2f4f2;
  --muted: #99a09c;
  --muted-2: #6d7472;
  --accent: #ff8a3d;
  --accent-soft: rgba(255, 138, 61, 0.14);
  --signal: #5eead4;
  --signal-soft: rgba(94, 234, 212, 0.14);
  --max-width: 1180px;
  --radius: 16px;
  --radius-sm: 10px;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  min-height: 100vh;
  font-family: var(--font-body);
  background:
    radial-gradient(circle at 15% -10%, rgba(255, 138, 61, 0.08), transparent 40%),
    radial-gradient(circle at 85% 0%, rgba(94, 234, 212, 0.06), transparent 38%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

img,
svg {
  display: block;
  max-width: 100%;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

.container {
  width: min(var(--max-width), calc(100% - 40px));
  margin: 0 auto;
}

.skip-link {
  position: absolute;
  left: 14px;
  top: -60px;
  z-index: 200;
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: #14100a;
  font-weight: 700;
  font-size: 14px;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 14px;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  font-weight: 600;
}

/* ===== HEADER ===== */

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 12, 12, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}

.nav {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap;
}

.logo-mark {
  width: 38px;
  height: 38px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(155deg, var(--accent), #ffcf8a 130%);
  box-shadow: 0 8px 22px rgba(255, 138, 61, 0.22);
}

.logo-mark svg {
  width: 20px;
  height: 20px;
}

.navlinks {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.navlinks a {
  position: relative;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.navlinks a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -2px;
  height: 1.5px;
  background: var(--accent);
  transition: right 0.25s ease;
}

.navlinks a:hover {
  color: #ffffff;
}

.navlinks a:hover::after,
.navlinks a[aria-current="page"]::after {
  right: 0;
}

.navlinks a[aria-current="page"] {
  color: #ffffff;
}

.navlinks-cta {
  display: none;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.nav-toggle svg {
  width: 18px;
  height: 18px;
}

.nav-toggle .icon-close {
  display: none;
}

.nav-toggle[aria-expanded="true"] .icon-open {
  display: none;
}

.nav-toggle[aria-expanded="true"] .icon-close {
  display: block;
}

/* ===== BUTTONS ===== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 11px 20px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #17120b;
  border: 0;
  background: linear-gradient(120deg, var(--accent), #ffc077);
  box-shadow: 0 10px 26px rgba(255, 138, 61, 0.18);
}

.btn-secondary {
  background: var(--surface);
  color: var(--text);
}

.btn-secondary:hover {
  border-color: var(--border-strong);
}

.btn-ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--muted);
}

.btn[disabled],
.btn.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none !important;
}

.btn-block {
  width: 100%;
}

/* ===== EYEBROW / TAG (console label) ===== */

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px 7px 10px;
  margin-bottom: 22px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.eyebrow .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 3px var(--signal-soft);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ===== HERO ===== */

.hero {
  padding: 96px 0 70px;
  text-align: center;
  position: relative;
}

.hero h1 {
  max-width: 900px;
  margin: 0 auto;
  font-size: clamp(42px, 6.6vw, 74px);
  line-height: 1.03;
  letter-spacing: -2.5px;
}

.gradient {
  background: linear-gradient(100deg, #ffffff 10%, #ffcf9c 55%, var(--accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  max-width: 640px;
  margin: 22px auto 0;
  color: var(--muted);
  font-size: 17px;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 20px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 12px;
}

/* ===== EQUALIZER (signature element) ===== */

.equalizer {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  height: 64px;
  margin: 46px auto 0;
  max-width: 420px;
}

.equalizer span {
  flex: 1;
  min-width: 3px;
  max-width: 7px;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(180deg, var(--accent), var(--signal));
  opacity: 0.85;
  animation: eq 1.2s ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes eq {
  0%, 100% { transform: scaleY(0.25); }
  50% { transform: scaleY(1); }
}

.equalizer.is-mini {
  height: 22px;
  gap: 3px;
  margin: 0;
  max-width: 60px;
}

.equalizer.is-mini span {
  max-width: 3px;
}

/* ===== SECTIONS ===== */

.section {
  padding: 80px 0;
}

.section-head {
  max-width: 700px;
  margin: 0 auto 45px;
  text-align: center;
}

.section-head h2 {
  font-size: 33px;
  line-height: 1.2;
  letter-spacing: -1px;
}

.section-head p {
  margin-top: 10px;
  color: var(--muted);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card {
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: linear-gradient(180deg, var(--surface-2), var(--surface));
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: var(--border-strong);
  transform: translateY(-3px);
}

.icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border-radius: 11px;
  background: var(--accent-soft);
  font-size: 20px;
}

.card h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.card p {
  color: var(--muted);
  font-size: 14px;
}

.card-tag {
  display: inline-block;
  margin-top: 14px;
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
}

.cta {
  padding: 55px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background:
    radial-gradient(circle at 50% 0, var(--accent-soft), transparent 60%),
    var(--surface);
  text-align: center;
}

.cta h2 {
  font-size: 30px;
}

.cta p {
  color: var(--muted);
}

/* reveal-on-scroll */

[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* ===== FOOTER ===== */

footer {
  border-top: 1px solid var(--border);
  padding: 30px 0;
  color: var(--muted-2);
  font-size: 13px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 18px;
}

footer a:hover {
  color: #ffffff;
}

/* ===== LEGAL PAGES ===== */

.legal {
  padding: 70px 0;
}

.legal-layout {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  gap: 55px;
}

.toc {
  position: sticky;
  top: 95px;
  height: max-content;
  border-left: 1px solid var(--border);
  padding-left: 16px;
}

.toc a {
  display: block;
  padding: 6px 10px;
  border-radius: 8px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.toc a:hover {
  background: var(--surface);
  color: #ffffff;
}

.legal h1 {
  max-width: none;
  margin: 0;
  font-size: 46px;
  line-height: 1.1;
  letter-spacing: -2px;
}

.legal .intro {
  margin: 15px 0 45px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 13px;
}

.legal section {
  scroll-margin-top: 95px;
  margin-bottom: 46px;
}

.legal h2 {
  margin-bottom: 13px;
  font-size: 23px;
  line-height: 1.25;
}

.legal p {
  margin-bottom: 13px;
  color: #b7bab8;
}

.legal ul,
.legal ol {
  padding-left: 23px;
  color: #b7bab8;
}

.legal li {
  margin: 7px 0;
}

.legal strong {
  color: #eeeeee;
}

.legal a {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: rgba(255, 138, 61, 0.4);
}

/* ===== DASHBOARD PREVIEW ===== */

.dashboard-preview {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  min-height: 440px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
}

.dash-side {
  padding: 20px 14px;
  border-right: 1px solid var(--border);
}

.dash-side button {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.dash-side button:hover {
  background: var(--surface-2);
  color: var(--text);
}

.dash-side button.active {
  background: var(--accent-soft);
  color: #ffffff;
}

.dash-main {
  padding: 26px 28px;
}

.dash-main-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}

.dash-main h3 {
  font-size: 21px;
}

.dash-sub {
  color: var(--muted);
  font-size: 13.5px;
  margin-top: 4px;
}

.dash-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.stat {
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-2);
}

.stat-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.stat small {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.stat b {
  display: block;
  margin-top: 8px;
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 500;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface-2);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
}

.status-pill .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--muted-2);
}

.status-pill.is-live .dot {
  background: var(--signal);
  box-shadow: 0 0 0 3px var(--signal-soft);
}

/* ===== SUPPORT FORM ===== */

.support-form {
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: linear-gradient(180deg, var(--surface-2), var(--surface));
}

.field {
  margin-bottom: 16px;
}

.field label {
  display: block;
  margin-bottom: 7px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.field input,
.field textarea,
.field select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-2);
  color: var(--text);
  font: inherit;
  font-size: 14px;
  resize: vertical;
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: none;
  border-color: var(--accent);
}

.form-note {
  margin-top: 12px;
  color: var(--muted-2);
  font-size: 12.5px;
}

.form-note[hidden] {
  display: none;
}

/* ===== MOBILE ===== */

@media (max-width: 900px) {
  .nav-toggle {
    display: inline-flex;
  }

  .navlinks {
    position: fixed;
    inset: 72px 0 0 0;
    z-index: 90;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    padding: 14px;
    background: var(--bg);
    border-top: 1px solid var(--border);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .navlinks.is-open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .navlinks a {
    padding: 14px 10px;
    border-radius: 10px;
    font-size: 15px;
  }

  .navlinks a:hover {
    background: var(--surface);
  }

  .navlinks a::after {
    display: none;
  }

  .navlinks-cta {
    display: block;
    margin-top: 10px;
    text-align: center;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .legal-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .toc {
    position: static;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-left: 0;
    padding-left: 0;
    border-top: 1px solid var(--border);
    padding-top: 14px;
  }

  .dashboard-preview {
    grid-template-columns: 1fr;
  }

  .dash-side {
    border-right: 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    overflow-x: auto;
    gap: 4px;
  }

  .dash-side button {
    width: auto;
    white-space: nowrap;
  }

  .dash-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .container {
    width: min(var(--max-width), calc(100% - 28px));
  }

  .nav {
    min-height: 64px;
  }

  .nav-right .btn {
    padding: 10px 14px;
    font-size: 12.5px;
  }
}

@media (max-width: 460px) {
  .nav-right > .btn {
    display: none;
  }

  .hero {
    padding: 70px 0 55px;
  }

  .hero h1 {
    font-size: clamp(36px, 12vw, 54px);
    letter-spacing: -1.5px;
  }

  .hero p {
    font-size: 15px;
  }

  .hero-meta {
    flex-direction: column;
    gap: 8px;
  }

  .section {
    padding: 56px 0;
  }

  .section-head h2 {
    font-size: 27px;
  }

  .cta {
    padding: 30px 20px;
  }

  .cta h2 {
    font-size: 25px;
  }

  .legal {
    padding: 50px 0;
  }

  .legal h1 {
    font-size: 36px;
  }

  .toc {
    grid-template-columns: 1fr;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
