import React from 'react';
import Link from 'next/link';
import { Train, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04060a] border-t border-slate-800/80 text-slate-400 text-xs py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-amber-600 flex items-center justify-center text-slate-950 font-bold">
              <Train className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold text-slate-100 text-sm">DEAD RAILS WIKI</span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-md">
            Dead Rails Wiki is an independent fan database and survival calculator hub for the Roblox game Dead Rails. Calculate coal per 10 km checkpoint, browse the verified enemy bestiary and 80 km route map, and compare classes — all data sourced from verified public references.
          </p>
          <p className="text-[11px] text-slate-500">
            Disclaimer: Dead Rails Wiki is not affiliated with or endorsed by Roblox Corporation or the Dead Rails developer team. All game assets belong to their respective owners.
          </p>
        </div>

        <div>
          <h4 className="font-mono font-bold text-slate-200 text-xs uppercase tracking-wider mb-3 text-amber-400">Survival Tools</h4>
          <ul className="space-y-2 font-mono text-xs">
            <li><Link href="/fuel-calculator" className="hover:text-amber-400 transition-colors">Coal & Fuel Calc</Link></li>
            <li><Link href="/weapons-tier-list" className="hover:text-amber-400 transition-colors">Weapons Guide</Link></li>
            <li><Link href="/zombies-guide" className="hover:text-amber-400 transition-colors">Enemy Bestiary</Link></li>
            <li><Link href="/routes-map" className="hover:text-amber-400 transition-colors">Route Map</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono font-bold text-slate-200 text-xs uppercase tracking-wider mb-3 text-amber-400">Legal & Resources</h4>
          <ul className="space-y-2 font-mono text-xs">
            <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Use</Link></li>
            <li><Link href="/beginner-guide" className="hover:text-amber-400 transition-colors">Beginner SOP Guide</Link></li>
            <li>
              <a href="https://robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline inline-flex items-center gap-1">
                Roblox Wiki Hub <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
        <p>© 2026 Dead Rails Wiki. All rights reserved.</p>
        <p>Built with Next.js 15 & Tailwind CSS</p>
      </div>
    </footer>
  );
}
