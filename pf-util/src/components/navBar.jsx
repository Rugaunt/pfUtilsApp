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
            
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {this.props.titleOfCreator} Creator
                    <span className="badge badge-pill badge-secondary">
                        <NavBarButton 
                            titleOfCreator={this.state.button1}
                        />
                        <NavBarButton 
                            titleOfCreator={this.state.button2}
                        />
                        <NavBarButton 
                            titleOfCreator={this.state.button3}
                        />
                    </span>
                   
                </a>
                
                
            </div>
            </nav>
            );
    }
}
 
export default NavBar;
