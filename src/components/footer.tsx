import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { icon: FaInstagram, label: 'Instagram',  href: 'https://instagram.com/turnerandtweeds' },
  { icon: FaXTwitter,  label: 'Twitter',    href: 'https://twitter.com/turnerandtweeds' },
  { icon: FaSoundcloud, label: 'SoundCloud', href: 'https://soundcloud.com/user-784236823' },
  { icon: FaFacebook,  label: 'Facebook',   href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-muted px-6 md:px-8 py-10">
      <div className="max-w-[860px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <span className="font-display text-[1.2rem] font-normal text-cream">
          Turner & Tweeds
        </span>

        <ul className="flex items-center gap-5 list-none">
          {socials.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-gold transition-colors"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[0.75rem] text-[#6A5A4A] pt-6 border-t border-[#2A2010] md:w-full md:text-center">
          © {new Date().getFullYear()} Turner & Tweeds · Acoustic Duo
        </p>
      </div>
    </footer>
  )
}