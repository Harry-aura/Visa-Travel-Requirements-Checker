import React from 'react';
import { Activity, Thermometer } from 'lucide-react';
import { useSelector } from 'react-redux';

const HealthAdvisory = () => {
  const { globalRules } = useSelector(state => state.visa);

  if (!globalRules) return null;

  return (
    <div className="card p-6 border-l-4 border-l-emerald-500">
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 text-slate-800">
        <Activity className="text-emerald-500" />
        Health & Vaccinations
      </h3>
      <div className="flex gap-3 text-sm text-slate-600 bg-emerald-50 p-4 rounded-lg">
        <Thermometer className="text-emerald-600 shrink-0" />
        <p>{globalRules.vaccinations}</p>
      </div>
    </div>
  );
};

export default HealthAdvisory;
