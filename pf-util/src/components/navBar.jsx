import React, { Component } from 'react';
import NavBarButton from './navBarButton';

class NavBar extends Component {
    state = {
        button1: "Wondrous Item",
        button2: "Weapon",
        button3: "Armor"
    };

    render() { 

        return (
            
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {this.props.titleOfCreator} <span className="badge badge-pill badge-secondary">banana</span>
                    <NavBarButton 
                        titleOfCreator={this.state.button1}
                    />
                </a>
                
                
            </div>
            </nav>
            );
    }
}
 
export default NavBar;
