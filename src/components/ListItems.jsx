import React, { useState } from "react";
import "./css/ListItem.css";
import Header from "./header";
import { useLocation } from "react-router-dom";
import obj1,{obj,arr} from "./data.jsx";

function ListItems() {
  const [elements, setElement] = useState({ 1: "Task 1", 2: "Task 2", 3: "Task 3" });
  const [currentIndex, setCurrentIndex] = useState(3);
    const elementIndex =[ "1", "2", "3"]
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

  function handleAddItem(event) {
    event.preventDefault();
    setCurrentIndex((prevValue) => prevValue + 1);
    setElement((prevValue) => {
      return {
        ...prevValue,
        [currentIndex]: "",
      };
    });
  }

  return (
    <div className="mainDivList">
      <div className="leftDiv">
        <Header />
        <h1 style={{marginLeft:"6rem"}}>List Your Tasks</h1>
        <input
          className="listInput"
          onChange={handleChange}
          name="1"
          maxLength={18}
          placeholder="Task 1"
          type="text"
          value={elements.first}
        />
        <input
          className="listInput"
          maxLength={18}
          placeholder="Task 2"

          onChange={handleChange}
          name="2"
          type="text"
          value={elements.second}
        />
        <input
          className="listInput"
          maxLength={18}
          placeholder="Task 3"

          onChange={handleChange}
          name="3"
          type="text"
          value={elements.third}
        />

{/* add item button */}
        <div className="listAddTask">
        <button onClick={handleAddItem} type="button" class="list_button">
  <span class="list_button__text">Add Item</span>
  <span class="list_button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
        </div>

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
