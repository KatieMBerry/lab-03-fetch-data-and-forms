import React, { Component } from 'react';
import pokeData from './data.js';

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-article">
                <div>{pokeData[0].pokemon}</div>
                <img src={pokeData[0].url_image} className="poke-image" alt="pokemon" />
                <div>{pokeData[0].ability_hidden}</div>
            </div>
        )
    }
}
