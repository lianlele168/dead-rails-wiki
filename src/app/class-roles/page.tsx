import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CLASS_ROLES, DATA_VERIFIED_DATE, DATA_SOURCES } from '@/data/wikiData';
import { UserCheck, Info } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Classes Guide | Tier List Picks & First Purchases',
  description: 'Dead Rails class roster: Werewolf, Vampire, Conductor, Zombie, Cowboy, Survivalist, Doctor and Hunter — community tier list picks, best first purchases, and how to buy classes with Bonds.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/class-roles',
  },
};

export default function ClassRolesPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" /> Classes Bought With Bonds
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Classes Guide
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Classes are bought with Bonds at the Tailor shop in the Lobby and grant special items or abilities. Community tier lists (Destructoid, Beebom) put Werewolf, Vampire, Conductor, Zombie and Cowboy near the top; for a first purchase, Survivalist or Doctor is the usual recommendation. Perk details we could not verify from public sources are marked as such.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
          {CLASS_ROLES.map((cls) => (
            <div
              key={cls.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded font-bold text-xs border ${
                  cls.category === 'Combat' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                  cls.category === 'Support' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                  'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                }`}>
                  {cls.category}
                </span>
                <span className="text-[10px] text-slate-500">{cls.tierNote}</span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-100">{cls.name}</h3>
                <p className="text-xs font-sans text-slate-300 mt-2 leading-relaxed">{cls.playstyle}</p>
              </div>

              <div className="space-y-2 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-amber-400 font-bold block mb-0.5">KEY ABILITY:</span>
                  <span className="text-slate-200 font-sans">{cls.keyAbility}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-0.5">PASSIVE PERK:</span>
                  <span className="text-slate-200 font-sans">{cls.passiveBonus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400 font-sans flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>
            Bonds — the currency used to buy Classes — come from completing runs and looting the world. Summoning Nikola Tesla at Tesla Lab, for example, yields 5-9 Bonds.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
