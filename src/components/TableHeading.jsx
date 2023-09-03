import React from "react";
import Header from "./header";
import TableCol from "./TableCol";
import "./css/TableHeading.css";
import { useState } from "react";

function TableHeading() {
    const [selected, setSelected] = useState(""); 
  const arr = [
    "Owner",
    "Due Date",
    "Status",
    "Notes",
    "Priority",
    "Files",
    "Last Updated",
   
  ];
  const obj= {"Owner": "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
  "Due Date": "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
  "Status": "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
  "Notes": "Jot down all your important notes to keep your work in context and up-to-date.",
  "Priority": "Keep track of your progress by focusing on what matters so you can reach your milestones.",
  "Files": "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
  "Last Updated": "Easily see in one glance when and by who your work was last updated.",
  };

  function handleHover(e){
    setSelected(e);
  }

  return (
    <div className="mainDiv">
      <Header />
      <h2>Let's Select the relevant column for your board</h2>
      <h4>Choose from the most popular column types for your work</h4>

      <div className="tableElem">
        {arr.map((name) => {
          return <TableCol func={handleHover} elem={name} />;
        })}
      </div>

      <p className="elemDetail">
        {obj[selected]}
      </p>

      <div className="downButtons">
        <div className="backButton">
          <button type="submit">Back</button>
        </div>
        <div className="nextButton">
          <button  type="submit" >Next</button>
        </div>
      </div>
    </div>
  );
}

export default TableHeading;
