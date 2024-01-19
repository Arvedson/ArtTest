import React, { useState } from "react";
import styles from "../styles/Seccion4.module.css";
import datosBlog from "@/data/blog";
import Image from "next/image";


interface BlogProps {
    texto1: string;
    liTexto1: string;
    liTexto2: string;
    liTexto3: string;
}

const Seccion4: React.FC = () => {

    const [mostrarBlog, setMostrarblog] = useState(false);

    const toggleGaleria = () => {
      setMostrarblog(!mostrarBlog);
    };
  
    const blog: BlogProps = datosBlog[0];

    if (!blog) {
        return null;
    }

    const { liTexto1, liTexto2, liTexto3, texto1 } = blog;

    return (


        <div className={styles.background}>

            <button
                className={` ${styles.stickyButton} ${
                mostrarBlog ? styles.active : ""
                }`}
                onClick={toggleGaleria}>
                {mostrarBlog ? "Ocultar" : "Sobre mi"}
            </button>

            <div className={` ${!mostrarBlog ? styles.hidden : styles.blog}`}>

                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={"/domi.jpg"} alt="imagen" width={150} height={0}/>
                </div>

                <p className={styles.texoo1}>
                    {texto1}
                </p>

                <div className={styles.lineaCagante}/>

                <div className={styles.listaContenedor}>
                    <ul className={styles.ul}>
                        <li>{liTexto1}</li>
                        <li>{liTexto2}</li>
                        <li>{liTexto3}</li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Seccion4;
