import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                <Col md={8} className="home-about-description"> 
                    <h1 style={{ fontSize: "2.6em" }}>
                        About Me
                    </h1>

                    <p className="home-about-body">
                        Shannon Puno is a senior at the University of Arizona, eager to pursue a career in web development. Shannon's minor is in Computer Science, and completed the Full-Stack Web Development program, through the University of Arizona partnered with EdX. 
                        Throughout her coursework, she has gained valuable skills and knowledge to be able to build functional web applications that provide great user experiences. 

                        During her free time, Shannon enjoys exploring new technologies and trends in web development to stay up-to-date with the latest industry standards. As a motivated and dedicated learner, Shannon always seeks to improve her skills and knowledge. Her passion for web development drives her to constantly build upon her skills and Shannon is always seeking for new ways to improve her skillset. 
                    </p>


                </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;