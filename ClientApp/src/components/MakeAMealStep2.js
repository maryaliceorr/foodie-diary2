import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';
import mealTypeCalls from '../DBRequests/mealTypeCalls';
import mealCalls from '../DBRequests/mealCalls';

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
        this.formFieldStringState('mealName', e);
    }

    dateChanged = (e) => {
        this.formFieldStringState('date', e);
    }
    mealTypeIdChanged = (e) => {
        this.formFieldStringState('mealTypeId', e);
    }
   
    postNewMeal = (e) => {
        const newMeal = { ...this.state.newMeal };
        e.preventDefault();
        newMeal.restaurantId = this.props.match.params.restaurantid
        mealCalls.postMeal(newMeal)
            .then((result) => {
                this.setState({
                    newMeal: {
                        id: result,
                        mealName: '',
                        date: '',
                        mealTypeId: '',
                        restaurantId: '',
                    }
                })
                this.props.history.push(`/step3/${this.state.newMeal.id}`);
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
                            key={newMeal.id}
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