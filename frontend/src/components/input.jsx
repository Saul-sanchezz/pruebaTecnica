const input = ({
  className,
  label,
  id,
  type = "text",
  placeholder,
  onChange,
  required = true,
  value,
  disabled,
  multiple = null,
  minLength = 3,
  maxLength
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
          value={value}
          disabled={disabled}
          multiple={multiple}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
    </div>
  )
}

export default input
