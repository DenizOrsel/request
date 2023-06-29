import React from 'react'
import './InputForm.css'

const InputForm = (props) => {

const ResultHandler = () => {
  props.onResult(true);
};


  return (
    <>
      <form className="form-container">
        <select id="methods" name="apimethods">
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="patch">PATCH</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <input type="text" placeholder="Enter Url" />
        <input type="button" value="Save & Send" onClick={ResultHandler} />
      </form>
    </>
  );
}

export default InputForm