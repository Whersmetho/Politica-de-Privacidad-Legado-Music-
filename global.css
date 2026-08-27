:root {
    --bg: #08090f;
    --surface: #10121b;
    --surface-2: #151824;
    --border: rgba(255, 255, 255, 0.08);
    --text: #f5f7ff;
    --muted: #a5a9bb;
    --brand: #7280ff;
    --brand-2: #9b7cff;
    --max-width: 1180px;
    --radius: 18px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
        radial-gradient(circle at 50% -10%, rgba(114, 128, 255, 0.16), transparent 38%),
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

.container {
    width: min(var(--max-width), calc(100% - 40px));
    margin: 0 auto;
}

/* HEADER */

header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(8, 9, 15, 0.82);
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
    font-weight: 800;
    font-size: 18px;
    white-space: nowrap;
}

.logo-mark {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    box-shadow: 0 10px 30px rgba(114, 128, 255, 0.2);
}

.navlinks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    color: var(--muted);
    font-size: 14px;
}

.navlinks a {
    transition: color 0.2s ease;
}

.navlinks a:hover {
    color: #ffffff;
}

/* BUTTONS */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    padding: 11px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition:
        transform 0.2s ease,
        opacity 0.2s ease,
        background 0.2s ease;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-primary {
    color: #ffffff;
    border: 0;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
}

.btn-secondary {
    background: var(--surface);
    color: var(--text);
}

/* HERO */

.hero {
    padding: 105px 0 90px;
    text-align: center;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 12px;
    margin-bottom: 20px;
    border: 1px solid rgba(114, 128, 255, 0.3);
    border-radius: 999px;
    background: rgba(114, 128, 255, 0.1);
    color: #b7bfff;
    font-size: 12px;
    font-weight: 700;
}

.hero h1 {
    max-width: 900px;
    margin: 0 auto;
    font-size: clamp(44px, 7vw, 78px);
    line-height: 1.02;
    letter-spacing: -3px;
}

.gradient {
    background: linear-gradient(90deg, #ffffff, #9da7ff, #b494ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero p {
    max-width: 680px;
    margin: 22px auto 0;
    color: var(--muted);
    font-size: 17px;
}

.actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
}

/* SECTIONS */

.section {
    padding: 85px 0;
}

.section-head {
    max-width: 700px;
    margin: 0 auto 45px;
    text-align: center;
}

.section-head h2 {
    font-size: 34px;
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
}

.icon {
    margin-bottom: 18px;
    font-size: 25px;
}

.card h3 {
    margin-bottom: 7px;
}

.card p {
    color: var(--muted);
    font-size: 14px;
}

.cta {
    padding: 55px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background:
        radial-gradient(circle at 50% 0, rgba(114, 128, 255, 0.14), transparent 60%),
        var(--surface);
    text-align: center;
}

.cta p {
    color: var(--muted);
}

/* FOOTER */

footer {
    border-top: 1px solid var(--border);
    padding: 30px 0;
    color: #777d92;
    font-size: 13px;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

footer a:hover {
    color: #ffffff;
}

/* LEGAL PAGES */

.legal {
    padding: 75px 0;
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
}

.toc a {
    display: block;
    padding: 7px 10px;
    border-radius: 8px;
    color: var(--muted);
    font-size: 13px;
}

.toc a:hover {
    background: var(--surface);
    color: #ffffff;
}

.legal h1 {
    max-width: none;
    margin: 0;
    font-size: 48px;
    line-height: 1.1;
    letter-spacing: -2px;
}

.legal .intro {
    margin: 15px 0 45px;
    color: var(--muted);
}

.legal section {
    scroll-margin-top: 95px;
    margin-bottom: 48px;
}

.legal h2 {
    margin-bottom: 13px;
    font-size: 25px;
    line-height: 1.25;
}

.legal p {
    margin-bottom: 13px;
    color: #b4b7c5;
}

.legal ul,
.legal ol {
    padding-left: 23px;
    color: #b4b7c5;
}

.legal li {
    margin: 7px 0;
}

.legal strong {
    color: #eeeeee;
}

/* DASHBOARD PREVIEW */

.dashboard-preview {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr);
    min-height: 420px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--surface);
}

.dash-side {
    padding: 22px;
    border-right: 1px solid var(--border);
}

.dash-side div {
    padding: 10px;
    border-radius: 10px;
    color: var(--muted);
    font-size: 13px;
}

.dash-side .active {
    background: rgba(114, 128, 255, 0.12);
    color: #ffffff;
}

.dash-main {
    padding: 28px;
}

.dash-main h3 {
    font-size: 22px;
}

.dash-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 22px;
}

.stat {
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--surface-2);
}

.stat small {
    color: var(--muted);
}

.stat b {
    display: block;
    margin-top: 4px;
    font-size: 25px;
}

/* MOBILE */

@media (max-width: 900px) {
    .navlinks {
        display: none;
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
    }

    .dashboard-preview {
        grid-template-columns: 1fr;
    }

    .dash-side {
        border-right: 0;
        border-bottom: 1px solid var(--border);
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

    .nav > .btn {
        padding: 10px 12px;
        font-size: 12px;
    }

    .hero {
        padding: 75px 0 65px;
    }

    .hero h1 {
        font-size: clamp(38px, 13vw, 58px);
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 15px;
    }

    .section {
        padding: 60px 0;
    }

    .section-head h2 {
        font-size: 28px;
    }

    .cta {
        padding: 32px 20px;
    }

    .legal {
        padding: 55px 0;
    }

    .legal h1 {
        font-size: 38px;
    }

    .toc {
        grid-template-columns: 1fr;
    }

    .footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
