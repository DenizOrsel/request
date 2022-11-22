import React from "react";
import { useState } from "react";
import "./Content.css";
import Storage from "./Storage";
import Requestx from "./Requestx";

const Content = () => {
  const [Request, setRequest] = useState(false);

  const RequestHandler = () => {
    setRequest(true);
  };

  return (
    <div className="Content-container">
      <Storage onRequest={RequestHandler} />
      {Request ? <Requestx /> :  null}
    </div>
  );
};

export default Content;
