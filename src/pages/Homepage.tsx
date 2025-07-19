import coverImage from "../images/nick_cover.jpeg";

// todo
// add widget to put phone number for subscription (this feature to notify thru email and look into good text services)
//
// double check view html element (never used before)

function Homepage() {
  return (
    <section className="relative w-full h-svh overflow-hidden">
      {/* // ! Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          className="object-scale-down scale-125 sm:scale-100 sm:object-cover w-full h-full rounded-lg object-[center_13%] sm:object-[5vw_-5vw] lg:object-[15vw_-10vw]"
          src={coverImage}
          alt="Nick White Cover Photo"
        />
        {/* // ! // ! Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/15 lg:bg-black/5"></div>
      </div>

      {/* // ! Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 h-svh overflow-hidden">
        {/* // ! // ! Mobile Layout (stacked) */}
        <view className="items-center gap-6 sm:hidden flex flex-col justify-center ">
          <h1 className="text-display text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-lg text-nowrap ">
            NICK WHITE
          </h1>
          <h2 className="text-accent text-xl sm:text-2xl text-center">
            Find ur <span className="magic-text">Magic</span>.
          </h2>
          <div className="flex gap-3 flex-col  ">
            <button className="cursor-pointer tracking-wide text-lg text-nowrap font-bold btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
              Listen Now
            </button>
            <button className="cursor-pointer tracking-wide text-lg text-nowrap font-bold btn-padding border-2 border-primary/50 rounded-full hover:bg-primary/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect">
              Latest Release
            </button>
          </div>
        </view>

        {/* // * potentially separate Med and Large layout */}
        {/* // ! // ! Medium and Large Layout (overlapping) */}
        <view className="hidden sm:flex w-full h-full relative">
          {/* // ! Left side content */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6 lg:gap-10">
            <h1 className="text-display text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-lg leading-tight">
              NICK WHITE
            </h1>
            <h2 className="text-accent text-2xl -translate-y-8 lg:text-3xl xl:text-4xl">
              Find ur <span className="magic-text">Magic</span>.
            </h2>
            <div className="flex gap-4 lg:gap-6 mt">
              <button className="cursor-pointer tracking-wide text-lg lg:text-xl font-bold btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect">
                Listen Now
              </button>
              <button className="cursor-pointer tracking-wide text-lg lg:text-xl font-bold btn-padding border-2 border-primary/50 rounded-full hover:bg-primary/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect">
                Latest Release
              </button>
            </div>
          </div>
        </view>
      </div>
    </section>
  );
}

export default Homepage;
