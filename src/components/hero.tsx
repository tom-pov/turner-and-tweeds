export default function Hero() {
    return (
      <section
        className="hero-overlay relative flex items-end h-[480px] md:h-[520px] bg-cover bg-[center_30%] px-6 pb-10 md:px-12 md:pb-12"
        style={{ backgroundImage: "url('https://turnerandtweeds.co.uk/wp-content/uploads/2019/05/img_3568-cropped.jpg')" }}
      >
        <div className="relative z-10 text-cream">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">
            Acoustic Duo · Chester, UK
          </p>
          <h1 className="font-display text-[2.8rem] md:text-[3.8rem] font-light leading-[1.1] mb-5">
            Turner &amp; <em className="italic text-[#E8C97A]">Tweeds</em>
          </h1>
          <a href="#contact" className="btn btn--light">
            Book Us
          </a>
        </div>
      </section>
    )
  }