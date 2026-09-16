# ✈️ Visa & Travel Requirements Checker

A comprehensive web application to quickly verify international visa regulations, passport validity rules, customs guidelines, and entry protocols for travelers worldwide.

[Live Demo](https://harry-aura.github.io/Visa-Travel-Requirements-Checker/) • [Report Issue](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker/issues) • [Documentation](#-project-structure)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

## 📖 Overview

The **Visa & Travel Requirements Checker** centralizes scattered embassy information into an accessible dashboard. Travelers select their nationality and destination to receive up-to-date entry regulations, health advisories, and border policies instantly.

- 🛂 **Visa Status Classification** - Instantly verifies Visa-Free access, Visa on Arrival (VoA), eVisa, or Embassy Visa necessity.
- ⏳ **Passport Validity Tracker** - Flags mandatory passport expiration rules (such as 6-month validity) and required blank pages.
- 💉 **Health & Vaccination Policies** - Highlights mandatory inoculations, Yellow Fever certificates, and travel health advisories.
- 📋 **Customs & Currency Allowances** - Details duty-free import thresholds, cash declaration rules, and restricted items.

---

## 🛠️ Tech Stack

### Frontend & UI
| Technology | Purpose |
| :--- | :--- |
| **React.js** | Modular component architecture |
| **Tailwind CSS** | Responsive UI styling and design system |
| **Lucide Icons** | Visual system iconography |
| **Axios / Fetch** | HTTP client for travel data requests |

### Tooling & Environment
| Tool | Purpose |
| :--- | :--- |
| **Node.js & npm** | Package management and runtime |
| **Vite / Create React App** | Fast frontend bundling and HMR |
| **GitHub Pages / Vercel** | Production frontend hosting |

---

## 📁 Project Structure

```text
Visa-Travel-Requirements-Checker/
├── public/                 # Static assets and favicons
├── src/
│   ├── assets/             # Images, flags, and static vector graphics
│   ├── components/         # Reusable UI cards, search bars, modal dialogs
│   ├── data/               # Country lists, visa regulations, and advisory data
│   ├── pages/              # Main layout and requirement search views
│   ├── App.jsx             # Root component
│   └── main.jsx            # Application entry point
├── .gitignore
├── package.json
└── README.md

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git)
   cd Visa-Travel-Requirements-Checker
