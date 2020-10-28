import React, { Component } from 'react';


export default class PokeItem extends Component {
    render() {
        return (

            <div className="poke-article">
                <div>{this.props.title}</div>
                <img src={this.props.image} className="poke-image" alt="pokemon" />
                <div>{this.props.hiddenAbility}</div>
            </div>

        )
    }
}
