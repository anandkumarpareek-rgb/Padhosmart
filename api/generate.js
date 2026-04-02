<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PadhoSmart - India ka #1 AI Student Platform</title>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Hind:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --blue: #1a56db;
  --blue-dark: #1343ad;
  --blue-light: #e8f0fe;
  --green: #057a55;
  --green-light: #def7ec;
  --orange: #ff6b00;
  --orange-light: #fff3e0;
  --bg: #f7f9fc;
  --white: #ffffff;
  --text: #111827;
  --text2: #4b5563;
  --border: #e5e7eb;
  --radius: 14px;
  --shadow: 0 4px 24px rgba(26,86,219,0.08);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Hind', sans-serif; background: var(--bg); color: var(--text); }
h1,h2,h3,.logo { font-family: 'Baloo 2', cursive; }

/* NAV */
nav {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.logo { font-size: 22px; font-weight: 800; color: var(--blue); letter-spacing: -0.5px; }
.logo span { color: var(--orange); }
.nav-links { display: flex; gap: 8px; align-items: center; }
.nav-link { font-size: 14px; color: var(--text2); padding: 6px 12px; border-radius: 8px; cursor: pointer; border: none; background: none; font-family: 'Hind', sans-serif; }
.nav-link:hover { background: var(--blue-light); color: var(--blue); }
.btn-login { background: none; border: 1.5px solid var(--blue); color: var(--blue); padding: 7px 18px; border-radius: 8px; font-size: 14px; cursor: pointer; font-family: 'Hind', sans-serif; }
.btn-signup { background: var(--blue); color: white; border: none; padding: 8px 18px; border-radius: 8px; font-size: 14px; cursor: pointer; font-family: 'Hind', sans-serif; }
.btn-signup:hover { background: var(--blue-dark); }

/* PAGES */
.page { display: none; }
.page.active { display: block; }

/* HERO */
.hero {
  background: linear-gradient(135deg, #e8f0fe 0%, #fef3e2 50%, #e8f5e9 100%);
  padding: 60px 24px 48px;
  text-align: center;
}
.hero-badge {
  display: inline-block;
  background: var(--blue);
  color: white;
  font-size: 12px;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
  font-weight: 500;
}
.hero h1 { font-size: 38px; font-weight: 800; color: var(--text); line-height: 1.2; margin-bottom: 14px; }
.hero h1 span { color: var(--blue); }
.hero p { font-size: 17px; color: var(--text2); margin-bottom: 28px; max-width: 500px; margin-left: auto; margin-right: auto; }
.hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.hero-btn-primary { background: var(--blue); color: white; border: none; padding: 14px 28px; border-radius: 10px; font-size: 15px; cursor: pointer; font-family: 'Baloo 2', cursive; font-weight: 600; }
.hero-btn-secondary { background: white; color: var(--blue); border: 2px solid var(--blue); padding: 12px 28px; border-radius: 10px; font-size: 15px; cursor: pointer; font-family: 'Baloo 2', cursive; font-weight: 600; }
.hero-stats { display: flex; justify-content: center; gap: 32px; margin-top: 36px; flex-wrap: wrap; }
.stat { text-align: center; }
.stat-num { font-family: 'Baloo 2', cursive; font-size: 24px; font-weight: 800; color: var(--blue); }
.stat-label { font-size: 12px; color: var(--text2); }

/* TOOLS SECTION */
.section { padding: 48px 20px; }
.section-title { text-align: center; font-size: 26px; font-weight: 700; margin-bottom: 8px; }
.section-sub { text-align: center; font-size: 15px; color: var(--text2); margin-bottom: 32px; }
.tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; max-width: 900px; margin: 0 auto; }
.tool-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow);
}
.tool-card:hover { transform: translateY(-4px); border-color: var(--blue); box-shadow: 0 8px 32px rgba(26,86,219,0.12); }
.tool-icon { font-size: 36px; margin-bottom: 10px; }
.tool-name { font-family: 'Baloo 2', cursive; font-size: 15px; font-weight: 700; margin-bottom: 6px; }
.tool-desc { font-size: 12px; color: var(--text2); margin-bottom: 10px; }
.tag-free { background: var(--green-light); color: var(--green); font-size: 11px; padding: 3px 10px; border-radius: 20px; display: inline-block; font-weight: 600; }
.tag-premium { background: var(--orange-light); color: var(--orange); font-size: 11px; padding: 3px 10px; border-radius: 20px; display: inline-block; font-weight: 600; }

