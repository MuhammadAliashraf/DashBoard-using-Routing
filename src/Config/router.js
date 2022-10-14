import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "../pages/admin";
import Chart from "../pages/chart";
import Component from "../pages/component";
import Home from '../pages/home';
import Notification from "../pages/notification";


export default function Approuter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='component' element={<Component/>}></Route>
            <Route path='chart' element={<Chart/>} ></Route>
            <Route path='notification' element={<Notification/>} />
            <Route path='admin/*' element={<Admin/>} ></Route>
        </Routes>
    </Router>
  );
}