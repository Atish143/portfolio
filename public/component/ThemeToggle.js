"use client";
import { useState, useEffect } from 'react';
import styles from '../../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button className={styles.toggle} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
