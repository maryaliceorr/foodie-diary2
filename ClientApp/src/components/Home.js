import React, { Component } from 'react';
import dishByScoresCalls from '../DBRequests/dishByScoresCalls';
import Panel from 'react-bootstrap/lib/Panel';
import { Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
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
        const onestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const twostar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const threestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /><Glyphicon glyph="star-empty" /></div>;
        const fourstar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star-empty" /></div>;
        const fivestar = <div><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /><Glyphicon glyph="star" /></div>;
        const aromaDishes = this.state.aromaDishes.map((aromaDish) => {
            return (
                <div className="ticker-item" key={ aromaDish.id } >
                    <Panel bsStyle="danger">
                        <Panel.Heading bsStyle="danger">
                            <Panel.Title componentClass="h3">{aromaDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={aromaDish.picture} alt={aromaDish.dishName} />
                            <h3>Aroma Score: <span className="aroma-stars">{aromaDish.aroma === 1 ? onestar : aromaDish.aroma === 2 ? twostar : aromaDish.aroma === 3 ? threestar : aromaDish.aroma === 4 ? fourstar : fivestar}</span></h3>
                            <h4>
                                <Moment format="MMMM DD, YYYY">
                                    {aromaDish.date}
                                </Moment>
                            </h4>
                            <h4>{aromaDish.restaurantName}</h4>
                            <h4>{aromaDish.city}, {aromaDish.stateAbbr}</h4>
                            <h4>{aromaDish.courseName}</h4>
                            <div className="text-center">
                            <Link to={`/individualdish/${aromaDish.id}`}>
                                <Button bsStyle="danger">View Dish</Button>
                            </Link>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>

            );
        });
        const appearanceDishes = this.state.appearanceDishes.map((appearanceDish) => {
            return (
                <div className="ticker-item" key={appearanceDish.id} >
                    <Panel bsStyle="warning">
                        <Panel.Heading bsStyle="warning">
                            <Panel.Title componentClass="h3">{appearanceDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <div className="image-container">
                                <img className="card-image" src={appearanceDish.picture} alt={appearanceDish.dishName} />
                            </div>
                            <h4>
                                <Moment format="MMMM DD, YYYY">
                                    {appearanceDish.date}
                                </Moment>
                            </h4>
                            <h3>Appearance Score: <span className="appearance-stars">{appearanceDish.appearance === 1 ? onestar : appearanceDish.appearance === 2 ? twostar : appearanceDish.appearance === 3 ? threestar : appearanceDish.appearance === 4 ? fourstar : fivestar}</span></h3>
                            <h4>{appearanceDish.restaurantName}</h4>
                            <h4>{appearanceDish.city}, {appearanceDish.stateAbbr}</h4>
                            <h4>{appearanceDish.courseName}</h4>
                            <div className="text-center">
                            <Link to={`/individualdish/${appearanceDish.id}`}>
                                <Button bsStyle="warning">View Dish</Button>
                                </Link>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        });

        const creativityDishes = this.state.creativityDishes.map((creativityDish) => {
            return (
                <div className="ticker-item" key={creativityDish.id}>
                    <Panel bsStyle="success">
                        <Panel.Heading bsStyle="success">
                            <Panel.Title componentClass="h3">{creativityDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={creativityDish.picture} alt={creativityDish.dishName} />
                            <h3>Creativity Score: <span className="creativity-stars">{creativityDish.creativity === 1 ? onestar : creativityDish.creativity === 2 ? twostar : creativityDish.creativity === 3 ? threestar : creativityDish.creativity === 4 ? fourstar : fivestar}</span></h3>
                            <h4>
                                <Moment format="MMMM DD, YYYY">
                                    {creativityDish.date}
                                </Moment>
                            </h4>
                            <h4>{creativityDish.restaurantName}</h4>
                            <h4>{creativityDish.city}, {creativityDish.stateAbbr}</h4>
                            <h4>{creativityDish.courseName}</h4>
                            <div className="text-center">
                                <Link to={`/individualdish/${creativityDish.id}`}>
                                    <Button bsStyle="success">View Dish</Button>
                                </Link>
                            </div>
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
                            <img className="card-image" src={tasteDish.picture} alt={tasteDish.dishName} />
                            <h3>Taste Score: <span className="taste-stars">{tasteDish.taste === 1 ? onestar : tasteDish.taste === 2 ? twostar : tasteDish.taste === 3 ? threestar : tasteDish.taste === 4 ? fourstar : fivestar}</span></h3>
                            <h4>
                                <Moment format="MMMM DD, YYYY">
                                    {tasteDish.date}
                                </Moment>
                            </h4>
                            <h4>{tasteDish.restaurantName}</h4>
                            <h4>{tasteDish.city}, {tasteDish.stateAbbr}</h4>
                            <h4>{tasteDish.courseName}</h4>
                            <div className="text-center">
                                <Link to={`/individualdish/${tasteDish.id}`}>
                                    <Button bsStyle="primary">View Dish</Button>
                                </Link>
                            </div>
                        </Panel.Body>   
                    </Panel>
                </div>
        
            );
        })

        const totalScoreDishes = this.state.totalScoreDishes.map((totalScoreDish) => {
            return (
                <div className="ticker-item" key={totalScoreDish.id}>
                    <Panel>
                        <Panel.Heading className="topdish-heading">
                            <Panel.Title componentClass="h3">{totalScoreDish.dishName}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <img className="card-image" src={totalScoreDish.picture} alt={totalScoreDish.dishName} />
                            <h3>Total Score: <span className="total-stars">{totalScoreDish.totalScore === 1 ? onestar : totalScoreDish.totalScore === 2 ? twostar : totalScoreDish.totalScore === 3 ? threestar : totalScoreDish.totalScore === 4 ? fourstar : fivestar}</span></h3>
                            <h4>
                                <Moment format="MMMM DD, YYYY">
                                    {totalScoreDish.date}
                                </Moment>
                            </h4>
                            <h4>{totalScoreDish.restaurantName}</h4>
                            <h4>{totalScoreDish.city}, {totalScoreDish.stateAbbr}</h4>
                            <h4>{totalScoreDish.courseName}</h4>
                            <div className="text-center">
                                <Link to={`/individualdish/${totalScoreDish.id}`}>
                                    <Button bsStyle="default">View Dish</Button>
                                </Link>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>
            );
        });

        return (
            <div>
                <h1 className="total-title">My Top Dishes</h1>
                <div className="tcontainer">
                    <div className="ticker-wrap total-wrap">
                        <div className="ticker-move">
                            {totalScoreDishes}
                        </div>
                    </div>
                </div>
                <h2 className="aroma-title">Best Aroma</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap aroma-wrap">
                        <div className="ticker-move">
                            {aromaDishes}
                        </div>
                    </div>
                </div>
                <h2 className="appearance-title">Best Appearance</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap appearance-wrap">
                        <div className="ticker-move">
                            {appearanceDishes}
                        </div>
                    </div>
                </div>
                <h2 className="creativity-title">Best Creativity</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap creativity-wrap">
                        <div className="ticker-move">
                            {creativityDishes}
                        </div>
                    </div>
                </div>
                <h2 className="taste-title">Best Taste</h2>
                <div className="tcontainer">
                    <div className="ticker-wrap taste-wrap">
                        <div className="ticker-move">
                            {tasteDishes}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
