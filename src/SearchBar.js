import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <input className="search-bar" placeholder="Search for a Hidden Ability!"></input>
                <button className="search-button">Click to Search!</button>
            </div>
        )
    }
}
