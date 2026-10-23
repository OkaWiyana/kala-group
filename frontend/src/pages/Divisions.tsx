import { useEffect, useState } from "react";
import { getDivision } from "@/lib/api";

type Division = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
};

function Divisions() {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDivisions() {
      try {
        const data: Division[] = await getDivision();
        setDivisions(data);
      } catch {
        setError("Gagal mengambil data divisions");
      } finally {
        setIsloading(false);
      }
    }
    fetchDivisions();
  }, []);

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <p className="mb-3 inline-block text-sm uppercase rounded-full py-2 px-5 bg-white/5 border-white/10 backdrop-blur-2xl tracking-widest border">
          Kala Group
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Our Divisions
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Explore the different ventures the make up Kala Group, each with its
          own identity and purpose.
        </p>

        {isloading ? (
          <p className="mt-12">Memuat data divisions</p>
        ) : error ? (
          <p className="mt-12 text-destructive">{error}</p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {divisions.map((division, index) => (
              <article
                key={division.name}
                className={`rounded-xl border border-white/10 bg-kala-primary p-6 md:p-8 ${divisions.length % 2 === 1 && index === divisions.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
              >
                <p className="text-sm text-muted-foreground">
                  {division.category}
                </p>
                <h2 className="mt-4 text-2xl font-semibold">{division.name}</h2>
                <p className="mt-3 text-muted-foreground">
                  {division.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Divisions;
