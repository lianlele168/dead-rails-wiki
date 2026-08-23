'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CARGO_ITEMS, CargoItem } from '@/data/wikiData';
import { Coins, Weight, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CargoTradeCalculatorPage() {
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({
    'refined-iron-ingot': 2,
    'battery-core-high-cap': 1,
    'high-octane-fuel-canister': 1,
    'golden-turbine-core': 0,
  });

  const handleQuantityChange = (id: string, qty: number) => {
    setItemQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, qty),
    }));
  };

  const tradeSummary = CARGO_ITEMS.reduce(
    (acc, item) => {
      const qty = itemQuantities[item.id] || 0;
      const baseValue = item.baseScrapValue * qty;
      const bonusValue = Math.round(baseValue * item.bonusMultiplier);
      const totalWeight = item.weightKg * qty;

      return {
        totalBaseValue: acc.totalBaseValue + baseValue,
        totalBonusValue: acc.totalBonusValue + bonusValue,
        totalWeightKg: acc.totalWeightKg + totalWeight,
      };
    },
    { totalBaseValue: 0, totalBonusValue: 0, totalWeightKg: 0 }
  );

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Coins className="w-3.5 h-3.5" /> Outpost Scavenge & Trade Profits
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Cargo Trade & Scrap Profit Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Calculate cargo weight vs sale value, multiplier bonuses at distant outposts, and optimize train cargo bay profitability.
          </p>
        </div>

        {/* CALCULATOR INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono">
          {/* Item Sliders */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg font-bold text-slate-200 uppercase mb-2">Scavenged Cargo Manifest</h2>

            {CARGO_ITEMS.map((item) => (
              <div key={item.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-100 text-base">{item.name}</h3>
                    <span className="text-xs text-slate-400">{item.category} • {item.weightKg} kg/unit</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                    item.rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-400' :
                    item.rarity === 'Rare' ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.rarity}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400">Base: <strong className="text-amber-400">{item.baseScrapValue} Scrap</strong></span>
                  <span className="text-slate-400">Best Buyer: <strong className="text-emerald-400 font-sans">{item.bestOutpostToSell} ({item.bonusMultiplier}x)</strong></span>
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={() => handleQuantityChange(item.id, (itemQuantities[item.id] || 0) - 1)}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 font-bold hover:bg-slate-700"
                  >
                    -
                  </button>
                  <span className="text-slate-100 font-bold w-8 text-center">{itemQuantities[item.id] || 0}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, (itemQuantities[item.id] || 0) + 1)}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 font-bold hover:bg-slate-700"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Profit Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 space-y-6 sticky top-24 shadow-amber-glow">
              <h2 className="text-xl font-bold text-emerald-400 uppercase flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Cargo Profit Summary
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Total Cargo Weight:</span>
                  <strong className="text-purple-400 font-bold text-sm">{tradeSummary.totalWeightKg} kg ({(tradeSummary.totalWeightKg / 1000).toFixed(2)} Tons)</strong>
                </div>

                <div className="flex justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Base Scrap Value:</span>
                  <strong className="text-slate-200 font-bold text-sm">{tradeSummary.totalBaseValue} Scrap</strong>
                </div>

                <div className="flex justify-between p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-emerald-300">
                  <span>Optimal Outpost Profit:</span>
                  <strong className="font-bold text-base">{tradeSummary.totalBonusValue} Scrap</strong>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-sans">
                <strong>Trading Tip:</strong> Holding high-rarity loot items until Outpost 10 yields up to 2.5x bonus Scrap multipliers compared to early outposts.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
