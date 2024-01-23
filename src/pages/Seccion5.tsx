import Image from "next/image";
import React from "react";
import styles from "../styles/Seccion5.module.css"


const Seccion5 = () => {
    return (
        <div >
            <Image src="/LOBOBIEN.png" alt="logo" className={styles.logo} width={150} height={150}/>
        </div>
    );
}

export default Seccion5;
