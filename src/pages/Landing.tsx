import { Outlet } from "react-router";
import Nav from "../UI/Nav";
import SocialIcons from "../UI/SocialIcons";

function Landing() {
  return (
    <section
      id="landing"
      className="flex flex-col items-center justify-center gap-10"
    >
      <SocialIcons />
      <Nav />
      <main className="flex w-full h-full ">
        <Outlet />
      </main>

      {/* // ! display only when homepage  */}
      {/* container for rest of landing content */}
    </section>
  );
}

export default Landing;
