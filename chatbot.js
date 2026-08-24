(function () {
  const faqs = window.SIL_FAQS || [];
  const sections = window.SIL_SECTIONS || [];

  const toggleBtn = document.getElementById("chat-toggle");
  const chatLabel = document.getElementById("chat-label");
  const chatBadge = document.getElementById("chat-badge");
  const panel = document.getElementById("chat-panel");
  const closeBtn = document.getElementById("chat-close");
  const body = document.getElementById("chat-body");
  const suggestionsEl = document.getElementById("chat-suggestions");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  const STOPWORDS = new Set([
    "the","is","a","an","of","to","for","in","on","what","how","do","does","i",
    "my","can","po","ba","ang","ng","sa","kung","paano","ano","yung","and","or",
    "are","it","this","that","with","you","your","we","us","if","when","where",
  ]);

  function tokenize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9%₱\s]/gi, " ")
      .split(/\s+/)
      .filter((t) => t && !STOPWORDS.has(t));
  }

  function scoreEntry(queryTokens, entry) {
    let score = 0;
    const allKeywords = entry.keywords.concat(entry.keywordsTL || []);
    const haystacks = [entry.q.toLowerCase(), ...allKeywords.map((k) => k.toLowerCase())];
    if (entry.qTL) haystacks.push(entry.qTL.toLowerCase());
    // exact keyword phrase match = big boost
    const lowerQuery = queryTokens.join(" ");
    allKeywords.forEach((k) => {
      if (lowerQuery.includes(k.toLowerCase()) || k.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
    });
    queryTokens.forEach((t) => {
      haystacks.forEach((h) => {
        if (h.split(/\s+/).includes(t)) score += 2;
        else if (h.includes(t) && t.length > 3) score += 1;
      });
    });
    return score;
  }

  function findBestMatches(query, limit) {
    const tokens = tokenize(query);
    if (!tokens.length) return [];
    const scored = faqs
      .map((entry) => ({ entry, score: scoreEntry(tokens, entry) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);
    return scored.slice(0, limit || 1).map((x) => x.entry);
  }

  function appendMessage(text, who, sectionId) {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.innerHTML = text;
    if (sectionId) {
      const sec = sections.find((s) => s.id === sectionId);
      if (sec) {
        const link = document.createElement("a");
        link.href = "#" + sectionId;
        link.className = "read-more";
        link.textContent = "Read full section →";
        link.addEventListener("click", () => {
          panel.classList.remove("open");
        });
        div.appendChild(document.createElement("br"));
        div.appendChild(link);
      }
    }
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function botReply(query) {
    const lang = window.SIL_getLang ? window.SIL_getLang() : "en";
    const matches = findBestMatches(query, 1);
    if (!matches.length) {
      const noMatchMsg =
        lang === "tl"
          ? "Wala pa akong sagot dyan. Subukang i-rephrase, mag-browse gamit ang menu sa kaliwa, o itanong sa iyong TSM / Sales Ops."
          : "I don't have that one yet. Try rephrasing, browse the wiki using the menu on the left, or ask your TSM / Sales Ops for anything not covered here.";
      appendMessage(noMatchMsg, "bot");
      return;
    }
    const best = matches[0];
    const answer = lang === "tl" && best.aTL ? best.aTL : best.a;
    appendMessage(answer, "bot", best.sectionId);
  }

  function seedSuggestions() {
    const picks = [
      "What is SIL Zero?",
      "How do I compute the monthly installment?",
      "What is PayHinga?",
      "What causes a zero bonus?",
      "How do I escalate via Viber?",
    ];
    suggestionsEl.innerHTML = "";
    picks.forEach((p) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = p;
      chip.addEventListener("click", () => {
        appendMessage(p, "user");
        botReply(p);
      });
      suggestionsEl.appendChild(chip);
    });
  }

  function openChat() {
    panel.classList.add("open");
    input.focus();
    if (chatLabel) chatLabel.classList.add("hidden");
    if (chatBadge) chatBadge.style.display = "none";
  }

  toggleBtn.addEventListener("click", () => {
    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
    } else {
      openChat();
    }
  });
  if (chatLabel) chatLabel.addEventListener("click", openChat);
  closeBtn.addEventListener("click", () => panel.classList.remove("open"));

  // Re-show the nudge label after a stretch of inactivity, so it's not one-and-done.
  setTimeout(() => {
    if (chatLabel && !panel.classList.contains("open")) chatLabel.classList.remove("hidden");
  }, 25000);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    appendMessage(val.replace(/</g, "&lt;"), "user");
    input.value = "";
    setTimeout(() => botReply(val), 200);
  });

  if (chatBadge) chatBadge.textContent = String(faqs.length);

  // Welcome message
  const lang0 = window.SIL_getLang ? window.SIL_getLang() : "en";
  const welcomeMsg =
    lang0 === "tl"
      ? "Kumusta! Ako ang SIL Wiki assistant. Itanong mo sa akin ang kahit ano tungkol sa SIL products, pricing, PayHinga, onboarding, incentives, o escalations — sasagutin ko galing sa training decks at memos, at ililink kita sa buong page."
      : "Hi! I'm the SIL Wiki assistant. Ask me anything about SIL products, pricing, PayHinga, onboarding, incentives, or escalations — I'll answer from the training decks and memos, and link you to the full page.";
  appendMessage(welcomeMsg, "bot");
  seedSuggestions();
})();
