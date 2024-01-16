// Componente1.js
import React from 'react';
import styles from '@/styles/componente1.module.css';



export default function Componente1() {



  return (
    <div className={styles['container']}>
      <div className={styles['inicio']}>

        <div
          className={styles['logopng2']}
        />
        <span className={styles['text']}>
          <span>Arte personalizado</span>
        </span>
        <span className={styles['text2']}>
          <span className={styles['text3']}>
            <span>Para todo tipo</span>
            <br></br>
            <span>
              de
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span>espacio</span>
        </span>
      </div>
    </div>
  )
}