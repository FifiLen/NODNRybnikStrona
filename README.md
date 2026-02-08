# Niepubliczny Ośrodek Doskonalenia Nauczycieli w Rybniku

## 🚀 Quick Start

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint and TypeScript checks |

## 🛠 Tech Stack

*   **Core:** Next.js 15.2 (App Router), TypeScript, React 19
*   **Styling:** Tailwind CSS 3.4, Shadcn UI
*   **Animation:** GSAP (GreenSock)
*   **Utils:** Lucide React (Icons), `next/font` (Inter)

## 📂 Project Structure

```text
.
├── app/                        # Next.js App Router (FS-based routing)
│   ├── layout.tsx              # Root layout & Metadata
│   ├── page.tsx                # Home page
│   └── szkolenia/              # Trainings subpage & filters
│
├── components/                 # React Components
│   ├── home-page/              # Home page specific components
│   ├── features/               # Functional domains
│   │   └── courses/            # Course cards, filters, and logic
│   ├── sections/               # Reusable page sections (Gate, Contact)
│   ├── layout-components/      # Structural elements (Header, Footer)
│   ├── providers/              # React Context Providers
│   └── ui/                     # Shadcn UI primitives
│
├── lib/                        # Utilities & Configuration
│   ├── typography.ts           # Typography constants
│   └── utils.ts                # Tailwind merger & helpers
│
└── public/                     # Static assets
    ├── documents/              # PDF files (Regulaminy, Oferty)
    ├── images/                 # Active images
    └── icons/                  # SVG Icons
```

## ℹ️ Developer Notes

*   **Strict Imports:** The project enforces absolute imports (`@/components/...`) for better maintainability.
*   **Accessibility:** Global `AccessibilityProvider` handles accessibility features (`app/layout.tsx`).
*   **Asset Management:** All PDF documents are stored in `public/documents/` and images in `public/images/`.
*   **Metadata:** SEO metadata and Viewport settings are configured in `app/layout.tsx` and `robots.ts`/`sitemap.ts`.
