import React from "react";
import { useParams } from "react-router-dom";

function City() {
  const { ville } = useParams();
  return <div className="container">{ville}</div>;
}

export default City;
