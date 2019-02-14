import React, { Component } from 'react';
import {Col, Button, Radio, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';
import stateAbbrCalls from '../DBRequests/stateAbbrCalls';
import foodGenreCalls from '../DBRequests/foodGenreCalls';
import restaurantCalls from '../DBRequests/restaurantCalls';
import './Form.css';

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
    };

        state = {
            show: false,
            stateAbbrs: [],
            foodGenres: [],
            courses: [],
            dishTypes: [],
            mealTypes: [],
            selectedFile: null,
            newRestaurant: {
                restaurantName: 'Germantown Cafe',
                address: '1200 5th Ave N',
                city: 'Nashville',
                stateAbbrId: '42',
                zipCode: '37208',
                telephone: '6152423226',
                website: 'germantowncafe.com',
                foodGenreId: '13',
                openStatus: '1',
                notes: 'Great bang for your buck restaurant in Nashvile and great ambience.',
            }
        };
   
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
            .then((result) => {
                this.setState({
                    newRestaurant: {
                        id: result,
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
                this.props.history.push(`/step2/${this.state.newRestaurant.id}`);
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
        })
        return (
            <div>
                <h1>Step 1: Restaurant Info</h1>            
                <form>
                    <Col xs={12} md={6}>
                        <Col xs={12}>
                            <FormGroup>
                                <ControlLabel>Restaurant Name</ControlLabel>
                                <FormControl
                                    id="restaurantName"
                                    type="text"
                                    onChange={this.restaurantNameChanged}
                                    value={newRestaurant.restaurantName}
                                placeholder="Little Italy" />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <ControlLabel>Address</ControlLabel>
                                <FormControl
                                    id="address"
                                    type="text" 
                                    onChange={this.addressChanged}
                                    value={newRestaurant.address}
                                    placeholder="123 Restaurant Way" />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <FormGroup>
                                <ControlLabel>City</ControlLabel>
                                <FormControl
                                    id="city"       
                                    type="text"
                                    onChange={this.cityChanged}
                                    value={newRestaurant.city}
                                    placeholder="New York City" />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <FormGroup>
                                <ControlLabel>State</ControlLabel>
                                <FormControl onChange={this.stateAbbrIdChanged} componentClass="select" placeholder="select">
                                    <option value="select">Choose the State</option>
                                {stateAbbrs}
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <FormGroup>
                                <ControlLabel>Zip Code</ControlLabel>
                                <FormControl
                                    id="zipCode"
                                    type="text"
                                    onChange={this.zipCodeChanged}
                                    value={newRestaurant.zipCode}
                                    placeholder="Zip Code" />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <ControlLabel>Phone</ControlLabel>
                                <FormControl
                                    id="telephone"
                                    type="text"
                                    onChange={this.telephoneChanged}
                                    value={newRestaurant.telephone}
                                    placeholder="5558889999 - no dashes please" />
                            </FormGroup>
                        </Col>
                    </Col>
                    <Col xs={12} md={6}>
                        <Col xs={12}>
                            <FormGroup>
                                <ControlLabel>Website</ControlLabel>
                                <FormControl
                                    id="website"
                                    type="text"
                                    onChange={this.websiteChanged}
                                    value={newRestaurant.website}
                                    placeholder="www.littleitaly1.com" />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
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
                        </Col>
                        <Col xs={12}>
                            <FormGroup>
                                <ControlLabel>Open Status</ControlLabel>
                                <div className="radio-line">
                                    <Radio
                                        className="radio-background"
                                        value="true"
                                        onChange={this.openStatusChanged}
                                        name="radioGroup"
                                        inline>Open</Radio>
                                    <Radio
                                        className="radio-background"
                                        value="false"
                                        onChange={this.openStatusChanged}
                                        name="radioGroup"
                                        inline>Permanently Closed</Radio>
                                 </div>
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Notes</ControlLabel>
                                <FormControl
                                    id="notes"
                                    value={newRestaurant.notes}
                                    onChange={this.notesChanged}
                                    componentClass="textarea"
                                    placeholder="Great atmosphere, lively and fun" />
                            </FormGroup>
                         </Col>
                    </Col>
                    <div className="form-button-container">
                        <Button
                       
                            type="submit"
                            bsStyle="info"
                            onClick={this.postNewRestaurant}>
                            <Glyphicon glyph="floppy-disk" /> Save Restaurant Information
                        </Button>
                    </div>
                </form>
            </div>
        );
    };
};