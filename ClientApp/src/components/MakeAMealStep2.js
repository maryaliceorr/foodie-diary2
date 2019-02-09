import React, { Component } from 'react';
import { Modal, Button, Radio, FormGroup, FormControl, ControlLabel, InputGroup, Glyphicon } from 'react-bootstrap';
import stateAbbrCalls from '../DBRequests/stateAbbrCalls';
import foodGenreCalls from '../DBRequests/foodGenreCalls';
import courseCalls from '../DBRequests/courseCalls';
import dishTypeCalls from '../DBRequests/dishTypeCalls';
import mealTypeCalls from '../DBRequests/mealTypeCalls';
import mealCalls from '../DBRequests/mealTypeCalls';
import restaurantCalls from '../DBRequests/restaurantCalls';

export class MakeAMealStep2 extends Component {

    state = {
        mealTypes: [],
        newMeal: {
            mealName: '',
            date: '',
            mealTypeId: '',
            restaurantId: '',
        }
    };

    componentDidMount() {
       
        mealTypeCalls
            .getMealTypes()
            .then((mealTypes) => {
                this.setState({ mealTypes })
            })
            .catch((error) => {
                console.error('error with GET meal types call', error);
            });
    };


    formFieldStringState = (variable, e) => {
        const temporaryMeal = { ...this.state.newMeal};
        temporaryMeal[variable] = e.target.value;
        this.setState({ newMeal: temporaryMeal });
    }

   mealNameChanged = (e) => {
        this.formFieldStringState('restaurantName', e);
    }

    dateChanged = (e) => {
        this.formFieldStringState('address', e);
    }
    mealTypeIdChanged = (e) => {
        this.formFieldStringState('city', e);
    }

    restaurantIdChanged = (e) => {
        this.formFieldStringState('stateAbbrId', e);
    }

   
    postNewMeal = (e) => {
        const newMeal = { ...this.state.newMeal };
        e.preventDefault();
        mealCalls.postNewMeal(newMeal)
            .then(() => {
                this.setState({
                    newRestaurant: {
                        mealName: '',
                        date: '',
                        mealTypeId: '',
                        restaurantId: '',
                    }
                })
            })
            .catch((error) => {
                console.error('There was an error posting the new meal ', error);
            })
    }

    render() {
        const { newMeal } = this.state;
        const mealTypes = this.state.mealTypes.map((mealType) => {
            return (
                <option
                    key={mealType.id}
                    id="mealTypeId"
                    value={mealType.id}
                >{mealType.mealTypeName}</option>
            );
        });
        return (
            <div>
                <h1>Step 2: Meal Info</h1>
                <form>
                    <FormGroup>
                        <ControlLabel>Meal Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Birthday Dinner at Little Italy"
                            id="mealName"
                            value={newMeal.mealName}
                            onChange={this.mealNameChanged} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Date</ControlLabel>
                        <FormControl
                            type="date"
                            id="date"
                            value={newMeal.date}
                            onChange={this.dateChanged} >
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Meal Type</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={this.mealTypeIdChanged} >
                            <option value="select">Choose the Meal Type</option>
                            {mealTypes}
                        </FormControl>
                    </FormGroup>
                    <Button
                        type="submit"
                        bsStyle="info"
                        onClick={this.postNewMeal}>
                        <Glyphicon
                            glyph="floppy-disk" /> Save Meal Information</Button>
                </form>

            </div>
        );
    };
};