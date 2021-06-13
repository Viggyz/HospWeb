import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink,
  Nav,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let CheckFade = ({ children }) => {
    if (isOpen) return <Fade bottom>{children}</Fade>;
    else return <>{children}</>;
  };
  useEffect(() => {
    CheckFade = ({ children }) => {
      if (!isOpen) return <Fade bottom>{children}</Fade>;
      else return <>{children}</>;
    };
  }, [isOpen]);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="header">
        <Navbar color="light" expand="md" light className="fixed-top ">
          <div className="container-fluid">
            <NavbarBrand tag={Link} to="/" className="col">
              <h3 className="fas fa-heartbeat fa-lg"> WeCare</h3>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end">
              <Nav navbar className="and">
                <CheckFade>
                  <NavItem>
                    <NavLink tag={Link} to="/" className="headlink">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/faq" className="headlink">
                      FAQ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/product" className="headlink">
                      Product
                    </NavLink>
                  </NavItem>
                </CheckFade>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
