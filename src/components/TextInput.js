import './TextInput.scss'
import React from "react"

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (

      <div className="input-group" id="name">
        <input
          id={this.props.id}
          type={this.props.type}
          className='text-input padding ease-in'
          placeholder={this.props.placeholder} />
        <label for={this.props.id} id={'label-' + this.props.id} className="label ease-in">{this.props.placeholder}</label>
      </div>

    )
  }
}

export default TextInput;

