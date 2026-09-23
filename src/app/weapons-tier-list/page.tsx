import type { Metadata } from 'next';
import WeaponsTierListClient from './WeaponsTierListClient';

export const metadata: Metadata = {
  title: 'Dead Rails Weapons Guide — Shotgun, Rifle & Melee',
  description:
    'The three verified Dead Rails weapon archetypes and how each is actually used. Exact DPS is not published, so no invented damage numbers.',
  alternates: {
    canonical: '/weapons-tier-list',
  },
};

export default function WeaponsTierListPage() {
  return <WeaponsTierListClient />;
}
