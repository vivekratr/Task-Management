import React from "react";
import Partition from "./Partition";
import Header from "./header";
import "./css/wru.css";
import { useState } from "react";






function CodeHere() {

  const [click,Setclick]= useState(true)
  const [click2,Setclick2]= useState(true)

  function handleChange(){
     if(click===true){
      Setclick(false);
      Setclick2(true);

     }else{
      Setclick(true);
   
     }
  }

  function handleChange1(){
    if(click2===true){
     Setclick2(false);
     Setclick(true);
    }else{
     Setclick2(true);
        
    }
 }

  return (
    <div className="wruMainDiv">
            <Header />
    <div className="wruSubDiv">
      <h3>You are?</h3>
      <div className="radioButton">
        <button style={{ border : click ? "2.5px white" : "2.5px solid blue" }} type="submit" onClick={handleChange}><img className="watchPNG" src="https://cdn.discordapp.com/attachments/1147548909296689282/1147811379592581171/image.png" alt="watch" />Student</button>
        <button style={{ border : click2 ? "2.5px white" : "2.5px solid blue" }} type="submit" onClick={handleChange1}><img className="watchPNG" src="https://cdn.discordapp.com/attachments/1147548909296689282/1147811379592581171/image.png" alt="watch" /> Working Professional</button>
      </div>
     </div>
      <button type="submit">
        <img className="nextButton"
          src="https://cdn.discordapp.com/attachments/1147548909296689282/1147801091208138803/image.png"
          alt="arrow"
        />
      </button>
    </div>
  );
}

function WRU() {
  return (
    <div>

    <Partition
      code={CodeHere()}
      imgURL={
        "https://cdn.discordapp.com/attachments/1147548909296689282/1147786955636092968/image.png"
      }
    />
 </div> 
 );
}

export default WRU;
