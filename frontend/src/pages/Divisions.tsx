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
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
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
            {divisions.map((division) => (
              <article
                key={division.name}
                className="rounded-xl border p-6 md:p-8"
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
