import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/Formtest.module.css";



export default function Formtest() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [desc, setDesc] = useState("");
  const [datosEnviados, setDatosEnviados] = useState(false);

  const extraerNombre = (event: ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const extraerCorreo = (event: ChangeEvent<HTMLInputElement>) => {
    setCorreo(event.target.value);
  };

  const extraerCiudad = (event: ChangeEvent<HTMLInputElement>) => {
    setCiudad(event.target.value);
  };

  const extraerDesc = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value);
  };

  const enviar = async (event: FormEvent) => {
    event.preventDefault();

    



    const enviarDatos = async () => {
      const apiUrl = process.env.NODE_ENV === 'production'
        ? 'https://art-test-git-main-tomas-arvedsons-projects.vercel.app/api/datosGuardar'
        : 'http://localhost:3000/api/datosGuardar';
    
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, correo, ciudad, desc }),
        });
    
        if (response.ok) {
          console.log('Datos enviados con éxito');
          setNombre('');
        } else {
          console.error('Error al enviar datos');
        }
      } catch (error) {
        console.error('Error de red', error);
      }
    
      setDatosEnviados(true);
      setNombre('');
      setCiudad('');
      setCorreo('');
      setDesc('');
    };
    


    return(    

        <div className={styles.bg1}>

            

            <div className={styles.bg2}>

            <p className={styles.p}>Mandanos una breve descripcion de tu espacio con imagenes  y como te gustaria harmonizarlo</p>

            <input type="text" id="datosNombre" placeholder="Nombre" 
            className={styles.nombre}
            onChange={extraerNombre} 
            value={nombre}/> 

            <input type="text" id="datosCorreo" placeholder="Correo o Telefono/Wa" 
            className={styles.correo}
            onChange={extraerCorreo} 
            value={correo}/> 

            <input type="text" id="datosCiudad" placeholder="Ciudad" 
            className={styles.ciudad}
            onChange={extraerCiudad} 
            value={ciudad}/> 

            <textarea
            id="datosDesc"
            placeholder="Descripcion"
            className={styles.desc}
            onChange={extraerDesc}
            value={desc}
            />

            {/* <input type="file"  id="datosImagen" placeholder="Imagen"
            onSubmit={extraerImagen}
            value={Imagen}/>
            */}
            <button id="boton" className={styles.boton} onClick={enviar} >
                Enviar
            </button>

            {datosEnviados && (
                <div className={styles.msg}>Tus datos han sido enviados</div>
            )}
            </div>

        </div>


    )
}