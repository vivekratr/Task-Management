import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import WRU from "./components/WRU";
import TableHeading from "./components/TableHeading";
import ViewLayout from "./components/viewLayout";
// import "./input.css"
function App() {


return (
    <BrowserRouter>
      <div className="">
        
        <Routes>
          <Route path="/" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/wru" element={<WRU/>} />
          <Route path="/table" element={<TableHeading/>} />
          <Route path="/viewLayout" element={<ViewLayout />} />

          
        </Routes>
        {/* {<RegisterPage/>}  */}
      </div>
    </BrowserRouter>
  );

}
  export default App;