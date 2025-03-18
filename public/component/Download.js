import React from "react";
import { FaDownload } from "react-icons/fa"; // Install using 'npm install react-icons'
import styles from "../../styles/Download.module.css"; // Import styles properly

const Download = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Atish_Resume.pdf"; // Ensure the file is inside the public folder
    link.download = "Atish_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (   
    <button className={styles.downloadBtn} onClick={handleDownload}> {/* Use styles.downloadBtn */}
      <FaDownload size={34} />
    </button>
  );
};

export default Download;
