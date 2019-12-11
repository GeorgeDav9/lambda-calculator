import React from "react";

const SpecialButton = (props) => {
  console.log(props);
  return (
    <div className = "btn btn-special ">
      <button>
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default SpecialButton;