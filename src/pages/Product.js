import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import Shop from "../images/shop.svg";
import { chairs } from "../data";

function Product() {
  return (
    <>
      <Container fluid>
        <Row className="mx-auto">
          <Col md="6">
            <Fade left>
              <h1 className="display-3">
                We create bold and crazy solutions for the digital world.
              </h1>
              <p className="lead">Here's a selection of our bold few.</p>
            </Fade>
          </Col>
          <Col md="6">
            <Fade>
              <img
                src={Shop}
                alt="not found"
                className="img-fluid float-end"
                width="100%"
                height="100%"
              />
            </Fade>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container className="py-2">
        <Row>
          <h2 className="display-6">Some of our offerings:</h2>
        </Row>
        <Row className="row-cols-1 row-cols-md-3 pt-3">
          {chairs.map((chair, index) => {
            return (
              <Col
                key={index}
                className="col-lg-3 col-sm-3 col d-flex align-items-strerch py-2"
              >
                <Fade>
                  <Card key={index} className="h-100">
                    <CardImg
                      top
                      width="100%"
                      src={chair.img}
                      alt="Card image cap"
                      height="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">
                        <Link className="link" to={`/product/${chair.id}`}>
                          {chair.name}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Product;
