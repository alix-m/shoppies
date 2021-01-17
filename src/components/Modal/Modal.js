import React from "react"
import Subheading from  './Subheading'

import './Modal.scss'
export const Modal = ({ object, visibility }) => {

    const subheadings = []
    let fuckthisshit =      `<div className="modal-container">
    { state && state.active.movie && <Modal object={ state.active.movie } visbility={ isVisible }/> }
    </div>`

    blarg =
        ` { state.search.results &&
      state.search.results.map(r => {
      return <Movie movie={r} />
    })`
    

    return (
        <div className="">
        <div className="modal ease-in shadow" style={{ visbility: visibility ? 'visible' : 'hidden' }}>
            { object && subheadings.map(s => {
                <Subheading subheading={ s } info={ object[s] }/>
            }) }
        </div>
        </div>
    )
}

export default Modal