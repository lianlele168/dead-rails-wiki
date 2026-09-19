'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Moon, Sun, AlertTriangle, Info } from 'lucide-react';

type MoonPhase = 'normal' | 'blood' | 'full';

const PHASE_INFO: Record<MoonPhase, {
  label: string;
  spawner: string;
  threat: string;
  tips: string[];
}> = {
  normal: {
    label: 'Normal Night',
    spawner: 'Runner Zombies',
    threat: 'Fast zombies that can catch up to players and spawn around you and the train. Guns only — a close-range shotgun blast one-shots them.',
    tips: [
      'Keep a firearm ready after sundown — melee cannot reliably hit moving Runners.',
      'Do not let the train stall: a stopped crew is a surrounded crew.',
      'Fortified town checkpoints every 10 km are the safest places to spend the night resupplying.',
    ],
  },
  blood: {
    label: 'Blood Moon',
    spawner: 'Vampires',
    threat: 'Vampires have more HP and deal slightly more damage than zombies, teleport to close distance, and disappear at daytime (their corpse remains).',
    tips: [
      'Listen for the teleport sound effect — it is your warning before they appear next to you.',
      'Avoid staying indoors during a Blood Moon night: it is too dark to fight inside.',
      'Fight out in the open and keep your back to lit areas.',
    ],
  },
  full: {
    label: 'Full Moon',
    spawner: 'Werewolves',
    threat: 'Werewolves are among the strongest enemies in the game: fast, tanky and hard hitting. They also rarely appear mixed into wolf packs and around castles.',
    tips: [
      'Bring a shotgun — multiple blasts are the standard answer to a Werewolf.',
      'Engage from open ground at long range with a rifle whenever possible.',
      'Zombie class players: eating corpses grants a +5 damage bonus against Werewolves.',
    ],
  },
};

export default function NightSurvivalSimulatorPage() {
  const [phase, setPhase] = useState<MoonPhase>('normal');
  const [isDay, setIsDay] = useState(false);
  const info = PHASE_INFO[phase];

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Moon className="w-3.5 h-3.5" /> Night &amp; Moon Event Planner
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Night &amp; Moon Event Survival Planner
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            What spawns after sundown depends entirely on the moon phase. Pick tonight&apos;s conditions and get the verified spawn table and survival checklist. Events verified against the Fandom wiki and TheGamer enemy guide.
          </p>
        </div>

        {/* SIMULATOR CONTROLS */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 sm:p-8 space-y-8 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Moon Phase:</span>
                <strong className="text-purple-400 capitalize">{info.label}</strong>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {(['normal', 'blood', 'full'] as MoonPhase[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPhase(p)}
                    className={`py-1.5 rounded text-center transition-colors border ${
                      phase === p
                        ? p === 'blood'
                          ? 'bg-red-500/20 border-red-500 text-red-300 font-bold'
                          : p === 'full'
                            ? 'bg-slate-200/20 border-slate-300 text-slate-100 font-bold'
                            : 'bg-purple-500/20 border-purple-500 text-purple-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {p === 'normal' ? 'Normal' : p === 'blood' ? 'Blood Moon' : 'Full Moon'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Time of Day:</span>
                <strong className={isDay ? 'text-amber-400' : 'text-cyan-400'}>{isDay ? 'Daytime' : 'Night'}</strong>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setIsDay(false)}
                  className={`py-1.5 rounded text-center transition-colors border flex items-center justify-center gap-1 ${
                    !isDay ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" /> Night
                </button>
                <button
                  onClick={() => setIsDay(true)}
                  className={`py-1.5 rounded text-center transition-colors border flex items-center justify-center gap-1 ${
                    isDay ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" /> Day
                </button>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="bg-slate-950 border border-purple-500/40 rounded-xl p-6 space-y-4">
            {isDay ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs font-sans flex items-start gap-2">
                <Sun className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Daytime:</strong> Night-event enemies stand down. Vampires vanish in daylight (their corpses remain and can be looted or sold), so day is the time to loot, refuel and push to the next 10 km checkpoint.
                </span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs uppercase block mb-1">Spawns Tonight</span>
                    <strong className="text-xl text-red-400 font-black">{info.spawner}</strong>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-400 text-xs uppercase block mb-1">Threat Profile</span>
                    <strong className="text-sm text-amber-300 font-bold block mt-1 font-sans">{info.threat}</strong>
                  </div>
                </div>

                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-slate-300 text-xs font-sans">
                  <strong className="text-purple-300 block font-mono mb-2">Survival Checklist:</strong>
                  <ul className="list-disc list-inside space-y-1">
                    {info.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400 font-sans flex items-start gap-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <span>
            Full enemy stats, weaknesses and counter tactics live in the{' '}
            <Link href="/zombies-guide" className="text-amber-400 hover:underline font-mono">enemy bestiary</Link>. Exact HP values are not published in the sources we verified and are marked accordingly there.
          </span>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-xs text-amber-300 font-sans flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Moon-phase events are tied to game updates and community reporting — spawn rules can change between patches. This page reflects sources verified 2026-09-19.
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
