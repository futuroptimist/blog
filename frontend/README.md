## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.17.0 or higher)
- npm

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

   Your site will be available at http://localhost:3000/

## Quality checks

Run the following commands locally before pushing changes. They mirror the Flywheel best practices:

```bash
npm run lint
npm run test:ci
npm run build
```

Content lives in `src/content/posts` and is typed via Astro content collections.

