import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Sppiner from "../components/Sppiner"

const LayoutPrincipal = () => {
  const [prospectos, setProspectos] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    try {
      const obtenerProspectos = async () => {
        const { data } = await clienteAxios("/prospectos")
        setProspectos(data)
      }
      obtenerProspectos()
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {loading ? <Sppiner /> : (
        <div className="">
          <div className="d-flex justify-content-between m-2">
            <h3>Acciones</h3>
            <Link
              className="btn btn-primary"
              to="/registrar"
            >Registrar Nuevo <i className="bi bi-person-fill-add"></i></Link>
          </div>
          {prospectos.length > 0 ? (
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {prospectos.map((prospecto, index) => (
                    <tr key={prospecto.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{prospecto.nombre}</td>
                      <td>{`${prospecto.primerApellido}  ${prospecto.segundoApellido}`}</td>
                      <td>{prospecto.estatus}</td>
                      <td>
                        <div
                          className="d-flex gap-1"
                        >
                          <Link
                            className="btn btn-secondary"
                            to={`listar/${prospecto.id}`}
                          >Detalles <i className="bi bi-eye"></i></Link>
                          <Link
                            className="btn btn-primary"
                            to={`evaluacion/${prospecto.id}`}
                          >Evaluar <i className="bi bi-pencil-square"></i></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <h1
            className="text-center pt-4"
          >No hay prospectos registrados</h1>}
        </div>
      )}
    </>
  )
}

export default LayoutPrincipal
