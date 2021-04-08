import React from 'react';
import "./DrawerToggleButton.css"

function DrawerToggleButton(props) {
    return (
        <div>
            <button className="toggle__button" onClick={props.click}>
                <div className="toggle__button__line"/>
                <div className="toggle__button__line"/>
                <div className="toggle__button__line"/>
            </button>
        </div>
    )
}

export default DrawerToggleButton
