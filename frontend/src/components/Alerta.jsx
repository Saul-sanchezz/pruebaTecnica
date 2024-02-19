const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ?"alert alert-danger":"alert alert-info"} text-center`} role="alert">
      {alerta.error ? <i className="bi bi-exclamation-triangle-fill"> {alerta.msg}</i> :
      <i className="bi bi-check-circle-fill"> {alerta.msg}</i>}
    </div>
  )
}

export default Alerta
