import React from "react"

import SearchBar from '../components/SearchBar'
import TextInput from '../components/TextInput'
import SearchResults from '../components/SearchResults'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = { results: '' }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch = search => {
        this.setState({ results : search})
        console.log(this.state)
    }

    render(){
    return (
        <div className="search">
            <div className="search-group">
                <h3 className="heading-3">Get started on your Shoppies list by searching for a movie.</h3>
                <SearchBar onResults= { this.handleSearch }>
                    <TextInput id="search" type="text" placeholder="Movie title*"/> 
                    <div className="padding">and/or</div>
                    <TextInput id="search" type="text" placeholder="Year of release*" />
                    <button type="submit" className="ease-in">Search</button>
                </SearchBar>
            </div>
            <div className="search-group">
                <h3 className="heading-3">Or enter the IMDB id of a movie to add it directly to your list.</h3>
                <SearchBar>
                    <TextInput id="search" type="text" placeholder="IMDB id*" />
                    <button type="submit" className="ease-in">Add to list</button>
                </SearchBar>
            </div>
            <SearchResults results={ this.state.results }/>
        </div>
    )}
}


export default Search