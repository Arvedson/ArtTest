


import Seccion1 from "./Seccion1";
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';
import Seccion4 from './Seccion4';
import Estado from './Estado';
import OcultarMostrar from './OcultarMostrar';
import { useState } from 'react';
import styles from "../styles/test.module.css"

const FuncionQueUtilizaComponentes = () => {

 

  //const [mostrar, setMostrar] = useState(true)

  //const styles2 = mostrar ? styles.estado : styles.estado2;

  // function togglemostrar (event:any){

  //   setMostrar(!mostrar)

  //   console.log(event.target.checked)}


  return (
    <div>

      <Seccion1/>
      <Seccion2/>
      <Seccion3/>
      <Seccion4/>




      {/* <OcultarMostrar/>
      <div className={styles2}>
        <Estado mostrar={mostrar} togglemostrar={togglemostrar}  />
      </div> */}
      
    </div>

  );
};

export default FuncionQueUtilizaComponentes;