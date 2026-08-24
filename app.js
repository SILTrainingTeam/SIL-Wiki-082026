(function () {
  const sections = window.SIL_SECTIONS;
  const categories = window.SIL_CATEGORIES;
  const meta = window.SIL_META;

  const sidebarEl = document.getElementById("sidebar-nav");
  const contentEl = document.getElementById("content");
  const searchInput = document.getElementById("global-search");
  const lastPublishedEl = document.getElementById("last-published");
  const confBanner = document.getElementById("confidential-banner");

  document.getElementById("org-name").textContent = meta.orgName;
  lastPublishedEl.textContent = "Last published: " + meta.lastPublished;
  confBanner.textContent = meta.confidentialityNotice;

  function sectionById(id) {
    return sections.find((s) => s.id === id);
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
      h3.textContent = cat.label;
      sidebarEl.appendChild(h3);
      const wrap = document.createElement("div");
      wrap.className = "nav-cat";
      catSections.forEach((s) => {
        const a = document.createElement("a");
        a.className = "nav-item" + (s.id === activeId ? " active" : "");
        a.textContent = s.title;
        a.href = "#" + s.id;
        wrap.appendChild(a);
      });
      sidebarEl.appendChild(wrap);
    });
  }

  function renderHome() {
    buildSidebar(null);
    let html = `
      <div class="home-hero">
        <h1>SIL Wiki</h1>
        <p class="sub">Everything on the Tonik Shop Installment Loan — products, pricing, onboarding, servicing,
        incentives, and support — in one place. Use the search bar or the chat bubble (bottom right) for a quick answer.</p>
      </div>
    `;
    categories.forEach((cat) => {
      const catSections = sections.filter((s) => s.category === cat.id);
      if (!catSections.length) return;
      html += `<h3 style="margin-top:26px;">${cat.label}</h3><div class="home-grid">`;
      catSections.forEach((s) => {
        html += `
          <div class="home-card" data-id="${s.id}">
            <div class="cat-label">${cat.label}</div>
            <h4>${s.title}</h4>
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
    const catLabel = (categories.find((c) => c.id === s.category) || {}).label || "";
    let flagsHtml = "";
    if (s.flags && s.flags.length) {
      flagsHtml = `<div class="section-flags"><strong>⚠ Note</strong><ul>${s.flags
        .map((f) => `<li>${f}</li>`)
        .join("")}</ul></div>`;
    }
    contentEl.innerHTML = `
      <article class="section">
        <div class="cat-label" style="color:var(--purple-600); font-weight:700; font-size:.72rem; text-transform:uppercase; letter-spacing:.06em;">${catLabel}</div>
        <h1>${s.title}</h1>
        <div class="section-meta">
          <span>📅 Last updated: ${s.lastUpdated}</span>
          <span>📄 Source: ${s.source}</span>
        </div>
        ${flagsHtml}
        ${s.body}
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
      const hay = (s.title + " " + s.body).toLowerCase();
      return hay.includes(q);
    });
    let html = `<h2 style="font-size:1.2rem;">Search results for "${query}" (${results.length})</h2>`;
    if (!results.length) {
      html += `<p>No matches. Try the chat bubble in the bottom right — it can often answer directly.</p>`;
    } else {
      html += `<ul class="search-results-list">`;
      results.forEach((s) => {
        const catLabel = (categories.find((c) => c.id === s.category) || {}).label || "";
        html += `<li data-id="${s.id}"><div class="cat-label">${catLabel}</div><strong>${s.title}</strong></li>`;
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

  // Expose a jump function for the chatbot to use
  window.SIL_jumpToSection = function (id) {
    window.location.hash = id;
  };

  route();
})();
