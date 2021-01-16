import './TextInput.scss'
import React from "react"

const TextInput = props => {

  return (
    <div className="input-group">
      <input
        name={ props.name }
        type={ props.type }
        className={ 'text-input ease-in' }
        maxLength={ props.maxlength }
        placeholder={ 'placeholder' }
        pattern="(.|\s)*\S(.|\s)*"
        required
      />
      <label 
        for={ props.id } 
        id={ 'label-' + props.id } 
        className="label ease-in">
        { props.placeholder }
      </label>
    </div>
  )
}

export default TextInput;

