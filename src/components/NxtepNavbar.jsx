import React from 'react';
import { Navbar } from 'react-bootstrap';

function NxtepNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">nxtep</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#link">Link</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NxtepNavbar;
