# Kala Group — Product Requirements Document

## 1. Project Overview

**Kala Group** is a dynamic company/brand portfolio website that acts as the public home for the Kala Group ecosystem and its divisions.

The initial divisions are:

- **Kala Archives** — photography / visual documentation division
- **Kala Sport** — sports / running-related division

The architecture must allow additional divisions, such as a future studio division, without requiring the public website to be hardcoded or rebuilt for every content change.

The website includes a public-facing portfolio and an internal admin CMS. Administrators can manage divisions, portfolio projects, content, categories, and publication status from a laptop or mobile browser.

This project is also a full-stack learning project intended to rebuild practical frontend/backend fundamentals and provide a realistic project for software-development interview preparation.

---

## 2. Product Vision

Create a clean, editorial, scalable digital home for Kala Group where:

```text
Kala Group
   |
   +-- Kala Archives
   |      +-- Portfolio
   |      +-- Division information
   |      +-- Projects
   |
   +-- Kala Sport
   |      +-- Portfolio
   |      +-- Division information
   |      +-- Projects
   |
   +-- Future divisions
```

Content should be managed through the CMS rather than hardcoded into React components.

---

## 3. Core Goals

- Present Kala Group as an umbrella brand.
- Present each division with its own identity, description, and portfolio.
- Allow new divisions to be added through the CMS.
- Allow portfolio projects to be added, edited, published, unpublished, and deleted through the CMS.
- Allow important website content to be updated without modifying source code.
- Keep frontend and backend separated.
- Keep infrastructure lightweight enough for an initial free-tier deployment.
- Store large photography/media files outside the application database where practical.
- Make the system usable from desktop and mobile browsers.
- Maintain a clear architecture that can later move from Vercel to Docker/VPS.

---

## 4. Users

### Public Visitor

Can:

- View Kala Group information.
- View available divisions.
- Open a division page.
- Browse projects belonging to a division.
- Open individual project details.
- View contact/about information.

### Administrator

Can:

- Log in to the CMS.
- Manage divisions.
- Manage portfolio projects.
- Manage categories.
- Manage selected site content.
- Publish/unpublish content.
- Edit content from a laptop or mobile browser.

Initial MVP assumes one administrator account. A multi-admin system can be introduced later if required.

---

## 5. Public Website

### Home

Potential sections:

- Kala Group introduction
- Short brand statement
- Division showcase
- Selected portfolio/projects
- About Kala Group
- Contact/social links

### Divisions

Display all published/active divisions dynamically.

Example:

```text
Kala Group

[ Kala Archives ]
Photography & Visual Documentation

[ Kala Sport ]
Sport / Running
```

The UI must not assume that only two divisions exist.

### Division Detail

Each division can contain:

- Division name
- Logo/identity asset if needed
- Short description
- Detailed description
- Services or activities
- Featured projects
- Portfolio listing
- External/social links if needed

### Portfolio

Projects should be dynamically loaded from the backend.

Possible project information:

- Title
- Slug
- Description
- Division
- Category
- Client/subject
- Project date
- Cover image
- Gallery source
- Published status

---

## 6. Admin CMS

Initial routes/pages may include:

```text
/admin/login
/admin
/admin/divisions
/admin/divisions/new
/admin/divisions/:id/edit
/admin/projects
/admin/projects/new
/admin/projects/:id/edit
/admin/categories
/admin/settings
```

The exact routing structure may change during implementation.

### Dashboard

Show lightweight information such as:

- Number of divisions
- Number of projects
- Published projects
- Draft/unpublished projects
- Recent projects

Avoid unnecessary analytics in the MVP.

### Division CRUD

Administrator can:

- Create division
- Read/list divisions
- Edit division
- Delete/deactivate division
- Publish/unpublish division

Example fields:

```text
name
slug
short_description
description
logo/image reference
cover image reference
sort_order
published
created_at
updated_at
```

### Project CRUD

Administrator can:

- Create project
- View projects
- Edit project
- Delete project
- Publish/unpublish project
- Assign project to a division
- Assign project to a category
- Set project cover image
- Define gallery/media source

### Category CRUD

Categories are optional organizational metadata and can be managed dynamically.

Examples:

```text
Portrait
Graduation
Event
Wedding
Running
Race
Training
```

Categories should not be permanently hardcoded into the frontend.

---

## 7. Dynamic Content Principle

The public website must consume content from the backend/database.

Avoid hardcoding content such as:

```text
Kala Archives
Kala Sport
```

inside the main application logic when the same information can be represented as database records.

Instead:

```text
Database
   ↓
API
   ↓
React
   ↓
Public Website
```

This means an administrator could eventually create:

```text
Kala Studio
```

from the CMS and have it appear on the website without modifying React source code.

---

## 8. Media Strategy

Large photography files should not be stored directly in PostgreSQL.

Initial photography workflow:

```text
Google Drive
    ↓
Drive folder reference
    ↓
Backend
    ↓
API
    ↓
Frontend gallery
```

