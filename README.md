<div align="center">
  <img src="https://raw.githubusercontent.com/Harry-aura/Visa-Travel-Requirements-Checker/main/client/public/favicon.ico" alt="Logo" width="80" height="80" onerror="this.src='https://cdn-icons-png.flaticon.com/512/826/826070.png'" />
  <h1 align="center">✈️ Visa & Travel Requirements Checker</h1>
  <p align="center"><strong>A comprehensive full-stack travel intelligence & entry regulations platform</strong></p>
  <p align="center">
    <a href="https://harry-aura.github.io/Visa-Travel-Requirements-Checker/"><img src="https://img.shields.io/badge/LIVE%20DEMO-VERCEL%20%2F%20PAGES-4CAF50?style=for-the-badge&logo=googlechrome&logoColor=white" /></a>
    <a href="https://github.com/Harry-aura/Visa-Travel-Requirements-Checker"><img src="https://img.shields.io/badge/API%20SERVER-RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=white" /></a>
    <a href="https://github.com/Harry-aura/Visa-Travel-Requirements-Checker"><img src="https://img.shields.io/badge/GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/React%2018-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Node.js%2020-43853D?style=flat-square&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" />
  </p>
</div>

---

## 📖 Overview

A centralized travel intelligence solution providing up-to-date entry rules for international travel across 190+ jurisdictions. Built with modern web standards, this platform streamlines:

- 🛂 **Visa Classification** - Instant eligibility for Visa-Free, Visa on Arrival (VoA), eVisa, and Embassy Visas
- ⏳ **Passport Validity Guard** - Automated tracking of 6-month rules and required blank passport pages
- 💉 **Health & Vaccine Protocols** - Yellow Fever, mandatory vaccinations, and destination-specific alerts
- 📋 **Customs & Currency Controls** - Duty-free allowances, cash declaration thresholds, and restricted imports
- 🌍 **Traveler Document Kit** - Interactive checklist generator for flight tickets, hotels, and required return proof

---

## 🖥️ Live Demo

| Platform | URL |
| :--- | :--- |
| 🌐 Frontend | https://harry-aura.github.io/Visa-Travel-Requirements-Checker/ |
| 🔗 Backend API | https://visa-travel-requirements-api.onrender.com |

---

## 🎬 Visual Demos

| Travel Lookup Portal | Country Rules Inspector | Mobile Responsive View |
| :---: | :---: | :---: |
| <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80" width="280" height="170" /> | <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80" width="280" height="170" /> | <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" width="280" height="170" /> |
| **Origin & Destination Match** | **Visa & Health Matrix** | **Responsive Design** |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
| :--- | :--- |
| **React 18** | Declarative Component-driven UI framework |
| **Tailwind CSS** | Utility-first responsive styling and dark mode |
| **Lucide Icons** | SVG icon system |
| **Axios** | REST client for API requests and response caching |

### Backend
| Technology | Purpose |
| :--- | :--- |
| **Node.js 20.x** | JavaScript server runtime environment |
| **Express.js 4.x** | REST API routing and middleware pipeline |
| **MongoDB Atlas** | Cloud NoSQL database storing visa regulations |
| **Mongoose 8.x** | Object Data Modeling (ODM) with validation |

### Deployment & Services
| Platform / Tool | Purpose |
| :--- | :--- |
| **GitHub Pages / Vercel** | Client frontend hosting with CDN |
| **Render** | Dockerized backend API server hosting |
| **MongoDB Atlas** | Managed cloud database hosting |

---

## 📁 Project Structure

