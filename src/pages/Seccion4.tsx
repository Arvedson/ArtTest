import React from "react";
import styles from "../styles/Seccion4.module.css";
import datosBlog from "@/data/blog";
import Image from "next/image";

interface BlogProps {
  texto1: string;
  liTexto1: string;
  liTexto2: string;
  liTexto3: string;
}

interface Seccion4Props {
  abrirBoton3: boolean;
  toggleBoton3: (event: any) => any;
}

const Seccion4: React.FC<Seccion4Props> = (props) => {
  const blog: BlogProps | undefined = datosBlog[0];

  if (!blog) {
    return null;
  }

  const { liTexto1, liTexto2, liTexto3, texto1 } = blog;

  return (
    <div className={styles.background}>
      <button
        className={` ${styles.stickyButton} ${
          props.abrirBoton3 ? styles.active : ""
        }`}
        onClick={props.toggleBoton3}
      >
        {props.abrirBoton3 ? "Ocultar" : "Sobre mí"}
      </button>

      <div className={` ${!props.abrirBoton3 ? styles.hidden : styles.blog}`}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={"/domi.jpg"} alt="imagen" width={150} height={0} />
        </div>

        <p className={styles.texoo1}>{texto1}</p>

        <div className={styles.lineaCagante} />

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
