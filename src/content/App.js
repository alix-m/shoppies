import React from 'react'
import './App.scss'

import SearchPage from './SearchPage'
import star from '../img/star-filled.svg'

function App() {

  return (
      <div className="App">
        <header className='App-header'>
          <div className="main-header">
            <img src={star} className="toggle"></img>
            <div className="page-title offwhite">the shoppies</div>
          </div>
        </header>
        <div className="padding">
          <div className="body-content background-green">
            <section className="section">
              <div className="">
                <h1 className="heading-1">
                  Anyone, anywhere,<br />can start a list
            </h1>
                <SearchPage />
              </div>
            </section>
          </div>
        </div>
      </div>
  );
}

export default App