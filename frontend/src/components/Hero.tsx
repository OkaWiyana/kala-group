import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8 md:text-start text-center">
        <div className="inline-flex items-center bg-white/5 border-white/10 border rounded-full py-1 px-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-kala-secondary animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-kala-secondary -ml-1"></span>
          <p className="inline-block px-3 rounded-full text-sm uppercase tracking-widest ">
            Kala Group holding
          </p>
        </div>

        <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Built around <br /> different ways of creating.
        </h1>

        <p className="mt-6 max-w-xl text-muted-foreground">
          A growing collective of creative, technology, and lifestyle ventures,
          each operating with its own distinct identity, united by a relentless
          pursuit of purpose and impact.
        </p>
        <div className="mt-8">
          <Button
            render={<Link to="/divisions" />}
            className=" group bg-kala-secondary hover:bg-kala-secondary text-black p-6 hover:shadow-[0_0_30px_5px_rgba(237,225,207,0.6)] transition-all duration-300 md:text-lg"
          >
            Explore Our Devisions
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:transition-all group-hover:-translate-y-1 group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
