import React from 'react'
import './QueryForm.css'

const QueryForm = () => {
  return (
    <>
      <form className="query-form-container">
        <input type="text" placeholder="parameter" />
        <input type="text" placeholder="value" />
      </form>
    </>
  );
}

export default QueryForm