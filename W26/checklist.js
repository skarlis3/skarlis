// ENGL 1181 — Checklist Persistence
// Saves checkbox state to localStorage, scoped by page.

(function() {
  var page = window.location.pathname.split('/').pop() || 'index';
  var prefix = 'engl1181-' + page + '-';

  document.querySelectorAll('.checklist input[type="checkbox"]').forEach(function(cb) {
    var key = prefix + cb.id;

    // Restore saved state
    if (localStorage.getItem(key) === 'true') {
      cb.checked = true;
    }

    // Save on change
    cb.addEventListener('change', function() {
      localStorage.setItem(key, cb.checked);
    });
  });
})();
