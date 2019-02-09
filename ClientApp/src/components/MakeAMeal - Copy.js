import React, { Component } from 'react';
import { Modal, Button, Radio, FormGroup, FormControl, ControlLabel, InputGroup, Glyphicon } from 'react-bootstrap';
import stateAbbrCalls from '../DBRequests/stateAbbrCalls';
import foodGenreCalls from '../DBRequests/foodGenreCalls';
import courseCalls from '../DBRequests/courseCalls';
import dishTypeCalls from '../DBRequests/dishTypeCalls';
import mealTypeCalls from '../DBRequests/mealTypeCalls';
import mealCalls from '../DBRequests/mealTypeCalls';
import restaurantCalls from '../DBRequests/restaurantCalls';

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
        mealTypeCalls
            .getMealTypes()
            .then((mealTypes) => {
                this.setState({ mealTypes })
            })
            .catch((error) => {
                console.error('error with GET meal types call', error);
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
            mealTypes: [],
            selectedFile: null,
            newRestaurant: {
                restaurantName: '',
                address: '',
                city: '',
                stateAbbrId: '',
                zipCode: '',
                telephone: '',
                website: '',
                foodGenreId: '',
                openStatus: '',
                notes: '',
            }
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {

    }

    formFieldStringState = (variable, e) => {
        const temporaryRestaurant = { ...this.state.newRestaurant };
        temporaryRestaurant[variable] = e.target.value;
        this.setState({ newRestaurant: temporaryRestaurant });
    }

    restaurantNameChanged = (e) => {
        this.formFieldStringState('restaurantName', e);
    }

    addressChanged = (e) => {
        this.formFieldStringState('address', e);
    }
    cityChanged = (e) => {
        this.formFieldStringState('city', e);
    }

    stateAbbrIdChanged = (e) => {
        this.formFieldStringState('stateAbbrId', e);
    }

    zipCodeChanged = (e) => {
        this.formFieldStringState('zipCode', e);
    }

    telephoneChanged = (e) => {
        this.formFieldStringState('telephone', e);
    }

    websiteChanged = (e) => {
        this.formFieldStringState('website', e);
    }

    foodGenreIdChanged = (e) => {
        this.formFieldStringState('foodGenreId', e);
    }

    openStatusChanged = (e) => {
        this.formFieldStringState('openStatus', e);
    }

   notesChanged = (e) => {
        this.formFieldStringState('notes', e);
    }

    postNewRestaurant = (e) => {
        const newRestaurant = { ...this.state.newRestaurant };
        e.preventDefault();
        restaurantCalls.postRestaurant(newRestaurant)
            .then(() => {
                this.setState({
                    newRestaurant: {
                        restaurantName: '',
                        address: '',
                        city: '',
                        stateAbbrId: '',
                        zipCode: '',
                        telephone: '',
                        website: '',
                        foodGenreId: '',
                        openStatus: '',
                        notes: '',
                    }
                })
            })
            .catch((error) => {
                console.error('There was an error posting the new restaurant ', error);
            })
    }

    render() {
        const { newRestaurant } = this.state;
        const stateAbbrs = this.state.stateAbbrs.map((stateAbbr) => {
            return (
                <option
                    key={stateAbbr.id}
                    id="stateAbbrId"
                    value={stateAbbr.id}
                >{stateAbbr.stateAbbr}</option>
            );
        });

        const foodGenres = this.state.foodGenres.map((foodGenre) => {
            return (
                <option
                    key={foodGenre.id}
                    id="foodGenreId"
                    value={foodGenre.id}
                >{foodGenre.foodGenreName}</option>
            );
        });
        const courses = this.state.courses.map((course) => {
            return (
                <option
                    key={course.id}
                    id="courseId"
                   // onChange={this.courseIdChanged}
                    value={newRestaurant.courseId}
                >{course.courseName}</option>
            );
        });
        const dishTypes = this.state.dishTypes.map((dishType) => {
            return (
                <option
                    key={dishType.id}
                    id="dishTypeId"
                    // onChange={this.dishTypeIdChanged}
                    value={newRestaurant.dishTypeId}
                >{dishType.dishTypeName}</option>
            );
        });
        const mealTypes = this.state.mealTypes.map((mealType) => {
            return (
                <option
                    key={mealType.id}
                    id="mealTypeId"
                    // onChange={this.mealTypeIdChanged}
                    value={newRestaurant.dishTypeId}
                >{mealType.mealTypeName}</option>
            );
        });
        return (
            <div>
                <h1>Make A Meal</h1>
                <h3>Restaurant Info</h3>
                <form>
                    <FormGroup>
                        <ControlLabel>Restaurant Name</ControlLabel>
                        <FormControl
                            id="restaurantName"
                            type="text"
                            onChange={this.restaurantNameChanged}
                            value={newRestaurant.restaurantName}
                            placeholder="Little Italy" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                            id="address"
                            type="text" 
                            onChange={this.addressChanged}
                            value={newRestaurant.address}
                            placeholder="123 Restaurant Way" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>City</ControlLabel>
                        <FormControl
                            id="city"       
                            type="text"
                            onChange={this.cityChanged}
                            value={newRestaurant.city}
                            placeholder="New York City" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>State</ControlLabel>
                        <FormControl onChange={this.stateAbbrIdChanged} componentClass="select" placeholder="select">
                            <option value="select">Choose the State</option>
                            {stateAbbrs}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Zip Code</ControlLabel>
                        <FormControl
                            id="zipCode"
                            type="text"
                            onChange={this.zipCodeChanged}
                            value={newRestaurant.zipCode}
                            placeholder="Zip Code" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Phone</ControlLabel>
                        <FormControl
                            id="telephone"
                            type="text"
                            onChange={this.telephoneChanged}
                            value={newRestaurant.telephone}
                            placeholder="5558889999 - no dashes please" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Website</ControlLabel>
                        <FormControl
                            id="website"
                            type="text"
                            onChange={this.websiteChanged}
                            value={newRestaurant.website}
                            placeholder="www.littleitaly1.com" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Type of Cuisine</ControlLabel>
                        <FormControl
                            id="foodGenre"
                            onChange={this.foodGenreIdChanged}
                            componentClass="select"
                            placeholder="select">
                            <option value="select">Choose the Type of Cuisine</option>
                            {foodGenres}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Open Status</ControlLabel>
                        <Radio
                            value="true"
                            onChange={this.openStatusChanged}
                            name="radioGroup"
                            inline>Open</Radio>
                        <Radio
                            value="false"
                            onChange={this.openStatusChanged}
                            name="radioGroup"
                            inline>Permanently Closed</Radio>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Notes</ControlLabel>
                        <FormControl
                            value={newRestaurant.notes}
                            onChange={this.notesChanged}
                            componentClass="textarea"
                            placeholder="Great atmosphere, lively and fun" />
                    </FormGroup>
                    <Button
                        type="submit"
                        bsStyle="info"
                        onClick={this.postNewRestaurant}>
                        <Glyphicon
                       glyph="floppy-disk" /> Save Restaurant Information</Button>
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
                                <input type="file" onChange={this.fileSelectedHandler}></input>
                            <Button onClick={this.fileUploadHandler}>Upload</Button>
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

                <h2>Meal Info</h2>
                <form onSubmit={this.mainFormSubmit}>
                    <FormGroup>
                        <ControlLabel>Meal Name</ControlLabel>
                        <FormControl type="text" label="Restaurant Name" placeholder="Birthday Dinner at Little Italy" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Date</ControlLabel>
                        <FormControl type="date">
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Meal Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">Choose the Meal Type</option>
                            {mealTypes}
                        </FormControl>
                    </FormGroup>
                </form>

            </div>
        );
    };
};