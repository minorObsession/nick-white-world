import { Outlet } from "react-router";
import Nav from "../UI/Nav";
import SocialIcons from "../UI/SocialIcons";

// LOOK INTO PAGE RESPONSIVENESS ALL AROUND

function Landing() {
  return (
    <section
      id="landing"
      className="flex flex-col items-center gap-4 md:gap-10 h-svh"
    >
      <SocialIcons />
      <Nav />
      <main className="flex w-full h-full ">
        <Outlet />
      </main>
    </section>
  );
}

export default Landing;
