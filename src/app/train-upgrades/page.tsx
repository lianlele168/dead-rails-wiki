import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TRAIN_UPGRADES } from '@/data/wikiData';
import { Shield, Gauge, Cpu, CheckCircle2, Zap } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Train Upgrades Guide | Armor, Engine & Turret Priority',
  description: 'Train upgrade priority guide for Roblox Dead Rails. Compare scrap costs, speed modifiers, armor plating, and turret mount recommendations.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/train-upgrades',
  },
};

export default function TrainUpgradesPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" /> Train Engineering & Plating
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Train Upgrade ROI & Plating Guide
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Evaluate Scrap investment efficiency for turbodiesel engines, spiked cowcatchers, roof turret mounts, and expanded fuel bunkers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {TRAIN_UPGRADES.map((upgrade) => (
            <div
              key={upgrade.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded font-bold text-xs border border-cyan-500/30">
                  {upgrade.category} Tier {upgrade.tierLevel}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                  upgrade.recommendation === 'Must Have' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-300'
                }`}>
                  {upgrade.recommendation}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-100">{upgrade.name}</h3>
                <p className="text-xs font-sans text-slate-300 mt-2 leading-relaxed">{upgrade.effect}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">SCRAP COST</span>
                  <strong className="text-amber-400">{upgrade.costScrap}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">SPEED BOOST</span>
                  <strong className={upgrade.speedModifierPercent >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                    {upgrade.speedModifierPercent >= 0 ? `+${upgrade.speedModifierPercent}%` : `${upgrade.speedModifierPercent}%`}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ADD WEIGHT</span>
                  <strong className="text-purple-400">+{upgrade.weightAddTons} T</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
