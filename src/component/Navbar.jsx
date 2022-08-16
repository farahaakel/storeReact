import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import handleCart from './../redux/reducer/handleCart';
export default function Navbar() {
  const state =useSelector((state) => state.handleCart)
  return (

    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">
        FA COLLECTION
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarScroll">
      <ul className="navbar-nav me-auto mx-auto my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <NavLink className="nav-link active ms-4" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link ms-4" to="/contact">Contact us</NavLink>
        </li>
        
        
      </ul>
      
      <div className="buttons">
        <NavLink to="/login" className="btn btn-outline-dark">
            <i className='fa fa-sign-in me-1'></i>
            Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className='fa fa-user-plus me-1'></i>
            Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className='fa fa-shopping-cart me-1'></i>
            Cart({state.length})</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}
