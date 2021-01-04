import React from 'react'
import './App.scss'

import SearchBar from '../components/SearchBar'
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
          <div />
          <div className="search">
          <SearchBar>
            <TextInput id="search" type="text" placeholder="Movie title*" />
            <TextInput id="search" type="text" placeholder="Year of release*" />
            <button className="ease-in">Search</button>
          </SearchBar>
          <SearchBar>
            <TextInput id="search" type="text" placeholder="IMDB id*" />
            <button className="ease-in">Add to list</button>
          </SearchBar>
          </div>
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