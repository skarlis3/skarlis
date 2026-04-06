// genre-nav.js — Sidebar navigation for Genre Analysis Essay pages
// Include on any page that should show the genre analysis sidebar nav.

(function() {
  const pages = [
    { label: 'Essay Assignment', href: './genre-analysis-essay.html' },
    { label: 'Example Organization', href: './example-organization.html' },
    { label: 'Detailed Outline', href: './example-organization-detailed.html' },
    { label: 'Visual Outline', href: './example-organization-visual.html' },
    // Add more pages here as needed
  ];

  const path = window.location.pathname;
  const currentFile = './' + path.split('/').pop();

  const aside = document.createElement('aside');
  aside.className = 'genre-sidebar';
  aside.setAttribute('aria-label', 'Genre Analysis pages');

  const title = document.createElement('div');
  title.className = 'genre-sidebar-title';
  title.textContent = 'Genre Analysis Essay';
  aside.appendChild(title);

  const ul = document.createElement('ul');
  ul.className = 'genre-sidebar-links';

  pages.forEach(function(page) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = page.href;
    a.textContent = page.label;
    if (currentFile === page.href) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  aside.appendChild(ul);

  // Insert before the main content
  const main = document.querySelector('.page, #main-content');
  if (main) {
    // Wrap main + sidebar in a layout container
    const wrapper = document.createElement('div');
    wrapper.className = 'genre-layout';
    main.parentNode.insertBefore(wrapper, main);
    wrapper.appendChild(aside);
    wrapper.appendChild(main);
  }
})();
