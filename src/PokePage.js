import React from 'react';
import PokeList from './PokeList.js';
import pokeData from './data.js';
import SearchBar from './SearchBar.js';


// 1) move input state to App.js
// 2) give SearchBar the handleChange to change App.js state
// 3) give pokeList the filter (since it's the component that needs it)
export default class PokePage extends React.Component {
    state = {
        input: '',
        filter: ''
    }
    //currently giving me all the pokemon
    handleChange = e => {//tracks the state of the input
        this.setState({ input: e.target.value });
    }

    handleClick = e => {
        this.setState({ filter: this.state.input })
    }

    render() {
        return (
            <div>

                <SearchBar handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    input={this.state.input} />
                {/* making sure input handleChange is working */}

                <div>{this.state.input}</div>

                <PokeList pokeData={pokeData}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}