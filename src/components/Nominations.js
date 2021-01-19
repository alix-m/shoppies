import './Nominations.scss';

import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import { Movie } from './Movie'
import arrow from '../img/arrow-up.svg'

export const Nominations = () => {

  const { state } = useContext(AppContext)

  return (<div className="nominations-container banner shadow ease">
    <div className="center-text">
      <img src={arrow} className="arrow svg-white toggle margin"></img>
      <h3 className="center-text">{state.nominations.length}/5</h3>
    </div>
    <div className="grid nominations">
      {state.nominations &&
        state.nominations.length > 0 &&
        state.nominations.map(m => {
          return <Movie movie={m} />
        })
      }
    </div>
  </div>
  )
}

export default Nominations