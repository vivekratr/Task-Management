import React from "react";
import Header from "./header";
import Partition from "./Partition";
import "./css/LoginPage.css"
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";



function LoginLeftt(){
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

 async function handleLogin(e) {
  e.preventDefault();
  console.log("ass",formData);
  await axios({
    method: 'post',
    url: 'http://localhost:3001/login',
    data: formData,
  }) .then(function(response) {
      console.log(response);
      if(response.data.login ===0){
        alert("User do not exist");
      }
      else{
        if (response.data.login ===1) {
          alert("Login Successfully");
          Navigate("/home")
        }
        else{
        
        alert("Wrong Password");
        }
      }});

  }

    return (
    <div> <div className="googleFacebook">
    <div className="loginLogo">
    <GoogleLogin
        size="large"
        
        onSuccess={(credentialResponse) => {
          const cred = jwtDecode(credentialResponse.credential);
          console.log("Credential Response:", JSON.stringify(cred, null, 2));
           

          Navigate("/home");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  </div>
  
  <p className="loginOR">--OR--</p>
  
  <form className="loginForm">
      <input type="text" onChange={handleChange} value={formData.email} name="email" placeholder="Email"/>
      <input type="text" onChange={handleChange} value={formData.password} name="password" placeholder="Password"/>
      <button type="submit" onClick={handleLogin}>Login</button>
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