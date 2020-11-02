import React from 'react';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import request from 'superagent';
import { Link } from 'react-router-dom';

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
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchFilter}&sort=${this.state.searchFilter}&direction=${this.state.order}`);

        this.setState({ fetchedData: response.body.results });
    }

    fetchSortedPoke = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${this.state.category}&direction=${this.state.order}`);
        this.setState({ fetchedData: response.body.results });
    }


    handleChange = async (e) => {
        await this.setState({ input: e.target.value });
        await this.fetchPoke();
    }

    handleClick = async (e) => {
        await this.setState({ searchFilter: this.state.input })
        await this.fetchPoke();
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
        return (<>
            <div className="search">
                <SearchBar handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    input={this.state.input}
                    searchFilter={this.props.searchFilter} />
                <Sort handleChangeCategory={this.handleChangeCategory}
                    handleChangeOrder={this.handleChangeOrder} />
            </div>
            <div className="fetch">
                {
                    this.state.fetchedData.length === 0
                        ? <iframe
                            src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                            title={Math.random()}
                            width="480"
                            height="480"
                            frameBorder="0"
                            className="giphy-embed"
                            allowFullScreen />
                        : this.state.fetchedData.map(fetchedPoke =>
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/pokemon/${fetchedPoke.pokemon}`}>
                                <div key={fetchedPoke.pokemon} >
                                    <div className="poke-card">
                                        <h2> {fetchedPoke.pokemon}</h2>
                                        <img src={fetchedPoke.url_image} alt={fetchedPoke.pokemon} width="100" height="100" />
                                        <div>Type: {fetchedPoke.type_1}</div>
                                        <div>Attack: {fetchedPoke.attack}</div>
                                        <div>Defense: {fetchedPoke.defense}</div></div>
                                </div>
                            </Link>)
                }
            </div></>
        )
    }
}