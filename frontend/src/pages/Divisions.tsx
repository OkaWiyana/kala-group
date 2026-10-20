const divisions = [
  {
    name: "Kala Archives",
    category: "Photography",
    description:
      "Photography and visual documentation that preserve meaningful moments.",
  },
  {
    name: "Kala Sport",
    category: "Sport & Running",
    description:
      "A space for running, movement, and the pursuit of an active lifestyle.",
  },
];

function Divisions() {
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
      </div>
    </section>
  );
}

export default Divisions;
