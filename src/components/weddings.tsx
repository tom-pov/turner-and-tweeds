const packages = [
    {
      name: 'Ceremony',
      description:
        "We arrive early and set up before your guests arrive. We'll play for your guests as they arrive and take their seats (usually 20–30 minutes) with songs to set the mood. We then play a special song of your choice as you walk down the aisle, a few songs whilst you sign the register (around 10 minutes), and a final song as you leave as a married couple!",
    },
    {
      name: 'Drinks Reception',
      description:
        "We provide live lounge style music to entertain your guests as they enjoy a drink and have photos taken. We'll perform 2× 45 minute sets with background DJ music between sets.",
    },
    {
      name: 'Ceremony & Drinks Reception',
      description:
        'We combine both options above — performing at your ceremony and then moving to your drinks reception to continue the entertainment.',
    },
    {
      name: 'Wedding Breakfast',
      description:
        'We create a chilled atmosphere with easy listening and tasteful acoustic hits to help you and your guests relax and enjoy your wedding breakfast. 2× 45 minute sets with background DJ music in between.',
    },
    {
      name: 'Early Evening Entertainment',
      description:
        "The perfect way to get your party started before your band or DJ arrives. We'll play 2× 45 minute sets of acoustic hits and can end our set by performing your first dance (which we will learn for you), before handing over to your evening entertainment.",
    },
    {
      name: 'All Evening Entertainment (With Full Band)',
      description:
        "The full package to cover all your entertainment needs for the whole day. A bespoke acoustic package for your daytime (ceremony and/or 2× 45 minute sets at drinks reception or wedding breakfast), followed by Ash and Dawn joined on stage as a professional four-piece wedding band (4× vocals, guitar, bass, drums) performing 2× 60 minute sets. The full band will learn one song of your choice at no charge. Our full laptop DJ service is included at no additional charge — music before, between, and after all live sets, finishing at midnight.",
      featured: true,
    },
  ]
  
  const equipment = [
    'High-end 600w PA system (with subwoofers as required)',
    'Full lighting rig (floor and stand lights)',
    'PAT tested equipment',
    'Public Liability Insurance',
    'Certificates available to venues on request',
  ]
  
  export default function Weddings() {
    return (
      <div className="bg-cream-mid border-y border-border">
        <section id="weddings" className="py-16 md:py-20 px-6 md:px-8 max-w-[860px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">Weddings & Events</p>
          <h2 className="font-display text-[2rem] md:text-[2.6rem] font-light leading-snug">
            Your Perfect <em className="italic text-brown">Wedding Sound</em>
          </h2>
          <div className="w-12 h-[1.5px] bg-gold my-6" />
  
          <p className="text-[0.93rem] text-body max-w-[640px] mb-10">
            We offer a number of different packages and can create something bespoke for you
            if there's something specific you're after. For parties, corporate, or other
            events,{' '}
            <a href="#contact" className="text-brown underline underline-offset-2">
              get in touch
            </a>{' '}
            and we can tailor something to suit your needs.
          </p>
  
          {/* Packages */}
          <div className="flex flex-col gap-[1px] bg-border border border-border mb-12">
            {packages.map(({ name, description, featured }) => (
              <div key={name} className={`p-6 md:p-7 ${featured ? 'bg-dark' : 'bg-cream'}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className={`font-display text-[1.15rem] font-normal ${featured ? 'text-cream' : 'text-dark'}`}>
                    {name}
                  </h3>
                  {featured && (
                    <span className="text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 border border-gold text-gold font-medium">
                      Full Package
                    </span>
                  )}
                </div>
                <p className={`text-[0.88rem] leading-relaxed ${featured ? 'text-[#B0A090]' : 'text-body'}`}>
                  {description}
                </p>
              </div>
            ))}
          </div>
  
          {/* Equipment */}
          <div className="mb-10">
            <h3 className="font-display text-[1.4rem] font-normal mb-4">Our Equipment</h3>
            <ul className="flex flex-col gap-2 list-none mb-6">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[0.85rem] text-body">
                  <span className="text-gold mt-[2px] shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[0.88rem] text-muted">
              We're completely flexible and travel throughout the UK. No two weddings are
              the same, so we'll always accommodate set times to suit your needs.
            </p>
          </div>
  
          <a href="#contact" className="btn btn--dark">
            Request a No-Obligation Quote
          </a>
        </section>
      </div>
    )
  }