The database should primarily store references and metadata.

The exact image delivery/caching mechanism may evolve later based on performance, Google Drive API limitations, and future infrastructure.

The system should be designed so storage can later be moved to another service without rewriting the entire CMS.

---

## 9. Initial Data Model

Initial core tables/entities:

```text
users

divisions

categories

projects
```

Potential future entities:

```text
project_images
site_settings
social_links
clients
services
activity_logs
```

Do not create future entities until a real requirement exists.

---

## 10. Technology Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS or another lightweight styling approach
- Fetch or Axios

### Backend

- Node.js
- Express
- REST API
- JWT authentication
- bcrypt/password hashing

### Database

- PostgreSQL
- Hosted through Supabase initially

### Media

- Google Drive initially

### Deployment

- Vercel initially
- Docker/VPS later if needed

### Version Control

- Git
- GitHub

### Future CI/CD

Initial deployment can use Vercel's Git integration.

Later:

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

---

## 11. Repository Architecture

Use one Git repository with independent frontend and backend applications.

```text
kala-group/
├── frontend/
├── backend/
├── docs/
├── PRD.md
├── AGENTS.md
├── README.md
└── .gitignore
```

Frontend and backend must remain independently deployable.

---

## 12. MVP Scope

### Must Have

- Public Kala Group homepage
- Dynamic division listing
- Dynamic division detail page
- Dynamic portfolio/project listing
- Project detail page
- Admin authentication
- Division CRUD
- Project CRUD
- Category CRUD
- Publish/unpublish state
- PostgreSQL database
- REST API
- Responsive admin UI
- Deployment to Vercel

### Should Have

- Google Drive gallery integration
- Sort order for divisions/projects
- Cover image support
- Basic dashboard statistics
- SEO metadata per page

### Could Have Later

- Multiple administrators
- Client management
- Service management
- Contact form
- Activity logs
- Media synchronization
- Advanced caching
- Image optimization/CDN
- Docker/VPS deployment
- Automated CI tests

### Out of Scope for MVP

- ERP
- Accounting
- Payment processing
- Booking/invoicing system
- Full CRM
- E-commerce
- Microservices
- Kubernetes
- Complex analytics

---

## 13. UX Principles

The public website should feel like a brand portfolio rather than an administrative system.

The admin CMS should prioritize:

- Fast navigation
- Simple forms
- Clear actions
- Responsive layout
- Usability on mobile
- Useful validation messages
- Minimal steps to update content

An administrator should be able to update content from either a laptop or mobile browser.

---

## 14. SEO / Discoverability

The public website should eventually support:

- Semantic HTML
- Page titles
- Meta descriptions
- Open Graph metadata
- Clean slugs
- Descriptive image alt text
- Sitemap/robots configuration where appropriate

SEO implementation should follow the actual content model rather than hardcoded pages.

---

## 15. Performance Principles

- Keep database records lightweight.
- Avoid storing original media files in the database.
- Avoid unnecessary API requests.
- Avoid loading every project/gallery asset at once when pagination/lazy loading is appropriate.
- Keep backend processing simple.
- Use caching only when there is a measured need.
- Avoid unnecessary dependencies.

---

## 16. Learning Objectives

This project is intentionally designed to practice:

### Frontend

- React components
- Props
- State
- Effects
- Forms
- Routing
- API integration
- Loading/error states
- Responsive UI

### Backend

- Node.js
- Express
- HTTP
- REST API
- Routing
- Controllers
- Middleware
- Validation
- Authentication
- Authorization
- Error handling

### Database

- PostgreSQL
- SQL
- CRUD
- Relationships
- Primary keys
- Foreign keys
- Constraints
- JOINs

### Engineering

- Git
- GitHub
- Environment variables
- Deployment
- CI/CD
- Testing
- Docker
- VPS concepts

AI is an assistant/mentor, not the default author of the entire implementation.

---

## 17. Success Criteria

The MVP is successful when the owner can:

1. Log into the admin CMS.
2. Add a new division without changing source code.
3. Edit a division's description/content.
4. Add a new portfolio project.
5. Assign the project to a division/category.
6. Publish or unpublish a project.
7. Edit project information from a phone or laptop.
8. See published content automatically reflected on the public website.
9. View portfolio media using the planned external storage strategy.
10. Deploy updates through the GitHub → Vercel workflow.

---

## 18. Change Log

### 2026-09-21

- Project renamed/defined as **Kala Group**.
- Kala Archives and Kala Sport established as initial divisions.
- Future divisions remain possible.
- Website defined as a dynamic brand portfolio + CMS rather than a static portfolio.
- Admin CMS introduced for division, project, category, and content management.
- One repository with separate frontend/backend applications retained.
- React + Vite, Node.js + Express, PostgreSQL via Supabase, Google Drive, and Vercel retained as the initial stack.
- Mobile-friendly CMS editing established as a requirement.
