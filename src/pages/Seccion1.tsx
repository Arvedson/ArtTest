import React from "react";

import styles from "../styles/Seccion1.module.css"

export default function (){
    return (
        <div className={styles.background}>
            <div className={styles.pinkdisplay}>       
                <div className={styles.fotos}>
                    <img src="LOGOBIEN.png" className={styles.logo}/>
                </div>
                <p className={styles.texto1}>
                    Te hacemos un cuadro que se adapte  a tus necesidades
                </p>
            </div>

            <button className={styles.button}>
                haz tu pedido
            </button>
        </div>
    )
}