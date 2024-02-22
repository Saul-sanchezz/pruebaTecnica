import Input from "./input"
import ModalSalir from "../components/ModalSalir"
import ToastC from "./Toast"

const Formulario = ({
  handleSubmit,
  handlechange,
  registro = "nuevo",
  value,
  setValue,
  show,
  setShow,
  toggleShow,
  handleFileChange
}) => {

  return (
    <form
      className=""
      onSubmit={handleSubmit}
    >
      <div className="row mb-4">
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="nombre"
          label="Nombre"
          id="nombre"
          onChange={handlechange}
          value={value?.nombre}
          disabled={registro === "editar" && true}
          maxLength={100}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="apellido"
          label="Primer Apellido"
          id="primerApellido"
          onChange={handlechange}
          value={value?.primerApellido}
          disabled={registro === "editar" && true}
          maxLength={100}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="segundo apellido"
          label="Segundo Apellido"
          id="segundoApellido"
          onChange={handlechange}
          required={false}
          value={value?.segundoApellido}
          disabled={registro === "editar" && true}
          maxLength={100}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="colonia"
          label="Colonia"
          id="colonia"
          onChange={handlechange}
          value={value?.colonia}
          disabled={registro === "editar" && true}
          maxLength={100}
        />
        <Input
          className="d-flex flex-column col-sm-2"
          placeholder="numero"
          label="Numero"
          id="numero"
          type="number"
          onChange={handlechange}
          value={value?.numero}
          disabled={registro === "editar" && true}
          maxLength={8}
        />
        <Input
          className="d-flex flex-column col-sm-5"
          placeholder="direccion o calle"
          label="Calle"
          id="calle"
          onChange={handlechange}
          value={value?.calle}
          disabled={registro === "editar" && true}
          maxLength={100}
        />
        <Input
          className="d-flex flex-column col-sm-5"
          placeholder="codigo postal"
          label="Codigo Postal"
          id="codigoPostal"
          type="number"
          onChange={handlechange}
          value={value?.codigoPostal}
          disabled={registro === "editar" && true}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="numero de telefono"
          label="Telefono"
          id="telefono"
          type="number"
          onChange={handlechange}
          value={value?.telefono}
          disabled={registro === "editar" && true}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="rfc"
          label="RFC"
          id="rfc"
          onChange={handlechange}
          value={value?.rfc}
          disabled={registro === "editar" && true}
          maxLength={12}
        />
        <div className="d-flex flex-column col-sm-12">
          <div>
            <label htmlFor={"documentos"} className="form-label">Documentos</label>
            <input
              id={"documentos"}
              name={"documentos"}
              className="form-control"
              type={"file"}
              onChange={handleFileChange}
              disabled={registro === "editar" && true}
              multiple={true}
            />
          </div>
          {registro === "editar" && (
             <p className="card-text">Documento/s: {" "}
             {value?.documentos?.map(documento => documento.name)?.join(", ")}
           </p>
          )}
        </div>
        <>
          {registro === "editar" ? (
            <>
              <div className="mb-3">
                <label
                  htmlFor="estatus"
                  className="form-label"
                >
                  Estatus</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="estatus"
                  name="estatus"
                  onChange={handlechange}
                  value={value?.estatus}
                >
                  <option defaultValue>Enviado</option>
                  <option value="Autorizado">Autorizado</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
              </div>
              <>
                {value?.estatus === "Rechazado" && (
                  <div className="mb-3">
                    <label
                      htmlFor="observacionesRechaso"
                      className="form-label"
                    >
                      Motivos de rechazo</label>
                    <textarea
                      className="form-control"
                      id="observacionesRechaso"
                      name="observacionesRechaso"
                      rows="3"
                      onChange={handlechange}
                      value={value?.observacionesRechaso}
                    >
                    </textarea>
                  </div>
                )}
              </>
            </>
          ) : null}
        </>
        <div className="d-flex justify-content-between mt-2">
          <ModalSalir
            value={value}
            setValue={setValue}
          />
          <button
            type="submit"
            className="btn btn-primary"
          >{registro === "editar" ? "Actualizar" : "Enviar"}</button>
        </div>
        <ToastC
          show={show}
          setShow={setShow}
          toggleShow={toggleShow}
        />
      </div>
    </form>
  )
}

export default Formulario
