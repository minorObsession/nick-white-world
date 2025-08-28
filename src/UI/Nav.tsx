import { NavLink } from "react-router";

function NavSeparator() {
  return (
    <div className="bg-primary/40 mx-2 h-5 w-[3px] rounded-full md:mx-3 lg:mx-4" />
  );
}

// todo
// better overall styling (too simple and dull):
// to look better on mobile
// more spread out
// better nav bg color

function Nav() {
  // return (
  //   <nav
  //     id="navigation"
  //     className="border-primary/30 text-display bg-gradient mx-auto flex h-[3rem] w-[80vw] items-center justify-center gap-2 rounded-xl border shadow-lg sm:gap-3 md:h-[4rem] md:w-[70vw] lg:h-[5rem] lg:w-[60vw] lg:gap-4"
  //   >
  //     <NavLink
  //       to="/"
  //       className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
  //     >
  //       <span className="transition duration-200 hover:scale-105">Home</span>
  //     </NavLink>
  //     <NavSeparator />
  //     {/* <NavLink
  //       to="about"
  //       className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
  //     >
  //       <span className="transition duration-200 hover:scale-105">About</span>
  //     </NavLink>
  //     <NavSeparator /> */}
  //     <NavLink
  //       to="contact-me"
  //       className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
  //     >
  //       <span className="transition duration-200 hover:scale-105">Contact</span>
  //     </NavLink>
  //     <NavSeparator />
  //     <NavLink
  //       to="shop"
  //       className={({ isActive }) => `nav-button ${isActive ? "active" : ""}`}
  //     >
  //       <span className="transition duration-200 hover:scale-105">Shop</span>
  //     </NavLink>
  //   </nav>
  // );
}

export default Nav;
