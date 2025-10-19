import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

export function ThemeToggle(): JSX.Element {
  const { theme, cycleTheme } = useTheme();
  return (
    <button id="themeToggle" className="theme-toggle" aria-label="Toggle theme" title="Toggle theme" onClick={cycleTheme}>
      {/* Simple sun/moon UI using current CSS icon styles */}
      <svg className="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><g strokeWidth="2"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>
      <svg className="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79z"/></svg>
    </button>
  );
}

export default ThemeToggle;


