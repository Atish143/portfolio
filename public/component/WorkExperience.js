"use client";
import styles from "../../styles/Work.module.css";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <motion.section
      id="work"
      className={styles.work}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Work Experience</h2>
      <div className={styles.workContainer}>
      <div className={styles.experience}>
          <h3>React Native Developer | ACC Pvt Ltd</h3>
          <p>March 2024 - December 2024</p>
          <ul>
            <li>🚀 <strong>Collaborative App Development</strong> – Developed React Native applications.</li>
            <li>⚡ <strong>State Management</strong> – Used Redux Saga for efficient app state.</li>
            <li>📱 <strong>Cross-Platform Optimization</strong> – Ensured consistent performance.</li>
            <li>✅ <strong>Deployment</strong> – Published apps on Play Store & App Store.</li>
          </ul>
        </div>

        <div className={styles.experience}>
          <h3>Mobile Developer | Online CampusLife</h3>
          <p>July 2023 - March 2024</p>
          <ul>
            <li>🛠️ <strong>Full Lifecycle Development</strong> – Designed, developed, and deployed apps.</li>
            <li>🔄 <strong>State Management</strong> – Used Redux for structuring data.</li>
            <li>📱 <strong>Cross-Platform Support</strong> – Optimized for both iOS and Android.</li>
            <li>✅ <strong>Successful Deployment</strong> – Managed Play Store & App Store releases.</li>
          </ul>
        </div>

        <div className={styles.experience}>
          <h3>Software Developer | Wow Rooms</h3>
          <p>May 2022 - June 2023</p>
          <ul>
            <li>🎨 <strong>Frontend Development</strong> – Worked with ReactJS, Next.js, and Redux.</li>
            <li>💡 <strong>UI/UX Optimization</strong> – Created modern, responsive UI designs.</li>
            <li>📱 <strong>React Native Integration</strong> – Developed mobile apps.</li>
            <li>🖥️ <strong>API & Backend</strong> – Used Node.js, Express, and databases.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
