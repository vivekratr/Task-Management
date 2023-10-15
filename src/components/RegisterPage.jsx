import React from "react";
import Partition from "./Partition";
import Header from "./header";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect,useState } from "react";

import axios from "axios";


function RegisterLeftt() {
  const [formData, setFormData] = useState({});
  const Navigate = useNavigate();
//  const mongo=mongoose.connect("mongodb+srv://breakratr:breakratr@vivekdb.fwdld9x.mongodb.net/Taskmanagement?retryWrites=true&w=majority", {useNewUrlParser: true});
//  const connection = mongo.connection;
// connection.on('connected', () => {
//   console.log('MongoDB connected');
// });
//  mongoose.set("Taskmanagement",true);
//  const userSchema = new mongoose.Schema ({
//   email: String,
//   password: String
// });




const handleRegister = async (e) => {
  e.preventDefault();

  // await axios({
  //   method: 'get',
  //   url: 'http://localhost:3001/test',
  //   responseType: "json"
  // })
  //   .then(function(response) {
  //   console.log(response);
    
  // });
console.log(formData);
  await axios({
    method: 'post',
    url: 'http://localhost:3001/register',
    data: formData,
  }) .then(function(response) {
      console.log(response);
      if(response.data.login ===0){
        alert("User already exists");
      }
      else{
        alert("User Registered");
        Navigate("/login");
      }
      
    });

}

const handleChange = (e) => {
  console.log(e.target.value);
  setFormData((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
}
  return (
    <div>
     
      <div className="googleFacebook">
        <div className="loginLogo">
        <GoogleLogin
        size="large"
        
        onSuccess={(credentialResponse) => {
          console.log(jwtDecode(credentialResponse.credential));
          Navigate("/home");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
        </div>
       
        {/* <div className="loginLogo facebookLogo">
          <img
            src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557898134749286/image.png"
            alt="facebook"
          />
          <p >Sign up with Facebook</p>
        </div> */}
      </div>

      <p className="loginOR">--OR--</p>

      <form className="loginForm">
        <input type="text" name="name" value={formData['name']} onChange={handleChange} placeholder="Full Name" />
        <input type="text" name="email" value={formData['email']} onChange={handleChange} placeholder="Email" />
        <input type="text" name="password" value={formData['password']} onChange={handleChange} placeholder="Password" />
        <button type="submit" onClick={handleRegister}>Create Account</button>
        <label>
          Already have an account?{" "}
          <span className="loginLabel">
            {" "}
            <a href="/login"> Login </a>
          </span>
        </label>
      </form>
    </div>
  );
}

function RegisterPage(props) {
  return (
    <div>
      <Header />

      <Partition
        code={RegisterLeftt()}
        imgURL="https://cdn.discordapp.com/attachments/1147548909296689282/1147556230622105721/image.png"
      />
    </div>
  );
}

export default RegisterPage;
