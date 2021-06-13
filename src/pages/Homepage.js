import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Main from "../images/med_main.svg";
import Plan from "../images/careplan.svg";

//ONLY USE YARN

//maybe put image on the left and text right?

function Homepage() {
  return (
    <>
      <Container fluid={true}>
        <Row className="pb-2">
          <Col sm="12" md="6" className="home p-2 mx-auto">
            <img src={Main} alt="doctors" width="90%" height="90%" />
          </Col>
          <Col sm="12" md="6" className="home my-auto mx-auto">
            <h1>Book your appointment today</h1>
            <h5 className="text-muted p-1">
              Get your vaccine from the area nearest to you with dates assigned
              at the earliest. Our experts will guide you.
            </h5>
            <Button color="success">Get Started</Button>
          </Col>
        </Row>
      </Container>
      <div style={{ padding: "0px" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-0.94,113.65 C150.00,150.00 335.40,34.70 502.45,112.66 L500.00,150.00 L0.00,150.00 Z"
            style={{
              fill: "#e84545",
              width: "100vw",
            }}
          ></path>
        </svg>
      </div>
      <Container>
        <Row className="px-3 info">
          {/*Put ID here so get started button can go here*/}
          <Col sm="12" md="6" className="d1 p-2">
            <h3>Who we are</h3>
            <h1>Three decades of pioneering healthcare in the region</h1>
            <p>
              Welcome to the WeCare Dubai. We are a thriving regional
              independent healthcare provider, serving both the local and
              international communities residing in the UAE by providing
              personalized, attentive care in a state-of-the-art facility and
              world-class medical techniques that enable us to offer the very
              best care for our patients. Our strategic objective is to ensure
              excellence in all healthcare services for our patients and the
              community and work hand in hand with other public and private
              hospitals to promote the Emirates and Dubai as a globally
              recognized destination for healthcare.
            </p>
            <Button className="text-white more">
              Continue Reading <span className="fas fa-arrow-right"></span>
            </Button>
          </Col>
          <Col sm="12" md="6" className="d2 p-4">
            <h3>2998 Doctors</h3>
            <h3>25 Hospitals</h3>
            <h3>8 Countries</h3>
            <h3>20790 Employees</h3>
            <h3>116 clinics</h3>
            <h3>236 Pharmacies</h3>
          </Col>
        </Row>
      </Container>
      <div style={{ padding: "0px" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-0.37,12.99 C87.09,104.76 271.49,-49.99 503.57,38.65 L500.00,0.00 L0.00,0.00 Z"
            style={{
              fill: "#e84545",
              width: "100vw",
            }}
          ></path>
        </svg>
      </div>
      <Container>
        <Row className="ms-2">
          <Col sm="12" md="6">
            <h1>Helping You Access Quality Care</h1>
            <p className="my-4">
              To ensure high quality services, we provide transparent price
              information and accept a range of insurance programs, health
              plans, and offer financial assistance programs.
            </p>
            <Button className="text-white">View Plans</Button>
          </Col>
          <Col sm="12" md="6" className="p-2">
            <img src={Plan} alt="doctors" width="90%" height="90%" />
          </Col>
        </Row>
        <Row className="pt-2 mt-2">
          <Col className="testcol p-3">
            <h3 className="mb-4">Testimonials</h3>
            <Container>
              <Row className="py-4">
                <Col sm="12" md="6">
                  <p>
                    I am very happy and satisfied with Capsule! It has allowed
                    our clinic to offer the quality and efficient service we aim
                    to give to our clients. I have come across many other
                    Medical systems but nothing beats Tendercare
                  </p>
                  <h5>Dr. Placeholder</h5>
                </Col>
                <Col sm="12" md="6" className="testimg">
                  <i className="fas fa-feather fa-5x"></i>
                </Col>
              </Row>
              <Row className="py-4 justify-content-end">
                <Col sm="12" md="6" className="testimg">
                  <i className="fas fa-horse-head fa-5x"></i>
                </Col>
                <Col sm="12" md="6">
                  <p>
                    We really love the new site and branding. I think it will
                    look more sophisticated and very alive... I definitely love
                    the fresh vibe from that greenery. Looking great!! Well
                    done.
                  </p>
                  <h5>Ms. Gaby</h5>
                </Col>
              </Row>
              <Row className="py-4">
                <Col sm="12" md="6">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <h5>Mr. Lorem</h5>
                </Col>
                <Col sm="12" md="6" className="testimg">
                  <i className="fas fa-dove fa-5x mt-2"></i>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
