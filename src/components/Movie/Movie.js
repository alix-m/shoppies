import React, { useContext } from "react"
import { SearchContext }  from '../../context/SearchProvider'

import './Movie.scss'
import Toggle from '../Toggle'

import poster from '../../img/poster.png'

export const Movie = props => {

    const { dispatch } = useContext(SearchContext)

    let img = props.movie.Poster !== 'N/A' ? props.movie.Poster : poster

    const handleClick = e => {
        let action = e.nativeEvent.target.id == 'toggle' 
                    ? "ADD"
                    : "SET_ACTIVE"
        dispatch({
            type: action,
            selection: props
        })
    }

    return (
        <div id="movie" className="movie cursor ease-in shadow flex" onClick={ handleClick } style={{ backgroundImage: `url(${img})` }}>
            <div className="toggle-container"></div>
            <Toggle />
            <div className='container-blur ease-in'>
                <div className="margin">
                    <p className="small-text reset">{props.movie.Year}</p>
                    <h3 className="heading-3 line-clamp">{props.movie.Title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Movie