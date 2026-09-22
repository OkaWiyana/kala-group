# API Documentation — Kala Group

## Base URL

Local development:

```text
http://localhost:<PORT>
```

Production URL will be configured after deployment.

---

## Response Convention

Successful responses should return JSON.

Example:

```json
{
  "data": []
}
```

Errors should be clear but must not expose secrets or internal stack traces.

Example:

```json
{
  "error": "Division not found"
}
```

---

# Authentication

## POST /api/auth/login

Authenticate an administrator.

Request:

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

Returns an authentication token/session according to the final implementation.

---

## GET /api/auth/me

Return the current authenticated administrator.

Protected endpoint.

---

# Divisions

## GET /api/divisions

Return divisions.

Public response may default to published divisions.

Admin requests may retrieve unpublished divisions as appropriate.

---

## GET /api/divisions/:id

Return one division.

---

## POST /api/divisions

Create a division.

Protected endpoint.

Initial body:

```json
{
  "name": "Kala Archives",
  "slug": "kala-archives",
  "short_description": "Photography and visual documentation",
  "description": "Full division description",
  "logo_image": "",
  "cover_image": "",
  "sort_order": 1,
  "published": true
}
```

---

## PUT /api/divisions/:id

Update a division.

Protected endpoint.

---

## DELETE /api/divisions/:id

Delete/deactivate a division according to the final data policy.

Protected endpoint.

Important: if the division has projects, the implementation must define whether deletion is blocked, cascaded, or converted to inactive status. Do not assume destructive cascade behavior.

---

# Categories

## GET /api/categories

Return categories.

---

## GET /api/categories/:id

Return a category.

---

## POST /api/categories

Create a category.

Protected endpoint.

---

## PUT /api/categories/:id

Update a category.

Protected endpoint.

---

## DELETE /api/categories/:id

Delete a category according to the final relationship policy.

Protected endpoint.

---

# Projects

## GET /api/projects

Return portfolio projects.

Potential query parameters:

```text
?division=kala-archives
?category=portrait
?published=true
```

Exact filtering parameters may change during implementation.

---

## GET /api/projects/:id

Return a project by ID.

---

## POST /api/projects

Create a project.

Protected endpoint.

Example body:

```json
{
  "division_id": "division-id",
  "category_id": "category-id",
  "title": "Sidang Series",
  "slug": "sidang-series",
  "description": "Portraits captured after the final defense.",
  "client_name": "Client Name",
  "project_date": "2026-09-21",
  "cover_image": "",
  "drive_folder_id": "",
  "published": false
}
```

---

## PUT /api/projects/:id

Update a project.

Protected endpoint.

---

## DELETE /api/projects/:id

Delete a project.

Protected endpoint.

---

# Future Media Endpoints

Potential future endpoints:

```text
GET  /api/projects/:id/gallery
POST /api/projects/:id/sync-drive
GET  /api/projects/:id/images
```

These should not be implemented until Google Drive integration is actively developed.
