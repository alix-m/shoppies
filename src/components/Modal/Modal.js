import React from "react"
import MovieSection from '../Movie/MovieSection'

import './Modal.scss'

export const Modal = ({ visible, movie }) => {

    let subheadings =  ['Genre', 'Director', 'Rated', 'Plot'];

    const getContent = () => {
        let elements = []
        subheadings.forEach(sh => {
             elements.push(<div>hi <MovieSection subheading={ sh } info={ movie[sh] }/></div>)
        })
        return elements
    }

    return (
        <div className="">
        <div className="modal" style={{ visbility: visible ? 'visible' : 'hidden' }}>
            { movie && getContent() }
        </div>
        </div>
    )
}

export default Modal