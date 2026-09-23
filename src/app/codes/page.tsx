import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: 'Dead Rails Codes — Verified Active Codes Only',
  description:
    'Dead Rails redeem codes, listed only when verified. No fabricated active codes — when nothing is confirmed, this page says so.',
  alternates: {
    canonical: '/codes',
  },
};

export default function CodesPage() {
  return <CodesClient />;
}
