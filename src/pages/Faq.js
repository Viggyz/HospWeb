import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Fade } from "react-reveal";
import { useState } from "react";

function Faq() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container faq p-5">
        <div className="row">
          <Fade top>
            <h3 className="display-6 text-white">
              Answers to some of your most important Q’s
            </h3>
            <h6 className="lead text-white">
              There are a lot of moving pieces to this thing, so let's take it
              one baby-step at a time.
            </h6>
          </Fade>
          <Accordion defaultActiveKey="">
            <Card className="head">
              <Card.Header className="head" style={{ cursor: "pointer" }}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  onClick={() => setOpen((open) => !open)}
                >
                  <h3>
                    {open ? (
                      <span className="fas fa-times" />
                    ) : (
                      <span className="fas fa-plus" />
                    )}{" "}
                    What are the services offered at WeCare?
                  </h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>
                    Anaesthesiology, Breast Care, Cardiology, Dermatology,
                    Emergency, Medicine Ear, Nose, Throat, Family Medicine,
                    Gastroenterology, General Practice and General Surgery
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <h3>Is my insurance network covered at WeCare?</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>
                    We have a dedicated call centre at the hospital who would be
                    happy to take you through understanding your Insurance
                    provider and the network covered at the hospital.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <h3>Can I request an appointment online?</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Yes! You most certainly may</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <h3> Do you work on the weekends?</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>
                    WeCare is open for your care and needs throughout the week
                    including Fridays.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <h3> What are the operating hours for Customer Care</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p>Open 24 hours all days</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <h3> Where do we contact for customer feedback</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p>
                    You can also email us at{" "}
                    <a
                      href="mailto:doesexits@mailto.com"
                      style={{ color: "#903749" }}
                    >
                      doesexits@mailto.com
                    </a>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="head">
              <Card.Header className="head">
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <h3> How can I get a Health Card?</h3>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  You can create Patient ID or Health Card Number by logging
                  into our online portal.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
