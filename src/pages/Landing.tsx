import { Outlet } from "react-router";
// import Nav from "../UI/Nav";
import SocialIcons from "../UI/SocialIcons";

function Landing() {
  return (
    <section
      id="landing"
      // ! don't set height here, it will make things shift
      className="flex flex-col items-center gap-3 md:gap-5"
    >
      <SocialIcons />
      {/* <Nav /> */}
      <main className="">
        <Outlet />
      </main>
    </section>
  );
}

export default Landing;
