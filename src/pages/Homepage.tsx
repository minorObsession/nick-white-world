import coverImage from "../images/nick_cover.jpeg";

// todo
// add widget to put phone number for subscription (this feature to notify thru email and look into good text services)
//
// double check view html element (never used before)

function Homepage() {
  return (
    <section className="relative w-full h-[calc(100svh-10.5rem)] lg:h-[calc(100svh-14rem)] overflow-hidden">
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
        <div className="bg-gradient-to-b from-black/60 to-black/40 p-4 ">
          <h1 className="text-display text-3xl font-bold text-center bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">
            NICK WHITE
          </h1>
          <h2 className="text-accent text-lg text-center">
            Find ur <span className="magic-text">Magic</span>.
          </h2>
          <div className="flex gap-2 flex-col w-full max-w-xs">
            <button className="cursor-pointer tracking-wide text-base font-bold btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
              Listen Now
            </button>
            <button className="cursor-pointer tracking-wide text-base font-bold btn-padding border-2 border-primary/50 rounded-full hover:bg-primary/80 hover:text-black transition-all btn-hover-effect">
              Latest Release
            </button>
          </div>
        </div>
      </div>

      {/* // ! Desktop Layout - Overlay */}
      <div className="hidden sm:block min-w-screen ">
        {/* // ! Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full rounded-lg object-[0%_center]"
            src={coverImage}
            alt="Nick White Cover Photo"
          />
          {/* // ! Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/15 lg:bg-black/5"></div>
        </div>

        {/* // ! Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center px-4 sm:px-8 lg:px-12 h-svh overflow-hidden">
          <div className=" relative flex">
            {/* // ! Left side content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-4 lg:gap-6">
              <h1 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-lg leading-tight">
                NICK WHITE
              </h1>
              <h2 className="text-accent text-2xl -translate-y-8 lg:text-3xl xl:text-4xl">
                Find ur <span className="magic-text">Magic</span>.
              </h2>
              <div className="flex gap-4 lg:gap-6">
                <button className="cursor-pointer tracking-wide text-lg lg:text-xl font-bold btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
                  Listen Now
                </button>
                <button className="cursor-pointer tracking-wide text-lg lg:text-xl font-bold btn-padding border-2 border-primary/50 rounded-full hover:bg-primary/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect">
                  Latest Release
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
