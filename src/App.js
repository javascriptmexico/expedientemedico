import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={2} xs={2} className="p-0 m-0" style={{ background: '#f2f2f2' }}>
            prueba
          </Col>
          <Col sm={10} xs={10} className="p-0 pb-5 m-0">
            prueba
            {/*
            <Switch>
              <Route exact path="/" component={Intro} />
            </Switch>
             */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
