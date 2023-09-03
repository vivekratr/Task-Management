import React from "react";
import { useState } from "react";

function TableCol(props) {
  const [bool, setBool] = useState(false);
  const [hover, setHover] = useState(false);

  function handleClick() {
    props.func(props.elem);
    setBool((prev) => {
      return !prev;
    });
  }

  function handleHover() {
    setHover(true);
  }

  function handleHoverOut() {
    setHover(false);
  }

  return (
    <div onMouseOut={handleHoverOut}
      onMouseOver={handleHover}>
    <div
      style={{
        borderColor: bool ? "green" : "lightgrey",
        background: hover ? "lightgrey" : "white",
       
      }}
      
      onClick={handleClick}
    //   onMouseOver={() => {
    //     props.func(props.elem);
    //   }}
      className="tableComponent"
    >
      <p >{props.elem}</p>
    </div></div>
  );
}

export default TableCol;
