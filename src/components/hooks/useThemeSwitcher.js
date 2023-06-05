import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const storedMode = localStorage.getItem('theme');

    const handleChange = (event) => {
      const newMode = event.matches ? 'dark' : 'light';
      setMode(newMode);
      document.documentElement.classList.toggle('dark', newMode === 'dark');
      localStorage.setItem('theme', newMode);
    };

    if (storedMode) {
      setMode(storedMode);
      document.documentElement.classList.toggle('dark', storedMode === 'dark');
    } else {
      const initialMode = mediaQuery.matches ? 'dark' : 'light';
      setMode(initialMode);
      document.documentElement.classList.toggle('dark', initialMode === 'dark');
      localStorage.setItem('theme', initialMode);
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
    localStorage.setItem('theme', newMode);
  };

  return [mode, toggleMode];
};

export default useThemeSwitcher;
