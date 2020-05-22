import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Intro extends Component {
    render() {
        return (
            <Container className="d-flex flex-row mx-auto" style={{ height: '100vh' }} fluid>
                <Row className="justify-content-center align-self-center mx-auto">
                    <Col sm={12} xs={12} className="p-0 pb-2 m-0">
                        <h2 className="text-center">EXPEDIENTE MÉDICO</h2>
                        <hr />
                    </Col>
                    <Col xs={6} className="p-0 pb-5 m-0">
                        <Link to="/medico"><btn className="btn">MÉDICO</btn></Link>
                    </Col>
                    <Col xs={6} className="p-0 pb-5 m-0">
                        <btn className="btn">PACIENTE</btn>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Intro;