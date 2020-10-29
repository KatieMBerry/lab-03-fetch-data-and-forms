import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './data.js';
// import SearchBar from './SearchBar.js';


// 1) move filter state to App.js
// 2) give SearchBar the handleChange to change App.js state
// 3) give pokeList the filter (since it's the component that needs it)
export default class App extends React.Component {
  state = {
    input: ''
    // filter: ''
  }
  handleChange = e => {//tracks the state of the input
    this.setState({ input: e.target.value });
  }

  handleClick = e => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div>
        <Header />
        {/* <SearchBar handleClick={this.handleClick} /> */}
        <PokeList pokeData={pokeData}
          filter={this.state.filter}
          handleChange={this.handleChange}
          input={this.state.input} />
        {/* {this.state.input} */}
      </div>
    )
  }
}

