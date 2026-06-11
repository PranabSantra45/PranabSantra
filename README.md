# ⚛️ Pranab Santra — Deep Tech & Systems Portfolio

The portfolio is live there : [![Live Site](https://img.shields.io/badge/Live-Portfolio-emerald?style=for-the-badge&logo=githubpages&logoColor=white)](https://pranabsantra45.github.io/PranabSantra/)

[![Tech Stack](https://img.shields.io/badge/Stack-Vite%20%7C%20ES6%20%7C%20CSS3-blue?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Research Focus](https://img.shields.io/badge/Focus-AI/ML%20%7C%20Quantum%20%7C%20Space-purple?style=for-the-badge)](https://github.com/PranabSantra45)

A premium, interactive, and fully responsive researcher portfolio designed for **Pranab Santra** (B.E. Computer Science and Engineering undergraduate at Sathyabama Institute of Science and Technology, 2024–2028). 

This repository showcases theoretical research, system engineering implementations, and startup-focused innovations at the intersection of AI/ML, Quantum Computing, Space Tech, and Financial Systems.

---

## 📁 Repository Directory Structure

The workspace is organized using a clean, production-ready modular structure compiled via **Vite**:

```
portfolio/
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions automated Pages deployment
├── src/
│   ├── css/
│   │   ├── main.css         # Entry CSS importing all modules
│   │   ├── variables.css    # Color schemes, variables, and keyframe animations
│   │   ├── layout.css       # Navbars, graph backdrop, headers, section layouts
│   │   └── components.css   # Widgets (CLI terminal, canvas, buttons, timelines)
│   ├── js/
│   │   ├── main.js          # Entry loader initializing script modules
│   │   ├── quantum-canvas.js# Wavefunction probability collapse physics simulator
│   │   ├── terminal-console.js # Diagnostic CLI commands router
│   │   └── ui-controllers.js# Scroll observers, tabs, and category filters
│   └── index.html           # Main semantic HTML structure
├── package.json             # Project dependencies & build commands
├── vite.config.js           # Vite server configurations
└── README.md                # This documentation file
```

---

## Core Interactive Features

### 1. Quantum Wavefunction State Collapse Canvas
The background features an interactive coordinate system simulating probability orbital paths. Moving your cursor triggers a localized "measurement collapse" of nodes to concentric target vectors, printing real-time coordinate logs.

### 2. Diagnostic Command-Line Interface (CLI)
An embedded terminal emulator is integrated into the Explorations section. Try inputting these commands directly:
*   `help` — Lists all available system utilities.
*   `about` — Prints academic and startup-focused bio details.
*   `diagnose` — Triggers a hardware and systems diagnosis animation loop.
*   `run ml-predict` — Simulates regression models on EV charging datasets and outputs ASCII curves.
*   `quantum-telemetry` — Computes probability vectors coherence state maps.
*   `clear` — Wipes the terminal console history.

---

## Deployed Projects & Architecture

1. **EV Charging Data Analysis & Prediction**
   * *Tech Stack:* Python, Jupyter, Flask, HTML/CSS/JS.
   * *Focus:* Forecasting energy grid load distributions via regression models deployed as an interactive dashboard.
2. **Smart Live Transport System**
   * *Tech Stack:* Arduino, ESP8266, React, Firebase Firestore.
   * *Focus:* Real-time public transit tracking using geolocations, hardware sensors, and cloud state synchronization.
3. **P2QR Minimal Inventory Tool**
   * *Tech Stack:* Python, Tkinter, SQL, QR-Code API.
   * *Focus:* Streamlined local inventory manager with automated QR code scanning, printing, and database lookup.

---

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18+) installed.

### 2. Installation
Clone the repository, navigate into the project directory, and install dependencies:
```bash
git clone https://github.com/PranabSantra45/PranabSantra.git
cd PranabSantra
npm install
```

### 3. Local Development Server
Spin up the hot-reloading local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To package, minify, and optimize the bundle for hosting:
```bash
npm run build
```
Vite compiles and outputs the distribution folder inside `./dist/`.

---

## Contact & Coordinates

*   **LinkedIn:** [linkedin.com/in/pranabsantra](https://www.linkedin.com/in/pranabsantra)
