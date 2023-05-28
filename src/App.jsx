// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Listing from "./pages/Listing";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/listing" element={<Listing></Listing>}></Route>
        <Route
          path="/blog/cafe-apartment"
          element={<BlogDetails></BlogDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
