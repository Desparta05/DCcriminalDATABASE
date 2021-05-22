import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Main  from './layouts/Main'
import Home from "./pages/Home"
import Villains from "./pages/Villains"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route element= {<Main/>}>
          <Route path= "/" element={<Home/>} />
          <Route path= "/villains" element={<Villains/>} />
          <Route path= "/heroes" element={<h1>Heroes</h1>} />
          <Route path= "/equipment" element={<h1>Equipment</h1>} />
          <Route path= "/Signup" element={<Signup/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;