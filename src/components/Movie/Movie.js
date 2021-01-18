import React, { useContext } from "react"
import { AppContext } from '../../context/AppProvider'

import './Movie.scss'
import poster from '../../img/poster.png'
import { Toggle } from "../Toggle"

export const Movie = props => {

    const { setActive } = useContext(AppContext)

    let img = props.movie.Poster !== 'N/A' ? props.movie.Poster : poster

    const handleClick = e => {
        setActive(props)
    }

    return (
        <div id="movie" className="movie bg-img pointer ease flex" onClick={ handleClick } style={{ backgroundImage: `url(${img})` }}>
            <div className="toggle-container"></div>
            <Toggle imdbID={ props.movie.imdbID }/>
            <div className='container-blur ease'>
                <div className="margin-16">
                    <h4 className="bold">{ props.movie.Year }</h4>
                    <h3 className="line-clamp lines-2">{ props.movie.Title }</h3>
                    <h4 className="line-clamp lines-1">{ props.movie.Genre }</h4>
                </div>
            </div>
        </div>
    )
}

export default Movie 