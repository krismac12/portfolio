import React from 'react';
import MainNavbar from '../Components/MainNavbar';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import referencesCSS from "../CSS/references.module.css"; // Import CSS module for styling
import pagesCSS from "../CSS/pages.module.css"; // Import CSS module for styling

const ReferencesPage = () => {
    // Define your references data
    const references = [
        {
            name: 'Viviana Castrillon',
            image: '2-1.png',
            email: 'hola@vivicastrillon.com.au',
            phone: '0416329634',
            position: 'Founder, Digital SB PTY',
            description: `Viviana Castrillon, as the Product Owner in the "Teamed" project, played a crucial role in defining and refining the website's features and workflows during the early stages of development.Through frequent meetings and collaborative discussions, she ensured that the project aligned with the stakeholders' vision and user requirements. As the project progressed, Viviana transitioned into a QA role, where she provided valuable feedback and insights during product releases. While her involvement in development became less hands-on, her expertise continued to shape new development directions and refine existing features, contributing to the overall success of the platform. Viviana's multifaceted contributions and dedication to quality assurance greatly enriched the project's outcomes and user experience.`
        },
        {
            name: 'Michael Bye',
            image: 'Michael-Bye-1.png',
            email: 'michael.bye@thinkplace.com.au',
            phone: '+61 421 550 939',
            position: 'General Manager, Thinkplace Brisbane',
            description: 'Michael Bye brought invaluable expertise to the "Teamed" project, initially contributing feedback and guidance to enhance its structure and direction. As the project evolved, Michael assumed the role of Scrum Leader, facilitating weekly scrum meetings to maintain development momentum and ensure project alignment with goals. His leadership and organization skills were instrumental in keeping the development process on track and at an acceptable level of quality. Furthermore, Michael collaborated closely with Viviana Castrillon in product testing and user feedback sessions, working tirelessly to refine the website and ensure a seamless user experience. His dedication to professionalism and project leadership greatly contributed to the success of the "Teamed" project.'
        }
        // Add more references as needed
    ];

    return (
        <div className={pagesCSS['main']}>
            <MainNavbar />

            <Container className="my-5">
                <h2 className={`${pagesCSS['main-header']}`}>References</h2>
                {references.map((reference, index) => (
                    <div key={index} className="mb-4">
                        <Row className="text-center mb-3">
                            <h3>{reference.name}</h3>
                        </Row>
                        <Row className={`mb-4 ${referencesCSS['reference-item']}`} style={{ border: '1px solid #dee2e6', borderRadius: '5px', padding: '10px' }}>
                            <Col xs={12} md={3} className="mb-3 mb-md-0">
                                <Image src={reference.image} roundedCircle className={referencesCSS['reference-image']} style={{ width: '100%' }} />
                            </Col>
                            <Col xs={12} md={9}>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td><strong>Position:</strong></td>
                                            <td>{reference.position}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>{reference.email}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone:</strong></td>
                                            <td>{reference.phone}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>{reference.description}</p>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default ReferencesPage;
