import React, { useState } from "react";
import "./Requestx.css";
import Result from "./Result";
import Query from "./Query";
import { TbApi } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Requestx = (props) => {

  const [Resultx, setResultx] = useState(false);

  const ResultxHandler = (bool) => {
    setResultx(bool);
  };

const RequestHandler = () => {
  props.onRequest(false);
};


  return (
    <div className="Request-container">
      <section className="High-Tabs">
        <TbApi className="icon-api" />
        <span>New Request</span>
        <IoClose className="icon-close" onClick={RequestHandler} />
      </section>
      <div className="Request-sections">
        <Query onResult={ResultxHandler} />
        {Resultx ? <Result /> : null}
      </div>
    </div>
  );
};

export default Requestx;
