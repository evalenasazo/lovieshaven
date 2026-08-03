/* LOVIE'S HAVEN — shared behaviour. Quiet by design. */
(function () {
  var head = document.querySelector('.site-head');
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');

  function onScroll() {
    if (!head) return;
    head.classList.toggle('is-solid', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      }
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.rise');

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseFloat(el.getAttribute('data-delay') || 0);
      setTimeout(function () { el.classList.add('in'); }, delay * 1000);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  items.forEach(function (el) { io.observe(el); });
})();
