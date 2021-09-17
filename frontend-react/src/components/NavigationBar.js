import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/picture">
                        <Button>Picture</Button>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Button>Login</Button>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                        <Button>Logout</Button>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;