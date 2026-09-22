# Architecture — Kala Group

## 1. Overview

Kala Group uses a simple monorepo with two independent applications:

```text
kala-group/
├── frontend/  → React + Vite
└── backend/   → Node.js + Express
```

The website is dynamic. Public content is retrieved through the backend rather than hardcoded into React.

---

## 2. High-Level System

```text
                         PUBLIC USER
                              |
                              v
                       React + Vite
                         Frontend
                              |
                            HTTP
                              |
                              v
                       Node + Express
                         REST API
                       /     |      \
                      /      |       \
                     v       v        v
                PostgreSQL  Auth   Google Drive
                / Supabase          Photography
```

---

## 3. Content Flow

### Public Content

```text
Admin CMS
   ↓
Express API
   ↓
PostgreSQL
   ↓
Express API
   ↓
React
   ↓
Public Website
```

### Media Content

```text
Admin
   ↓
Project stores Drive folder reference
   ↓
PostgreSQL
   ↓
Backend requests Drive data
   ↓
Frontend gallery
```

---

## 4. Division Model

Divisions are database records, not frontend constants.

Example records:

```text
Kala Archives
Kala Sport
```

Future example:

```text
Kala Studio
```

The frontend should render whichever published divisions the API returns.

---

## 5. Project Model

A project belongs to a division.

Example:

```text
Kala Archives
   ↓
Sidang Series

Kala Sport
   ↓
Running Session
```

A project may also belong to a category.

---

## 6. Deployment — Initial

```text
                         GitHub
                            |
             +--------------+--------------+
             |                             |
             v                             v
      Vercel Frontend                Vercel Backend
        React/Vite                     Express
                                            |
                               +------------+------------+
                               |                         |
                               v                         v
                         Supabase                  Google Drive
                         PostgreSQL                 Photography
```

Frontend and backend may be configured as separate Vercel projects using different root directories from the same repository.

---

## 7. Deployment — Future

```text
GitHub
   ↓
GitHub Actions
   ↓
Lint / Test / Build
   ↓
Docker Image
   ↓
VPS
   ↓
Frontend + Backend containers
```

The application should avoid architecture decisions that make this migration unnecessarily difficult.

---

## 8. Environment Separation

Frontend:

```env
VITE_API_URL=
```

Backend:

```env
DATABASE_URL=
JWT_SECRET=
GOOGLE_DRIVE_CREDENTIALS=
```

Real credentials must never be committed.
