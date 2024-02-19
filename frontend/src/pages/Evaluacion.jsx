import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"

const Evaluacion = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const navigate = useNavigate()
  const [alerta, setAlerta] = useState({
    error: "",
    msg: ""
  })
  const { msg } = alerta
  const [value, setValue] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    colonia: "",
    numero: "",
    calle: "",
    codigoPostal: "",
    telefono: "",
    rfc: "",
    estatus: "",
    observacionesRechaso: "",
  })

  const handlechange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
    console.log(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (value.nombre === "" || value.nombre.trim() === "") {
      setAlerta({
        error: true,
        msg: "El campo Nombre es obligatorio"
      })
      return
    }
    if (value.primerApellido === "" || value.primerApellido.trim() === "") {
      setAlerta({
        error: true,
        msg: "El campo Primer apellido es obligatorio"
      })
      return
    }
    if (value.colonia === "" || value.colonia.trim() === "") {
      setAlerta({
        error: true,
        msg: "La Colonia es obligatorio"
      })
      return
    }
    if (value.numero === "" || value.numero.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Numero es obligatorio"
      })
      return
    }
    if (value.calle === "" || value.calle.trim() === "") {
      setAlerta({
        error: true,
        msg: "La Calle es obligatorio"
      })
      return
    }
    if (value.codigoPostal === "" || value.codigoPostal.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Codigo postal es obligatorio"
      })
      return
    }
    if (value.telefono === "" || value.telefono.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Telefono es obligatorio"
      })
      return
    }
    if (value.rfc === "" || value.rfc.trim() === "") {
      setAlerta({
        error: true,
        msg: "El RFC es obligatorio"
      })
      return
    }
    if (value.estatus === "" || value.estatus.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Estatus es obligatorio"
      })
      return
    }
    if (value.estatus === "rechazado" && value.observacionesRechaso === "") {
      setAlerta({
        error: true,
        msg: "Es obligatorio especificar los motivos del rechazo"
      })
      return
    }
    setAlerta({})
    setTimeout(() => toggleShow(), 1000);
    setTimeout(() => setShow(false), 3000);
    setTimeout(() => navigate("/"), 5000)
  }

  return (
    <main className="container">
      <h1 className="text-center">EVALUACION DE PROSPECTO</h1>
      {msg && <Alerta alerta={alerta} />}
      <Formulario
        handlechange={handlechange}
        handleSubmit={handleSubmit}
        registro="editar"
        value={value}
        setValue={setValue}
        show={show}
        setShow={setShow}
        toggleShow={toggleShow}
      />
    </main>
  )
}

export default Evaluacion
