import './TextInput.scss'
import React from "react"

const TextInput = props => {

  return (
    <div className="input-group">
      <input
        name={ props.name }
        type={ props.type }
        className={ 'text-input ease' }
        maxLength={ props.maxlength }
        placeholder={ 'placeholder' }
        pattern="(.|\s)*\S(.|\s)*"
        required
      />
      <label 
        htmlFor={ props.id } 
        id={ 'label-' + props.id } 
        className="label ease">
        { props.placeholder }
      </label>
    </div>
  )
}

export default TextInput;