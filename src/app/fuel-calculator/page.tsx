import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import { Flame, CheckCircle, Coins } from 'lucide-react';
import { DATA_VERIFIED_DATE, FUEL_FACTS } from '@/data/wikiData';

export const metadata = {
  title: 'Dead Rails Coal & Fuel Calculator | Coal Per 10 km Checkpoint',
  description: 'Calculate coal needed for any Dead Rails run length. Based on the verified mechanic: ~2.5 coal per 10 km checkpoint segment (Conductor class: 2), plus free fuel sources like corpses, newspapers and scrap.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/fuel-calculator',
  },
};

export default function FuelCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Flame className="w-3.5 h-3.5" /> Fuel Mechanic
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Coal &amp; Fuel Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Never stall the train mid-route. This calculator uses the verified coal consumption rate — about 2.5 coal per 10 km checkpoint segment of the 80 km run, or 2 with the Conductor class — and compares it against the free fuel you can loot along the tracks. Data last checked {DATA_VERIFIED_DATE}.
          </p>
        </div>

        <FuelCalculator />

        {/* FUEL MECHANICS EXPLANATION */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> How Train Fuel Works in Dead Rails
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Coal Per Segment
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Each 10 km checkpoint segment takes about {FUEL_FACTS.coalPerSegment} pieces of coal — {FUEL_FACTS.coalPerSegmentConductor} with the Conductor class. For a full 80 km run that adds up fast, so stockpile as you go.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" /> Free Fuel Sources
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                {FUEL_FACTS.freeFuelSources} Looting these along the route can replace most of your coal budget.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-400" /> Starter Buffer
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                {FUEL_FACTS.starterCoalAdvice} A stalled train is a dead run — Runner Zombies spawn around the train at night and will swarm a stopped crew.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
