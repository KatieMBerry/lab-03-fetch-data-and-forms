import React from 'react';
import PokeList from './PokeList.js';
import pokeData from './data.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';

export default class PokePage extends React.Component {
    state = {
        input: '',
        searchFilter: '',
        hiddenAbility: '',
        order: ''
    }

    handleChange = e => {//tracks the state of the search input
        this.setState({ input: e.target.value });
    }

    handleClick = e => {//compares the filter to the search input
        this.setState({ searchFilter: this.state.input })
    }

    handleChangeHiddenAbility = e => {
        this.setState({ hiddenAbility: e.target.value });
    }

    handleChangeOrder = e => {
        this.setState({ order: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <SearchBar handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    input={this.state.input} />

                <Sort handleChangeHiddenAbility={this.handleChangeHiddenAbility}
                    handleChangeOrder={this.handleChangeOrder} />

                <PokeList pokeData={pokeData}
                    filter={this.state.searchFilter}
                    hiddenAbility={this.state.hiddenAbility}
                    order={this.state.order} />
            </div>
        )
    }
}