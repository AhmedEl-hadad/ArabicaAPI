# ArabicaAPI

**Version:** v1.0.0

Reusable, Arabic-friendly mock datasets for UI prototyping, API simulations, and frontend testing. The repository ships 36 JSON files (1,660 total records) that cover commerce, jobs, real estate, education, events, recipes, reviews, and more—ready to import or fetch as-is.

![Design Thumbnail](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/main/assets/thumbnail.jpg?raw=true)

---

## Contents

1. [Project Overview](#project-overview)
2. [Dataset & Folder Overview](#dataset--folder-overview)
3. [Assets Structure](#assets-structure)
4. [Domain Use Cases](#domain-use-cases)
5. [API-Style Data Examples](#api-style-data-examples)
6. [Data Rules & Conventions](#data-rules--conventions)
7. [How to Use the Data](#how-to-use-the-data)
8. [Contribution Guidelines](#contribution-guidelines)
9. [Future Extensions](#future-extensions)

---

## Project Overview

- **What it is:** A static dataset library organized per domain (e-commerce, jobs, real estate, education, events, recipes, reviews, users, misc) with consistent schemas, IDs, and media references.
- **Where it helps:** Rapid mock APIs, design handoffs, component demos, data-driven UI states, onboarding exercises, hackathons, QA automation, and localization-ready showcases.
- **How it is used:** Import JSON directly in React/Vue/Svelte projects, drop it into Next.js routes for instant API responses, seed in-memory databases, or publish as GitHub raw endpoints for client-side fetching.

Every record is intentionally realistic (currency, locations, Arabic names, meaningful descriptions) so teams can demo filtering, pagination, sorting, detail pages, and cross-entity relationships without wiring up a backend.

---

## Dataset & Folder Overview

```
arabicaapi/
├── data/
│   ├── cars/
│   ├── companies/
│   ├── ecommerce/
│   ├── education/
│   ├── events/
│   ├── jobs/
│   ├── misc/
│   ├── orders/
│   ├── real-estate/
│   ├── recipes/
│   ├── reviews/
│   └── users/
├── DATA_GUIDELINES.md
├── IMAGES_GUIDELINES.md
└── README.md
```

| Directory          | Files | Records | Summary                                                                  |
| ------------------ | ----- | ------- | ------------------------------------------------------------------------ |
| `data/ecommerce`   | 13    | 960     | 12 category files × 40 items + `all-products.json` (480-item aggregate). |
| `data/users`       | 1     | 100     | User profiles with avatars, roles, addresses, and join dates.            |
| `data/companies`   | 1     | 50      | Regional companies with industries, headcounts, and social links.        |
| `data/cars`        | 1     | 30      | Dealership-ready inventory with specs and photos.                        |
| `data/orders`      | 2     | 45      | Orders plus line items for checkout/cart flows.                          |
| `data/reviews`     | 3     | 45      | Product, company, and user review feeds.                                 |
| `data/real-estate` | 3     | 95      | Properties, agents, and location metadata.                               |
| `data/jobs`        | 3     | 80      | Job listings, hiring companies, and job categories.                      |
| `data/education`   | 3     | 70      | Schools, teachers, and courses.                                          |
| `data/events`      | 2     | 45      | Events linked to venues.                                                 |
| `data/recipes`     | 2     | 80      | Recipes plus ingredient catalogues.                                      |
| `data/misc`        | 2     | 60      | FAQs and quick tips for filler sections.                                 |

> Total: **36 JSON files / 1,660 records**. Each file is stand-alone, so you can import only what you need.

---

## Assets Structure

```
assets/
├── cars/
├── companies/
├── ecommerce/
│   ├── accessories/
│   ├── all-products/
│   ├── automotive/
│   ├── beauty/
│   ├── books/
│   ├── clothes/
│   ├── electronics/
│   ├── food/
│   ├── home/
│   ├── makeup/
│   ├── office/
│   ├── sports/
│   └── toys/
├── real-estate/
│   ├── agents/
│   └── properties/
└── users/
```

Each folder stores PNG assets plus an `images-guide.txt` describing required counts, naming patterns, and art-direction notes. JSON files reference these assets via relative paths such as `assets/cars/car-012.png`. Shared items (e.g., ecommerce categories aggregated into `all-products`) point to the same canonical file so there is a single source of truth.

Example record referencing an asset:

```json
{
  "id": "car-012",
  "make": "Lexus",
  "model": "RX 350h",
  "price": 229900,
  "image": "assets/cars/car-012.png"
}
```

See `IMAGES_GUIDELINES.md` for detailed naming conventions, expected counts per dataset, and contributor workflows.

---

## Domain Use Cases

- **E-commerce** – Build category grids, detail pages, filterable product feeds, carts, wishlists, and checkout confirmations using categories + `orders` + `reviews`.
- **Jobs** – Power job feeds, advanced search, saved jobs, job detail pages, and hiring company spotlights with `jobs`, `job-categories`, and `job-companies`.
- **Real estate** – Create property cards, agent portfolios, map search, mortgage calculators, and appointment forms using coordinated property/agent/location data.
- **Education** – Populate course catalogs, instructor bios, school comparison tables, enrollment flows, and subject filters.
- **Events** – Render event calendars, venue detail pages, seat availability, and booking confirmations.
- **Recipes** – Build recipe detail pages, ingredient shopping lists, nutrition breakdowns, and tagging interfaces.
- **Reviews** – Add rating widgets, testimonial carousels, sentiment summaries, and moderation dashboards.
- **Users & Companies** – Simulate authentication, profile editing, activity feeds, CRM tables, and organization directories.
- **Cars** – Prototype dealership inventory, comparison tools, test-drive bookings, and financing calculators.
- **Misc/FAQ/Tips** – Fill support sections, onboarding tooltips, or in-app helper cards.

Each dataset intentionally mirrors real-world UX flows (list → detail → related entities) so frontend developers can focus on layout and logic instead of data wrangling.

---

## API-Style Data Examples

```json
// Product
{
  "id": "product-117",
  "title": "ساعة يد كلاسيكية جلدية",
  "price": 249.9,
  "categoryId": "accessories",
  "stock": 35,
  "image": "https://raw.githubusercontent.com/.../accessories/accessory-001.png"
}
```

```json
// Job
{
  "id": "job-014",
  "title": "مهندس برمجيات أول",
  "companyId": "company-001",
  "location": "الرياض، السعودية",
  "type": "Full-time",
  "postedAt": "2024-10-01"
}
```

```json
// Property
{
  "id": "property-012",
  "title": "شقة فاخرة بإطلالة بحرية",
  "price": 1850000,
  "city": "جدة",
  "agentId": "agent-004",
  "images": [
    "https://raw.githubusercontent.com/.../real-estate/property-012-01.jpg"
  ]
}
```

```json
// User
{
  "id": "user-032",
  "name": "منى علي",
  "username": "mona_ali",
  "role": "Product Designer",
  "email": "mona.ali@example.com",
  "avatar": "https://raw.githubusercontent.com/.../avatars/user-032.png"
}
```

```json
// Recipe
{
  "id": "recipe-018",
  "title": "كبسة دجاج",
  "category": "وجبات رئيسية",
  "prepTimeMinutes": 25,
  "cookTimeMinutes": 45,
  "ingredients": ["دجاج", "أرز", "بهارات الكبسة"]
}
```

---

## Data Rules & Conventions

- **Naming:** Files use `kebab-case.json`; JSON keys stay `camelCase`.
- **IDs:** Deterministic prefixes + zero-padded numbers (`product-001`, `agent-020`). Cross-file relationships reference these IDs directly.
- **Dates:** ISO-8601 strings (`YYYY-MM-DD`). Favor UTC dates for events/jobs/orders.
- **Currency & numbers:** Store as numbers (no currency symbols). Frontends localize formatting.
- **Image URLs:** Always point to the GitHub assets branch or your own CDN. Follow directory+slug naming (`.../cars/car-010.png`).
- **Categories & enums:** Use consistent lower-case slugs (`electronics`, `hybrid-suv`). Avoid free-form category names.
- **Localized text:** All Arabic copy is human-readable (no lorem ipsum); keep tone professional and helpful.
- **Validation:** Each file is an array of uniform objects. No dangling fields, no nulls unless nullable by design.
- **Duplication:** Aggregated files (such as `all-products.json`) may repeat entities by design; individual category files remain authoritative when you only need subsets.

See `DATA_GUIDELINES.md` for schema templates, validation steps, and expansion rules.

---

## How to Use the Data

### Import locally

```ts
import products from "@/data/ecommerce/all-products.json";

const featured = products.slice(0, 8);
```

### Fetch from GitHub raw URLs

```ts
const url =
  "https://raw.githubusercontent.com/YOUR_ORG/ArabicaAPI/main/data/jobs/jobs.json";

const jobs = await fetch(url).then((res) => res.json());
```

### Expose as a Next.js route

```ts
// app/api/products/route.ts
import products from "@/data/ecommerce/all-products.json";

export async function GET() {
  return Response.json(products);
}
```

### Simulate pagination & search

```ts
type Query = { page?: number; q?: string; limit?: number };

export function getProducts({ page = 1, q = "", limit = 12 }: Query) {
  const normalized = q.trim().toLowerCase();
  const filtered = allProducts.filter(
    (item) =>
      !normalized ||
      item.title.toLowerCase().includes(normalized) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(normalized))
  );

  const start = (page - 1) * limit;
  return {
    total: filtered.length,
    results: filtered.slice(start, start + limit),
  };
}
```

Because everything is plain JSON, you can also load the files into MirageJS, MSW, Storybook decorators, or any mock server.

---

## Contribution Guidelines

1. **Plan the dataset** – Before adding data, decide which domain the new records belong to and whether a new file is required or an existing one should be extended. Review the folder structure in `DATA_GUIDELINES.md` to maintain consistency.

2. **Follow schemas** – Reuse the field orderings and naming patterns documented in `DATA_GUIDELINES.md`. Ensure all required fields are present and optional fields follow the established conventions.

3. **Validate JSON** – Run a formatter/linter or `jq` to ensure arrays, commas, and quotes are valid. Each file must be valid JSON that can be parsed without errors.

4. **Respect IDs** – Continue numbering without gaps (`product-481` after `product-480`). Never reuse IDs across files. Use deterministic prefixes with zero-padded numbers (e.g., `product-001`, `agent-020`). Cross-file relationships reference these IDs directly.

5. **Keep it realistic** – Prices, salaries, dates, and descriptions should feel authentic and culturally appropriate. Use realistic Arabic names, locations, and currency values. Avoid placeholder text or lorem ipsum.

6. **Link imagery** – Reference existing assets or add entries following the patterns in `IMAGES_GUIDELINES.md`. Update the relevant `images-guide.txt` with new counts and naming ranges. Ensure every record with an `image`, `avatar`, `logo`, or gallery array has corresponding files in `/assets`.

7. **Avoid duplication** – Only touch the files you modify and keep aggregate files (like `all-products.json`) in sync when necessary. When datasets are aggregated, ensure they point to the same canonical asset files to maintain a single source of truth.

Pull requests that add data should mention record counts changed so maintainers can spot-check quickly.

---

## Future Extensions

- Add relational helper files (e.g., product ↔ recipe pairings or job ↔ skill tags).
- Expand imagery coverage with responsive sizes or a lightweight CDN mirror.
- Introduce scenario-based datasets (loyalty programs, support tickets, analytics summaries).
- Add locale variants (en/ar) or right-to-left layout metadata.
- Provide TypeScript types / Zod schemas to generate typed clients.

---

Ready to build something? Browse the `data/` directory, import only what you need, and ship your mock feature without waiting on backend endpoints.
