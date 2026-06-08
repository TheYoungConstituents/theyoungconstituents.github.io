/* ============================================================
   TYC — The Young Constituents · main.js
   Single-page navigation + UI interactions
   ============================================================ */

/* ── Config ──────────────────────────────────────────────── */
const APPLY_LINKS = {
  member:    "https://forms.gle/PLACEHOLDER-member",
  municipal: "https://forms.gle/PLACEHOLDER-municipal",
  school:    "https://forms.gle/PLACEHOLDER-school",
};

const NAV_PAGES = ["home", "about", "team", "events", "join", "contact"];

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
    events:  "Events & News — The Young Constituents",
    join:    "Get Involved — The Young Constituents",
    contact: "Contact — The Young Constituents",
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

    // Simulate network delay (replace with real fetch to your backend)
    await new Promise(r => setTimeout(r, 1000));

    const statusEl = document.getElementById("form-status");
    statusEl.textContent = "Thanks for reaching out. We will get back to you shortly.";
    statusEl.className = "status-ok";
    form.reset();
    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
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

/* ── Init: resolve page from URL ─────────────────────────── */
(function init() {
  const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const page = path && NAV_PAGES.includes(path) ? path : "home";
  history.replaceState({ page }, "", window.location.href);
  navigateTo(page, false);
})();
