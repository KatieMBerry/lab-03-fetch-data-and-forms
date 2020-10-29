import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <input onChange={this.props.handleChange}
                    input={this.props.input}
                    className="search-bar"
                    placeholder="Search for a Pokemon!" />

                <button onClick={this.props.handleClick}
                    filter={this.props.filter}
                    className="search-button">Submit</button>
            </div>
        )
    }
}
