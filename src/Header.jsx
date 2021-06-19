import React from 'react'
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <NavLink to="/" class="navbar-brand">React Website</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom_nav">
        <li class="nav-item">
          <NavLink exact activeClassName="main_active_menu" to="/ReactDeom"  aria-current="page" >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="main_active_menu" to="/ReactDeom/services" >Services</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="main_active_menu" to="/ReactDeom/about" >About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="main_active_menu" to="/ReactDeom/contact"  >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Header;
