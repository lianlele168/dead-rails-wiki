import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CLASS_ROLES } from '@/data/wikiData';
import { ShieldCheck, Flame, Crosshair, UserCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Class Roles & Perk Builds Guide | Crew Synergies',
  description: 'Player class roles and perk builds guide for Roblox Dead Rails. Compare Engineer Stoker, Heavy Gunner, and Scout Looter skills.',
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
            <UserCheck className="w-3.5 h-3.5" /> Crew Specializations & Synergies
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Player Class Roles & Skill Builds Guide
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Choose your specialization for train survival runs. Combine Stoker fuel conservation with Heavy Mounted firepower and Scout loot efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {CLASS_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 space-y-4 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded font-bold text-xs border border-cyan-500/30">
                  {role.roleType}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-100">{role.name}</h3>
                <p className="text-xs font-sans text-slate-300 mt-2 leading-relaxed">{role.playstyle}</p>
              </div>

              <div className="space-y-2 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-amber-400 font-bold block mb-0.5">KEY ABILITY:</span>
                  <span className="text-slate-200 font-sans">{role.keyAbility}</span>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-emerald-400 font-bold block mb-0.5">PASSIVE PERK:</span>
                  <span className="text-slate-200 font-sans">{role.passiveBonus}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-sans">
                <strong className="text-slate-200 font-mono block mb-1">Recommended Weapons:</strong>
                <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                  {role.recommendedWeapons.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
