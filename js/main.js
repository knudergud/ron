/* Ron Weasley — portfolio interactions */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- Theme toggle (system preference default) ---------------- */
  var themeToggle = document.querySelector('[data-theme-toggle]');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (!themeToggle) return;
    themeToggle.setAttribute(
      'aria-label',
      'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'
    );
    themeToggle.innerHTML =
      theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ---- Sticky header: shadow when scrolled, hide on scroll down - */
  var header = document.querySelector('[data-site-header]');
  var lastY = window.scrollY;

  if (header) {
    var onScroll = function () {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      if (y > lastY && y > 160) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Reveal on scroll + skill meter fills --------------------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealEls = document.querySelectorAll('.reveal');
  var meters = document.querySelectorAll('.meter-fill');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
    meters.forEach(function (el) {
      el.classList.add('is-filled');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    var meterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.setProperty('--level', el.getAttribute('data-level'));
          el.classList.add('is-filled');
          meterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    meters.forEach(function (el) {
      meterObserver.observe(el);
    });
  }

  /* ---- Footer year ---------------------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
