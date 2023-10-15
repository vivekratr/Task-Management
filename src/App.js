import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import WRU from "./components/WRU";
import TableHeading from "./components/TableHeading";
import ListItems from "./components/ListItems";
import Homepage from "./components/HomePage";


function App() {

return (
<<<<<<< HEAD
  <BrowserRouter>
      <div className="">
=======
    <BrowserRouter>
      <div className="r">
        
>>>>>>> 14e04e737c2307f5ad4c3d2b202e59f9cddde6e6
        <Routes>
          <Route path="/" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/wru" element={<WRU/>} />
          <Route path="/table" element={<TableHeading/>} />
          <Route path="/list" element={<ListItems /> } />
          <Route path="/home" element={<Homepage /> } />
          <Route path="*" element={<h1>Not Found</h1>} />


          
        </Routes>
        {/* {<RegisterPage/>}  */}
      </div>
    </BrowserRouter>
  );

}
  export default App;
