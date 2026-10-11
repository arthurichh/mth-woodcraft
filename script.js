(() => {
  'use strict';

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  function closeMenu() {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      mainNav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  const year = document.getElementById('currentYear');
  if (year) year.textContent = String(new Date().getFullYear());

  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      galleryCards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');
  let lastFocusedElement = null;

  function closeLightbox() {
    if (lightbox && lightbox.open) lightbox.close();
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      if (!lightbox || !lightboxImage || !lightboxTitle) return;
      lastFocusedElement = card;
      lightboxImage.src = card.dataset.image;
      lightboxImage.alt = card.querySelector('img')?.alt || 'Visual ilustrasi MTH Woodcraft';
      lightboxTitle.textContent = card.dataset.title || 'Galeri MTH Woodcraft';
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener('close', () => {
      if (lastFocusedElement) lastFocusedElement.focus();
    });
  }

  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;
      const formData = new FormData(enquiryForm);
      const name = String(formData.get('name') || '').trim().slice(0, 80);
      const phone = String(formData.get('phone') || '').trim().slice(0, 30);
      const service = String(formData.get('service') || '').trim().slice(0, 100);
      const message = String(formData.get('message') || '').trim().slice(0, 700);
      const lines = [
        'Assalamualaikum MTH Woodcraft, saya ingin bertanya tentang projek.',
        '',
        'Nama: ' + name,
        phone ? 'Nombor telefon: ' + phone : '',
        'Perkhidmatan: ' + service,
        message ? 'Maklumat projek: ' + message : '',
        '',
        'Mohon maklumat lanjut dan sebut harga. Terima kasih.'
      ].filter(Boolean);
      const url = 'https://wa.me/601139169001?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
