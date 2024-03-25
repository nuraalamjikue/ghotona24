import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const testComponent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>Test</Col>
      </Row>
    </Container>
  );
};

export default testComponent;
