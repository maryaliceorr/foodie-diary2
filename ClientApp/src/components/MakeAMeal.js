import React, { Component } from 'react';
import { Modal, Button, Radio, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import stateAbbrCalls from '../DBRequests/stateAbbrCalls';
import foodGenreCalls from '../DBRequests/foodGenreCalls';
import courseCalls from '../DBRequests/courseCalls';
import dishTypeCalls from '../DBRequests/dishTypeCalls';

export class MakeAMeal extends Component {

    componentDidMount() {
        stateAbbrCalls
            .getStateAbbrs()
            .then((stateAbbrs) => {
                this.setState({ stateAbbrs })
            })
            .catch((error) => {
                console.error('error with GET state abbrs call', error);
            });
        foodGenreCalls
            .getFoodGenres()
            .then((foodGenres) => {
                this.setState({ foodGenres })
            })
            .catch((error) => {
                console.error('error with GET food genres call', error);
            });
        courseCalls 
            .getCourses()
            .then((courses) => {
                this.setState({ courses })
            })
            .catch((error) => {
                console.error('error with GET courses call', error);
            });
        dishTypeCalls
            .getDishTypes()
            .then((dishTypes) => {
                this.setState({ dishTypes })
            })
            .catch((error) => {
                console.error('error with GET dish types call', error);
            });
    };

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            stateAbbrs: [],
            foodGenres: [],
            courses: [],
            dishTypes: [],
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const stateAbbrs = this.state.stateAbbrs.map((stateAbbr) => {
            return (
                <option key={stateAbbr.id} value="other">{stateAbbr.stateAbbr}</option>
            );
        });

        const foodGenres = this.state.foodGenres.map((foodGenre) => {
            return (
                <option key={foodGenre.id} value="other">{foodGenre.foodGenreName}</option>
            );
        });
        const courses = this.state.courses.map((course) => {
            return (
                <option key={course.id} value="other">{course.courseName}</option>
            );
        });
        const dishTypes = this.state.dishTypes.map((dishType) => {
            return (
                <option key={dishType.id} value="other">{dishType.dishTypeName}</option>
            );
        });
        return (
            <div>
                <h1>Meal Info</h1>
                <FormGroup>
                    <ControlLabel>Meal Name</ControlLabel>
                    <FormControl type="text" label="Restaurant Name" placeholder="Birthday Dinner at Little Italy" />
                </FormGroup>
                <FormGroup>
                <ControlLabel>Date</ControlLabel>
                    <FormControl type="date">
                    </FormControl>
                </FormGroup>
                <h3>Restaurant Info</h3>
                <form>
                    <FormGroup>
                        <ControlLabel>Restaurant Name</ControlLabel>
                        <FormControl type="text" label="Restaurant Name" placeholder="Little Italy" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Address #1</ControlLabel>
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
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">Choose the State</option>
                            {stateAbbrs}
                        </FormControl>
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
                            <option value="select">Choose the Type of Cuisine</option>
                            {foodGenres}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Open Status</ControlLabel>
                        <Radio name="radioGroup" inline>Open</Radio>
                        <Radio name="radioGroup" inline>Permanently Closed</Radio>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Notes</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Great atmosphere, lively and fun" />
                    </FormGroup>
                </form>
                <h3> Now add a dish </h3>
                <Button bsStyle="primary" variant="outline-secondary" onClick={this.handleShow}>
                    Add A Dish
                 </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dish Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button bsStyle="primary" variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dish Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Dish Name</ControlLabel>
                                <FormControl type="text" label="Dish Name" placeholder="Lasagna" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Course</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Choose the Course</option>
                                    {courses}
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Dish Type</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Choose the Dish Type</option>
                                    {dishTypes}
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Ingredients</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="ground beef, sausage, mozzarella cheese, tomato, basil, lasagna noodles, parmesean, oregano, garlic, onion, ricotta cheese" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Homemade noodles with bolognese and fresh mozzarella" />
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>$</InputGroup.Addon>
                                    <FormControl type="text" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              
                            </FormGroup>
                            
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button bsStyle="primary" variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    };
};