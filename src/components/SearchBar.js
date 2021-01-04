import './SearchBar.scss'

import React from "react"


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
        this.state = { value: '' };
    }

    async onClick(e) {
        try {
            const res = await fetch('/api/movies', { headers: { 'Access-Control-Allow-Origin': '*' } })
            const movies = await res.json()
        } catch (err) {
            console.log('error!\n', err)
        }
    }

    render() {
        return (
            <form>
                { this.props.children }
            </form>
        )
    }
}

export default SearchBar;
