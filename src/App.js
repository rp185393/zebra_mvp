import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Countryreport from "./components/countryReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/dashboard/countryReport" Component={Countryreport} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
