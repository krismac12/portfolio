// Import necessary dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import pagesCSS from "../CSS/pages.module.css"; // Import CSS module for styling
import SkillPostCSS from "../CSS/SkillPosts.module.css"; // Import CSS module for styling

import MainNavbar from '../Components/MainNavbar';

// Define your skill post data
const posts = {
    html: {
        title: 'HTML/CSS',
        background: `HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies in web development. I initiated my journey with HTML/CSS during the initial phases of my Bachelor of IT program at QUT. Delving into both the theoretical and practical aspects, I've crafted visually captivating and functional web pages leveraging these languages.`,
        skillsAndExpertise: `Proficient in writing semantic HTML markup for structuring web content and CSS for styling and layout. My experience includes creating responsive designs adaptable to various screen sizes and devices. Furthermore, I'm well-versed in CSS preprocessors like Sass and LESS, and proficient in utilizing CSS frameworks like Bootstrap to streamline development processes.

        Over the course of my projects and coursework, I've developed a keen eye for detail in design and layout. This extends beyond mere functionality to ensuring a seamless and aesthetically pleasing user experience. I've honed my skills in optimizing web pages for performance and accessibility, employing best practices and industry standards to deliver high-quality solutions.

        Beyond the basics, I've explored advanced techniques in CSS such as animations, transitions, and grid layouts. These skills have enabled me to create engaging and dynamic user interfaces that enhance user interaction and engagement. I'm also familiar with CSS methodologies like BEM (Block Element Modifier) and SMACSS (Scalable and Modular Architecture for CSS), which promote code maintainability and scalability in larger projects.`,
        imageUrl: '/html&css.webp'
    },
    javascript: {
        title: 'JavaScript',
        background: `JavaScript serves as the backbone of dynamic and interactive web experiences. My exploration with JavaScript commenced during my immersion into web development. Through hands-on projects and coursework, I uncovered its potential in creating engaging elements and dynamic functionalities on web pages.`,
        skillsAndExpertise: `Possess a comprehensive understanding of JavaScript fundamentals, encompassing variables, functions, and control structures. My proficiency extends to DOM manipulation, event handling, and asynchronous programming. Additionally, I'm adept at working with modern JavaScript frameworks and libraries, leveraging their capabilities to build robust web applications.

        As an advocate for clean and maintainable code, I prioritize readability and scalability in my JavaScript projects. I'm proficient in implementing design patterns and architectural principles to ensure code modularity and reusability. Moreover, I actively engage in continuous learning and exploration of new JavaScript features and best practices to stay abreast of industry trends and advancements.

        I have experience in working with server-side JavaScript frameworks like Express.js, which enables me to build scalable and efficient back-end solutions. Understanding concepts like RESTful APIs and middleware, I've developed server-side applications that interact seamlessly with front-end interfaces, providing users with a seamless browsing experience.`,
        imageUrl: '/JS.jpg'
    },
    react: {
        title: 'React',
        background: `React, a powerful JavaScript library for building user interfaces, has been pivotal in my web development journey. My experience with React began during collaborative projects and coursework, where I explored its capabilities in crafting efficient and scalable front-end solutions.`,
        skillsAndExpertise: `Skilled in leveraging React's component-based architecture to develop reusable UI elements, I've contributed to building intuitive and interactive user interfaces. Proficient in managing state and props, I've utilized React Router for seamless navigation within single-page applications. Additionally, I've integrated Redux for state management, enhancing application scalability and maintainability.

        Through my experience with React, I've gained insights into performance optimization and code organization techniques. I've successfully implemented techniques such as code splitting and memoization to enhance application performance and responsiveness. Additionally, I've collaborated with cross-functional teams to integrate React into existing codebases and refactor legacy code to modern standards.

        My proficiency in React extends to working with advanced features such as Context API and Hooks, which streamline state management and component logic. I'm adept at leveraging third-party libraries and packages to extend React's capabilities and enhance development efficiency. Moreover, I stay updated with the latest trends and advancements in the React ecosystem, continuously expanding my skill set to deliver innovative and user-centric solutions.`,
        imageUrl: '/React.jpg'
    },
    node: {
        title: 'Node.js',
        background: `Node.js is a powerful JavaScript runtime environment built on Chrome's V8 JavaScript engine. My journey with Node.js began as I delved deeper into full-stack web development. I discovered its versatility in enabling server-side development using JavaScript, unifying the language for both client and server-side logic.`,
        skillsAndExpertise: `Proficient in building scalable and efficient server-side applications using Node.js. Skilled in asynchronous programming and event-driven architecture, I've leveraged Node.js to develop RESTful APIs and real-time applications. Additionally, I have experience in using Node.js with frameworks like Express.js to streamline server-side development and enhance code maintainability.`,
        imageUrl: '/nodejs.jpg'
    },
    sql: {
        title: 'SQL Database',
        background: `SQL (Structured Query Language) databases play a crucial role in storing and managing data in web applications. My journey with SQL databases began as I explored the foundations of data management in relational databases. I gained hands-on experience in designing database schemas, writing SQL queries, and optimizing database performance.`,
        skillsAndExpertise: `Experienced in working with relational database management systems (RDBMS) like MySQL and PostgreSQL. Proficient in database design, normalization, and optimization, I've developed robust database schemas to support application requirements. Additionally, I have experience in querying databases using SQL and implementing advanced database features like indexing and transactions.`,
        imageUrl: '/sql.jpg'
    },
    express: {
        title: 'Express.js',
        background: `Express.js is a minimalist web application framework for Node.js, designed for building web applications and APIs. My experience with Express.js complements my proficiency in server-side development with Node.js. I've utilized Express.js to streamline the development of RESTful APIs and web applications, leveraging its middleware architecture and routing capabilities.`,
        skillsAndExpertise: `Skilled in building scalable and modular web applications using Express.js. Proficient in middleware development, routing, and request handling, I've built robust APIs and web servers using Express.js. Additionally, I have experience in integrating Express.js with databases and third-party services to create dynamic and feature-rich web applications.`,
        imageUrl: '/express.jpg'
    }
};




// SkillPost component
const SkillPost = () => {
    // Get the parameter from the URL
    let { skill } = useParams();

    // Get the skill post data based on the parameter
    const post = posts[skill];

    // Render the skill post content
    return (
        <div className={pagesCSS['main']}>
            {/* MainNavbar component for navigation */}
            <MainNavbar />

            <Container className="my-5">
                <div className="article">
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.background}</p>
                        {/* Apply Bootstrap classes for centering and ensuring same size */}
                        <img src={post.imageUrl} className={`${SkillPostCSS.image} img-fluid mx-auto d-block`} alt={post.title} />                        <br/>
                        <p>{post.skillsAndExpertise}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

// Export the SkillPost component
export default SkillPost;
