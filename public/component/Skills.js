import styles from "../../styles/Skills.module.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaJira, FaDatabase, FaAndroid, FaApple } from "react-icons/fa";
// import { SiFirebase, SiVscode, SiExpress } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { name: "JavaScript", level: 70 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 60 },
  { name: "ReactJS", level: 70 },
  { name: "React Native", level: 80 },
  { name: "NodeJS", level: 60 }
];

const tools = [
  { name: "Next.js", level: "Advance", icon: <TbBrandNextjs /> },
  { name: "Express.js", level: "Familiar", icon: <SiExpress /> },
  { name: "MySQL", level: "Familiar", icon: <FaDatabase /> },
  { name: "Firebase", level: "Advance", icon: <IoLogoFirebase /> },
  { name: "Git", level: "Proficient", icon: <FaGitAlt /> },
  { name: "GitHub", level: "Proficient", icon: <FaGithub /> },
  { name: "VSCode", level: "Proficient", icon: <VscVscode /> },
  { name: "Jira", level: "Advance", icon: <FaJira /> },
  { name: "Android Studio", level: "Proficient", icon: <FaAndroid /> },
  { name: "Xcode", level: "Proficient", icon: <FaApple /> },
  { name: "Google Play Store", level: "Advance", icon: <FaAndroid /> },
  { name: "App Store", level: "Advance", icon: <FaApple /> }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className={styles.skills}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Skills</h2>

      {/* Skills Section */}
      <div className={styles.skillContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span>{skill.name}</span>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>
              <span className={styles.percentage}>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Technologies Section */}
      <h2>Tools & Technologies</h2>
      <div className={styles.toolsList}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolItem}>
            {tool.icon}
            <span>{tool.name} - {tool.level}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;