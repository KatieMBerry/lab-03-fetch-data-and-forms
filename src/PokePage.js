import React from 'react';
import PokeList from './PokeList.js';
// import pokeData from './data.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import request from 'superagent';

export default class PokePage extends React.Component {
    state = {
        input: '',
        searchFilter: '',
        category: '',
        order: '',
        fetchedData: []
    }
    componentDidMount = async () => {

        await this.fetchPoke();
    }

    fetchPoke = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchFilter}`);
        this.setState({ fetchedData: response.body.results });
    }

    fetchSortedPoke = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${this.state.category}&direction=${this.state.order}`);
        this.setState({ fetchedData: response.body.results });
    }


    handleChange = e => {
        this.setState({ input: e.target.value });
    }

    handleClick = e => {
        this.setState({ searchFilter: this.state.input })
    }

    handleChangeCategory = async (e) => {
        await this.setState({ category: e.target.value });
        await this.fetchSortedPoke();
    }

    handleChangeOrder = async (e) => {
        await this.setState({ order: e.target.value });
        await this.fetchSortedPoke();
    }


    render() {
        return (
            <div className="container">
                <SearchBar handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    input={this.state.input} />

                <Sort handleChangeCategory={this.handleChangeCategory}
                    handleChangeOrder={this.handleChangeOrder} />

                <PokeList fetchedData={this.state.fetchedData}
                    filter={this.state.searchFilter}
                    category={this.state.category}
                    order={this.state.order} />
            </div>
        )
    }
}