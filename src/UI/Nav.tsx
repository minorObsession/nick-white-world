import { NavLink } from "react-router";

function Nav() {
  return (
    <nav id="navigation" className={`flex items-center justify-center w-full `}>
      <NavLink to="/">
        <span className="transition duration-200 hover:scale-105">Home</span>
      </NavLink>
      <NavLink to="about">
        <span className="transition duration-200 hover:scale-105">About</span>
      </NavLink>
      <NavLink to="contact-me">
        <span className="transition duration-200 hover:scale-105">
          Contact Me
        </span>
      </NavLink>
      <NavLink to="shop">
        <span className="transition duration-200 hover:scale-105">Shop</span>
      </NavLink>
    </nav>
  );
}

export default Nav;
