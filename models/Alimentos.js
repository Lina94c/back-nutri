const { Schema, model } = require("mongoose")

const alimentosSchema = new Schema(
  {
    name: String,
    description: String,
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comida"
      }
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    secret: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = model("Alimentos", alimentosSchema)