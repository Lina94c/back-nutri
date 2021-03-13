const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoSchema = new Schema(
  {
    image:{
      type: String,
    },
    name: {
      type: String,
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