```text
Visa-Travel-Requirements-Checker/
├── client/                     # React Frontend
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── components/         # Reusable UI cards, inputs, navigation
│   │   ├── context/            # Global state (selected countries, history)
│   │   ├── hooks/              # Custom data hooks (useTravelData)
│   │   ├── pages/              # Search, Results, Advisories views
│   │   ├── utils/              # Passport rules & format helpers
│   │   ├── App.jsx             # Main router component
│   │   └── main.jsx            # React root mount
│   └── package.json
│
├── server/                     # Express.js Backend
│   ├── config/                 # Database connection & env validation
│   ├── controllers/            # Search & requirement route controllers
│   ├── middleware/             # Rate-limit, CORS, error handling
│   ├── models/                 # Country, VisaRule, HealthGuide schemas
│   ├── routes/                 # Country & Requirement endpoints
│   └── package.json
│
├── docker-compose.yml          # Local containerized multi-service setup
├── ARCHITECTURE.md             # System design & architecture
├── CONTRIBUTING.md             # Contribution guide
├── SECURITY.md                 # Security policies
├── LICENSE                     # MIT License
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or 20.x LTS
- **npm** 9.x or higher
- **MongoDB Atlas** connection string (or local MongoDB 6+)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git](https://github.com/Harry-aura/Visa-Travel-Requirements-Checker.git)
   cd Visa-Travel-Requirements-Checker
   ```

2. **Install dependencies:**
   ```bash
   # Client setup
   cd client && npm install

   # Server setup
   cd ../server && npm install
   ```

3. **Configure environment variables:**

   **Server (`server/.env.local`):**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/visa_db
   CLIENT_URL=http://localhost:5173
   ```

   **Client (`client/.env.local`):**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development servers:**
   ```bash
   # Terminal 1 - Server (Port 5000)
   cd server && npm run dev

   # Terminal 2 - Client (Port 5173)
   cd client && npm run dev
   ```

5. **Open in browser:**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api/health`

---

## 👥 User Roles & Access Modes

| Role / Access | Capabilities |
| :--- | :--- |
| **Guest Traveler** | Search country pairs, inspect stay limits, view health advisories & customs |
| **Registered User** | Save favorite routes, generate packing checklists, export PDF summaries |
| **System Admin** | Update country relations, edit health alerts, refresh customs thresholds |

---

## ✨ Features

### 🛂 Visa Decision Engine
- Instant cross-referencing between passport origin and destination
- Categorization: **Visa-Free**, **Visa on Arrival**, **eVisa**, or **Embassy Visa**
- Maximum permitted stay lengths (e.g. 30, 90, or 180 days)

### ⏳ Passport Validity Tracker
- Dynamic check for 6-month or 3-month passport rules based on destination regulations
- Warning alerts for required blank pages and damaged passport restrictions

### 💉 Health & Vaccination Advisories
- Real-time alerts for endemic zones (Yellow Fever, Malaria, Polio)
- Mandatory vaccination certificate warnings at border entry

### 📋 Customs & Currency Declarations
- Duty-free baggage allowance details
- Foreign exchange cash declaration limits (e.g., $10,000 threshold)
- Strictly prohibited and restricted items catalogue

---

## 🔗 API Endpoints

### Travel Intelligence
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/countries` | Fetch full list of all 190+ sovereign countries |
| `GET` | `/api/requirements?origin=:code&destination=:code` | Complete entry, visa, and passport rules |
| `GET` | `/api/health/:countryCode` | Health, vaccine, and quarantine requirements |
| `GET` | `/api/customs/:countryCode` | Customs limits, duty-free rules & prohibitions |

### Health & System
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service uptime and database connectivity check |

---

## 🐳 Docker Development

```bash
# Build and start frontend, backend, and mongo services
docker-compose up -d

# Follow unified logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## 🚀 Deployment

### Frontend (Vercel / GitHub Pages)
1. Connect GitHub repository to Vercel.
2. Set Root Directory to `client`.
3. Configure `VITE_API_URL` in environment variables.
4. Deploy.

### Backend (Render)
1. Create a new Web Service on Render from the GitHub repository.
2. Set Root Directory to `server`.
3. Build Command: `npm install` | Start Command: `npm start`.
4. Add `MONGODB_URI` and `CLIENT_URL` to environment variables.
5. Deploy.

---

## 🔐 Security

- Sanitized request inputs to prevent injection attacks
- CORS headers locked to specified client origins
- Rate limiting on API endpoints to prevent scraping
- Secure HTTP headers configured with Helmet

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Harivikash Katta**
- GitHub: [@Harry-aura](https://github.com/Harry-aura)
- Live Application: [Visa & Travel Requirements Checker](https://harry-aura.github.io/Visa-Travel-Requirements-Checker/)

<p align="center">Made with ❤️ for global travelers</p>
