import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
import Details from "./components/Details";
import axios from "axios";
import { User } from "./types";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};
export default App;
