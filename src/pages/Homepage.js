import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Main from "../images/med_main.svg";

//ONLY USE YARN

//maybe put image on the left and text right?

function Homepage() {
  return (
    <Container>
      <Row>
        <Col className="home p-4">
          <h1>Book your Vaccine now</h1>
          <h5 className="text-muted p-1">
            Get your vaccine from the area nearest to you with dates assigned at
            the earliest. Our experts will guide you
          </h5>
          <Button color="success">Get Started</Button>
          <br />
          <img src={Main} alt="doctors" width="75%" height="75%" />
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
