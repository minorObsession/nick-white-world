import { NavLink } from "react-router";

function NavSeparator() {
  return <div className="h-4 w-[2px] bg-neon-green/30 mx-2 md:mx-3 lg:mx-4" />;
}

function Nav() {
  return (
    <nav
      id="navigation"
      className="flex h-[4rem] items-center gap-1 md:gap-2 lg:gap-3 justify-center w-full text-display bg-gradient py-[0.5rem_!important] px-[1rem_!important] rounded-full shadow-lg"
    >
      <NavLink
        to="/"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">Home</span>
      </NavLink>
      <NavSeparator />
      <NavLink
        to="about"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">About</span>
      </NavLink>
      <NavSeparator />
      <NavLink
        to="contact-me"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">
          Contact Me
        </span>
      </NavLink>
      <NavSeparator />
      <NavLink
        to="shop"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">Shop</span>
      </NavLink>
    </nav>
  );
}

export default Nav;
