import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Welcome!
                            </h1>
                            <h1 className="heading-name">
                                I'M
                                <strong className="my-name"> SHANNON PUNO</strong>
                            </h1>
                            <div style={{ padding:50, textAlign: "left "}}>
                                Web Developer
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>

                        </Col>
                    </Row>
                </Container>
            </Container>

        </section>
    );
}

export default Home;