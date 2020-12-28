import './TextInput.scss'
import React from "react"

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', focus: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (

      <div className="group">
        <div className="input-wrapper">
          <div className="form-group" id="name">
            <input
              id={this.props.id}
              type={this.props.type}
              className='text-input padding ease-in'
              placeholder={this.props.placeholder} />
            <label for={this.props.id} id={'label-' + this.props.id} className="label padding ease-in">{this.props.placeholder}</label>
            <button className="ease-in">Search</button>
          </div>
        </div>
      </div>
    )

  }
}

export default TextInput;

