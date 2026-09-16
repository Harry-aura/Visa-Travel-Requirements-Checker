import React from 'react';
import { Hammer, HardHat, AlertCircle } from 'lucide-react';

const AdminPanel = () => {
  return (
    <div className="card p-8 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white text-center">
      <div className="bg-aviation-light p-4 rounded-full mb-6">
        <HardHat size={48} className="text-aviation-blue" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Admin Portal Under Construction</h2>
      <p className="text-slate-500 max-w-md mb-8">
        We are currently building the CRUD interface to allow seamless management of travel rules, health advisories, and visa fee configurations.
      </p>

      <div className="flex gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-800 text-sm max-w-lg items-start text-left">
        <AlertCircle className="shrink-0 mt-0.5" size={18} />
        <div>
          <strong>Backend Notice:</strong> The Admin panel requires the upcoming MySQL database integration before rules can be securely mutated. Check back in the next version release!
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
