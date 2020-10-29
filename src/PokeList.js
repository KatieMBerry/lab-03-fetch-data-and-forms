import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredPoke = this.props.pokeData.filter((poke) => {
            //if no filter, show all
            if (!this.state.filter) return true;
            //if filter, show filtered - tracking state of what chose in filter
            if (poke.hiddenAbility === this.state.filter) return true;
            //else don't include in the array
            return false
        });

        return (
            <>

                <div className="poke-article">
                    {
                        //use filtered array to map over
                        filteredPoke.map(poke =>
                            <PokeItem
                                title={poke.pokemon}
                                image={poke.url_image}
                                hiddenAbility={poke.ability_hidden} />)
                    }
                </div>
            </>
        )
    }
}
