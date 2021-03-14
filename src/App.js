import React from 'react';
import logo from './logo.svg';
import Navbar from './Component/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    

   <Router>
     <Navbar />
   </Router>
  );
}

export default App;
