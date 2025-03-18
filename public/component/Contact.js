import styles from '../../styles/Contact.module.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section 
      id='contact' 
      className={styles.contact} 
      initial={{ x: -100 }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Me</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaMapMarkerAlt /></div>
          <a href="https://maps.app.goo.gl/Bs79Wwe3a8pFmB6u7" target="_blank" rel="noopener noreferrer"> Mumbai, Maharashtra, India</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaPhone /></div>
          <a href="tel:+919594125358" > +91 9594125358</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaEnvelope /></div>
          <a href="mailto:atishdussa15@gmail.com" className={styles.contactLink}>
    atishdussa15@gmail.com
  </a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaLinkedin /></div>
          <a href="https://www.linkedin.com/in/atish-dussa-0b4019210/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaWhatsapp /></div>
          <a href="https://wa.me/9594125358" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaTelegram /></div>
          <a href="https://t.me/Atishdussa" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactItemIcon}><FaInstagram /></div>
          <a href="https://www.instagram.com/attiiisssshhhhh/?next=%2Fs" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
