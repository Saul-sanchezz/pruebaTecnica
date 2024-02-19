import { Link } from "react-router-dom"

const Listar = () => {
  return (
    <div className="container list-group mt-2">
      <a href="#" className="list-group-item list-group-item-action bg-info-subtle" aria-current="true">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Lista de prospectos</h5>
        </div>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Nombre: </h5>
          <small className="text-muted">Estatus: </small>
        </div>
        <p className="mb-1">Primer Apellido: </p>
        <small className="text-muted">Segundo Apellido: </small>
        <div className="d-flex justify-content-end">
          <Link
            to="/listar/id"
            className="btn btn-secondary"
            type="button"
          >Ver detalles</Link>
        </div>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Nombre: </h5>
          <small className="text-muted">Estatus: </small>
        </div>
        <p className="mb-1">Primer Apellido: </p>
        <small className="text-muted">Segundo Apellido: </small>
        <div className="d-flex justify-content-end">
          <Link
            to="/listar/id"
            className="btn btn-secondary"
            type="button"
          >Ver mas</Link>
        </div>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Nombre: </h5>
          <small className="text-muted">Estatus: </small>
        </div>
        <p className="mb-1">Primer Apellido: </p>
        <small className="text-muted">Segundo Apellido: </small>
        <div className="d-flex justify-content-end">
          <Link
            to="/listar/id"
            className="btn btn-secondary"
            type="button"
          >Ver mas</Link>
        </div>
      </a>
    </div>
  )
}

export default Listar
