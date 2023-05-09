'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme)

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
    // <div>
    //   The current theme is: {theme}
    //   <button onClick={() => setTheme('light')}>Light Mode</button>
    //   <button onClick={() => setTheme('dark')}>Dark Mode</button>
    // </div>
  );
};

export default ThemeSwitch;
