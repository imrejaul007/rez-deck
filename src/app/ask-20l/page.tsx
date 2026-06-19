'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Rocket,
  CheckCircle,
  Clock,
  Mail,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
  Building2,
  Calendar,
  Users,
  Megaphone,
  Wrench,
  Laptop,
  Shield,
  ArrowRight,
  Heart,
  AlertCircle,
  PartyPopper,
} from 'lucide-react'

// Animation variants (match main deck)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

// Reusable components (mirror main deck style)
const GlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div variants={fadeInUp} className={`glass rounded-2xl p-6 md:p-8 ${className}`}>
    {children}
  </motion.div>
)

const SectionTitle = ({
  icon: Icon,
  subtitle,
  children,
  align = 'center',
}: {
  icon?: React.ElementType
  subtitle?: string
  children: React.ReactNode
  align?: 'center' | 'left'
}) => (
  <motion.div
    variants={fadeInUp}
    className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : ''}`}
  >
    {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-500 mb-4" />}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{children}</h2>
    {subtitle && <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
)

export default function Ask20LPage() {
  const [activeTranche, setActiveTranche] = useState<1 | 2>(1)

  return (
    <main className="min-h-screen bg-dark-900 text-white antialiased">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to main deck
          </a>
          <div className="text-sm text-gray-400">
            REZ Investor Page · <span className="text-primary-400 font-semibold">Bridge Round</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-24 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Bridge Round · Pre-Seed
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            ₹20 Lakh to{' '}
            <span className="gradient-text">Launch the REZ App</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            A staged, milestone-based bridge round at{' '}
            <span className="text-primary-400 font-semibold">5% equity</span> — to validate demand in HSR's college belt before scaling the merchant app to all of Bangalore.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="glass rounded-xl p-5">
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">₹20L</div>
              <div className="text-sm text-gray-400">Total Bridge Round</div>
            </div>
            <div className="glass rounded-xl p-5">
              <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">5%</div>
              <div className="text-sm text-gray-400">Equity (SAFE)</div>
            </div>
            <div className="glass rounded-xl p-5">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">2 Tranches</div>
              <div className="text-sm text-gray-400">Milestone-gated</div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tranche-1"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold transition-all"
            >
              <Sparkles className="w-5 h-5" />
              See the Use of Funds
            </a>
            <a
              href="mailto:investors@rez.money?subject=₹20L%20Bridge%20Round%20-%20App%20Launch"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-700 hover:border-primary-500 hover:bg-primary-500/10 rounded-xl font-semibold transition-all"
            >
              <Mail className="w-5 h-5" />
              Talk to Founder
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY A BRIDGE ROUND */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-dark-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <SectionTitle icon={Target} subtitle="Why staged, why small, why now">
            Why a ₹20 Lakh Bridge Round?
          </SectionTitle>

          <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              The full <span className="text-primary-400 font-semibold">₹2 Cr pre-seed</span> is the long-term round to scale Bangalore cluster-by-cluster. This ₹20 Lakh is a smaller, faster, milestone-based bridge specifically to cross one threshold:
            </p>
            <p className="text-xl md:text-2xl font-bold gradient-text">
              Prove demand with real students and real merchants before scaling the app to all of Bangalore.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4">
            <GlassCard>
              <Clock className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Faster Close</h3>
              <p className="text-sm text-gray-400">
                ₹20L closes in weeks from friendly capital, not months. No fund-of-funds delay.
              </p>
            </GlassCard>
            <GlassCard>
              <Shield className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Lower Investor Risk</h3>
              <p className="text-sm text-gray-400">
                Tranche 2 only deploys if HSR events prove the merchant-student flywheel. Milestone-gated, not blind faith.
              </p>
            </GlassCard>
            <GlassCard>
              <TrendingUp className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Better Series Seed</h3>
              <p className="text-sm text-gray-400">
                Once events succeed, we raise the full ₹2 Cr at a much higher valuation. You benefit from that step-up.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* USE OF FUNDS - TRANCHE TOGGLE */}
      <section id="tranche-1" className="px-4 md:px-8 lg:px-16 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <SectionTitle icon={Wallet} subtitle="Every rupee accounted for. No fluff.">
            Use of Funds
          </SectionTitle>

          {/* Tranche toggle */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-10">
            <div className="inline-flex rounded-xl bg-dark-800 border border-dark-700 p-1">
              <button
                onClick={() => setActiveTranche(1)}
                className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTranche === 1
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Tranche 1 · ₹10L Now
              </button>
              <button
                onClick={() => setActiveTranche(2)}
                className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTranche === 2
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Tranche 2 · ₹10L on Milestone
              </button>
            </div>
          </motion.div>

          {activeTranche === 1 ? (
            <Tranche1 />
          ) : (
            <Tranche2 />
          )}
        </motion.div>
      </section>

      {/* MILESTONES */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-dark-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <SectionTitle icon={CheckCircle} subtitle="What 'success' means to unlock Tranche 2">
            Milestones to Unlock Tranche 2
          </SectionTitle>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
            <MilestoneCard
              icon={Users}
              title="500+ active students"
              description="Verified users from HSR college events who re-engage with at least 3 merchants in 30 days."
            />
            <MilestoneCard
              icon={Building2}
              title="50+ HSR merchants onboarded"
              description="Cafes, tiffin services, salons, stationery shops within a 1km radius of the college belt actively accepting REZ."
            />
            <MilestoneCard
              icon={TrendingUp}
              title="20%+ repeat transaction rate"
              description="Measured across HSR cohort over a 4-week window — validates the loyalty loop, not just one-time curiosity."
            />
            <MilestoneCard
              icon={PartyPopper}
              title="3 successful events completed"
              description="Two college events + one merchant demo day, each delivering attendance, transactions, and merchant sign-ups."
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 glass rounded-2xl p-6 md:p-8 bg-blue-500/10 border border-blue-500/30"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-400">If milestones are not met</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Tranche 2 is held back. We report transparently to investors, extend Tranche 1 runway with reduced scope, or return uncommitted capital. The bridge round is designed to fail small and learn fast — not to over-promise.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="px-4 md:px-8 lg:px-16 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <SectionTitle icon={Calendar} subtitle="Tranche 1: Weeks 1-12. Tranche 2: Weeks 13-26.">
            6-Month Roadmap
          </SectionTitle>

          <motion.div variants={fadeInUp} className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-green-500" />

            <TimelineItem
              week="Week 1-2"
              title="Bridge Round Close + HSR Onboarding"
              description="Close ₹10L, hire 3-person ground team, onboard 50 HSR merchants within 7km radius."
              color="primary"
            />
            <TimelineItem
              week="Week 3-6"
              title="Event #1 — HSR College Launch"
              description="₹3L events budget deployed. Target: 500 student activations, 20+ merchant sign-ups at the venue."
              color="primary"
            />
            <TimelineItem
              week="Week 7-10"
              title="Event #2 + App Beta Build"
              description="Second HSR event for repeat-rate validation. Begin merchant app beta with 25 pilot merchants."
              color="primary"
            />
            <TimelineItem
              week="Week 11-12"
              title="Tranche 1 Review + Investor Report"
              description="Publish milestone report. If milestones met, deploy Tranche 2. If not, decide extension vs return."
              color="blue"
            />
            <TimelineItem
              week="Week 13-18"
              title="App Public Launch + Computers + Marketing"
              description="₹3L computers (POS tablets), ₹3L digital marketing, ₹3L next 2 events at HSR + Koramangala colleges."
              color="blue"
            />
            <TimelineItem
              week="Week 19-26"
              title="Bangalore Expansion + Series Seed Prep"
              description="100+ active merchants, 2,000+ users. Begin Series Seed raise at 4-5x step-up from bridge."
              color="green"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SAFE TERMS */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-dark-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <SectionTitle icon={Shield} subtitle="YC standard. Investor-friendly. Clean step-up.">
            Terms
          </SectionTitle>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
            <TermCard label="Instrument" value="SAFE (Post-money)" />
            <TermCard label="Equity" value="5% (across both tranches)" />
            <TermCard label="Minimum Check" value="₹2 Lakh" />
            <TermCard label="Valuation Cap" value="₹4 Cr post-money" />
            <TermCard label="Discount" value="20% on Series Seed" />
            <TermCard label="MFN Clause" value="Yes — full MFN across both tranches" />
            <TermCard label="Pro-rata Rights" value="Yes — 50% in Series Seed" />
            <TermCard label="Reporting" value="Monthly KPI dashboard + quarterly call" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 glass rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="text-gray-300 mb-2">Valuation context for investors</p>
            <p className="text-sm text-gray-400">
              ₹20L for 5% at a ₹4 Cr post-money cap is a friendly-capital bridge, not a market round. Investors in this round are betting on a 4-5x step-up at Series Seed (₹16-20 Cr post) once HSR proves out — typically within 9-12 months.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CLOSE / CTA */}
      <section className="px-4 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-dark-900 via-dark-800 to-primary-900/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Heart className="w-12 h-12 text-primary-500 mx-auto mb-6" />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6">
            Help us launch the app.<br />
            <span className="gradient-text">Prove the loop. Then we scale.</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-3 mb-10">
            <blockquote className="text-lg md:text-xl text-gray-300 italic">
              "We don't need ₹2 Cr to find out if students and merchants will use this. We need ₹20 Lakh to find out — and the rest follows."
            </blockquote>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 md:p-12 mb-8">
            <div className="text-4xl md:text-5xl font-black gradient-text mb-4">₹20 Lakh</div>
            <p className="text-gray-400 mb-6">
              5% equity · SAFE · Tranche 1 deploys in 7 days · Tranche 2 on milestone
            </p>
            <a
              href="mailto:investors@rez.money?subject=₹20L%20Bridge%20Round%20-%20App%20Launch"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold transition-all text-lg"
            >
              <Mail className="w-5 h-5" />
              Commit to the Bridge Round
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="mailto:investors@rez.money" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              investors@rez.money
            </a>
            <a href="/" className="flex items-center gap-2 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to full ₹2 Cr deck
            </a>
            <a href="https://rez.money" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              rez.money
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-xs text-gray-500">
            Bridge Round open · Last updated June 19, 2026
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

// Tranche 1 sub-component
function Tranche1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass rounded-2xl p-6 md:p-8 mb-6 bg-primary-500/10 border border-primary-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center font-black text-white">
            1
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Tranche 1 — ₹10 Lakh Now</h3>
            <p className="text-sm text-gray-400">Deploys within 7 days of close. Validates HSR college events.</p>
          </div>
        </div>
      </div>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-6">
        <UseOfFundsCard
          icon={PartyPopper}
          amount="₹3 Lakh"
          label="HSR College Events"
          description="Venue, sound, branding, on-ground activations, college ambassador incentives across 2 flagship events."
          percentage={30}
          color="primary"
        />
        <UseOfFundsCard
          icon={Users}
          amount="₹6 Lakh"
          label="3-Month Salaries"
          description="₹2 Lakh/month covering a 3-person ground team — 1 ops lead, 1 BD, 1 community manager for HSR."
          percentage={60}
          color="primary"
        />
        <UseOfFundsCard
          icon={Wrench}
          amount="₹1 Lakh"
          label="Service & Maintenance"
          description="Cloud infra, payment gateway, SMS/WhatsApp APIs, compliance, legal, accounting, software tools."
          percentage={10}
          color="primary"
        />
      </motion.div>

      {/* Total bar */}
      <div className="glass rounded-xl p-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold">Tranche 1 Total</span>
          <span className="font-bold text-primary-400">₹10,00,000</span>
        </div>
        <div className="h-3 bg-dark-700 rounded-full overflow-hidden flex">
          <div className="bg-primary-500" style={{ width: '30%' }} />
          <div className="bg-primary-400" style={{ width: '60%' }} />
          <div className="bg-primary-300" style={{ width: '10%' }} />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Events 30%</span>
          <span>Salaries 60%</span>
          <span>Service 10%</span>
        </div>
      </div>
    </motion.div>
  )
}

// Tranche 2 sub-component
function Tranche2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass rounded-2xl p-6 md:p-8 mb-6 bg-blue-500/10 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-black text-white">
            2
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Tranche 2 — ₹10 Lakh on Milestone</h3>
            <p className="text-sm text-gray-400">Deploys only after Tranche 1 milestones verified. Funds app launch & scale.</p>
          </div>
        </div>
      </div>

      <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-6">
        <UseOfFundsCard
          icon={Laptop}
          amount="₹3 Lakh"
          label="Computers & POS Tablets"
          description="10-12 Android POS tablets for pilot merchants. Enables QR scan, instant reward crediting, and live dashboards."
          percentage={30}
          color="blue"
        />
        <UseOfFundsCard
          icon={Megaphone}
          amount="₹3 Lakh"
          label="Marketing"
          description="Hyper-local digital ads in HSR + Koramangala college belt, WhatsApp viral loops, merchant referral bonuses."
          percentage={30}
          color="blue"
        />
        <UseOfFundsCard
          icon={Calendar}
          amount="₹3 Lakh"
          label="Next Events"
          description="Two more HSR events + first Koramangala college event. Replicates the validated playbook to a new cluster."
          percentage={30}
          color="blue"
        />
      </motion.div>

      {/* Reserve callout */}
      <div className="glass rounded-xl p-5 mb-6 border-l-4 border-green-500">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Reserve: ~₹1 Lakh (unallocated)</div>
            <p className="text-sm text-gray-400">
              Held back as buffer for opportunistic spends: extra event budget if Tranche 1 over-delivers, or a small legal/audit reserve before Series Seed paperwork. Reported on monthly.
            </p>
          </div>
        </div>
      </div>

      {/* Total bar */}
      <div className="glass rounded-xl p-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold">Tranche 2 Total</span>
          <span className="font-bold text-blue-400">₹10,00,000</span>
        </div>
        <div className="h-3 bg-dark-700 rounded-full overflow-hidden flex">
          <div className="bg-blue-500" style={{ width: '30%' }} />
          <div className="bg-blue-400" style={{ width: '30%' }} />
          <div className="bg-blue-300" style={{ width: '30%' }} />
          <div className="bg-green-500" style={{ width: '10%' }} />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Computers 30%</span>
          <span>Marketing 30%</span>
          <span>Events 30%</span>
          <span>Reserve 10%</span>
        </div>
      </div>
    </motion.div>
  )
}

// Helper components
function UseOfFundsCard({
  icon: Icon,
  amount,
  label,
  description,
  percentage,
  color,
}: {
  icon: React.ElementType
  amount: string
  label: string
  description: string
  percentage: number
  color: 'primary' | 'blue'
}) {
  const colorClass = color === 'primary' ? 'border-primary-500' : 'border-blue-500'
  const textClass = color === 'primary' ? 'gradient-text' : 'text-blue-400'

  return (
    <motion.div variants={fadeInUp} className={`glass rounded-xl p-6 border-l-4 ${colorClass} text-left`}>
      <Icon className={`w-8 h-8 ${color === 'primary' ? 'text-primary-500' : 'text-blue-500'} mb-3`} />
      <div className={`text-3xl md:text-4xl font-black ${textClass} mb-1`}>{amount}</div>
      <div className="text-sm text-gray-400 mb-1">{percentage}%</div>
      <div className="font-semibold mb-2">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </motion.div>
  )
}

function MilestoneCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <motion.div variants={fadeInUp} className="glass rounded-xl p-5 text-left">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function TimelineItem({
  week,
  title,
  description,
  color,
}: {
  week: string
  title: string
  description: string
  color: 'primary' | 'blue' | 'green'
}) {
  const dotColor = color === 'primary' ? 'bg-primary-500' : color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
  const labelColor =
    color === 'primary' ? 'text-primary-400' : color === 'blue' ? 'text-blue-400' : 'text-green-400'

  return (
    <motion.div variants={fadeInUp} className="relative pl-12 md:pl-20 pb-8 last:pb-0">
      <div className={`absolute left-2 md:left-6 top-0 w-5 h-5 rounded-full ${dotColor} ring-4 ring-dark-900`} />
      <div className={`text-xs md:text-sm font-semibold ${labelColor} mb-1`}>{week}</div>
      <h4 className="text-lg md:text-xl font-bold mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}

function TermCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div variants={fadeInUp} className="glass rounded-xl p-5">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
      <div className="text-base md:text-lg font-semibold">{value}</div>
    </motion.div>
  )
}
