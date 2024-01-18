import Image from "next/image";
import React from "react";
import styles from "../styles/Seccion3.module.css";

// Define un tipo para la prop 'cuadro'
interface CuadroProps {
  nombreCuadro: string;
  imagenCuadro: string;
  coloresCuadro: string[];
  tecnicaCuadro: string;
  tamañoCuadro: string;
}

const Galeria: React.FC<{ cuadro?: CuadroProps }> = ({ cuadro }) => {
  // Verificar si cuadro está definido
  if (!cuadro) {
    return null; // o puedes manejar este caso de alguna otra manera según tu lógica
  }

  // Desestructuración del objeto cuadro
  const { nombreCuadro, imagenCuadro, coloresCuadro, tecnicaCuadro, tamañoCuadro } = cuadro;

  return (
    <div className={styles.componente} /* componente */>
      {/* Título del cuadro */}
      <h3 className={styles.nombrecuadro}>{nombreCuadro}</h3>

      {/* Imagen principal del cuadro */}
      <Image className={styles.imagenCuadro} src={imagenCuadro} alt={nombreCuadro} width={300} height={300} />

      {/* Detalles del cuadro */}
      <div className={styles.propiedades}>
        <ul className={styles.listaDetalles}>
          {/* Detalle de colores */}
          <li className={styles.detalleItem}>
            <span className={styles.textoDetalle}>Colores:</span>
            <div className={styles.coloresCuadro}>
              {coloresCuadro.map((color, index) => (
                <Image key={index} src={color} alt={`Color ${index + 1}`} width={30} height={30} />
              ))}
            </div>
          </li>

          {/* Detalle de técnica */}
          <li className={styles.textoDetalle2}>{tecnicaCuadro}</li>

          {/* Detalle de tamaño */}
          <li className={styles.textoDetalle2}>{tamañoCuadro}</li>
        </ul>
      </div>
    </div>
  );
};


export default Galeria;
