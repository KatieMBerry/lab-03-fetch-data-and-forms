import React from 'react';
import request from 'superagent';

export default class DetailPage extends React.Component {
    state = {
        fetchedData: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        this.setState({ fetchedData: response.body.results });
    }


    render() {
        return (<>
            <div className="fetch">
                <h1>All About {this.props.match.params.name}</h1>
                {
                    this.state.fetchedData.length === 0
                        ? <iframe
                            src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                            title={Math.random()}
                            width="480"
                            height="480"
                            frameBorder="0"
                            className="giphy-embed"
                            allowFullScreen />
                        : this.state.fetchedData.map(fetchedPoke => <div
                            key={fetchedPoke.pokemon} >
                            <div className="poke-card">
                                <h2> {fetchedPoke.pokemon}</h2>
                                <img src={fetchedPoke.url_image} alt={fetchedPoke.pokemon} width="100" height="100" />
                                <div>Type: {fetchedPoke.type_1}</div>
                                <div>Attack: {fetchedPoke.attack}</div>
                                <div>Defense: {fetchedPoke.defense}</div></div>
                        </div>)
                }
            </div></>
        )
    }
}