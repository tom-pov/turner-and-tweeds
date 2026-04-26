import { useState } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Songs',    href: '#songs' },
  { label: 'Hear Us',  href: '#hear-us' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Contact',  href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-6 md:px-8">
        <span className="font-display text-xl font-semibold tracking-wide uppercase">
          Turner <span className="text-brown">&</span> Tweeds
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.72rem] tracking-[0.12em] uppercase font-medium text-muted hover:text-brown transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-dark transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="md:hidden flex flex-col list-none border-t border-border">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="block px-6 py-4 text-[0.72rem] tracking-[0.12em] uppercase font-medium text-muted hover:text-brown hover:bg-cream-mid transition-colors border-b border-border last:border-b-0"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}