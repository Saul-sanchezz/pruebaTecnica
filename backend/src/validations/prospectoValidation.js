const { check, param, validationResult } = require("express-validator")

const validacionRegistrar = [
  check("nombre").exists().withMessage('El nombre del prospecto no existe en la petición')
    .notEmpty().withMessage('El nombre del prospecto es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("primerApellido").exists().withMessage('El primer apellido del prospecto no existe en la petición')
    .notEmpty().withMessage('El primer apellido del prospecto es obligatorio')
    .isLength({ max: 100 }).withMessage('El apellido no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("calle").exists().withMessage('La calle no existe en la petición')
    .notEmpty().withMessage('La calle es obligatoria')
    .isLength({ max: 100 }).withMessage('La calle no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("numero").exists().withMessage('El numero no existe en la petición')
    .notEmpty().withMessage('El numero es obligatorio')
    .isLength({ max: 10 }).withMessage('El numero no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("colonia").exists().withMessage('La colonia no existe en la petición')
    .notEmpty().withMessage('La colonia es obligatoria')
    .isLength({ max: 100 }).withMessage('Colonia no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("codigoPostal").exists().withMessage('El codigo postal no existe en la petición')
    .notEmpty().withMessage('El codigo postal es obligatorio')
    .isLength({ max: 8 }).withMessage('El codigo postal no debe ser mayor a 8 caracteres')
    .trim()
    .escape(),
  check("telefono").exists().withMessage('El numero de telefono no existe en la petición')
    .notEmpty().withMessage('El numero de telefono es obligatorio')
    .isLength({ max: 10 }).withMessage('El numero no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("rfc").exists().withMessage('El RFC no existe en la petición')
    .notEmpty().withMessage('El RFC es obligatorio')
    .isLength({ max: 12 }).withMessage('El numero no debe ser mayor a 12 caracteres')
    .trim()
    .escape(),
  check("documentos").exists().withMessage('No existe ningun documento en la petición')
    .notEmpty().withMessage('Documentos obligatorios')
    .trim()
    .escape(),
  check("estatus").exists().withMessage('El Estatus no existe en la petición')
    .notEmpty().withMessage('El estatus es obligatorio')
    .isLength({ max: 20 }).withMessage('El numero no debe ser mayor a 20 caracteres')
    .trim()
    .escape(),
  (req, res, next) => {
    const errores = validationResult(req)

    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() })
    }
    return next()
  }
]

const validacionObtenerProspecto = [
  param("id").isLength({ max: 24, min: 24 }).withMessage("Id incorrecta").isHexadecimal().withMessage("Id no valida"),
  (req, res, next) => {
    const errores = validationResult(req)

    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() })
    }
    return next()
  }
]

const validacionAcctualizarProspecto = [
  param("id").isLength({ max: 24, min: 24 }).withMessage("Id incorrecta").isHexadecimal().withMessage("Id no valida"),
  check("nombre").exists().withMessage('El nombre del prospecto no existe en la petición')
    .notEmpty().withMessage('El nombre del prospecto es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("primerApellido").exists().withMessage('El primer apellido del prospecto no existe en la petición')
    .notEmpty().withMessage('El primer apellido del prospecto es obligatorio')
    .isLength({ max: 100 }).withMessage('El apellido no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("calle").exists().withMessage('La calle no existe en la petición')
    .notEmpty().withMessage('La calle es obligatoria')
    .isLength({ max: 100 }).withMessage('La calle no debe ser mayor a 100 caracteres')
    .trim()
    .escape(),
  check("numero").exists().withMessage('El numero no existe en la petición')
    .notEmpty().withMessage('El numero es obligatorio')
    .isLength({ max: 10 }).withMessage('El numero no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("colonia").exists().withMessage('La colonia no existe en la petición')
    .notEmpty().withMessage('La colonia es obligatoria')
    .isLength({ max: 100 }).withMessage('Colonia no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("codigoPostal").exists().withMessage('El codigo postal no existe en la petición')
    .notEmpty().withMessage('El codigo postal es obligatorio')
    .isLength({ max: 8 }).withMessage('El codigo postal no debe ser mayor a 8 caracteres')
    .trim()
    .escape(),
  check("telefono").exists().withMessage('El numero de telefono no existe en la petición')
    .notEmpty().withMessage('El numero de telefono es obligatorio')
    .isLength({ max: 10 }).withMessage('El numero no debe ser mayor a 10 caracteres')
    .trim()
    .escape(),
  check("rfc").exists().withMessage('El RFC no existe en la petición')
    .notEmpty().withMessage('El RFC es obligatorio')
    .isLength({ max: 12 }).withMessage('El numero no debe ser mayor a 12 caracteres')
    .trim()
    .escape(),
  check("documentos").exists().withMessage('No existe ningun documento en la petición')
    .notEmpty().withMessage('Documentos obligatorios')
    .trim()
    .escape(),
  check("estatus").exists().withMessage('El Estatus no existe en la petición')
    .notEmpty().withMessage('El estatus es obligatorio')
    .isLength({ max: 20 }).withMessage('El numero no debe ser mayor a 20 caracteres')
    .trim()
    .escape(),
  (req, res, next) => {
    const errores = validationResult(req)

    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() })
    }

    return next()
  }
]

const validacionEliminarProspecto = [
  param("id").isLength({ max: 24, min: 24 }).withMessage("Id incorrecta").isHexadecimal().withMessage("Id no valida"),
  (req, res, next) => {
    const errores = validationResult(req)

    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() })
    }

    return next()
  }
]

module.exports = {
  validacionRegistrar,
  validacionObtenerProspecto,
  validacionAcctualizarProspecto,
  validacionEliminarProspecto,
}


