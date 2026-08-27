
:root{
  --bg:#08090f;--surface:#10121b;--surface2:#151824;--border:rgba(255,255,255,.08);
  --text:#f5f7ff;--muted:#a5a9bb;--brand:#7280ff;--brand2:#9b7cff;
  --max:1180px;--radius:18px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;background:
radial-gradient(circle at 50% -10%,rgba(114,128,255,.16),transparent 38%),var(--bg);
color:var(--text);line-height:1.6}
a{text-decoration:none;color:inherit} button{font:inherit}
.container{width:min(var(--max),calc(100% - 40px));margin:auto}
header{position:sticky;top:0;z-index:20;background:rgba(8,9,15,.76);backdrop-filter:blur(18px);border-bottom:1px solid var(--border)}
.nav{height:72px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:11px;font-weight:800}.logo-mark{width:40px;height:40px;border-radius:12px;
display:grid;place-items:center;background:linear-gradient(135deg,var(--brand),var(--brand2));box-shadow:0 10px 30px rgba(114,128,255,.2)}
.navlinks{display:flex;gap:25px;color:var(--muted);font-size:14px}.navlinks a:hover{color:#fff}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border-radius:12px;
font-weight:700;font-size:14px;border:1px solid var(--border);transition:.2s}.btn:hover{transform:translateY(-2px)}
.btn-primary{background:linear-gradient(135deg,var(--brand),var(--brand2));border:0}.btn-secondary{background:var(--surface)}
.hero{text-align:center;padding:105px 0 90px}.eyebrow{display:inline-flex;padding:7px 12px;border:1px solid rgba(114,128,255,.3);
background:rgba(114,128,255,.1);border-radius:99px;color:#b7bfff;font-size:12px;font-weight:700;margin-bottom:20px}
h1{font-size:clamp(44px,7vw,78px);line-height:1.02;letter-spacing:-3px;max-width:900px;margin:auto}
.gradient{background:linear-gradient(90deg,#fff,#9da7ff,#b494ff);-webkit-background-clip:text;color:transparent}
.hero p{max-width:680px;margin:22px auto;color:var(--muted);font-size:17px}.actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:30px}
.section{padding:85px 0}.section-head{text-align:center;max-width:700px;margin:0 auto 45px}.section-head h2{font-size:34px;letter-spacing:-1px}.section-head p{color:var(--muted);margin-top:10px}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{background:linear-gradient(180deg,var(--surface2),var(--surface));
border:1px solid var(--border);border-radius:var(--radius);padding:26px}.icon{font-size:25px;margin-bottom:18px}.card h3{margin-bottom:7px}.card p{color:var(--muted);font-size:14px}
.cta{padding:55px;border:1px solid var(--border);border-radius:24px;text-align:center;background:
radial-gradient(circle at 50% 0,rgba(114,128,255,.14),transparent 60%),var(--surface)}
footer{border-top:1px solid var(--border);padding:30px 0;color:#777d92;font-size:13px}.footer{display:flex;justify-content:space-between;gap:20px}
.legal{padding:75px 0}.legal-layout{display:grid;grid-template-columns:230px 1fr;gap:55px}.toc{position:sticky;top:95px;height:max-content}.toc a{display:block;color:var(--muted);font-size:13px;padding:7px 10px;border-radius:8px}.toc a:hover{background:var(--surface);color:#fff}
.legal h1{font-size:48px;margin:0}.legal .intro{color:var(--muted);margin:15px 0 45px}.legal section{scroll-margin-top:95px;margin-bottom:48px}.legal h2{font-size:25px;margin-bottom:13px}.legal p{color:#b4b7c5;margin-bottom:13px}.legal ul,.legal ol{padding-left:23px;color:#b4b7c5}.legal li{margin:7px 0}.legal strong{color:#eee}
.dashboard-preview{display:grid;grid-template-columns:230px 1fr;min-height:420px;border:1px solid var(--border);overflow:hidden;border-radius:20px;background:var(--surface)}
.dash-side{padding:22px;border-right:1px solid var(--border)}.dash-side div{padding:10px;color:var(--muted);font-size:13px}.dash-side .active{background:rgba(114,128,255,.12);color:#fff;border-radius:10px}
.dash-main{padding:28px}.dash-main h3{font-size:22px}.dash-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}.stat{padding:20px;border-radius:14px;background:var(--surface2);border:1px solid var(--border)}.stat small{color:var(--muted)}.stat b{display:block;font-size:25px;margin-top:4px}
@media(max-width:800px){.navlinks{display:none}.cards,.dash-grid{grid-template-columns:1fr}.legal-layout{grid-template-columns:1fr}.toc{position:static;display:grid;grid-template-columns:1fr 1fr}.legal h1{font-size:38px}.dashboard-preview{grid-template-columns:1fr}.dash-side{border-right:0;border-bottom:1px solid var(--border)}.footer{flex-direction:column}}
