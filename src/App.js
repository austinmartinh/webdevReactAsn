import React from 'react';
import TopBar from "../src/components/topBar/index"
import "../src/components/topBar/topBar.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'


function App() {
  return (
    <div>
      <Row>
      <div><TopBar /></div>
      </Row>
      <Row>
        <Col><SideBar /></Col>
        <Col>< </Col>
      </Row>
    </div>
  );
}

export default App;
