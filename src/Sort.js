import React, { Component } from 'react';


export default class Sort extends Component {
    render() {
        return (
            <>
                <div>
                    <select className="category" onChange={this.props.handleChangeCategory}>
                        <option value="">Show All </option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                        <option value="type">Type</option>

                    </select>

                    <select className="order" onChange={this.props.handleChangeOrder}>
                        <option value="asc">ascending</option>
                        <option value="desc">descending</option>
                    </select>
                </div>
            </>
        )
    }
}
