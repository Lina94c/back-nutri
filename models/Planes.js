const { Schema, model } = require("mongoose")

const planesSchema = new Schema(
  {
    name: String,
    description: String,
    type: {
      type: String,
      enum: ["IMAGE"]
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Planes", planesSchema)