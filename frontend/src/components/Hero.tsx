import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8 md:text-start text-center">
        <p className="mb-4 inline-block px-3 py-1 rounded-full text-sm uppercase tracking-widest bg-white/10 border-white/10 border backdrop-blur-2xl">
          Kala Group holding
        </p>

        <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Built around <br /> different ways of creating.
        </h1>

        <p className="mt-6 max-w-xl text-muted-foreground">
          A growing group of creative and active ventures, each with its own
          identity and purpose.
        </p>
        <div className="mt-8">
          <Button
            render={<Link to="/divisions" />}
            className="ph-arrow bg-blue-600 hover:bg-blue-600 p-8 hover:shadow-[0_0_30px_5px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            Explore Our Devision
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
