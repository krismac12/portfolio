import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavbar from '../Components/MainNavbar';
import pagesCSS from "../CSS/pages.module.css";
import { useEffect,useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    // Define the timeline data as an array of objects
    const timelineData = [
        {
            title: 'Lead Developer for Teamed',
            subtitle: 'Brisbane, QLD',
            date: '2023 - Current',
            content: 'As the Lead Developer for Teamed, I have been responsible for spearheading the development of the Teamed application using React.js and Node.js. My role involves architecting scalable solutions, Implementing and designing both the front-end and backend.',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
        },
        {
            title: 'Freelancer',
            subtitle: 'Brisbane, QLD',
            date: '2020 - Current',
            content: 'As a Freelance Programmer, I have worked with individual clients to develop custom software solutions using a variety of technologies, primarily JavaScript and C#. My role involves understanding client requirements, designing and implementing software solutions, and delivering high-quality code on schedule.',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
        },
        {
            title: 'Bachelor of Information Technology at QUT',
            subtitle: 'Brisbane, QLD',
            date: '2021 - Current',
            content: 'I am currently pursuing a Bachelor of Information Technology at Queensland University of Technology (QUT), where I have completed a range of courses in computer science, software engineering, database management, cybersecurity, and web development. My coursework has provided me with a strong foundation in technology and equipped me with the skills needed to excel in the field.',
            iconStyle: { background: 'orange', color: '#fff' }
        },
        {
            title: 'Indooroopilly State High School',
            subtitle: 'Brisbane, QLD',
            date: '2020',
            content: 'During my time at Indooroopilly State High School, I attended classes and completed coursework in various subjects, including Design and Technology. It was at Indooroopilly State High School where I first discovered my passion for programming and technology, laying the groundwork for my future academic and professional pursuits.',
            iconStyle: { background: 'orange', color: '#fff' }
        }
    ];


    // State variable to manage rendering of the timeline
    const [isTimelineLoaded, setTimelineLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading time with setTimeout
        setTimeout(() => {
            setTimelineLoaded(true);
            window.scrollTo(0, 0);
        }, 250); // Adjust the time as needed
    }, []);

    return (
        <div className={pagesCSS['main']}>
            <MainNavbar />
            <Container className="my-5">
                <Row>
                    <Col>
                        <h2>My Journey</h2>
                        <p>
                            Throughout my academic and professional journey, I've been fortunate to engage in diverse experiences that have shaped my career in technology. From leading development projects to freelancing and pursuing higher education, each milestone has been a stepping stone towards achieving my goals.
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h2>Timeline</h2>
                    </Col>
                </Row>
            </Container>
            <br />
            {isTimelineLoaded && (
                <VerticalTimeline lineColor="grey">
                    {/* Map over the timeline data array to render each timeline element */}
                    {timelineData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            date={item.date}
                            iconStyle={item.iconStyle}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            <p>{item.content}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            )}
        </div>
    );
}

export default About;
