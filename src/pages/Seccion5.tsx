import Image from "next/image";
import React from "react";
import styles from "../styles/Seccion5.module.css"


const Seccion5 = () => {
    return (

        <div className={styles.background}>

            <div>
                <Image src="/LOGOBIEN.png" alt="log "className={styles.logo} width={295} height={205}/>
            </div>

            <p className={styles.p}>Dominique.arvedson@gmail.com</p>
            <p className={styles.p}>+52 871 468 315</p>
            <p className={styles.p}>Contactame</p>




        </div>

    );
}

export default Seccion5;
