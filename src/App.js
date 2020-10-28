import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeItem from './PokeItem.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PokeItem />
      </div>
    )
  }
}

