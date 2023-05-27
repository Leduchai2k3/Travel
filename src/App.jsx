// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
