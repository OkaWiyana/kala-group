# Database — Kala Group

## 1. Database Technology

Database engine:

**PostgreSQL**

Hosting/platform:

**Supabase**

Supabase is the platform used to host/manage the PostgreSQL database. PostgreSQL remains the actual relational database engine.

---

## 2. Core Entities

Initial entities:

```text
users
divisions
categories
projects
```

---

## 3. users

Suggested fields:

| Column | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| name | text | Admin name |
| email | text | Unique login email |
| password_hash | text | Hashed password |
| role | text | Initial role: admin |
| created_at | timestamp | Creation time |
| updated_at | timestamp | Last update |

---

## 4. divisions

Suggested fields:

| Column | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| name | text | Division name |
| slug | text | Unique URL slug |
| short_description | text | Short introduction |
| description | text | Full description |
| logo_image | text | Optional media reference |
| cover_image | text | Optional media reference |
| sort_order | integer | Display order |
| published | boolean | Public visibility |
| created_at | timestamp | Creation time |
| updated_at | timestamp | Last update |

Example records:

```text
Kala Archives
Kala Sport
```

The schema must support future divisions without modification.

---

## 5. categories

Suggested fields:

| Column | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| name | text | Category name |
| slug | text | Unique URL slug |
| created_at | timestamp | Creation time |
| updated_at | timestamp | Last update |

Possible examples:

```text
Portrait
Graduation
Event
Wedding
Running
Race
Training
```

These are examples, not fixed values.

---

## 6. projects

Suggested fields:

| Column | Type | Notes |
|---|---|---|
| id | UUID | Primary key |
| division_id | UUID | Foreign key → divisions.id |
| category_id | UUID | Optional foreign key → categories.id |
| title | text | Project title |
| slug | text | Unique URL slug |
| description | text | Project description |
| client_name | text | Optional client/subject |
| project_date | date | Project/session date |
| cover_image | text | Image reference |
| drive_folder_id | text | Google Drive folder reference |
| published | boolean | Public visibility |
| created_at | timestamp | Creation time |
| updated_at | timestamp | Last update |

---

## 7. Relationships

```text
users
  |
  | manages
  v
content


divisions
    |
    | 1
    |
    | N
    v
 projects
    ^
    |
    | N
    |
    | 1
categories
```

A division can have many projects.

A category can be associated with many projects.

---

## 8. Media Storage

Do not store original photography binaries in PostgreSQL.

Store references such as:

```text
drive_folder_id
cover_image
```

If detailed per-image metadata or ordering becomes necessary, introduce a `project_images` table later.

---

## 9. Potential Future Tables

Only introduce when needed:

```text
project_images
site_settings
social_links
clients
services
activity_logs
```
