---
# DATA Guidelines

These rules keep all datasets in **ArabicaAPI** clean, consistent, and modular for any project.
Follow them when adding, updating, or generating JSON files.
---

## ✅ 1. Project & Folder Structure

- **Main sections (12):**

  1. Ecommerce
  2. Users
  3. Companies
  4. Cars
  5. Orders
  6. Reviews
  7. Real Estate
  8. Jobs
  9. Education
  10. Events
  11. Recipes
  12. Misc

- Each section has its own folder inside `/data/`.

- Subcategories or modular JSON files live in separate files (e.g., `/ecommerce/clothes.json`).

- Each main section also has a combined JSON file if needed (e.g., `all-products.json`).

**Example structure:**

```
data/
  ecommerce/
    clothes.json
    makeup.json
    electronics.json
    all-products.json
  users/
    users.json
  companies/
    companies.json
  cars/
    cars.json
  orders/
    orders.json
    order-items.json
  ...
```

---

## ✅ 2. File Naming Conventions

- **Files:** lowercase-with-hyphens.json

  - Example: `clothes.json`, `all-products.json`

- **JSON keys:** camelCase
- **IDs:** short, consistent, predictable, and unique

  - Examples: `product-001`, `user-050`, `car-020`

---

## ✅ 3. JSON Format Rules

- Always use **arrays of objects**, never objects with random keys.
- Every object must follow the same structure within the same dataset.
- Remove empty or unused fields.
- Keep descriptions short but meaningful.
- Keep titles concise: 3–6 words max.

**Valid Example:**

```json
[
  {
    "id": "product-001",
    "title": "Wireless Headphones",
    "price": 49.99,
    "categoryId": "electronics",
    "brand": "AudioMax",
    "image": "https://raw.githubusercontent.com/USERNAME/ArabicaAPI/assets/images/products/1.png",
    "stock": 100,
    "rating": 4.5,
    "SKU": "WH-001",
    "color": "Black",
    "tags": ["audio", "wireless"],
    "description": "High-quality wireless headphones."
  }
]
```

---

## ✅ 4. IDs

- Must be **unique across each file**.
- Use predictable patterns per category:

  - Ecommerce: `product-001`
  - Users: `user-001`
  - Companies: `company-001`
  - Cars: `car-001`
  - Orders: `order-001`

- Avoid UUIDs or random characters.

---

## ✅ 5. Media & Image Rules

- Store every PNG/JPG under `/assets/<domain>/<dataset>/` alongside its `images-guide.txt`.
- Reference images from JSON using repo-relative paths such as `assets/cars/car-012.png` or `assets/real-estate/properties/property-010-2.png`.
- Follow the naming pattern defined per dataset (prefix + zero-padded number, optional gallery suffix like `-1`, `-2`, `-3`).
- Aggregated files (e.g., `data/ecommerce/all-products.json`) must reuse the exact same file paths as their source category so there is a single canonical asset.
- **Validation:** before committing, ensure every `image`, `logo`, `avatar`, or gallery entry matches `^assets/` and that the file exists in the matching folder.
- See `IMAGES_GUIDELINES.md` for the full dataset-to-folder matrix, expected counts, and contributor workflow.

---

## ✅ 6. Templates by Section

### Ecommerce (12 categories × 30 products = 360 products)

```json
{
  "id": "product-001",
  "title": "",
  "categoryId": "",
  "price": 0,
  "rating": 0,
  "brand": "",
  "description": "",
  "image": "",
  "stock": 0,
  "SKU": "",
  "color": "",
  "tags": []
}
```

### Users

```json
{
  "id": "user-001",
  "name": "",
  "age": 0,
  "email": "",
  "username": "",
  "stack": [],
  "github": "",
  "linkedin": "",
  "avatar": "",
  "address": {
    "city": "",
    "country": "",
    "street": ""
  },
  "role": "",
  "joinDate": ""
}
```

### Companies

```json
{
  "id": "company-001",
  "name": "",
  "industry": "",
  "employees": 0,
  "website": "",
  "location": "",
  "foundingDate": "",
  "ceo": "",
  "rating": 0,
  "logo": "",
  "description": "",
  "tags": []
}
```

### Cars

```json
{
  "id": "car-001",
  "brandId": "",
  "model": "",
  "year": 0,
  "price": 0,
  "type": "",
  "engine": "",
  "color": "",
  "fuel": "",
  "transmission": "",
  "stock": 0,
  "image": ""
}
```

### Orders

```json
{
  "id": "order-001",
  "userId": "",
  "products": [
    {
      "productId": "",
      "quantity": 0,
      "price": 0
    }
  ],
  "totalPrice": 0,
  "orderDate": ""
}
```

### Reviews

```json
{
  "id": "review-001",
  "type": "product|company|user",
  "itemId": "",
  "userId": "",
  "rating": 0,
  "comment": ""
}
```

**(Similar templates for Real Estate, Jobs, Education, Events, Recipes, Misc)**

---

## ✅ 7. Validation Before Commit

- JSON syntax valid
- No duplicate IDs
- File names match the category
- No unused fields
- Raw image URLs load correctly

---

## ✅ 8. Testing Datasets

- Open raw GitHub URL to confirm JSON loads
- Fetch from JS or Postman to verify usability

---

## ✅ 9. Keep It Realistic

- Prices, ages, quantities, and other numbers should make sense
- Descriptions should feel genuine
- Images must match the item
- Avoid placeholders like “Lorem ipsum”

---

## ✅ 10. Modular & Scalable

- Developers can use **single sections** or the **full dataset**
- Adding new categories or items should follow **same templates and naming rules**
- Merge small JSON files into `all-*.json` for full-section usage

---
