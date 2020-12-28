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
          <h1 className="heading-1 green">
            Anyone, anywhere, can start a list
        </h1>
        <div/>
        <TextInput id="search" type="text" placeholder="Enter movie title"/>
        </section>
        <section className="section background-green padding-r">
          <h2 className="heading-2">
            Bring your list online
          </h2>
          Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.
      </section>
        <section>
        </section>
      </div>
    </div>
  );
}

export default App