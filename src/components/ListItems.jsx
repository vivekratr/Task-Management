import React, { useState } from "react";
import "./css/ListItem.css";
import Header from "./header";
import { useLocation } from "react-router-dom";
import obj1,{obj,arr} from "./data.jsx";

function ListItems() {
  const [elements, setElement] = useState({ first: "Task 1", second: "Task 2", third: "Task 3" });
    const elementIndex =[ "first", "second", "third"]
  const location = useLocation();
  const { selectedCol } = location.state;
  console.log(selectedCol);
  const newSelectedCol = ["Task Name", ...selectedCol];
  function handleChange(event) {
    const { value, name } = event.target;
    setElement((prevValue) => {
      return {
        ...prevValue,
       [ name]: value,
      };
    });
  }
  return (
    <div className="mainDivList">
      <div className="leftDiv">
        <Header />
        <h1>List Your Tasks</h1>
        <input
          className="listInput"
          onChange={handleChange}
          name="first"
          maxLength={18}

          type="text"
          value={elements.first}
        />
        <input
          className="listInput"
          maxLength={18}

          onChange={handleChange}
          name="second"
          type="text"
          value={elements.second}
        />
        <input
          className="listInput"
          maxLength={18}

          onChange={handleChange}
          name="third"
          type="text"
          value={elements.third}
        />

        <div className="listButtons">


        </div>
      </div>
      <div className="mainDiv2">

<div className="preTable">
  <div className="preTablein">
    <h2>Task Management</h2>
{selectedCol.length > 0 ? (
<table className="mainTable">

<tr>
{newSelectedCol.map((name) => {
  return <th>{name}</th>;
})}
</tr>



{obj1[selectedCol[0]].map((_, rowIndex) => (
<tr>
<td >{elements[elementIndex[rowIndex]]}</td>

  {selectedCol.map((columnName) => (
    <td style={{margin:"auto"}} key={columnName}>
      {obj1[columnName][rowIndex]}
    </td>
  ))}
</tr>
))}
</table>
) : (
<p>No columns selected.</p>
)}</div>
</div>
</div>
    </div>
  );
}

export default ListItems;
