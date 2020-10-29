import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {


    render() {
        const inputPoke = this.props.pokeData.filter((poke) => {
            //if no input, show all
            if (!this.props.filter) return true;
            //if input, show it - tracking state of what chose in filter
            if (poke.pokemon === this.props.filter) return true;
            //else don't include in the array
            return false
        });
        //currently giving me all the pokemon
        console.log(inputPoke);
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
