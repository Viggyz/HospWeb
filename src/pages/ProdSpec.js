import React from "react";
import { chairs } from "../data";
import Error from "./Error";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function ProdSpec(id) {
  const chid = id.match.params.id;
  let ch = chairs.find((chair) => chair.id === parseInt(chid));
  if (ch) {
    return (
      <div>
        <Button tag={Link} to="/product" className="back">
          <i class="fas fa-arrow-circle-left"></i> Back
        </Button>
        <h1 className="display-4">{ch.name}</h1>
        <img
          src={ch.img}
          alt="chair"
          className="img-fluid"
          width="300vw"
          height="300vh"
        />
      </div>
    );
  } else {
    return <Error />;
  }
}

export default ProdSpec;
