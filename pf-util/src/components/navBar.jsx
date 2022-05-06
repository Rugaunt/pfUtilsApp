import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        
        return (
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Creation options: <span className='badge badge-box badge-primary'></span>
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
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
