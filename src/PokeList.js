import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import pokeData from './data.js';

export default class PokeList extends Component {


    render() {
        return (
            <div className="poke-article">
                {
                    pokeData.map(poke =>
                        <PokeItem
                            title={poke.pokemon}
                            image={poke.url_image}
                            hiddenAbility={poke.ability_hidden} />)
                }
            </div>
        )
    }
}
