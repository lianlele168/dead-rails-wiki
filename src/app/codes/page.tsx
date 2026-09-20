'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { REDEEM_CODES } from '@/data/wikiData';
import { Gift, Info, CheckCircle2 } from 'lucide-react';

export default function CodesPage() {
  const activeCodes = REDEEM_CODES.filter((c) => c.status === 'ACTIVE');

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Gift className="w-3.5 h-3.5" /> Codes Only
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Roblox Dead Rails Redeem Codes
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            We only publish codes we have actually verified — no fabricated &quot;active&quot; codes. When nothing is confirmed, this page says so instead of inventing rewards.
          </p>
        </div>

        {/* ACTIVE CODES SECTION */}
        <section className="space-y-4 font-mono">
          <h2 className="text-xl font-bold text-emerald-400 uppercase flex items-center gap-2">
            <Gift className="w-5 h-5" /> Active Promo Codes
          </h2>

          {activeCodes.length === 0 ? (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-300 text-sm font-sans font-bold">No verified active codes right now.</p>
              <p className="text-xs text-slate-400 font-sans max-w-xl mx-auto">
                Many Roblox games drop codes around updates and milestone events. When a Dead Rails code is confirmed working in the wild, we will list it here with what it actually rewards — until then, anything else you see online is unverified.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCodes.map((item) => (
                <div
                  key={item.code}
                  className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-1 hover:border-emerald-500/60 transition-all shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <strong className="text-lg text-emerald-300 font-bold tracking-wider">{item.code}</strong>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      SOURCED
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">{item.reward}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* HOW TO REDEEM */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <Info className="w-5 h-5" /> How to Redeem Codes in Dead Rails
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
            <li>Launch <strong>Roblox Dead Rails</strong>.</li>
            <li>Open the game&apos;s code redemption menu (check the game&apos;s main screen or Roblox game page — the entry point can move between updates).</li>
            <li>Paste an active code from the list above exactly as written.</li>
            <li>Confirm to receive the reward. If a code fails, it has most likely expired — codes in Roblox games are usually time-limited.</li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
}
