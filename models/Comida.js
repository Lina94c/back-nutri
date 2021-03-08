const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comidaSchema = new Schema(
  {
    Nombre: {
      type: String,
      required: [true],
    },
    Descripcion: {
      type: String,
    },
    Porcion: {
      type: Number,
      required: true,
    },
    Unidad_de_medida: {
      type: String,
      enum: ["gr", "ml"],
      required: true,
    },
    Grupo_alimenticio: {
      type: String,
      enum: ["Grasas", "Proteína", "Carbohidrato", "Fruta", "Verdura"],
      required: [true,],
    },
    Calorias_kcal: {
      type: Number,
      required: true,
    },
    Creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
  },
  { timestamps: true }
);

const Comida = mongoose.model("Comida", comidaSchema);
module.exports = Comida;