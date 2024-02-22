import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Sppiner from "../components/Sppiner"

const ListarId = () => {
  const [prospecto, setProspecto] = useState({})
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const { id } = params
  const {
    nombre,
    primerApellido,
    segundoApellido,
    calle,
    numero,
    colonia,
    codigoPostal,
    telefono,
    rfc,
    estatus,
    observacionesRechaso
  } = prospecto

  useEffect(() => {
    try {
      const obtenerProspecto = async () => {
        const { data } = await clienteAxios(`/prospectos/ver/${id}`)
        setProspecto(data)
      }
      obtenerProspecto()
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {loading ? <Sppiner /> : (
        <div className="container mt-2">
          <div className="card">
            <h5 className="card-header">Datos generales del prospecto</h5>
            <div className="card-body">
              <h5 className="card-title">Nombre: {nombre?.toUpperCase()}</h5>
              <p className="card-text">Primer Apellido: {primerApellido?.toUpperCase()}</p>
              <p className="card-text">Segundo Apellido: {segundoApellido?.toUpperCase()}</p>
              <p className="card-text">Calle: {calle?.toUpperCase()}</p>
              <p className="card-text">Numero: {numero}</p>
              <p className="card-text">Colonia: {colonia?.toUpperCase()}</p>
              <p className="card-text">Codigo postal: {codigoPostal}</p>
              <p className="card-text">Telefono: {telefono}</p>
              <p className="card-text">RFC: {rfc?.toUpperCase()}</p>
              <p className="card-text">Estatus: {estatus?.toUpperCase()}</p>
              {estatus === "Rechazado" &&
                <p className="card-text">
                  Observaciones: {observacionesRechaso?.toUpperCase()}
                </p>}
              <Link to="/" className="btn btn-primary"><i className="bi bi-arrow-left-circle"></i> Volver al inicio</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ListarId
