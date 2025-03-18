import { useState, useEffect } from "react";
import styles from "../../styles/Hero.module.css";
import { motion, AnimatePresence } from "framer-motion";


// Define text and image variants together
const variants = [
  {
    title: "Hello, I'm",
    name: "Atish Dussa",
    subtitle: "A passionate React Developer",
    image: "/atish1.jpg",
  },
  {
    title: "Hello, I'm",
    name: "a Frontend Developer",
    subtitle: "Building awesome Websites and Mobile Applications",
    image: "/atish2.JPG",
  },
];

// Animation settings
const fadeInOutAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % variants.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <motion.section
      id="hero"
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Text */}
      <div className={styles.text}>
        <AnimatePresence mode="wait">
          <motion.div key={index} {...fadeInOutAnimation}>
            <h1>
              {variants[index].title} <span>{variants[index].name}</span>
            </h1>
            <p>{variants[index].subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Image */}
      <div className={styles.imageWrapper}>
        <AnimatePresence mode="wait">
          <motion.div key={index} {...fadeInOutAnimation}>
            <img 
              src={variants[index].image}
              alt="Profile"
              width={500}
              height={500}
              className={styles.image}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
   

  );
};

export default Hero;
