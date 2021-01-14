import React, { useState } from "react"

import SearchBar from '../components/SearchBar/SearchBar'
import TextInput from '../components/TextInput/TextInput'
import SearchResults from '../components/SearchResults/SearchResults'
import ProgressBar from '../components/ProgressBar'

class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleResults = this.handleResults.bind(this)
        this.handleLoading = this.handleLoading.bind(this)
        this.state = { results: null, loader: null }
    }

    componentDidMount(){
        let value = this.context;
    }

    handleResults = e => {
        let results = e ? <SearchResults results={e} /> : <div>nup</div>
        this.setState({ results: results })
    }

    handleLoading = e => {
        var loader
        if (e) {
            loader = <ProgressBar />
        }
        this.setState({ loader: loader })
    }

    render() {
        return (
            <div className="search">
                <p className="padding-r">Get started on your Shoppies list by searching for a movie.</p>
                <div className="search-bar">
                    <SearchBar id='search-title-year' onLoading={this.handleLoading} onResults={this.handleResults} >
                        <TextInput name="title" type="text" placeholder="Movie title*" />
                        <p className="minor-text bold margins">and / or</p>
                        <TextInput name="year" type="text" maxlength="4" placeholder="Year of release" />
                        <button type="submit" className="padding ease-in cursor">Search</button>
                    </SearchBar>
                </div>
                { this.state.loader }
                { this.state.results }
            </div>
        )
    }
}

export default SearchPage





let save = `
<div className="search-group">
    <p className="text">Or enter the IMDB id of a movie to add it directly to your list.</p>
    <SearchBar id="search-id">
        <TextInput id="search-id" type="text" placeholder="IMDB id*" />
        <button type="submit" className="padding ease-in">Add to list</button>
    </SearchBar>
</div>`