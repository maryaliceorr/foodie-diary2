﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>FoodieDiary2</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={'/'} exact>
              <NavItem>
                 Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/makeameal'}>
              <NavItem>
                Make A Meal
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/mymeals'}>
              <NavItem>
                My Meals
              </NavItem>
              </LinkContainer> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
