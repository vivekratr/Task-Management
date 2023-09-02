import React from "react";

function LoginPage() {
  return (
    <div className="wholePageLogin">
        
        <div className="leftLogin">

            <div className="googleFacebook">
              <div className="loginLogo">
                <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557542571016343/image.png" alt="google-image" />
                <p>Sign up with Google</p>
              </div>

              <div className="loginLogo facebookLogo">
                <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147557898134749286/image.png" alt="facebook-image" />
                <p>Sign up with Facebook</p>
              </div>
            </div>

            <p className="loginOR">--OR--</p>

            <form className="loginForm">
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Passward"/>
                <button type="submit">Create Account</button>
                <label>Already have an account? <span className="loginLabel">Login </span></label>
                
            </form>

        </div>

        <div className="rightImage">
            <img src="https://cdn.discordapp.com/attachments/1147548909296689282/1147556230622105721/image.png" alt="loginBigImg" />
        </div>
        
      
    </div>
  );
}

export default LoginPage;
