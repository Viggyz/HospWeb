import React from "react";
import Img from "../images/lost.svg";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container ">
      <div className="row error">
        <h3>Looks like you're lost, let us help you</h3>
        <img src={Img} alt="404 not found" width="200vw" height="300vh" />
        <NavLink tag={Link} to="/" className="error-btn text-white">
          Go back Home
        </NavLink>
      </div>
    </div>
  );
}
