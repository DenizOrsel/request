import React from "react";
import "./Result.css";

const Result = () => {
  return (
    <div className="Result-container">
      <section className="Result-info">
        <span>Response Status:</span>
        <span className="green">200 OK</span>
        <span>Size:</span>
        <span className="green">499 Bytes</span>
        <span>Time:</span>
        <span className="green">166 ms</span>
      </section>
      <section className="Result-body">
        <pre>
          <code>
            {`{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default Result;
