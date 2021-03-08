const express = require("express")
const router = express.Router()
const { isAuth, catchErrors, isArtists } = require("../middlewares")

const {
  getAllAlimentos,
  getAlimentoById,
  createAlimento,
  updateAlimento,
  deleteAlimento
} = require("../controllers/alimento")

const {
  getAllPlanes,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan
} = require("../controllers/planes")

/*const {
  createPreference,
  createOrder,
  userOrders
} = require("../controllers/order")

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Nutrismart api")
})

/* ============  Nutriologo  ============ (Si me da tiempo)
 verificamos que exista el user
//                               👇
router.post("/artist/create", isAuth, catchErrors(becomeArtist))

// The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.
router.patch("/artist/update", isAuth, catchErrors(updateArtistInfo))
router.patch("/artist/:artistId/like", isAuth, catchErrors(updateLikes))
router.patch("/artist/:artistId/rating", isAuth, catchErrors(updateRating))
// Mostrar todos los artistas
router.get("/artist/all", catchErrors(getAllArtists))
//Mostrar un artista (por su id)
router.get("/artist/:artistId", catchErrors(getArtistsById))*/

//=========== Alimentos ===========
router.get("/alimento", catchErrors(getAllAlimentos))
router.post("/alimento", isAuth, catchErrors(createAlimento))
router.get("/alimento/:alimentoId", catchErrors(getAlimentoById))
router.patch("/alimento/:alimentoId", catchErrors(updateAlimento))
router.delete("/alimento/:alimentoId", catchErrors(deleteAlimento))

//=========== Planes ===========
router.get("/plan", catchErrors(getAllPlanes))
router.post("/plan", isAuth, catchErrors(createPlan))
router.get("/plan/:planId", catchErrors(getPlanById))
router.patch("/plan/:planId", catchErrors(updatePlan))
router.delete("/plan/:planId", catchErrors(deletePlan))

// //===========Orders=========== TODO: Terminar ordenes con MP.

// router.post("/preference", catchErrors(createPreference))
// router.post("/order", isAuth, catchErrors(createOrder))
// router.get("/order", isAuth, catchErrors(userOrders))
// // Generar la preferencia con mercadopago de nuestro carrito
// // uyetrqi8w47
// // Generar la orden (ya pagado)

module.exports = router