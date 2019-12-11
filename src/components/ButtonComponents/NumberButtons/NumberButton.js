import React from "react";

const NumberButton = (props) => {
  console.log(props);

  return (
    <div className = {`btn  btn-number ${props === '0' ? 'double' : '' }`}>
    <button onClick = {() => props.addNumber(props.text)}>
      {props.text}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;
