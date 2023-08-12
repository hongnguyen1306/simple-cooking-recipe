import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import CookingDetail from "./pages/CookingDetail/CookingDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/results" element={<CartPage />} /> */}
        <Route path="/cookingdetail" element={<CookingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
