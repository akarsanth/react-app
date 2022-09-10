import React from "react";
import { Link, NavLink } from "react-router-dom";

import Container from "./Container";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Container>
        <nav className={classes.nav}>
          <Link to="/">
            <h1>Shop</h1>
          </Link>

          <ul className={classes["nav-links"]}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
