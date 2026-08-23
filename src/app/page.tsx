import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import { REDEEM_CODES, WEAPON_TIER_LIST, ZOMBIE_ENTITIES, ROUTE_STATIONS } from '@/data/wikiData';
import { Flame, Crosshair, Gift, Shield, Database, MapPin, ArrowRight, CheckCircle2, Zap, Award } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Wiki 2026 | Train Fuel Calculator, Weapons Tier List & Codes',
  description: 'The ultimate Roblox Dead Rails Wiki & database. Calculate train fuel consumption, optimize train upgrades, check DPS weapon tier lists, and redeem 2026 working codes.',
  keywords: ['Dead Rails Wiki', 'Roblox Dead Rails codes', 'Dead Rails fuel calculator', 'Dead Rails weapons tier list', 'Dead Rails train upgrades', 'Dead Rails guide'],
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com',
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I calculate fuel consumption in Dead Rails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use our interactive Fuel & Distance Calculator. Select your route distance, train speed, cargo weight, and engine tier to get exact Coal/Oil drum requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best weapon in Dead Rails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Trench Auto-Shotgun Mk.II (S+ Tier) is the best close-range horde clearer, while the Mounted Gatling Minigun dominates mounted defense.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where do I redeem Dead Rails codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open the train radio console in game, click on the "Codes" tab, and paste active codes like RAILRUN2026 to claim free Scrap and Fuel.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-[#0a0f18] to-[#070a0f] border border-amber-500/20 p-8 sm:p-12 text-center sm:text-left shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                2026 Survival Database Updated
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase leading-tight text-white">
                SURVIVE THE <span className="gradient-title">DEAD RAILS</span> EXPRSS
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Master train logistics, calculate exact boiler fuel ratios, optimize cowcatcher armor plating, and crush zombie horde blockades with verified meta weaponry.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <Link
                  href="/fuel-calculator"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all"
                >
                  <Flame className="w-4 h-4" /> Open Fuel Calculator
                </Link>
                <Link
                  href="/codes"
                  className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 flex items-center gap-2 transition-all"
                >
                  <Gift className="w-4 h-4 text-emerald-400" /> Active Redeem Codes
                </Link>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Active Codes</span>
                <strong className="text-2xl text-emerald-400 block font-black">4 WORKING</strong>
                <span className="text-[10px] text-slate-500">Free Scrap & Fuel</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Meta Weapons</span>
                <strong className="text-2xl text-red-400 block font-black">6 ARCHETYPES</strong>
                <span className="text-[10px] text-slate-500">S+ to B Rank</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Train Upgrades</span>
                <strong className="text-2xl text-cyan-400 block font-black">4 CATEGORIES</strong>
                <span className="text-[10px] text-slate-500">Engine to Armor</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Station Routes</span>
                <strong className="text-2xl text-amber-400 block font-black">250 KM</strong>
                <span className="text-[10px] text-slate-500">Outpost 1 to 10</span>
              </div>
            </div>
          </div>
        </section>

        {/* FUEL CALCULATOR FEATURE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono uppercase text-slate-100 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-400" /> Interactive Fuel Calculator
            </h2>
            <Link href="/fuel-calculator" className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1">
              Full Screen Tool <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <FuelCalculator />
        </section>

        {/* WEAPONS TIER LIST PREVIEW */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold font-mono uppercase text-slate-100 flex items-center gap-2">
                <Crosshair className="w-6 h-6 text-red-400" /> Weapons Meta Tier List
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-1">DPS rankings and horde clear capability in Dead Rails 2026.</p>
            </div>
            <Link href="/weapons-tier-list" className="text-xs font-mono text-red-400 hover:underline flex items-center gap-1">
              View All Weapons <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {WEAPON_TIER_LIST.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-slate-900/80 border border-slate-800 hover:border-red-500/40 rounded-2xl p-5 space-y-3 transition-all">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-bold text-xs border border-red-500/30">
                    {item.tier} TIER
                  </span>
                  <span className="text-xs text-slate-400">{item.category}</span>
                </div>
                <h3 className="font-bold text-base text-slate-100">{item.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80">
                  <div>
                    <span className="text-slate-500 block text-[10px]">DPS</span>
                    <strong className="text-red-400">{item.dps}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">AMMO</span>
                    <strong className="text-slate-300">{item.ammoType}</strong>
                  </div>
                </div>
                <p className="text-xs font-sans text-slate-400 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CODES PREVIEW */}
        <section className="bg-slate-900/60 border border-emerald-500/30 rounded-3xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/30">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-mono text-slate-100 uppercase">Verified Redeem Codes</h2>
                <p className="text-xs text-slate-400 font-sans">Updated August 2026. Claim free Scrap, Scrip, and Coal.</p>
              </div>
            </div>
            <Link href="/codes" className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-mono hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors">
              Claim All Codes
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {REDEEM_CODES.filter((c) => c.status === 'ACTIVE').map((codeItem) => (
              <div key={codeItem.code} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-emerald-400 font-bold text-sm tracking-wider">{codeItem.code}</strong>
                  <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] rounded">ACTIVE</span>
                </div>
                <p className="text-slate-300 font-sans text-xs">{codeItem.reward}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-6 font-sans">
          <h2 className="text-2xl font-bold font-mono uppercase text-slate-100">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-amber-400 font-mono">How do I prevent train derailment in Dead Rails?</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Derailment occurs when collision speed with Armored Chargers exceeds cowcatcher rating or when track switches are sabotaged. Upgrade to Spiked Steel Plating and keep speed below 60 km/h when entering barricaded zones.
              </p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-amber-400 font-mono">What is the most efficient fuel type?</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                High-Density Oil Drums give 100 fuel units per slot, whereas Coal Stacks give 25 units per slot. Oil Drums are recommended for long distances past Outpost 4.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
