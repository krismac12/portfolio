import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Headroom from 'react-headroom';
import navbar from "../CSS/navbar.module.css"; // Import CSS module for styling
import MobileNavbar from './MobileNavbar';
import Contact from './ContactInfo';
const MainNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768); // Set isMobile to true if window width is less than 768px
        }

        window.addEventListener('resize', handleResize);

        // Call handleResize at initial load
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className={navbar['main']}>
                    <Headroom>
                        <MobileNavbar />
                    </Headroom>
                </div>
            ) : (
                <div className={navbar['main']}>
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
                                <Nav className="mx-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" onClick={() => window.scrollTo(0, 0)}>About Me</Nav.Link>
                                    <Nav.Link as={Link} to="/references" onClick={() => window.scrollTo(0, 0)}>References</Nav.Link>
                                </Nav>
                                <Nav className={`ml-auto ${navbar['custom-nav']}`}>
                                    <a href="https://drive.google.com/file/d/1iKgnYfQ17T0zfQlfnRtzZKoVZidrW0f-/view?usp=sharing" target="_blank" className={navbar['custom-button-link']}>
                                        <Button variant="outline-light" className={navbar['custom-button']}>Download CV</Button>
                                    </a>
                                    <Nav.Link href="https://github.com/krismac12" target="_blank" className="ml-3"><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                                    <Nav.Link href="https://www.linkedin.com/in/kristan-macaraeg-845332267/" target="_blank" className="ml-3"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Headroom>
                </div>
            )}
        </div>
    );
}

export default MainNavbar;
