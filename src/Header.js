import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                Welcome to PokeDex!  Pick Your Poke!
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">PokePage</Link>
                    </li>

                </ul>
            </div>

        )
    }
}
