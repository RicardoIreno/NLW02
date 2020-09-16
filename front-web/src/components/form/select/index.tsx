import React, { SelectHTMLAttributes} from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({name, label, options, ...rest}) => {
  return (
    <div className="select-block">
      <label className="label" htmlFor={name}>{label}</label>
      <select className="select" value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => {
          return <option 
                    key={option.value} 
                    value={option.value}>
                    {option.value}
                  </option>

          })}
      </select>
    </div>
  )
}
export default Select