import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Advisories from './pages/Advisories';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/advisories" element={<Advisories />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <footer className="bg-aviation-blue text-white text-center py-4 mt-auto">
          <p className="text-sm opacity-80">© 2026 Visa & Travel Requirements Checker. Data updated May 2026.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
