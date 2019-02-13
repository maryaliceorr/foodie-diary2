import React, { Component } from 'react';
import {Button, Radio, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';
import stateAbbrCalls from '../DBRequests/stateAbbrCalls';
import foodGenreCalls from '../DBRequests/foodGenreCalls';
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
            </div>
        );
    };
};