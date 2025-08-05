# Pokémon Search App

A responsive Next.js 15‑powered web application that lets users browse, search, filter by type, and favorite Pokémon using the official PokéAPI.

---

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Available Scripts](#available-scripts)
4. [Tech Stack](#tech-stack)
5. [Environment Variables](#environment-variables)
6. [Deployment](#deployment)

---

## Features

* **Search & Filter**: Type to search by name, select from a dropdown to filter by Pokémon type.
* **Pokémon List**: Displays cards for the first 150 Pokémon (Gen I) with sprite and type badges.
* **Detail View**: Click a card to view full details—stats, abilities, weight, height—plus an image carousel.
* **Breadcrumb Navigation**: Easy backtracking between Home and Detail pages.
* **Favorites**: Mark/unmark Pokémon as favorites, persisted in localStorage, and viewable on a dedicated Favorites page.
* **Responsive Design**: Mobile-first layout with Tailwind CSS breakpoints for cards and forms.
* **TypeScript**: Strict types for data models, API utilities, components, and hooks.

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/pokemon-search-app.git
   cd pokemon-search-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start development server at 3000 |
| `npm run build`  | Build for production             |
| `npm run start`  | Run built app in production mode |
| `npm run lint`   | Run ESLint checks                |
| `npm run format` | Apply Prettier formatting        |

---

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS (mobile-first)
* **Language:** TypeScript
* **State Management:** React Context + custom hooks
* **API:** PokéAPI v2 (native `fetch`)

---

## Environment Variables

This app does not require any private API keys—PokéAPI is public.
API_BASE=https://pokeapi.co/api/v2

---

## Deployment

1. Push to GitHub.
2. Connect repo on Stackblitz.
3. Open [https://stackblitz.com/~/github.com/Raman-Nagar/Pokemon-Searech-App](https://stackblitz.com/~/github.com/Raman-Nagar/Pokemon-Searech-App) in your browser. 

---

Enjoy your Pokémon journey! 🚀
