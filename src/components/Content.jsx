import React from "react";
import { useState } from "react";
import "./Content.css";
import Storage from "./Storage";
import Requestx from "./Requestx";

const Content = () => {
  const [Request, setRequest] = useState(false);

  const RequestHandler = (bool) => {
    setRequest(bool);
  };

  return (
    <div className="Content-container">
      <Storage onRequest={RequestHandler} />
      {Request ? <Requestx onRequest={RequestHandler} /> :  null}
    </div>
  );
};

export default Content;
