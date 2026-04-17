// reflection-nav.js — Sidebar navigation for Final Reflection pages
// Include on any page that should show the reflection sidebar nav.
// Load with: <script src="reflection-nav.js" defer></script>

document.addEventListener('DOMContentLoaded', function() {
  const pages = [
    { label: 'Overview', href: './final-reflection.html' },
    { label: 'Readings & Videos', href: './reflection-readings.html' },
    { label: 'Reflection Prompts', href: './reflection-prompts.html' },
    { label: 'Grading', href: './reflection-grading.html' },
    { label: 'Submission', href: './reflection-submission.html' },
  ];

  const path = window.location.pathname;
  const currentFile = './' + path.split('/').pop();

  const aside = document.createElement('aside');
  aside.className = 'genre-sidebar';
  aside.setAttribute('aria-label', 'Final Reflection pages');

  const title = document.createElement('div');
  title.className = 'genre-sidebar-title';
  title.textContent = 'Final Reflection';
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

  const main = document.querySelector('.page, #main-content');
  if (main) {
    const wrapper = document.createElement('div');
    wrapper.className = 'genre-layout';
    main.parentNode.insertBefore(wrapper, main);
    wrapper.appendChild(aside);
    wrapper.appendChild(main);
  }
});
