# 🧑‍💻 Portfolio & Pokémon Personality Quiz

A full-stack personal portfolio and CV site featuring a built-in **Pokémon personality quiz**. Bilingual (ES/EN), theme-switchable, and fully responsive — built with **Next.js 14+** (App Router), **Prisma 7**, and **SQLite**.

---

## ✨ Features

### 📄 CV / Portfolio
- **Sticky navbar** with smooth scroll navigation
- **Language toggle** — full Spanish / English support across the site
- **Theme toggle** — animated light / dark mode switch with persistence
- **Responsive design** — optimized for desktop, tablet, and mobile
- **Modular sections** — About, Experience, Education, Portfolio, Contact
- **Component-based architecture** — scalable and easy to extend

### 🎮 Pokémon Personality Quiz
- **Dynamic quiz engine** — questions fetched from an internal API
- **Personality scoring** — weighted answers mapped to Pokémon profiles
- **Seeded database** — one command populates all personalities and questions
- **Batch processing** — efficient large-scale data insertion in seed script
- **Result screen** — displays your matching Pokémon with image and description

---

## 🛠 Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js (App Router)                |
| Language    | TypeScript                          |
| ORM         | Prisma 7                            |
| Database    | SQLite (`better-sqlite3` adapter)   |
| Styling     | CSS / Tailwind (as configured)      |
| Runtime     | Node.js 18+                         |

---

## 📁 Folder Structure

```text
├── app/
│   ├── api/
│   │   └── questions/
│   │       └── route.ts          # GET — serves quiz questions
│   ├── quiz/
│   │   └── page.tsx              # Quiz page
│   ├── layout.tsx                # Root layout (navbar, theme/lang providers)
│   ├── page.tsx                  # Home — CV landing page
│   └── globals.css               # Global styles & theme variables
├── components/
│   ├── Navbar.tsx                # Sticky navbar with navigation links
│   ├── ThemeToggle.tsx           # Animated light/dark mode switch
│   ├── LanguageToggle.tsx        # ES/EN language switcher
│   ├── About.tsx                 # About me section
│   ├── Experience.tsx            # Work experience timeline
│   ├── Education.tsx             # Education & certifications
│   ├── Portfolio.tsx             # Project showcase
│   ├── Contact.tsx               # Contact form / info
│   ├── Quiz.tsx                  # Quiz engine component
│   └── QuizResult.tsx            # Result display component
├── lib/
│   ├── prisma.ts                 # Prisma client instance
│   ├── i18n/                     # Translation files (ES/EN)
│   └── utils.ts                  # Shared helpers
├── prisma/
│   ├── schema.prisma             # Data models (Personality, Question, etc.)
│   ├── seed.ts                   # Seeds personalities & questions (batch)
│   └── dev.db                    # SQLite database (generated)
├── public/
│   └── img/
│       └── quiz/                 # Pokémon result images
├── .env                          # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

> Adjust paths to match your exact project layout — this reflects the typical architecture.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./dev.db"
```

> Prisma uses this path for the local SQLite database. No external DB server needed.

---

## 🗄 Database Setup

### Generate the Prisma client and apply migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This creates `prisma/dev.db` and generates the typed Prisma client.

### Seed the database

```bash
npx prisma db seed
```

`seed.ts` populates:

- **Personalities** — Pokémon profiles with scoring weights
- **Questions** — Quiz questions with answer options linked to personality traits

> Uses batch processing for efficient insertion of large datasets.



---

## 🚀 Running the Project

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

---

## 🌐 CV / Portfolio Sections

| Section       | Description                                              |
| ------------- | -------------------------------------------------------- |
| **About**     | Personal introduction and professional summary           |
| **Experience**| Work history with roles, companies, and key achievements |
| **Education** | Degrees, certifications, and relevant training           |
| **Portfolio** | Showcase of projects with descriptions and links         |
| **Contact**   | Contact form or direct contact information               |

### Language & Theme

- **Language toggle** switches all site content between Spanish and English using translation files in `lib/i18n/`
- **Theme toggle** switches between light and dark mode with animated transitions; preference is persisted across sessions
- Both toggles are accessible from the **sticky navbar** on every page

---

## 🎮 Quiz — How It Works

1. **Navigate** — User clicks the quiz link from the navbar or portfolio
2. **Fetch** — The client calls `GET /api/questions` to load all questions
3. **Answer** — User selects one answer per question
4. **Score** — Each answer adds weighted points to personality profiles
5. **Match** — After the last question, the highest-scoring personality wins
6. **Result** — The matching Pokémon is displayed with its image from `public/img/quiz/`

### API Reference

#### `GET /api/questions`

Returns all quiz questions with answer options and personality scores.

```json
[
  {
    "id": 1,
    "text": "How do you handle a challenge?",
    "answers": [
      { "id": 1, "text": "Head-on with full energy", "personalityScores": { "..." } },
      { "id": 2, "text": "Carefully plan my approach", "personalityScores": { "..." } }
    ]
  }
]
```

---

## 🖼 Adding a New Pokémon Result

1. Place the image in `public/img/quiz/` (e.g., `eevee.png`)
2. Add the personality entry in `prisma/seed.ts` with scoring weights and the image filename
3. Re-run the seed:

```bash
npx prisma db seed
```

---

## 📝 Common Commands

| Command                          | Description                              |
| -------------------------------- | ---------------------------------------- |
| `npm run dev`                    | Start dev server                         |
| `npm run build`                  | Production build                         |
| `npx prisma generate`           | Regenerate Prisma client                 |
| `npx prisma migrate dev`        | Apply pending migrations                 |
| `npx prisma db seed`            | Seed personalities & questions           |
| `npx prisma studio`             | Open database GUI                        |
| `npx prisma migrate reset`      | Reset DB + re-seed (destructive)         |

---

## 🐛 Troubleshooting

| Issue | Fix |
| ----- | --- |
| `prisma generate` fails | Ensure `@prisma/adapter-better-sqlite3` is in `schema.prisma` and installed |
| Empty quiz / no questions | Run `npx prisma db seed` |
| Images not loading | Verify filenames in `public/img/quiz/` match the seed data |
| Theme/language not persisting | Check localStorage keys and provider wrappers in `layout.tsx` |
| Translations missing | Verify all keys exist in both `lib/i18n/es.ts` and `lib/i18n/en.ts` |
| Port 3000 in use | `npm run dev -- -p 3001` |
| Migration conflicts | `npx prisma migrate reset` (deletes all data) |

---

## 📦 Key Dependencies

```json
{
  "next": "^14.x",
  "react": "^18.x",
  "prisma": "^7.x",
  "@prisma/client": "^7.x",
  "@prisma/adapter-better-sqlite3": "^7.x",
  "better-sqlite3": "^11.x",
  "typescript": "^5.x"
}
```

---

## 📄 License

MIT © Vichotte