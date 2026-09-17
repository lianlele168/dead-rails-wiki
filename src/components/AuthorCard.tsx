import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Marcus "Cinders" Vance',
  role = 'Lead Locomotive Engineer & Zombie Horde Specialist',
  experience = '350+ Hours In-Game • 500+ Outpost Runs',
  patchVersion = 'RCM Patch v2.14 Verified',
  lastUpdated = 'September 2026',
  editorialNote = 'All boiler fuel burn rates, cowcatcher ramming damage calculations, and zombie wave spawn triggers are tested and verified across live multiplayer runs.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-slate-900/80 border border-amber-500/20 p-4 sm:p-5 backdrop-blur-md my-6 shadow-xl font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg shadow-inner font-mono">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-100 text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                ✓ Verified by lianlele168
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {role} • <span className="text-slate-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto font-mono">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ⚡ {patchVersion}
          </span>
          <span className="text-xs text-slate-400">
            Updated: <strong className="text-slate-200">{lastUpdated}</strong>
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
      <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <span>Methodology: <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Roblox Wiki Hub Standards</a></span>
        <span>Corrections: <a href="mailto:lianlele168@gmail.com" className="underline hover:text-white">lianlele168@gmail.com</a></span>
      </div>
    </div>
  );
}
