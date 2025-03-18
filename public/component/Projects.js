"use client";

import styles from "../../styles/Projects.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Bandhan Mutual Funds (React Native)",
    description:
      "Developed key features for a mutual funds app, focusing on user engagement, authentication, and payment processing.",
    link: "https://play.google.com/store/apps/details?id=com.bandhanmf.inv",
  },
  {
    id: 2,
    title: "Nippon Mutual Funds (React Native)",
    description:
      "Focused on debugging and enhancing the app based on client requirements, ensuring a seamless user experience.",
    link: "https://play.google.com/store/apps/details?id=com.godbtech.reliancemf&hl=en_IN",
  },
  {
    id: 3,
    title: "LastingAsset (React Native)",
    description:
      "Developed advanced security features and deep linking for a financial security app, enhancing fraud detection.",
    link: "https://play.google.com/store/apps/details?id=com.lastingasset.verify",
  },
  {
    id: 4,
    title: "Online CampusLife EdTech Project (React Native)",
    description:
      "Led the development of an EdTech platform, managing academic hierarchies and curriculum structures.",
    link: "https://play.google.com/store/apps/details?id=com.onlinecampuslife",
  },
  {
    id: 5,
    title: "Hourly Rooms Mobile App (React Native)",
    description:
      "Enhanced UI and integrated critical features for a hotel booking app, improving booking experiences.",
    link: "https://play.google.com/store/apps/details?id=com.hourlyrooms&pli=1",
  },
  {
    id: 6,
    title: "Hourly Rooms Vendor Management System (React Native)",
    description:
      "Developed a vendor-focused mobile app for inventory management, enabling real-time updates.",
    link: "https://play.google.com/store/apps/details?id=hourlyrooms.extranet",
  },
  {
    id: 7,
    title: "Hourly Rooms Website (Next.js)",
    description:
      "Developed a high-performance SPA for hotel bookings using Next.js, optimizing API communication and global state management.",
    link: "https://hourlyrooms.co.in/",
  },
  {
    id: 8,
    title: "Hourly Rooms Internal Management System (Next.js)",
    description:
      "Developed an internal hotel listing management system with a responsive dashboard using Next.js and Redux Toolkit.",
    link: "#",
  },
  {
    id: 9,
    title: "Hourly Rooms Vendor Management System (Next.js)",
    description:
      "Developed a fully responsive mobile version of the Hourly Rooms website using Next.js, optimizing performance and UI.",
    link: "https://extranet.hourlyrooms.co.in/",
  },
  {
    id: 10,
    title: "Fantasy Cricket Team Maker System (React.js)",
    description:
      "Developed a fantasy cricket app using React.js with advanced player selection logic and optimized state management.",
    link: "https://heroic-twilight-57785e.netlify.app/",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className={styles.projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
