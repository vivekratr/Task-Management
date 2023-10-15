import React from "react";
import Header from "./header";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./css/HomePage.css";
import HomeCard from "./HomeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const Navigate = useNavigate();
  useEffect( () => {


  const checkLogin = async () => {
    await axios({
    method: 'get',
    url: 'http://localhost:3001/isLoggedIn',
    responseType: "json"
  })
    .then(function(response) {
    console.log(response);
    if (response.data.LoggedIn === 0) {
      alert("Please Login First");
     Navigate("/login");
    }
  });
    
  }
  checkLogin();

  }, []);

  return (
    <div className="homeMainDiv">
      <div className="homeHead">
        <span className="homeLeftSpan">
          {" "}
          <Header />
        </span>

        <div className="homeHeadR">
            <Popup
              trigger={
                  <div className="homeHeadR1">
                <button>
                  <img
                   style={{height:"1rem"}}
                    src="https://cdn.discordapp.com/attachments/1147548909296689282/1159439661534564412/image.png?ex=65310754&is=651e9254&hm=5e841c94c09dfd118f701c4f4ef62f9a6302b71db6ba463e5e13ce07e2947b97&"
                    alt="plus"
                  />
                </button>
              </div>
              }
              position="bottom right"
            >
              <div>Create Room</div>
              <div>Join Room</div>
            </Popup>

          <div className="homeHeadR2">
            <img
              src="https://cdn.discordapp.com/attachments/1147548909296689282/1159437874853318686/image.png?ex=653105aa&is=651e90aa&hm=ac1d0df80d3039e4dbaa3d2ebd00655250d6f0e272e672696dd6ef12e2f0a528&"
              alt="profile"
            />
          </div>
        </div>
        
      </div>
   <hr style={{width:"100vw"}}/>

              <div className="homeLeftRight">
      <div className="homeLeft">
              <div className="homeLeft1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7895 12.5263H11.4737V6.21053C11.4737 5.93135 11.3628 5.66361 11.1654 5.4662C10.968 5.2688 10.7002 5.15789 10.4211 5.15789C8.75553 5.15789 7.1274 5.65178 5.74257 6.5771C4.35773 7.50241 3.27839 8.8176 2.64102 10.3563C2.00365 11.8951 1.83688 13.5883 2.16181 15.2218C2.48674 16.8553 3.28877 18.3558 4.46647 19.5335C5.64418 20.7112 7.14467 21.5133 8.77819 21.8382C10.4117 22.1631 12.1049 21.9964 13.6437 21.359C15.1824 20.7216 16.4976 19.6423 17.4229 18.2574C18.3482 16.8726 18.8421 15.2445 18.8421 13.5789C18.8421 13.2998 18.7312 13.032 18.5338 12.8346C18.3364 12.6372 18.0686 12.5263 17.7895 12.5263Z" fill="#6B7280"/>
<path d="M13.5789 2C13.2998 2 13.032 2.1109 12.8346 2.30831C12.6372 2.50572 12.5263 2.77346 12.5263 3.05263V10.4211C12.5263 10.7002 12.6372 10.968 12.8346 11.1654C13.032 11.3628 13.2998 11.4737 13.5789 11.4737H20.9474C21.2265 11.4737 21.4943 11.3628 21.6917 11.1654C21.8891 10.968 22 10.7002 22 10.4211C21.9975 8.18842 21.1095 6.04795 19.5308 4.46924C17.9521 2.89053 15.8116 2.00251 13.5789 2Z" fill="#6B7280"/>
</svg>

                <p>Home</p>

              </div>
              <div className="homeLeft1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.3H16.5V7.05C16.5 5.97587 16.0259 4.94574 15.182 4.18622C14.3381 3.4267 13.1935 3 12 3C10.8065 3 9.66193 3.4267 8.81802 4.18622C7.97411 4.94574 7.5 5.97587 7.5 7.05V9.3H6C5.46957 9.3 4.96086 9.48964 4.58579 9.82721C4.21071 10.1648 4 10.6226 4 11.1V19.2C4 19.6774 4.21071 20.1352 4.58579 20.4728C4.96086 20.8104 5.46957 21 6 21H18C18.5304 21 19.0391 20.8104 19.4142 20.4728C19.7893 20.1352 20 19.6774 20 19.2V11.1C20 10.6226 19.7893 10.1648 19.4142 9.82721C19.0391 9.48964 18.5304 9.3 18 9.3ZM13 16.5C13 16.7387 12.8946 16.9676 12.7071 17.1364C12.5196 17.3052 12.2652 17.4 12 17.4C11.7348 17.4 11.4804 17.3052 11.2929 17.1364C11.1054 16.9676 11 16.7387 11 16.5V13.8C11 13.5613 11.1054 13.3324 11.2929 13.1636C11.4804 12.9948 11.7348 12.9 12 12.9C12.2652 12.9 12.5196 12.9948 12.7071 13.1636C12.8946 13.3324 13 13.5613 13 13.8V16.5ZM14.5 9.3H9.5V7.05C9.5 6.45326 9.76339 5.88097 10.2322 5.45901C10.7011 5.03705 11.337 4.8 12 4.8C12.663 4.8 13.2989 5.03705 13.7678 5.45901C14.2366 5.88097 14.5 6.45326 14.5 7.05V9.3Z" fill="#6B7280"/>
</svg>

                <p>Settings</p>
              </div>
      </div>
     
      <div className="homeRight">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <div className="homeBlank"></div>
      </div>
    </div>
  );
}
