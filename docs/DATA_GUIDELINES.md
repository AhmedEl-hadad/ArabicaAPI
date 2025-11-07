# DATA Guidelines

These rules keep all datasets in ArabicaAPI clean, consistent, and easy to use across any project.  
Follow them when adding or updating JSON files.

---

## ✅ 1. File Structure

- Each main category has its own folder inside `data/`.
- Sub-categories (if any) must also live inside their own folders.
- One JSON file per dataset unless a combined version is needed (ecommerce mega file, avatars bundle, etc.).

Example:
```
data/
ecommerce/
electronics.json
fashion.json
all-products.json
travel/
places.json
...
```

---

## ✅ 2. Naming Conventions

- **File names:** `lowercase-with-hyphens.json`
- **Keys inside JSON:** `camelCase`
- **IDs:** short, consistent, and never duplicated.

Examples:
```
"id": "product-001"
"id": "car-12"
"id": "place-87"

```


---

## ✅ 3. JSON Format Rules

- Always use **arrays of objects**, never objects with random keys.
- Every object must follow the same structure within the same dataset.
- Keep descriptions short but useful.
- Never include empty fields. If something doesn’t apply, remove it.

✅ Valid:
```json
[
  {
    "id": "product-001",
    "title": "Wireless Headphones",
    "price": 49.99
  }
]
```

❌ Invalid:

```
{
  "product-001": { "title": "Wireless Headphones" }
}
```
## ✅ 4. IDs (Very Important)

IDs must be unique across the file.

Use a simple predictable pattern:

product-001

place-010

course-043

Avoid UUIDs or random characters.

## ✅ 5. Text Rules

No emoji inside data unless a category explicitly needs it.

No unnecessary punctuation.

Keep descriptions in English for global compatibility.

Keep titles short (3–6 words max).

Avoid duplicate names.

## ✅ 6. Images

All images must be stored in the assets branch.

Inside JSON, use the full raw link:

Example:
```
"https://raw.githubusercontent.com/USERNAME/ArabicaAPI/assets/path/to/image.jpg"
```
Do NOT store images in the main branch.

## ✅ 7. Category Templates

Each category should follow a consistent template.

Ecommerce
```
{
  "id": "product-001",
  "title": "",
  "category": "",
  "price": 0,
  "rating": 0,
  "brand": "",
  "description": "",
  "image": "",
  "specs": {}
}
```

Travel
```
{
  "id": "place-001",
  "name": "",
  "country": "",
  "image": "",
  "description": "",
  "bestTimeToVisit": "",
  "activities": []
}
```

Food
```
{
  "id": "food-001",
  "name": "",
  "protein": 0,
  "carbs": 0,
  "fat": 0,
  "calories": 0,
  "image": ""
}
```

(Repeat the same style for all other categories.)

## ✅ 8. Validation Before Commit

Always check the following before pushing:

JSON syntax is valid

No duplicate IDs

File name matches the category

No unused fields

No missing commas or structural issues

Raw link loads correctly in Hoppscotch

## ✅ 9. Testing Your Dataset

You can test any dataset instantly:

Open the raw file URL in GitHub

Copy the raw link

Paste it into Hoppscotch

Confirm that the JSON response loads correctly

Fetch it from your code to confirm it's usable

## ✅ 10. Keep It Realistic

Numbers should make sense

Prices should be believable

Descriptions should not be generic

Images must match the item

Avoid placeholders like “Lorem ipsum”

The goal is to make the data feel real, even though it’s completely static.

---
