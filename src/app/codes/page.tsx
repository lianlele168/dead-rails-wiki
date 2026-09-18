'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { REDEEM_CODES, RedeemCode } from '@/data/wikiData';
import { Gift, Copy, Check, AlertCircle, HelpCircle } from 'lucide-react';

export default function CodesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Gift className="w-3.5 h-3.5" /> Verified Working Codes
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Roblox Dead Rails Redeem Codes 
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Claim free Scrap, Scrip, Coal fuel stacks, and Shotgun ammo crates. Codes are tested daily by our automated validation system.
          </p>
        </div>

        {/* ACTIVE CODES SECTION */}
        <section className="space-y-4 font-mono">
          <h2 className="text-xl font-bold text-emerald-400 uppercase flex items-center gap-2">
            <Gift className="w-5 h-5" /> Active Promo Codes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REDEEM_CODES.filter((c) => c.status === 'ACTIVE').map((item) => (
              <div
                key={item.code}
                className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-emerald-500/60 transition-all shadow-lg"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-lg text-emerald-300 font-bold tracking-wider">{item.code}</strong>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">{item.reward}</p>
                  <span className="text-[10px] text-slate-500 block">Added: {item.addedDate}</span>
                </div>

                <button
                  onClick={() => handleCopy(item.code)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    copiedCode === item.code
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {copiedCode === item.code ? (
                    <>
                      <Check className="w-4 h-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-emerald-400" /> Copy
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO REDEEM */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> How to Redeem Codes in Dead Rails
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
            <li>Launch <strong>Roblox Dead Rails</strong> and spawn into the train hub.</li>
            <li>Approach the <strong>Radio Console</strong> inside the Engine Cab.</li>
            <li>Click on the <strong>&quot;Codes&quot;</strong> icon on the radio interface.</li>
            <li>Copy any active code from our list above and paste it into the box.</li>
            <li>Press <strong>Enter / Claim</strong> to receive instant Scrap & Fuel rewards!</li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
}
