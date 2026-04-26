import { useState, useEffect } from 'react'

const featured = [
  { genre: 'Folk / Acoustic', title: 'Big Yellow Taxi',          artist: 'Joni Mitchell' },
  { genre: 'Pop / Disco',     title: 'Does Your Mother Know',    artist: 'Abba' },
  { genre: 'Indie / Rock',    title: 'Sit Down',                 artist: 'James' },
  { genre: 'Classic Rock',    title: 'Rocking All Over The World', artist: 'Status Quo' },
  { genre: 'Pop',             title: 'Pink Pony Club',           artist: 'Chappell Roan' },
  { genre: 'Pop / Indie',     title: 'As It Was',                artist: 'Harry Styles' },
  { genre: 'Pop / Folk',      title: 'Call Me Al',               artist: 'Paul Simon' },
  { genre: 'Indie / Pop',     title: 'Kiss Me',                  artist: 'Sixpence None The Richer' },
  { genre: 'Pop / Rock',      title: 'Medley',                   artist: 'The Script' },
]

// Full setlist — does not include the featured 9 above to avoid duplicates.
// Old featured songs (Someone Like You, Fast Car etc.) have been moved here.
const fullSetlist = [
  'A Little Respect – Erasure',
  'All About That Bass – Meghan Trainor',
  'American Boy – Estelle / Kanye West',
  'Blinding Lights – The Weeknd',
  'Budapest – George Ezra',
  'Chasing Cars – Snow Patrol',
  'Come Together – The Beatles',
  'Delilah – Tom Jones',
  "Don't Look Back In Anger – Oasis",
  'Everywhere – Fleetwood Mac',
  'Fast Car – Tracy Chapman',
  'Feel It Still – Portugal. The Man',
  'Forget You – Cee Lo Green',
  'Happy – Pharrell Williams',
  'Hey Jude – The Beatles',
  'Hey, Soul Sister – Train',
  'Ho Hey – The Lumineers',
  'Hold My Hand – Jess Glynne',
  'How Long Will I Love You – Ellie Goulding',
  "I Can't Help Falling In Love With You – Elvis Presley",
  'I Wanna Dance With Somebody – Whitney Houston',
  "Isn't She Lovely – Stevie Wonder",
  'Jolene – Dolly Parton',
  'Jungle Book Medley – Disney',
  'Make You Feel My Love – Bob Dylan / Adele',
  'Mercy – Duffy',
  'Mr Brightside – The Killers',
  'My Girl – The Temptations',
  'New Rules – Dua Lipa',
  'No Diggity – Blackstreet',
  'Perfect 10 – The Beautiful South',
  'Rehab – Amy Winehouse',
  'Rock With You – Michael Jackson',
  'Saw Her Standing There – The Beatles',
  'Seven Nation Army – The White Stripes',
  'Shallow – Lady Gaga & Bradley Cooper',
  'She Said – Plan B',
  'Shotgun – George Ezra',
  "Signed, Sealed, Delivered (I'm Yours) – Stevie Wonder",
  'Someone Like You – Adele',
  'Stand By Me – Ben E King',
  'Stuck In The Middle With You – Stealers Wheel',
  'Summer Of 69 – Bryan Adams',
  "Sweet Child O' Mine – Guns N' Roses",
  'Take On Me – Aha',
  'The Scientist – Coldplay',
  'Thinking Out Loud – Ed Sheeran',
  'This Charming Man – The Smiths',
  'Ticket To Ride – The Beatles',
  'Use Somebody – Kings Of Leon',
  'Valerie – Amy Winehouse',
  'Wonderwall – Oasis',
  'You Make My Dreams Come True – Hall & Oates',
  "You've Got A Friend In Me – Randy Newman",
]

export default function Songs() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!modalOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      <div className="bg-cream-mid border-y border-border">
        <section id="songs" className="py-16 md:py-20 px-6 md:px-8 max-w-[860px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">Setlist</p>
          <h2 className="font-display text-[2rem] md:text-[2.6rem] font-light leading-snug">
            Songs We <em className="italic text-brown">Love to Play</em>
          </h2>
          <div className="w-12 h-[1.5px] bg-gold my-6" />
          <p className="text-[0.93rem] text-body max-w-[560px] mb-8">
            A mix of modern Live Lounge covers and timeless classics — here's a flavour
            of what you can expect from a Turner & Tweeds set.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-border border border-border mb-6">
            {featured.map(({ genre, title, artist }) => (
              <div key={title} className="bg-cream p-5">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium mb-1">{genre}</p>
                <p className="font-display text-[1.05rem]">{title}</p>
                <p className="text-[0.8rem] text-muted mt-0.5">{artist}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.8rem] text-muted tracking-wide">
              New songs added regularly · Requests welcome
            </p>
            <button onClick={() => setModalOpen(true)} className="btn btn--dark">
              View Full Setlist
            </button>
          </div>
        </section>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-cream w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-border shrink-0">
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold font-medium mb-0.5">
                  Full Setlist
                </p>
                <h3 className="font-display text-[1.5rem] font-light">Our Repertoire</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close setlist"
                className="flex items-center justify-center w-8 h-8 text-muted hover:text-dark transition-colors bg-transparent border-none cursor-pointer text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-6 md:px-8 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {fullSetlist.map((song) => {
                  const [title, artist] = song.split(' – ')
                  return (
                    <div key={song} className="flex flex-col border-b border-border pb-2.5">
                      <span className="font-display text-[1rem] text-dark">{title}</span>
                      <span className="text-[0.78rem] text-muted">{artist}</span>
                    </div>
                  )
                })}
              </div>
              <p className="mt-8 text-[0.78rem] text-muted">
                New songs added regularly · Can't see what you're looking for?{' '}
                <button
                  onClick={() => {
                    setModalOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-brown underline underline-offset-2 bg-transparent border-none cursor-pointer font-body text-[0.78rem]"
                >
                  Get in touch
                </button>{' '}
                and we'll do our best to learn it for you.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}