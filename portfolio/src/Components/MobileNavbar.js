import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Headroom from 'react-headroom';
import navbar from "../CSS/navbar.module.css"; // Import CSS module for styling

const MobileNavbar = () => {
    return (
        <div className={navbar['mobile-main']}>
            <Headroom>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand as={Link} to="/" style={{ marginLeft: '20px' }}>
                        <img
                            src="/km_logo-removebg-preview.png"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Your Logo or Brand"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column text-center mx-auto mb-3">
                            <Nav.Link as={Link} to="/" className="mb-2">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" onClick={() => window.scrollTo(0, 0)} className="mb-2">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/references" onClick={() => window.scrollTo(0, 0)} className="mb-2">References</Nav.Link>
                            <a href="https://drive.google.com/file/d/1iKgnYfQ17T0zfQlfnRtzZKoVZidrW0f-/view?usp=sharing" target="_blank" className={navbar['custom-button-link']}>
                                <Button variant="outline-light" className={navbar['custom-button']}>Download CV</Button>
                            </a>
                        </Nav>
                        <div className="text-center">
                            <Nav className="justify-content-center">
                                <Nav.Link href="https://github.com/krismac12" target="_blank" className={navbar['social-link']}><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/kristan-macaraeg-845332267/" target="_blank" className={navbar['social-link']}><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Headroom>
        </div>
    );
}

export default MobileNavbar;
