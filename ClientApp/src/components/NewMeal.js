import React, { Component } from 'react';
import mealCalls from '../DBRequests/mealCalls';
import { Panel, Col, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import "./Meals.css";

export class NewMeal extends Component {

    state = {
        currentMeal: {},
    }

    componentDidMount() {
        mealCalls
            .getMyCurrentMeal()
            .then((currentMeals) => {
                this.setState({ currentMeals })
            })
            .catch((error) => {
                console.error('error with GET current meal call', error);
            });
    };

    render() {
        const currentMeals = this.state.currentMeals.map((currentMeal) => {
            return (
                <Col xs={12} md={4}>
                    <div key={currentMeal.id}>
                        <Panel bsStyle="danger">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{currentMeal.mealName}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <h3>{currentMeal.restaurantName}</h3>
                                <h4>
                                    <Moment format="MMMM DD, YYYY">
                                        {currentMeal.date}
                                    </Moment>
                                </h4>
                                <h5>{currentMeal.city}, {currentMeal.stateAbbr}</h5>
                                <h5>Cuisine: {currentMeal.foodGenreName}</h5>
                                <h5>{currentMeal.mealTypeName}</h5>
                            </Panel.Body>
                        </Panel>
                    </div>
                </Col>
            );
        })

        return (
            <div>
                <Row className="show-grid">
                    <h1>My Meal</h1>
                    <Row className="justify-content">
                        {currentMeals}
                    </Row>
                </Row>
            </div>
        );
    }
}