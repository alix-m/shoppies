import './SearchBar.scss'
import submit, { validate } from '../../utils/Search'

import React from "react"

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', results: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async e => {
        e.preventDefault()
        e.persist()
        let loading = true;
        let data = []

        while(loading){
            console.log(e)
            this.props.onLoading(true)
            data = await submit(e.target[0].value)
            loading = false
        }
        this.props.onLoading(false)
        this.props.onResults(data)
    }

    componentDidMount = async () => {
        let data = await submit('Mr Deeds')
        this.props.onResults(data)
    }

    render() {
        return (
            <form className="padding-r" id={ this.props.id } onSubmit={ this.handleSubmit }>
                { this.props.children }
            </form>
        )
    }
}

export default SearchBar;
