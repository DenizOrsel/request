import React from "react";
import "./Requestx.css";
import Result from "./Result";
import Query from "./Query";

const Requestx = () => {
  return <div className="Request-container">
    <section className="High-Tabs">RequestTABs</section>
    <div className="Request-sections">
      <Query />
      <Result />
    </div>
  </div>;
};

export default Requestx;
