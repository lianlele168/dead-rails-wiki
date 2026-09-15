import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorCard from '@/components/AuthorCard';
import { ShieldCheck, Flame, Crosshair, ArrowRight, CheckCircle2, AlertTriangle, Hammer, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Beginner Guide | Day 1 to 10 Train Survival SOP (September 2026)',
  description: 'Complete beginner SOP guide for Roblox Dead Rails. Master boiler steam heat management, fuel preservation, cowcatcher ramming tactics, and high-tier scrap salvage.',
};

const BEGINNER_FAQS = [
  {
    question: 'How do you keep the boiler from exploding in Dead Rails?',
    answer: 'Monitor the steam gauge on the engine console. If temperature exceeds 85°C, ease off the throttle to half speed and pull the manual steam pressure release valve on the left side of the firebox.',
  },
  {
    question: 'What is the best starting weapon against zombie hordes?',
    answer: 'The Lever-Action Carbine paired with a Heavy Machete provides the best balance of ammo conservation and one-hit headshot capability for clearing train boarders.',
  },
  {
    question: 'How do you survive vampire attacks during Night Cycles?',
    answer: 'Vampires cannot spawn in lighted zones. Install UV floodlights on your outer train catwalks and barricade all wooden car windows with reinforced scrap iron before sundown.',
  },
  {
    question: 'Where do you find high-value electrical components?',
    answer: 'Loot the abandoned telegraph stations and radio towers located between Outpost 3 and Outpost 5. Use lockpicks on military footlockers for guaranteed battery and dynamo drops.',
  },
];

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* FAQ Schema */}
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
              mainEntity: BEGINNER_FAQS.map((faq) => ({
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
            <ShieldCheck className="w-3.5 h-3.5" /> Beginner Survival Protocol
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Dead Rails: Days 1 to 10 Locomotive Survival Blueprint
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            A comprehensive, field-tested operational SOP for surviving harsh wasteland train journeys in Roblox Dead Rails. Learn boiler mechanics, horde barricading, optimal gear crafting paths, and route logistics.
          </p>
        </div>

        <AuthorCard />

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-hero.webp"
              alt="Dead Rails Locomotive Steam Engine and Desert Railway Tracks"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-slate-800"
              priority
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 1: Armored Steam Engine traversing the infected railway wilderness.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-icon.webp"
              alt="Dead Rails Official Icon and Zombie Threat Indicator"
              width={640}
              height={360}
              className="rounded-xl object-contain w-full h-56 bg-black/60 border border-slate-800"
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 2: Official Dead Rails Emblem — Zombie infected wastelands and survivor outpost badges.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-xs">01</span>
              Phase 1: Pre-Departure Boiler & Fuel Check
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Before touching the ignition throttle at Outpost 1, every crew must execute a mandatory three-point pre-flight checklist. Running out of steam while stalled on open track guarantees a wipe against the first roaming zombie horde. Always stock at least 2 Coal Stacks or 1 Refined Oil Drum per 5 kilometers of expected track. You can cross-check precise requirements using our interactive <Link href="/calculator" className="text-amber-400 hover:underline font-mono font-bold">Fuel & Logistics Calculator</Link>.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Inspect boiler water gauge: Ensure water reservoir is at minimum 75% capacity to prevent thermal dry-firing.</li>
              <li>Load coal chunks into firebox until baseline pressure needle hits 120 PSI.</li>
              <li>Assign one dedicated crew member to operate the coal shovel while others scavenge outpost perimeter crates.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-cyan-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">02</span>
              Phase 2: Speed Control, Track Hazards & Cowcatcher Ramming
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Speed in Dead Rails is both your greatest defensive weapon and your primary fuel sink. Cruising at 50 to 60 km/h optimizes fuel efficiency. However, when visual spotters call out track debris or Armored Charger zombies, the engineer must immediately throttle to maximum speed (75 km/h) to engage cowcatcher kinetic ramming. Ramming at under 45 km/h causes the train to derail or stall, taking direct structural hull damage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <strong className="text-amber-400 block mb-1">Track Switch Levers:</strong>
                Keep sniper rifles equipped. Target track switches from afar to divert onto clear bypass lines and avoid wrecked ghost trains.
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <strong className="text-rose-400 block mb-1">Thermal Blowouts:</strong>
                If boiler temperature gauge exceeds 90°C, vent the side emergency valve immediately to avoid an engine explosion.
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-emerald-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs">03</span>
              Phase 3: Night Cycle Defense & Barricade Priorities
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              As dusk falls in the wastelands, mutant zombies and nocturnal vampires become aggressive and attempt boarding actions. Boarders climb train ladders and enter through window slats. To fortify your train, convert all early scrap metal into Reinforced Steel Window Shutters. Deploy UV spotlight lanterns around the locomotive cabin to burn approaching vampires before they latch onto the engineer.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Deploy barbed wire along exterior carriage walkways to slow down runner zombies.</li>
              <li>Keep fire extinguishers accessible in every carriage to combat molotov thrower mutants.</li>
              <li>Never step onto the train roof during sandstorm weather without an tether harness.</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-purple-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-xs">04</span>
              Phase 4: Scrap Economy & Crafting Priority Hierarchy
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Scrap is the lifeblood currency of Dead Rails. Avoid wasting scrap on low-tier pistol ammunition. Prioritize crafting bench investments in this strict order: Tier 2 Heavy Boiler &rarr; Cowcatcher Spikes &rarr; Medical First Aid Station &rarr; High-Capacity Water Tender.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Beginner FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BEGINNER_FAQS.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-slate-200 text-sm">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
