<div align="center">
  <a href="https://harry-aura.github.io/Visa-Travel-Requirements-Checker/">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vite-Dark.svg" alt="Visa Checker Logo" width="80" height="80" />
  </a>
  <h1 align="center">✈️ Visa & Travel Requirements Checker</h1>
  <p align="center"><strong>A comprehensive full-stack travel intelligence & entry regulations web platform</strong></p>
  <p align="center">
    <a href="https://harry-aura.github.io/Visa-Travel-Requirements-Checker/"><img src="https://img.shields.io/badge/%F0%9F%8C%90%20LIVE%20DEMO-VISIT%20APP-2ea44f?style=for-the-badge" alt="Live Demo" /></a>
    <a href="https://github.com/Harry-aura/Visa-Travel-Requirements-Checker#readme"><img src="https://img.shields.io/badge/%F0%9F%93%96%20DOCUMENTATION-OVERVIEW-blue?style=for-the-badge" alt="Docs" /></a>
    <a href="https://github.com/Harry-aura/Visa-Travel-Requirements-Checker"><img src="https://img.shields.io/badge/%E2%AD%90%20GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github" alt="Repo" /></a>
  </p>
  <p align="center">
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js_20-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" /></a>
    <a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License" /></a>
  </p>
</div>

---

## 📖 Overview

A centralized travel intelligence solution providing verified entry criteria across 190+ sovereign territories. Built with modern web standards, this platform streamlines travel preparation:

- 💳 **Visa Status Breakdown** - Instant verification: Visa-Free, Visa on Arrival (VoA), eVisa, or Embassy Visa required.
- 🚨 **Passport Validity Guard** - Flags the international 6-month validity rule, blank visa page minimums, and damage cautions.
- 📝 **Health & Vaccination Policies** - Mandatory Yellow Fever certificates, recommended immunizations, and travel notes.
- 🔧 **Customs & Currency Controls** - Duty-free allowances, foreign currency reporting thresholds ($10,000+), and prohibited imports.
- 🚪 **Checklist Generator** - Step-by-step traveler verification for return tickets, accommodation vouchers, and consular paperwork.

---

## 🖥️ Live Demo

| Platform | URL | Purpose |
| :--- | :--- | :--- |
| 🌐 **Frontend App** | [Launch Web Application](https://harry-aura.github.io/Visa-Travel-Requirements-Checker/) | Production client dashboard |
| 🔗 **GitHub Repository** | [Source Code](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker) | Complete source files and documentation |
| 📑 **System Architecture** | [Architecture Details](./ARCHITECTURE.md) | Technical specs and workflow diagrams |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component-driven user interface |
| **Tailwind CSS** | Responsive UI styling and adaptive layouts |
| **Lucide React** | Visual iconography system |
| **Axios / Fetch** | HTTP client for asynchronous data loading |

### Backend & Services
| Technology | Purpose |
| :--- | :--- |
| **Node.js 20.x** | Server runtime environment |
| **Express.js 4.x** | REST API endpoints and middleware pipeline |
| **GitHub Pages** | Static site hosting & continuous delivery |

---

## 📁 Project Structure

```text
Visa-Travel-Requirements-Checker/
├── client/                     # Frontend Application
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── components/         # Reusable UI cards, selectors, modals
│   │   ├── pages/              # Requirements search and results views
│   │   ├── App.jsx             # Main application layout
│   │   └── main.jsx            # React root mount
│   └── package.json
│
├── server/                     # Backend API Server
│   ├── config/                 # Environment & configuration files
│   ├── controllers/            # Route logic & travel data handlers
│   ├── routes/                 # API endpoints
│   └── package.json
│
├── ARCHITECTURE.md             # System design & architecture
├── CHANGELOG.md                # Version history & update logs
├── CONTRIBUTING.md             # Contribution guidelines
├── PROJECT_PLAN.md             # Project roadmap & milestones
├── SECURITY.md                 # Security policies & reporting
├── UI_UX_DESIGN.md             # Visual design tokens & interface guide
├── LICENSE                     # MIT License
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or v20.x LTS)
- [npm](https://www.npmjs.com/) (v9.x or higher)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git)
   cd Visa-Travel-Requirements-Checker
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client && npm install
   ```

3. **Install server dependencies (optional for backend development):**
   ```bash
   cd ../server && npm install
   ```

4. **Start the development server:**
   ```bash
   cd ../client && npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173` or `http://localhost:3000`

---

## 👥 User Roles & Permissions

| Role | Access Level | Capabilities |
| :--- | :--- | :--- |
| **Traveler (Guest)** | Public | Search passport and destination requirements, view customs rules, and check vaccines |
| **Registered User** | Authenticated | Save favorite travel routes, maintain personal packing lists, and export search summaries |
| **Admin** | Full Access | Update consular datasets, modify health advisory alerts, and audit country rules |

---

## ✨ Features

### 💳 Visa Requirements Engine
- Direct pairwise lookups between 190+ passport origins and destination countries
- Visual categorization across **Visa-Free**, **Visa on Arrival (VoA)**, **eVisa**, and **Embassy Visa**
- Permitted length of stay breakdowns (e.g., 30, 90, or 180 days)

### 🚨 Passport Validity & Border Alerts
- Automatic calculation against destination-specific 3-month or 6-month rules
- Advisories for minimum blank page counts (typically 2 blank facing pages)

### 📝 Health, Vaccine & Quarantine Advisories
- Real-time indicators for Yellow Fever endemic zones and required certifications
- Routine immunization guidance and emergency medical insurance advisories

### 🔧 Customs, Currency & Prohibited Items
- Currency declaration thresholds ($10,000 USD or local equivalent)
- Duty-free allowances for tobacco, alcohol, and personal electronics
- Catalogue of strictly prohibited items and import restrictions

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/countries` | Fetch full list of all supported sovereign nations |
| `GET` | `/api/requirements?origin=:code&destination=:code` | Full entry rules, visa category, and stay limits |
| `GET` | `/api/health/:countryCode` | Specific health, quarantine, and vaccination rules |
| `GET` | `/api/customs/:countryCode` | Duty-free import rules and currency limits |
| `GET` | `/api/health` | Server uptime check and diagnostics |

---

## 🔐 Security

- Sanitized request inputs to guard against injection attacks
- CORS configuration restricted to authorized domains
- Client-side input validation on origin/destination selectors
- Environment variable isolation for API keys and endpoints

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Harivikash Katta**
- GitHub: [@Harry-aura](https://github.com/Harry-aura)
- Live Project: [Visa & Travel Requirements Checker](https://harry-aura.github.io/Visa-Travel-Requirements-Checker/)

<p align="center">Made with ❤️ for global travelers</p>
