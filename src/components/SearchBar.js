import './SearchBar.scss'
import submit from './Search'

import React from "react"

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', results: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async e => {
        e.preventDefault()
        let movies = await submit(e.target[0].value)
        this.props.onResults(movies)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                { this.props.children }
            </form>
        )
    }
}

export default SearchBar;
