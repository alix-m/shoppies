import React from "react"

export const Subheading = props => {

    return(
    <div className="movie-section">
        <p className="heading-3">{ props.subheading }</p>
        <p className="small-text reset">{ props.info }</p>
    </div>
    )
}

export default Subheading