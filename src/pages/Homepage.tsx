import { useState } from "react";
import coverImage from "../images/nick_cover.jpeg";
import LayloWidget from "../UI/LayloWidget";
import { FiArrowDownCircle } from "react-icons/fi";

// TODO: Setup Instructions
// 1. Create a .env file in the project root
// 2. Add: VITE_LAYLO_API_KEY=your-actual-api-key-here
// 3. Get your API key from: Settings → Integrations → API Keyring in your Laylo dashboard
//
// Security Note: In production, API keys should be server-side, not in frontend code
// Consider implementing a backend proxy endpoint for enhanced security

function Homepage() {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  return (
    <section className="relative h-svh w-full">
      {/* // ! Mobile Layout - NO SCROLL FULL HEIGHT */}
      <div className="grid h-full grid-cols-1 grid-rows-2 gap-1 sm:hidden">
        {/* // ! Mobile Image Container - Zoomed In */}
        <div className="relative overflow-hidden">
          <img
            className="h-full w-full scale-[1.08] object-cover"
            src={coverImage}
            alt="Nick White Cover Photo"
          />
          {/* // ! Gradient overlay for smooth transition */}
          <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* // ! Mobile Content Box */}
        <div
          // onMouseLeave={() => setTimeout(() => setIsWidgetVisible(false), 500)}
          className="relative -mt-2 flex flex-col gap-4 rounded-t-2xl bg-gradient-to-b from-black/70 via-black/50 to-black/30 p-4 backdrop-blur-sm"
        >
          <div>
            <h1 className="text-display from-primary/90 to-primary/70 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent">
              NICK WHITE
            </h1>
            <h2 className="text-accent text-center text-2xl">
              Find ur <span className="magic-text">Magic</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="btn-padding bg-primary text-dark-slate border-primary/50 btn-hover-effect cursor-pointer rounded-full border-2 text-lg font-bold tracking-wide transition-all"
              onClick={() => {
                window.open("https://td.nickwhiteworld.com/game", "_blank");
              }}
            >
              Latest Release
            </button>
            {/* // ! Text for updates button */}
            <button
              onMouseEnter={() => setIsWidgetVisible(true)}
              onTouchStart={() => setIsWidgetVisible(true)}
              className="btn-padding border-primary/50 hover:bg-primary/80 btn-hover-effect cursor-pointer rounded-full border-2 text-lg font-bold tracking-wide transition-all hover:text-black"
            >
              RSVP - stay in the loop
            </button>
          </div>

          {/* // ! Mobile Laylo Widget Section - Absolute positioned overlay */}
          <div
            className={`absolute top-[110%] right-0 left-0 z-50 transition-all duration-300 ${
              isWidgetVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-4 opacity-0"
            }`}
          >
            <LayloWidget
              isVisible={isWidgetVisible}
              apiKey={import.meta.env.VITE_LAYLO_API_KEY}
              mobile={true}
            />
          </div>
        </div>
      </div>

      {/* // ! Desktop Layout - Overlay */}
      <div className="hidden min-w-screen sm:block">
        {/* // ! Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full rounded-lg object-cover object-[15vw_center]"
            src={coverImage}
            alt="Nick White Cover Photo"
          />
          {/* // ! Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/15 lg:bg-black/5"></div>
        </div>

        {/* // ! Content Overlay */}
        <div className="z-10 flex translate-10 flex-col justify-center gap-8 px-4 sm:px-8 lg:translate-16 lg:px-12">
          {/* // ! Custom Laylo Widget */}
          <div
            className="flex flex-col gap-8"
            onMouseLeave={() =>
              setTimeout(() => setIsWidgetVisible(false), 500)
            }
          >
            <h2
              className="text-accent text-primary magic-text flex w-fit cursor-pointer items-center gap-2 text-2xl font-bold tracking-wide"
              style={{
                marginTop: "1rem",
              }}
              onMouseEnter={() => setIsWidgetVisible(true)}
            >
              RSVP - stay in the loop
              <FiArrowDownCircle size={24} className="translate-y-0.5" />
            </h2>

            <LayloWidget
              isVisible={isWidgetVisible}
              apiKey={import.meta.env.VITE_LAYLO_API_KEY}
            />
          </div>
          <div className="flex">
            {/* // ! Left side content */}
            <div className="flex flex-1 flex-col items-start justify-center gap-4 lg:gap-6">
              <div className="flex flex-col gap-8">
                <h1 className="text-display from-primary/90 to-primary/70 bg-gradient-to-r bg-clip-text text-6xl leading-tight font-bold tracking-tight text-transparent drop-shadow-lg lg:text-7xl">
                  NICK WHITE
                </h1>
                <h2 className="text-accent translate-x-2 -translate-y-8 text-3xl font-bold tracking-wider lg:text-4xl">
                  Find ur <span className="magic-text">Magic</span>
                </h2>
              </div>
              {/* // ! Buttons */}
              <div className="z-[100] flex gap-8">
                <button
                  className="bg-primary btn-padding text-dark-slate border-primary/50 btn-hover-effect cursor-pointer rounded-full border-2 text-xl font-bold tracking-wider transition-all lg:text-2xl"
                  onClick={() => {
                    window.open("https://td.nickwhiteworld.com/game", "_blank");
                  }}
                >
                  Latest Release
                </button>
                <button className="btn-padding border-primary/50 hover:bg-primary/80 hover:bg-opacity-20 btn-hover-effect cursor-pointer rounded-full border-2 text-xl font-bold tracking-wider transition-all hover:text-black lg:text-2xl">
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
