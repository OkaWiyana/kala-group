import { Link } from "react-router-dom";

const divisions = [
  {
    name: "Kala Archives",
    description:
      "Photography and visual documentation that preserve meaningful moments.",
    href: "/divisions",
    number: "01",
  },
  {
    name: "Kala Sport",
    description:
      "A space for running, movement, and the pursuit of an active lifestyle.",
    href: "/divisions",
    number: "02",
  },
];

function DivisionsSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">
            Our Divisions
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Different identities, One group.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {divisions.map((division) => (
            <Link
              key={division.name}
              to={division.href}
              className="group rounded-xl border p-6 transition-colors hover:bg-muted md:p-8"
            >
              <p className="mb-8 text-sm text-muted-foreground">
                {division.number}
              </p>
              <h3 className="text-2xl font-semibold">{division.name}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                {division.description}
              </p>
              <p>
                Explore division <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DivisionsSection;
