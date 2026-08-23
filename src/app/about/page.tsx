import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Train, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us | Dead Rails Wiki & Community Tools',
  description: 'Learn about Dead Rails Wiki, an independent gaming database providing free fuel calculators, weapon tier lists, and verified codes.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Train className="w-3.5 h-3.5" /> About Dead Rails Wiki
          </div>
          <h1 className="text-3xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Our Mission & Community Commitment
          </h1>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
          <p>
            Dead Rails Wiki was created by passion gaming engineers to provide Roblox Dead Rails players with accurate, real-time physics tools and data.
          </p>
          <p>
            Unlike generic wiki sites with bloated ads, our tools focus on high utility, fast loading speeds, and zero-clutter interfaces.
          </p>
          <p>
            We maintain daily verification of working promo codes and test weapon DPS stats directly in-game to ensure maximum accuracy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
