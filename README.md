# ArabicaAPI

A clean, organized collection of **static JSON datasets** designed for real projects, prototypes, and production-ready mockups.
Everything is pre-structured, realistic, and ready to fetch directly from your client or server.

This repo focuses on **Arabic-friendly data** to help developers build apps quickly without searching for datasets or using paid APIs.

![Thumbnail](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/assets/thumbnail.jpg?raw=true)

---

## 🚀 What is ArabicaAPI?

ArabicaAPI is a **fully static, modular dataset library**.
You can use it in two ways:

1. Download and import JSON files directly into your project.
2. Fetch directly from GitHub raw URLs, just like a real API.

It provides ready-to-use data for:

- Ecommerce platforms
- Company and user management systems
- Car dealerships or automotive apps
- Real-estate platforms
- Education and course apps
- Events and recipe apps
- Dashboards, mockups, and prototypes
- UI testing and frontend development

All datasets are curated for **realism, clarity, and modular use**. Developers can pick specific sections or use the full dataset.

---

## 📚 Table of Contents

- [Features](#-features)
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Repo Structure](#-repo-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- ✅ Fully static JSON files
- ✅ Modular sections for selective or full use
- ✅ Realistic, Arabic-friendly data
- ✅ Ready for client-side fetch or local import
- ✅ Easy to extend with new categories
- ✅ Free for commercial or personal use

---

## 🧩 Sections (Version 2)

The project is organized into **12 main sections**, each with modular JSON files:

### 1) **Ecommerce**

- 12 categories: clothes, makeup, electronics, home, toys, books, sports, beauty, accessories, food, automotive, office
- Each category: 30 products
- Total: **360 unique products**
- Each product: 12 fields (`id, title, description, price, categoryId, image, stock, rating, brand, SKU, color, tags`)
- Ideal for full ecommerce apps or single-category projects

### 2) **Users**

- 100-200 users
- Fields: `id, name, age, email, username, stack[], github, linkedin, avatar, address, role, joinDate`
- Suitable for social apps, dashboards, or authentication testing

### 3) **Companies**

- 50-100 companies and startups
- Fields: `id, name, industry, employees, website, location, foundingDate, ceo, rating, logo, description, tags`
- Useful for business directories or SaaS mockups

### 4) **Cars**

- 100 unique cars
- Fields: `id, brandId, model, year, price, type, engine, color, fuel, transmission, stock, image`
- Great for dealerships, rental apps, or car comparison platforms

### 5) **Orders**

- 200 orders linking users → products
- Includes `order-items.json` for detailed products per order

### 6) **Reviews**

- Product, company, and user reviews
- 100+ fictional reviews with ratings and comments
- Perfect for ecommerce, SaaS, or service apps

### 7) **Real Estate**

- 50 properties, 20 agents, locations
- Suitable for property listing apps

### 8) **Jobs**

- 50 job listings
- Includes companies and job categories
- Great for job boards or employment apps

### 9) **Education**

- Schools, courses, teachers
- Useful for course platforms or learning apps

### 10) **Events**

- Event data with venues
- Ideal for event management apps or booking systems

### 11) **Recipes**

- Recipes and ingredients
- Good for cooking, nutrition, or meal planner apps

### 12) **Misc**

- FAQ, tips, and other small datasets
- Flexible use for dashboards, apps, or testing

---

## 🛠 Tech Stack

| Component          | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| **Static JSON**    | Core dataset files                              |
| **Images branch**  | Avatars, products, cars, and real-estate images |
| **CDN (optional)** | Serve images or JSON files if needed            |

The repo **does not include a backend**. Fetch or import JSON directly.

---

## 📁 Repo Structure

```
arabicaapi/
├── data/
│   ├── ecommerce/
│   │   ├── clothes.json
│   │   ├── makeup.json
│   │   ├── electronics.json
│   │   └── all-products.json
│   ├── users/
│   ├── companies/
│   ├── cars/
│   ├── orders/
│   ├── reviews/
│   ├── real-estate/
│   ├── jobs/
│   ├── education/
│   ├── events/
│   ├── recipes/
│   └── misc/
├── images/
│   ├── avatars/
│   ├── products/
│   ├── cars/
│   └── real-estate/
├── docs/
│   ├── README.md
│   ├── SCHEMA.md
│   └── CONTRIBUTING.md
├── api/ (optional)
└── package.json
```

---

## ⚙️ Usage

**Fetch remotely:**

```js
fetch(
  "https://raw.githubusercontent.com/YOUR_USER/ArabicaAPI/main/data/ecommerce/all-products.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

**Import locally:**

```js
import products from "./data/ecommerce/all-products.json";
```

- All datasets are **static JSON**.
- Avatars, reviews, and some fields are fictional.
- Modular structure allows you to pick specific sections or use the full dataset.

---

## 🤝 Contributing

- Contributions welcome: add new datasets, improve existing ones, or create new categories.
- Follow the **Cursor AI / JSON rules** defined in `DATA_GUIDELINES.md` for consistency.

---

## 📜 License

MIT License – free to use, modify, or distribute.

---

If you want, I can **also rewrite the `DATA_GUIDELINES.md`** next with clear rules for Cursor/AI to generate the 360 products, users, and other sections. This will make your Day 2 fully plug-and-play.

Do you want me to do that now?
