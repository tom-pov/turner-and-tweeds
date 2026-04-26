const highlights = [
    'BBC Radio 1', 'BBC Radio 6Music', 'E4', 'Sky TV',
    'Weddings', 'Festivals', 'Corporate Events', 'Private Parties',
  ]
  
  export default function About() {
    return (
      <section id="about" className="py-16 md:py-20 px-6 md:px-8 max-w-[860px] mx-auto">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">Our Story</p>
        <h2 className="font-display text-[2rem] md:text-[2.6rem] font-light leading-snug">
          Meet <em className="italic text-brown">Dawn & Ash</em>
        </h2>
        <div className="w-12 h-[1.5px] bg-gold my-6" />
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex flex-col gap-4 text-[0.95rem] text-body">
            <p>
              We're Dawn and Ash. Together, we are the Turner & Tweeds Acoustic Duo.
              We met in Chester in 2007 while studying for degrees in Popular Music, and we’ve been making music together ever since.
            </p>
            <p>
            Blending modern Live Lounge–style acoustic covers with timeless classics, we create a sound that appeals to every generation, keeping the energy up and the crowd engaged from the first song to the last.
            </p>
            <a href="#contact" className="btn btn--dark mt-2 w-fit">
              Get in Touch
            </a>
          </div>
  
          <div className="border border-border bg-cream-mid p-6 md:p-8">
            <h3 className="font-display text-[1.4rem] font-normal mb-4">A Few Highlights</h3>
            <ul className="flex flex-wrap gap-2 list-none">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-[0.7rem] tracking-[0.08em] uppercase px-3 py-1.5 bg-cream border border-gold text-brown font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-[0.82rem] text-body">
                <strong className="text-dark">Popular Music</strong> graduates with a Masters
                and years of solo and duo performance across the UK.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }