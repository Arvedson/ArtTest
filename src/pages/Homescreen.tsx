import React from "react";

import styles from "../styles/Homescreen.module.css"

export default function Homescreen (){

    return (
        <div className={styles["abuelo"]}>
            <div className={styles["textos"]}> 
                <p className={styles["text1"]}>
                Simple no-tricks pricing
                </p>
                <p className={styles["text2"]}>
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
                </p>
            </div>
            <div className={styles["padre"]}>
            <div className={styles["contenedor1"]}>
                <p className={styles["p11"]}>
                    Lifetime membership
                </p>
                <p className={styles["p22"]}>
                    Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                </p>
                <div className={styles["wtf"]}>
                    <div className={styles["p33"]}>                       
                        whats included 
                    </div>
                    <map className={styles["linea"]}/>                       
                </div>
                <div className={styles["tabla"]}>                
                    <map className={styles["check1"]}/> 
                    <p className={styles["pp1"]}>
                        Private forum access
                    </p>
                    <map className={styles["check2"]}/> 
                    <p className={styles["pp2"]}>
                        Private forum access
                    </p>
                </div>
                <div className={styles["tabla2"]}>
                    <map className={styles["check3"]}/>
                    <p className={styles["pp3"]}>  
                        Private forum access
                    </p>
                    <map className={styles["check4"]}/> 
                    <p className={styles["pp4"]}>
                        Private forum access
                    </p>                
                </div>
            </div>
            <div className={styles["container"]}>
                        <p className={styles["p1"]}>
                            pay once, own forever
                        </p>
                        <p className={styles["p2"]}>
                            $350 <span className={styles["usd"]}>USD</span>
                        </p>
                        <p className={styles["p3"]}>
                            Get acces
                        </p>
                        <p className={styles["p4"]}>
                            invoices and receipts available for easy company
                        </p>
            </div>
            </div>
        </div>
    )
}

