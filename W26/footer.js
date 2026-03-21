// ENGL 1181 — Shared Footer
// Add this script to any page to insert the site footer.

(function() {
  var footer = document.querySelector('.footer-note');
  if (!footer) return;

  footer.innerHTML =
    '<p>ENGL 1181 — Winter 2026 — Sarah Karlis — Macomb Community College</p>' +
    '<p class="footer-license">This website and its individual pages, unless otherwise noted, are created by Sarah Karlis and are licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>' +
    '<p class="footer-ai">AI Transparency Statement: Generative AI may have been used for proofreading, creating examples, formatting pages, and helping me think through my messy first drafts. Everything has been reviewed, revised, and/or rewritten by a human (me).</p>';
})();
