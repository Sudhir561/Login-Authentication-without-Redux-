import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from "./components/Preferences/Preferences";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login/Login";
import './App.css';


function App() {
  return (
 <div className="wrapper">

  <h2>Application</h2>
  <BrowserRouter>
  <Routes>
 <Route path="/dashboard" element={<Dashboard/>}></Route>
 <Route path="/preferences" element={<Preferences/>}></Route>
  </Routes>
  </BrowserRouter>
  <Login/>
  </div>
  );
}

export default App;
