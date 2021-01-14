import React from "react"
import './Movie.scss'
import Toggle from '../Toggle'

import poster from '../../img/poster.png'
import ribbon from '../../img/ribbon.png'

export const Movie = props => {

    let img = props.movie.Poster !== 'N/A' ? props.movie.Poster : poster
  
    return (
            <div id="movie" className="movie ease-in shadow" style={{ backgroundImage: `url(${img})` }}>
                <div className='container ease-in'>
                    <div className="movie-info">
                        <p className="small-text">{ props.movie.Year }</p>
                        <h3 className="title heading-3 line-clamp">{props.movie.Title}</h3>
                    </div>
                    <Toggle/>
                </div>
                <img className="ribbon" src={ribbon} style={{ visibility: 'hidden' }}></img>
            </div>
    )}

export default Movie