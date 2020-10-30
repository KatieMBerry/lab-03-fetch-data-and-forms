import React, { Component } from 'react';
import fetch from 'superagent';

export default class FetchPage extends Component {
    state = {
        quotes: []
    }
    componentDidMount = async () => {
        console.log(Date.now())//when mounted
        //fetch can be called request
        const response = await fetch.get('http:// https://alchemy-pokedex.herokuapp.com');//make request or "fetch"

        console.log(Date.now())//how long since mount
        console.log(response.body)//JSON data
        this.setState({ quotes: response.body });//set the state;will need access to it to to render
    }

    render() {
        return (
            <div>
                {
                    this.state.quotes.length === 0//if no qoutes, show loading, otherwise show loaded data
                        ? <div> loading! </div>
                        : JSON.stringify(this.state.quotes)//can replace this with an anonymous component -defined inline- (for Poke characters) and then map the data
                }
            </div>
        )
    }
}
