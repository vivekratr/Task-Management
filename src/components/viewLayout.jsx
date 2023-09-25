import React, { useState } from "react";
import Header from "./header.jsx";
import "./css/viewLayout.css"



function ViewLayout() {

 


    const [click,Setclick]= useState(true)
    const [click2,Setclick2]= useState(true)
  
    function handleChange(){
       if(click){
        Setclick(false);
        Setclick2(true);
  
       }else{
        Setclick(true);
     
       }
    }
  
    function handleChange1(){
      if(click2){
       Setclick2(false);
       Setclick(true);
      }else{
       Setclick2(true);
          
      }
   }

    /* 
    cosnt [customStyle,setcustomStyle] = useState({});
    cosnt [customStyle2,setcustomStyle2] = useState({});

    function handleClieck(event){
        const name = event.target.name;

        if(name==="table"){
            
        }
    }
        
    }
    */
   
   
  return (
    <div className="firstDiv">
      <div className="heading">
        <Header />
      </div>
      <div>
        <h1>Add a view Layout</h1>
        <p>Transform the way you see and manage your work with some more unique view. You can add some more later</p>
        <div>
            <button onClick={handleChange} style={{ border : click ? "2.5px white" : "2.5px solid black" }}  name="table" >Table</button>
            <button onClick={handleChange1} style={{ border : click2 ? "2.5px white" : "2.5px solid black" }} name="kanban">Kanban </button>
        </div>
      </div>
    </div>
  );
}

export default ViewLayout;
