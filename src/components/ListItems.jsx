import React,{useState} from "react";
import "./css/ListItem.css";
import Header from "./header";


function ListItems() {

  const[elements,setElement]=useState({first:"",second:"",third:""})
  


  function handleChange(event){
     const{value,name}=event.target;
       setElement((prevValue)=>{
        return {
            ...prevValue,
            [name]:value
        }
       })
            
  }
  return(
  <div className="mainDiv">
    <div className="leftDiv">
        <Header/>
      <h1>List Your Tasks</h1>
      <input onChange={handleChange} name="first" type="text" value={elements.first}/>
      <input onChange={handleChange} name="second" type="text" value={elements.second}/>
      <input onChange={handleChange} name="third" type="text" value={elements.third}/>
    </div>
    <div className="rightDiv">
        <table>
            <thead>
                <th>d</th>
                <th>d</th>
                <th>d</th>
            </thead>
            <tbody>
                <tr>
                    <td>{elements.first}</td>
                    <td>d</td>
                    <td>d</td>
                </tr>
                <tr>
                    <td>{elements.second}</td>
                    <td>d</td>
                    <td>d</td>
                </tr>
                <tr>
                    <td>{elements.third}</td>
                    <td>d</td>
                    <td>d</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
  )
}


export default ListItems;