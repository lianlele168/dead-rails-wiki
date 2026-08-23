import React from 'react';
import Metadata from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Dead Rails Wiki',
  description: 'Privacy policy for Dead Rails Wiki. Learn about how we collect, use, and protect user data.',
  alternates: {
    canonical: 'https://deadrails.robloxwikihub.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" /> Legal & Privacy
          </div>
          <h1 className="text-3xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Privacy Policy
          </h1>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
          <h2 className="text-lg font-bold text-slate-100 font-mono">1. Information We Collect</h2>
          <p>
            Dead Rails Wiki does not require user registration or account creation. We only process anonymous web telemetry (such as page views and browser device types) to optimize performance.
          </p>

          <h2 className="text-lg font-bold text-slate-100 font-mono mt-6">2. Cookies & Advertising</h2>
          <p>
            Third-party vendors, including Google AdSense, may use cookies to serve ads based on prior visits to our website. You may opt out of personalized advertising by visiting Google Ads Settings.
          </p>

          <h2 className="text-lg font-bold text-slate-100 font-mono mt-6">3. External Links</h2>
          <p>
            Our website contains links to external sites (such as Roblox.com). We are not responsible for the privacy practices or content of third-party domains.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
