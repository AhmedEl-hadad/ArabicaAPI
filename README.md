# ArabicaAPI

A modern TypeScript-first Arabic utilities API designed for quick prototyping and real-world apps.  
Provides clean REST endpoints for text tools, Arabic datasets, and static resources.

![Thumbnail](https://github.com/AhmedEl-hadad/ArabicaAPI/blob/assets/695e86e0-ea94-40e0-8da0-617baddbc44d.png?raw=true)

---

## 🚀 What is ArabicaAPI?

ArabicaAPI is a lightweight Arabic-focused API that gives developers ready-to-use endpoints for text processing and structured datasets.

It is built for:
- Fast development
- Clean responses
- Easy integration
- Beginner-friendly and advanced-friendly workflows

**Note:**  
Some datasets are static and stored as JSON. This is intentional for stability and simplicity. Future updates may include dynamic data.

---

## 📚 Table of Contents

- [Features](#-features)
- [Endpoints](#-endpoints)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [Notes](#-notes)
- [License](#-license)

---

## ✨ Features

- ✅ Clean REST API
- ✅ Arabic text utilities (diacritics, normalization, etc.)
- ✅ Organized static datasets
- ✅ TypeScript-first codebase
- ✅ Modular and scalable structure
- ✅ Easy to extend with new modules

---

## 🧩 Endpoints (Initial Modules)

| Module | Description |
|--------|-------------|
| **Text Utils** | Remove diacritics, normalize text, basic string processing |
| **Locales** | Countries, cities, governorates, and Arabic metadata *(planned)* |
| **Faith Data** | Quran and Hadith structured JSON *(future)* |
| **Media Tools** | Text-to-speech helpers and pipelines *(future)* |

More modules will be added as the project evolves.

---

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| **Node.js + TypeScript** | Strong typing and clean structure |
| **Fastify / Express** | Fast and simple REST API |
| **JSON datasets** | Stable and easy-to-maintain data |
| **Vercel / Render** | Optional hosting for public endpoints |

---

## 📁 Project Structure

```
arabicaapi/
├── src/
│ ├── modules/
│ │ ├── text/
│ │ │ ├── text.routes.ts
│ │ │ ├── text.service.ts
│ │ │ └── text.controller.ts
│ │ └── ...
│ ├── core/
│ │ ├── server.ts
│ │ ├── config.ts
│ │ └── utils.ts
│ └── index.ts
├── data/ # Static JSON datasets
├── README.md
└── package.json
```

---
