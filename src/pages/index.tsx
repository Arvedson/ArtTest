import Seccion1 from "./Seccion1";
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';
import Seccion4 from './Seccion4';
import { useState } from 'react';
import styles from "../styles/index.module.css"

const FuncionQueUtilizaComponentes = () => {

  // estado del primer boton "seccion2"
  const [abrirBoton, setMostrarboton] = useState(false)
  const toggleBoton = (event:any) =>{
      setMostrarboton(!abrirBoton);
  };
  // estado del segundo boton "seccion3"
  const [abrirBoton2, setMostrarboton2] = useState(false)
  const toggleBoton2 = (event:any) =>{
      setMostrarboton2(!abrirBoton2);
  };
  // estado del tercer boton "seccion4"
  const [abrirBoton3, setMostrarboton3] = useState(false)
  const toggleBoton3 = (event:any) =>{
        setMostrarboton3(!abrirBoton3);
  };
  
  const ocultar = abrirBoton3 || abrirBoton2 || abrirBoton ? styles.ocultar : styles.mostrar

  return (
    <div className={styles.fondo}>
      <div className={ocultar}>
      <Seccion1/>
      </div>
      <Seccion2 abrirBoton={abrirBoton} toggleBoton={toggleBoton}/> 
      <Seccion3 abrirBoton2={abrirBoton2} toggleBoton2={toggleBoton2}/>
      <Seccion4 abrirBoton3={abrirBoton3} toggleBoton3={toggleBoton3}/> 
    </div>

  );
};
export default FuncionQueUtilizaComponentes;