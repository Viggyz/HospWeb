import React from "react";
import { Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
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
        <div class="col-lg-6 col-sm-12 footcol">
          <h2>Contact</h2>
          <a href="mailto:viggy@doesnt.com" className="mail">
            viggy@doesntexist.com
          </a>
          <p>+54 1234567</p>
          <p>
            <a href="#" class="fab fa-linkedin fa-lg"></a>
            <a href="#" class="fab fa-facebook-square fa-lg"></a>
            <a href="#" class="fab fa-twitter-square fa-lg"></a>
            <a href="#" class="fab fa-instagram-square fa-lg"></a>
          </p>
        </div>
      </div>
    </div>
  );
}
