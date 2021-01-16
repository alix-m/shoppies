import React, { useState } from 'react'
import outline from '../img/star-outline.svg'
import filled from '../img/star-filled.svg'

export const Toggle = props => {
    const [toggled, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggled)
    }
    
    return(
        <img id="toggle" src={ toggled ? filled : outline } className='toggle cursor ease-in' onClick={ handleClick }></img>
    )
}

export default Toggle  