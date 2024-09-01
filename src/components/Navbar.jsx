import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-auto object-contain rounded-md"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/3d-intro"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 bg-white px-4 py-2 rounded-md"
              : "text-black px-4 py-2 rounded-md"
          }
        >
          3D Intro
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 px-4 py-2 rounded-md"
              : "text-black px-4 py-2 rounded-md"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
