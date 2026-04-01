/* ==============================================
   SMAC 2026 — Main JavaScript
   ============================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------
     1. HAMBURGER MENU
  ----------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-link');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navbar.classList.toggle('open');
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navbar.classList.remove('open');
      });
    });
  }

  /* -----------------------------------------------
     2. ACTIVE NAV LINK ON SCROLL
  ----------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

  /* -----------------------------------------------
     3. COUNTDOWN — 2nd July 2026 09:00 AM IST
  ----------------------------------------------- */
  const CONF_DATE = new Date('2026-07-02T09:00:00+05:30');

  function updateCountdown() {
    const diff = CONF_DATE - new Date();
    if (diff <= 0) {
      ['days','hours','minutes','seconds'].forEach(id => {
        document.getElementById(id).textContent = '00';
      });
      return;
    }
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').textContent    = String(days).padStart(2,'0');
    document.getElementById('hours').textContent   = String(hours).padStart(2,'0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* -----------------------------------------------
     4. SCROLL TO TOP
  ----------------------------------------------- */
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* -----------------------------------------------
     5. STICKY HEADER SHADOW
  ----------------------------------------------- */
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 60
      ? '0 4px 24px rgba(106,13,173,0.2)'
      : '0 2px 16px rgba(106,13,173,0.12)';
  });

  /* -----------------------------------------------
     6. SMOOTH ANCHOR SCROLL
  ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = (document.getElementById('site-header') || {}).offsetHeight || 130;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* -----------------------------------------------
     7. CONTACT FORM FEEDBACK
  ----------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = '#1a6b3a';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  /* -----------------------------------------------
     8. BROKEN IMAGE FALLBACKS
  ----------------------------------------------- */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.onerror = null;
      let bg = '#9c59c4';
      if (this.id && this.id.includes('logo')) bg = '#e8d5ff';
      if (this.id && this.id.includes('patron') || (this.alt && this.alt.toLowerCase().includes('patron'))) bg = '#4a0080';
      if (this.id && this.id.includes('convener')) bg = '#6a0dad';
      if (this.id && this.id.includes('atlantis') || this.id && this.id.includes('springer')) bg = '#f0f0f0';
      const w = this.offsetWidth || 200;
      const h = this.offsetHeight || 200;
      const textColor = bg === '#e8d5ff' || bg === '#f0f0f0' ? '#6a0dad' : 'white';
      const label = this.alt || 'Image';
      const fontSize = Math.max(10, Math.min(16, Math.floor(Math.min(w,h)/8)));
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stop-color='${bg}'/>
            <stop offset='100%' stop-color='${bg}cc'/>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#g)'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
          font-family='Inter,sans-serif' font-size='${fontSize}' fill='${textColor}' opacity='0.85'>
          ${label.length > 30 ? label.substring(0,28)+'…' : label}
        </text>
      </svg>`;
      this.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  });

  /* -----------------------------------------------
     9. SCROLL REVEAL ANIMATIONS
  ----------------------------------------------- */
  const animTargets = document.querySelectorAll(
    '.theme-card, .reg-card, .committee-person-card, .date-card, .about-block, .advisory-item, .partner-card-item, .pub-highlight-item'
  );
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  animTargets.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
    revealObs.observe(el);
  });

  /* -----------------------------------------------
     10. CIRCUIT BG SUBTLE ANIMATION
  ----------------------------------------------- */
  const circuitLines = document.querySelectorAll('.circuit-svg line, .circuit-svg circle');
  circuitLines.forEach((el, i) => {
    el.style.animation = `pulse ${2 + i * 0.7}s ease-in-out infinite alternate`;
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      from { opacity: 0.5; }
      to   { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

});
