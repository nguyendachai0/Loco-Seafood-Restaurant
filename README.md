# Loco Restaurant - Seafood Restaurant Website

A high-performance, fully responsive, bilingual (English/Vietnamese) Next.js 15 website for a premium seafood restaurant in Da Nang.

## Features

- ✅ **Next.js 16** with App Router (async params support)
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for modern, responsive design
- ✅ **Dual-language support** (English/Vietnamese) with next-intl
- ✅ **Image optimization** with Next.js Image component (WebP/AVIF)
- ✅ **SEO-optimized** with Restaurant Schema markup
- ✅ **Modular architecture** with reusable components
- ✅ **Clean separation** of concerns (components, utils, types, data)

## Project Structure

```
src/
├── app/[locale]/          # Route pages with internationalization
│   ├── page.tsx           # Homepage
│   ├── menu/page.tsx      # Menu page
│   ├── location/page.tsx  # Location & hours
│   ├── contact/page.tsx   # Contact form
│   └── reserve/page.tsx   # Reservation form
├── components/
│   ├── layout/            # Header, Footer, Language switcher
│   ├── ui/                # Reusable UI components
│   ├── home/              # Homepage sections
│   ├── menu/              # Menu-specific components
│   └── shared/            # Shared components
├── lib/
│   ├── data/              # JSON data files
│   └── utils/             # Helper functions & constants
├── types/                 # TypeScript type definitions
└── messages/              # i18n translation files
```

## Installation

1. **Create the project:**

```bash
npx create-next-app@15 seafood-restaurant --typescript --tailwind --app
cd seafood-restaurant
```

2. **Install dependencies:**

```bash
npm install next-intl
```

3. **Copy all files** from this artifact into your project, maintaining the folder structure.

4. **Add placeholder images** to `public/images/`:

   - `hero-seafood.png`
   - `fresh-catch.png`
   - `placeholder-dish.jpg`
   - Individual dish images referenced in `menuData.json`

5. **Run the development server:**

```bash
npm run dev
```

6. **Open** [http://localhost:3000](http://localhost:3000)

## Key Implementation Details

### Internationalization (i18n)

- Uses `next-intl` for translations
- Language switcher in header
- URL-based locale routing: `/en/menu` or `/vi/menu`
- Translation files in `src/messages/`

### Menu Management

- Menu data stored in `src/lib/data/menuData.json`
- Structured TypeScript interfaces in `src/types/menu.ts`
- Easy to update menu items without code changes
- Supports bilingual names, descriptions, and metadata

### Reusable Components

- **UI Components**: Button, Card, Container, Section
- **Layout Components**: Header, Footer, LanguageSwitcher
- **Feature Components**: Organized by page/feature

### Performance Optimizations

- Next.js Image component with WebP/AVIF
- Lazy loading images
- Optimized bundle size
- Server Components by default

### SEO

- Restaurant Schema.org markup in layout
- Semantic HTML structure
- Crawlable menu content (no PDFs)
- Meta tags optimized

## Customization

### Update Restaurant Information

Edit `src/lib/utils/constants.ts`:

```typescript
export const RESTAURANT_INFO = {
  name: "Your Restaurant Name",
  phone: "+84 xxx xxx xxxx",
  address: "Your address",
  // ...
};
```

### Update Menu

Edit `src/lib/data/menuData.json` to add/modify menu items.

### Update Translations

Edit files in `src/messages/en.json` and `src/messages/vi.json`.

### Styling

- Color palette defined in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles use Tailwind utilities

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

```bash
npm run build
npm start
```

## TODO for Production

- [ ] Add real images to `/public/images/`
- [ ] Integrate Google Maps API for location page
- [ ] Connect contact form to email service (SendGrid, Resend, etc.)
- [ ] Set up reservation system integration
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Configure domain and SSL
- [ ] Add third-party delivery integration (GrabFood, ShopeeFood)
- [ ] Implement sitemap.xml and robots.txt
- [ ] Add loading states and error boundaries
- [ ] Set up form validation with Zod or similar

## License

MIT
