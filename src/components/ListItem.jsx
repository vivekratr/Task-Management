import React from "react";


export default  ListItem = (props) => {
  return (
    <div className="list-item">
      <div className="list-item__title">{props.title}</div>
      <div className="list-item__description">{props.description}</div>
    </div>
  );
}