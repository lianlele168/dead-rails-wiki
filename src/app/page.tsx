import React from 'react';
import Metadata from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FuelCalculator from '@/components/FuelCalculator';
import AuthorCard from '@/components/AuthorCard';
import { REDEEM_CODES, WEAPON_TIER_LIST, ENEMIES, UNIQUE_LOCATIONS, DATA_VERIFIED_DATE } from '@/data/wikiData';
import { Flame, Crosshair, Gift, MapPin, ArrowRight, Info } from 'lucide-react';

export const metadata = {
  title: 'Dead Rails Wiki | Coal & Fuel Calculator, Enemy Bestiary & 80 km Route Map',
  description: 'Roblox Dead Rails wiki: coal and fuel calculator (2.5 coal per 10 km checkpoint), enemy bestiary (Vampires, Werewolves, Zombies), 80 km route map with Fort Constitution, Tesla Lab, Sterling and Stillwater.',
  keywords: ['Dead Rails Wiki', 'Roblox Dead Rails', 'Dead Rails fuel calculator', 'Dead Rails enemies', 'Dead Rails map', 'Dead Rails classes', 'Dead Rails guide'],
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com',
  },
};

export default function HomePage() {
  const activeCodeCount = REDEEM_CODES.filter((c) => c.status === 'ACTIVE').length;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much coal does the train need in Dead Rails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each 10 km checkpoint segment of the 80 km run takes about 2.5 pieces of coal, or 2 pieces if you play the Conductor class. Newspapers, scrap, and enemy or animal corpses also work as free fuel. A good habit is to buy about 3 pieces of coal at the start as a safety buffer.',
        },
      },
      {
        '@type': 'Question',
        name: 'What enemies spawn in Dead Rails?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Confirmed enemies include Normal Zombies (and the Banker Zombie variant), Runner Zombies, Zombie Soldiers, Captain Prescott at Fort Constitution, Vampires during Blood Moons, Werewolves during Full Moons, Outlaws in desert camps, Wolves, and Skeletons inside Sterling Mines.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is a Dead Rails run?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard run covers about 80 km of railway, with fortified town checkpoints roughly every 10 km where you can resupply, heal and refuel. Unique locations such as Fort Constitution, Tesla Lab, Sterling Mines and Stillwater spawn at random each run.',
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
                Sourced Data — Last Checked {DATA_VERIFIED_DATE}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase leading-tight text-white">
                SURVIVE THE <span className="gradient-title">DEAD RAILS</span> 80 KM RUN
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Calculate how much coal your train burns per 10 km checkpoint, learn every verified enemy from Runner Zombies to Blood Moon Vampires, and plan your route past Fort Constitution, Tesla Lab and Sterling Mines.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <Link
                  href="/fuel-calculator"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all"
                >
                  <Flame className="w-4 h-4" /> Open Coal Calculator
                </Link>
                <Link
                  href="/zombies-guide"
                  className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 flex items-center gap-2 transition-all"
                >
                  <Crosshair className="w-4 h-4 text-red-400" /> Enemy Bestiary
                </Link>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-mono">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Total Run</span>
                <strong className="text-2xl text-amber-400 block font-black">80 KM</strong>
                <span className="text-[10px] text-slate-500">checkpoints every 10 km</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Coal Per Segment</span>
                <strong className="text-2xl text-orange-400 block font-black">~2.5</strong>
                <span className="text-[10px] text-slate-500">2 with Conductor</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Enemies</span>
                <strong className="text-2xl text-red-400 block font-black">{ENEMIES.length}</strong>
                <span className="text-[10px] text-slate-500">incl. Vampire &amp; Werewolf</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase">Unique Locations</span>
                <strong className="text-2xl text-cyan-400 block font-black">4</strong>
                <span className="text-[10px] text-slate-500">random per run</span>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T AUTHOR VERIFICATION */}
        <AuthorCard />

        {/* GAMEPLAY VISUAL ASSETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-hero.webp"
              alt="Dead Rails train traveling the railway through enemy territory"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-52 border border-slate-800"
              priority
            />
            <p className="text-xs text-slate-400 mt-2 text-center font-mono">
              Figure 1: The train on the ~80 km Dead Rails railway — loot checkpoints, keep it fueled.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-icon.webp"
              alt="Dead Rails game icon"
              width={640}
              height={360}
              className="rounded-xl object-contain w-full h-52 bg-black/50 border border-slate-800"
            />
            <p className="text-xs text-slate-400 mt-2 text-center font-mono">
              Figure 2: Official Dead Rails icon.
            </p>
          </div>
        </div>

        {/* FUEL CALCULATOR FEATURE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono uppercase text-slate-100 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-400" /> Interactive Coal &amp; Fuel Calculator
            </h2>
            <Link href="/fuel-calculator" className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1">
              Full Screen Tool <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <FuelCalculator />
        </section>

        {/* ENEMIES PREVIEW */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold font-mono uppercase text-slate-100 flex items-center gap-2">
                <Crosshair className="w-6 h-6 text-red-400" /> Enemy Bestiary
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-1">Night events change the spawn table: Blood Moons bring Vampires, Full Moons bring Werewolves.</p>
            </div>
            <Link href="/zombies-guide" className="text-xs font-mono text-red-400 hover:underline flex items-center gap-1">
              View All Enemies <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {ENEMIES.slice(0, 3).map((enemy) => (
              <div key={enemy.id} className="bg-slate-900/80 border border-slate-800 hover:border-red-500/40 rounded-2xl p-5 space-y-3 transition-all">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-bold text-xs border border-red-500/30">
                    {enemy.threatLevel}
                  </span>
                  <span className="text-xs text-slate-400">{enemy.speed}</span>
                </div>
                <h3 className="font-bold text-base text-slate-100">{enemy.name}</h3>
                <p className="text-xs font-sans text-slate-400 line-clamp-3">{enemy.danger}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATIONS PREVIEW */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold font-mono uppercase text-slate-100 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-400" /> Route &amp; Unique Locations
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-1">Fort Constitution, Tesla Lab, Sterling Mines and Stillwater — spawn positions are random each run.</p>
            </div>
            <Link href="/routes-map" className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1">
              Full Route Map <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {UNIQUE_LOCATIONS.slice(1, 5).map((loc) => (
              <div key={loc.name} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-2">
                <strong className="text-slate-100 block">{loc.name}</strong>
                <span className="text-amber-400 text-[10px] block">{loc.distanceRangeKm}</span>
                <p className="text-slate-400 font-sans text-xs">{loc.keyEnemies}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CODES PREVIEW */}
        {activeCodeCount > 0 ? (
          <section className="bg-slate-900/60 border border-emerald-500/30 rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/30">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-mono text-slate-100 uppercase">Redeem Codes</h2>
                  <p className="text-xs text-slate-400 font-sans">Claim free in-game rewards.</p>
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
        ) : (
          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-slate-800 rounded-xl text-slate-400 border border-slate-700">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-mono text-slate-100 uppercase">Redeem Codes</h2>
                <p className="text-xs text-slate-400 font-sans">No codes are verified as working right now.</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              We only list codes we can verify — we never publish fabricated &quot;active&quot; codes. Check the game&apos;s official Roblox page and Discord for current drops, and our <Link href="/codes" className="text-emerald-400 hover:underline font-mono">codes page</Link> for updates.
            </p>
          </section>
        )}

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-6 font-sans">
          <h2 className="text-2xl font-bold font-mono uppercase text-slate-100">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-amber-400 font-mono">What fuel can the train burn in Dead Rails?</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Coal is the baseline (~2.5 pieces per 10 km checkpoint segment; the Conductor class needs only 2). Newspapers, scrap, and the corpses of enemies and animals all work as free fuel — and corpses can alternatively be sold to the Sheriff for cash.
              </p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-amber-400 font-mono">How do I survive night events like Blood Moons?</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Regular nights spawn fast Runner Zombies, Blood Moons spawn Vampires, and Full Moons spawn Werewolves — among the strongest enemies in the game. Listen for the Vampire teleport sound cue, avoid staying indoors during a Blood Moon (it is too dark), and use a shotgun or open-ground rifle shots against Werewolves.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
