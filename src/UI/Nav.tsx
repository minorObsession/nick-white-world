import { NavLink } from "react-router";

function NavSeparator() {
  return (
    <div className="h-5 w-[3px] bg-primary/40 mx-2 md:mx-3 lg:mx-4 rounded-full" />
  );
}

// todo
// better overall styling (too simple and dull):
// to look better on mobile
// more spread out
// better nav bg color

function Nav() {
  return (
    // ! WORKING ON NAVIGATION RESPONSIVENESS
    <nav
      id="navigation"
      className=" w-[80vw] md:w-[70vw] lg:w-[60vw] mx-auto flex h-[4rem] lg:h-[6rem] items-center gap-2 sm:gap-3 lg:gap-4 justify-center text-display bg-gradient rounded-xl shadow-lg"
    >
      <NavLink
        to="/"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">Home</span>
      </NavLink>
      <NavSeparator />
      {/* <NavLink
        to="about"
        className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
      >
        <span className="transition duration-200 hover:scale-105">About</span>
      </NavLink>
      <NavSeparator /> */}
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
