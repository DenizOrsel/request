import React from "react";
import "./Storage.css";
import Apis from "./Apis";

const Storage = (props) => {

const apis = [
  {
    id: 1,
    method: "GET",
    url: "https://domain.com/api/v1/endpoint/c323ed3c3qc344qv4qfafg4avaadsdva4v4a",
  },
  {
    id: 2,
    method: "POST",
    url: "https://domain.com/api/v1/endpoint/c323ed3c3qc344qv4qfafg4avaadsdva4v4a",
  },
  {
    id: 3,
    method: "PUT",
    url: "https://domain.com/api/v1/endpoint/c323ed3c3qc344qv4qfafg4avaadsdva4v4a",
  },
  {
    id: 4,
    method: "DELETE",
    url: "https://domain.com/api/v1/endpoint/c323ed3c3qc344qv4qfafg4avaadsdva4v4a",
  },
  {
    id: 5,
    method: "PATCH",
    url: "https://domain.com/api/v1/endpoint/c323ed3c3qc344qv4qfafg4avaadsdva4v4a",
  },
];

const ApisList = apis.map((api) => {
  return (
    <Apis
      key={api.id}
      method={api.method}
      url={api.url}
      onRequestAPI={props.onRequest}
    />
  );
});


  return (
    <div className="Storage-container">
      <section className="Button-section">
        <button className="Button-primary" onClick={props.onRequest}>New Request</button>
      </section>
      <section className="Apis-section">
      {ApisList}
      </section>
    </div>
  );
};

export default Storage;
