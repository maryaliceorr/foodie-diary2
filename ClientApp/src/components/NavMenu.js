import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar fixedTop fluid collapseOnSelect className="navigation">
        <Navbar.Header>
          <Navbar.Brand>
                    <Link to={'/home'}><Image className="nav-logo" src={require("./images/logo.png")} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
                <Nav pullRight>
            <LinkContainer to={'/home'}>
                <NavItem className="menu-link">
                    Home
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/makeameal'}>
              <NavItem className="menu-link">
                Make A Meal
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/mymeals'}>
              <NavItem className="menu-link">
                My Meals
              </NavItem>
             </LinkContainer> 
              <LinkContainer to={'/splash'}>
                <NavItem className="menu-link">
                  Logout
                </NavItem>
              </LinkContainer> 
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}
