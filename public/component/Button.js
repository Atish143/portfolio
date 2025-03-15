"use client"; // Ensures hooks work properly

import styles from "../../styles/Button.module.css";
import { motion } from "framer-motion";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <motion.button
      className={styles.button}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
