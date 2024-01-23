import Image from "next/image";
import React from "react";
import styles from "../styles/Seccion3.module.css";


interface CuadroProps {
  nombreCuadro: string;
  imagenCuadro: string;
  coloresCuadro: string[];
  tecnicaCuadro: string;
  tamañoCuadro: string;
}

const Galeria: React.FC<{ cuadro?: CuadroProps }> = ({ cuadro }) => {

  if (!cuadro) {
    return null; 
  }


  const { nombreCuadro, imagenCuadro, coloresCuadro, tecnicaCuadro, tamañoCuadro } = cuadro;

  return (
    <div className={styles.componente} /* componente */>
    
      <h3 className={styles.nombrecuadro}>{nombreCuadro}</h3>

      <Image className={styles.imagenCuadro} src={imagenCuadro} alt={nombreCuadro} width={1000} height={1000} />

    
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
          <li className={styles.textoDetalle2}>{tamañoCuadro}</li>
        </ul>
      </div>


    </div>
  );
};


export default Galeria;
