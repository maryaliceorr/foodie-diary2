import React, { Component } from 'react';
import mealsCall from '../DBRequests/mealCalls';
import { Panel, Button, Col, Row } from 'react-bootstrap';
import "./Meals.css";

export class Meals extends Component {

    state = {
        meals: [],
    }

    componentDidMount() {
        mealsCall
            .getMeals()
            .then((meals) => {
                this.setState({ meals })
            })
            .catch((error) => {
                console.error('error with GET meals call', error);
            });
    };

    render() {
        const meals = this.state.meals.map((meal) => {
            return (  
                    <Col xs={12} md={4}>
                        <div key={meal.id}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">{meal.mealName}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <h3>{meal.restaurantName}</h3>
                                    <h4>{meal.city}, {meal.stateAbbr}</h4>
                                    <Button variant="primary">View Meal</Button>
                                </Panel.Body>
                            </Panel>
                        </div>
                    </Col>
             );
        })
        return (
            <div>
                <Row className="show-grid">
                    {meals}
                </Row>
            </div>
        );
    }
}