(function () {
  const sections = window.SIL_SECTIONS;
  const categories = window.SIL_CATEGORIES;
  const meta = window.SIL_META;
  const icons = window.SIL_CATEGORY_ICONS || {};

  const sidebarEl = document.getElementById("sidebar-nav");
  const contentEl = document.getElementById("content");
  const searchInput = document.getElementById("global-search");
  const lastPublishedEl = document.getElementById("last-published");
  const confBanner = document.getElementById("confidential-banner");
  const langEnBtn = document.getElementById("lang-en");
  const langTlBtn = document.getElementById("lang-tl");

  document.getElementById("org-name").textContent = meta.orgName;
  lastPublishedEl.textContent = "Last published: " + meta.lastPublished;
  confBanner.textContent = meta.confidentialityNotice;

  let lang = "en"; // 'en' | 'tl'
  try {
    const saved = localStorage.getItem("sil-lang");
    if (saved) lang = saved;
  } catch (e) {}

  function setLang(next) {
    lang = next;
    try { localStorage.setItem("sil-lang", lang); } catch (e) {}
    langEnBtn.classList.toggle("active", lang === "en");
    langTlBtn.classList.toggle("active", lang === "tl");
    route();
  }
  langEnBtn.addEventListener("click", () => setLang("en"));
  langTlBtn.addEventListener("click", () => setLang("tl"));
  langEnBtn.classList.toggle("active", lang === "en");
  langTlBtn.classList.toggle("active", lang === "tl");

  function sectionById(id) {
    return sections.find((s) => s.id === id);
  }
  function tTitle(s) {
    return lang === "tl" && s.titleTL ? s.titleTL : s.title;
  }
  function tBody(s) {
    return lang === "tl" && s.bodyTL ? s.bodyTL : s.body;
  }
  function tCatLabel(cat) {
    return lang === "tl" && cat.labelTL ? cat.labelTL : cat.label;
  }
  function isTranslated(s) {
    return !!s.bodyTL;
  }
  function iconHtml(catId) {
    return icons[catId] ? `<div class="category-icon">${icons[catId]}</div>` : "";
  }

  function buildSidebar(activeId) {
    sidebarEl.innerHTML = "";
    const homeLink = document.createElement("a");
    homeLink.className = "nav-item" + (!activeId ? " active" : "");
    homeLink.textContent = "🏠 Home";
    homeLink.href = "#home";
    sidebarEl.appendChild(homeLink);

    categories.forEach((cat) => {
      const catSections = sections.filter((s) => s.category === cat.id);
      if (!catSections.length) return;
      const h3 = document.createElement("h3");
      h3.textContent = tCatLabel(cat);
      sidebarEl.appendChild(h3);
      const wrap = document.createElement("div");
      wrap.className = "nav-cat";
      catSections.forEach((s) => {
        const a = document.createElement("a");
        a.className = "nav-item" + (s.id === activeId ? " active" : "");
        a.textContent = tTitle(s);
        a.href = "#" + s.id;
        wrap.appendChild(a);
      });
      sidebarEl.appendChild(wrap);
    });
  }

  function renderHome() {
    buildSidebar(null);
    const heroSub =
      lang === "tl"
        ? "Lahat ng tungkol sa Tonik Shop Installment Loan — mga produkto, presyo, onboarding, servicing, incentives, at support — nasa isang lugar. Gamitin ang search bar o ang chat bubble (kanang-baba) para sa mabilisang sagot."
        : "Everything on the Tonik Shop Installment Loan — products, pricing, onboarding, servicing, incentives, and support — in one place. Use the search bar or the chat bubble (bottom right) for a quick answer.";
    let html = `
      <div class="home-hero">
        <h1>SIL Wiki</h1>
        <p class="sub">${heroSub}</p>
      </div>
    `;
    categories.forEach((cat) => {
      const catSections = sections.filter((s) => s.category === cat.id);
      if (!catSections.length) return;
      html += `<h3 style="margin-top:26px;">${tCatLabel(cat)}</h3><div class="home-grid">`;
      catSections.forEach((s) => {
        const pendingBadge = lang === "tl" && !isTranslated(s) ? `<span style="float:right; font-size:.62rem; background:var(--purple-100); color:var(--purple-700); padding:2px 7px; border-radius:10px; font-weight:700;">EN</span>` : "";
        html += `
          <div class="home-card" data-id="${s.id}">
            ${iconHtml(cat.id)}
            <div class="cat-label">${tCatLabel(cat)}${pendingBadge}</div>
            <h4>${tTitle(s)}</h4>
          </div>`;
      });
      html += `</div>`;
    });
    contentEl.innerHTML = html;
    contentEl.querySelectorAll(".home-card").forEach((card) => {
      card.addEventListener("click", () => {
        window.location.hash = card.dataset.id;
      });
    });
  }

  function renderSection(id) {
    const s = sectionById(id);
    if (!s) {
      renderHome();
      return;
    }
    buildSidebar(id);
    const cat = categories.find((c) => c.id === s.category) || {};
    const catLabel = tCatLabel(cat) || "";
    let flagsHtml = "";
    if (s.flags && s.flags.length) {
      const noteWord = lang === "tl" ? "⚠ Paalala" : "⚠ Note";
      flagsHtml = `<div class="section-flags"><strong>${noteWord}</strong><ul>${s.flags
        .map((f) => `<li>${f}</li>`)
        .join("")}</ul></div>`;
    }
    let pendingHtml = "";
    if (lang === "tl" && !isTranslated(s)) {
      pendingHtml = `<div class="tl-pending-note">🇬🇧 Taglish translation for this page isn't ready yet — showing the English version below.</div>`;
    }
    const lastUpdatedWord = lang === "tl" ? "Huling update" : "Last updated";
    const sourceWord = lang === "tl" ? "Pinagmulan" : "Source";
    contentEl.innerHTML = `
      <article class="section">
        ${iconHtml(s.category)}
        <div class="cat-label" style="color:var(--purple-600); font-weight:700; font-size:.72rem; text-transform:uppercase; letter-spacing:.06em;">${catLabel}</div>
        <h1>${tTitle(s)}</h1>
        <div class="section-meta">
          <span>📅 ${lastUpdatedWord}: ${s.lastUpdated}</span>
          <span>📄 ${sourceWord}: ${s.source}</span>
        </div>
        ${flagsHtml}
        ${pendingHtml}
        ${tBody(s)}
      </article>
    `;
    contentEl.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function renderSearch(query) {
    buildSidebar(null);
    const q = query.trim().toLowerCase();
    if (!q) {
      renderHome();
      return;
    }
    const results = sections.filter((s) => {
      const hay = (tTitle(s) + " " + tBody(s) + " " + s.title + " " + s.body).toLowerCase();
      return hay.includes(q);
    });
    const label = lang === "tl" ? `Resulta ng paghahanap para sa "${query}" (${results.length})` : `Search results for "${query}" (${results.length})`;
    let html = `<h2 style="font-size:1.2rem;">${label}</h2>`;
    if (!results.length) {
      const noneMsg = lang === "tl" ? "Walang natagpuan. Subukan ang chat bubble sa kanang-baba — madalas nitong masasagot agad." : "No matches. Try the chat bubble in the bottom right — it can often answer directly.";
      html += `<p>${noneMsg}</p>`;
    } else {
      html += `<ul class="search-results-list">`;
      results.forEach((s) => {
        const cat = categories.find((c) => c.id === s.category) || {};
        html += `<li data-id="${s.id}"><div class="cat-label">${tCatLabel(cat)}</div><strong>${tTitle(s)}</strong></li>`;
      });
      html += `</ul>`;
    }
    contentEl.innerHTML = html;
    contentEl.querySelectorAll(".search-results-list li").forEach((li) => {
      li.addEventListener("click", () => {
        window.location.hash = li.dataset.id;
      });
    });
  }

  function route() {
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "home") {
      renderHome();
    } else {
      renderSection(hash);
    }
  }

  window.addEventListener("hashchange", route);

  let searchTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    const val = e.target.value;
    searchTimer = setTimeout(() => {
      if (val.trim()) {
        window.location.hash = "";
        renderSearch(val);
      } else {
        route();
      }
    }, 150);
  });

  window.SIL_jumpToSection = function (id) {
    window.location.hash = id;
  };
  window.SIL_getLang = function () {
    return lang;
  };

  route();
})();
