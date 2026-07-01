/* ============================================================
   TYC — The Young Constituents · main.js
   Single-page navigation + UI interactions
   ============================================================ */

/* ── Config ──────────────────────────────────────────────── */
const APPLY_LINKS = {
  member:    "https://docs.google.com/forms/d/e/1FAIpQLScrKZyRV3stFYhGUeMDgzVvuw_MWl_0UU0j1QYlCcv4ieN3jg/viewform",
  municipal: "https://docs.google.com/forms/d/e/1FAIpQLScrKZyRV3stFYhGUeMDgzVvuw_MWl_0UU0j1QYlCcv4ieN3jg/viewform",
  school:    "https://docs.google.com/forms/d/e/1FAIpQLScrKZyRV3stFYhGUeMDgzVvuw_MWl_0UU0j1QYlCcv4ieN3jg/viewform",
};

const NAV_PAGES = ["home", "about", "team", "events", "join", "contact", "blog"];
const LANGUAGE_KEY = "tyc-language";

const translations = {
  fr: {
    /* Navigation */
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_events: "Événements & programmes",
    nav_join: "Participer",
    nav_contact: "Contact",
    nav_blog: "Blog",
    nav_donate: "Faire un don",
    nav_become_member: "Devenir membre",

    /* Hero */
    hero_tagline: "National · Fondé en 2026",
    hero_title: "Gouvernance jeunesse.<br />Enjeux réels.<br /><span class=\"text-orange\">Un mouvement.</span>",
    hero_text: "The Young Constituents construit la prochaine génération de leaders civiques canadiens par un gouvernement parallèle, de vrais parlements, une vraie responsabilité et un impact réel.",
    hero_cta_primary: "Devenir membre",
    hero_cta_secondary: "En savoir plus",

    /* Mission / Statement */
    mission_tagline: "Notre déclaration",
    mission_title: "Pensée indépendante, action indépendante.",
    mission_text: "Nous nous gouvernons pour mieux gouverner ensemble. TYC permet aux jeunes Canadiens de 13 à 28 ans d’agir avec autorité, structure et responsabilité.",

    /* Structure */
    structure_tagline: "La structure",
    structure_title: "4 niveaux. Une ambition.",
    structure_text: "Une structure conçue pour évoluer, de l'école à la nation.",
    structure_level_1: "Chapitre scolaire",
    structure_level_1_text: "Là où tout commence. Éducation civique, parlement modèle et plaidoyer local au sein de votre école.",
    structure_level_2: "Division municipale",
    structure_level_2_text: "Une vraie chambre parlementaire. Gouvernée par le modèle 20/80. Votre circonscription, vos enjeux, votre responsabilité.",
    structure_level_3: "Chapitre provincial",
    structure_level_3_text: "Six provinces. Une étape compétitive. Parlement modèle, sommets provinciaux et leadership inter-division.",
    structure_level_4: "Niveau national",
    structure_level_4_text: "Stratégie, partenariats et autorité constitutionnelle. Le parlement national où les provinces tiennent le C-Suite responsable.",

    /* Live / Members */
    live_tagline: "Présent · À travers le Canada",
    live_title: "Membres en croissance",
    live_text: "À travers 6 provinces. Âgés de 13 à 28 ans. Construire une démocratie parallèle depuis la base.",
    live_cta: "Devenir membre",

    /* Chapters */
    chapters_tagline: "Côte à côte",
    chapters_title: "Actif à travers le Canada.",
    chapter_active: "Chapitre actif",

    /* Leadership / Team */
    leadership_tagline: "Leadership",
    leadership_title: "Dirigé par des jeunes Canadiens.",

    /* Blog */
    blog_tagline: "Actualités · Histoires",
    blog_title_section: "Du TYC.",
    blog_description: "Mises à jour, histoires et réflexions du mouvement The Young Constituents.",
    blog_latest_tagline: "Dernier",
    blog_section_title: "Notre blog.",
    blog_post_title: "Le récit de TYC",
    blog_post_preview: "Bienvenue à notre premier article. Découvrez comment TYC a commencé et où nous allons.",
    blog_read_more: "Lire la suite →",

    /* About */
    about_tagline: "À propos de TYC",
    about_title: "Nous n'attendons pas pour diriger.",
    about_text: "The Young Constituents est né d'une seule conviction : les jeunes ne manquent pas d'idées ni d'ambition. Ils manquent d'autorité pour gouverner.",
    about_preamble_tagline: "Préambule",
    about_quote: "Nous soutenons que les jeunes ne manquent pas d'idées ou d'ambition ; ils manquent de l'autorité de gouverner pour agir sur celles-ci.",
    about_preamble_text: "Le principe fondateur de TYC est le paradoxe de l'indépendance et de la dépendance : pour gouverner ensemble, nous devons d'abord apprendre à nous gouverner.",
    about_mission_tagline: "Mission",
    about_mission_title: "Notre mission.",
    about_mission_text: "TYC établit une infrastructure de gouvernance parallèle où les jeunes apprennent en gouvernant, en gérant des parlements, en débattant des politiques et en se tenant mutuellement responsables.",

    /* Values */
    values_tagline: "Valeurs",
    values_title: "Ce que nous défendons.",
    value_1: "L'indépendance avant l'influence.",
    value_2: "L'autorité par la responsabilité.",
    value_3: "La structure comme chemin vers l'échelle.",
    value_4: "Dirigé par la jeunesse, gouverné par la jeunesse, sans exception.",
    value_5: "Non partisan dans la posture, décisif dans l'action.",

    /* Structure section (alternate keys) */
    structure_section_tagline: "Structure",
    structure_section_title: "Comment TYC est construit.",
    structure_1_tag: "Niveau 01",
    structure_1_title: "National",
    structure_1_text: "Stratégie, partenariats et autorité constitutionnelle. Le C-Suite rend compte au parlement national.",
    structure_2_tag: "Niveau 02",
    structure_2_title: "Provincial",
    structure_2_text: "Six chapitres provinciaux avec leur propre Parlement modèle et cycles de sommets provinciaux.",
    structure_3_tag: "Niveau 03",
    structure_3_title: "Local",
    structure_3_text: "Deux flux : Divisions municipales (vraies chambres parlementaires, gouvernées 20/80) et chapitres scolaires (éducation civique et plaidoyer local).",

    /* Founding */
    founding_tagline: "Fondation",
    founding_title: "Une constitution construite par sa première génération.",
    founding_text: "The Young Constituents a été fondé par Xavier Davis et adopté le 2 mai 2026. Il repose sur la conviction que les jeunes gouvernent mieux lorsqu'on leur donne de vrais enjeux et responsabilités.",
    founding_cta: "Devenir membre",

    /* Team / Executive */
    team_tagline: "L'équipe",
    team_title: "Les personnes qui construisent ceci.",
    executive_tagline: "Exécutif national",
    executive_title: "Le C-Suite.",
    executive_text: "Cinq cadres responsables devant le Parlement national selon la constitution adoptée le 2 mai 2026.",
    role_ceo: "Directeur fondateur & PDG",
    role_coo: "Directeur des opérations",
    role_cco: "Directeur de la communication",
    role_cdo: "Directeur du développement",
    role_cio: "Directeur de l'information",

    /* Provincial leadership */
    provincial_leadership_tagline: "Leadership provincial",
    provincial_leadership_title: "Six présidents. Six provinces.",
    provincial_leadership_text: "Les présidents provinciaux dirigent le Parlement modèle de leur chapitre, les sommets et la coordination inter-division.",
    provincial_president_title: "Président provincial",

    /* Join / Careers */
    join_team_tagline: "Postes ouverts",
    join_team_title: "Vous voulez en faire partie ?",
    join_team_text: "Nous construisons la prochaine génération de leaders civiques. Consultez nos offres nationales.",
    join_team_cta: "Voir les postes ouverts",

    /* Join page / Paths */
    three_paths_tagline: "Trois voies",
    join_hero_tagline: "Participer",
    join_hero_title: "Votre siège.<br />Vous attend.",
    join_hero_text: "Que vous ayez 13 ou 28 ans, en école ou en ville, il y a une place pour vous dans TYC.",
    join_path_member_title: "Devenir membre",
    join_path_member_text: "Rejoignez une division municipale ou un chapitre scolaire dans votre province. 13 à 28 ans. Obtenez un siège actif, participez aux procédures parlementaires et aidez à façonner votre communauté.",
    join_path_member_cta: "Postuler pour devenir membre",
    join_path_municipal_title: "Démarrer une division municipale",
    join_path_municipal_text: "Voulez-vous apporter le modèle parlementaire à votre ville ou circonscription ? Postulez pour établir une division municipale et devenez directeur local.",
    join_path_municipal_cta: "Postuler pour démarrer un chapitre municipal",
    join_path_school_title: "Démarrer un chapitre scolaire",
    join_path_school_text: "Apportez TYC à votre école. Dirigez l'éducation civique, le parlement modèle et le plaidoyer en tant que président de chapitre.",
    join_path_school_cta: "Postuler pour démarrer un chapitre scolaire",

    /* Positions / Openings */
    positions_tagline: "Postes ouverts",
    positions_title: "Nous grandissons.",
    positions_text: "Rejoignez l'équipe nationale. De nouvelles offres sont ajoutées régulièrement.",
    positions_open_text: "0 postes ouverts",

    /* Blog post / article */
    post_hero_tagline: "Article de blog",
    post_hero_title: "Le récit de TYC.<br /><span class=\"text-orange\">Notre histoire.</span>",
    post_hero_byline: "par Xavier Davis, 27 juin 2026",
    back_to_blog: "Retour au blog",
    post_paragraph_1: "Pendant longtemps, je me suis senti coincé dans des clubs « dirigés par des étudiants » qui n'en étaient pas réellement. C'étaient des réunions hebdomadaires gérées par des enseignants, enveloppées de formalités, où la jeunesse était gérée plutôt qu'autorisée.",
    post_paragraph_2: "Puis, pendant un service à 21h16, j'ai réfléchi et je me suis dit : je vais créer ma propre organisation. Dès maintenant.",
    post_paragraph_3: "Cette nuit-là, j'ai coordonné les détails, construit le cadre et lancé The Young Constituents. TYC n'est pas un projet passager ; c'est un système conçu pour produire des leaders capables d'avoir un impact tangible.",

    /* Misc / Footer / Contact */
    contact_tagline: "Contact",
    contact_hero_title: "Entrer en contact",
    contact_sidebar_title: "Nous lisons chaque message que nous recevons.",
    contact_reach_us: "Contactez-nous",

    /* Language toggle labels */
    lang_toggle: "English",
    lang_toggle_mobile: "English",

    /* Fallbacks */
    status_ok: "Merci de nous avoir contactés. Nous vous répondrons sous peu.",
    status_error: "Désolé, nous n'avons pas pu envoyer votre message. Veuillez réessayer plus tard.",

    /* Footer */
    footer_tagline: "Independent Thought, Independent Action",
    footer_description: "Un mouvement national de gouvernance jeunesse construisant la prochaine génération de leaders civiques canadiens.",
    footer_copyright: "© 2026 The Young Constituents",
    footer_explore: "Explorer",
    footer_connect: "Se connecter",
    footer_link_home: "Accueil",
    footer_link_about: "À propos",
    footer_link_team: "Notre équipe",
    footer_link_events: "Événements & programmes",
    footer_link_join: "Participer",
    footer_link_contact: "Contact",
    footer_link_donate: "Faire un don",

    /* Contact form labels */
    contact_label_name: "Nom",
    contact_label_email: "Courriel",
    contact_label_subject: "Sujet",
    contact_label_message: "Message",
    contact_send: "Envoyer le message",

    /* Header / Logo */
    logo_tagline: "Independent Thought, Independent Action",
    logo_description: "Un mouvement national de gouvernance jeunesse construisant la prochaine génération de leaders civiques canadiens.",

    /* Team bios / misc */
    ceo_bio: "Fondateur de The Young Constituents. Architecte du modèle de gouvernance parallèle et du cadre constitutionnel adopté en mai 2026.",


    /* Donation page */
    donation_hero_tagline: "Soutenir le mouvement",
    donation_hero_title: "Financer la prochaine génération de leaders du Canada.",
    donation_hero_text: "Votre contribution soutient directement l'infrastructure de gouvernance parallèle, les parlements jeunesse et le matériel des chapitres locaux à travers le Canada.",
    donation_invest_tagline: "Investir dans l'action civique",
    donation_title: "Choisissez un niveau de don",
    donation_text: "Sélectionnez une option ci-dessous pour effectuer votre transaction sécurisée via notre passerelle de paiement.",
    donation_support_25: "Soutient les fournitures de chapitre.",
    donation_support_50: "Finance les lieux de division locale.",
    donation_support_100: "Finance un sommet national.",
    donation_cta: "Faire un don",

    /* Events */
    events_hero_tagline: "Actualités · Événements & programmes",
    events_hero_title: "Ce qui se passe chez TYC.",
    featured_tagline: "En vedette",
    featured_event_title: "Première réunion nationale trimestrielle",
    featured_event_desc: "La réunion trimestrielle inaugurale du Parlement national. Les présidents provinciaux et le C-Suite se réunissent pour rendre compte, débattre et définir l'ordre du jour pour le T3 2026.",
    featured_event_location: "Virtuel · Toutes les provinces",
    learn_more: "En savoir plus",
    meet_full_team: "Rencontrez l'équipe complète",

    /* Submissions / Events CTA */
    submissions_tagline: "Soumissions",
    submissions_title: "Avez-vous un événement ou un programme à soumettre ?",
    submissions_text: "Les responsables de chapitre et les directeurs municipaux peuvent soumettre des événements ou des programmes pour inclusion.",
    submissions_cta: "Contactez-nous",
    positions_none_text: "Aucun poste actuellement ouvert. Revenez bientôt.",
    post_brand_tagline: "The Young Constituents - Independent Thought, Independent Action",
  }
};

