import React from 'react';
import { AlertTriangle, Map } from 'lucide-react';

const Advisories = () => {
  return (
    <div className="card p-8 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white text-center">
      <div className="bg-aviation-light p-4 rounded-full mb-6 text-aviation-blue">
        <Map size={48} />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Travel Advisories</h2>
      <p className="text-slate-500 max-w-md mb-8">
        We are actively compiling real-time global health and security advisories. 
      </p>

      <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-800 text-sm max-w-lg items-start text-left">
        <AlertTriangle className="shrink-0 mt-0.5 text-blue-600" size={18} />
        <div>
          <strong>Coming Soon:</strong> The Advisories portal will aggregate live data regarding health rules, regional conflict zones, and general travel warnings. Check back soon!
        </div>
      </div>
    </div>
  );
};

export default Advisories;
