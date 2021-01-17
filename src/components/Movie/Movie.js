import React, { useContext, useEffect, memo } from "react"
import { AppContext } from '../../context/AppProvider'

import './Movie.scss'
import poster from '../../img/poster.png'
import { Toggle } from "../Toggle"

export const Movie = props => {

    const { state, setActive } = useContext(AppContext)

    let img = props.movie.Poster !== 'N/A' ? props.movie.Poster : poster

    const handleClick = e => {
        setActive(props)
    }

    return (
        <div id="movie" className="movie cursor ease-in shadow flex" onClick={ handleClick } style={{ backgroundImage: `url(${img})` }}>
            <div className="toggle-container"></div>
            <Toggle imdbID={ props.movie.imdbID }/>
            <div className='container-blur ease-in'>
                <div className="margin">
                    <p className="small-text reset"></p>
                    <h3 className="heading-3 line-clamp">{ props.movie.Title }</h3>
                </div>
            </div>
        </div>
    )
}

export default Movie 