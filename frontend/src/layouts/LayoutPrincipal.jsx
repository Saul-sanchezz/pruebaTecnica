import { Link } from "react-router-dom"

const LayoutPrincipal = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-between m-2">
        <h3>Acciones</h3>
        <Link
          className="btn btn-primary"
          to="/registrar"
        >Registrar Nuevo <i className="bi bi-person-fill-add"></i></Link>
      </div>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div
                  className="d-flex gap-1"
                >
                  <Link
                    className="btn btn-secondary"
                    to="listar/id"
                  >Detalles <i className="bi bi-eye"></i></Link>
                  <Link
                    className="btn btn-primary"
                    to="/evaluacion/id"
                  >Evaluar <i className="bi bi-pencil-square"></i></Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <div
                  className="d-flex gap-1"
                >
                  <Link
                    className="btn btn-secondary"
                    to="listar/id"
                  >Detalles <i className="bi bi-eye"></i></Link>
                  <Link
                    className="btn btn-primary"
                    to="/evaluacion/id"
                  >Evaluar <i className="bi bi-pencil-square"></i></Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>
                <div
                  className="d-flex gap-1"
                >
                  <Link
                    className="btn btn-secondary"
                    to="listar/id"
                  >Detalles <i className="bi bi-eye"></i></Link>
                  <Link
                    className="btn btn-primary"
                    to="/evaluacion/id"
                  >Evaluar <i className="bi bi-pencil-square"></i></Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LayoutPrincipal
