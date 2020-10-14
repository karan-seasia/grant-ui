import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const divStyle = {
  paddingTop: "30px",
};
const SignIn = () => {
  //   const HandleFormSubmit = () => {
  // event.preventDefault();
  //     console.log("Form submitted");
  //     return <Link to="/dashboard" />;
  //   };
  return (
    <div className="login_page">
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form style={divStyle}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Link to="/dashboard">
                <Button variant="primary" type="button">
                  Signin
                </Button>
              </Link>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default SignIn;
