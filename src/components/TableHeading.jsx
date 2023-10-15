import React from "react";
import Header from "./header";
import TableCol from "./TableCol";
import { useState } from "react";
import "./css/TableHeading.css";
import { useNavigate } from "react-router-dom";

// import "../input.css"



function TableHeading() {
   const Navigate = useNavigate();
    const [selected, setSelected] = useState(""); //used for column description
    const [selectedCol, setSelectedCol] = useState([]); //used for column names
    // const [selectedColData, setSelectedColData] = useState([]); 

 
  function handleHover(e){
    setSelected(e);
    setSelectedCol((prev)=>{
      return [...prev, e];
    })
    // setSelectedColData(()=>{
    //   const temp = []
    //   for (let i = 0; i < selectedCol.length; i++) {
    //     const name = selectedCol[i];
    //     temp.push(obj1[name][i]);
    //   }
    // })
  }

  const arr = [
    "Owner",
    "Due Date",
    "Status",
    "Notes",
    "Priority",
    "Files",
    "Last Updated",
   
  ];
 const obj = {"Owner": "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
  "Due Date": "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
  "Status": "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
  "Notes": "Jot down all your important notes to keep your work in context and up-to-date.",
  "Priority": "Keep track of your progress by focusing on what matters so you can reach your milestones.",
  "Files": "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
  "Last Updated": "Easily see in one glance when and by who your work was last updated.",
  };



  const obj1 ={
    "Owner": ["Owner 1","Owner 2","Owner 3"],
    "Due Date": ["12-09-23","12-10-23","12-11-23"],
    "Status": ["Ongoing","Todo","Done"],
    "Notes": ["Strategy","Market analysis","Product design"],
    "Priority": ["High","Medium","Low"],
    "Files": ["Project file","Employee details","Product design file"],
    "Last Updated": ["12-09-23","12-10-23","12-11-23"],
    
  }


  return (
    <div className="superMainDiv">
    <div className="mainDiv">
      <Header />
      <h2>Let's Select the relevant column for your board</h2>
      <h4>Choose from the most popular column types for your work</h4>

      <div className="tableElem">
        {arr.map((name) => {
          return <TableCol func={handleHover} elem={name} func1={setSelectedCol} />;
        })}
      </div>

      <p className="elemDetail">
        {obj[selected]}
      </p>

      <div className="downButtons">
        <div className="backButton">
          <button className="" onClick={()=>{
             Navigate(-1)
          }} type="submit">Back</button>
        </div>
        <div className="nextButton">
          <button  onClick={()=>{
            const temp = {
            selectedCol:selectedCol,
            }
            Navigate("/list", {state:temp})
          }} type="submit" >Next</button>
        </div>
      </div>
    </div>

        <div className="mainDiv2">

          <div className="preTable">
            <div className="preTablein">
              <h2>Task Management</h2>
        {selectedCol.length > 0 ? (
    <table className="mainTable">

        <tr>
          {selectedCol.map((name) => {
            return <th>{name}</th>;
          })}
        </tr>
        {obj1[selectedCol[0]].map((_, rowIndex) => (
          <tr>
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

export default TableHeading;



