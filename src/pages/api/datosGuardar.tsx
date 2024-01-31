// /pages/api/guardarDatos.ts

import fs from 'fs';
import path from 'path';
import sgMail from '@sendgrid/mail';


export default function handler(req, res) {
  if (req.method === 'POST') {
    // obtener los datos del cuerpo de la solicitud
    const nuevoFormulario = req.body;

    // obtener la ruta del archivo JSON
    const filePath = path.join(process.cwd(), "src", 'data', 'forms.json');

    // leer los datos actuales del archivo JSON
    const datosActuales = JSON.parse(fs.readFileSync(filePath, 'utf-8'));


    // agregar el nuevo formulario a los datos existentes
    datosActuales.push(nuevoFormulario);

    // escribir los datos actualizados de vuelta al archivo JSON
    fs.writeFileSync(filePath, JSON.stringify(datosActuales, null, 2), 'utf-8');

    // responder con éxito
    res.status(200).json({ success: true });

    const SENDGRID_API_KEY = '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';
    sgMail.setApiKey(SENDGRID_API_KEY);
  
    // ... (código para guardar los datos en el archivo JSON)
  
    // Enviar correo con los datos del formulario
    const enviarCorreo = async ({ nombre, correo, ciudad, desc }) => {
      const msg = {
        to: 'tomasarvedson@gmail.com', // Reemplaza con tu correo electrónico
        from: 'arvedson94@gmail.com', // Reemplaza con el correo electrónico de tu dominio
        subject: 'Nuevo formulario enviado',
        text: `
          **Nombre:** ${nombre}
          **Correo:** ${correo}
          **Ciudad:** ${ciudad}
          **Descripción:** ${desc}
        `,
      };
  
      try {
        await sgMail.send(msg);
        console.log('Correo enviado con éxito');
      } catch (error) {
        console.error('Error al enviar correo:', error);
      }
    };

    enviarCorreo(nuevoFormulario);

  } else {
    // metodo no permitido
    res.status(405).json({ success: false, message: 'Método no permitido' });
  }

}

