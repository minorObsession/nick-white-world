function About() {
  return (
    <div className="flex w-full sm:flex-row flex-col gap-8">
      {/* Artist Journey Section */}
      <article className="article-hover-effect p-[2rem_!important] flex-1 flex flex-col gap-5 bg-gradient-to-br from-deep-navy to-dark-slate rounded-lg">
        <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center lg:text-left bg-gradient-to-r from-neon-green/90 to-neon-green/70 bg-clip-text text-transparent">
          The Journey
        </h2>
        <p className="text-accent text-lg md:text-xl text-center lg:text-left">
          From bedroom producer to electronic music innovator
        </p>
        <p className="text-body text-base md:text-lg text-center lg:text-left">
          Starting in 2018, Nick White began crafting his unique sound in the
          heart of Los Angeles. His journey from underground producer to
          electronic music innovator has been marked by a relentless pursuit of
          sonic experimentation and emotional depth.
        </p>
      </article>

      {/* Achievements Section */}
      <article className="article-hover-effect p-[2rem_!important] flex-1 flex flex-col gap-5 bg-gradient-to-br from-deep-navy to-dark-slate rounded-lg">
        <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center lg:text-left bg-gradient-to-r from-neon-green/90 to-neon-green/70 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-neon-green text-2xl">✦</span>
            <p className="text-accent text-lg">
              Featured on Spotify's "Electronic Rising"
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neon-green text-2xl">✦</span>
            <p className="text-accent text-lg">1M+ streams across platforms</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neon-green text-2xl">✦</span>
            <p className="text-accent text-lg">
              Collaborations with industry leaders
            </p>
          </div>
        </div>
      </article>

      {/* Vision Section */}
      <article className="article-hover-effect p-[2rem_!important] flex-1 flex flex-col gap-5 bg-gradient-to-br from-deep-navy to-dark-slate rounded-lg">
        <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center lg:text-left bg-gradient-to-r from-neon-green/90 to-neon-green/70 bg-clip-text text-transparent">
          Vision
        </h2>
        <p className="text-body text-base md:text-lg text-center lg:text-left">
          Pushing the boundaries of electronic music by blending organic
          elements with cutting-edge production techniques. Each track is a
          journey through sound, designed to evoke emotion and create immersive
          experiences.
        </p>
        <button className="cursor-pointer tracking-wide text-lg font-bold btn-padding border-2 border-neon-green/50 rounded-full hover:bg-neon-green/80 hover:text-black hover:bg-opacity-20 transition-all btn-hover-effect self-center lg:self-start">
          Explore Discography
        </button>
      </article>
    </div>
  );
}

export default About;
