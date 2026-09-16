import React from 'react';
import SearchForm from '../components/SearchForm';
import VisaResultCard from '../components/VisaResultCard';
import HealthAdvisory from '../components/HealthAdvisory';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { requirements } = useSelector(state => state.visa);

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-3">Navigate Global Borders</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Get up-to-date visa requirements, travel authorizations, and health protocols for your next international journey.</p>
      </div>

      <SearchForm />

      {requirements && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <VisaResultCard />
          </div>
          <div className="space-y-6">
            <HealthAdvisory />
            
            {/* FAQ Accordion Placeholder */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">Frequently Asked Questions</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <details className="group border-b pb-2 cursor-pointer">
                  <summary className="font-medium text-slate-800 list-none flex justify-between">
                    What is the 90/180 rule?
                    <span className="transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-2 text-slate-500">You can stay in the Schengen area for up to 90 days within any 180-day period.</p>
                </details>
                <details className="group border-b pb-2 cursor-pointer">
                  <summary className="font-medium text-slate-800 list-none flex justify-between">
                    Do I need an English test?
                    <span className="transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-2 text-slate-500">Not for standard tourism (B1/B2, Schengen). Only for student or work visas.</p>
                </details>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
