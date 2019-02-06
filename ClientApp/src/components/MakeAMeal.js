import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import restaurantCalls from '../DBRequests/restaurantCalls';


export class MakeAMeal extends Component {
    
    state = {
        restaurantStatics: [],
    }

    componentDidMount() {
        restaurantCalls
            .getRestaurantStatics()
            .then((restaurantStatics) => {
                this.setState({ restaurantStatics })
            })
            .catch((error) => {
                console.error('error with GET restaruantStatics call', error);
            });
    };

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const restaurantStatics = this.state.restaurantStatics.map((restaurantStatic) => {
            return (
                <form>
                    <FormGroup>
                        <ControlLabel>Restaurant Name</ControlLabel>
                        <FormControl type="text" label="Restaurant Name" placeholder="Little Italy" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Addres #1</ControlLabel>
                        <FormControl type="text" label="Address #1" placeholder="123 Restaurant Way" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Address #2</ControlLabel>
                        <FormControl type="text" label="Address #2" placeholder="Suite B" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>City</ControlLabel>
                        <FormControl type="text" label="City" placeholder="New York City" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>State</ControlLabel>
                        <FormControl type="text" label="State" placeholder="NY - abbreviation please" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Zip Code</ControlLabel>
                        <FormControl type="text" label="Zip Code" placeholder="Zip Code" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Phone</ControlLabel>
                        <FormControl type="text" label="Phone Number" placeholder="5558889999 - no dashes please" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Website</ControlLabel>
                        <FormControl type="text" label="Website" placeholder="www.littleitaly1.com" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Type of Cuisine</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">{restaurantStatic.stateAbbr}</option>
                        </FormControl>
                    </FormGroup>
                </form>
            );
        })

        return (
            <div>
                <h1>Meal Info</h1>
               
                <Button variant="outline-secondary" onClick={this.handleShow}>
                    Add A Restaurant
                 </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {restaurantStatics}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
};