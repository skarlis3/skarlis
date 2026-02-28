// ENGL 1181 — Shared Navigation
// Add new pages to the navItems array below.

(function() {
  const navItems = [
    { label: 'Home',               href: './' },
    { label: 'Weekly Assignments', href: './assignments.html' },
    { label: 'Calendar',          href: './calendar.html' },
  ];

  // Determine current page from filename
  const path = window.location.pathname;
  const currentFile = path.endsWith('/') || path.endsWith('/index.html')
    ? './'
    : './' + path.split('/').pop();

  // Skip-to-content link
  const skip = document.createElement('a');
  skip.href = '#main-content';
  skip.className = 'skip-link';
  skip.textContent = 'Skip to main content';
  document.body.insertBefore(skip, document.body.firstChild);

  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Site navigation');

  const inner = document.createElement('div');
  inner.className = 'nav-inner';

  // Brand / site title
  const brand = document.createElement('a');
  brand.className = 'nav-brand';
  brand.href = './';
  brand.textContent = 'ENGL 1181';
  inner.appendChild(brand);

  // Nav links
  const links = document.createElement('ul');
  links.className = 'nav-links';
  links.id = 'nav-links';

  // Mobile toggle
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'nav-links');
  toggle.innerHTML = '&#9776;';
  toggle.addEventListener('click', function() {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  inner.appendChild(toggle);

  navItems.forEach(function(item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    if (item.href === currentFile) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    li.appendChild(a);
    links.appendChild(li);
  });

  inner.appendChild(links);
  nav.appendChild(inner);

  // Insert after skip link
  document.body.insertBefore(nav, skip.nextSibling);
})();
