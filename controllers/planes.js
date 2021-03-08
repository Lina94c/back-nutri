const Plan= require("../models/Planes")
const mercadopago = require("../config/mercadopago")

exports.getAllPlanes = async (req, res) => {
  const planes = await Plan.find()
  res.status(200).json({ planes})
}
exports.getPlanById = async (req, res) => {
  const { planId } = req.params

  const plan = await Plan.findById(planId)

  //TODO: Tenemos que generar la preferencia para hacerle llegar a react,
  // el dato para cobrar.
  let preference = {
    items: [
      {
        title: plan.name,
        unit_price: Number(plan.price),
        quantity: 1
      }
    ],
    notification_url:
      "https://webhook.site/1797d8db-4b84-4e9c-b608-0c12485f61aa",
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending"
    }
  }

  const response = await mercadopago.preferences.create(preference)

  res.status(200).json({ ...plan.toJSON(), preferenceId: response.body.id })
}

exports.createPlan = async (req, res) => {
  const { name, description, price, type, url } = req.body

  const plan = await Plan.create({
    name,
    description,
    price,
    type,
    url,
    owner: req.user.artist
  })
  await findByIdAndUpdate(req, {
    $push: { planes: plan._id }
  })

  res.status(201).json(plan)
}

exports.updatePlan = async (req, res) => {
  const { planId } = req.params
  const { name, description, price, url } = req.body

  const plan = await Plan.findByIdAndUpdate(
    planId,
    { name, description, price },
    { new: true }
  )

  res.status(200).json(plan)
}
exports.deletePlan = async (req, res) => {
  const { planId } = req.params

  await Plan.findByIdAndRemove(planId)

  res.status(200).json({
    message: "deleted"
  })
}