/* ── Helpers ─────────────────────────────────────────────── */
function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return [...root.querySelectorAll(sel)]; }

function makePlaceholder(label, cls = "") {
  const div = document.createElement("div");
  div.className = "placeholder" + (cls ? " " + cls : "");
  div.textContent = label;
  return div;
}

function makeDateBadge(d, m, year, large = false) {
  const div = document.createElement("div");
  div.className = "date-badge" + (large ? " large" : "");
  div.innerHTML = `
    <div class="day">${d}</div>
    <div class="month">${m}</div>
    ${year ? `<div class="year">${year}</div>` : ""}
  `;
  return div;
}

/* ── Router ──────────────────────────────────────────────── */
function navigateTo(pageId, pushState = true) {
  $$(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }

  // Update active nav link
  $$(".nav-link, .mobile-nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.page === pageId);
  });

  if (pushState) {
    const url = pageId === "home" ? "/" : "/" + pageId;
    history.pushState({ page: pageId }, "", url);
  }

  document.title = getTitle(pageId);
  closeMobileMenu();
}

function getTitle(page) {
  const titles = {
    home:    "The Young Constituents — Youth Governance. Real Stakes. One Movement.",
    about:   "About — The Young Constituents",
    team:    "Our Team — The Young Constituents",
    events:  "Events & Programs — The Young Constituents",
    join:    "Get Involved — The Young Constituents",
    contact: "Contact — The Young Constituents",
    blog:    "Blog — The Young Constituents",
  };
  return titles[page] || "The Young Constituents";
}

