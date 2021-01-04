import './TextInput.scss'
import React from "react"

const url = `http://www.omdbapi.com/?t=mr+deeds&apikey=c194e47e`

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', focus: false, data: [] };
    this.onClick = this.onClick.bind(this)
  }

  async onClick(e) {
    try {
      const res = await fetch('/api/movies', { headers: { 'Access-Control-Allow-Origin': '*' } })
      const movies = await res.json()
      this.setState({ data: movies })
    } catch (err) {
      console.log('error!\n', err)
    }
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
            <label for={this.props.id} id={'label-' + this.props.id} className="label ease-in">{this.props.placeholder}</label>
            <button className="ease-in" onClick={this.onClick}>Search</button>
            <div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default TextInput;

