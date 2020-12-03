import React, {InputHTMLAttributes} from 'react'
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
  return(
    <div className="input-block">
      <label className="label" htmlFor={name}>{label}</label>
      <input className="input" type="text" id={name} {...rest} />
    </div>
  )
}

export default Input