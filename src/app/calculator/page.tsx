import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import AuthorCard from '@/components/AuthorCard';
import { Flame, CheckCircle, Coins, Calculator as CalcIcon, HelpCircle } from 'lucide-react';
import { DATA_VERIFIED_DATE, FUEL_FACTS } from '@/data/wikiData';

export const metadata = {
  title: 'Dead Rails Calculator | Coal Per Checkpoint & Run Length Planner',
  description: 'Interactive coal calculator for Roblox Dead Rails. Compute coal needed per 10 km checkpoint segment for any run length, with the verified Conductor discount and free fuel alternatives.',  alternates: {
    canonical: '/calculator',
  },
};

const CALCULATOR_FAQS = [
  {
    question: 'How much coal does a full 80 km run need in Dead Rails?',
    answer: `A full 80 km run has eight 10 km checkpoint segments at roughly ${FUEL_FACTS.coalPerSegment} coal each — about 20 coal if you rely on coal alone, or 16 with the Conductor class. Newspapers, scrap, and corpses you loot along the way offset most of that.`,
  },
  {
    question: 'Is coal the only fuel for the train?',
    answer: 'No. Coal is the baseline fuel, but newspapers, scrap, and the corpses of enemies and animals also fuel the train for free. Corpses can instead be sold to the Sheriff for cash, so decide per corpse: fuel or money.',
  },
  {
    question: 'Which class helps most with fuel?',
    answer: 'The Conductor burns 2 coal per 10 km segment instead of ~2.5 — over an 80 km run that saves roughly 4 coal. Community tier lists rank Conductor near the top for good reason.',
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
              name: 'Dead Rails Coal & Fuel Calculator',
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
              author: {
                '@type': 'Person',
                name: 'Hlele',
                jobTitle: 'Editor',
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
            <CalcIcon className="w-3.5 h-3.5" /> Interactive Run Planner
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails Coal &amp; Checkpoint Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Plan any run length from 10 km to the full 80 km. The calculator applies the verified coal rate per 10 km checkpoint segment, including the Conductor discount, and reminds you of the free fuel sources along the tracks. Data last checked {DATA_VERIFIED_DATE}.
          </p>
        </div>

        <AuthorCard />

        <FuelCalculator />

        {/* MECHANICS EXPLANATION */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> The Math Behind the Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Checkpoint Segments
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                The 80 km route is divided into 10 km stretches, each ending at a fortified town checkpoint where you can resupply, heal and refuel. Total coal = segments × {FUEL_FACTS.coalPerSegment}.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" /> Conductor Discount
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                The Conductor class drops the cost to {FUEL_FACTS.coalPerSegmentConductor} coal per segment — a ~20% fuel saving that compounds over a full run.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-slate-200 font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-400" /> Fuel Economy Tradeoff
              </h3>
              <p className="text-slate-400 font-sans text-xs">
                Every corpse is either free fuel or Sheriff cash. Early in the run, burn corpses to save coal; near the end, sell them and spend the money on supplies instead.
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
          <p className="text-xs text-slate-500">
            Need the enemy spawn table too? See the <Link href="/zombies-guide" className="text-amber-400 hover:underline font-mono">enemy bestiary</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
