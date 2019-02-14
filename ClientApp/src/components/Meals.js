import React, { Component } from 'react';
import mealCalls from '../DBRequests/mealCalls';
import { Panel, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import "./Meals.css";

export class Meals extends Component {

    state = {
        mymeals: [],
    }

    componentDidMount() {
        mealCalls
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
                <div key={mymeal.id}>
                    <Col xs={12} md={4}>
                            <Panel className="mymeal-panel" bsStyle="info">
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

                                <Link to={`/individualmeal/${mymeal.id}`}>
                                    <Button bsStyle="danger">View Meal</Button>
                                </Link>
                                </Panel.Body>
                            </Panel>
                    </Col>
                </div>
                
             );
        })

        return (
            <div>
                
                    <h1>My Meals</h1>
                <div className="mymeals-container">
                        {mymeals}
                    </div>
            </div>
        );
    }
}