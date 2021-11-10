import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

export default class Navbar extends Component {

    state = {
        menu: [
            { label: 'HOME', path: '/', active: true }, //0
            { label: 'FAVORITOS', path: '/favoritos'  }, //1
        ],
    }

    componentDidMount(){
        var location = window.location;
        let menu = this.state.menu.map((item) => ({
            ...item,
            active: item.path == location.pathname
        }));

        this.setState({ menu });
    }

    toggleActive(index){
        let menu = this.state.menu;
        menu = menu.map((item) => ({ ...item, active: false }));
        menu[index].active = true;
        this.setState({ menu });
    }

    render() {
        return (
            <nav className="nav">
                <ul>
                    { this.state.menu.map((item, index) => (
                        <li>
                            <Link 
                                to={item.path}
                                onClick={() => this.toggleActive(index)}
                                className={item.active ? 'active' : ''}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}