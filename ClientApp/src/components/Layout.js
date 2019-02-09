import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>  
            <NavMenu />
            {this.props.children}
          
      </Grid>
    );
  }
}
