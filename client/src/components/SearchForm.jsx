import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRequirements } from '../store/visaSlice';
import axios from 'axios';
import { Search, MapPin, Globe } from 'lucide-react';

const SearchForm = () => {
  const [nationality, setNationality] = useState('USA');
  const [destination, setDestination] = useState('');
  const [countryList, setCountryList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch comprehensive country list dynamically
    const getCountries = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all?fields=name');
        let countries = res.data.map(c => c.name.common);
        
        // Ensure our custom/mock regions are cleanly represented
        const customMappings = {
          "United States": "USA",
          "United Kingdom": "UK",
          "South Korea": "South Korea",
          "Republic of Korea": "South Korea"
        };
        
        countries = countries.map(c => customMappings[c] || c);
        
        // Add Schengen as a special travel zone
        if (!countries.includes("Schengen")) {
          countries.push("Schengen");
        }
        
        // Remove duplicates and sort
        countries = [...new Set(countries)].sort();
        
        setCountryList(countries);
      } catch (err) {
        console.error("Could not fetch global countries", err);
        // Fallback
        setCountryList(["Australia", "Canada", "Germany", "India", "Japan", "Schengen", "South Korea", "UK", "USA"]);
      }
    };
    getCountries();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nationality && destination) {
      dispatch(fetchRequirements({ nationality, destination }));
    }
  };

  return (
    <div className="card p-8 mb-8 bg-gradient-to-br from-white to-slate-50 border-t-4 border-t-aviation-gold">
      <h2 className="text-2xl font-bold text-aviation-blue mb-6">Check Travel Requirements</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        
        <div className="flex-1 relative">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Nationality</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-slate-400" />
            </div>
            <select 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-aviation-blue focus:border-aviation-blue bg-white shadow-sm transition-shadow appearance-none"
            >
              <option value="" disabled>Select Nationality...</option>
              {countryList.map(country => (
                <option key={`nat-${country}`} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-1 relative">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Destination</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-slate-400" />
            </div>
            <select 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-aviation-blue focus:border-aviation-blue bg-white shadow-sm transition-shadow appearance-none"
              required
            >
              <option value="" disabled>Select Destination...</option>
              {countryList.map(dest => (
                <option key={`dest-${dest}`} value={dest} disabled={dest === nationality}>
                  {dest} {dest === nationality ? '(Domestic)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <button 
            type="submit"
            className="w-full md:w-auto btn-primary py-3 flex justify-center items-center gap-2 h-[46px]"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default SearchForm;
