---
name: react-to-next-conversion
description: Procedure for converting a React/Vite UI project to an identical Next.js implementation while preserving design, styling, and component structure.
source: auto-skill
extracted_at: '2026-05-28T10:33:49.948Z'
---

## Goal
Migrate an existing React.js application (built with Vite, Tailwind CSS, Framer Motion, and custom UI components) to a **Next.js 14** project **without changing any visual aspect** – layout, colors, images, animations, or component hierarchy. The migration must keep the UI‑only authentication pages, dynamic routing, and data‑driven lists intact while adopting Next.js best practices.

## Step‑by‑Step Procedure

### 1. Prepare the New Next.js Workspace
1. Create a new folder (`next-food-delivery`).
2. Initialise `package.json` with the required dependencies (`next`, `react`, `react-dom`, `tailwindcss`, `framer-motion`, UI libraries, etc.).
3. Add `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, and `tsconfig.json` mirroring the original Tailwind and TypeScript setup.
4. Install dev‑dependencies (`autoprefixer`, `postcss`, `eslint`, `@types/*`).
5. Run `npm install` and verify the Next.js dev server starts.

### 2. Global Styling
1. Create `styles/globals.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities`).
2. Preserve any custom utilities from the original project (e.g., `.glass-panel`, `.glass-card`).
3. Import this file in the root layout (`app/layout.tsx`).

### 3. Root Layout (`app/layout.tsx`)
1. Wrap the `<body>` with the same providers used in the React app (`ToastProvider`, `CartProvider`).
2. Keep the dark background and font settings (`bg-[#05070f] text-slate-100`).
3. Export `metadata` for SEO.

### 4. Replicate Folder Structure
| Original | Next.js Equivalent |
|----------|-------------------|
| `src/components/ui/*` | `components/ui/*` |
| `src/components/*` (Navbar, Footer, etc.) | `components/*` |
| `src/constants/data.ts` | `constants/data.ts` |
| `src/hooks/*` | `hooks/*` |
| `src/utils/*` | `utils/*` |
| `src/pages/*` (Home, Login, …) | `app/page.tsx`, `app/login/page.tsx`, etc. |
| Images & static assets | `public/` |

### 5. Convert UI Pages to the App Router
1. **Add `app/` folder** – this is the new routing system.
2. **Home page** → `app/page.tsx`. Copy the original `Home.tsx` JSX, replace all `react-router-dom` `Link` imports with Next.js `next/link`, and add `'use client'` at the top because it uses state and hooks.
3. **Authentication UI pages** – create `app/login/page.tsx`, `app/signup/page.tsx`, `app/forgot-password/page.tsx`. They remain UI‑only; keep the `useToast` feedback. Add `'use client'`.
4. **Optional OTP / Reset routes** – dynamic folders like `app/verify-email/[token]/page.tsx` and `app/reset-password/[token]/page.tsx` with identical form markup.
5. **Dynamic Food Detail** – create `app/details/[id]/page.tsx`. Use `useRouter` (`next/navigation`) to read the `id` and fetch the matching item from the static `popularItems` array. Add `'use client'`.

### 6. Re‑use Existing Components
* Copy every component file exactly as it appears in the React codebase (Button, Input, Badge, Modal, Navbar, Footer, CartProvider, CartDrawer, ToastProvider, FoodCard, etc.).
* Add `'use client'` to any component that uses React state, effects, or browser APIs.
* Update imports:
  * `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`.
  * Relative paths stay the same (e.g., `@/components/ui/button`).
* No styling changes – Tailwind classes remain untouched, guaranteeing visual parity.

### 7. Data‑Driven Lists
* Keep the static `constants/data.ts` file unchanged.
* In the Home page, render food cards with:
  ```tsx
  {popularItems.map(item => <FoodCard key={item.id} {...item} />)}
  ```
* `FoodCard` is a new reusable component placed in `components/FoodCard.tsx` that contains the exact markup from the original Home list items.

### 8. Client‑Only vs Server Components
* By default, files inside `app/` are **server components**. Any file that uses `useState`, `useEffect`, `useToast`, or other browser‑only APIs must start with `'use client'`.
* All UI pages and components that manage state receive this directive, preserving the original behavior.

### 9. Verify Visual Fidelity
1. Run `npm run dev` and open the site.
2. Compare each route (`/`, `/login`, `/signup`, `/details/<id>`) with the original Vite preview – ensure hero, navbar, categories, food cards, testimonials, and footer match pixel‑for‑pixel.
3. Check responsiveness on mobile breakpoints – the Tailwind classes are unchanged, so the layout should behave identically.

### 10. Production‑Ready Tweaks
* Enable **strict mode** (`reactStrictMode: true`).
* Use **SWC minification** (`swcMinify: true`).
* Add a **lint script** (`eslint-config-next`).
* Ensure `next/image` is not forced; external image URLs work as‑is, matching the original implementation.
* Remove the old Vite‑specific files (`vite.config.ts`, `index.html`) from the repo to avoid confusion.

## Result
A fully functional Next.js project that **looks exactly the same** as the original React/Vite application, with:
- Identical UI components and Tailwind styling.
- Reusable component hierarchy.
- Dynamic routing for product details.
- UI‑only authentication pages.
- Clean, scalable folder layout adhering to Next.js best practices.

This approach can be reused for any React‑based UI that needs a seamless migration to Next.js while preserving design integrity.
