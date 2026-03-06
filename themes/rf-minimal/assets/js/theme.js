(function () {
  var storageKey = 'rf-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var label = document.getElementById('theme-toggle-label');

  function getPreferredTheme() {
    var saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (label) {
      label.textContent = '👻';
    }
    if (toggle) {
      toggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }
})();
