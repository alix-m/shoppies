import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'

export const Nominations = () => {

    const { state } = useContext(AppContext)

    return(<div className="nominations flex">
        <ol>
        { state.nominations &&
         state.nominations.length > 0 &&
          state.nominations.map(n => {
            return <li><p>{ n.Title } ({ n.Year })</p></li>
          })
        }
        </ol>
    </div>
    )
}

export default Nominations