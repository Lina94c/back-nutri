const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoSchema = new Schema(
  {
    image:{
      type: String,
      default: "https://static.vecteezy.com/system/resources/previews/000/337/301/non_2x/vector-fast-food-icon.jpg"
    },
    name: {
      type: String,
    },
    gropo_alimenticio:{
      type: String,
      enum: ["Carbohidratos", "Grasas", "Frutas", "Verduras", "Cereales"],
    },
    quantity: {
      type: Number,
    },
    kcal: {
      type: Number,
    },
    
  },
  { timestamps: true }
);

const Alimento = mongoose.model("Alimento", alimentoSchema);
module.exports = Alimento;