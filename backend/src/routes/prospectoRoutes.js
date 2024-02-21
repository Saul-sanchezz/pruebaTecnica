const express = require("express");
const router = express.Router()
const {
  registrar,
  obtenerProspectos,
  obtenerProspectoId,
  actualizarProspectoId,
  elimiarProspectoId,
} = require("../controllers/prospectoController.js")

const {
  validacionRegistrar,
  validacionObtenerProspecto,
  validacionAcctualizarProspecto,
  validacionEliminarProspecto,
} = require("../validations/prospectoValidation.js")

router.post("/",validacionRegistrar, registrar)
router.get("/", obtenerProspectos)
router.get("/ver/:id",validacionObtenerProspecto, obtenerProspectoId)
router.put("/actualizar/:id",validacionAcctualizarProspecto, actualizarProspectoId)
router.delete("/eliminar/:id",validacionEliminarProspecto, elimiarProspectoId)

module.exports = router




