import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {


    render() {
        const inputPoke = this.props.fetchedData
        // .filter((poke) => {
        //     //if no input, show all
        //     if (!this.props.filter) return true;
        //     //if input, show it - tracking state of what chose in filter
        //     if (poke.pokemon === this.props.filter) return true;
        //     //else don't include in the array
        //     return false
        // })

        // .filter((poke) => {
        //     if (!this.props.hiddenAbility) return true;
        //     if (poke.ability_hidden === this.props.hiddenAbility) return true;
        //     return false;
        // })

        // .sort((a, b) => {
        //     if (this.props.order === 'descending') {
        //         return b.pokemon.localeCompare(a.pokemon);
        //     } else {
        //         return a.pokemon.localeCompare(b.pokemon);
        //     }
        // });




        return (
            <div className="poke-article" >
                {
                    //use filtered array to map over
                    inputPoke.map(poke =>
                        <PokeItem
                            title={poke.pokemon}
                            image={poke.url_image}
                            hiddenAbility={poke.ability_hidden}
                            type={poke.type_1}
                            attack={poke.attack}
                            defense={poke.defense} />)
                }
            </div>
        )
    }
}
