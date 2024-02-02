// Home.js
import React, { useEffect, useRef, useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import homeCSS from "../CSS/home.module.css"; // Import CSS module for styling
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Home component displays a carousel of projects with left and right navigation arrows.
 */
const Home = () => {
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(3);
    const [projects, setProjects] = useState([
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
        },
        {
            id: 3,
            name: 'Project 3',
            image: 'project2.jpg',
            description: 'Description for Project 2',
            pageLink: '/project2'
        },
        // Add more projects as needed
    ]);

    // Effect to initialize projects and scroll to the start of the carousel on component mount
    useEffect(() => {
        setProjects([...projects, ...projects]);
        contentRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    // Effect to automatically scroll to the right every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to scroll the carousel to the right
    const scrollRight = () => {
        if (currentIndex === projects.length - 1) {
            setProjects([...projects, ...projects]);
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        contentRef.current.scrollTo({
            left: contentRef.current.scrollLeft + 400,
            behavior: 'smooth'
        });
    };

    // Function to scroll the carousel to the left
    const scrollLeft = () => {
        if (currentIndex === 0) {
            const newProjects = [projects[projects.length - 1], ...projects];
            setProjects(newProjects);
            setCurrentIndex(currentIndex + 1);
            contentRef.current.scrollTo({
                left: contentRef.current.scrollLeft + 400,
                behavior: 'smooth'
            });
        } else if (currentIndex === 3) {
            const newProjects = [projects[projects.length - 1], ...projects.slice(0, 3)];
            setProjects(newProjects);
            setCurrentIndex(currentIndex - 1);
            contentRef.current.scrollTo({
                left: contentRef.current.scrollLeft - 400,
                behavior: 'smooth'
            });
        } else {
            setCurrentIndex(currentIndex - 1);
            contentRef.current.scrollTo({
                left: contentRef.current.scrollLeft - 400,
                behavior: 'smooth'
            });
        }
    };

    // Render component
    return (
        <div className="main">
            {/* MainNavbar component for navigation */}
            <MainNavbar />
            {/* Title for the projects section */}
            <h2>My Projects</h2>
            <div className={homeCSS['conteudo-container']}>
                {/* Left navigation button */}
                <button className={homeCSS['arrow-button']} onClick={scrollLeft}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className={homeCSS['conteudo']}>
                    <div className={homeCSS['carousel']} ref={contentRef}>
                        {/* Map through projects and render project cards */}
                        {projects.map(project => (
                            <div className={homeCSS['card-container']} key={project.id}>
                                {/* Individual project card */}
                                <Card className={homeCSS['card']}>
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                        {/* Button to view project details */}
                                        <Link to={project.pageLink}>
                                            <Button variant="primary">View Project</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right navigation button */}
                <button className={homeCSS['arrow-button']} onClick={scrollRight}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );

}

export default Home;
