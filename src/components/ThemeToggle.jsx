import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  // Respect the OS preference on first visit only.
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-pressed={dark}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      {dark ? 'dark' : 'light'}
    </button>
  );
};

export default ThemeToggle;
