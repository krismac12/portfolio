import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavbar from '../Components/MainNavbar';
import pagesCSS from "../CSS/pages.module.css";
import projectCSS from "../CSS/project.module.css";

// Define project data
const projects = [
    {
        id: '1',
        name: 'Portfolio Website',
        title: 'Portfolio Projects Showcase',
        thumbnail: '/portfolio.png',
        content: [
            {
                title: 'React Development',
                description: 'My portfolio website is a showcase of our skills, projects, and achievements, built using the React JavaScript library. React provides a powerful framework for creating dynamic and interactive user interfaces, making it an ideal choice for showcasing our work and engaging with visitors.',
                image: '/react-development-1.png'
            },
            {
                title: 'Technologies Used',
                description: `React: JavaScript library for building user interfaces.\nReact Router: Declarative routing for single-page applications.\nCSS Modules: Scoped CSS styling for component-level encapsulation.\nBootstrap: Front-end framework for responsive design and UI components.\nJavaScript (ES6+): Modern JavaScript syntax for enhanced development.\nHTML5 & CSS3: Standard markup and styling languages for web development.\n Firebase: Hosted on Google's Firebase Servers for ease of development and Reliability.`,                
                image: '/firebase-react.webp'
            }
        ]
    },
    {
        id: '2',
        name: 'Project 2',
        title: 'Project 2 Title',
        thumbnail: '/project1_image1.jpg',
        content: [
            {
                title: 'Section 1',
                description: 'Description for section 1 of Project 2.',
                image: '/project2_image1.jpg'
            },
            {
                title: 'Section 2',
                description: 'Description for section 2 of Project 2.',
                image: '/project2_image2.jpg'
            }
        ]
    }
    // Add more projects as needed
];

const ProjectPage = () => {
    const { projectId } = useParams(); // Extract projectId parameter from URL


    // Find the project that matches the projectId
    const project = projects.find(project => project.id === projectId);


    return (
        <div className={pagesCSS['main']}>
            <MainNavbar />
            {project && (
                <div className={projectCSS['project-top-bar']} id="project-top-bar" style={{ backgroundImage: `url(${project.thumbnail})`, height: '400px' }}>
                    <Container className="d-flex justify-content-center align-items-center h-100">
                        <h2 className={projectCSS['project-name']}>{project.name}</h2>
                    </Container>
                </div>
            )}
            {/* Separator line */}
            <div className={projectCSS['separator-line']}></div>
            <Container className="text-center">
                <h3>{project.title}</h3>
            </Container>

            <div className={projectCSS['separator-line']}></div>
            <Container>
                {project && (
                    <Row>
                        <Col md={3}>
                            {/* Sidebar */}
                            <div className={projectCSS['sidebar']}>
                                <ul>
                                    {project.content.map((section, index) => (
                                        <li key={index}>
                                            <a href={`#${section.title}`}>{section.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className={`project-content ${pagesCSS['content-with-border']} ${pagesCSS['display-linebreak']}`}>
                                {project.content.map((section) => (
                                    <div key={section.title} id={`${section.title}`} className={projectCSS['section']}>
                                        <div className="text-center">
                                            <h4 style={{ fontWeight: 'bold' }}>{section.title}</h4>                                        
                                            <p className={projectCSS['description']}>{section.description}</p>
                                        </div>
                                        {section.image && (
                                            <div className="text-center">
                                                <img
                                                    src={section.image}
                                                    alt={`Image for ${section.title}`}
                                                    className="img-fluid"
                                                    style={{ maxHeight: "600px" , minHeight:"500px"}} // Adjust the values for your desired fixed size
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default ProjectPage;
