import { useState } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"

const Registrar = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
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

  const handleSubmit = async e => {
    e.preventDefault()
    if (value.nombre === "" || value.nombre.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Nombre es obligatorio"
      })
      return
    }
    if (value.primerApellido === "" || value.primerApellido.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Primer apellido es obligatorio"
      })
      return
    }
    if (value.colonia === "" || value.colonia.trim() === "") {
      setAlerta({
        error: true,
        msg: "La Colonia es obligatoria"
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
        msg: "La Calle es obligatoria"
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
    try {
      const prospecto = {
        ...value,
        estatus: "Enviado"
      }
      const { data } = await clienteAxios.post("/prospectos", prospecto)
      setAlerta({})
      setTimeout(() => toggleShow(), 500);
      setTimeout(() => setShow(false), 4000);
      setTimeout(() => navigate("/"), 6000);
    } catch (error) {
      console.log(error);
      setAlerta({
        error: true,
        msg: error.response.data.msg
      })
    }
  }

  return (
    <main className="container">
      <h1 className="text-center">REGISTRO DE PROSPECTO</h1>
      {msg && <Alerta alerta={alerta} />}
      <Formulario
        handlechange={handlechange}
        handleSubmit={handleSubmit}
        registro="nuevo"
        value={value}
        setValue={setValue}
        show={show}
        setShow={setShow}
        toggleShow={toggleShow}
      />
    </main>
  )
}

export default Registrar
