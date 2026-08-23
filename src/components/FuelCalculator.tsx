'use client';

import React, { useState, useMemo } from 'react';
import { Flame, Gauge, Weight, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function FuelCalculator() {
  const [distanceKm, setDistanceKm] = useState(100);
  const [speedKmh, setSpeedKmh] = useState(60);
  const [cargoTons, setCargoTons] = useState(10);
  const [engineTier, setEngineTier] = useState(2); // 1 to 4
  const [armorTier, setArmorTier] = useState(1); // 0 to 3

  const calculations = useMemo(() => {
    // Base burn rate: 1.5 units/km at 50 km/h
    const speedFactor = Math.pow(speedKmh / 50, 1.3);
    const weightPenalty = 1 + (cargoTons * 0.04) + (armorTier * 0.08);
    const engineEfficiency = 1 - ((engineTier - 1) * 0.12); // Engine Mk 4 saves 36%

    const unitsPerKm = 1.5 * speedFactor * weightPenalty * engineEfficiency;
    const totalFuelRequired = Math.round(unitsPerKm * distanceKm);
    
    // 1 Oil Drum = 100 Fuel units; 1 Coal Stack = 25 units
    const oilDrumsNeeded = Math.ceil(totalFuelRequired / 100);
    const coalStacksNeeded = Math.ceil(totalFuelRequired / 25);
    const travelTimeMinutes = Math.round((distanceKm / speedKmh) * 60);

    const refuelStops = totalFuelRequired > 500 ? Math.ceil(totalFuelRequired / 500) - 1 : 0;

    return {
      unitsPerKm: unitsPerKm.toFixed(2),
      totalFuelRequired,
      oilDrumsNeeded,
      coalStacksNeeded,
      travelTimeMinutes,
      refuelStops,
    };
  }, [distanceKm, speedKmh, cargoTons, engineTier, armorTier]);

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-amber-glow space-y-8 font-sans">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
          <Flame className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold font-mono text-slate-100 uppercase tracking-tight">
            Train Fuel & Distance Calculator
          </h2>
          <p className="text-xs text-slate-400">Simulate coal/oil consumption based on cargo load, armor weight & boiler speed.</p>
        </div>
      </div>

      {/* Input Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-amber-400" /> Route Distance:</span>
            <strong className="text-amber-400">{distanceKm} km</strong>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            step="10"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-cyan-400" /> Target Speed:</span>
            <strong className="text-cyan-400">{speedKmh} km/h</strong>
          </div>
          <input
            type="range"
            min="30"
            max="120"
            step="5"
            value={speedKmh}
            onChange={(e) => setSpeedKmh(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span className="flex items-center gap-1.5"><Weight className="w-4 h-4 text-purple-400" /> Cargo Weight:</span>
            <strong className="text-purple-400">{cargoTons} Tons</strong>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={cargoTons}
            onChange={(e) => setCargoTons(Number(e.target.value))}
            className="w-full accent-purple-500 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span>Engine Tier Level:</span>
            <strong className="text-emerald-400">Mk.{engineTier} Turbodiesel</strong>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1">
            {[1, 2, 3, 4].map((tier) => (
              <button
                key={tier}
                onClick={() => setEngineTier(tier)}
                className={`py-1.5 rounded text-center transition-colors border ${
                  engineTier === tier
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Mk.{tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-slate-950 border border-amber-500/40 rounded-xl p-6 space-y-4 font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Total Fuel Needed</span>
            <strong className="text-2xl text-amber-400 font-black">{calculations.totalFuelRequired}</strong>
            <span className="text-[10px] text-slate-500 block">Fuel Units ({calculations.unitsPerKm}/km)</span>
          </div>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Oil Drums / Coal</span>
            <strong className="text-2xl text-cyan-400 font-black">{calculations.oilDrumsNeeded} Drums</strong>
            <span className="text-[10px] text-slate-500 block">Or {calculations.coalStacksNeeded} Coal Stacks</span>
          </div>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Est. Travel Time</span>
            <strong className="text-2xl text-emerald-400 font-black">{calculations.travelTimeMinutes} mins</strong>
            <span className="text-[10px] text-slate-500 block">{calculations.refuelStops} Refuel Stop(s)</span>
          </div>
        </div>

        {calculations.refuelStops > 0 && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>
              <strong>Logistics Warning:</strong> Total fuel exceeds default 500-unit boiler capacity. Ensure you bring {calculations.refuelStops} extra fuel drum(s) or stop at intermediate stations.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
