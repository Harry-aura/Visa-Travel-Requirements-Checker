import React from 'react';
import { Bookmark, Share2, Info, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../store/visaSlice';

const VisaResultCard = () => {
  const { requirements, destination, nationality, globalRules, status, error, bookmarks } = useSelector(state => state.visa);
  const dispatch = useDispatch();

  if (status === 'loading') return <div className="text-center py-10"><div className="animate-pulse flex space-x-4"><div className="flex-1 space-y-4 py-1"><div className="h-4 bg-slate-200 rounded w-3/4"></div><div className="h-4 bg-slate-200 rounded"></div></div></div></div>;
  if (status === 'failed') return <div className="text-red-500 bg-red-50 p-4 rounded-lg border border-red-200">Error: {error}</div>;
  if (!requirements) return null;

  if (nationality === destination) {
    return (
      <div className="card p-8 border-l-4 border-l-aviation-blue bg-white">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Domestic Travel</h3>
        <p className="text-slate-600">
          You have selected <strong>{destination}</strong> as both your nationality and destination. 
          Visa requirements and international health protocols do not apply to domestic travel.
        </p>
      </div>
    );
  }

  const isBookmarked = bookmarks.some(b => b.destination === destination);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark({ destination }));
    } else {
      dispatch(addBookmark({ destination, date: new Date().toISOString() }));
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Visa Requirements for ${destination}`,
          text: `Check out the latest travel requirements for ${destination}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="bg-aviation-blue text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <ShieldCheck className="text-aviation-gold" />
            Requirements for {destination}
          </h3>
          <div className="flex gap-3">
            <button onClick={handleBookmark} className="hover:text-aviation-gold transition-colors" title="Bookmark">
              <Bookmark fill={isBookmarked ? "currentColor" : "none"} size={20} />
            </button>
            <button onClick={handleShare} className="hover:text-aviation-gold transition-colors" title="Share">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Visa Pathways Logic */}
          {requirements.visaOptions && (
            <div>
              <h4 className="font-semibold text-lg border-b pb-2 mb-4 text-slate-800">Available Visa Pathways</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.visaOptions.map((visa, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-slate-50 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-aviation-blue">{visa.type}</span>
                      {visa.code && <span className="text-xs bg-slate-200 px-2 py-1 rounded font-mono">{visa.code}</span>}
                    </div>
                    <ul className="text-sm space-y-2 mt-auto text-slate-600 leading-relaxed pt-3">
                      {visa.duration && (
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-medium text-slate-800">Duration:</span> 
                          <span className="text-right text-balance max-w-[60%]">{visa.duration}</span>
                        </li>
                      )}
                      {visa.entries && (
                        <li className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-medium text-slate-800">Entries:</span> 
                          <span className="text-right">{visa.entries}</span>
                        </li>
                      )}
                      {visa.stayLimitation && (
                        <li className="flex justify-between pb-1 pt-1 gap-4">
                          <span className="font-medium text-slate-800 shrink-0">Rules:</span> 
                          <span className="text-right text-balance">{visa.stayLimitation}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Global Requirements */}
          {globalRules && (
            <div className="mt-8">
              <h4 className="font-semibold text-lg border-b pb-2 mb-4 text-slate-800 flex items-center gap-2">
                <Info size={18} className="text-aviation-blue" /> Global Travel Standards (2026)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-600">
                <div><span className="font-medium text-slate-800 block">Passport</span>{globalRules.passportValidity}</div>
                <div><span className="font-medium text-slate-800 block">Financial</span>{globalRules.financialProof}</div>
                <div><span className="font-medium text-slate-800 block">Return Ticket</span>{globalRules.returnTicket}</div>
                <div><span className="font-medium text-slate-800 block">Language</span>{globalRules.languageTests}</div>
              </div>
            </div>
          )}
          
          <div className="text-xs text-slate-400 text-right pt-4 border-t">
            Last updated: May 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaResultCard;
