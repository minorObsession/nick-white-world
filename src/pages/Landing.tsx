import { Outlet } from "react-router";
import Nav from "../UI/Nav";
import SocialIcons from "../UI/SocialIcons";

function Landing() {
  return (
    <section
      id="landing"
      className="flex flex-col items-center gap-4 md:gap-10 "
    >
      <SocialIcons />
      <Nav />
      <main className=" ">
        <Outlet />
      </main>
    </section>
  );
}

export default Landing;
