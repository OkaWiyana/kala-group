# Architecture & Technical Decisions — Kala Group

This document records significant technical and product decisions.

---

## ADR-001 — One Repository

**Date:** 2026-09-21

### Decision

Use one Git repository with separate frontend and backend applications.

```text
kala-group/
├── frontend/
└── backend/
```

### Reason

- Clear separation of responsibilities
- Simple Git workflow
- Easy Vercel deployment
- Easy future Docker/VPS migration
- Suitable for a personal portfolio project

---

## ADR-002 — React + Vite Frontend

**Date:** 2026-09-21

### Decision

Use React + Vite for the frontend.

### Reason

The project is intentionally used to rebuild frontend fundamentals and practice direct frontend/backend communication.

Next.js may be used in other projects or considered separately later.

---

## ADR-003 — Node.js + Express Backend

**Date:** 2026-09-21

### Decision

Use Node.js + Express for the backend.

### Reason

- Explicit REST API architecture
- Practice HTTP fundamentals
- Clear routing and middleware concepts
- Lightweight enough for the MVP
- Straightforward Docker/VPS migration later

---

## ADR-004 — PostgreSQL via Supabase

**Date:** 2026-09-21

### Decision

Use PostgreSQL hosted through Supabase.

### Reason

PostgreSQL provides the relational database fundamentals needed for the project, while Supabase removes the need to operate a database server manually during the free-tier stage.

---

## ADR-005 — Dynamic Divisions

**Date:** 2026-09-21

### Decision

Divisions such as Kala Archives and Kala Sport are database records rather than permanent frontend constants.

### Reason

The brand may add future divisions such as a studio. The website should be able to display a new division after it is created through the CMS without changing React source code.

---

## ADR-006 — Google Drive Media Storage

**Date:** 2026-09-21

### Decision

Use Google Drive as the initial source for photography galleries.

### Reason

Photography files are large. Keeping originals in Google Drive reduces application storage requirements and keeps PostgreSQL lightweight.

The database stores references/metadata rather than original image binaries.

---

## ADR-007 — Vercel First

**Date:** 2026-09-21

### Decision

Use Vercel for initial deployment.

### Reason

- Git-based deployment
- Suitable for current free-tier development
- Low operational overhead
- Convenient for separate frontend/backend projects

---

## ADR-008 — Docker/VPS Later

**Date:** 2026-09-21

### Decision

Do not introduce Docker or VPS deployment during the first implementation phase.

### Reason

The current goal is to rebuild application fundamentals and produce a working MVP. Docker/VPS will be introduced after the core application is stable.

---

## ADR-009 — AI as Assistant

**Date:** 2026-09-21

### Decision

AI coding tools may assist with explanation, debugging, review, documentation, and implementation when the developer is blocked.

### Reason

The project is also a deliberate learning exercise. The developer should understand the code rather than relying on full-project generation.
