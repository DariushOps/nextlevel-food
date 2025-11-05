# NextLevel Food – Recipe Sharing Platform

NextLevel Food is a modern **Next.js 13** application that allows food enthusiasts to share their favorite recipes, discover new meals, and connect with a community of food lovers. The platform supports image uploads, interactive forms, and a simple SQLite backend for data storage.

---

## Features

- Share your favorite meals with image uploads
- View and explore meals with detailed instructions
- Categorization and filtering of meals
- Smooth navigation using **Next.js App Router**
- Input sanitization to prevent XSS attacks
- Database powered by **SQLite** (via `better-sqlite3`)

---

## Tech Stack

- **Next.js 13** (App Router + Server/Client Components)
- **React**
- **SQLite** (via better-sqlite3)
- **CSS Modules**
- **xss** (sanitization)
- **slugify** (URL-friendly slugs)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/DariushOps/nextlevel-food.git

# Install dependencies
npm install

# Run development server
npm run dev
```

## How It Works

Users can browse meals on the homepage or explore all meals.

Authenticated users can share meals via a form, including image uploads.

Meals are stored in a local SQLite database.

Next.js handles routing, metadata, and server/client rendering efficiently.
