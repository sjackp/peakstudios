import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

type ThemeName = 'dark' | 'light' | 'neon';

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = 'theme';
const THEMES: ThemeName[] = ['dark', 'light', 'neon'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem(THEME_KEY)) as ThemeName | null;
    return (saved && THEMES.includes(saved)) ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((t: ThemeName) => setThemeState(t), []);
  const cycleTheme = useCallback(() => {
    setThemeState(prev => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  }, []);

  const value = useMemo(() => ({ theme, setTheme, cycleTheme }), [theme, setTheme, cycleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}