// Handle browser back/forward
window.addEventListener("popstate", (e) => {
  const page = (e.state && e.state.page) ? e.state.page : "home";
  navigateTo(page, false);
});

// Intercept all [data-page] links
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-page]");
  if (link) {
    e.preventDefault();
    navigateTo(link.dataset.page);
  }
});

/* ── Header scroll ───────────────────────────────────────── */
const siteHeader = document.getElementById("site-header");
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

/* ── Mobile menu ─────────────────────────────────────────── */
const overlay = document.getElementById("mobile-overlay");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

function openMobileMenu()  { overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileMenu() { overlay.classList.remove("open"); document.body.style.overflow = ""; }

menuBtn.addEventListener("click", openMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeMobileMenu(); });

/* ── Member counter (simulated / fetched) ────────────────── */
function animateCount(el, target, duration = 1800) {
  const start = performance.now();
  const startVal = 0;
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(startVal + eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const memberCountEl = document.getElementById("member-count");
if (memberCountEl) {
  // Display placeholder; in prod this would fetch from your API
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCount(memberCountEl, 100);
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(memberCountEl);
}

/* ── Contact form ────────────────────────────────────────── */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    clearErrors();
    const form = contactForm;
    const name    = form.c_name.value.trim();
    const email   = form.c_email.value.trim();
    const subject = form.c_subject.value.trim();
    const message = form.c_message.value.trim();

    let valid = true;

    if (!name) { showError("err-name", "Name is required."); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError("err-email", "Enter a valid email."); valid = false; }
    if (message.length < 10) { showError("err-message", "Message must be at least 10 characters."); valid = false; }

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action || "/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const statusEl = document.getElementById("form-status");
      statusEl.textContent = "Thanks for reaching out. We will get back to you shortly.";
      statusEl.className = "status-ok";
      form.reset();
    } catch (error) {
      const statusEl = document.getElementById("form-status");
      statusEl.textContent = "Sorry, we could not send your message. Please try again later.";
      statusEl.className = "status-error";
      console.error(error);
    } finally {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }
  });

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; }
  }
  function clearErrors() {
    $$(".field-error", contactForm).forEach(el => { el.textContent = ""; });
    const status = document.getElementById("form-status");
    if (status) status.textContent = "";
  }
}

