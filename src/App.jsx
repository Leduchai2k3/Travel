// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
