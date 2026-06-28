'use client';

import React, { useState } from 'react';

export const QuotationCalculator = () => {
  const [depth, setDepth] = useState<number>(100);
  const [casing, setCasing] = useState<string>('pvc');
  const [location, setLocation] = useState<string>('residential');

  // Simple calculation logic for demonstration
  const calculateTotal = () => {
    const baseRate = location === 'residential' ? 120 : location === 'agricultural' ? 100 : 150;
    const casingRate = casing === 'pvc' ? 200 : casing === 'ms' ? 400 : 0;
    
    const drillingCost = depth * baseRate;
    const casingCost = casing !== 'none' ? (depth * 0.4) * casingRate : 0; // Assuming casing for 40% of depth
    const setupCost = 5000;

    return drillingCost + casingCost + setupCost;
  };

  const totalCost = calculateTotal();

  return (
    <section className="py-24 bg-blue-900 text-white" id="calculator">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-yellow-400/20 text-yellow-400 font-semibold mb-6">
              Instant Estimation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Borewell Cost Calculator</h2>
            <p className="text-blue-100 text-lg mb-8">
              Get an instant, transparent estimate for your borewell drilling project. Adjust the parameters to see how they affect the overall investment.
            </p>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                100% Transparent Pricing
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                No Hidden Charges
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Free On-Site Consultation
              </li>
            </ul>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4">Calculate Your Estimate</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Expected Depth (Feet): <span className="text-blue-900 text-lg">{depth} ft</span>
                </label>
                <input 
                  type="range" 
                  min="50" 
                  max="1500" 
                  step="50"
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>50 ft</span>
                  <span>1500 ft</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {['residential', 'agricultural', 'commercial'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setLocation(type)}
                      className={`py-3 px-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                        location === type 
                          ? 'bg-blue-900 text-white shadow-md' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Casing Pipe Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'pvc', label: 'PVC Casing' },
                    { id: 'ms', label: 'MS Casing' },
                    { id: 'none', label: 'No Casing' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setCasing(type.id)}
                      className={`py-3 px-2 rounded-lg text-sm font-semibold transition-all ${
                        casing === type.id 
                          ? 'bg-yellow-400 text-blue-900 shadow-md' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-end mb-6">
                  <div className="text-gray-600 font-medium">Estimated Total</div>
                  <div className="text-4xl font-bold text-blue-900">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-6 italic">
                  *This is an approximate estimate. Final cost depends on actual geological conditions and chosen specifications.
                </p>
                <button className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/30">
                  Request Formal Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
