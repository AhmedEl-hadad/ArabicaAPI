# Image Assets Guidelines

This repository stores all rendered image assets under `/assets`, grouped by the dataset that consumes them. Every dataset folder contains an `images-guide.txt` file documenting how many files are required, which naming pattern to follow, and any special art-direction notes. Actual PNG assets live alongside these guides (or in nested category folders for large catalogs like `ecommerce/all-products`).

## Dataset → Asset Folder Map

| Dataset JSON | Asset folder | Expected files | Naming pattern / notes |
| --- | --- | --- | --- |
| `data/cars/cars.json` | `assets/cars/` | ~30 hero shots | `car-001.png` … `car-030.png`; one PNG per record, aligned with `id`. |
| `data/companies/companies.json` | `assets/companies/` | ~50 logos | `company-001.png` … `company-050.png`; transparent PNG logos. |
| `data/ecommerce/accessories.json` | `assets/ecommerce/accessories/` | ~40 | `accessory-001.png` … `accessory-040.png`; shared with `all-products`. |
| `data/ecommerce/all-products.json` | `assets/ecommerce/all-products/<category>/` | ~1,920 (480 thumbnails + ≥1,440 gallery frames) | Store each product’s assets inside its category folder using `<slug>-001.png`, `<slug>-002.png`, etc.; minimum 1 thumbnail + 3 gallery images. |
| `data/ecommerce/automotive.json` | `assets/ecommerce/automotive/` | ~40 | `automotive-001.png` … `automotive-040.png`. |
| `data/ecommerce/beauty.json` | `assets/ecommerce/beauty/` | ~40 | `beauty-001.png` … `beauty-040.png`. |
| `data/ecommerce/books.json` | `assets/ecommerce/books/` | ~40 | `book-001.png` … `book-040.png`; cover renders. |
| `data/ecommerce/clothes.json` | `assets/ecommerce/clothes/` | ~40 | `clothes-001.png` … `clothes-040.png`. |
| `data/ecommerce/electronics.json` | `assets/ecommerce/electronics/` | ~40 | `electronics-001.png` … `electronics-040.png`. |
| `data/ecommerce/food.json` | `assets/ecommerce/food/` | ~40 | `food-001.png` … `food-040.png`; include matching thumbnails for `all-products`. |
| `data/ecommerce/home.json` | `assets/ecommerce/home/` | ~40 | `home-001.png` … `home-040.png`; décor/lifestyle shots. |
| `data/ecommerce/makeup.json` | `assets/ecommerce/makeup/` | ~40 | `makeup-001.png` … `makeup-040.png`. |
| `data/ecommerce/office.json` | `assets/ecommerce/office/` | ~40 | `office-001.png` … `office-040.png`. |
| `data/ecommerce/sports.json` | `assets/ecommerce/sports/` | ~40 | `sports-001.png` … `sports-040.png`. |
| `data/ecommerce/toys.json` | `assets/ecommerce/toys/` | ~40 | `toys-001.png` … `toys-040.png`. |
| `data/real-estate/agents.json` | `assets/real-estate/agents/` | ~20 | `agent-001.png` … `agent-020.png`; portraits per agent. |
| `data/real-estate/properties.json` | `assets/real-estate/properties/` | ~120-180 | `property-001-1.png` … `property-060-3.png`; 2–3 images per listing. |
| `data/users/users.json` | `assets/users/` | ~100 | `user-001.png` … `user-100.png`; square avatars. |

Refer to the corresponding `images-guide.txt` inside each folder for the latest counts if datasets expand.

## Naming & Directory Conventions

- Use lowercase, hyphenated prefixes that match the dataset (`car-###`, `book-###`, etc.).
- Zero-pad numeric segments to three digits so alphabetical sorting mirrors dataset order.
- Multi-image galleries append an extra `-1`, `-2`, `-3` suffix following the order shown in the dataset’s `images` array.
- Do not mix file extensions inside a dataset; all guides currently require `.png`.
- Keep reusable category assets (e.g., the ecommerce catalog) inside subfolders named after the category or slug shown in JSON.

## Consistent Usage Rules

- JSON datasets must reference image paths relative to the repository root, e.g., `assets/cars/car-012.png`.
- Every record that exposes an `image`, `avatar`, `logo`, or gallery array must have a corresponding file in `/assets`; no placeholders.
- Shared assets (like ecommerce items reused in `all-products`) must point to the same canonical file path to avoid duplication.
- When updating datasets, ensure new IDs/slugs map to new filenames without reusing existing ones unless intentionally shared.
- Keep resolutions consistent inside a dataset (e.g., all avatars 512×512) so downstream consumers can make layout assumptions.

## Workflow for Contributors

1. **Plan counts first** – Update the relevant `images-guide.txt` with new totals, naming ranges, and notes if the dataset grows.
2. **Add assets in place** – Store PNG files directly under the documented asset folder (or nested category folder). If a folder would otherwise be empty, include a `.gitkeep` to keep Git tracking the structure.
3. **Reference consistently** – Update the JSON dataset to point to the new relative path, matching the established naming pattern.
4. **Validate** – Run any lint/validation scripts to confirm every referenced path exists and follows the expected naming scheme.
5. **Document changes** – Mention asset updates in pull request descriptions and note any deviations from the standard patterns.

Following these rules keeps all datasets visually consistent, makes asset sourcing predictable, and ensures downstream consumers can safely assemble URLs without inspecting every record manually.


