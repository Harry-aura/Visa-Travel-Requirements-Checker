# ✈️ Visa & Travel Requirements Checker

<div align="center">
  <h3>A comprehensive full-stack travel intelligence and entry requirements platform</h3>
  <p>
    <a href="https://harry-aura.github.io/Visa-Travel-Requirements-Checker/"><strong>🌐 Live Demo</strong></a> •
    <a href="https://github.com/Harry-aura/Visa-Travel-Requirements-Checker/issues"><strong>🐛 Report Bug</strong></a> •
    <a href="#-api-endpoints"><strong>🔗 API Endpoints</strong></a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT" />
  </p>
</div>

---

## 📖 Overview

A full-stack travel advisory web platform built to give international travelers real-time intelligence on entry protocols, visa classifications, passport rules, and health mandates before booking travel.

- 🛂 **Visa Classification Engine** - Instant checks for Visa-Free, Visa on Arrival, eVisa, or Embassy Visa.
- ⏳ **Passport Validity Guard** - Flags 6-month validity rules and blank visa page requirements.
- 💉 **Health & Vaccine Protocols** - Tracks mandatory Yellow Fever certificates and health advisories.
- 📋 **Customs & Currency Allowances** - Details duty-free limits, currency declarations, and contraband laws.

---

## 🖥️ Live Demo

| Platform | URL |
| :--- | :--- |
| 🌐 Frontend | https://harry-aura.github.io/Visa-Travel-Requirements-Checker/ |
| 🔗 Repository | https://github.com/Harry-aura/Visa-Travel-Requirements-Checker |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture |
| **Tailwind CSS** | Utility-first styling and layout system |
| **Lucide React** | Visual icon system |
| **Axios** | HTTP client for travel data APIs |

### Backend & Services
| Technology | Purpose |
| :--- | :--- |
| **Node.js** | JavaScript runtime environment |
| **Express.js** | RESTful routing service |
| **GitHub Pages** | Frontend production hosting |

---

## 📁 Project Structure

```text
Visa-Travel-Requirements-Checker/
├── client/                     # Frontend Application
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── components/         # Reusable UI cards, selectors, filters
│   │   ├── pages/              # Main requirements lookup screens
│   │   ├── App.jsx             # Root React view
│   │   └── main.jsx            # Entry mount point
│   └── package.json
│
├── server/                     # Backend API Service
│   ├── config/                 # Environment & API configurations
│   ├── controllers/            # Requirement logic and lookups
│   ├── routes/                 # API endpoints
│   └── package.json
│
├── ARCHITECTURE.md             # System design & architecture
├── CONTRIBUTING.md             # Contribution guidelines
├── SECURITY.md                 # Security policies
├── LICENSE                     # MIT License
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git)
   cd Visa-Travel-Requirements-Checker
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies:**
   ```bash
   cd ../server
   npm install
   ```

4. **Start the development server:**
   ```bash
   cd ../client
   npm run dev
   ```

5. **Open in browser:**
   `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/countries` | Fetch full list of supported countries |
| `GET` | `/api/requirements?origin=:from&destination=:to` | Get visa, passport & health rules |
| `GET` | `/api/customs/:countryCode` | Get customs and currency limitations |

---

## 🔐 Security

- Input sanitization and URL encoding for country query parameters.
- CORS policy configured for origin whitelisting.
- Environment variable encapsulation for sensitive API keys.

---

## 🤝 Contributing

Contributions are welcome! Please check [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Harivikash Katta**
- GitHub: [@Harry-aura](https://github.com/Harry-aura)
- Live Project: [Visa & Travel Requirements Checker](https://harry-aura.github.io/Visa-Travel-Requirements-Checker/)
