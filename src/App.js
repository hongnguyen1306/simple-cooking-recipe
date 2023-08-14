import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CookingDetail from "./pages/CookingDetail/CookingDetail";
import Results from "./pages/Results/Results";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/cookingdetail" element={<CookingDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
