// Seccion3.js
import React, { useState } from "react";
import Galeria from "./Galeria";
import cuadrosDatos from "../data/datosCuadros";
import styles from "../styles/Seccion3.module.css";

export default function Seccion3() {
  const [mostrarGaleria, setMostrarGaleria] = useState(false);

  const toggleGaleria = () => {
    setMostrarGaleria(!mostrarGaleria);
  };

  return (

    
    <div className={styles.backgroundd}>


      <button
        className={` ${styles.stickyButton} ${
          mostrarGaleria ? styles.active : ""
        }`}
        onClick={toggleGaleria}
      >
        {mostrarGaleria ? "Ocultar Galería" : "Ver Galería"}
      </button>


    
      <div className={styles.test}>
        {mostrarGaleria && cuadrosDatos.map((cuadro, index) => (
          <Galeria key={index} cuadro={cuadro} />
        ))}
      </div>


    

    </div>
  );
}

