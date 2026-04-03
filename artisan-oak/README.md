# Artisan & Oak — Next.js Website

Монгол тавилга сэргээн засварлалтын компанийн вэбсайт.

## Суулгах заавар

```bash
# 1. Суулгах
npm install

# 2. Хөгжүүлэх горимд ажиллуулах
npm run dev

# 3. http://localhost:3000 дээр нээнэ үү
```

## Build хийх

```bash
npm run build
npm run start
```

## Файлын бүтэц

```
artisan-oak/
├── app/
│   ├── layout.js        # Root layout (metadata, fonts)
│   ├── page.js          # Нүүр хуудас
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.js        # Навигаци (mobile responsive)
│   ├── Hero.js          # Hero section
│   ├── Services.js      # Үйлчилгээ хэсэг
│   ├── Gallery.js       # Галерей хэсэг
│   ├── Contact.js       # Холбоо барих форм
│   └── Footer.js        # Footer
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Технологи

- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **Google Fonts** — Playfair Display + Lato
- **JavaScript** (JS, JSX — TypeScript биш)
