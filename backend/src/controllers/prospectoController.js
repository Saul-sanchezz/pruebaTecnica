const Prospecto = require("../models/Prospecto.js")


const registrar = async (req, res) => {
  try {
    const prospecto = new Prospecto(req.body)
    const prospectoAlmacenado = await prospecto.save()

    return res.json({ msg: "Prospecto creado correctamente" })
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerProspectos = async (req, res) => {
  try {
    const prospectos = await Prospecto.find().sort({ createdAt: 'desc' });
    return res.json(prospectos)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const obtenerProspectoId = async (req, res) => {
  const { id } = req.params

  try {
    const prospecto = await Prospecto.findById(id).select("-createdAt -updatedAt -__v")
    if (!prospecto) {
      const error = new Error("Prospecto No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    return res.json(prospecto)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const actualizarProspectoId = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const prospecto = await Prospecto.findById(id)

    if (!prospecto) {
      const error = new Error("Prospecto No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    const prospectoAlmacenado = await Prospecto.findByIdAndUpdate(id, body, { "new": true })
      .select("-createdAt -updatedAt -__v")
    return res.json(prospectoAlmacenado)
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

const elimiarProspectoId = async (req, res) => {
  const { id } = req.params;

  try {
    const prospecto = await Prospecto.findById(id);

    if (!prospecto) {
      const error = new Error("Prospecto No Encontrado")
      return res.status(404).json({ msg: error.message });
    }
    const prospectoEliminar = await prospecto.deleteOne(prospecto)
    return res.json({ msg: "Prospecto eliminado correctamente" })
  } catch (error) {
    return res.status(500).send({ msg: "Ocurrio un error" })
  }
}

module.exports = {
  registrar,
  obtenerProspectos,
  obtenerProspectoId,
  actualizarProspectoId,
  elimiarProspectoId,
}

