import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorCard from '@/components/AuthorCard';
import { ShieldCheck, Flame, Crosshair, CheckCircle2, HelpCircle } from 'lucide-react';
import { FUEL_FACTS, DATA_VERIFIED_DATE, DATA_SOURCES } from '@/data/wikiData';

export const metadata = {
  title: 'Dead Rails Beginner Guide | First Run Survival, Fuel & Weapon Basics',
  description: 'Beginner guide for Roblox Dead Rails: buy starting coal, survive Runner Zombie nights and Blood/Full Moon events, use melee safely, loot checkpoints, and spend Bonds on the right first class.',
};

const BEGINNER_FAQS = [
  {
    question: 'How much coal should I buy at the start of a run?',
    answer: `About 3 pieces as a safety buffer. Each 10 km checkpoint segment burns roughly ${FUEL_FACTS.coalPerSegment} coal (${FUEL_FACTS.coalPerSegmentConductor} with Conductor), and you can stretch that with free fuel: newspapers, scrap, and enemy or animal corpses.`,
  },
  {
    question: 'What is the best starting weapon in Dead Rails?',
    answer: 'The Shotgun. It is the best beginner gun and one-shots most enemies at close range. For anything you do not want to face up close — Zombie Soldiers, Outlaws, Captain Prescott — a Rifle headshot does the job from distance.',
  },
  {
    question: 'How do I survive Vampires during a Blood Moon?',
    answer: 'Listen for the teleport sound effect — it warns you before a Vampire appears. Avoid staying indoors on Blood Moon nights because it is too dark to fight inside. Vampires disappear at daytime, leaving lootable corpses.',
  },
  {
    question: 'Which class should I buy first with Bonds?',
    answer: 'Community guides most often recommend Survivalist or Doctor as a safe first purchase. If fuel keeps ending your runs, Conductor saves coal every segment; Werewolf, Vampire and Zombie top the combat tier lists.',
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
              author: {
                '@type': 'Person',
                name: 'Hlele',
                jobTitle: 'Editor',
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
            Dead Rails Beginner Guide: Your First 80 km Run
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Dead Rails drops you on a train bound for an ~80 km terminal, with fortified town checkpoints every 10 km and randomly generated landmarks in between. This guide covers the verified basics: fuel, weapons, night events, and spending your first Bonds. Data last checked {DATA_VERIFIED_DATE}.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Sources:{' '}
            {DATA_SOURCES.map((s, i) => (
              <span key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">{s.name}</a>
                {i < DATA_SOURCES.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </div>

        <AuthorCard />

        {/* Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-hero.webp"
              alt="Dead Rails train on the railway through enemy territory"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-slate-800"
              priority
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 1: Keep the train fueled all the way to the 80 km terminal.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/dead-rails-icon.webp"
              alt="Dead Rails official game icon"
              width={640}
              height={360}
              className="rounded-xl object-contain w-full h-56 bg-black/60 border border-slate-800"
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 2: Official Dead Rails icon.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-xs">01</span>
              Step 1: Starting Fuel &amp; the Core Loop
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              The core loop is simple: drive the train along the railway, stop at towns and landmarks to loot and fight, and never let the firebox run dry. Each 10 km segment takes about {FUEL_FACTS.coalPerSegment} coal ({FUEL_FACTS.coalPerSegmentConductor} as Conductor). {FUEL_FACTS.starterCoalAdvice} Cross-check any run length with our <Link href="/fuel-calculator" className="text-amber-400 hover:underline font-mono font-bold">Coal &amp; Fuel Calculator</Link>.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-sans list-disc list-inside">
              <li>Free fuel is everywhere: newspapers, scrap, and the corpses of enemies and animals.</li>
              <li>Corpses double as cash — the Sheriff buys them — so choose between fuel and money per corpse.</li>
              <li>Fortified towns appear roughly every 10 km: resupply, heal, and loot banks (the Banker Zombie drops the vault code).</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-cyan-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xs">02</span>
              Step 2: Weapons That Actually Work
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Three archetypes cover everything. The <strong>Shotgun</strong> is the best beginner gun — one shot kills most enemies at close range. The <strong>Rifle</strong> headshot one-shots from long range, which is the safe way to deal with Zombie Soldiers, Outlaw camps and Captain Prescott. <strong>Melee weapons</strong> never break, but hit one enemy per swing — and remember enemies can also hit you through thin walls, so do not hug cover during a fight. Ranged weapons need scavenged ammo, so stock up at checkpoints.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <strong className="text-amber-400 block mb-1">Desert Outlaw Camps:</strong>
                Outlaws travel in groups of up to ~8, on foot or horseback, and hit hard up close. Ride past on the train or snipe from distance.
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <strong className="text-rose-400 block mb-1">Wolves:</strong>
                Very low HP but they swarm in packs, occasionally mixed with Werewolves. Any weapon works — just do not get surrounded.
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-emerald-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs">03</span>
              Step 3: Surviving the Night — Moons &amp; Events
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Night events are the main difficulty spike. Regular nights spawn fast <strong>Runner Zombies</strong> around you and the train — guns only, since melee cannot chase them down. A <strong>Blood Moon</strong> brings Vampires: they teleport to close you (listen for the sound cue), and avoid staying indoors because it is too dark to fight. A <strong>Full Moon</strong> brings Werewolves, among the strongest enemies in the game — answer with multiple shotgun blasts or rifle shots from open ground. Vampires vanish at daytime (leaving corpses), so use daylight to move and loot. See the full spawn table in our <Link href="/night-survival-simulator" className="text-emerald-400 hover:underline font-mono font-bold">Night &amp; Moon Event Planner</Link>.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-purple-400 uppercase flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-xs">04</span>
              Step 4: Bonds, Landmarks &amp; Your First Class
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Finishing runs and looting the world earns <strong>Bonds</strong>, the currency for buying Classes at the Lobby Tailor shop. Landmarks are worth planning around: summoning <strong>Nikola Tesla</strong> at Tesla Lab pays 5-9 Bonds, <strong>Sterling Mines</strong> floods you with ~25 Skeletons but holds Notes collectibles, and killing <strong>Captain Prescott</strong> at Fort Constitution gives you a corpse the Sheriff pays handsomely for. For a first purchase, community guides recommend <strong>Survivalist</strong> or <strong>Doctor</strong>; combat tier lists favor Werewolf, Vampire, Conductor and Zombie. Full breakdown in our <Link href="/class-roles" className="text-purple-400 hover:underline font-mono font-bold">Classes Guide</Link>.
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
