import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MakeAMeal } from './components/MakeAMeal';
import { Meals } from './components/Meals';
import { MakeAMealStep2 } from './components/MakeAMealStep2';
import { MakeAMealStep3 } from './components/MakeAMealStep3';
import { NewMeal } from './components/NewMeal';
import { IndividualMeal } from './components/IndividualMeal';
import { IndividualDish } from './components/IndividualDish';
import { ImageHandler } from './components/ImageHandler';
import { SplashPage } from './components/SplashPage';
import fbconnection from './firebaseRequests/connection';

fbconnection();

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={SplashPage} />
            <Route exact path='/home' component={Home} />
            <Route path='/makeameal' component={MakeAMeal} />
            <Route path='/mymeals' component={Meals} />
            <Route path='/step3/:mealid' component={MakeAMealStep3} />
            <Route path='/step2/:restaurantid' component={MakeAMealStep2} />
            <Route path='/newmeal/:newmealid' component={NewMeal} />
            <Route path='/individualmeal/:individualmealid' component={IndividualMeal} />
            <Route path='/individualdish/:individualdishid' component={IndividualDish} />
            <Route path='/imagehandler' component={ImageHandler} />
            <Route path='/splash' component={SplashPage}/>
      </Layout>
    );
  }
}
        