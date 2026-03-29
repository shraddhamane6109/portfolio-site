import { NavLink } from "react-router-dom";

function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Shraddha.dev</h2>

      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
        <button onClick={toggleTheme} className="theme-btn">
              🌙
      </button>
    </nav>
  );
}

export default Navbar;
