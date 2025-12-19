# 🎨 Escapemaster UI Kit

> The shared design system and component library for the Escapemaster ecosystem.

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev)

## 📋 Overview

Escapemaster UI Kit is a standalone repository containing the reusable UI components used across **Escapemaster Web** and **Escapemaster Admin**. It ensures visual consistency and speeds up development by providing pre-built, accessible, and responsive components.

## 🏗️ Architecture & Stack

The project is built as a **Vite** application for rapid development and testing, but structured to be exported as a library.

### Core Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript 5.3
- **Styling:** Tailwind CSS v3 (Planned upgrade to v4)
- **Icons:** Lucide React (via consumer)

## 📂 Project Structure

```
escapemaster-ui-kit/
├── src/
│   ├── components/       # The library components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Forms/        # Input, Select, Checkbox
│   │   ├── Calendar/     # Complex Calendar component
│   │   └── index.ts      # Public API barrel file
│   ├── App.tsx           # Playground for testing components
│   └── main.tsx          # Entry point for dev server
├── dist/                 # Built artifacts (JS/CSS)
└── index.html            # Dev server HTML
```

## 🚀 Development Phases & Roadmap

### ✅ Phase 1: Component Library (Completed)
- [x] Core Atoms: Button, Input, Card, Badge, Avatar.
- [x] Molecules: Modal, Dropdown, Alert.
- [x] Organisms: Calendar, DataTable.
- [x] Documentation site (local).

### 🚧 Phase 2: Distribution (In Progress)
- [ ] **NPM Publishing:** Configure `package.json` exports to publish as a private npm package.
- [ ] **Tailwind v4 Upgrade:** Migrate from v3 to v4 to match the Web/Admin applications.
- [ ] **Storybook:** Replace the custom playground with Storybook for better documentation and isolation.

### 🔮 Phase 3: Design System (Planned)
- [ ] **Figma Sync:** Automate token generation from Figma.
- [ ] **Visual Regression Testing:** Ensure no breaking style changes.

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/diegogzt/escapemaster-ui-kit.git
   cd escapemaster-ui-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Playground:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```
