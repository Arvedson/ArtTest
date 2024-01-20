import React from "react";
import Image from 'next/image';

import styles from "../styles/Seccion1.module.css"

export default function Seccion1(){
    return (
        <div className={styles.background}>
            <div className={styles.pinkdisplay}>       
                <div className={styles.fotos}>
                    <Image src="/LOGOBIEN.png" alt="log "className={styles.logo} width={295} height={205}/>
                </div>
                <p className={styles.texto1}>
                    Te hacemos un cuadro que se adapte a tus necesidades
                </p>
            </div>


        </div>
    )
}