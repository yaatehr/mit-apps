import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        const activeStyle = { color: 'grey' };

        return (
            <div>
                <div className="navbar-inverse">

                            {/* <NavItem eventKey={1} href="#">Link 1</NavItem>
        <NavItem eventKey={2} href="#">Link 2</NavItem> */}
                            <NavLink className="navLink" exact to="/" activeStyle={activeStyle}>Home</NavLink>
                            {' | '}
                            <NavLink className="navLink" to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                            {' | '}
                            <NavLink className="navLink" to="/about" activeStyle={activeStyle}>About</NavLink>
                            {' | '}
                            <NavLink className="navLink" to="/app-store" activeStyle={activeStyle}>App Store</NavLink>
                            {' | '}
                            <NavLink className="navLink" to="/app-page" activeStyle={activeStyle}>App Page</NavLink>

                    </div>
                <div className="navbar-inverse-hidden" />

            </div>
        )
    }
}

export default NavigationBar;