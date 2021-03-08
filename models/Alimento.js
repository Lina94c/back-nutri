const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    portion: {
      type: String,
      enum: ["gr", "ml"],
      required: true,
    },
    food_group: {
      type: String,
      enum: ["Grasas", "Proteína", "Carbohidrato", "Fruta", "Verdura"],
      required: [true,],
    },
    kcal: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
  },
  { timestamps: true }
);

const Alimento = mongoose.model("Alimento", alimentoSchema);
module.exports = Alimento;