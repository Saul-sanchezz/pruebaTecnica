const mongoose = require("mongoose");

const ProspectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  primerApellido: {
    type: String,
    require: true,
    trim: true,
  },
  segundoApellido: {
    type: String,
    trim: true,
  },
  calle: {
    type: String,
    require: true,
    trim: true,
  },
  numero: {
    type: Number,
    require: true,
  },
  colonia: {
    type: String,
    require: true,
    trim: true,
  },
  codigoPostal: {
    type: Number,
    require: true,
  },
  telefono: {
    type: Number,
    require: true,
  },
  rfc: {
    type: String,
    require: true,
    trim: true,
  },
  documentos: {
    type: String,
    require: true,
  },
  estatus: {
    type: String,
    require: true,
    enum: ["Enviado", "Autorizado", "Rechazado"],
    default: "Enviado",
  },
  observacionesRechaso: {
    type: String,
    default: null
  },
},
  {
    timestamps: true
  }
);
ProspectoSchema.set("toJSON", {
  transform: (document, returnedObjet) => {
    returnedObjet.id = returnedObjet._id
    delete returnedObjet._id
    delete returnedObjet.__v
  }
})

const Prospecto = mongoose.model("Prospecto", ProspectoSchema)

module.exports = Prospecto




