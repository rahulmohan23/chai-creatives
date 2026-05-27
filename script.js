/* ================================================================
   CHAI CREATIVES — SCRIPT (SPA page navigation)
================================================================ */

/* ── DOM REFS ────────────────────────────────────────────────── */
const loader    = document.getElementById('loader');
const site      = document.getElementById('site');
const header    = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const cursor    = document.getElementById('cursor');

/* ── LOADER ──────────────────────────────────────────────────── */
const LOADER_EXIT   = 2650;
const LOADER_REMOVE = 3750;

setTimeout(() => {
  loader.classList.add('is-leaving');
  site.classList.add('is-ready');
  document.body.classList.remove('is-loading');
}, LOADER_EXIT);

setTimeout(() => {
  loader.remove();
}, LOADER_REMOVE);

/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
let cursorX = 0, cursorY = 0;
let rafCursor;

document.addEventListener('mousemove', e => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursor.classList.add('is-visible');
  if (!rafCursor) {
    rafCursor = requestAnimationFrame(() => {
      cursor.style.left = cursorX + 'px';
      cursor.style.top  = cursorY + 'px';
      rafCursor = null;
    });
  }
});

document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'));
document.addEventListener('mouseenter', () => cursor.classList.remove('is-hidden'));

const hoverTargets = 'a, button, .service-card, .value-card, .logo-card, .cta-btn';
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
});

/* ── STICKY HEADER ───────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

/* ── PAGE NAVIGATION ─────────────────────────────────────────── */
const pages       = document.querySelectorAll('.page');
const navLinks    = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');

function navigateTo(pageId) {
  const target = document.getElementById('page-' + pageId);
  if (!target) return;

  pages.forEach(p => p.classList.remove('is-active'));
  target.classList.add('is-active');

  [...navLinks, ...mobileLinks].forEach(l => {
    l.classList.toggle('is-active', l.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
  header.classList.remove('is-scrolled');
  closeMobileNav();
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.page);
  });
});

/* ── MOBILE NAV ──────────────────────────────────────────────── */
function openMobileNav() {
  hamburger.classList.add('is-open');
  mobileNav.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileNav.setAttribute('aria-hidden',   'false');
  document.body.classList.add('nav-open');
}

function closeMobileNav() {
  hamburger.classList.remove('is-open');
  mobileNav.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden',   'true');
  document.body.classList.remove('nav-open');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('is-open') ? closeMobileNav() : openMobileNav();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});

/* ── INITIAL PAGE ────────────────────────────────────────────── */
navigateTo('statement');

/* ── ENQUIRY MODAL ───────────────────────────────────────────── */
const FORMSPREE_ID = 'xredrbqe';

const enquiryModal  = document.getElementById('enquiryModal');
const modalClose    = document.getElementById('modalClose');
const modalFormView = document.getElementById('modalFormView');
const modalSuccess  = document.getElementById('modalSuccess');
const enquiryForm   = document.getElementById('enquiryForm');
const fieldService  = document.getElementById('fieldService');
const formError     = document.getElementById('formError');
const formSubmit    = document.getElementById('formSubmit');
const successClose  = document.getElementById('successClose');

function openModal(service = null) {
  enquiryModal.classList.add('is-open');
  enquiryModal.removeAttribute('aria-hidden');
  document.body.classList.add('modal-open');

  if (service) fieldService.value = service;

  // Focus first field after animation
  setTimeout(() => document.getElementById('fieldName').focus(), 80);
}

function closeModal() {
  enquiryModal.classList.remove('is-open');
  enquiryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  // Reset after transition
  setTimeout(() => {
    enquiryForm.reset();
    formError.hidden = true;
    modalFormView.hidden = false;
    modalSuccess.hidden  = true;
    formSubmit.disabled  = false;
    formSubmit.querySelector('.submit-label').hidden  = false;
    formSubmit.querySelector('.submit-loading').hidden = true;
  }, 320);
}

// Open from every "Submit an Enquiry" CTA button
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  });
});

// Open from service card hover CTAs (pre-select the service)
document.querySelectorAll('.service-enquire-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const service = btn.closest('[data-service]').dataset.service;
    openModal(service);
  });
});

// Close via button, overlay click, or Escape
modalClose.addEventListener('click', closeModal);
successClose.addEventListener('click', closeModal);

enquiryModal.addEventListener('click', e => {
  if (e.target === enquiryModal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && enquiryModal.classList.contains('is-open')) closeModal();
});

// Form submission
enquiryForm.addEventListener('submit', async e => {
  e.preventDefault();

  const submitLabel   = formSubmit.querySelector('.submit-label');
  const submitLoading = formSubmit.querySelector('.submit-loading');

  // Client-side validation
  if (!enquiryForm.checkValidity()) {
    enquiryForm.reportValidity();
    return;
  }

  // Loading state
  formSubmit.disabled     = true;
  submitLabel.hidden      = true;
  submitLoading.hidden    = false;
  formError.hidden        = true;

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method:  'POST',
      body:    new FormData(enquiryForm),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      modalFormView.hidden = true;
      modalSuccess.hidden  = false;
    } else {
      throw new Error('Server error');
    }
  } catch {
    formError.hidden = false;
    formSubmit.disabled  = false;
    submitLabel.hidden   = false;
    submitLoading.hidden = true;
  }
});
