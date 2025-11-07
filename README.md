# ArabicaAPI

A clean, organized collection of **static JSON datasets** designed for real projects, prototypes, and production-ready mockups.  
Everything is pre-structured, human-reviewed, and ready to fetch directly from your client or server.

This repo focuses on **realistic Arabic-friendly data** that helps developers build full apps without searching for datasets or using paid APIs.

![Thumbnail](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/assets/695e86e0-ea94-40e0-8da0-617baddbc44d.png?raw=true)

---

🚀 What is ArabicaAPI?

ArabicaAPI is a fully static dataset library, built using clean and well-structured JSON files.
You can use the data in two ways:

Download it locally and import it straight into your project
Or fetch it directly using the raw GitHub file URL, just like calling a real API
This gives you realistic, ready-to-use data for:

ecommerce apps

travel and tourism projects

fitness apps

educational platforms

mockups and prototypes

dashboards

UI testing

anything that needs real-looking data without external APIs
You can also test any JSON file easily by copying its raw URL, pasting it into Hoppscotch, and checking the response instantly.
There is a dedicated assets branch for images used across datasets.

---

## 📚 Table of Contents

- [Features](#-features)
- [Categories](#-categories)
- [Tech Stack](#-tech-stack)
- [Repo Structure](#-repo-structure)
- [Usage](#-usage)
- [Notes](#-notes)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📘 Documentation

- **Data Guidelines:**
```
 > https://github.com/AhmedEl-hadad/ArabicaAPI/blob/main/DATA_GUIDELINES.md
```

---

## ✨ Features

- ✅ 100% static JSON files  
- ✅ Ready for client-side fetch  
- ✅ Realistic, clean, hand-curated datasets  
- ✅ Organized in clear categories  
- ✅ Free to use for commercial or personal projects  
- ✅ Easy to clone, fork, or extend  

---

## 🧩 Categories (Version 1)

Each category contains its own folder and structured JSON files.

### 1) **Ecommerce**
- Up to 20 product categories  
- Each category: 30 unique products  
- One combined mega file: **600 total unique products**  
Great for Amazon-style apps, cart systems, or dashboards.

### 2) **Travel**
- Data about 100 popular global tourist locations  
- Useful for travel agencies, map projects, or trip planners

### 3) **Food**
- 100+ food items with macros  
- Designed for fitness, nutrition, or recipe apps

### 4) **Music (Halal Version)**
- Clean, safe, music-free tracks  
- No inappropriate content  
- Perfect for Islamic apps, productivity tools, and background audio

### 5) **Education**
- Curated courses and subjects  
- All from free sources like YouTube  
- Structured for platforms like Udemy or Coursera clones

### 6) **Health Care**
- Medicine data, mockups, and structured medical info  
- Suitable for pharmacy apps or hospital systems

### 7) **Books and Quotes**
- Real book links  
- 100+ unique quotes  
- Great for library apps, blogs, and reading platforms

### 8) **Cars**
- Data for 30 unique cars  
- Good for dealerships, rental apps, or comparison tools

### 9) **Restaurant / Cafe**
- Dishes, drinks, categories (healthy, fast food, etc.)  
- Designed for food ordering apps and menu builders

### 10) **Fashion and Beauty**
- Clothes, perfumes, makeup, accessories  
- Perfect for boutique and online shop mockups

### 11) **Pets and Animals**
- Famous animals, facts, traits  
- Suitable for zoo apps, pet stores, or wildlife projects

### 12) **Home and Furniture**
- Furniture data for IKEA-style projects  
- Great for interior and home improvement apps

### 13) **Arts and Design**
- Art pieces, masterpieces, and historical artifacts  
- Ideal for gallery apps, museums, and culture platforms

### 14) **History and Culture**
- Historical events, wars, and major cultural milestones  
- For learning platforms and educational apps

### 15) **Avatars (People)**
- Realistic fictional people  
- Hobbies, personalities, images included  
- Great for mockups and social apps

### 16) **Avatars V2 (Reviews)**
- 100+ real-looking comments and reviews  
- Great for ecommerce, SaaS, and product pages

More categories will be added in future versions.

---

## 🛠 Tech Stack

| Component | Purpose |
|----------|---------|
| **Static JSON** | Core of the project |
| **assets branch** | Stores all related images |
| **Vercel/JSDelivr (optional)** | Easy CDN delivery |

The repo does not contain any backend.

---

## 📁 Repo Structure

```
arabicaapi/
├── data/
│ ├── ecommerce/
│ ├── travel/
│ ├── food/
│ ├── music/
│ ├── education/
│ ├── healthcare/
│ ├── books/
│ ├── cars/
│ ├── restaurant/
│ ├── fashion/
│ ├── animals/
│ ├── home/
│ ├── art/
│ ├── history/
│ ├── avatars/
│ └── avatars-v2/
├── README.md
└── package.json
```

Images will be stored in a separate branch:



---

## ⚙️ Usage

Fetch any JSON file directly (JS):

```
fetch("https://raw.githubusercontent.com/YOUR_USER/ArabicaAPI/main/data/ecommerce/all-products.json")
  .then(res => res.json())
  .then(data => console.log(data));
```
Or import locally:

```
import products from "./data/ecommerce/all-products.json";
```

All data is static only

Some categories use semi-realistic info

Avatars and reviews are fictional

The project will expand gradually with new datasets

🤝 Contributing

Pull requests are welcome.
Help by adding new datasets, categories, or improving current ones.
