import React, { Component } from 'react';
import mealsCall from '../DBRequests/mealCalls';
import { Panel, Button, Col, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import "./Meals.css";

export class Meals extends Component {

    state = {
        mymeals: [],
    }

    componentDidMount() {
        mealsCall
            .getMyMeals()
            .then((mymeals) => {
                this.setState({ mymeals })
            })
            .catch((error) => {
                console.error('error with GET meals call', error);
            });
    };

    render() {
        const mymeals = this.state.mymeals.map((mymeal) => {
            return (  
                    <Col xs={12} md={4}>
                        <div key={mymeal.id}>
                            <Panel bsStyle="danger">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">{mymeal.mealName}</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                <h3>{mymeal.restaurantName}</h3>
                                <h4>
                                    <Moment format="MMMM DD, YYYY">
                                        {mymeal.date}
                                    </Moment>
                                </h4>
                                <h5>{mymeal.city}, {mymeal.stateAbbr}</h5>      
                                <h5>Cuisine: {mymeal.foodGenreName}</h5>
                                <h5>{mymeal.mealTypeName}</h5>
                                    <Button bsStyle="warning">View Meal</Button>
                                </Panel.Body>
                            </Panel>
                        </div>
                    </Col>
             );
        })

        return (
            <div>
                <Row className="show-grid">
                    <h1>My Meals</h1>
                    <Row className="justify-content">
                        {mymeals}
                    </Row>
                </Row>
            </div>
        );
    }
}