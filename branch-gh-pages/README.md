# ArabicaAPI

**Version:** v1.0.0

A curated collection of Arabic-friendly mock datasets for rapid UI prototyping, API simulations, and frontend development. This repository provides 36 JSON files containing 1,660 realistic records across multiple domains—ready to use in your projects.

![Design Thumbnail](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/main/assets/thumbnail.jpg?raw=true)

---

## Project Overview

ArabicaAPI is a static dataset library designed to accelerate frontend development without backend dependencies. Each dataset is organized by domain with consistent schemas, unique IDs, and media references. All data is intentionally realistic with Arabic names, locations, and culturally appropriate content.

**Perfect for:**
- Rapid mock API endpoints
- Design handoffs and component demos
- Data-driven UI state testing
- Onboarding exercises and hackathons
- QA automation and testing
- Localization-ready showcases

---

## Dataset Highlights

### E-commerce (13 files, 960 records)
Complete product catalogs across 12 categories plus an aggregated `all-products.json` file. Includes accessories, automotive, beauty, books, clothes, electronics, food, home, makeup, office, sports, and toys.

### Users (1 file, 100 records)
User profiles with avatars, roles, addresses, and join dates—perfect for authentication flows and profile pages.

### Companies (1 file, 50 records)
Regional companies with industries, headcounts, and social links for business directories and CRM interfaces.

### Real Estate (3 files, 95 records)
Properties, agents, and location metadata for property search, agent portfolios, and map-based interfaces.

### Jobs (3 files, 80 records)
Job listings, hiring companies, and job categories for career sites and recruitment platforms.

### Education (3 files, 70 records)
Schools, teachers, and courses for educational platforms and course catalogs.

### Additional Domains
- **Cars** (30 records) – Dealership inventory with specs and photos
- **Orders** (45 records) – Orders and line items for checkout flows
- **Reviews** (45 records) – Product, company, and user review feeds
- **Events** (45 records) – Events linked to venues
- **Recipes** (80 records) – Recipes plus ingredient catalogues
- **Misc** (60 records) – FAQs and quick tips

**Total: 36 JSON files / 1,660 records**

---

## Assets Structure

All image assets are organized under `/assets`, grouped by dataset:

```
assets/
├── cars/              (~30 car images)
├── companies/         (~50 company logos)
├── ecommerce/         (category-specific product images)
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
│   ├── agents/        (~20 agent portraits)
│   └── properties/    (~120-180 property images)
└── users/             (~100 user avatars)
```

Each dataset folder contains an `images-guide.txt` with required counts, naming patterns, and art-direction notes. JSON files reference assets via relative paths (e.g., `assets/cars/car-012.png`).

---

## Example JSON Records

### Product Record
```json
{
  "id": "product-117",
  "title": "ساعة يد كلاسيكية جلدية",
  "price": 249.9,
  "categoryId": "accessories",
  "stock": 35,
  "image": "assets/ecommerce/accessories/accessory-001.png"
}
```

### Job Listing
```json
{
  "id": "job-014",
  "title": "مهندس برمجيات أول",
  "companyId": "company-001",
  "location": "الرياض، السعودية",
  "type": "Full-time",
  "postedAt": "2024-10-01"
}
```

### Property Listing
```json
{
  "id": "property-012",
  "title": "شقة فاخرة بإطلالة بحرية",
  "price": 1850000,
  "city": "جدة",
  "agentId": "agent-004",
  "images": [
    "assets/real-estate/properties/property-012-01.png"
  ]
}
```

### User Profile
```json
{
  "id": "user-032",
  "name": "منى علي",
  "username": "mona_ali",
  "role": "Product Designer",
  "email": "mona.ali@example.com",
  "avatar": "assets/users/user-032.png"
}
```

---

## Domain Use Cases

- **E-commerce** – Build category grids, detail pages, filterable product feeds, carts, wishlists, and checkout confirmations
- **Jobs** – Power job feeds, advanced search, saved jobs, job detail pages, and hiring company spotlights
- **Real Estate** – Create property cards, agent portfolios, map search, mortgage calculators, and appointment forms
- **Education** – Populate course catalogs, instructor bios, school comparison tables, and enrollment flows
- **Events** – Render event calendars, venue detail pages, seat availability, and booking confirmations
- **Recipes** – Build recipe detail pages, ingredient shopping lists, nutrition breakdowns, and tagging interfaces
- **Reviews** – Add rating widgets, testimonial carousels, sentiment summaries, and moderation dashboards
- **Users & Companies** – Simulate authentication, profile editing, activity feeds, CRM tables, and organization directories
- **Cars** – Prototype dealership inventory, comparison tools, test-drive bookings, and financing calculators

Each dataset intentionally mirrors real-world UX flows (list → detail → related entities) so frontend developers can focus on layout and logic instead of data wrangling.

---

## Future Extensions

- Add relational helper files (e.g., product ↔ recipe pairings or job ↔ skill tags)
- Expand imagery coverage with responsive sizes or a lightweight CDN mirror
- Introduce scenario-based datasets (loyalty programs, support tickets, analytics summaries)
- Add locale variants (en/ar) or right-to-left layout metadata
- Provide TypeScript types / Zod schemas to generate typed clients

---

## Contribution Guidance

We welcome contributions! When adding or updating datasets:

1. **Plan the dataset** – Decide which domain the new data belongs to and whether a new file is required or an existing one should be extended.

2. **Follow schemas** – Reuse the field orderings and naming patterns documented in `DATA_GUIDELINES.md` in the main branch.

3. **Validate JSON** – Ensure all JSON files are valid and can be parsed without errors.

4. **Respect IDs** – Continue numbering without gaps. Never reuse IDs. Use deterministic prefixes with zero-padded numbers.

5. **Keep it realistic** – Use authentic Arabic names, locations, and culturally appropriate content. Avoid placeholder text.

6. **Link imagery** – Reference existing assets or add new ones following patterns in `IMAGES_GUIDELINES.md`. Update `images-guide.txt` files accordingly.

7. **Avoid duplication** – Keep aggregate files in sync when necessary and ensure shared assets point to canonical files.

For detailed guidelines, see the main branch documentation: [README.md](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/main/README.md)

---

Ready to build something? Browse the datasets, import only what you need, and ship your mock feature without waiting on backend endpoints.

