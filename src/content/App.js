import React from 'react'
import './App.scss'

import SearchPage from './SearchPage'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <div className="main-header background-offwhite">
          <div className="page-title"><span className="emoji">🏆</span><span className="italic">         the shoppies</span></div>
        </div>
      </header>
      <div className="body-content">
        <section className="section grid-col-2 background-green">
          <div className="">
            <h1 className="heading-1 padding-r">
              Anyone, anywhere, can start a list
            </h1>
            <div className="margin">
              <SearchPage />
            </div>
          </div>
        </section>
        <section className="section background-green padding-r">
          <h2 className="heading-2 padding-r">

          </h2>
        </section>
      </div>
    </div>
  );
}

export default App