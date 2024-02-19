const input = ({
  className,
  label,
  id,
  type = "text",
  placeholder,
  onChange,
  required = true
}) => {
  return (
    <div className={className}>
      <div>
        <label htmlFor={id} className="form-label">{label}</label>
        <input
          id={id}
          name={id}
          className="form-control"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          // required={required}
        />
      </div>
    </div>
  )
}

export default input
