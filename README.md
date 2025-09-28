# 🛠️ UtiliPad

<div align="center">
  <img src="https://img.shields.io/badge/Astro-5.13.9-ff5d01.svg" alt="Astro" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.13-38bdf8.svg" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178c6.svg" alt="TypeScript" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
</div>

---

**UtiliPad** is a modern suite of free web tools built with Astro.js, designed to boost your productivity with file, image, and text utilities—all in one place.

---

## ✨ Features

- **Fast & Modern:** Built with Astro.js, TailwindCSS, and TypeScript.
- **Responsive Design:** Works on desktop, tablet, and mobile.
- **Dark Mode:** Elegant and professional interface.
- **Modular Tools:** JSON formatter, word counter, file converter, image compressor, and more.
- **Open Source:** MIT licensed.

---

## 🚀 Quick Start

```bash
git clone <repository-url>
cd UtiliPad
pnpm install
pnpm dev
```

---

## 🖼️ Preview

<p align="center">
  <img src="https://www.utilipad.com/og/og-home-1236x853.png" alt="UtiliPad Screenshot" width="853"/>
</p>

---

## 🧰 Available Tools

| Tool             | Description                                 | Status         |
| ---------------- | ------------------------------------------- | -------------- |
| JSON Formatter   | Format, validate, and visualize JSON        | ✅ Available   |
| Text Analyzer    | Count words, characters, and paragraphs     | ✅ Available   |
| File Converter   | Convert between DOCX, XLSX, CSV, JSON, etc. | ✅ Available   |
| ZIP Compressor   | Compress files into ZIP archives            | ✅ Available   |
| Image Compressor | Reduce image size (JPG, PNG, WebP, etc.)    | 🔄 In Progress |

> **Note:** Some file types are not supported due to limitations in free libraries.

---

## 📦 Project Structure

<details>
<summary>Click to expand</summary>

- **astro.config.mjs, package.json, tsconfig.json, pnpm-lock.yaml:** Project configuration and dependencies.
- **db/**: Database configuration and seed scripts.
- **public/**: Static assets, icons, favicons, and manifest files served directly.
- **src/**: Main source code for the app:
  - **animate/**: Animation utilities and timelines.
  - **assets/**: Images and SVG icons used in the UI.
  - **components/**: UI components, shared elements, and tool modules.
  - **constants/**: Static configuration and tool definitions.
  - **content/**: Markdown and config for news and documentation.
  - **i18n/**: Internationalization (translations, helpers, locales).
  - **Layouts/**: Layout components for page structure.
  - **pages/**: Astro pages, API endpoints, and dynamic routes.
  - **stores/**: State management (e.g., modal state).
  - **styles/**: Global CSS and style utilities.
  - **types/**: TypeScript type definitions.
  - **utils/**: Utility functions (email, tools, etc).

</details>

---

## 🛠️ How to Add a New Tool

1. **Create the component:**  
   Place your `.astro` file in [`src/components/tools`](src/components/tools).
2. **Register in `tools.ts`:**  
   Add your tool's metadata.
3. **Add to the component map:**  
   Update the dynamic loader.

---

## 🌐 Tech Stack

| Technology  | Purpose           |
| ----------- | ----------------- |
| Astro.js    | Main framework    |
| TailwindCSS | Utility-first CSS |
| TypeScript  | Static typing     |
| GSAP        | Animations        |
| Nanostores  | Global state      |

---

## 📝 Roadmap

- [x] Base architecture with Astro.js
- [x] Dynamic routing and modular components
- [x] File and image tools (ZIP, conversion, compression)
- [ ] Favorites and usage history
- [ ] Advanced tools (code, crypto)
- [ ] PWA/offline mode

---

## 📄 License

MIT

---

## 🙏 Acknowledgements

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- Open Source Community

---

<div align="center">
  <strong>✨ Made with ❤️ and 🌿🚬💨 by Nevits</strong>
</div>
