import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ROUTE_STATIONS } from '@/data/wikiData';
import { MapPin, Shield, Zap, AlertTriangle, Gift } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Station Routes & Outpost Map | Distance & Danger Ratings',
  description: 'Station route map and outpost guide for Roblox Dead Rails. Track distance checkpoints, fuel drop chances, key loot rewards, and danger ratings.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/routes-map',
  },
};

export default function RoutesMapPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5" /> Railway Line Checkpoints
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Station Routes & Outpost Loot Map
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Check distance checkpoints, fuel drop probabilities, and high-value loot blueprints along the 250 km Dead Rails mainline.
          </p>
        </div>

        <div className="space-y-4 font-mono">
          {ROUTE_STATIONS.map((station, idx) => (
            <div
              key={station.name}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center border border-amber-500/30 text-sm">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-lg text-slate-100">{station.name}</h3>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-slate-400">Distance: <strong className="text-amber-400">{station.distanceFromStartKm} km</strong></span>
                  <span className={`px-2.5 py-1 rounded font-bold ${
                    station.dangerRating === 'EXTREME' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    station.dangerRating === 'High' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {station.dangerRating} Danger
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800 font-sans">
                <div>
                  <span className="text-slate-500 font-mono block text-[10px]">KEY LOOT & BLUEPRINTS</span>
                  <strong className="text-slate-200">{station.keyLoot}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block text-[10px]">FUEL DROP CHANCE</span>
                  <strong className="text-emerald-400 font-mono">{station.fuelDropChance}</strong>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans">{station.outpostNotes}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
