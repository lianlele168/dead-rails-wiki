import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Flame, Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Beginner Guide | Day 1 to 10 Train Survival SOP',
  description: 'Complete beginner SOP guide for Roblox Dead Rails. Learn how to manage boiler heat, scrap crafting priority, zombie horde defense, and extraction safety.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/beginner-guide',
  },
};

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" /> Beginner Survival SOP
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Day 1 to 10 Extraction Survival SOP
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Step-by-step tactical protocol for surviving early-game train runs, managing engine heat, and securing high-value scrap loot.
          </p>
        </div>

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-xs">01</span>
              Phase 1: Pre-Departure Boiler & Fuel Check
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Always check fuel capacity before pulling the departure lever at Outpost 1.</li>
              <li>Load at least 2 Coal Stacks or 1 Oil Drum before starting engine ignition.</li>
              <li>Use our <Link href="/fuel-calculator" className="text-amber-400 hover:underline font-mono">Fuel Calculator</Link> to verify fuel needs for your target outpost.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold font-mono text-cyan-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">02</span>
              Phase 2: Speed Control & Cowcatcher Management
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Maintain speed at 50-60 km/h during clear track segments for maximum fuel economy.</li>
              <li>When encountering Armored Chargers, accelerate to 70 km/h to crush them with cowcatcher plating.</li>
              <li>If boiler temperature exceeds 90°C, release pressure valve immediately to prevent engine blowout.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-bold font-mono text-red-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-red-500/20 flex items-center justify-center text-xs">03</span>
              Phase 3: Horde Defense & Weapon Priority
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Equip at least one team member with the <Link href="/weapons-tier-list" className="text-red-400 hover:underline font-mono">Trench Auto-Shotgun</Link> for cabin breaches.</li>
              <li>Use Marksman Rifles to pick off Acid Spewers before they reach 30m proximity.</li>
              <li>Turn on Roof Floodlights during tunnel segments to blind Night Stalkers.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
