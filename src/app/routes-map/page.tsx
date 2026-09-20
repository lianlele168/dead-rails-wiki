import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UNIQUE_LOCATIONS, DATA_VERIFIED_DATE } from '@/data/wikiData';
import { MapPin, AlertTriangle, Gift } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Map Guide | 80 km Route, Checkpoints & Unique Locations',
  description: 'Dead Rails route map: an 80 km run with fortified town checkpoints every 10 km, plus Fort Constitution, Tesla Lab, Sterling Mines and Stillwater — spawn distances, enemies and loot.',
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
            <MapPin className="w-3.5 h-3.5" /> Railway Route &amp; Milestones
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails 80 km Route &amp; Unique Locations
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Dead Rails is not a wave-based level game: you drive a train along an ~80 km railway, and landmarks spawn by kilometre. Fortified town checkpoints appear roughly every 10 km for resupply and healing, while four unique locations — Fort Constitution, Tesla Lab, Sterling Mines and Stillwater — appear at random each run, so exact distances vary slightly between sources.
          </p>
          <p className="text-xs text-slate-500 font-mono">Data last checked {DATA_VERIFIED_DATE} against deadrails.fandom.com &amp; community guides.</p>
        </div>

        <div className="space-y-4 font-mono">
          {UNIQUE_LOCATIONS.map((location) => (
            <div
              key={location.name}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-slate-100">{location.name}</h3>

                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-slate-400">Distance: <strong className="text-amber-400">{location.distanceRangeKm}</strong></span>
                  <span className={`px-2.5 py-1 rounded font-bold ${
                    location.dangerRating === 'EXTREME' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    location.dangerRating === 'High' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    location.dangerRating === 'Moderate' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {location.dangerRating} Danger
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800 font-sans">
                <div>
                  <span className="text-slate-500 font-mono block text-[10px]">KEY ENEMIES</span>
                  <strong className="text-slate-200">{location.keyEnemies}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block text-[10px]">KEY LOOT</span>
                  <strong className="text-emerald-400 font-mono">{location.keyLoot}</strong>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans">{location.locationNotes}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400 font-sans flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>
            Landmark positions are randomly generated every run and public sources disagree on exact kilometre ranges (e.g. Fort Constitution is reported anywhere from 10-30/50-60 km to 10-70 km). Treat all distances as approximations.
          </span>
        </div>

        <div className="p-4 bg-slate-900/60 border border-emerald-500/30 rounded-2xl text-xs text-slate-300 font-sans flex items-start gap-2">
          <Gift className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
          <span>
            Milestone badges track your progress: Travel 10 km (&quot;Easy Travel&quot;), 20 km, and speedrun badges covering 20 km, 40 km and the full 80 km run.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
