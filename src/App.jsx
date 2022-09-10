import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./components/homePage";
import Login from "./components/login";
import Register from "./components/register";
import ForgetPassword from "./components/forgetPassword";
import Dashboard from "./components/dashboard";
import { homeData } from "./dummyData";
import "./App.css";

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage data={homeData.Header} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgetPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
