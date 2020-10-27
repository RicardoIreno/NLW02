import React, { TextareaHTMLAttributes } from "react"
import './style.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea className="textarea" id={name} {...rest} />
    </div>
  )
}
export default Textarea