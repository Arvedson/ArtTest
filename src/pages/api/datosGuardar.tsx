// pages/api/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import FormularioModel from '@/models/formschema';
import connectDB from '@/db';

interface FormData {
  nombre: string;
  correo: string;
  ciudad: string;
  desc: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB(); // Conectar a la base de datos

  if (req.method === 'POST') {
    const nuevoFormularioData: FormData = req.body;

    try {
      // Crear una nueva instancia del modelo con los datos del formulario
      const nuevoFormulario = new FormularioModel(nuevoFormularioData);

      // Guardar el formulario en la base de datos
      const formularioGuardado: FormularioDocument = await nuevoFormulario.save();

      // Llamar a enviarCorreo antes de enviar la respuesta al cliente
      await enviarCorreo(nuevoFormularioData);

      res.status(200).json({ success: true, data: formularioGuardado });
    } catch (error) {
      console.error('Error al guardar el formulario en la base de datos:', error);
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Método no permitido' });
  }
}

// Función para enviar correo electrónico
const enviarCorreo = async ({ nombre, correo, ciudad, desc }: FormData) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

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
      console.log(`Reintentando en ${tiempoEspera} milisegundos...`);
      await new Promise(resolve => setTimeout(resolve, tiempoEspera));
    }
  }

  if (intentos === maxIntentos) {
    console.error('Se alcanzó el número máximo de reintentos. El correo no se ha enviado.');
  }
};
