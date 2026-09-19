'use client';

import React, { useState, useMemo } from 'react';
import { Flame, Gauge, AlertTriangle, TrainFront, Zap } from 'lucide-react';

export default function FuelCalculator() {
  const [distanceKm, setDistanceKm] = useState(80);
  const [isConductor, setIsConductor] = useState(false);

  const calculations = useMemo(() => {
    // Verified mechanic: ~2.5 coal per 10 km checkpoint segment
    // (Conductor class reduces this to 2). Sources: Fandom Coal page.
    const coalPerSegment = isConductor ? 2 : 2.5;
    const segments = Math.floor(distanceKm / 10);
    const remainderKm = distanceKm % 10;
    const coalNeeded = Math.ceil(segments * coalPerSegment + (remainderKm > 0 ? coalPerSegment * (remainderKm / 10) : 0));
    const checkpointStops = Math.max(0, segments - (distanceKm === 80 ? 1 : 0));

    return {
      segments,
      coalNeeded,
      coalPerSegment,
      checkpointStops,
      remainderKm,
    };
  }, [distanceKm, isConductor]);

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-8 font-sans">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
          <Flame className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold font-mono text-slate-100 uppercase tracking-tight">
            Coal &amp; Fuel Calculator
          </h2>
          <p className="text-xs text-slate-400">Based on the verified mechanic: ~2.5 coal per 10 km checkpoint segment (Conductor: 2).</p>
        </div>
      </div>

      {/* Input Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-amber-400" /> Run Distance:</span>
            <strong className="text-amber-400">{distanceKm} km</strong>
          </div>
          <input
            type="range"
            min="10"
            max="80"
            step="10"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
          />
          <p className="text-[10px] text-slate-500 font-sans">A standard full run is 80 km with a fortified town checkpoint every 10 km.</p>
        </div>

        <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between text-slate-300">
            <span className="flex items-center gap-1.5"><TrainFront className="w-4 h-4 text-cyan-400" /> Class:</span>
            <strong className={isConductor ? 'text-emerald-400' : 'text-slate-200'}>{isConductor ? 'Conductor' : 'Any other class'}</strong>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => setIsConductor(false)}
              className={`py-1.5 rounded text-center transition-colors border ${
                !isConductor
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Other class
            </button>
            <button
              onClick={() => setIsConductor(true)}
              className={`py-1.5 rounded text-center transition-colors border ${
                isConductor
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Conductor
            </button>
          </div>
          <p className="text-[10px] text-slate-500 font-sans">Conductor burns 2 coal per segment instead of ~2.5.</p>
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-slate-950 border border-amber-500/40 rounded-xl p-6 space-y-4 font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Coal Needed</span>
            <strong className="text-2xl text-amber-400 font-black">{calculations.coalNeeded}</strong>
            <span className="text-[10px] text-slate-500 block">pieces ({calculations.coalPerSegment}/segment)</span>
          </div>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Checkpoint Segments</span>
            <strong className="text-2xl text-cyan-400 font-black">{calculations.segments}</strong>
            <span className="text-[10px] text-slate-500 block">one per 10 km</span>
          </div>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800">
            <span className="text-slate-400 text-xs uppercase block mb-1">Free Fuel Sources</span>
            <strong className="text-sm text-emerald-400 font-bold">Newspaper / Scrap / Corpses</strong>
            <span className="text-[10px] text-slate-500 block">loot them along the tracks</span>
          </div>
        </div>

        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-start gap-2">
          <Zap className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>Pro tip:</strong> New players should buy about 3 pieces of coal at the start as a buffer. Newspapers, scrap, and enemy/animal corpses can all fuel the train for free — and corpses double as cash when sold to the Sheriff.
          </span>
        </div>

        {calculations.coalNeeded >= 20 && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Fuel Warning:</strong> A {distanceKm} km run needs roughly {calculations.coalNeeded} coal if you rely on coal alone. Loot free fuel sources at every fortified town to cut that cost, or roll the Conductor class.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
