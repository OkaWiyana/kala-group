import { ArrowRight } from "lucide-react";

function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground text-center md:text-left">
            who we are
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center md:text-left">
            Merekam jejak,
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 ml-2 md:ml-0">
              mendobrak batasan.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-center md:text-left">
            Kala Group adalah entitas kreatif profesional yang berawal dari
            dedikasi mendalam terhadap dokumentasi visual. Menyatukan berbagai
            cara dalam berkarya, kami dirancang untuk tidak berhenti pada satu
            titik, melainkan terus berevolusi dan berekspansi lebih luas di
            dalam ekosistem industri kreatif.
          </p>

          <a
            href="/about"
            className="group transition-colors text-white mt-12 flex items-center gap-2 underline underline-offset-8 justify-center md:justify-start"
          >
            Discover Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
