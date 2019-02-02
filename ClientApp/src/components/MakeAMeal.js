import React, { Component } from 'react';
import { Col, Row, Icon, Input } from 'react-materialize';

export class MakeAMeal extends Component {

    render(

    ) {
        return (
            <div>
                <div>
                    <div className="center-align">
                        <h1>Meal Info</h1>
                        <h5>Please enter your meal info below.</h5>
                    </div>
                    <Col s={1} />
                    <Row>
                        <Input s={10} m={10} label="Name" validate type='tel'></Input>
                    </Row>
                    <Col s={5} />
                    <Row>
                        <Input s={2} name='on' label="Date" type='date' onChange={function (e, value) { }} />
                    </Row>
                </div>
                <div>
                    <h2 className="center-align">Restaurant Info</h2>
                    <Row s={10} m={10}>
                        <Input s={10} m={10} label="Name" validate type='tel'></Input>
                        <Input s={10} m={10} label="Address" validate type='tel'></Input>
                        <Input s={10} m={4} label="City" validate type='tel'></Input>
                        <Input s={5} m={3} label="State" validate type='tel'></Input>
                        <Input s={5} m={3} label="Zip Code" validate type='tel'></Input>
                        <Input s={10} m={5} label="Telephone" validate type='tel'></Input>
                        <Input s={10} m={5} label="Website" validate type='tel'></Input>
                        <Input s={10} m={10} label="Notes" type='textarea' />
                        <Col s={3} m={3} />
                        <Input s={4} m={4} name='group1' type='radio' value='1' label='Open' />
                        <Input s={4} m={4} name='group1' type='radio' value='0' label='Permanently Closed' />
                        <Input s={10} m={10} type='select' label="Food Genre" defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                    </Row>
                </div>
                <div>
                    <h2 className="center-align">Dish Info</h2>
                    <Row>
                        <Input s={10} m={10} label="Name" validate type='tel'></Input>
                        <Input s={10} m={10} type='select' label="Course" defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                        <Input s={10} m={10} type='select' label="Dish Type" defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                        <Input s={10} m={10} label="Ingredients" type='textarea' />
                        <Input s={10} m={10} label="Description" type='textarea' />

                        <Col s={3} m={3} />
                        <Input s={10} m={5} label="price" validate type='tel'><Icon>attach_money</Icon></Input>

                    </Row>
                </div>
            </div>
        );
    }
}
