// Import necessary dependencies and components
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component for routing
import navbar from "../CSS/navbar.module.css"; // Import CSS module for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import FontAwesome icons
import Headroom from 'react-headroom'

// MainNavbar component responsible for rendering the navigation bar
const MainNavbar = () => {
    return (
        <div className={navbar['main']}>
            <Headroom>
                {/* Navbar of Home Page */}
                <Navbar bg="dark" variant="dark" expand="lg">
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/">Your Logo or Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Center align navigation links */}
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" onClick={() => window.scrollTo(0, 0)}>About Me</Nav.Link>
                            <Nav.Link as={Link} to="/references" onClick={() => window.scrollTo(0, 0)}>References</Nav.Link>
                        </Nav>
                        {/* Right-aligned navigation links */}
                        <Nav className={`ml-auto ${navbar['custom-nav']}`}>
                            {/* Download CV button */}
                            <a href="https://drive.google.com/file/d/1iKgnYfQ17T0zfQlfnRtzZKoVZidrW0f-/view?usp=sharing" target="_blank" className={navbar['custom-button-link']}>
                                <Button variant="outline-light" className={navbar['custom-button']}>Download CV</Button>
                            </a>
                            {/* GitHub icon link */}
                            <Nav.Link href="https://github.com/krismac12" target="_blank" className="ml-3"><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                            {/* LinkedIn icon link */}
                            <Nav.Link href="https://www.linkedin.com/in/kristan-macaraeg-845332267/" target="_blank" className="ml-3"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* End of Navbar */}
            </Headroom>
        </div>
    );
}

export default MainNavbar; // Export the MainNavbar component
