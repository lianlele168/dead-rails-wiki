import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import AuthorCard from '@/components/AuthorCard';
import { Flame, ShieldAlert, Cpu, CheckCircle, Calculator as CalcIcon, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Calculator | Train Fuel, Weight & Cargo Logistics Tool',
  description: 'Interactive train fuel and logistics calculator for Roblox Dead Rails. Calculate coal and oil consumption based on engine tier, armor weight, speed, and outpost distance.',
};

const CALCULATOR_FAQS = [
  {
    question: 'How do I calculate fuel needs for long outpost journeys in Dead Rails?',
    answer: 'Fuel consumption equals Base Engine Burn Rate multiplied by your Weight Factor (1 + 0.04 per ton of armor) and Speed Curve exponent. Input your current train build into our calculator above to obtain exact coal stack requirements.',
  },
  {
    question: 'What is the most fuel-efficient cruising speed?',
    answer: 'Maintaining 50 to 55 km/h provides the highest mileage per coal piece. Running above 70 km/h triggers non-linear boiler overheat drain, burning fuel twice as fast.',
  },
  {
    question: 'Should I prioritize Coal or Oil Drums for Outpost 5+?',
    answer: 'Oil drums provide 3x the energy density of standard coal stacks and generate less boiler slag. For runs extending past Outpost 4, dedicate at least 3 cargo slots strictly to refined oil drums.',
  },
];

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Dead Rails Train Fuel & Logistics Calculator',
              applicationCategory: 'GameApplication',
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              dateModified: '2026-09-15',
              author: {
                '@type': 'Person',
                name: 'Garrison "Cinders" Vance',
                jobTitle: 'Lead Locomotive Engineer & Zombie Horde Specialist',
              },
              mainEntity: CALCULATOR_FAQS.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <CalcIcon className="w-3.5 h-3.5" /> Interactive Locomotive Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Train Fuel & Logistics Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Simulate boiler fuel consumption, calculate maximum safe traveling distance between stations, and balance cargo weight against steam drain before departing the safety of the perimeter fence.
          </p>
        </div>

        <AuthorCard />

        <FuelCalculator />

        {/* MATH & LOGISTICS EXPLANATION */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <Cpu className="w-5 h-5" /> How Fuel Physics Work in Dead Rails
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Speed Drag Multiplier
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Boiler consumption escalates rapidly beyond 60 km/h. Cruising between 50-60 km/h yields maximum kilometer distance per fuel unit.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> Armor Weight Penalty
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Heavy Iron Plating and Spiked Cowcatchers add up to +6.5 tons of dead weight. Every additional ton increases baseline boiler burn by 4%.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-400" /> Overheat Risk
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Sustained travel above 90°C risks boiler rupture. Always carry water buckets or slow down during volcanic ash zones.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> Calculator FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALCULATOR_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <h3 className="text-sm font-bold text-slate-200">{faq.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
