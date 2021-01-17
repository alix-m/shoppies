import React, { useState, useContext, useEffect } from 'react'
import { AppContext, DispatchContext } from '../../context/AppProvider'

import outline from '../../img/star-outline.svg'
import filled from '../../img/star-filled.svg'

export const Toggle = ({ imdbID }) => {

    const { addNomination, removeNomination } = useContext(DispatchContext)
    const { isNominated } = useContext(AppContext)

    const [isToggled, setToggle] = useState(undefined)

    useEffect(()=> {
        setToggle(isNominated(imdbID))
    })

    const handleClick = () => {

        if(isToggled){
            removeNomination(imdbID)
        } else if(!isToggled){
            addNomination(imdbID)
            console.log(status)
        }
        setToggle(!isToggled)
    }

    return(
        <img id="toggle" onClick={ handleClick } src={ isToggled ? filled : outline } className='toggle cursor ease-in'></img>
    )
}

export default Toggle