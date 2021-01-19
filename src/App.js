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
          <div className="main-header banner padding-lr-5">
            <img src={star} className="toggle margin-r-16 svg-yellow"></img>
            <h3>the shoppies</h3>
          </div>
        </header>
        <div className="">
            <section className="padding-lr-5">
                <h1>
                  Anyone, anywhere,<br />can start a list
                </h1>
                <SearchPage />
            </section>
            <Nominations/>
        </div>
      </div>
  );
}

export default App