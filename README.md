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

- **🚀 Fast & Modern:** Built with Astro.js 5.13, TailwindCSS 4.1, and TypeScript for optimal performance.
- **📱 Responsive Design:** Seamlessly works across desktop, tablet, and mobile devices.
- **🌙 Dark Mode:** Elegant and professional interface with dark theme support.
- **🔒 Privacy First:** All file processing happens locally in your browser—your files never leave your device.
- **🎨 Rich Tool Suite:** 8+ tools including JSON formatter, image compressor, file converter, QR generator, and more.
- **🌐 Multilingual:** Full support for English and Spanish (i18n ready).
- **⚡ Zero Config:** No installation required—just open and use.
- **📦 Open Source:** MIT licensed and community-driven.

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
  <img src="https://www.utilipad.com/og/og-home-1157x851.png" alt="UtiliPad Screenshot" width="853"/>
</p>

---

## 🧰 Available Tools

### 📁 File Tools

| Tool               | Description                                        | Key Features                                                                                                                                                                                                  | Status       |
| ------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **ZIP Compressor** | Compress multiple files into a single ZIP archive  | • DEFLATE algorithm with level 9 compression<br>• Drag & drop interface<br>• Individual file removal<br>• Real-time size estimation<br>• Client-side processing (files never uploaded)                        | ✅ Available |
| **File Converter** | Convert between multiple document and data formats | • **Documents**: DOCX ↔ HTML, TXT, PDF, MD<br>• **Spreadsheets**: XLSX, XLS, ODS ↔ CSV, JSON, HTML<br>• **Data**: CSV ↔ JSON ↔ XLSX<br>• Batch conversion with ZIP download<br>• Category-organized interface | ✅ Available |

### 🖼️ Image Tools

| Tool                 | Description                                      | Key Features                                                                                                                                                                                                                     | Status       |
| -------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Image Compressor** | Reduce image file size while maintaining quality | • Adjustable quality slider (0-100%)<br>• Max file size configuration<br>• Dimension constraints (width/height)<br>• Convert to JPEG, PNG, or WebP<br>• Batch processing with ZIP download<br>• Real-time compression statistics | ✅ Available |
| **Image Converter**  | Transform images between different formats       | • Support for JPEG, PNG, WEBP, TIFF, AVIF<br>• Individual or batch conversion<br>• Drag & drop interface<br>• ZIP download for multiple files                                                                                    | ✅ Available |
| **Image Resize**     | Change image dimensions                          | • Coming soon                                                                                                                                                                                                                    | 🔜 Planned   |
| **Image Crop**       | Crop specific parts of images                    | • Coming soon                                                                                                                                                                                                                    | 🔜 Planned   |

### 📝 Text & Utility Tools

| Tool                   | Description                             | Key Features                                                                                                                                                                                                           | Status       |
| ---------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **JSON Formatter**     | Format, validate and beautify JSON code | • Real-time syntax validation<br>• Smart formatting and minification<br>• Syntax highlighting<br>• Error detection with line numbers<br>• One-click copy to clipboard<br>• RFC 7159 compliant                          | ✅ Available |
| **Text Analyzer**      | Complete text analysis and statistics   | • Character counter (with spaces)<br>• Word counter<br>• Paragraph and sentence detection<br>• Word frequency analysis<br>• Average length statistics<br>• SEO and content optimization                                | ✅ Available |
| **QR Code Generator**  | Create customizable QR codes            | • Instant generation from text/URL<br>• Responsive design (200-320px)<br>• High-resolution PNG (512x512px)<br>• Scalable SVG format<br>• Native Web Share API integration<br>• Mobile-optimized interface              | ✅ Available |
| **Password Generator** | Generate secure random passwords        | • Adjustable length (5-128 characters)<br>• Custom character sets (uppercase, lowercase, numbers, symbols)<br>• Minimum requirements configuration<br>• One-click copy & refresh<br>• Security best practices built-in | ✅ Available |

> **Note:** All file processing happens client-side in your browser. Your files never leave your device. We only track anonymous usage statistics to improve the tools.

---

## 📦 Project Structure

<details>
<summary>Click to expand</summary>

```
UtiliPad/
├── astro.config.mjs        # Astro configuration and integrations
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── pnpm-lock.yaml         # Lock file for dependencies
│
├── db/                     # Astro DB configuration
│   ├── config.ts          # Database schema and tables
│   └── seed.ts            # Database seed data
│
├── public/                 # Static assets served directly
│   ├── icons/             # Favicon and app icons
│   ├── og/                # Open Graph images
│   ├── favicon.svg        # Main favicon
│   ├── robots.txt         # SEO crawler rules
│   ├── site.webmanifest  # PWA manifest
│   └── ads.txt            # Advertising verification
│
└── src/                    # Main source code
    ├── actions/           # Astro DB actions (server-side)
    ├── assets/            # Images and SVG icons
    ├── components/        # UI components and tool modules
    ├── config/            # App configuration (tools, constants)
    ├── content/           # Markdown content (news, docs)
    ├── features/          # Feature-specific logic
    ├── hooks/             # Custom React/Preact hooks
    ├── i18n/              # Internationalization (en/es)
    ├── Layouts/           # Page layout components
    ├── lib/               # Third-party library integrations
    ├── pages/             # Astro pages and API routes
    ├── stores/            # Nanostores state management
    ├── styles/            # Global CSS and utilities
    ├── types/             # TypeScript type definitions
    └── utils/             # Helper functions and utilities
```

### Key Directories

