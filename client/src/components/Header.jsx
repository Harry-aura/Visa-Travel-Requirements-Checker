import React from 'react';
import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 text-aviation-blue hover:text-blue-800 transition-colors">
          <Plane size={32} strokeWidth={1.5} className="text-aviation-gold" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight leading-none">SkyClear</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Visa & Travel Intelligence</p>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-slate-600 hover:text-aviation-blue transition-colors">Requirements</Link>
          <Link to="/advisories" className="text-slate-600 hover:text-aviation-blue transition-colors">Advisories</Link>
          <Link to="/admin" className="text-slate-600 hover:text-aviation-blue transition-colors">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
