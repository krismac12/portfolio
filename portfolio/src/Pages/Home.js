// Home.js
import React, { useEffect, useRef, useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import homeCSS from "../CSS/home.module.css"; // Import CSS module for styling
import pagesCSS from "../CSS/pages.module.css"; // Import CSS module for styling

import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll } from "framer-motion";

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
        <div className={pagesCSS['main']}>
            {/* MainNavbar component for navigation */}
            <MainNavbar />

            {/* Animation div first*/}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0 }} viewport={{ once: true }}>
                <div className={pagesCSS["full-height"]}>
                    <Container className="my-5">
                        <Row>
                            <Col md={6}> {/* Adjust the column size to your preference */}
                                <div className={homeCSS['title']}>
                                    <h2 className="text-left"><b>My Name Is Kristan Macaraeg</b></h2>
                                    <h3 className="text-left">A <span className={pagesCSS['highlight']}>Full-Stack Developer</span></h3>
                                </div>
                        
                                <motion.p
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{
                                        opacity: 0.5,
                                        y: 0,
                                    }}
                                    transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                                    whileInView={{ opacity: 1, color: 'black', background: 'white', y: 0 }} // Only animate when in view
                                    viewport={{ once: true }}
                                >
                                    <h5>I am a <span className={pagesCSS['highlight']}>passionate developer</span> dedicated to sculpting immersive digital landscapes. With expertise in both <span className={pagesCSS['highlight']}>frontend and backend technologies</span>, I orchestrate seamless user interactions while fortifying the structural integrity of digital systems. Driven by innovation, I thrive on <span className={pagesCSS['highlight']}>transforming concepts into captivating online realities.</span></h5>
                                </motion.p>
                                <motion.div initial={{ opacity: 0, x: '-10%' }} animate={{ opacity: 1, x: '0%' }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                                    <button className="btn btn-primary">Contact Info</button>
                                </motion.div>
                            </Col>
                            
                            <Col md={6}> {/* Adjust the column size to your preference */}
                                {/* Add your image here */}
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                                    <img src="Portrait.jpg" alt="Your Image" className={homeCSS['portrait']} />                                
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </motion.div>

            {/* Animation div second*/}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0 }} viewport={{ once: true }}>
                <div className={pagesCSS["full-height"]}>
                    {/* Add a div with full-height class */}
                    <Container className="my-5">
                        <Row>
                            <Col>
                                <div className={homeCSS['title']}>
                                    <h2 className="text-left"><b>Crafting Captivating User Experiences</b></h2>
                                    <h3 className="text-left"><span className={pagesCSS['highlight']}>Elevating</span> digital engagement through <span className={pagesCSS['highlight']}>innovative</span> front-end design</h3>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: '-100%' }}
                                    animate={{
                                        opacity: 0.5,
                                        y: 0,
                                    }}
                                    transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                                    whileInView={{ opacity: 1, color: 'black', background: 'white', y: 0 }} // Only animate when in view
                                    viewport={{ once: true }}
                                >
                                    <h5>I specialize in <span className={pagesCSS['highlight']}>crafting captivating user experiences </span> using HTML, CSS, and JavaScript, with a focus on modern front-end frameworks like React.js. With a keen eye for detail and a <span className={pagesCSS['highlight']}> passion for innovation </span>, I strive to create <span className={pagesCSS['highlight']}>visually stunning and intuitive interfaces </span> that engage users from the moment they land on a page.</h5>
                                </motion.p>
                            </Col>
                        </Row>
                        {/* Info Cards about my skill-set */}
                        <Row>
                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>HTML/CSS</Card.Title>
                                        <Card.Img variant="top" src="html&css.webp" alt="HTML/CSS" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Proficient in HTML and CSS, I specialize in crafting visually appealing and responsive web interfaces. With expertise in modern CSS techniques, I focus on creating intuitive user experiences across various devices.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>JavaScript</Card.Title>
                                        <Card.Img variant="top" src="JS.jpg" alt="JavaScript" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Skilled in JavaScript, I leverage its power to develop dynamic and interactive web applications. From front-end interactivity to back-end functionality, I harness JavaScript to create seamless user experiences and robust web solutions.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>React</Card.Title>
                                        <Card.Img variant="top" src="React.jpg" alt="React" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Proficient in React.js, I craft efficient and scalable web interfaces with reusable components. Leveraging React's declarative syntax and virtual DOM, I build modern and responsive user interfaces that enhance user engagement.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </Container>
                </div>
            </motion.div>

            {/* Animation div second*/}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0 }} viewport={{ once: true }}>
                <div className={pagesCSS["full-height"]}>
                    {/* Add a div with full-height class */}
                    <Container className="my-5">
                        <Row>
                            <Col>
                                <div className={homeCSS['title']}>
                                    <h2 className="text-left"><b>Unlocking Backend Potentials</b></h2>
                                    <h3 className="text-left"><span className={pagesCSS['highlight']}>Empowering</span> digital ecosystems<span className={pagesCSS['highlight']}></span></h3>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: '-10%', width: '0%' }}
                                    animate={{
                                        opacity: 0.5,
                                        y: 0,
                                        width: '0%'
                                    }}
                                    transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
                                    whileInView={{ opacity: 1, color: 'black', background: 'white', x: 0, width: '100%' }} // Only animate when in view
                                    className="mb-5"
                                    viewport={{ once: true }}
                                >
                                    <h5>I am a passionate developer dedicated to sculpting immersive <span className={pagesCSS['highlight']}>digital landscapes </span>. With expertise in <span className={pagesCSS['highlight']}>frontend and backend technologies</span>, I orchestrate seamless user interactions while fortifying the structural integrity of digital systems. <span className={pagesCSS['highlight']}>Driven by innovation</span> I thrive on transforming concepts into captivating online realities. </h5>                                       
                                </motion.p>
                            </Col>
                        </Row>
                        <Row>
                            {/* Info Cards about my skill-set back-end */}
                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>Node.js</Card.Title>
                                        <Card.Img variant="top" src="nodejs.jpg" alt="Node.js" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Proficient in Node.js, I leverage its asynchronous and event-driven architecture to build scalable server-side applications, including RESTful APIs and real-time applications.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>SQL Database</Card.Title>
                                        <Card.Img variant="top" src="sql.jpg" alt="SQL Database" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Skilled in SQL database management, I design and optimize database schemas, perform complex queries, and ensure data integrity and security.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>Express.js</Card.Title>
                                        <Card.Img variant="top" src="express.jpg" alt="Express.js" style={{ width: '100%', height: '200px' }} />
                                        <Card.Text>
                                            Proficient in Express.js, I utilize its minimalist and flexible web application framework to develop robust and scalable server-side applications, including routing and middleware.
                                        </Card.Text>
                                        <div className="mt-auto">
                                            <button className="btn btn-primary">Info Page</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>




                        </Row>
                    </Container>
                </div>
            </motion.div>
            <Container>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>

                    {/* Title for the projects section */}
                    <h2 className="text-left"><b>My Projects</b></h2>
                    <br/>
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
                </motion.div>
            </Container>
        </div>
    );

}

export default Home;

