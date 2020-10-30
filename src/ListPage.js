import React, { Component } from 'react';
import fetch from 'superagent';

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class FetchPage extends Component {
    state = {
        type: []
    }
    componentDidMount = async () => {
        // console.log(Date.now())//when mounted
        //fetch can be called request
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');//make request or "fetch"

        // console.log(Date.now())//how long since mount
        // console.log(response.body)//JSON data
        await sleep(2000)
        this.setState({ type: response.body });//set the state;will need access to it to to render
    }

    render() {
        return (
            <div>
                {
                    this.state.type.length === 0//if no qoutes, show loading, otherwise show loaded data
                        ? <iframe
                            src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                            title={Math.random()}
                            width="480"
                            height="480"
                            frameBorder="0"
                            className="giphy-embed"
                            allowFullScreen />
                        : JSON.stringify(this.state.type)//can replace this with an anonymous component -defined inline- (for Poke characters) and then map the data
                }
            </div>
        )
    }
}
