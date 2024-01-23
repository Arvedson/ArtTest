import React, { useState } from 'react';
import Seccion1 from './Seccion1';
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';
import Seccion4 from './Seccion4';
import styles from '../styles/index.module.css';

const FuncionQueUtilizaComponentes: React.FC = () => {
  //estado de los botones
  const [abrirBoton, setAbrirBoton] = useState(false);
  const [abrirBoton2, setAbrirBoton2] = useState(false);
  const [abrirBoton3, setAbrirBoton3] = useState(false);

  //funciones para cambiar el estado de los botones
  const toggleBoton = () => setAbrirBoton((prev) => !prev);
  const toggleBoton2 = () => setAbrirBoton2((prev) => !prev);
  const toggleBoton3 = () => setAbrirBoton3((prev) => !prev);

  //determina si debe aplicarse la clase de estilo para ocultar
  const ocultar = abrirBoton3 || abrirBoton2 || abrirBoton ? styles.ocultar : styles.mostrar;

  return (
    <div className={styles.fondo}>
      <div className={ocultar}>
        <Seccion1 />
      </div>
      <Seccion2 abrirBoton={abrirBoton} toggleBoton={toggleBoton} />
      <Seccion3 abrirBoton2={abrirBoton2} toggleBoton2={toggleBoton2} />
      <Seccion4 abrirBoton3={abrirBoton3} toggleBoton3={toggleBoton3} />
    </div>
  );
};

export default FuncionQueUtilizaComponentes;
