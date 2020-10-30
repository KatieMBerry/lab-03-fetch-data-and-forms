import React, { Component } from 'react';


export default class PokeItem extends Component {
    render() {
        return (

            <div className="poke-article">
                <h1>{this.props.title}</h1>
                <img src={this.props.image} className="poke-image" alt="pokemon" />
                <div className="hiddenAbility">This {this.props.title}'s hidden ability is: {this.props.hiddenAbility}</div>
                <div className="type">Type: {this.props.type}</div>
                <div className="attack">Attack: {this.props.attack}</div>
                <div className="defense">Defense: {this.props.defense}</div>
            </div>

        )
    }
}
