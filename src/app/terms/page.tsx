import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use & Community Guidelines | Dead Rails Wiki',
  description: 'Terms of use, gameplay accuracy disclaimers, and fair use guidelines for Dead Rails fans.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Terms of Use</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>COMMUNITY &amp; LEGAL TERMS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Terms of Use &amp; Service Guidelines
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Last Updated: 2026 • Unofficial strategy companion for Dead Rails
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-emerald-400" />
              <span>1. Unofficial Fan Companion</span>
            </h2>
            <p>
              Dead Rails Wiki is an independent, fan-made resource for the Dead Rails experience on Roblox. This website is not endorsed by, affiliated with, or operated by Roblox Corporation or the official Dead Rails development team.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
            </h2>
            <p>
              Zombie stats, weapon DPS, fuel burn rates, scrap costs, and promo codes change rapidly as new updates are pushed to Dead Rails. While we verify community data, all calculations and guides are provided &quot;as is&quot; for reference. Always confirm vital train specs inside the Roblox game.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>3. Anti-Phishing &amp; Account Security Pledge</span>
            </h2>
            <p>
              We will <strong className="text-white">never</strong> ask for your Roblox login credentials, security cookies, or payment info. Never enter sensitive account details on third-party fan sites. Redeem codes exclusively within the official Roblox game interface.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>4. Acceptable Community Use</span>
            </h2>
            <p>
              Visitors are welcome to freely access and share our survival tools. You agree not to engage in aggressive automated scraping, malicious attacks, or misrepresenting this fan site as official game documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use</span>
            </h2>
            <p>
              Roblox is a registered trademark of Roblox Corporation. Dead Rails, zombie assets, and train art belong to their respective developers. All media and text on this site are used under Fair Use principles for educational commentary.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-800 pt-6">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>6. DMCA &amp; Contact Inquiries</span>
            </h2>
            <p>
              For rights holders, content attribution, or takedown requests, contact our editorial team directly at:
            </p>
            <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 font-mono text-sm font-bold text-amber-300">
              contact@robloxwikihub.com
            </div>
            <p className="text-xs text-slate-400 font-mono">
              We respond promptly within 48 business hours.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
