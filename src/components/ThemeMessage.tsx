import { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export function ThemeMessage() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // show a brief toast when theme changes
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, [theme]);

  const label = theme.charAt(0).toUpperCase() + theme.slice(1) + ' Theme Activated';
  return (
    <div id="themeMessage" className={`theme-message${visible ? ' show' : ''}`}>{label}</div>
  );
}

export default ThemeMessage;


