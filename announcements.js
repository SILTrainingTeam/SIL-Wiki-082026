/* SIL WIKI — WHAT'S NEW ANNOUNCEMENTS
   A short, hand-curated feed shown at the top of the homepage — NOT an
   automatic list of every edit. Only add an entry here for something a
   promoter genuinely needs to notice (a rate change, a new required
   process, a new page worth knowing about).

   TO ADD A NEW ANNOUNCEMENT:
   1. Copy an entry below, put it FIRST in the array (newest on top).
   2. Keep "date" in YYYY-MM-DD format — that's what "New" badges (last 7
      days) and sorting are based on.
   3. "blurb" should be 1 short sentence — link to the full page via
      "sectionId" rather than repeating detail here.
   4. Only keep the most recent ~6-8 entries — delete the oldest one(s)
      when you add a new one, so this stays a quick scan, not an archive.
      (Nothing is lost — the full history still lives on each page's
      "Last updated" date and in the Change Log.) */

const SIL_ANNOUNCEMENTS = [
  {
    date: "2026-09-01",
    title: "CORRECTED: SIL Processing Fee — ULIT A is 0%, not 5%",
    titleTL: "NAITAMA: SIL Processing Fee — ULIT A ay 0%, hindi 5%",
    blurb: "Finalized dates: Standard/ULIT B 5% (Sept 8), ULIT A 0% (Sept 12, a decrease), SIL Zero 12% (Sept 14 — now confirmed).",
    blurbTL: "Final na petsa: Standard/ULIT B 5% (Sept 8), ULIT A 0% (Sept 12, pagbaba), SIL Zero 12% (Sept 14 — kumpirmado na).",
    sectionId: "sil-processing-fee-update",
  },
  {
    date: "2026-09-01",
    title: "VAS Penetration Rate target raised to 80%",
    titleTL: "Tumaas ang VAS Penetration Rate target sa 80%",
    blurb: "One of the 5 bonus-eligibility KPIs — the VAS Penetration Rate target moved from 75% to 80%, effective Sept 1, 2026.",
    blurbTL: "Isa sa 5 KPIs para sa bonus eligibility — tumaas ang VAS Penetration Rate target mula 75% patungong 80%, epektibo Sept 1, 2026.",
    sectionId: "kpi-overview",
  },
  {
    date: "2026-08-24",
    title: "New: Risk tactics, fraud types, KPI math, and a full HR section",
    titleTL: "Bago: Risk tactics, uri ng fraud, KPI math, at buong HR section",
    blurb: "Added FSTPD30 explained, red-flag customer signs, a KPI calculation walkthrough, and a new HR & Company Policies category.",
    blurbTL: "Idinagdag ang FSTPD30 explained, red-flag customer signs, KPI calculation walkthrough, at bagong HR & Company Policies category.",
    sectionId: "fstpd30-explained",
  },
  {
    date: "2026-08-19",
    title: "Taglish (EN/TL) version launched",
    titleTL: "Nailunsad na ang bersyong Taglish (EN/TL)",
    blurb: "The whole wiki now has an EN | TL toggle at the top — the chatbot answers in Taglish too.",
    blurbTL: "May EN | TL toggle na ngayon ang buong wiki sa itaas — sumasagot din sa Taglish ang chatbot.",
    sectionId: "bundling-guidelines",
  },
];

window.SIL_ANNOUNCEMENTS = SIL_ANNOUNCEMENTS;
