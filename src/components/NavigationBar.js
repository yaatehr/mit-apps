import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };

        return (
            <div>
                <Navbar inverse fixed-top>
                    <Navbar.Header >
                        <Navbar.Brand>
                            <a href='/'>MIT Apps</a>;
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {/* <NavItem eventKey={1} href="#">Link 1</NavItem>
        <NavItem eventKey={2} href="#">Link 2</NavItem> */}
                            <NavLink className="NavLink" exact to="/" activeStyle={activeStyle}>Home</NavLink>
                            {' | '}
                            <NavLink className="NavLink" to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                            {' | '}
                            <NavLink className="NavLink" to="/about" activeStyle={activeStyle}>About</NavLink>
                            {' | '}
                            <NavLink className="NavLink" to="/app-store" activeStyle={activeStyle}>App Store</NavLink>
                            {' | '}
                            <NavLink className="NavLink" to="/app-page" activeStyle={activeStyle}>App Page</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                    <Nav right>

                    </Nav>
                </Navbar>
                <div className="navbar-inverse-hidden" />

            </div>
        )
    }
}

export default NavigationBar;