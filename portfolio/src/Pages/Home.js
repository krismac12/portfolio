// Home.js
import React, { useRef } from 'react';
import MainNavbar from '../Components/MainNavbar';
import homeCSS from "../CSS/home.module.css"; // Import CSS module for styling
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const projects = [
    {
        id: 1,
        name: 'Project 1',
        image: 'project1.jpg',
        description: 'Description for Project 1',
        pageLink: '/project1'
    },
    {
        id: 2,
        name: 'Project 2',
        image: 'project2.jpg',
        description: 'Description for Project 2',
        pageLink: '/project2'
    }
    // Add more projects as needed
];

const Home = () => {
    const contentRef = useRef(null);

    const scrollRight = () => {
        contentRef.current.scrollTo({
            left: contentRef.current.scrollLeft + 400,
            behavior: 'smooth'
        });
    };

    const scrollLeft = () => {
        contentRef.current.scrollTo({
            left: contentRef.current.scrollLeft - 400,
            behavior: 'smooth'
        });
    };

    return (
        <div className="main">
            <MainNavbar />
            <h2>My Projects</h2>
            <div className={homeCSS['conteudo-container']}>
                <button className={homeCSS['arrow-button']} onClick={scrollLeft}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className={homeCSS['conteudo']}>
                    <div className={homeCSS['carousel']} ref={contentRef}>
                        {projects.map(project => (
                            <div className={homeCSS['card-container']} key={project.id}>
                                <Card className={homeCSS['card']}>
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                        <Link to={project.pageLink}>
                                            <Button variant="primary">View Project</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={homeCSS['arrow-button']} onClick={scrollRight}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default Home;
