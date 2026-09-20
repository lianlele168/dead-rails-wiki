import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ENEMIES, DATA_VERIFIED_DATE, DATA_SOURCES } from '@/data/wikiData';
import { ShieldAlert, Skull, Crosshair, Info } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Enemy Bestiary | Zombies, Vampires, Werewolves & More',
  description: 'Enemy bestiary for Roblox Dead Rails: Normal Zombie, Runner Zombie, Zombie Soldier, Captain Prescott, Vampire, Werewolf, Outlaw, Wolf and Skeleton — with spawn conditions and counter tactics.',
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
            <Skull className="w-3.5 h-3.5" /> Enemy Bestiary
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Enemy Bestiary &amp; Counter Guide
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Every hostile entity confirmed in Dead Rails: Normal Zombies, Runner Zombies, Zombie Soldiers, Captain Prescott, Vampires, Werewolves, Outlaws, Wolves and Skeletons. Exact HP values are not yet documented in public sources, so fields we could not verify are marked as such.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Data last checked {DATA_VERIFIED_DATE} against{' '}
            {DATA_SOURCES.map((s, i) => (
              <span key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">{s.name}</a>
                {i < DATA_SOURCES.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {ENEMIES.map((enemy) => (
            <div
              key={enemy.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded font-bold text-xs border ${
                  enemy.threatLevel === 'Class S' ? 'bg-red-500/20 border-red-500 text-red-400' :
                  enemy.threatLevel === 'Class A' ? 'bg-purple-500/20 border-purple-500 text-purple-400' :
                  enemy.threatLevel === 'Class B' ? 'bg-amber-500/20 border-amber-500 text-amber-400' :
                  'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                }`}>
                  {enemy.threatLevel}
                </span>
                <span className="text-xs text-slate-400">Speed: <strong className="text-slate-200">{enemy.speed}</strong></span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-100">{enemy.name}</h3>
                <p className="text-xs font-sans text-red-300 mt-1 flex items-start gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" /> {enemy.danger}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block text-[10px]">HEALTH POINTS</span>
                  <strong className="text-purple-400 text-sm">{enemy.hp}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">WEAKNESS</span>
                  <strong className="text-emerald-400 text-xs font-sans">{enemy.weakness}</strong>
                </div>
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-xs font-sans text-slate-300">
                <strong className="text-purple-300 block font-mono mb-1">Counter Tactics:</strong>
                {enemy.counterTactics}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400 font-sans flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>
            Night events change the spawn table: regular nights spawn Runner Zombies, Blood Moons bring Vampires, and Full Moons bring Werewolves. Exact per-entity HP numbers are not published in the sources we verified — we will add them once confirmed against the Fandom entity pages.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
