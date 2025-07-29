import coverImage from "../images/nick_cover.jpeg";
import LayloWidget from "../UI/LayloWidget";

// TODO: Setup Instructions
// 1. Create a .env file in the project root
// 2. Add: VITE_LAYLO_API_KEY=your-actual-api-key-here
// 3. Get your API key from: Settings → Integrations → API Keyring in your Laylo dashboard
//
// Security Note: In production, API keys should be server-side, not in frontend code
// Consider implementing a backend proxy endpoint for enhanced security

function Homepage() {
  return (
    <section className="relative w-full h-[calc(100svh-10.5rem)] lg:h-[calc(100svh-14rem)]">
      {/* // ! Mobile Layout - NO SCROLL FULL HEIGHT */}
      <div className="grid grid-cols-1 grid-rows-2 sm:hidden h-full">
        {/* // ! Mobile Image Container - Zoomed In */}
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={coverImage}
            alt="Nick White Cover Photo"
          />
        </div>

        {/* // ! Mobile Content Box */}
        <div className="flex flex-col gap-4 self-center bg-gradient-to-b from-black/60 to-black/40 p-4 ">
          <div>
            <h1 className="text-display text-4xl font-bold text-center bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">
              NICK WHITE
            </h1>
            <h2 className="text-accent text-2xl text-center">
              Find ur <span className="magic-text">Magic</span>
            </h2>
          </div>
          <div className="flex gap-3 flex-col ">
            <button className="cursor-pointer tracking-wide text-base font-bold btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
              Listen Now
            </button>
            <button className="cursor-pointer tracking-wide text-base font-bold btn-padding border-2 border-primary/50 rounded-full hover:bg-primary/80 hover:text-black transition-all btn-hover-effect">
              Text for Updates
            </button>
          </div>
        </div>
      </div>

      {/* // ! Desktop Layout - Overlay */}
      <div className="hidden sm:block min-w-screen ">
        {/* // ! Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full rounded-lg object-[15vw_center]"
            src={coverImage}
            alt="Nick White Cover Photo"
          />
          {/* // ! Dark overlay for text readability */}
          <div className=" absolute inset-0 bg-black/15 lg:bg-black/5"></div>
        </div>

        {/* // ! Content Overlay */}
        <div className="z-10 flex flex-col gap-10 justify-center translate-10 lg:translate-16 px-4 sm:px-8 lg:px-12 ">
          {/* // ! Custom Laylo Widget */}
          <div className="flex flex-col gap-4">
            <h2 className="text-accent text-2xl text-primary ">
              Sign up for updates
            </h2>

            <LayloWidget
              apiKey={
                import.meta.env.VITE_LAYLO_API_KEY || "YOUR_LAYLO_API_KEY_HERE"
              }
            />
          </div>
          <div className="  flex">
            {/* // ! Left side content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-4 lg:gap-6">
              <div className="flex flex-col gap-8">
                <h1 className="text-display text-6xl lg:text-8xl  font-bold tracking-tight bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                  NICK WHITE
                </h1>
                <h2 className="text-accent translate-x-2 text-3xl lg:text-4xl -translate-y-8  xl:text-4xl">
                  Find ur <span className="magic-text">Magic</span>
                </h2>
              </div>
              {/* // ! Buttons */}
              <div className="flex gap-8 z-[100] ">
                <button className="cursor-pointer tracking-wider text-2xl font-bold  bg-primary btn-padding text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
                  Listen Now
                </button>
                <button className="cursor-pointer tracking-wider text-2xl font-bold  border-2 btn-padding border-primary/50 rounded-full hover:bg-primary/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect">
                  Text for Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Homepage;