/* AI TOOL PAGE */
.tool-page { padding: 24px 20px; max-width: 720px; margin: 0 auto; }
.tool-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.back-btn { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 6px 12px; cursor: pointer; font-size: 13px; color: var(--text2); }
.tool-page h2 { font-size: 22px; font-weight: 700; }
.input-group { margin-bottom: 16px; }
.input-group label { display: block; font-size: 14px; font-weight: 500; margin-bottom: 6px; color: var(--text); }
.input-group input, .input-group select, .input-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Hind', sans-serif;
  outline: none;
  background: var(--white);
}
.input-group input:focus, .input-group select:focus, .input-group textarea:focus { border-color: var(--blue); }
.generate-btn {
  width: 100%;
  background: var(--blue);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Baloo 2', cursive;
  margin-top: 8px;
}
.generate-btn:hover { background: var(--blue-dark); }
.generate-btn:disabled { background: #9ca3af; cursor: not-allowed; }
.result-box {
  margin-top: 24px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: none;
}
.result-box.show { display: block; }
.result-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.result-header h3 { font-size: 16px; font-weight: 600; }
.loading { display: none; text-align: center; padding: 28px; }
.loading.show { display: block; }
.spinner { width: 40px; height: 40px; border: 3px solid var(--blue-light); border-top: 3px solid var(--blue); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 12px; }
@keyframes spin { to { transform: rotate(360deg); } }
.loading-text { color: var(--blue); font-size: 15px; font-weight: 500; }
.loading-dots::after { content: ''; animation: dots 1.5s steps(4, end) infinite; }
@keyframes dots { 0%,20%{content:'.'} 40%{content:'..'} 60%,80%{content:'...'} 100%{content:''} }
.action-btns { display: flex; gap: 8px; flex-wrap: wrap; }
.pdf-btn { background: #dc2626; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-size: 13px; cursor: pointer; font-weight: 500; }
.word-btn { background: #1d4ed8; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-size: 13px; cursor: pointer; font-weight: 500; }
.excel-btn { background: #16a34a; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-size: 13px; cursor: pointer; font-weight: 500; }
.ppt-btn { background: #ea580c; color: white; border: none; padding: 6px 14px; border-radius: 8px; font-size: 13px; cursor: pointer; font-weight: 500; }
.action-btns { display: flex; gap: 6px; flex-wrap: wrap; }
.result-preview { background: #f8faff; border: 1px solid #dbeafe; border-radius: 10px; padding: 20px; margin-top: 12px; font-size: 14px; line-height: 1.9; color: var(--text); white-space: pre-wrap; max-height: 400px; overflow-y: auto; }

/* PLANS */
.plans-section { background: var(--white); padding: 48px 20px; }
.plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; max-width: 700px; margin: 0 auto; }
.plan-card { border: 1.5px solid var(--border); border-radius: var(--radius); padding: 24px 20px; background: var(--bg); }
.plan-card.featured { border-color: var(--blue); background: var(--white); box-shadow: var(--shadow); }
.plan-badge { background: var(--blue); color: white; font-size: 11px; padding: 3px 10px; border-radius: 20px; display: inline-block; margin-bottom: 12px; font-weight: 600; }
.plan-name { font-family: 'Baloo 2', cursive; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.plan-price { font-family: 'Baloo 2', cursive; font-size: 32px; font-weight: 800; color: var(--blue); margin-bottom: 16px; }
.plan-price span { font-size: 14px; color: var(--text2); font-weight: 400; }
.plan-features { list-style: none; margin-bottom: 20px; }
.plan-features li { font-size: 13px; padding: 5px 0; color: var(--text2); display: flex; align-items: center; gap: 8px; }
.plan-features li::before { content: "✓"; color: var(--green); font-weight: 700; }
.plan-btn { width: 100%; padding: 12px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: 'Baloo 2', cursive; border: 2px solid var(--blue); background: none; color: var(--blue); }
.plan-btn.primary { background: var(--blue); color: white; }

/* BLOG */
.blog-section { padding: 48px 20px; max-width: 1000px; margin: 0 auto; }
.blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.blog-card { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; cursor: pointer; transition: all 0.2s; box-shadow: var(--shadow); }
.blog-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
.blog-img { height: 140px; display: flex; align-items: center; justify-content: center; font-size: 48px; }
.blog-body { padding: 16px; }
.blog-tag { background: var(--blue-light); color: var(--blue); font-size: 11px; padding: 3px 10px; border-radius: 20px; display: inline-block; margin-bottom: 8px; font-weight: 600; }
.blog-title { font-family: 'Baloo 2', cursive; font-size: 16px; font-weight: 700; margin-bottom: 6px; line-height: 1.3; }
.blog-excerpt { font-size: 13px; color: var(--text2); line-height: 1.6; }
.blog-meta { font-size: 12px; color: #9ca3af; margin-top: 10px; }

/* MODAL */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 200; display: none; align-items: center; justify-content: center; }
.modal-overlay.show { display: flex; }
.modal { background: var(--white); border-radius: 16px; padding: 32px 28px; width: 90%; max-width: 380px; position: relative; }
.modal-close { position: absolute; top: 14px; right: 16px; background: none; border: none; font-size: 20px; cursor: pointer; color: var(--text2); }
.modal h2 { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
.modal p { font-size: 14px; color: var(--text2); margin-bottom: 20px; }
.modal-tabs { display: flex; gap: 0; margin-bottom: 20px; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.modal-tab { flex: 1; padding: 10px; text-align: center; font-size: 14px; font-weight: 500; cursor: pointer; border: none; background: none; }
.modal-tab.active { background: var(--blue); color: white; }
.modal-input { width: 100%; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; margin-bottom: 12px; font-family: 'Hind', sans-serif; outline: none; }
.modal-input:focus { border-color: var(--blue); }
.modal-btn { width: 100%; background: var(--blue); color: white; border: none; padding: 13px; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'Baloo 2', cursive; }
.google-btn { width: 100%; background: white; color: var(--text); border: 1.5px solid var(--border); padding: 11px; border-radius: 10px; font-size: 14px; cursor: pointer; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Hind', sans-serif; }

/* FOOTER */
footer { background: var(--text); color: #9ca3af; text-align: center; padding: 28px 20px; font-size: 13px; }
footer a { color: #60a5fa; text-decoration: none; }

/* RESPONSIVE */
@media (max-width: 600px) {
  .hero h1 { font-size: 26px; }
  .nav-links { gap: 4px; }
  .stat-num { font-size: 20px; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="logo" onclick="showPage('home')" style="cursor:pointer">Padho<span>Smart</span></div>
  <div class="nav-links">
    <button class="nav-link" onclick="showPage('tools')">Tools</button>
    <button class="nav-link" onclick="showPage('blog')">Blog</button>
    <button class="nav-link" onclick="showPage('plans')">Plans</button>
    <button class="btn-login" onclick="showModal('login')">Login</button>
    <button class="btn-signup" onclick="showModal('signup')">Sign Up</button>
  </div>
</nav>

<!-- HOME PAGE -->
<div id="page-home" class="page active">
  <div class="hero">
    <div class="hero-badge">🇮🇳 India ka #1 AI Student Platform</div>
    <h1>Padhai Smart Karo,<br><span>AI ke Saath!</span></h1>
    <p>Assignment banao, MCQ practice karo, Notes summary karo — sab kuch free mein, Hindi mein!</p>
    <div class="hero-btns">
      <button class="hero-btn-primary" onclick="showPage('tools')">🚀 Free Mein Shuru Karo</button>
      <button class="hero-btn-secondary" onclick="showPage('plans')">Plans Dekho</button>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">10L+</div><div class="stat-label">Students</div></div>
      <div class="stat"><div class="stat-num">5+</div><div class="stat-label">AI Tools</div></div>
      <div class="stat"><div class="stat-num">Free</div><div class="stat-label">Shuru karo</div></div>
      <div class="stat"><div class="stat-num">24/7</div><div class="stat-label">Available</div></div>
    </div>
  </div>

  <!-- TOOLS PREVIEW -->
  <div class="section">
    <h2 class="section-title">AI Tools — Students ke liye</h2>
    <p class="section-sub">Ye sab tools bilkul free hain — koi signup nahi chahiye!</p>
    <div class="tools-grid">
      <div class="tool-card" onclick="showTool('assignment')">
        <div class="tool-icon">📝</div>
        <div class="tool-name">Assignment Maker</div>
        <div class="tool-desc">Topic do, AI poori assignment banayega</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('mcq')">
        <div class="tool-icon">❓</div>
        <div class="tool-name">MCQ Generator</div>
        <div class="tool-desc">Kisi bhi topic pe MCQ practice karo</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('summary')">
        <div class="tool-icon">📖</div>
        <div class="tool-name">Notes Summary</div>
        <div class="tool-desc">Bade chapter ka chhota summary</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('essay')">
        <div class="tool-icon">✍️</div>
        <div class="tool-name">Essay Writer</div>
        <div class="tool-desc">Hindi ya English mein essay likhwao</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showModal('signup')">
        <div class="tool-icon">🔮</div>
        <div class="tool-name">Exam Predictor</div>
        <div class="tool-desc">Is saal kya aayega exam mein</div>
        <span class="tag-premium">Premium</span>
      </div>
      <div class="tool-card" onclick="showModal('signup')">
        <div class="tool-icon">📅</div>
        <div class="tool-name">Study Planner</div>
        <div class="tool-desc">AI se roz ka study plan banao</div>
        <span class="tag-premium">Premium</span>
      </div>
    </div>
  </div>

  <!-- BLOG PREVIEW -->
  <div style="background:var(--white);padding:48px 20px;">
    <h2 class="section-title">Latest Blog</h2>
    <p class="section-sub">Students ke liye useful articles</p>
    <div class="blog-grid" style="max-width:900px;margin:0 auto;">
      <div class="blog-card" onclick="showPage('blog')">
        <div class="blog-img" style="background:#e8f0fe;">📚</div>
        <div class="blog-body">
          <span class="blog-tag">Study Tips</span>
          <div class="blog-title">Board Exam ki taiyari kaise kare — AI ke saath</div>
          <div class="blog-excerpt">AI tools se aap 2x fast padh sakte ho. Jane kaise...</div>
          <div class="blog-meta">2 April 2026 · 5 min read</div>
        </div>
      </div>
      <div class="blog-card" onclick="showPage('blog')">
        <div class="blog-img" style="background:#def7ec;">🧪</div>
        <div class="blog-body">
          <span class="blog-tag">Science</span>
          <div class="blog-title">NCERT Class 10 Science — Important Questions 2026</div>
          <div class="blog-excerpt">Ye questions zaroor aayenge is saal board mein...</div>
          <div class="blog-meta">1 April 2026 · 4 min read</div>
        </div>
      </div>
      <div class="blog-card" onclick="showPage('blog')">
        <div class="blog-img" style="background:#fff3e0;">🔢</div>
        <div class="blog-body">
          <span class="blog-tag">Math</span>
          <div class="blog-title">Maths ke formulas yaad karne ka easy trick</div>
          <div class="blog-excerpt">In tricks se maths formula kabhi nahi bhoologe...</div>
          <div class="blog-meta">31 March 2026 · 3 min read</div>
        </div>
      </div>
    </div>
    <div style="text-align:center;margin-top:24px;">
      <button class="hero-btn-secondary" onclick="showPage('blog')">Sab Articles Dekho →</button>
    </div>
  </div>

  <!-- PLANS PREVIEW -->
  <div class="plans-section">
    <h2 class="section-title">Simple Plans</h2>
    <p class="section-sub">Shuru karo free mein — upgrade karo jab ready ho</p>
    <div class="plans-grid">
      <div class="plan-card">
        <div class="plan-name">Free</div>
        <div class="plan-price">₹0 <span>/month</span></div>
        <ul class="plan-features">
          <li>3 Assignments/day</li>
          <li>5 MCQ/day</li>
          <li>3 Summaries/day</li>
          <li>Blog articles</li>
        </ul>
        <button class="plan-btn" onclick="showPage('tools')">Abhi Shuru Karo</button>
      </div>
      <div class="plan-card featured">
        <div class="plan-badge">⭐ Most Popular</div>
        <div class="plan-name">Premium</div>
        <div class="plan-price">₹99 <span>/month</span></div>
        <ul class="plan-features">
          <li>Unlimited sab kuch</li>
          <li>No ads</li>
          <li>PDF download</li>
          <li>Exam Predictor</li>
          <li>Study Planner</li>
          <li>WhatsApp support</li>
        </ul>
        <button class="plan-btn primary" onclick="showModal('signup')">Premium Lo</button>
      </div>
    </div>
  </div>

  <footer>
    <p style="margin-bottom:8px;"><strong style="color:white;">PadhoSmart</strong> — India ka AI Student Platform</p>
    <p>padhosmart.in | Made with ❤️ for Indian Students</p>
  </footer>
</div>

<!-- TOOLS PAGE -->
<div id="page-tools" class="page">
  <div class="section">
    <h2 class="section-title">AI Tools</h2>
    <p class="section-sub">Apna tool choose karo aur start karo!</p>
    <div class="tools-grid">
      <div class="tool-card" onclick="showTool('assignment')">
        <div class="tool-icon">📝</div>
        <div class="tool-name">Assignment Maker</div>
        <div class="tool-desc">Topic do, AI poori assignment banayega</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('mcq')">
        <div class="tool-icon">❓</div>
        <div class="tool-name">MCQ Generator</div>
        <div class="tool-desc">Kisi bhi topic pe MCQ practice karo</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('summary')">
        <div class="tool-icon">📖</div>
        <div class="tool-name">Notes Summary</div>
        <div class="tool-desc">Bade chapter ka chhota summary</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showTool('essay')">
        <div class="tool-icon">✍️</div>
        <div class="tool-name">Essay Writer</div>
        <div class="tool-desc">Hindi ya English mein essay likhwao</div>
        <span class="tag-free">Free</span>
      </div>
      <div class="tool-card" onclick="showModal('signup')">
        <div class="tool-icon">🔮</div>
        <div class="tool-name">Exam Predictor</div>
        <div class="tool-desc">Premium feature</div>
        <span class="tag-premium">Premium</span>
      </div>
      <div class="tool-card" onclick="showModal('signup')">
        <div class="tool-icon">📅</div>
        <div class="tool-name">Study Planner</div>
        <div class="tool-desc">Premium feature</div>
        <span class="tag-premium">Premium</span>
      </div>
    </div>
  </div>
</div>

<!-- ASSIGNMENT TOOL PAGE -->
<div id="page-assignment" class="page">
  <div class="tool-page">
    <div class="tool-header">
      <button class="back-btn" onclick="showPage('tools')">← Wapas</button>
      <h2>📝 Assignment Maker</h2>
    </div>
    <div class="input-group">
      <label>Subject / Vishay</label>
      <select id="assign-subject">
        <option>Science (Vigyan)</option>
        <option>Math (Ganit)</option>
        <option>Hindi</option>
        <option>English</option>
        <option>Social Science (Samajik Vigyan)</option>
        <option>History (Itihas)</option>
        <option>Geography (Bhugol)</option>
        <option>Computer Science</option>
        <option>Physics</option>
        <option>Chemistry</option>
        <option>Biology</option>
      </select>
    </div>
    <div class="input-group">
      <label>Class / Kaksha</label>
      <select id="assign-class">
        <option>Class 6</option>
        <option>Class 7</option>
        <option>Class 8</option>
        <option>Class 9</option>
        <option>Class 10</option>
        <option>Class 11</option>
        <option>Class 12</option>
        <option>College / University</option>
      </select>
    </div>
    <div class="input-group">
      <label>Topic (Vishay) — Hindi ya English mein likho</label>
      <input type="text" id="assign-topic" placeholder="Jaise: Photosynthesis, World War 2, Pythagoras Theorem..." />
    </div>
    <div class="input-group">
      <label>Word Count</label>
      <select id="assign-words">
        <option value="300">Short — 300 words</option>
        <option value="500" selected>Medium — 500 words</option>
        <option value="800">Long — 800 words</option>
        <option value="1000">Detailed — 1000 words</option>
      </select>
    </div>
    <div class="input-group">
      <label>Language</label>
      <select id="assign-lang">
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="Hinglish">Hinglish (Mix)</option>
      </select>
    </div>
    <button class="generate-btn" id="assign-btn" onclick="generateAssignment()">✨ Assignment Banao</button>
    <div class="loading" id="assign-loading"><div class="spinner"></div><div class="loading-text">🤖 AI likh raha hai<span class="loading-dots"></span></div><!-- AI assignment likh raha hai... thoda wait karo--></div>
    <div class="result-box" id="assign-result">
      <div class="result-header">
        <h3>📄 Tumhari Assignment</h3>
        <div class="action-btns">
          <button class="copy-btn" onclick="copyResult('assign-content')">📋 Copy</button>
          <button class="pdf-btn" onclick="downloadPDF('assign-content', 'assignment')">📄 PDF</button>
          <button class="word-btn" onclick="downloadWord('assign-content', 'assignment')">📝 Word</button>
          <button class="excel-btn" onclick="downloadExcel('assign-content', 'assignment')">📊 Excel</button>
          <button class="ppt-btn" onclick="downloadPPT('assign-content', 'assignment')">📑 PPT</button>
        </div>
      </div>
      <div class="result-preview" id="assign-content"></div>
    </div>
  </div>
</div>

<!-- MCQ TOOL PAGE -->
<div id="page-mcq" class="page">
  <div class="tool-page">
    <div class="tool-header">
      <button class="back-btn" onclick="showPage('tools')">← Wapas</button>
      <h2>❓ MCQ Generator</h2>
    </div>
    <div class="input-group">
      <label>Topic</label>
      <input type="text" id="mcq-topic" placeholder="Jaise: Digestive System, French Revolution, Algebra..." />
    </div>
    <div class="input-group">
      <label>Kitne Questions?</label>
      <select id="mcq-count">
        <option value="5">5 Questions</option>
        <option value="10" selected>10 Questions</option>
        <option value="15">15 Questions</option>
        <option value="20">20 Questions</option>
      </select>
    </div>
    <div class="input-group">
      <label>Difficulty</label>
      <select id="mcq-level">
        <option>Easy (Aasan)</option>
        <option selected>Medium (Madhyam)</option>
        <option>Hard (Kathin)</option>
      </select>
    </div>
    <div class="input-group">
      <label>Language</label>
      <select id="mcq-lang">
        <option>Hindi</option>
        <option>English</option>
      </select>
    </div>
    <button class="generate-btn" id="mcq-btn" onclick="generateMCQ()">✨ MCQ Banao</button>
    <div class="loading" id="mcq-loading"><div class="spinner"></div><div class="loading-text">🤖 AI likh raha hai<span class="loading-dots"></span></div><!-- MCQ questions ban rahe hain--></div>
    <div class="result-box" id="mcq-result">
      <div class="result-header">
        <h3>📋 MCQ Questions</h3>
        <div class="action-btns">
          <button class="copy-btn" onclick="copyResult('mcq-content')">📋 Copy</button>
          <button class="pdf-btn" onclick="downloadPDF('mcq-content', 'mcq')">📄 PDF</button>
          <button class="word-btn" onclick="downloadWord('mcq-content', 'mcq')">📝 Word</button>
          <button class="excel-btn" onclick="downloadExcel('mcq-content', 'mcq')">📊 Excel</button>
          <button class="ppt-btn" onclick="downloadPPT('mcq-content', 'mcq')">📑 PPT</button>
        </div>
      </div>
      <div class="result-preview" id="mcq-content"></div>
    </div>
  </div>
</div>

<!-- SUMMARY TOOL PAGE -->
<div id="page-summary" class="page">
  <div class="tool-page">
    <div class="tool-header">
      <button class="back-btn" onclick="showPage('tools')">← Wapas</button>
      <h2>📖 Notes Summary</h2>
    </div>
    <div class="input-group">
      <label>Apna text paste karo ya topic likho</label>
      <textarea id="summary-text" rows="6" placeholder="Yahan apna chapter, notes ya topic paste karo..."></textarea>
    </div>
    <div class="input-group">
      <label>Language</label>
      <select id="summary-lang">
        <option>Hindi</option>
        <option>English</option>
        <option>Hinglish</option>
      </select>
    </div>
    <button class="generate-btn" onclick="generateSummary()">✨ Summary Banao</button>
    <div class="loading" id="summary-loading"><div class="spinner"></div><div class="loading-text">🤖 AI likh raha hai<span class="loading-dots"></span></div><!-- Summary ban rahi hai--></div>
    <div class="result-box" id="summary-result">
      <div class="result-header">
        <h3>📝 Summary</h3>
        <div class="action-btns">
          <button class="copy-btn" onclick="copyResult('summary-content')">📋 Copy</button>
          <button class="pdf-btn" onclick="downloadPDF('summary-content', 'summary')">📄 PDF</button>
          <button class="word-btn" onclick="downloadWord('summary-content', 'summary')">📝 Word</button>
          <button class="excel-btn" onclick="downloadExcel('summary-content', 'summary')">📊 Excel</button>
          <button class="ppt-btn" onclick="downloadPPT('summary-content', 'summary')">📑 PPT</button>
        </div>
      </div>
      <div class="result-preview" id="summary-content"></div>
    </div>
  </div>
</div>

<!-- ESSAY TOOL PAGE -->
<div id="page-essay" class="page">
  <div class="tool-page">
    <div class="tool-header">
      <button class="back-btn" onclick="showPage('tools')">← Wapas</button>
      <h2>✍️ Essay Writer</h2>
    </div>
    <div class="input-group">
      <label>Essay Topic</label>
      <input type="text" id="essay-topic" placeholder="Jaise: Mere Sapno ka Bharat, Global Warming, Technology..." />
    </div>
    <div class="input-group">
      <label>Word Count</label>
      <select id="essay-words">
        <option value="200">Short — 200 words</option>
        <option value="400" selected>Medium — 400 words</option>
        <option value="600">Long — 600 words</option>
      </select>
    </div>
    <div class="input-group">
      <label>Language</label>
      <select id="essay-lang">
        <option>Hindi</option>
        <option>English</option>
      </select>
    </div>
    <button class="generate-btn" onclick="generateEssay()">✨ Essay Likho</button>
    <div class="loading" id="essay-loading"><div class="spinner"></div><div class="loading-text">🤖 AI likh raha hai<span class="loading-dots"></span></div><!-- Essay likh raha hoon--></div>
    <div class="result-box" id="essay-result">
      <div class="result-header">
        <h3>📄 Essay</h3>
        <div class="action-btns">
          <button class="copy-btn" onclick="copyResult('essay-content')">📋 Copy</button>
          <button class="pdf-btn" onclick="downloadPDF('essay-content', 'essay')">📄 PDF</button>
          <button class="word-btn" onclick="downloadWord('essay-content', 'essay')">📝 Word</button>
          <button class="excel-btn" onclick="downloadExcel('essay-content', 'essay')">📊 Excel</button>
          <button class="ppt-btn" onclick="downloadPPT('essay-content', 'essay')">📑 PPT</button>
        </div>
      </div>
      <div class="result-preview" id="essay-content"></div>
    </div>
  </div>
</div>

<!-- BLOG PAGE -->
<div id="page-blog" class="page">
  <div class="blog-section">
    <h2 class="section-title">Blog</h2>
    <p class="section-sub">Students ke liye helpful articles — free mein padho!</p>
    <div class="blog-grid">
      <div class="blog-card">
        <div class="blog-img" style="background:#e8f0fe;">📚</div>
        <div class="blog-body">
          <span class="blog-tag">Study Tips</span>
          <div class="blog-title">Board Exam ki taiyari kaise kare — AI ke saath</div>
          <div class="blog-excerpt">AI tools se aap 2x fast padh sakte ho. Jane kaise PadhoSmart aapki madad kar sakta hai board exam mein.</div>
          <div class="blog-meta">2 April 2026 · 5 min read</div>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-img" style="background:#def7ec;">🧪</div>
        <div class="blog-body">
          <span class="blog-tag">Science</span>
          <div class="blog-title">NCERT Class 10 Science — Important Questions 2026</div>
          <div class="blog-excerpt">Ye questions zaroor aayenge is saal board mein. In sab ko ache se padho aur practice karo.</div>
          <div class="blog-meta">1 April 2026 · 4 min read</div>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-img" style="background:#fff3e0;">🔢</div>
        <div class="blog-body">
          <span class="blog-tag">Math</span>
          <div class="blog-title">Maths ke formulas yaad karne ka easy trick</div>
          <div class="blog-excerpt">In tricks se maths formula kabhi nahi bhoologe. Students ne ye tricks try ki aur results amazing the.</div>
          <div class="blog-meta">31 March 2026 · 3 min read</div>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-img" style="background:#fce7f3;">🇮🇳</div>
        <div class="blog-body">
          <span class="blog-tag">History</span>
          <div class="blog-title">India ka Swatantrata Sangram — Short Notes</div>
          <div class="blog-excerpt">SST exam ke liye perfect notes. Poori history ek jagah, easy language mein.</div>
          <div class="blog-meta">30 March 2026 · 6 min read</div>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-img" style="background:#ede9fe;">💻</div>
        <div class="blog-body">
          <span class="blog-tag">Technology</span>
          <div class="blog-title">AI kya hai? Students ke liye simple explanation</div>
          <div class="blog-excerpt">Artificial Intelligence ko bilkul simple language mein samjho. No jargon, only clarity.</div>
          <div class="blog-meta">29 March 2026 · 4 min read</div>
        </div>
      </div>
      <div class="blog-card">
        <div class="blog-img" style="background:#fef9c3;">⏰</div>
        <div class="blog-body">
          <span class="blog-tag">Productivity</span>
          <div class="blog-title">Time Table kaise banaye — Students guide</div>
          <div class="blog-excerpt">Perfect time table jo actually follow ho sake. Ye tips use karo aur padhai aasaan ho jayegi.</div>
          <div class="blog-meta">28 March 2026 · 3 min read</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PLANS PAGE -->
<div id="page-plans" class="page">
  <div class="plans-section" style="min-height:80vh;">
    <h2 class="section-title">Plans & Pricing</h2>
    <p class="section-sub">Koi hidden charges nahi — sab clear hai!</p>
    <div class="plans-grid">
      <div class="plan-card">
        <div class="plan-name">Free</div>
        <div class="plan-price">₹0 <span>/month</span></div>
        <ul class="plan-features">
          <li>3 Assignments per day</li>
          <li>5 MCQ sets per day</li>
          <li>3 Summaries per day</li>
          <li>2 Essays per day</li>
          <li>Blog articles — unlimited</li>
          <li>Ads dikhenge</li>
        </ul>
        <button class="plan-btn" onclick="showPage('tools')">Free Mein Shuru Karo</button>
      </div>
      <div class="plan-card featured">
        <div class="plan-badge">⭐ Sabse Popular</div>
        <div class="plan-name">Premium</div>
        <div class="plan-price">₹99 <span>/month</span></div>
        <ul class="plan-features">
          <li>Unlimited sab AI tools</li>
          <li>No ads</li>
          <li>PDF download</li>
          <li>Exam Predictor (AI)</li>
          <li>Study Planner (AI)</li>
          <li>Mock Tests</li>
          <li>WhatsApp support</li>
          <li>Early access to new tools</li>
        </ul>
        <button class="plan-btn primary" onclick="showModal('signup')">Premium Lo — ₹99/month</button>
      </div>
      <div class="plan-card">
        <div class="plan-name">Yearly</div>
        <div class="plan-price">₹799 <span>/year</span></div>
        <ul class="plan-features">
          <li>Sab Premium features</li>
          <li>33% savings</li>
          <li>Priority support</li>
          <li>Certificate of completion</li>
        </ul>
        <button class="plan-btn" onclick="showModal('signup')">Yearly Lo — ₹799</button>
      </div>
    </div>
  </div>
</div>

<!-- LOGIN MODAL -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h2 id="modal-title">Welcome Back!</h2>
    <p id="modal-subtitle">PadhoSmart mein login karo</p>
    <div class="modal-tabs">
      <button class="modal-tab active" id="tab-login" onclick="switchTab('login')">Login</button>
      <button class="modal-tab" id="tab-signup" onclick="switchTab('signup')">Sign Up</button>
    </div>
    <button class="google-btn">
      <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Google se Continue Karo
    </button>
    <div style="text-align:center;font-size:13px;color:var(--text2);margin:8px 0;">ya</div>
    <input class="modal-input" type="email" placeholder="Email address" />
    <input class="modal-input" type="password" placeholder="Password" />
    <button class="modal-btn" id="modal-action-btn">Login Karo</button>
    <p style="text-align:center;font-size:12px;color:var(--text2);margin-top:14px;">Login karke aap hamare <a href="#" style="color:var(--blue)">Terms</a> se agree karte ho</p>
  </div>
</div>

<script>
// PAGE NAVIGATION
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);
}

function showTool(tool) {
  showPage(tool);
}

// MODAL
function showModal(type) {
  document.getElementById('modal-overlay').classList.add('show');
  if (type === 'signup') switchTab('signup');
  else switchTab('login');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
}

function switchTab(tab) {
  if (tab === 'login') {
    document.getElementById('tab-login').classList.add('active');
    document.getElementById('tab-signup').classList.remove('active');
    document.getElementById('modal-title').textContent = 'Welcome Back!';
    document.getElementById('modal-subtitle').textContent = 'PadhoSmart mein login karo';
    document.getElementById('modal-action-btn').textContent = 'Login Karo';
  } else {
    document.getElementById('tab-signup').classList.add('active');
    document.getElementById('tab-login').classList.remove('active');
    document.getElementById('modal-title').textContent = 'Join PadhoSmart!';
    document.getElementById('modal-subtitle').textContent = 'Free account banao abhi';
    document.getElementById('modal-action-btn').textContent = 'Account Banao';
  }
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// COPY FUNCTION
function copyResult(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Copy ho gaya! ✅');
  });
}

// AI GENERATION FUNCTIONS
async function callAI(prompt) {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  return data.result;
}

async function generateAssignment() {
  const topic = document.getElementById('assign-topic').value.trim();
  if (!topic) { alert('Topic likho pehle!'); return; }
  const subject = document.getElementById('assign-subject').value;
  const cls = document.getElementById('assign-class').value;
  const words = document.getElementById('assign-words').value;
  const lang = document.getElementById('assign-lang').value;

  document.getElementById('assign-btn').disabled = true;
  document.getElementById('assign-loading').classList.add('show');
  document.getElementById('assign-result').classList.remove('show');

  try {
    const prompt = `Tum ek Indian school teacher ho. ${cls} ke student ke liye ${subject} subject mein "${topic}" topic pe ek ${words} word ki assignment likho. Language: ${lang}. Format: Introduction, Main Points (3-4 sections), Conclusion. Simple aur clear language use karo jo Indian students samjhe.`;
    const result = await callAI(prompt);
    document.getElementById('assign-content').textContent = result;
    document.getElementById('assign-result').classList.add('show');
  } catch (e) {
    alert('Kuch error aaya — thodi der baad try karo');
  }

  document.getElementById('assign-btn').disabled = false;
  document.getElementById('assign-loading').classList.remove('show');
}

async function generateMCQ() {
  const topic = document.getElementById('mcq-topic').value.trim();
  if (!topic) { alert('Topic likho pehle!'); return; }
  const count = document.getElementById('mcq-count').value;
  const level = document.getElementById('mcq-level').value;
  const lang = document.getElementById('mcq-lang').value;

  document.getElementById('mcq-btn').disabled = true;
  document.getElementById('mcq-loading').classList.add('show');
  document.getElementById('mcq-result').classList.remove('show');

  try {
    const prompt = `Indian school student ke liye "${topic}" topic pe ${count} MCQ questions banao. Difficulty: ${level}. Language: ${lang}. Format: Q1. [Question] A) B) C) D) Answer: [correct option]. NCERT syllabus ke according rakho.`;
    const result = await callAI(prompt);
    document.getElementById('mcq-content').textContent = result;
    document.getElementById('mcq-result').classList.add('show');
  } catch (e) {
    alert('Kuch error aaya — thodi der baad try karo');
  }

  document.getElementById('mcq-btn').disabled = false;
  document.getElementById('mcq-loading').classList.remove('show');
}

async function generateSummary() {
  const text = document.getElementById('summary-text').value.trim();
  if (!text) { alert('Text ya topic paste karo!'); return; }
  const lang = document.getElementById('summary-lang').value;

  document.getElementById('summary-loading').classList.add('show');
  document.getElementById('summary-result').classList.remove('show');

  try {
    const prompt = `Ek Indian student ke liye ye content ka clear summary banao: "${text}". Language: ${lang}. Bullet points use karo. Key points, important dates, formulas sab highlight karo. Simple language mein likho.`;
    const result = await callAI(prompt);
    document.getElementById('summary-content').textContent = result;
    document.getElementById('summary-result').classList.add('show');
  } catch (e) {
    alert('Kuch error aaya — thodi der baad try karo');
  }

  document.getElementById('summary-loading').classList.remove('show');
}

async function generateEssay() {
  const topic = document.getElementById('essay-topic').value.trim();
  if (!topic) { alert('Topic likho pehle!'); return; }
  const words = document.getElementById('essay-words').value;
  const lang = document.getElementById('essay-lang').value;

  document.getElementById('essay-loading').classList.add('show');
  document.getElementById('essay-result').classList.remove('show');

  try {
    const prompt = `"${topic}" topic pe ek ${words} word ka essay likho. Language: ${lang}. Format: Title, Introduction (Prastavan), 3 Body Paragraphs, Conclusion (Upsanhar). Indian student ke liye simple aur impactful language use karo.`;
    const result = await callAI(prompt);
    document.getElementById('essay-content').textContent = result;
    document.getElementById('essay-result').classList.add('show');
  } catch (e) {
    alert('Kuch error aaya — thodi der baad try karo');
  }

  document.getElementById('essay-loading').classList.remove('show');
}

function downloadPDF(contentId, filename) {
  const text = document.getElementById(contentId).textContent;
  if (!text.trim()) { alert('Pehle content generate karo!'); return; }
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html><head><title>${filename}</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.8; font-size: 14px; }
      h1 { color: #1a56db; margin-bottom: 20px; }
      pre { white-space: pre-wrap; word-wrap: break-word; }
    </style></head>
    <body>
      <h1>PadhoSmart — ${filename}</h1>
      <pre>${text}</pre>
      <hr style="margin-top:40px">
      <p style="color:#999;font-size:12px">Generated by PadhoSmart.in</p>
    </body></html>
  `);
  printWindow.document.close();
  printWindow.print();
}


function downloadExcel(contentId, filename) {
  const text = document.getElementById(contentId).textContent;
  if (!text.trim()) { alert('Pehle content generate karo!'); return; }
  
  const lines = text.split('\n').filter(l => l.trim());
  let tableRows = lines.map(line => `<tr><td style="padding:8px;border:1px solid #ddd;">${line}</td></tr>`).join('');
  
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
    <head><meta charset="utf-8"></head>
    <body>
    <table border="1">
      <tr><th style="background:#1a56db;color:white;padding:10px;">PadhoSmart — ${filename}</th></tr>
      ${tableRows}
      <tr><td style="color:#999;font-size:10pt;">Generated by PadhoSmart.in</td></tr>
    </table>
    </body></html>
  `;
  const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadPPT(contentId, filename) {
  const text = document.getElementById(contentId).textContent;
  if (!text.trim()) { alert('Pehle content generate karo!'); return; }
  
  const lines = text.split('\n').filter(l => l.trim());
  const printWindow = window.open('', '_blank');
  
  let slides = '';
  let currentSlide = [];
  let slideNum = 0;
  
  lines.forEach((line, i) => {
    currentSlide.push(line);
    if (currentSlide.length >= 5 || i === lines.length - 1) {
      slideNum++;
      slides += `
        <div style="width:100%;min-height:400px;background:${slideNum===1?'#1a56db':'white'};color:${slideNum===1?'white':'#111'};padding:48px;margin-bottom:20px;border-radius:12px;border:2px solid #e5e7eb;page-break-after:always;">
          ${slideNum===1 ? `<div style="font-size:32px;font-weight:700;margin-bottom:16px;">PadhoSmart</div><div style="font-size:20px;opacity:0.9">${filename}</div>` : ''}
          ${currentSlide.map(l => `<p style="font-size:16px;line-height:1.8;margin:8px 0;">• ${l}</p>`).join('')}
          <div style="position:absolute;bottom:20px;right:24px;font-size:11px;opacity:0.5;">PadhoSmart.in | Slide ${slideNum}</div>
        </div>`;
      currentSlide = [];
    }
  });
  
  printWindow.document.write(`
    <html><head><title>${filename}</title>
    <style>
      body { font-family: Arial, sans-serif; background: #f3f4f6; padding: 24px; }
      @media print { body { background: white; padding: 0; } }
    </style></head>
    <body>
      ${slides}
      <script>window.print();<\/script>
    </body></html>
  `);
  printWindow.document.close();
}

function downloadWord(contentId, filename) {
  const text = document.getElementById(contentId).textContent;
  if (!text.trim()) { alert('Pehle content generate karo!'); return; }
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
    <head><meta charset="utf-8"><title>${filename}</title>
    <style>body{font-family:Arial;font-size:12pt;line-height:1.8;margin:1in;}</style>
    </head><body>
    <h1 style="color:#1a56db;">PadhoSmart — ${filename}</h1>
    <p>${text.replace(/\n/g, '</p><p>')}</p>
    <hr><p style="color:#999;font-size:10pt;">Generated by PadhoSmart.in</p>
    </body></html>
  `;
  const blob = new Blob([html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.doc`;
  a.click();
  URL.revokeObjectURL(url);
}
</script>
</body>
</html>
