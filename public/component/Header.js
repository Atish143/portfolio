"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>PORTFOLIO</div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">About</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#work">Work Experience</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#education">Education</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#skills">Skills</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#projects">Projects</a>
          </li>
          <li className={styles.navItemlast}>
            <a className={styles.navLink} href="#contact">Contact</a>
          </li>
        
          <li className={styles.toggleItem}>
            {/* <ThemeToggle /> */}
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
