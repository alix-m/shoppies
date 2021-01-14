import './TextInput.scss'
import React from "react"

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className="input-group">
        <input
          name={ this.props.name }
          type={this.props.type}
          className={ 'text-input ease-in input-padding  ' + this.props.className }
          maxLength={ this.props.maxlength }
          placeholder={this.props.placeholder} />
        <label for={this.props.id} id={'label-' + this.props.id} className="label ease-in">{this.props.placeholder}</label>
      </div>
    )
  }
}

export default TextInput;

