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
  toggleShow
}) => {
  // const [show, setShow] = useState(false);
  // const toggleShow = () => setShow(!show);

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
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="apellido"
          label="Primer Apellido"
          id="primerApellido"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="segundo apellido"
          label="Segundo Apellido"
          id="segundoApellido"
          onChange={handlechange}
          required={false}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="colonia"
          label="Colonia"
          id="colonia"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-2"
          placeholder="numero"
          label="Numero"
          id="numero"
          type="number"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-5"
          placeholder="direccion o calle"
          label="Calle"
          id="calle"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-5"
          placeholder="codigo postal"
          label="Codigo Postal"
          id="codigoPostal"
          type="number"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="numero de telefono"
          label="Telefono"
          id="telefono"
          type="number"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-6"
          placeholder="rfc"
          label="RFC"
          id="rfc"
          onChange={handlechange}
        />
        <Input
          className="d-flex flex-column col-sm-12"
          label="Documentos"
          id="documentos"
          type="file"
          required={false}
        />
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
                >
                  <option defaultValue></option>
                  <option value="autorizado">Autorizado</option>
                  <option value="rechazado">Rechazado</option>
                </select>
              </div>
              <>
                {value?.estatus === "rechazado" && (
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
          >{registro === "editar"? "Actualizar" : "Enviar"}</button>
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
