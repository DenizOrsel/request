import React from "react";
import "./Content.css";
import Storage from "./Storage";
import Request from "./Request";
import Result from './Result'

const Content = () => {
  return (
    <div className="Content-container">
      <Storage />
      <Request />
      <Result />
    </div>
  );
};

export default Content;
