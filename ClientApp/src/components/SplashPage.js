import React, { Component } from 'react';
import { Button, Image, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SplashPage.css';

export class SplashPage extends Component {
    

    render() {
        return (
            <div className="SplashPage">
             
                <Image className="splash-logo" src={require("./images/logo.png")} />

                <form className="login-block">
                    <FormGroup>
                        <ControlLabel className="login-label">Restaurant Name</ControlLabel>
                        <FormControl
                            className="login-forms"
                            id="loginemail"
                            type="email"
                            value="m.a.orr17@gmail.com"
                            placeholder="Email Address" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel className="login-label">Address</ControlLabel>
                        <FormControl
                            className="login-forms"
                            id="loginpassword"
                            type="password"
                            value="password123"
                            placeholder="PassWord" />
                    </FormGroup>
                    <Link to={'/home'}>
                    <Button className="login-button" bsStyle="danger" variant="primary" >
                        Login
                        </Button>
                        <div className="extra-space"></div>
                    </Link>
                </form>
            </div>
        );
    }
}
