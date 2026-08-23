import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import { Flame, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Train Fuel Calculator | Consumption & Route Distance Planner',
  description: 'Calculate train fuel requirements in Dead Rails. Optimize coal and oil drum consumption based on engine tier, armor weight, and route distance.',
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
            <Flame className="w-3.5 h-3.5" /> Dead Rails Logistics Suite
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Train Fuel & Boiler Consumption Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Never run out of steam mid-route. Use our real-time physics calculator to estimate exact fuel reserves, optimal cruising speeds, and mandatory refuel stops between Outpost stations.
          </p>
        </div>

        <FuelCalculator />

        {/* MATH & LOGISTICS EXPLANATION */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <Cpu className="w-5 h-5" /> How Fuel Consumption Works in Dead Rails
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Speed Exponential Curve
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Fuel burn increases exponentially above 60 km/h. Cruising at 50-60 km/h yields maximum distance per fuel unit.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> Armor Weight Penalty
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Reinforced Steel Armor adds +4.0 tons of drag. Every ton increases fuel consumption by 4%.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-cyan-400" /> Engine Efficiency
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Upgrading from Engine Mk.1 to Mk.4 reduces fuel consumption per km by 36%, paying for itself within 2 station runs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
