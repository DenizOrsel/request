import React from "react";
import "./Apis.css";
import { HiArrowSmRight } from "react-icons/hi";

const Apis = (props) => {
  return (
    <div className="API-container" onClick={props.onRequestAPI}>
      <section className="API-section">
        <span className={props.method}>{props.method}</span>
        <span className="name">{props.name}</span>
        <span className="url">{props.url}</span>
        <span className="menu-ellipsis"><HiArrowSmRight /></span>
      </section>
    </div>
  );
};

export default Apis;
