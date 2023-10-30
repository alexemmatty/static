import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../style/EnquiryForm.css';

function EnquiryForm() {
    return (
        <Form className="enquiry-form">
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            {/* Add other form fields like email, message, etc. */}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default EnquiryForm;
