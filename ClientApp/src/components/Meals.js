import React, { Component } from 'react';
import mealsCall from '../DBRequests/mealCalls';
import { Col, Card, Button } from 'react-materialize';

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
                <div key={meal.id}>
                    <Col m={3} s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title={meal.mealName} actions={[<Button waves='light'>View Meal</Button>]}>
                            <h3>{meal.restaurantName}</h3>
                            <h4>{meal.city}, {meal.state}</h4>
    </Card>
                    </Col>
                </div>
                );
        })
        return (
            <div>
                {meals}
            </div>
        );
    }
}