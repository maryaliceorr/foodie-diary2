﻿import React, { Component } from 'react';
import { Panel, Col, Row, Glyphicon } from 'react-bootstrap';
import Moment from 'react-moment';
import mealCalls from '../DBRequests/mealCalls';
import dishCalls from '../DBRequests/dishCalls';
import "./IndividualMeal.css";
import NumberFormat from 'react-number-format';

export class IndividualMeal extends Component {

    state = {
        individualmeal: [],
        individualmealdishes:[]
    }

    componentDidMount() {
        const individualMealId = this.props.match.params.individualmealid;
        mealCalls
            .getMyIndividualMeal(individualMealId)
            .then((individualmeal) => {
                this.setState({ individualmeal })
            })
            .catch((error) => {
                console.error('error with GET individual meal call', error);
            });
        dishCalls   
            .getMyIndividualMealDishes(individualMealId)
            .then((individualmealdishes) => {
                this.setState({ individualmealdishes })
            })
            .catch((error) => {
                console.error('error with GET individual meal call', error);
            });
    };

    render() {
        const onestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const twostar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const threestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const fourstar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /></div>;
        const fivestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /></div>;
        const mydishes = this.state.individualmealdishes.map((mydish) => {
            return (
                <Col xs={12}>
                        <Panel className="dish-panel" key={mydish.id} bsStyle="danger">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{mydish.dishName}</Panel.Title>
                            </Panel.Heading>
                        <Panel.Body>
                            <Col xs={12} md={6}>
                                <img className="large-pic" src={mydish.picture} alt={mydish.dishName} />
                            </Col>
                                <h4>Course: {mydish.courseName}</h4>
                                <h4>Dish Type: {mydish.dishTypeName}</h4>
                                <h4>Ingredients:</h4>
                                <p className="card-paragraph">{mydish.ingredient}</p>
                                <h4>Description:</h4>
                                <p className="card-paragraph">{mydish.description}</p>
                            <h4>Price: ${mydish.price}</h4>
                            <div className="stars-container">
                            <Col xs={12} md={12}>
                                <h3>Total Score</h3>
                                <div className="total-stars">{mydish.totalScore === 1 ? onestar : mydish.totalScore === 2 ? twostar : mydish.totalScore === 3 ? threestar : mydish.totalScore === 4 ? fourstar : fivestar}</div>
                            </Col>
                            <Col xs={12} md={6}>
                                    <h4>Aroma:</h4>
                                    <div className="aroma-stars">{mydish.aroma === 1 ? onestar : mydish.aroma === 2 ? twostar : mydish.aroma === 3 ? threestar : mydish.aroma === 4 ? fourstar : fivestar}</div>
                                    <h4>Appearance:</h4>
                                <div className="appearance-stars">{mydish.appearance === 1 ? onestar : mydish.appearance === 2 ? twostar : mydish.appearance === 3 ? threestar : mydish.appearance === 4 ? fourstar : fivestar}</div>
                            </Col>
                            <Col xs={12} md={6}>
                                    <h4>Creativity:</h4>
                                    <div className="creativity-stars">{mydish.creativity === 1 ? onestar : mydish.creativity === 2 ? twostar : mydish.creativity === 3 ? threestar : mydish.creativity === 4 ? fourstar : fivestar}</div>
                                    <h4>Taste:</h4>
                                <div className="taste-stars">{mydish.taste === 1 ? onestar : mydish.taste === 2 ? twostar : mydish.taste === 3 ? threestar : mydish.taste === 4 ? fourstar : fivestar}</div>
                                </Col>
                                </div>
                            </Panel.Body>
                            </Panel>
                         </Col >
            );
        });
        const mymeals = this.state.individualmeal.map((meal) => {
            return (
                <div className="meal-info">
                    <div key={meal.id}>
                        <h1>{meal.mealName}</h1>
                        <h2>
                            <Moment format="MMMM DD, YYYY">
                                {meal.date}
                            </Moment>
                        </h2>
                        <h3>Mealtime: {meal.mealTypeName}</h3>
                        <h3>Cuisine: {meal.foodGenreName}</h3>
                        <h3>Notes: <span>{meal.notes}</span></h3>
                        <h2>Restaurant: {meal.restaurantName}</h2>
                        <h3><Glyphicon glyph="map-marker" /> {meal.address} {meal.city}, {meal.stateAbbr} {meal.zipCode}</h3>
                        <h3><Glyphicon glyph="earphone" />  <NumberFormat className="phone" displayType={'text'} format="+1 (###) ###-####" value={meal.telephone} /></h3>
                        <h4>Status of Business: {meal.openStatus === true ? <span>Open</span> :  <span>Permanently Closed</span>}</h4>
                        <h4><strong><a href={meal.website}>{meal.restaurantName} Website</a></strong></h4>
                    </div>
                </div>
            );
        });
       
            return (
                <div>
                    {mymeals}
                    <div className="panel-container">
                        {mydishes}
                    </div>
                </div>
            );
    }
}

