import React from "react";
import ReactDOM from "react-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';



import App from './App'

ReactDOM.render(<GoogleOAuthProvider clientId="280575901354-f3944f32ncd07qn4eqjd4fo8dq4s2el6.apps.googleusercontent.com"><App /></GoogleOAuthProvider>, document.getElementById("root"));




