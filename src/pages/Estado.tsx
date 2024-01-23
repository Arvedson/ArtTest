
import styles from "../styles/Estado.module.css"
import { useState } from "react";




export default function Estado (props: {mostrar: boolean, togglemostrar: () => void}){

    const styles2 = props.mostrar? styles.estado : styles.estado2;

    

    


    return(

        <div className={styles2}  >

            {props.mostrar ? "true" : "false"}

            {/* <button onClick={(event)=>{console.log(event)}}>
                test</button> */}

                


            <input type="checkbox" checked={props.mostrar} onChange={props.togglemostrar}/> 

        </div>
    )
}