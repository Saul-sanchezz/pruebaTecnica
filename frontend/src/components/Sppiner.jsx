
const Sppiner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center align-content-center my-5"> 
      <p className="display-6 text-center text-info-emphasis">CARGANDO...</p>
      <div className="spinner-border" style={{ "width": "3rem", "height": "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Sppiner
