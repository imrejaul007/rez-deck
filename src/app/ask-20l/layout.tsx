import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '₹20 Lakh Bridge Round — Launch the REZ App | REZ Investor',
  description: '₹20 Lakh staged bridge round at 5% equity to launch the REZ app. Tranche 1 (₹10L now) funds HSR college events. Tranche 2 (₹10L on milestone) funds computers, marketing, and next events.',
  keywords: ['REZ', 'investor', 'bridge round', 'pre-seed', '₹20 Lakh', '5% equity', 'SAFE', 'app launch', 'Bangalore', 'HSR'],
  openGraph: {
    title: '₹20 Lakh Bridge Round — Launch the REZ App',
    description: 'Staged, milestone-based bridge round. ₹10L now for HSR college events, ₹10L on success for app launch.',
    type: 'website',
    url: 'https://rez-deck.vercel.app/ask-20l',
  },
  twitter: {
    card: 'summary_large_image',
    title: '₹20 Lakh Bridge Round — Launch the REZ App',
    description: 'Staged bridge round at 5% equity. ₹10L now → HSR events → ₹10L on milestone → app launch.',
  },
}

export default function Ask20LLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
