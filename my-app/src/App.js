import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from "./components/Admin/Admin";
import HomePage from "./HomePage";

const App = ()=> {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/admin"  element={<Admin/>} />
        </Routes>
      </Router>
    );
}



export default App;
