import styles from "../styles/Seccion2.module.css"
import Image from 'next/image';
import React, { useState } from "react";

interface seccion2Props{
    abrirBoton: boolean;
    toggleBoton: (event:any)=> any
    opcion1: string;
    opcion2: string;
}

export default function SeccionGenerica(props: seccion2Props){
    return(
        
        <div>
            <div className={styles.background}>
                <button
                    className={` ${styles.button} ${props.abrirBoton ? styles.active : " " }`}
                    onClick={props.toggleBoton}>
                    {props.abrirBoton ? props.opcion1 : props.opcion2}
                </button>
                <div className={` ${!props.abrirBoton ? styles.hidden : styles.blog}`}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}