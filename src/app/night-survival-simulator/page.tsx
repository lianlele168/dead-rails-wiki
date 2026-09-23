import type { Metadata } from 'next';
import NightSurvivalSimulatorClient from './NightSurvivalSimulatorClient';

export const metadata: Metadata = {
  title: 'Dead Rails Night Survival Simulator — Run Planner',
  description:
    'Plan a Dead Rails night survival run: moon phases, threats, checkpoint segments and fuel strategy.',
  alternates: {
    canonical: '/night-survival-simulator',
  },
};

export default function NightSurvivalSimulatorPage() {
  return <NightSurvivalSimulatorClient />;
}
