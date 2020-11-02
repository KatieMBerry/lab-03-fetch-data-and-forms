import React from 'react';
import request from 'superagent';


export default class PokePage extends React.Component {
    state = {
        pokemon: [],
        pageNumber: 1,
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true })
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);
        this.setState({
            pokemon: response.body.results,
            loading: false,
            count: response.body.count
        });
    }

    handleIncrement = async () => {
        await this.setState({ pageNumber: this.state.pageNumber + 1 })
        await this.fetchPokemon();
    }

    handleDecrement = async () => {
        await this.setState({ pageNumber: this.state.pageNumber - 1 })
        await this.fetchPokemon();
    }

    render() {
        return (<>
            <div className="fetch">
                <button onClick={this.handleIncrement}
                    disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                    Next Page
                    </button>
                <button
                    disabled={this.state.pageNumber === 1}
                    onClick={this.handleDecrement}>
                    Previous Page
            </button>
                <div>
                    Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
                </div>
                <div>
                    {this.state.count} total pokemon in query
            </div>
                <div className="paged-poke">
                    {
                        this.state.loading
                            ? <iframe
                                src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                                title={Math.random()}
                                width="480"
                                height="480"
                                frameBorder="0"
                                className="giphy-embed"
                                allowFullScreen />
                            : this.state.pokemon.map(pokemon =>
                                <div key={pokemon.pokemon} >
                                    <div className="poke-card">
                                        <h2> {pokemon.pokemon}</h2>
                                        <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100" />
                                        <div>Type: {pokemon.type_1}</div>
                                        <div>Attack: {pokemon.attack}</div>
                                        <div>Defense: {pokemon.defense}</div></div>
                                </div>)
                    }
                </div>
            </div></>
        )
    }
}