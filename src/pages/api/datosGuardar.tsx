import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import sgMail from '@sendgrid/mail';

interface FormData {
  nombre: string;
  correo: string;
  ciudad: string;
  desc: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Obtener los datos del cuerpo de la solicitud
    const nuevoFormulario: FormData = req.body;

    // Obtener la ruta del archivo JSON
    const filePath = path.join(process.cwd(), 'src', 'data', 'forms.json');

    // Leer los datos actuales del archivo JSON
    const datosActuales: FormData[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Agregar el nuevo formulario a los datos existentes
    datosActuales.push(nuevoFormulario);

    // Escribir los datos actualizados de vuelta al archivo JSON
    fs.writeFileSync(filePath, JSON.stringify(datosActuales, null, 2), 'utf-8');

    // Responder con éxito
    res.status(200).json({ success: true });


    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    console.log("api agarrrada")

    const enviarCorreo = async ({ nombre, correo, ciudad, desc }: FormData) => {
      const msg = {
        to: 'tomasarvedson@gmail.com', // Reemplazar con tu correo electrónico
        from: 'arvedson94@gmail.com', // Reemplazar con el correo electrónico de tu dominio
        subject: 'Nuevo formulario enviado',
        text: `

          **Nombre:** ${nombre}
          **Correo:** ${correo}
          **Ciudad:** ${ciudad}
          **Descripción:** ${desc}
        `,
      };
    
      let intentos = 0;
      const maxIntentos = 3; // Número máximo de reintentos
      const tiempoEsperaInicial = 1000; // Tiempo de espera inicial en milisegundos
      const factorBackoff = 2; // Factor de multiplicación para el tiempo de espera
    
      while (intentos < maxIntentos) {
        try {
          await sgMail.send(msg);
          console.log('Correo enviado con éxito');
          break; // Sale del bucle si el correo se envía correctamente
        } catch (error) {
          console.error('Error al enviar correo:', error);
          intentos++;
          const tiempoEspera = tiempoEsperaInicial * Math.pow(factorBackoff, intentos);
          console.log(`Reintentando en ${tiempoEspera} milisegundos...` );
          await new Promise(resolve => setTimeout(resolve, tiempoEspera));
        }
      }
    
      if (intentos === maxIntentos) {
        console.error('Se alcanzó el número máximo de reintentos. El correo no se ha enviado.');
      }
    };
    
    enviarCorreo(nuevoFormulario);
  } else {
    // Método no permitido
    res.status(405).json({ success: false, message: 'Método no permitido' });
  }
}
