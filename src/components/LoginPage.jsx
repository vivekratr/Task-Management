import React from "react";
import Header from "./header";
import Partition from "./Partition";
import "./css/LoginPage.css"

function LoginLeftt(){

    return (
    <div> <div className="googleFacebook">
    <div className="loginLogo">
      <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557542571016343/image.png" alt="google" />
      <p>Sign in with Google</p>
    </div>
  
    <div className="loginLogo facebookLogo">
      <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557898134749286/image.png" alt="facebook" />
      <p>Sign in with Facebook</p>
    </div>
  </div>
  
  <p className="loginOR">--OR--</p>
  
  <form className="loginForm">
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Password"/>
      <button type="submit">Login</button>
      <label> Back to Signup <span className="loginLabel"> <a href="/">Register</a> </span></label>
      
  </form></div>
  )}



  function LoginPage(props) {
    return (
      <div>
      <Header />
      <Partition code=  {LoginLeftt()} imgURL= "https://cdn.discordapp.com/attachments/1147548909296689282/1147556230622105721/image.png"  /></div>
    );
  }
  

  export default LoginPage;