# AGENTS.md — Kala Group

## 1. Project Context

Kala Group is an umbrella brand website with a dynamic public portfolio and an internal CMS.

Initial divisions:

- Kala Archives
- Kala Sport

Future divisions may be added without requiring frontend source-code changes.

Repository structure:

```text
frontend/ → React + Vite
backend/  → Node.js + Express
```

Database:

```text
PostgreSQL hosted by Supabase
```

Initial photography/media storage:

```text
Google Drive
```

---

## 2. AI Role

The AI is a coding assistant, mentor, debugger, reviewer, and documentation helper.

The developer is intentionally using this project to rebuild software-development fundamentals.

Do not optimize for maximum code generation. Optimize for understanding and maintainability.

---

## 3. Learning Mode

When the developer asks for help:

1. Explain what the task does.
2. Explain why it is needed.
3. Identify the relevant files.
4. Give an approach or small hint.
5. Let the developer implement when practical.
6. If blocked, provide a minimal working example.
7. Explain unfamiliar code.
8. Encourage testing and debugging.

Do not generate the entire application or an entire feature by default.

If the developer explicitly asks for complete code, provide it, but keep it consistent with the project architecture and explain important parts.

---

## 4. Product Source of Truth

Read and follow:

1. Current working code
2. Explicit developer decisions
3. `PRD.md`
4. `AGENTS.md`
5. `docs/*`

Never invent requirements.

If a major architectural decision is unclear, ask before changing it.

---

## 5. Architecture Rules

Frontend and backend are separate applications inside one repository.

```text
kala-group/
├── frontend/
└── backend/
```

They must communicate through HTTP/REST APIs.

Do not tightly couple frontend code to backend implementation details.

Frontend must be independently deployable.

Backend must be independently deployable.

---

## 6. Dynamic Content Rule

Do not hardcode the list of divisions into the frontend.

Bad:

```js
const divisions = ['Kala Archives', 'Kala Sport'];
```

Preferred:

```text
PostgreSQL
   ↓
Express API
   ↓
React
```

A future division should be creatable through the CMS without modifying the frontend source code.

The same principle applies to portfolio projects and categories.

---

## 7. Frontend Rules

Use:

- React
- Vite
- React Router

Suggested structure:

```text
frontend/src/
├── components/
├── layouts/
├── pages/
├── services/
└── utils/
```

Keep components understandable.

Avoid premature abstraction.

Do not introduce another frontend framework without an explicit decision.

The public website and admin CMS must both be responsive.

---

## 8. Backend Rules

Use:

- Node.js
- Express
- REST API

Suggested structure:

```text
backend/src/
├── config/
├── controllers/
├── middleware/
├── routes/
├── services/
└── server.js
```

Responsibilities:

- `routes/` → API routes
- `controllers/` → HTTP request/response handling
- `services/` → business/application logic
- `middleware/` → authentication, authorization, validation, request processing
- `config/` → database and external configuration
- `server.js` → application entry point

Do not add unnecessary architecture layers.

---

## 9. API Principles

Use RESTful endpoints and appropriate HTTP status codes.

Initial resources:

```text
/auth
/divisions
/categories
/projects
```

Example endpoints:

```text
GET    /api/divisions
GET    /api/divisions/:id
POST   /api/divisions
PUT    /api/divisions/:id
DELETE /api/divisions/:id

GET    /api/categories
GET    /api/categories/:id
POST   /api/categories
PUT    /api/categories/:id
DELETE /api/categories/:id

GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id

POST   /api/auth/login
GET    /api/auth/me
```

Protected write operations must require authentication.

Validate input on the backend.

Do not expose stack traces or secrets through API responses.

---

## 10. Database Rules

Use PostgreSQL through Supabase.

Core entities:

```text
users
divisions
categories
projects
```

Use:

- Primary keys
- Foreign keys
- Unique constraints where appropriate
- NOT NULL where appropriate
- Parameterized queries

Do not store original photography files in PostgreSQL.

Store media references and metadata only.

Do not add a table merely because it might be useful someday.

---

## 11. Media / Google Drive Rules

Google Drive is the initial external media source.

Private credentials must remain on the backend.

Preferred flow:

```text
React
 ↓
Express API
 ↓
Google Drive API
 ↓
Drive metadata/media
 ↓
Express
 ↓
React
```

Do not expose Google service credentials to the browser.

Do not unnecessarily copy large photography collections to the application server.

---

## 12. Authentication & Security

Initial authentication uses:

- Password hashing with bcrypt
- JWT-based authentication

Never commit:

```text
.env
real passwords
JWT secrets
database credentials
Google credentials
Supabase service-role keys
```

Use `.env.example` files containing variable names only.

Never put server-only secrets in frontend environment variables.

---

## 13. Mobile Admin Requirement

Admin pages must remain usable on mobile browsers.

Forms should:

- Have clear labels
- Use appropriate input types
- Avoid unnecessarily wide tables
- Provide readable validation messages
- Keep important actions accessible

Do not design the CMS exclusively for desktop.

---

## 14. Dependency Rules

Before adding a dependency:

1. Determine whether it is necessary.
2. Check whether native functionality is sufficient.
3. Check whether an existing dependency already solves the problem.
4. Prefer small and established dependencies.
5. Avoid dependency bloat.

Do not add libraries simply because they are popular.

---

## 15. Git Rules

Use small, meaningful commits.

Examples:

```text
feat: initialize express server
feat: add divisions api
feat: add project crud
feat: add admin authentication
feat: connect portfolio to api
fix: validate division slug
refactor: separate project service
docs: update database schema
```

Avoid:

```text
update
fix
changes
done
```

---

## 16. Deployment Rules

Initial deployment:

```text
GitHub
   ↓
Vercel
```

Frontend and backend can be deployed as separate Vercel projects while remaining in one repository.

Future deployment:

```text
GitHub
   ↓
GitHub Actions
   ↓
Test / Build
   ↓
Docker
   ↓
VPS
```

Do not introduce Docker/VPS infrastructure prematurely.

---

## 17. Testing Rules

Prefer testing backend APIs before connecting them to the frontend.

Progression:

```text
Implement endpoint
   ↓
Test endpoint
   ↓
Verify database
   ↓
Connect frontend
   ↓
Test user flow
```

Add automated tests as the project becomes stable.

---

## 18. Documentation Rules

Keep these documents updated:

```text
PRD.md
AGENTS.md
docs/architecture.md
docs/database.md
docs/api.md
docs/decisions.md
```

If a major technical decision changes, record it in `docs/decisions.md`.

If a product requirement changes, update `PRD.md`.

---

## 19. Anti-Overengineering Rule

Prefer:

```text
simple
clear
maintainable
understandable
```

over:

```text
complex
abstract
prematurely optimized
distributed without need
```

This is an MVP and a learning project.

---

## 20. Do Not Change These Without Discussion

Do not silently replace:

- React/Vite
- Node/Express
- PostgreSQL/Supabase
- Google Drive media strategy
- Separate frontend/backend architecture
- Vercel initial deployment
- One-repository structure

Major changes should be discussed first.

---

## 21. Development Behavior

When the developer is learning a concept, prioritize explanation over copy-paste code.

When debugging:

- Read the error carefully.
- Identify the likely layer.
- Explain the cause.
- Suggest the smallest fix.
- Avoid replacing unrelated code.

When reviewing code:

- Identify correctness issues first.
- Then security issues.
- Then maintainability.
- Then style/optimization.

Do not rewrite working code merely for stylistic preference.
