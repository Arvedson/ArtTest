import styles from "../styles/Seccion2.module.css";
import Image from "next/image";
import React, { useState } from "react";

interface seccion2Props {
  abrirBoton: boolean;
  toggleBoton: (event: any) => any;
}


const Seccion2: React.FC<seccion2Props> = (props) => {
  return (
    <div>
      <div className={styles.background}>
        <button
          className={` ${styles.button} ${
            props.abrirBoton ? styles.active : " "
          }`}
          onClick={props.toggleBoton}
        >
          {props.abrirBoton ? "Ocultar" : "Haz tu pedido"}
        </button>

        <div className={` ${!props.abrirBoton ? styles.hidden : styles.blog}`}>
          <div className={styles.mediaq}>
            <div className={styles.div1}>
              <div className={styles.flowers}>
                <p className={styles.text1}>Color</p>
              </div>
            </div>

            <div className={styles.div2}>
              <div className={styles.textura}>
                <p className={styles.text2}>Textura</p>
              </div>
            </div>
          </div>

          <div className={styles.div3}>
            <div className={styles.horse}>
              <p className={styles.text3}>Diseño</p>
            </div>
          </div>

          <div className={styles.div4}>
            <ul>
              <li>Comienza compartiendo imágenes del área donde planeas colocar el cuadro.</li>
              <li>En una charla interactiva, definimos colores, texturas y el estilo que refleje tu personalidad.</li>
              <li>Presentamos propuestas de diseño basadas en tus preferencias.</li>
              <li>Ajustamos el diseño según tus comentarios hasta que sea exactamente lo que deseas.</li>
              <li>Después de la aprobación, iniciamos la producción y enviamos el cuadro a la comodidad de tu hogar.</li>
            </ul>

            <div className={styles.contact}>
              <button className={styles.fb}>
                <Image src="/Facebook.png" alt="insta" width={80} height={80} />
              </button>

              <button className={styles.insta}>
                <Image src="/Instagram.png" alt="insta" width={80} height={80} />
              </button>

              <button className={styles.wa}>
                <Image src="/WhatsApp.png" alt="insta" width={80} height={80} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion2