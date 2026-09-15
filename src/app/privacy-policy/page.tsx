import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Trust Center | Dead Rails Wiki',
  description: 'Privacy policy, COPPA child safety disclosures, and data protection guidelines for Dead Rails fans.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header Breadcrumb & Badge */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ROBLOX FAN NETWORK TRUST CENTER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Privacy Policy &amp; Trust Disclosures
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Last Updated: 2026 • Compliant with COPPA, GDPR, and Google AdSense
          </p>
        </div>

        {/* 4 Trust Highlights Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white font-mono">COPPA Compliant</p>
              <p className="text-slate-400 text-[11px]">Safe for under 13</p>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <Lock className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white font-mono">Zero Account Needed</p>
              <p className="text-slate-400 text-[11px]">No passwords or Robux</p>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white font-mono">100% Client-Side</p>
              <p className="text-slate-400 text-[11px]">Calculators run in browser</p>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <Mail className="h-5 w-5 shrink-0 text-indigo-400" />
            <div>
              <p className="font-bold text-white font-mono">Verified Contact</p>
              <p className="text-slate-400 text-[11px]">48h response SLA</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>1. Zero Personal Data &amp; No Roblox Credentials</span>
            </h2>
            <p>
              Dead Rails Wiki does not require account creation or registration. We will <strong className="text-white">NEVER</strong> request your Roblox username, password, session cookies, or billing information. All boiler fuel calculators, weapon DPS simulators, and code utilities run client-side in your local browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>2. COPPA &amp; Children&apos;s Online Privacy Compliance</span>
            </h2>
            <p>
              In accordance with the Children&apos;s Online Privacy Protection Act (COPPA), this website does not knowingly collect personal data from children under the age of 13. Minors can safely explore survival routes and calculators without any personal data tracking.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>3. Telemetry, Cookies &amp; Advertising</span>
            </h2>
            <p>
              Standard anonymous web telemetry (such as page views and browser device types) is processed solely to optimize server performance and load speeds. Third-party advertising partners (such as Google AdSense) may use cookies to serve gaming ads. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">Google Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>4. External Platform Hyperlinks</span>
            </h2>
            <p>
              Our site contains hyperlinks to external gaming services, including Roblox.com and Discord. We assume no responsibility for the content or privacy practices of third-party domains.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use Disclaimer</span>
            </h2>
            <p>
              Roblox is a registered trademark of Roblox Corporation. Dead Rails, zombie assets, and train upgrades belong to their respective developers. This wiki is an independent fan community guide created for educational purposes under Fair Use.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-800 pt-6">
            <h2 className="text-base font-bold text-slate-100 font-mono flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>6. Editorial &amp; Privacy Contact</span>
            </h2>
            <p>
              For privacy inquiries, DMCA notices, or correction requests, reach our editorial staff at:
            </p>
            <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 font-mono text-sm font-bold text-amber-300">
              contact@robloxwikihub.com
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Inquiries are acknowledged and resolved within 48 business hours.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

