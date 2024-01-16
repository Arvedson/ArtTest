import React from 'react';
import styles from "../styles/Headeer.module.css"

export default function Headeer  ()  {
  return (
    
    <div className={styles["frame"]}>
      <video className={styles["vid"]}  autoPlay loop muted >
        <source src='mesh.mp4'/>
        <div className={styles["logo"]}>
        hola
      </div>
      </video>

    </div>
  );
};



