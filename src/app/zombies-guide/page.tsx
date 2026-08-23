import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ZOMBIE_ENTITIES } from '@/data/wikiData';
import { ShieldAlert, Zap, Skull, Crosshair } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Zombie Bestiary & Threat Guide | Counter Tactics',
  description: 'Complete Zombie Bestiary for Roblox Dead Rails. Learn hp stats, speed, weaknesses, and counter strategies against Armored Chargers, Spewers, and Night Stalkers.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/zombies-guide',
  },
};

export default function ZombiesGuidePage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Skull className="w-3.5 h-3.5" /> Zombie Threat Classification
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Zombie Bestiary & Threat Defense Guide
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Detailed breakdown of hostile entities roaming the Dead Rails line. Know their HP pool, danger behaviors, and tactical counter measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {ZOMBIE_ENTITIES.map((zombie) => (
            <div
              key={zombie.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded font-bold text-xs border ${
                  zombie.threatLevel === 'Class S' ? 'bg-red-500/20 border-red-500 text-red-400' :
                  zombie.threatLevel === 'Class A' ? 'bg-purple-500/20 border-purple-500 text-purple-400' :
                  'bg-amber-500/20 border-amber-500 text-amber-400'
                }`}>
                  {zombie.threatLevel}
                </span>
                <span className="text-xs text-slate-400">Speed: <strong className="text-slate-200">{zombie.speed}</strong></span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-100">{zombie.name}</h3>
                <p className="text-xs font-sans text-red-300 mt-1 flex items-start gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" /> {zombie.danger}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">HEALTH POINTS</span>
                  <strong className="text-purple-400 text-sm">{zombie.hp} HP</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">WEAKNESS</span>
                  <strong className="text-emerald-400 text-xs font-sans">{zombie.weakness}</strong>
                </div>
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-xs font-sans text-slate-300">
                <strong className="text-purple-300 block font-mono mb-1">Counter Tactics:</strong>
                {zombie.counterTactics}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
