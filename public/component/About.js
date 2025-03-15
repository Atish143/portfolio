"use client"; // Ensures hooks work properly

import styles from "../../styles/About.module.css";
import { motion } from "framer-motion";
// import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <img
              src="/atish3.jpeg"
              alt="Your Profile"
              width={400}
              height={400}
              className={styles.profileImage}
            />
          </div>
        </div>

        {/* Right Side - About Details */}
        <div className={styles.right}>
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>Atish Mallikarjun Dussa</strong>, a React Developer with 
            <strong> 3 years of experience</strong> in React.js and React Native.
          </p>
          <p>
            I've worked on <strong>4 React.js projects</strong> and <strong>6 React Native projects</strong>, 
            building and deploying scalable web and mobile applications.
          </p>
          <p>
            I specialize in <strong>state management</strong> (Redux, Context API), 
            third-party integrations, and performance optimization.
          </p>

          <div className={styles.info}>
            <p><strong>Name:</strong> Atish Dussa</p>
            <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
            <p><strong>Email:</strong> atishdussa15@gmail.com</p>
            <p><strong>Contact:</strong> +91 9594125358</p>
          </div>

          {/* Social Links */}
          <div className={styles.contactMe}>
            <h3>Connect with Me</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/atish-dussa-0b4019210/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/attiiisssshhhhh/?next=%2Fs" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
                <FaInstagram />
              </a>
              <a href="https://github.com/Atish143" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
