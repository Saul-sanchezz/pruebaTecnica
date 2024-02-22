import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Sppiner from "../components/Sppiner"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta"

const Evaluacion = () => {
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const { id } = params
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

  useEffect(() => {
    try {
      const obtenerProspecto = async () => {
        const { data } = await clienteAxios(`/prospectos/ver/${id}`)
        setValue(data)
      }
      obtenerProspecto()
      setTimeout(() => setLoading(false), 2000);
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handlechange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
    console.log(value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (value?.nombre === "") {
      setAlerta({
        error: true,
        msg: "El campo Nombre es obligatorio"
      })
      return
    }
    if (value.primerApellido === "") {
      setAlerta({
        error: true,
        msg: "El campo Primer apellido es obligatorio"
      })
      return
    }
    if (value.colonia === "") {
      setAlerta({
        error: true,
        msg: "La Colonia es obligatorio"
      })
      return
    }
    if (value.numero === "") {
      setAlerta({
        error: true,
        msg: "El Numero es obligatorio"
      })
      return
    }
    if (value.calle === "") {
      setAlerta({
        error: true,
        msg: "La Calle es obligatorio"
      })
      return
    }
    if (value.codigoPostal === "") {
      setAlerta({
        error: true,
        msg: "El Codigo postal es obligatorio"
      })
      return
    }
    if (value.telefono === "") {
      setAlerta({
        error: true,
        msg: "El Telefono es obligatorio"
      })
      return
    }
    if (value.rfc === "") {
      setAlerta({
        error: true,
        msg: "El RFC es obligatorio"
      })
      return
    }
    if (value.estatus === "") {
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
    try {
      const prospecto = {
        ...value
      }
      const { data } = await clienteAxios.put(`/prospectos/actualizar/${id}`, prospecto)
      setAlerta({})
      setTimeout(() => toggleShow(), 1000);
      setTimeout(() => setShow(false), 4000);
      setTimeout(() => navigate("/"), 6000);
    } catch (error) {
      setAlerta({
        error: true,
        msg: error.response.data.msg
      })
    }
  }

  return (
    <main className="container">
      {loading ? <Sppiner /> : (
        <>
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
        </>
      )}
    </main>
  )
}

export default Evaluacion
