import React from "react";
import "./Storage.css";
import Apis from "./Apis";

const Storage = (props) => {

const apis = [
  {
    id: 1,
    method: "GET",
    name: "Brands",
    url: "https://domain.com/api/v1/endpoint/",
  },
  {
    id: 2,
    method: "POST",
    name: "Answers",
    url: "https://domain.com/api/v1/endpoint/",
  },
  {
    id: 3,
    method: "PUT",
    name: "New Brands",
    url: "https://domain.com/api/v1/endpoint/",
  },
  {
    id: 4,
    method: "DELETE",
    name: "Old Brands",
    url: "https://domain.com/api/v1/endpoint",
  },
  {
    id: 5,
    method: "PATCH",
    name: "Update Answers",
    url: "https://domain.com/api/v1/endpoint/",
  },
];

const ApisList = apis.map((api) => {
  return (
    <Apis
      key={api.id}
      method={api.method}
      name={api.name}
      url={api.url}
      onRequestAPI={props.onRequest}
    />
  );
});

const RequestHandler = () => {
  props.onRequest(true);}

  return (
    <div className="Storage-container">
      <section className="Button-section">
        <button className="Button-primary" onClick={RequestHandler}>New Request</button>
      </section>
      <section className="Apis-section">
      {ApisList}
      </section>
    </div>
  );
};

export default Storage;
