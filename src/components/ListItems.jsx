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
                <th></th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
  )
}


export default ListItems;