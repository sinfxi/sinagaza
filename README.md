# FoodMind — Persian Kitchen (MVP)

A Persian-first RTL food discovery and cooking prototype built with React, TypeScript, Vite and Three.js via React Three Fiber.

## Requirements
- Node.js 20+ (Node 22 recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Checks
```bash
npm test
npm run build
```

## Included
- RTL Persian responsive UI with light/dark mode
- Lazy-loaded interactive Three.js hero scene
- Recipe search across names, aliases, cuisine, category and ingredients
- Category, vegetarian and maximum-time filters
- Demo recipe detail pages and serving multiplier
- Favorites and shopping list saved to browser localStorage
- Step-by-step cooking mode with timer
- Pantry matching showing missing ingredients
- Local preferences and reduced-motion CSS support

## Honest MVP limitations
- The included recipes are illustrative demo records, not a validated global recipe database. Check ingredients and steps before cooking.
- Favorites, settings and shopping lists are local to one browser; there is no account, cloud sync, API, PostgreSQL database, admin panel or server-side persistence yet.
- Nutritional values, current prices, allergen guarantees, user reviews and recipe-history citations are not provided.
- Recipe imagery uses remote Unsplash URLs and Google Fonts, so those assets need internet access; the app UI itself has fallbacks for images and the 3D canvas.
- This is a prototype and has not been security-reviewed for production.