function updateLanguageButtons(lang) {
  const label = lang === "fr" ? "English" : "Français";
  const toggle = document.getElementById("language-toggle");
  const mobileToggle = document.getElementById("language-toggle-mobile");
  if (toggle) toggle.textContent = label;
  if (mobileToggle) mobileToggle.textContent = label;
}

function translatePage(lang) {
  document.documentElement.lang = lang === "fr" ? "fr" : "en";
  $$('[data-i18n-key]').forEach(el => {
    const key = el.dataset.i18nKey;
    const original = el.dataset.i18nOriginal || (el.dataset.i18nHtml !== undefined ? el.innerHTML : el.textContent || "");
    if (!el.dataset.i18nOriginal) {
      el.dataset.i18nOriginal = original;
    }

    const value = translations[lang] && translations[lang][key];
    const nextValue = value !== undefined ? value : original;
    const hasMarkup = el.dataset.i18nHtml !== undefined || /<\/?[a-z][\s\S]*>/i.test(nextValue);

    if (hasMarkup) {
      el.innerHTML = nextValue;
    } else {
      el.textContent = nextValue;
    }
  });

  updateLanguageButtons(lang);
  localStorage.setItem(LANGUAGE_KEY, lang);
}

function toggleLanguage() {
  const current = localStorage.getItem(LANGUAGE_KEY) || "en";
  translatePage(current === "fr" ? "en" : "fr");
}

const languageToggle = document.getElementById("language-toggle");
const languageToggleMobile = document.getElementById("language-toggle-mobile");
if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
if (languageToggleMobile) languageToggleMobile.addEventListener("click", toggleLanguage);

/* ── Init: resolve page from URL ─────────────────────────── */
(function init() {
  const initialLang = localStorage.getItem(LANGUAGE_KEY) || "en";
  translatePage(initialLang);

  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const page = path && NAV_PAGES.includes(path) ? path : "home";
  history.replaceState({ page }, "", window.location.href);
  navigateTo(page, false);
})();
