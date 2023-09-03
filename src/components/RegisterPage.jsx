import React from "react";
import Partition from "./Partition";
import Header from "./header";


function RegisterLeftt(){

  return (
  
  <div>  <div className="googleFacebook">
  <div className="loginLogo">
    <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557542571016343/image.png" alt="google" />
    <p>Sign up with Google</p>
  </div>

  <div className="loginLogo facebookLogo">
    <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557898134749286/image.png" alt="facebook" />
    <p>Sign up with Facebook</p>
  </div>
</div>

<p className="loginOR">--OR--</p>

<form className="loginForm">
    <input type="text" placeholder="Full Name"/>
    <input type="text" placeholder="Email"/>
    <input type="text" placeholder="Passward"/>
    <button type="submit">Create Account</button>
    <label>Already have an account? <span className="loginLabel"> <a href="/login" > Login </a></span></label>
    
</form></div>)
}

function RegisterPage(props) {

 

  return (
    <div>
    <Header />
    <Partition code=  {RegisterLeftt()} imgURL= "https://cdn.discordapp.com/attachments/1147548909296689282/1147556230622105721/image.png"  /></div>
  );
}

export default RegisterPage;
