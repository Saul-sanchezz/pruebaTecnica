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
    documentos: [],
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
    if (value.nombre?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Nombre es obligatorio"
      })
      return
    }
    if (value?.primerApellido?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Primer apellido es obligatorio"
      })
      return
    }
    if (value?.colonia?.trim() === "") {
      setAlerta({
        error: true,
        msg: "La Colonia es obligatoria"
      })
      return
    }
    if (value?.numero?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Numero es obligatorio"
      })
      return
    }
    if (value?.calle?.trim() === "") {
      setAlerta({
        error: true,
        msg: "La Calle es obligatoria"
      })
      return
    }
    if (value?.codigoPostal?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Codigo postal es obligatorio"
      })
      return
    }
    if (value?.telefono?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El Telefono es obligatorio"
      })
      return
    }
    if (value?.telefono.length !== 10) {
      setAlerta({
        error: true,
        msg: "El Telefono debe ser de 10 digitos"
      })
      return
    }
    if (value?.rfc?.trim() === "") {
      setAlerta({
        error: true,
        msg: "El RFC es obligatorio"
      })
      return
    }
    if (value.documentos.length === 0) {
      setAlerta({
        error: true,
        msg: "Documentos obligatorios"
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

  const getBase64 = ({ file, name }) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const archivo = { 
        name, 
        //data: reader.result
       };
      setValue(prev => ({
        ...prev,
        documentos: [...prev.documentos, archivo]
      }))
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const handleFileChange = e => {
    console.log("handelFiles", e)
    if (e.target.files?.length) {
      for (let i = 0; i < e.target.files.length; i = i + 1) {
        const file = e.target.files[i];
        const { name, } = file;
        getBase64({ file, name })
      }
    }
  }
  console.log("estate ->", value)
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
        handleFileChange={handleFileChange}
      />
    </main>
  )
}

export default Registrar
