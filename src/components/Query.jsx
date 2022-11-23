import React from "react";
import "./Query.css";
import InputForm from "./InputForm";
import QueryForm from "./QueryForm";

const Query = (props) => {
  return (
    <div className="Query-container">
      <section className="Request-actions">
        <InputForm onResult={props.onResult} />
      </section>
      <ul className="Request-tab">
        <li className="Request-tab-item Request-tab-item-active">Query</li>
        <li className="Request-tab-item">Headers</li>
        <li className="Request-tab-item">Body (json)</li>
      </ul>
      <h4 className="Request-title">Query Parameters</h4>
      <section className="Request-actions">
        <QueryForm />
      </section>
    </div>
  );
};

export default Query;

//  <button className="Button-danger">Delete</button>
