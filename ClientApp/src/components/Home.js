import React, { Component } from 'react';
import dishByScoresCalls from '../DBRequests/dishByScoresCalls';
import { Col, Card, Button } from 'react-materialize';

export class Home extends Component {

    state = {
        aromaDishes: [],
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
    };

    render() {
        const aromaDishes = this.state.aromaDishes.map((aromaDish) => {
            return (
                <div key={aromaDish.id}>
                    <Col m={3} s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title={aromaDish.DishName} actions={[<Button waves='light'>View Dish</Button>]}>
                            <h3>{aromaDish.aroma}</h3>
                            <div>hi</div>
                        </Card>
                    </Col>
                </div>
            );
        })
        return (
            <div>
                <h2>Best Aroma</h2>
                {aromaDishes}
            </div>
        );
    }
}