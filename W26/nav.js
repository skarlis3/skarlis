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

  // Mobile toggle
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.innerHTML = '&#9776;';
  toggle.addEventListener('click', function() {
    links.classList.toggle('open');
  });
  inner.appendChild(toggle);

  // Nav links
  const links = document.createElement('ul');
  links.className = 'nav-links';

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

  // Insert at top of body
  document.body.insertBefore(nav, document.body.firstChild);
})();
