import React, { useContext, useEffect } from 'react'
import './App.scss'

import Nominations from './components/Nominations'
import SearchPage from './content/SearchPage'
import star from './img/star-filled.svg'

import { AppContext } from './context/AppProvider'

function App() {

const { state } = useContext(AppContext)
var active

useEffect(()=>{
    if(state.active){
        active = state.active
    }
})


  return (
      <div className="App">
        <header className='App-header'>
          <div className="main-header">
            <img src={star} className="toggle"></img>
            <h5>the shoppies</h5>
          </div>
        </header>
        <div className="padding-lr-5">
          <div className="content">
            <section>
              <div className="col-2">
                <h1>
                  Anyone, anywhere,<br />can start a list
                </h1>
                <Nominations/>
                </div>
                <SearchPage />
            </section>
          </div>
        </div>
      </div>
  );
}

export default App