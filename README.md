# Kala Group

Dynamic brand portfolio and content management system for Kala Group.

## Initial Divisions

- Kala Archives — Photography / visual documentation
- Kala Sport — Sport / running

The system is designed so future divisions can be added through the CMS without hardcoding them into the frontend.

## Repository

```text
kala-group/
├── frontend/  # React + Vite
├── backend/   # Node.js + Express
├── docs/      # Technical documentation
├── PRD.md
├── AGENTS.md
└── README.md
```

## Documentation

- [Product Requirements](./PRD.md)
- [AI Development Rules](./AGENTS.md)
- [Architecture](./docs/architecture.md)
- [Database](./docs/database.md)
- [API](./docs/api.md)
- [Technical Decisions](./docs/decisions.md)

## Initial Stack

- React + Vite
- Node.js + Express
- PostgreSQL via Supabase
- Google Drive for initial photography storage
- GitHub
- Vercel

## Deployment Direction

Initial:

```text
GitHub → Vercel
```

Future:

```text
GitHub → GitHub Actions → Docker → VPS
```

## Project Status

Planning / initial setup.

Documentation is a living source of truth and should be updated as requirements and technical decisions evolve.
