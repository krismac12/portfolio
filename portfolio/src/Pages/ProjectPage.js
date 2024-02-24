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
        name: 'Project 1',
        title: 'Project 1 Title',
        thumbnail: '/gary-lopater-PBHwSmhyt9w-unsplash.jpg',
        content: [
            {
                title: 'Section 1',
                description: 'Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.Description for section 1 of Project 1.',
                image: '/gary-lopater-PBHwSmhyt9w-unsplash.jpg'
            },
            {
                title: 'Section 2',
                description: 'Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.Description for section 2 of Project 1.',
                image: '/gary-lopater-PBHwSmhyt9w-unsplash.jpg'
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
                                            <a href={`#section-${index}`}>{section.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className={`project-content ${pagesCSS['content-with-border']}`}>
                                {project.content.map((section, sectionIndex) => (
                                    <div key={sectionIndex} id={`section-${sectionIndex}`} className={projectCSS['section']}>
                                        <h4>{section.title}</h4>
                                        <p>{section.description}</p>
                                        {section.image && (
                                            <div className="text-center">
                                                <img
                                                    src={section.image}
                                                    alt={`Image for ${section.title}`}
                                                    className="img-fluid"
                                                    style={{ maxHeight: "600px" }} // Adjust the values for your desired fixed size
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
