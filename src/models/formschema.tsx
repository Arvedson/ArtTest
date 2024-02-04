import mongoose, { Document, Schema } from 'mongoose';

interface FormularioDocument extends Document {
  nombre: string;
  correo: string;
  ciudad: string;
  desc: string;
}


const formularioSchema = new Schema<FormularioDocument>({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  ciudad: { type: String, required: true },
  desc: { type: String, required: true },
});

// Crear el modelo de Mongoose
const FormularioModel = mongoose.model<FormularioDocument>('Formulario', formularioSchema);

export default FormularioModel;
