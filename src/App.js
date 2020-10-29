import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './data.js';
import SearchBar from './SearchBar.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <PokeList pokeData={pokeData} />
      </div>
    )
  }
}

