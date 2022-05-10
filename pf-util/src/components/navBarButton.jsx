import React, { Component } from 'react';

class NavBarButton extends Component {
    
    render() { 
        const {titleOfCreator} = this.props.titleOfCreator;
        return (
            <div>
                
                <button
                    onClick={() => this.props.onActivate(this.props.titleOfCreator)}
                    className='btn btn-secondary m-2'
                >
                {titleOfCreator}
                </button>
            </div>
            
        );
    }

    onActivate = () => {
        //do something
    }
}
 
export default NavBarButton;