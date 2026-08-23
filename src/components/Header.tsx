'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Train, Flame, Shield, Crosshair, Gift, Database, MapPin, Menu, X, Coins, UserCheck, Moon } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070a0f]/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-600 to-red-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070a0f] rounded-[10px] flex items-center justify-center">
              <Train className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <span className="font-mono font-black text-lg tracking-wider text-slate-100 flex items-center gap-2">
              DEAD RAILS <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded border border-amber-500/30">WIKI</span>
            </span>
            <p className="text-[10px] font-sans text-slate-400">Survival & Train Fuel Database</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-1 font-mono text-xs text-slate-300">
          <Link href="/fuel-calculator" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" /> Fuel Calc
          </Link>
          <Link href="/weapons-tier-list" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-red-400 transition-colors flex items-center gap-1.5">
            <Crosshair className="w-3.5 h-3.5 text-red-400" /> Weapons
          </Link>
          <Link href="/cargo-trade-calculator" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Coins className="w-3.5 h-3.5 text-emerald-400" /> Trade Calc
          </Link>
          <Link href="/class-roles" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" /> Class Roles
          </Link>
          <Link href="/night-survival-simulator" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-purple-400 transition-colors flex items-center gap-1.5">
            <Moon className="w-3.5 h-3.5 text-purple-400" /> Night Sim
          </Link>
          <Link href="/codes" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-amber-400" /> Codes
          </Link>
          <Link href="/train-upgrades" className="px-2.5 py-2 rounded-lg hover:bg-slate-800/80 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyan-400" /> Upgrades
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070a0f] border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 font-mono text-sm">
          <Link href="/fuel-calculator" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🔥 Fuel Calculator
          </Link>
          <Link href="/cargo-trade-calculator" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            💰 Cargo Trade & Profit Calc
          </Link>
          <Link href="/class-roles" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            👤 Player Class Roles Guide
          </Link>
          <Link href="/night-survival-simulator" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🌙 Night Tunnel Searchlight Sim
          </Link>
          <Link href="/weapons-tier-list" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🎯 Weapons Tier List
          </Link>
          <Link href="/codes" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🎁 Active Codes
          </Link>
          <Link href="/train-upgrades" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🛡️ Train Upgrades Guide
          </Link>
          <Link href="/zombies-guide" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            ☣️ Zombie Bestiary
          </Link>
          <Link href="/routes-map" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            🗺️ Station Routes Map
          </Link>
          <Link href="/beginner-guide" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
            📘 Beginner Survival SOP
          </Link>
        </div>
      )}
    </header>
  );
}
