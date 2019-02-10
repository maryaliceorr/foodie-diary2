import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, InputGroup, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courseCalls from '../DBRequests/courseCalls';
import dishTypeCalls from '../DBRequests/dishTypeCalls';
import dishCalls from '../DBRequests/dishCalls';
import { NewMeal } from './NewMeal';

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

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            courses: [],
            dishTypes: [],
            selectedFile: null,
            newDish: {
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
            }
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {

    }

    formFieldStringState = (variable, e) => {
        const temporaryDish = { ...this.state.newDish };
        temporaryDish[variable] = e.target.value;
        this.setState({ newDish: temporaryDish});
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
                    }
                })
                
            })
            .catch((error) => {
                console.error('There was an error posting the new dish ', error);
            })
    }

    render() {
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
                <Button bsStyle="primary" variant="outline-secondary" onClick={this.handleShow}>
                    Add A Dish
                 </Button>
                

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dish Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button bsStyle="primary" variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dish Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
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
                                    onChange={this.ingredientChanged}/>
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
                            <FormGroup>
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
                            <FormGroup>
                            <input type="file"
                                    onChange={this.pictureChanged}
                                    id="picture"
                                    ></input>
                            <Button onClick={this.fileUploadHandler}>Upload</Button>
                            </FormGroup>
                            
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button
                            type="submit"
                            bsStyle="info"
                            onClick={this.postNewDish}>
                            <Glyphicon
                                glyph="floppy-disk" /> Save Dish Information</Button>
                        <Link
                            to={`/newmeal/${newDish.mealId}`}
                            component={NewMeal}>
                            <Button
                                bsStyle="info"
                            >
                                I'm done. Go to my Meal.
                     </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    };
};