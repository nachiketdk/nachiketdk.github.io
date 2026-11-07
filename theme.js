(() => {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  let theme = 'dark';
  try { theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'; } catch (_) {}
  applyTheme(theme);

  button.addEventListener('click', () => {
    theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch (_) {}
  });
})();
