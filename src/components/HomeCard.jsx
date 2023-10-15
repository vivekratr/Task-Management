import React from "react";
import "./css/HomeCard.css";

export default function HomeCard() {
  const Description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
debitis ex, natus, amet quos reprehenderit labore nihil dignissimos
repudiandae laudantium laboriosam eaque praesentium velit voluptatum
blanditiis necessitatibus voluptate possimus? lorem`;

  const img = [
    "https://cdn.discordapp.com/attachments/1147548909296689282/1159455887908417556/image.png?ex=65311671&is=651ea171&hm=ebcfc22bf3012870fd60113978aface912adc1e38edc2bc388d00bd11adfc179&",
    "https://cdn.discordapp.com/attachments/1147548909296689282/1159456022411366461/image.png?ex=65311691&is=651ea191&hm=711037bf99e3e3a9f4c3340373653d0042ad383ca5dd304f3f3f80be97d11508&",
    "https://cdn.discordapp.com/attachments/1147548909296689282/1159456079697154099/image.png?ex=6531169f&is=651ea19f&hm=68706b8dbe12d278ee94c94cb3e9d27773c2a83b6593eb83699f1df778ac547a&",
    "https://cdn.discordapp.com/attachments/1147548909296689282/1159456126685941872/image.png?ex=653116aa&is=651ea1aa&hm=fccee0e9db323ce7e788a70a1e9e2dc85ad08c8988fa70d321fe8aaece1754c2&",
  ];
  return (
    <div className="CompleteCard">
      <div className="Cardtop">
        <div className="CardtopL">
          <h1>DevOps Team</h1>
          <h4>Team lead Swayam Sharma</h4>
        </div>

        <div className="CardtopR">
          <div className="CardtopR1">XU9808C</div>
          <div className="CardtopR2">
            {img.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt="profile"
                  className={"homecardImg" + index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="Cardbottom">
        <p>Description</p>
        <p>{Description.substring(1, 200)}</p>
        <div className="homePlus">
          <img
            src="https://cdn.discordapp.com/attachments/1147548909296689282/1159439661534564412/image.png?ex=65310754&is=651e9254&hm=5e841c94c09dfd118f701c4f4ef62f9a6302b71db6ba463e5e13ce07e2947b97&"
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
}
