import React, { Component } from 'react';

class NavBarButton extends Component {
    
    render() { 
        const {buttonTitle} = this.props;
        return (
            <div>
                <button onClick={onChangeCreator} className="btn btn-sm btn-primary m-2">{buttonTitle}</button>
            </div>
            
        );
    }
}
 
export default NavBarButton;