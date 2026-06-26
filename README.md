# 🚀 Strona WWW serwisu GSMdoctor

Strona internetowa serwisu telefonów GSMdoctor pobierająca dane z headless CMS na stronę.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Hygraph](https://img.shields.io/badge/Hygraph-6B46C1?style=for-the-badge&logo=graphql&logoColor=white)

---
## 🌐 Demo
[Wypróbuj live demo](https://serwis.gsmdoctor.pl){:target="_blank"}

---
## 🛠 Technologie
 | Kategoria | Technologie |
 |-----------|-------------|
 | **Frontend** | Astro, Tailwind CSS |
 | **Backend** | TypeScript, Hygraph |
 | **Narzędzia** | Git, Hygraph CMS, EmailJS |

---
## 🗂️ Struktura projektu
# Project Structure

```
www-serwis-gsmdoctor/
├── public
│   ├── favicon
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── site.webmanifest
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   ├── images
│   │   └── hero-bg.jpg
│   └── logos
│       ├── apple.png
│       ├── logo-gsmdoctor.png
│       └── samsung.png
├── src
│   ├── assets
│   │   └── fonts
│   │       └── Bitsumishi.ttf
│   ├── components
│   │   ├── BrandTile.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── lib
│   │   ├── hygraph.ts
│   │   └── queries.ts
│   ├── pages
│   │   ├── [brand]
│   │   │   └── [model].astro
│   │   ├── [brand].astro
│   │   └── index.astro
│   └── styles
│       ├── fonts.css
│       └── global.css
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
