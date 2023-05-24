import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
