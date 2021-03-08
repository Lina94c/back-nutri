const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "Nombre usuario"],
    },
    email: {
      type: String,
      required: [true, "El correo electrónico es requerido"],
      validate: {
        message: "Correo electrónico ya registrado",
        validator: async (email) => {
          const items = await mongoose.models["User"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "La contrase;a es necesaria para continuar"],
    },
    sexo: {
      type: String,
      enum: ["Femenino", "Masculino"],
    },
    edad: {
      type: Number,
      min: 15,
      max: 75,
      required: [true, "Ingresa tu edad"],
    },
    altura_cm: {
      type: Number,
      min: 50,
      max: 200,
      required: [
        true,
        "Ingresa tu estatura",
      ],
    },
    peso_kg: {
      type: Number,
      min: 20,
      max: 500,
      required: [true, "Ingresa tu peso"],
    },
    nivel_de_actividad: {
      type: String,
      enum: ["Bajo", "Moderado", "Alto", "Muy alto", "Hiperactivo"],
      required: [
        true,
        "Es necesario que especifiques tu nivel de actividad diaria",
      ],
    },
    objetivo: {
      type: String,
      enum: [
        "Perder peso",
        "Mantener peso",
        "Aumentar masa muscular",
      ],
      required: [true, "Es necesario que especifiques tu objetivo"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;