 let lang = 'he';

  function toggleLang() {
    lang = lang === 'he' ? 'en' : 'he';
    const html = document.documentElement;
    const btn = document.querySelector('.lang-btn');
    if (lang === 'en') {
      html.setAttribute('lang','en'); html.setAttribute('dir','ltr');
      html.classList.add('en'); btn.textContent = 'עב';
    } else {
      html.setAttribute('lang','he'); html.setAttribute('dir','rtl');
      html.classList.remove('en'); btn.textContent = 'EN';
    }
    document.querySelectorAll('[data-he]').forEach(el => {
      el.textContent = lang === 'he' ? el.dataset.he : el.dataset.en;
    });
    // Re-activate tabs after lang switch
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.textContent = lang === 'he' ? btn.dataset.he : btn.dataset.en;
    });
  }

 function showTab(tab, el) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('tab-' + tab).classList.add('active');
  el.classList.add('active');
}

  // Scroll animations
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, {threshold: 0.08});

  document.querySelectorAll('.exp-card, .why-card, .step, .pv-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    obs.observe(el);
  });
