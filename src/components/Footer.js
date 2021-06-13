import React from "react";
import { Nav, NavLink, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container className="footer" fluid="true">
      <Row>
        <div className="col-lg-6 col-sm-12 footcol">
          <div className="container">
            <h1 className="fas fa-heartbeat fa-2x">WeCare</h1>
            <Nav vertical>
              <NavLink tag={Link} to="/" className="footlink">
                Home
              </NavLink>
              <NavLink tag={Link} to="/about" className="footlink">
                About
              </NavLink>
              <NavLink tag={Link} to="/product" className="footlink">
                Product
              </NavLink>
            </Nav>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 footcol">
          <h2>Contact</h2>
          <a href="mailto:viggy@doesnt.com" className="mail">
            doesntexist@mail.com
          </a>
          <p>+54 1234567</p>
          <p>
            <a href="#" className="fab fa-linkedin fa-lg"></a>
            <a href="#" className="fab fa-facebook-square fa-lg"></a>
            <a href="#" className="fab fa-twitter-square fa-lg"></a>
            <a href="#" className="fab fa-instagram-square fa-lg"></a>
          </p>
        </div>
      </Row>
    </Container>
  );
}
