import React from "react";
import Galeria from "./Galeria";
import cuadrosDatos from "../data/datosCuadros";
import styles from "../styles/Seccion3.module.css";

interface Seccion3Props {
  abrirBoton2: boolean;
  toggleBoton2: (event: any) => any;
}

const Seccion3: React.FC<Seccion3Props> = (props) => {
  return (
    <div className={styles.backgroundd}>
      <button
        className={` ${styles.stickyButton} ${props.abrirBoton2 ? styles.active : ""
          }`}
        onClick={props.toggleBoton2}
      >
        {props.abrirBoton2 ? "Ocultar Galería" : "Ver Galería"}
      </button>

      <div className={styles.test}>
        {props.abrirBoton2 &&
          cuadrosDatos.map((cuadro, index) => (
            <Galeria key={index} cuadro={cuadro} />
          ))}
      </div>
    </div>
  );
};

export default Seccion3;