- **`actions/`**: Server-side database operations for usage tracking
- **`components/`**: Reusable UI components including all tool implementations
- **`config/`**: Tool definitions, categories, and app configuration
- **`content/`**: Markdown files for tool documentation and news
- **`i18n/`**: Translation files for English and Spanish
- **`pages/`**: File-based routing (Astro pages)

</details>

---

## 🛠️ How to Add a New Tool

Follow these steps to add a new tool to UtiliPad:

### 1. Create the Tool Component

Create a new folder in [`src/features/tools/`](src/features/tools/) with your tool's name (kebab-case):

```bash
src/features/tools/my-awesome-tool/
└── MyAwesomeTool.astro
```

### 2. Register the Tool in Configuration

Add your tool to [`src/config/tools.config.ts`](src/config/tools.config.ts):

```typescript
{
  id: "my-awesome-tool",
  name: "My Awesome Tool",  // Fallback if no translation
  description: "Does something awesome",  // Fallback if no translation
  href: "/tools/my-awesome-tool",
  bagde: "Nuevo",  // Options: "Nuevo", "Proximamente", ""
  isAvailable: true,
  component: "MyAwesomeTool",  // Must match component name
}
```

### 3. Import and Map the Component

In [`src/pages/[lang]/tools/[toolId].astro`](src/pages/[lang]/tools/[toolId].astro):

```typescript
// Import your component
import MyAwesomeTool from "@/features/tools/my-awesome-tool/MyAwesomeTool.astro";

// Add to COMPONENT_MAP
const COMPONENT_MAP = {
  // ... existing tools
  MyAwesomeTool: MyAwesomeTool,
};
```

### 4. Add Translations

Add translations in [`src/i18n/locales/*/tools.ts`](src/i18n/locales/):

**Spanish** (`es/tools.ts`):

```typescript
items: {
  "my-awesome-tool": {
    name: "Mi Herramienta Increíble",
    description: "Hace algo increíble",
    seo: {
      title: "Mi Herramienta Increíble | UtiliPad",
      description: "Descripción SEO en español..."
    }
  }
}
```

**English** (`en/tools.ts`):

```typescript
items: {
  "my-awesome-tool": {
    name: "My Awesome Tool",
    description: "Does something awesome",
    seo: {
      title: "My Awesome Tool | UtiliPad",
      description: "SEO description in English..."
    }
  }
}
```

### 5. (Optional) Add Documentation

Create news/documentation files in [`src/content/news/`](src/content/news/):

```
src/content/news/
├── en/MyAwesomeTool.md
└── es/MyAwesomeTool.md
```

### 6. Test Your Tool

```bash
pnpm dev
```

Visit: `http://localhost:4321/en/tools/my-awesome-tool`

---

### Tool Component Structure Example

```astro
---
// MyAwesomeTool.astro
import type { Language } from "@/types/language.type";
import { getTranslation } from "@/i18n";

interface Props {
  lang: Language;
}

const { lang } = Astro.props;
const t = (key: string) => getTranslation(lang, key);
---

<section class="tool-container">
  <h2>{t("tools.items.my-awesome-tool.name")}</h2>
  <!-- Your tool implementation -->
</section>

<style>
  /* Tool-specific styles */
</style>

<script>
  // Client-side logic
</script>
```

---

## 🌐 Tech Stack

| Technology      | Version | Purpose                                                          |
| --------------- | ------- | ---------------------------------------------------------------- |
| **Astro.js**    | 5.13.9  | Fast, content-focused web framework with zero JS by default      |
| **TailwindCSS** | 4.1.13  | Utility-first CSS framework for rapid UI development             |
| **TypeScript**  | Latest  | Static typing for enhanced code quality and developer experience |
| **GSAP**        | 3.13.0  | Professional-grade animations and interactions                   |
| **Nanostores**  | 1.0.1   | Lightweight state management (only 286 bytes!)                   |

### Key Libraries

| Library                     | Version | Purpose                                            |
| --------------------------- | ------- | -------------------------------------------------- |
| **File Processing**         |         |                                                    |
| `jszip`                     | 3.10.1  | ZIP file creation and manipulation                 |
| `docx`                      | 9.5.1   | Microsoft Word document generation and processing  |
| `xlsx`                      | 0.18.5  | Excel spreadsheet processing (XLS, XLSX, CSV)      |
| `mammoth`                   | 1.11.0  | DOCX to HTML conversion                            |
| `pdf-lib`                   | 1.17.1  | PDF generation and manipulation                    |
| `jspdf`                     | 3.0.3   | Alternative PDF generation library                 |
| **Image Processing**        |         |                                                    |
| `browser-image-compression` | 2.0.2   | Client-side image compression with quality control |
| `sharp`                     | 0.34.4  | High-performance image processing (server-side)    |
| **Text & Data**             |         |                                                    |
| `json-formatter-js`         | 2.5.23  | JSON syntax highlighting and formatting            |
| `marked`                    | 16.4.0  | Markdown parsing and rendering                     |
| `qr-code-styling`           | 1.9.2   | Customizable QR code generation                    |
| **Infrastructure**          |         |                                                    |
| `@astrojs/db`               | 0.18.0  | Astro database integration (Turso/LibSQL)          |
| `@astrojs/vercel`           | 8.2.8   | Vercel deployment adapter                          |
| `@astrojs/sitemap`          | 3.6.0   | Automatic sitemap generation                       |
| `@vercel/analytics`         | 1.5.0   | Web analytics integration                          |
| `resend`                    | 6.1.0   | Email API integration                              |

---

## 🚧 Coming Soon

- Image resize and crop tools
- Advanced code formatters (CSS, HTML, JS)
- Hash generators and encoders

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
