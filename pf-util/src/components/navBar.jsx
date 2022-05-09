import React, { Component } from 'react';
import NavBarButton from './navBarButton';

class NavBar extends Component {
    
    render() { 
        state = {
            button1: "Wondrous Item",
            button2: "Weapon",
            button3: "Armor"
        }
        return (
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <NavBarButton />
            <a className="navbar-brand" href="#">
                Wondrous Item <span className='badge badge-box badge-primary'></span>
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
            <a className="navbar-brand" href="#">
                Magical Weapon <span className='badge badge-box badge-primary'></span>
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
            </div>
            </nav>
            );
    }
}
 
export default NavBar;
