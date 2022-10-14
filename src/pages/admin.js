import React from 'react'
import Navbar from '../component/navbar'
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoginForm from './adminview/login';
import SignupForm from './adminview/signup';
import Upload from './adminview/upload';
import "../pages/adminview/admin.css"
import Home from './home';

function Admin() {
  return (
    <div className='Admin' >
      <h1>Admin Panel  </h1>
      <Link className='adminLink'  to='login' >Login As Admin</Link>
      <Link className='adminLink'  to='signup' >New Admin Signup</Link>
      <Link className='adminLink'  to='upload' >Upload</Link>
      <Link className='adminLink'  to='/' >Logout</Link>
      <Routes>
        <Route path="login" element={<LoginForm/>}   />
        <Route path="signup" element={<SignupForm/>}  />
        <Route path="upload" element={<Upload/>}  />
        <Route path="Logout" element={<Home/>}  />
      </Routes>
    </div>
  )
}

export default Admin
