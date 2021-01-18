import './Modal.scss'
import React from "react"

const Modal = ({ movie }) => {

    const subheadings = ['Year', 'Genre', 'Director', 'Actors']

    return (
        <div className="modal-blur">
                <div className="content-modal">
                    <img width="30%" src={ movie.Poster }/>
                    <h2 className="modal-title">{movie && movie.Title}</h2>
                    { subheadings.map( sh => {
                        return( <div><h3>{ sh }</h3><p>{ movie[sh] }</p></div> )
                    })}
                </div>
                <div className="blurry shadow bg-img modal-container" 
             style={{ backgroundImage: `url(${movie.Poster})` }}> </div>
        </div>)

}

export default Modal


/**
TODOS: 
Clean up hideous css
Redesign the modal to look nicer

*/