'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Moon, Sun, Zap, ShieldAlert, AlertTriangle } from 'lucide-react';

export default function NightSurvivalSimulatorPage() {
  const [tunnelLengthMeters, setTunnelLengthMeters] = useState(800);
  const [floodlightPowerPercent, setFloodlightPowerPercent] = useState(100);
  const [trainSpeedKmh, setTrainSpeedKmh] = useState(60);

  // Time in seconds to pass tunnel = (distance / speed) * 3.6
  const secondsInTunnel = Math.round((tunnelLengthMeters / (trainSpeedKmh / 3.6)));
  
  // Battery drain rate: at 100% power, battery lasts 60 seconds
  const batteryDrainPerSecond = (floodlightPowerPercent / 100) * 1.67;
  const totalBatteryDrainPercent = Math.min(100, Math.round(secondsInTunnel * batteryDrainPerSecond));
  
  // Night stalker stun efficiency: >70% power stuns 100%, <50% power stuns 30%
  const stunEfficiency = floodlightPowerPercent >= 75 ? '100% Full Stun' : floodlightPowerPercent >= 50 ? '60% Partial Stun' : '0% Stun (Extreme Hazard)';

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Moon className="w-3.5 h-3.5" /> Night & Tunnel Survival Physics
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Night Tunnel & Searchlight Heat Simulator
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl">
            Simulate darkness tunnel duration, battery heat drain for roof searchlights, and optimize train speed to blind Night Stalkers before lights fail.
          </p>
        </div>

        {/* SIMULATOR CONTAINER */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-8 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Tunnel Length:</span>
                <strong className="text-purple-400">{tunnelLengthMeters} meters</strong>
              </div>
              <input
                type="range"
                min="200"
                max="2000"
                step="100"
                value={tunnelLengthMeters}
                onChange={(e) => setTunnelLengthMeters(Number(e.target.value))}
                className="w-full accent-purple-500 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Train Speed:</span>
                <strong className="text-cyan-400">{trainSpeedKmh} km/h</strong>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="5"
                value={trainSpeedKmh}
                onChange={(e) => setTrainSpeedKmh(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Searchlight Beam Power:</span>
                <strong className="text-amber-400">{floodlightPowerPercent}%</strong>
              </div>
              <input
                type="range"
                min="25"
                max="100"
                step="25"
                value={floodlightPowerPercent}
                onChange={(e) => setFloodlightPowerPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* SIMULATION RESULTS */}
          <div className="bg-slate-950 border border-purple-500/40 rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-xs uppercase block mb-1">Time in Tunnel</span>
                <strong className="text-2xl text-purple-400 font-black">{secondsInTunnel} Secs</strong>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-xs uppercase block mb-1">Battery Consumed</span>
                <strong className="text-2xl text-amber-400 font-black">{totalBatteryDrainPercent}%</strong>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-xs uppercase block mb-1">Stalker Stun Rating</span>
                <strong className="text-sm text-emerald-400 font-bold block mt-1">{stunEfficiency}</strong>
              </div>
            </div>

            {totalBatteryDrainPercent >= 100 && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>
                  <strong>CRITICAL WARNING:</strong> Searchlight battery will completely drain before tunnel exit! Increase train speed or carry backup battery cores.
                </span>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
