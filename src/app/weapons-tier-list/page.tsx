'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WEAPON_TIER_LIST, WeaponItem } from '@/data/wikiData';
import { Crosshair, Shield, Zap, Flame, Award } from 'lucide-react';

export default function WeaponsTierListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredWeapons = WEAPON_TIER_LIST.filter(
    (w) => selectedCategory === 'ALL' || w.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
            <Crosshair className="w-3.5 h-3.5" /> 2026 Dead Rails Combat Meta
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Weapons DPS Tier List & Arsenal Database
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Rankings based on DPS output, bullet damage, magazine size, ammo availability, and horde clearing efficiency against Class S Armored Chargers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {['ALL', 'Shotgun', 'Rifle', 'SMG', 'Melee', 'Mounted', 'Special'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-colors border ${
                selectedCategory === cat
                  ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Weapons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
          {filteredWeapons.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-red-500/40 rounded-2xl p-6 space-y-4 transition-all hover:shadow-crimson-glow"
            >
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded font-black text-xs border ${
                  item.tier === 'S+' ? 'bg-red-500/20 border-red-500 text-red-400' :
                  item.tier === 'S' ? 'bg-amber-500/20 border-amber-500 text-amber-400' :
                  'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                }`}>
                  {item.tier} TIER
                </span>
                <span className="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-100">{item.name}</h3>
                <p className="text-xs font-sans text-slate-400 mt-1">{item.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">DPS</span>
                  <strong className="text-red-400 text-sm">{item.dps}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">DAMAGE</span>
                  <strong className="text-amber-400 text-sm">{item.damage}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">FIRE RATE</span>
                  <strong className="text-cyan-400 text-sm">{item.fireRate} RPM</strong>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Ammo: <strong className="text-slate-200">{item.ammoType}</strong></span>
                <span>Mag: <strong className="text-slate-200">{item.magSize}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
