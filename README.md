# 🗃 Pranab Kr Santra - Professional Research Portfolio

A professional, high-performance, modular portfolio website configured for **Pranab Kr Santra**, showcasing interests and projects in **Artificial Intelligence, Machine Learning, Quantum Computing, Space Tech, and Deep Tech Innovation**.

---

## 📁 Workspace Directory Structure

This project uses an industry-standard modular frontend architecture compiled via **Vite**:

```
portfolio/
├── src/
│   ├── css/
│   │   ├── main.css             # Main orchestrator importing modular stylesheets
│   │   ├── variables.css        # Colors, theme variables (dark/light), system keyframes
│   │   ├── layout.css           # Resets, graph backdrop, headers, section layouts
│   │   └── components.css       # Custom widgets (CLI terminal, canvas styles, buttons, forms)
│   ├── js/
│   │   ├── main.js              # Entry module importing and initializing sub-modules
│   │   ├── quantum-canvas.js    # Interactive wavefunction collapse physics canvas
│   │   ├── terminal-console.js  # Diagnostic CLI commands router
│   │   └── ui-controllers.js    # Scroll observers, tabs switcher, and portfolio filters
│   └── index.html               # Main semantic HTML structure
├── package.json                 # Project dependencies & scripts (Vite config)
├── vite.config.js               # Dev server configuration (sets root to /src)
└── README.md                    # This documentation file
```

---

## 🛠 Features Setup & Interactivity

### 1. Quantum State Collapse Simulation
A canvas particle animation rendering probability orbital paths. Moving your cursor collapsible nodes locally, drawing measurement concentric vectors and calculations overlay readouts.

### 2. Diagnostic Command-Line Interface (CLI)
An interactive terminal widget allowing users to query diagnostic profiles. Try typing these commands:
*   `help`: lists commands.
*   `about`: prints academic background credentials (B.E. CSE at Sathyabama).
*   `diagnose`: executes local module diagnostic system status loops.
*   `run ml-predict`: parses EV charging logs datasets and outputs R² regressions with ASCII curves.
*   `quantum-telemetry`: computes probability vectors coherence state maps.
*   `clear`: clears console logs.

---

## 🚀 How to Run Locally

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org) (v18 or higher recommended) installed.

### 2. Dependency Installation
Navigate to the root directory in your terminal and install Vite:
```bash
cd "C:\Users\Pranab Santra\Desktop\portfolio"
npm install
```

### 3. Start Development Server
Boot up Vite's local dev server with hot module replacement:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To bundle, minify, and optimize the static assets (compiling ES6 modules to optimized chunks):
```bash
npm run build
```
Vite will output the production bundle inside the `dist/` directory, ready to deploy to GitHub Pages, Netlify, or Vercel.
