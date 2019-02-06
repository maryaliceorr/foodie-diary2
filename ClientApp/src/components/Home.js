import React, { Component } from 'react';
import dishByScoresCalls from '../DBRequests/dishByScoresCalls';
import Panel from 'react-bootstrap/lib/Panel';
import { Button } from 'react-bootstrap';

import './Home.css';

export class Home extends Component {

    state = {
        aromaDishes: [],
        appearanceDishes: [],
        creativityDishes: [],
        tasteDishes: [],
        totalScoreDishes: [],
    }

    componentDidMount() {
        dishByScoresCalls
            .getAromas()
            .then((aromaDishes) => {
                this.setState({ aromaDishes })
            })
            .catch((error) => {
                console.error('error with GET aromaDishes call', error);
            });
        dishByScoresCalls
             .getAppearances()
            .then((appearanceDishes) => {
                this.setState({ appearanceDishes })
            })
            .catch((error) => {
                console.error('error with GET appearanceDishes call', error);
            });
        dishByScoresCalls
            .getCreativities()
            .then((creativityDishes) => {
                this.setState({ creativityDishes})
            })
            .catch((error) => {
                console.error('error with GET creativityDishes call', error);
            })
        dishByScoresCalls
            .getTastes()
            .then((tasteDishes) => {
                this.setState({ tasteDishes })
            })
            .catch((error) => {
                console.error('error with GET creativityDishes call', error);
            })
        dishByScoresCalls
            .getTotalScores()
            .then((totalScoreDishes) => {
                this.setState({ totalScoreDishes })
            })
            .catch((error) => {
                console.error('error with GET creativityDishes call', error);
            })
    };

    render() {
        const aromaDishes = this.state.aromaDishes.map((aromaDish) => {
            return (
                <div className="ticker-item" key={ aromaDish.id } >
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{aromaDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={aromaDish.picture} />
                            <h4>Aroma Score: {aromaDish.aroma}</h4>
                            <h5>{aromaDish.restaurantName}</h5>
                            <h6>{aromaDish.city}, {aromaDish.state}</h6>
                            <Button bsStyle="info">View Dish</Button>
                        </Panel.Body>
                    </Panel>
                </div>

            );
        });
        const appearanceDishes = this.state.appearanceDishes.map((appearanceDish) => {
            return (
                <div className="ticker-item" key={appearanceDish.id} >
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{appearanceDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={appearanceDish.picture} />
                            <h4>Appearance Score: {appearanceDish.appearance}</h4>
                            <h5>{appearanceDish.restaurantName}</h5>
                            <h6>{appearanceDish.city}, {appearanceDish.state}</h6>
                            <Button bsStyle="info">View Dish</Button>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        });

        const creativityDishes = this.state.creativityDishes.map((creativityDish) => {
            return (
                <div className="ticker-item" key={creativityDish.id}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                                    <Panel.Title componentClass="h3">{creativityDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={creativityDish.picture} />
                            <h4>Creativity Score: {creativityDish.creativity}</h4>
                            <h5>{creativityDish.restaurantName}</h5>
                            <h6>{creativityDish.city}, {creativityDish.state}</h6>
                            <Button bsStyle="info">View Dish</Button>
                        </Panel.Body>
                            </Panel>
                </div>
            );
        })

        const tasteDishes = this.state.tasteDishes.map((tasteDish) => {
            return (
                <div className="ticker-item" key={tasteDish.id}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                                <Panel.Title componentclass="h3">{tasteDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={tasteDish.picture} />
                            <h4>Taste Score: {tasteDish.taste}</h4>
                            <h5>{tasteDish.restaurantName}</h5>
                            <h6>{tasteDish.city}, {tasteDish.state}</h6>
                            <Button bsStyle="info">View Dish</Button>
                        </Panel.Body>   
                    </Panel>
                </div>
        
            );
        })

        const totalScoreDishes = this.state.totalScoreDishes.map((totalScoreDish) => {
            return (
                <div className="ticker-item" key={totalScoreDish.id}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{totalScoreDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={totalScoreDish.picture} />
                            <h4>Total Score: {totalScoreDish.totalScore}</h4>
                            <h5>{totalScoreDish.restaurantName}</h5>
                            <h6>{totalScoreDish.city}, {totalScoreDish.state}</h6>
                            <Button bsStyle="info">View Dish</Button>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        });

        return (
            <div>
                <h1>My Top Dishes</h1>
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                            {totalScoreDishes}
                        </div>
                    </div>
                </div>
                <h2>Best Aroma</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                            {aromaDishes}
                        </div>
                    </div>
                </div>
                <h2>Best Appearance</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                            {appearanceDishes}
                        </div>
                    </div>
                </div>
                <h2>Best Creativity</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                            {creativityDishes}
                        </div>
                    </div>
                </div>
                <h2>Best Taste</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap">
                        <div className="ticker-move">
                            {tasteDishes}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
