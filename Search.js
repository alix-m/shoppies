import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    fetchData = async () => {
        return await fetch('http://localhost:5000/api/movies')
            .then(res => {
                res.json();
            })
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                {this.state.data.map(movie =>
                    <div>Name: { movie.name }</div>
                )}
            </div>
        );
    }
}

export default Search;