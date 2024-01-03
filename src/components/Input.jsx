import React from "react";

function Input({ lable, id, type }) {
  return (
    <>
      <label htmlFor={id}>{lable}</label>
      <input required name={id} id={id} type={type} />
    </>
  );
}

export default Input;
