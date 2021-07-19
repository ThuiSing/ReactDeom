import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="main_menu">
        <li>
          <NavLink exact activeClassName="main_active_menu" to="/">
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="main_active_menu" to="/services">
            {" "}
            Services{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="main_active_menu" to="/about">
            {" "}
            About{" "}
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="main_active_menu" to="/contact">
            {" "}
            Contact{" "}
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Menu;
