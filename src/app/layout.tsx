import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REZ Investor Deck | Merchant-Owned Commerce Intelligence',
  description: 'REZ: The behavioral graph of local commerce. Merchant-owned customer relationships, AI intelligence, and cross-category rewards for India\'s 50M+ SMBs.',
  keywords: ['REZ', 'investor', 'pitch deck', 'merchant-owned', 'commerce intelligence', 'Bangalore', 'loyalty', 'QR payments', 'AI'],
  openGraph: {
    title: 'REZ Investor Deck | Merchant-Owned Commerce Intelligence',
    description: 'REZ: The behavioral graph of local commerce. ₹2 Cr pre-seed to prove density model in Bangalore.',
    type: 'website',
    url: 'https://rez-deck.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REZ Investor Deck | Merchant-Owned Commerce Intelligence',
    description: 'REZ: The behavioral graph of local commerce. ₹2 Cr pre-seed to prove density model in Bangalore.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
