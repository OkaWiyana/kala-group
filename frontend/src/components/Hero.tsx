import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-widest">Kala Group</p>

        <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Built around different ways of creating.
        </h1>

        <p className="mt-6 max-w-xl text-muted-foreground">
          A growing group of creative and active ventures, each with its own
          identity and purpose.
        </p>
        <div className="mt-8">
          <Button render={<Link to="/divisions" />} className="p-4">
            Explore Our Devision
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
