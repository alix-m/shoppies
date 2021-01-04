import React from 'react'
import './App.scss'

import TextInput from '../components/TextInput'

function App() {


  return (
    <div className='App'>
      <header className='App-header '>
        <div className="main-header background-offwhite padding-r">
          <div className="page-title">the shoppies</div>
        </div>
      </header>
      <div className="body-content">

        <section className="section grid-2-col background-offwhite padding-r">
          <div className="">
            <h1 className="heading-1 green">
              Anyone, anywhere, can start a list
            </h1>
            <h3 className="heading-3">Get started on your Shoppies list by searching for a movie.</h3>
          </div>
        <div/>
        <TextInput id="search" type="text" placeholder="Enter movie title"/>
        </section>

        <section className="section background-green padding-r">
          <h2 className="heading-2">
            Bring your list online
          </h2>
          <h3 className="heading-3">Share your picks for the Shoppies.</h3>
      </section>
        <section>
        </section>
      </div>
    </div>
  );
}

export default App