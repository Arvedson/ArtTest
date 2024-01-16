import React from 'react'

import styles from "../styles/Dropdown.module.css"

export default function Dropdown () {
    return (
        <nav className={styles["contenedor"]}>

            <div className={styles["logo"]}/>

            <ul className={styles["navegacion"]}>

                <li className={styles["lista"]}>
                    hola
                </li>
                <li className={styles["lista"]}>
                    hola
                </li>
                <button className={styles["lista"]}>
                    hola
                </button>

            </ul>
        </nav>
        
    )
    
}