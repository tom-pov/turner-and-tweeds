const soundcloudBase = 'https://w.soundcloud.com/player/?color=%23C4963A&inverse=true&auto_play=false&show_user=true&url=https%3A//soundcloud.com/user-784236823'

const tracks = [
  { title: 'No Diggity',         slug: 'no-diggity' },
  { title: 'Jungle Book Medley', slug: 'jungle-book-medley' },
  { title: 'Shotgun', slug: 'shotgun'},
  { title: 'Rock With You', slug: 'rock-with-you-acoustic-cover'},
]

export default function HearUs() {
  return (
    <section id="hear-us" className="py-16 md:py-20 px-6 md:px-8 max-w-[860px] mx-auto">
      <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">Media</p>
      <h2 className="font-display text-[2rem] md:text-[2.6rem] font-light leading-snug">
        <em className="italic text-brown">Hear Us</em> Play
      </h2>
      <div className="w-12 h-[1.5px] bg-gold my-6" />
      <p className="text-[0.93rem] text-body mb-8">
        Listen to some of our recordings and get a feel for the Turner & Tweeds sound.
      </p>

      <div className="flex flex-col gap-6">
        {/* SoundCloud tracks */}
        <div className="bg-dark p-6">
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-medium mb-4">
            SoundCloud
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tracks.map(({ title, slug }) => (
              <div key={slug}>
                <p className="text-[0.75rem] text-[#B0A090] mb-2">{title}</p>
                <iframe
                  title={title}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`${soundcloudBase}/${slug}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* YouTube */}
        <div className="bg-dark p-6">
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-gold font-medium mb-4">
            YouTube
          </p>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              title="Turner & Tweeds on YouTube"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/E1Tuv4cVsSc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}