import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {


    render() {
        const inputPoke = this.props.pokeData.filter((poke) => {
            //if no input, show all
            if (!this.props.filter) return true;
            //if input, show it - tracking state of what chose in filter
            if (poke.input === this.props.filter) return true;
            //else don't include in the array
            return false
        });


        return (
            <div className="poke-article">
                {
                    //use filtered array to map over
                    inputPoke.map(poke =>
                        <PokeItem
                            title={poke.pokemon}
                            image={poke.url_image}
                            hiddenAbility={poke.ability_hidden} />)
                }
            </div>
        )
    }
}
