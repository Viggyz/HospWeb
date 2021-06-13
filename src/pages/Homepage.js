import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Fade, Slide } from "react-reveal";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import Main from "../images/med_main.svg";
import Plan from "../images/careplan.svg";

//ONLY USE YARN

//maybe put image on the left and text right?

function Homepage() {
  const { docs, hosps, counts, emps, clins, pharms } = useSpring({
    reset: true,
    from: { docs: 0, hosps: 0, counts: 0, emps: 0, clins: 0, pharms: 0 },
    docs: 2998,
    hosps: 25,
    counts: 8,
    emps: 20790,
    clins: 116,
    pharms: 236,
    delay: 1000,
  });
  return (
    <>
      <Container fluid={true}>
        <Row className="pb-2">
          <Col sm="12" md="6" className="home p-2 mx-auto">
            <Slide bottom>
              <img src={Main} alt="doctors" width="90%" height="90%" />
            </Slide>
          </Col>
          <Col sm="12" md="6" className="home my-auto mx-auto">
            <Slide bottom>
              <h1>Book your appointment today</h1>
              <h5 className="text-muted p-1">
                Get your vaccine from the area nearest to you with dates
                assigned at the earliest. Our experts will guide you.
              </h5>
              <Button color="success">Get Started</Button>
            </Slide>
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
            <Fade bottom>
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
            </Fade>
            <Button className="text-white more">
              Continue Reading <span className="fas fa-arrow-right"></span>
            </Button>
          </Col>
          <Col sm="12" md="6" className="d2 p-4">
            <h3>
              <animated.div>
                {docs.to((n) => n.toFixed(0) + "+ Doctors")}
              </animated.div>
            </h3>
            <h3>
              <animated.div>
                {hosps.to((n) => n.toFixed(0) + " Hospitals")}
              </animated.div>
            </h3>
            <h3>
              <animated.div>
                {counts.to((n) => n.toFixed(0) + " Countries")}
              </animated.div>
            </h3>
            <h3>
              <animated.div>
                {emps.to((n) => n.toFixed(0) + " Employees")}
              </animated.div>
            </h3>
            <h3>
              <animated.div>
                {clins.to((n) => n.toFixed(0) + " Clinics")}
              </animated.div>
            </h3>
            <h3>
              <animated.div>
                {pharms.to((n) => n.toFixed(0) + " Pharmacies")}
              </animated.div>
            </h3>
          </Col>
        </Row>
      </Container>
      <div style={{ padding: "0px" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-5.45,36.68 C129.98,107.73 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{
              fill: "#e84545",
              width: "100vw",
            }}
          ></path>
        </svg>
      </div>
      <Container>
        <Row className="ms-2">
          <Col sm="12" md="6" className="my-5">
            <Fade bottom>
              <h1>Helping You Access Quality Care</h1>
              <p className="my-4">
                To ensure high quality services, we provide transparent price
                information and accept a range of insurance programs, health
                plans, and offer financial assistance programs.
              </p>
              <Button className="text-white">View Plans</Button>
            </Fade>
          </Col>
          <Col sm="12" md="6" className="p-2">
            <Slide right>
              <img src={Plan} alt="doctors" width="90%" height="90%" />
            </Slide>
          </Col>
        </Row>
        <Row className="pt-2 mt-2">
          <Col className="testcol p-3">
            <Fade top>
              <h3 className="mb-4">Testimonials</h3>
            </Fade>
            <Container>
              <Row className="py-5">
                <Col sm="12" md="6">
                  <Fade left>
                    <blockquote className="blockqote">
                      <p>
                        I am very happy and satisfied with Capsule! It has
                        allowed our clinic to offer the quality and efficient
                        service we aim to give to our clients. I have come
                        across many other Medical systems but nothing beats
                        WeCare.
                      </p>
                      <footer className="blockquote-footer">
                        <h6 className="lead text-white">Dr. Placeholder</h6>
                      </footer>
                    </blockquote>
                  </Fade>
                </Col>
                <Col sm="12" md="6" className="testimg mb-3">
                  <Fade left>
                    <i className="fas fa-feather fa-5x"></i>
                  </Fade>
                </Col>
              </Row>
              <hr />
              <Row className="py-5 justify-content-end">
                <Fade right>
                  <Col sm="12" md="6" className="testimg">
                    <i className="fas fa-horse-head fa-5x"></i>
                  </Col>
                </Fade>
                <Col sm="12" md="6">
                  <Fade right>
                    <blockquote className="blockqote">
                      <p>
                        We really love the new site and branding. I think it
                        will look more sophisticated and very alive... I
                        definitely love the fresh vibe from that greenery.
                        Looking great!! Well done.
                      </p>
                      <footer className="blockquote-footer">
                        <h6 className="lead text-white">Ms. Gaby</h6>
                      </footer>
                    </blockquote>
                  </Fade>
                </Col>
              </Row>
              <hr />
              <Row className="py-5">
                <Col sm="12" md="6">
                  <Fade left>
                    <blockquote className="blockqote">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <footer className="blockquote-footer">
                        <h6 className="lead text-white">Mr. Lorem</h6>
                      </footer>
                    </blockquote>
                  </Fade>
                </Col>
                <Col sm="12" md="6" className="testimg">
                  <Fade left>
                    <i className="fas fa-dove fa-5x mt-2"></i>
                  </Fade>
                </Col>
                <a className="link2" href="#here" id="here">
                  <h5>
                    See More <i className="fas fa-arrow-circle-right"></i>
                  </h5>
                </a>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
