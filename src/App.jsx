import React, { Suspense } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Menu from "./components/organisms/navbar";

import ErrorBoundary from "./components/ErrorBoundary";
import { Routes } from "./app/routes";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={"Loading..."}>
        <Menu />
        <Container className="">
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
