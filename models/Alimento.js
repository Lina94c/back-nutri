const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoSchema = new Schema(
  {
    image:{
      type: String,
    },
    name: {
      type: String,
      required: [true],
    },
    quantity: {
      type: Number,
      required: true,
    },
    kcal: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Alimento = mongoose.model("Alimento", alimentoSchema);
module.exports = Alimento;