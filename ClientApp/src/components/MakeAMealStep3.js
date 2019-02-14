import React, { Component } from 'react';
import { Col, Alert, Button, FormGroup, FormControl, ControlLabel, InputGroup, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courseCalls from '../DBRequests/courseCalls';
import dishTypeCalls from '../DBRequests/dishTypeCalls';
import dishCalls from '../DBRequests/dishCalls';
import firebase from '../../node_modules/firebase';
import FileUploader from "react-firebase-file-uploader";

export class MakeAMealStep3 extends Component {

    componentDidMount() {
        courseCalls
            .getCourses()
            .then((courses) => {
                this.setState({ courses })
            })
            .catch((error) => {
                console.error('error with GET courses call', error);
            });
        dishTypeCalls
            .getDishTypes()
            .then((dishTypes) => {
                this.setState({ dishTypes })
            })
            .catch((error) => {
                console.error('error with GET dish types call', error);
            });
    };

    closeAlert = () => {
        const emptyAlert = {
            show: false,
            
        }
        this.setState({ alert: emptyAlert });
    }

    state = {
        alert: {
            show: false
        },
        isUploading: false,
        progress: 0,
        avatarURL: '',
        courses: [],
        dishTypes: [],
        mealid: '',
        selectedFile: null,
        newDish: {
            dishName: 'Plum Pork',
            courseId: '6',
            dishTypeId: '13',
            ingredient: 'plum, pork, haricort verts, lemon zest, , wine, salt, sugar, potatoes, cream, butter ',
            picture: '',
            appearance: '3',
            aroma: '4',
            creativity: '5',
            taste: '4',
            description: 'marinated tenderloin medallions finished with savory plum sauce of mashed potatoes and french green beans',
            price: '19.95',
            mealId: '',
        },
        newDishes: [],
    };

    handleUploadSuccess = filename => {
        const { newDish } = { ...this.state }

        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                newDish.picture = url;
                this.setState({ newDish });
            });
    };

    formFieldStringState = (variable, e) => {
        const temporaryDish = { ...this.state.newDish };
        temporaryDish[variable] = e.target.value;
        this.setState({ newDish: temporaryDish });
    }

    dishNameChanged = (e) => {
        this.formFieldStringState('dishName', e);
    }

    courseIdChanged = (e) => {
        this.formFieldStringState('courseId', e);
    }
    dishTypeIdChanged = (e) => {
        this.formFieldStringState('dishTypeId', e);
    }

    ingredientChanged = (e) => {
        this.formFieldStringState('ingredient', e);
    }

    pictureChanged = (e) => {
        this.formFieldStringState('picture', e);
    }

    appearanceChanged = (e) => {
        this.formFieldStringState('appearance', e);
    }

    aromaChanged = (e) => {
        this.formFieldStringState('aroma', e);
    }

    creativityChanged = (e) => {
        this.formFieldStringState('creativity', e);
    }

    tasteChanged = (e) => {
        this.formFieldStringState('taste', e);
    }

    descriptionChanged = (e) => {
        this.formFieldStringState('description', e);
    }

    priceChanged = (e) => {
        this.formFieldStringState('price', e);
    }

    postNewDish = (e) => {
        const newDish = { ...this.state.newDish };
        e.preventDefault();
        newDish.mealId = this.props.match.params.mealid
        dishCalls.postDish(newDish)
            .then((result) => {
                this.setState({
                    alert: {
                        show: true,
                    },
                    newDish: {
                        id: result,
                        dishName: '',
                        courseId: '',
                        dishTypeId: '',
                        ingredient: '',
                        picture: '',
                        appearance: '',
                        aroma: '',
                        creativity: '',
                        taste: '',
                        description: '',
                        price: '',
                        mealId: '',
                    },
                    mealid: this.props.match.params.mealid
                })
            })
            .catch((error) => {
                console.error('There was an error posting the new dish ', error);
            })
    }

    render() {

        let alertStuff = undefined;
        if (this.state.alert.show) {
            alertStuff = (<Alert
                bsStyle="danger"
                onDismiss={this.closeAlert}
                className="text-center">Congrats! You added a dish to your meal.</Alert>)
        }

        const { newDish } = this.state;
        const courses = this.state.courses.map((course) => {
            return (
                <option
                    key={course.id}
                    id="courseId"
                    value={course.id}
                >{course.courseName}</option>
            );
        });
        const dishTypes = this.state.dishTypes.map((dishType) => {
            return (
                <option
                    key={dishType.id}
                    id="dishTypeId"
                    value={dishType.id}
                >{dishType.dishTypeName}</option>
            );
        });

        return (
            <div>
                <h1>Step 3: Add Your Dishes</h1>
                <div>
                <form>
                    <Col xs={12} md={6}>
                    <FormGroup>
                        <ControlLabel>Dish Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Lasagna"
                            id="dishName"
                            value={newDish.dishName}
                            onChange={this.dishNameChanged}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Course</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={this.courseIdChanged}>
                            <option value="select">Choose the Course</option>
                            {courses}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Dish Type</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={this.dishTypeIdChanged}>
                            <option value="select">Choose the Dish Type</option>
                            {dishTypes}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="ground beef, sausage, mozzarella cheese, tomato, basil, lasagna noodles, parmesean, oregano, garlic, onion, ricotta cheese"
                            id="ingredient"
                            value={newDish.ingredient}
                            onChange={this.ingredientChanged} />
                        </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Homemade noodles with bolognese and fresh mozzarella"
                            id="description"
                            value={newDish.description}
                            onChange={this.descriptionChanged} />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                    <FormGroup>
                         <ControlLabel>Price</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <FormControl
                                type="text"
                                id="price"
                                value={newDish.price}
                                onChange={this.priceChanged} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Aroma Score</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="score 1-5"
                            id="aroma"
                            value={newDish.aroma}
                            onChange={this.aromaChanged}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Appearance Score</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="score 1-5"
                            id="appearance"
                            value={newDish.appearance}
                            onChange={this.appearanceChanged}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Creativity Score</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="score 1-5"
                            id="creativity"
                            value={newDish.creativity}
                            onChange={this.creativityChanged}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Taste Score</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="score 1-5"
                            id="taste"
                            value={newDish.taste}
                            onChange={this.tasteChanged}
                        />
                    </FormGroup>

                        <FileUploader
                        className="image-button"
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadSuccess={this.handleUploadSuccess}
                        />
                    </Col>
                </form>
                </div>
                <Col xs={12} md={12}>
                    <div>{alertStuff}</div>
                <div className="form-button-container">
                        <Button
                    className="step3-button"
                    type="submit"
                    bsStyle="info"
                    onClick={this.postNewDish}>
                    <Glyphicon
                        glyph="floppy-disk" /> Save Dish Information</Button>
                     <Link to={`/newmeal/${this.state.mealid}`}>
                    <Button
                        className="step3-button"
                        bsStyle="warning">
                        <Glyphicon glyph="cutlery"/> I'm done. Go to my Meal.
                        </Button>
                    </Link>
                    </div>
                    </Col>
            </div>

        );
    }
};
