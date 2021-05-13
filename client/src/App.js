import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Main } from './layouts/Main'
// import Home from "./pages/Home"
// import Villains from "./pages/Villains"

export const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route element= {<Main/>}>
          <Route path= "/" element={<h1>Home Page</h1>} />
          <Route path= "/villains" element={<h1>Villains</h1>} />
          <Route path= "/heroes" element={<h1>Heroes</h1>} />
          <Route path= "/possiblethreats" element={<h1>PossibleThreats</h1>} />
          <Route path= "/equipment" element={<h1>Equipment</h1>} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}