import React, { Component } from 'react';


export default class Sort extends Component {
    render() {
        return (
            <>
                <div>
                    <select className="category" onChange={this.props.handleChangeHiddenAbility}>
                        <option value="">Show All </option>
                        <option value="chlorophyll">Chlorophyll</option>
                        <option value="solar-power">Solar Power</option>
                        <option value="rain-dish">Rain Dish</option>
                        <option value="run-away">Run Away</option>
                        <option value="sniper">Sniper</option>
                        <option value="big-pecks">Big Pecks</option>
                        <option value="n-a">NA</option>
                    </select>

                    <select className="order" onChange={this.props.handleChangeOrder}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </>
        )
    }
}
