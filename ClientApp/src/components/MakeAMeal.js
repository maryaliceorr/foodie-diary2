import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export class MakeAMeal extends Component {
    
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <h1>Meal Info</h1>
                



                <Button variant="outline-secondary" onClick={this.handleShow}>
                    Add A Restaurant
                 </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        
                    <Form
                        id="formControlsText"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        />
                    










                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
};