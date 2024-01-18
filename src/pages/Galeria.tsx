import Image from "next/image";
import React from "react";
import styles from "../styles/Seccion3.module.css";

const Galeria = ({ cuadro }) => {

  // desestructuración del objeto cuadro
  const { nombreCuadro, imagenCuadro, coloresCuadro, tecnicaCuadro, tamañoCuadro } = cuadro;

  return (
    <div className={styles.componente}/*componente*/>
      
      <h3 className={styles.nombrecuadro}>{nombreCuadro}</h3>

      <Image className={styles.imagenCuadro}  src={imagenCuadro} alt={nombreCuadro} width={300} height={300}/>

      <div className={styles.propiedades}>




        <ul className={styles.listaDetalles}>

          <li className={styles.detalleItem}>

            <span className={styles.textoDetalle}>Colores:</span>

            <div className={styles.coloresCuadro}>
              {coloresCuadro.map((color, index) => (
                <Image key={index} src={color} alt={`Color ${index + 1}`} width={30} height={30} />
              ))}     
            </div>

          </li>

          <li className={styles.textoDetalle2}>{tecnicaCuadro}</li>
          <li className={styles.textoDetalle2} >{tamañoCuadro}</li>

        </ul>

      </div>
    </div>
  );
};

export default Galeria;
