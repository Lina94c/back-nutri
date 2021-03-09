const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
      username: {
        type: String,
        unique: true
      },
      email: {
        type: String,
        unique: true
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
      },
      avatar: {
        type: String,
        default: "https://www.shankarainfra.com/img/avatar.png"
      },
      genre: {
        type: String,
        enum: ["Femenino", "Masculino"],
      },
      age: {
        type: Number,
        min: 15,
        max: 75,
        required: [true, "Ingresa tu edad"],
      },
      height: {
        type: Number,
        min: 50,
        max: 200,
        required: [
          true,
          "Ingresa tu estatura",
        ],
      },
      weight: {
        type: Number,
        min: 20,
        max: 500,
        required: [true, "Ingresa tu peso"],
      },
      activity: {
        type: String,
        enum: ["Bajo", "Moderado", "Alto", "Muy alto", "Hiperactivo"],
        required: [
          true,
          "Es necesario que especifiques tu nivel de actividad diaria",
        ],
      },
      objective: {
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