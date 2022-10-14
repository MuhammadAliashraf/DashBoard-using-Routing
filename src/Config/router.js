import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "../pages/admin";
import Chart from "../pages/chart";
import Component from "../pages/component";
import Data from "../pages/data";
import Home from '../pages/home';
import Notification from "../pages/notification";
import Singleproduct from "../pages/singleproduct";


export default function Approuter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='component' element={<Component/>}></Route>
            <Route path='chart' element={<Chart/>} ></Route>
            <Route path='notification' element={<Notification/>} />
            <Route path='admin/*' element={<Admin/>} ></Route>
            <Route path='data' element={<Data/>} ></Route>
            <Route path="singleproduct" element={<Singleproduct/>}></Route>
        </Routes>
    </Router>
  );
}