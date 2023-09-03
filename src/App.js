import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import WRU from "./components/WRU";
import TableHeading from "./components/TableHeading";

function App() {


return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route path="/" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/wru" element={<WRU/>} />
          <Route path="/table" element={<TableHeading/>} />

          
        </Routes>
        {/* {<RegisterPage/>}  */}
      </div>
    </BrowserRouter>
  );

}
  export default App;