function Homepage() {
  return (
    <div className="flex sm:flex-row flex-col">
      {/* Artist Introduction - Left */}
      <article className="py-[2rem_!important] px-[1rem_!important] order-2 sm:order-1 sm:flex-1/3 flex flex-col gap-4 lg:gap-5 justify-center items-center lg:items-end bg-gradient-to-br from-deep-navy to-dark-slate rounded-lg ">
        <h1 className="text-display text-right lg:pr-[1rem_!important] text-nowrap text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter md:tracking-tight lg:tracking-normal mb-4 bg-gradient-to-r from-neon-green/90 to-neon-green/70 bg-clip-text text-transparent">
          Nick White
        </h1>
        <h2 className="text-accent text-center text-xl md:text-2xl lg:text-3xl lg:text-right lg:pr-[1rem_!important] -translate-y-2">
          Vocalist, Music Producer & Performer
        </h2>
        <p className="text-body text-base md:text-lg lg:text-xl text-center lg:text-right lg:pr-[1rem_!important]">
          Crafting immersive sonic experiences that blend organic textures with
          cutting-edge electronic elements. Based in Los Angeles, pushing the
          boundaries of contemporary electronic music.
        </p>
        <div className="flex gap-5 mt-[1rem_!important]">
          <button className="cursor-pointer tracking-wide text-lg font-bold btn-padding bg-neon-green text-dark-slate rounded-full transition-all border-2 border-neon-green/50 btn-hover-effect">
            Listen Now
          </button>
          <button className="cursor-pointer tracking-wide text-lg font-bold btn-padding border-2 border-neon-green/50 rounded-full hover:bg-neon-green/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect">
            Latest Release
          </button>
        </div>
      </article>

      <article className="order-1 sm:order-2 sm:flex-1/3">
        <img
          className="object-cover h-full rounded-lg"
          src="/public/cover.png"
          alt="Nick White Cover Photo"
        />
      </article>
    </div>
  );
}

export default Homepage;
