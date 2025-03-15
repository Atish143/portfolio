import styles from "../../styles/Education.module.css";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      id="education"
      className={styles.education}
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>🎓 Education</h2>
      
      <div className={styles.educationContainer}>
        <div className={styles.educationItem}>
          <strong className={styles.hoverHighlight}>📘 Bachelor of Engineering</strong> <br />
          Fr. Conceicao Rodrigues College of Engineering
        </div>
        <div className={styles.educationItem}>
          <strong className={styles.hoverHighlight}>🏫 HSC</strong> <br />
          Dr. Antonio Da Silva Technical High School
        </div>
        <div className={styles.educationItem}>
          <strong className={styles.hoverHighlight}>📖 SSC</strong> <br />
          The Andhra Education Society's High School
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
