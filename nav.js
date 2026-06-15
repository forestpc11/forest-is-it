/* forest.is.it — Google Analytics (GA4), loads on every page via nav.js */
(function () {
  var GA_ID = 'G-ES7Y66C6Q7';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

/* forest.is.it — hamburger nav toggle (shared by every page) */
(function () {
  var btn = document.querySelector('.nav-toggle');
  var overlay = document.querySelector('.nav-overlay');
  var body = document.body;
  if (!btn) return;

  function setOpen(open) {
    body.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (overlay) overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  btn.addEventListener('click', function () {
    setOpen(!body.classList.contains('nav-open'));
  });

  // close when a link is tapped, or on Escape
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) setOpen(false);
  });
})();
