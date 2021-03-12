const Alimento= require("../models/Alimento")

exports.getAllAlimentos = async (req, res) => {
  const  alimentos = await alimentos.find()
  res.status(200).json({ alimentos})
}
exports.getAlimentosById = async (req, res) => {
  const { alimentoId } = req.params
  const alimento = await Alimento.findById(alimentoId)
  res.status(200).json({ ...alimento.toJSON(), preferenceId: response.body.id })
}

exports.createAlimento = async (req, res) => {
  const { name, image, quantity, kcal } = req.body

  const alimento = await Alimento.create({
    image,
    quantity,
    name,
    kcal,
  })
  await findByIdAndUpdate(req, {
    $push: { alimentos: alimento._id }
  })

  res.status(201).json(alimento)
}

exports.updateAlimento = async (req, res) => {
  const { alimentoId } = req.params
  const { name,quantity, image, kcal } = req.body

  const alimento = await Alimento.findByIdAndUpdate(
    alimentoId,
    { name, quantity, image, kcal },
    { new: true }
  )

  res.status(200).json(alimento)
}
exports.deletePlan = async (req, res) => {
  const { alimentoId } = req.params

  await Alimento.findByIdAndRemove(alimentoId)

  res.status(200).json({
    message: "deleted"
  })
}