'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  QrCode,
  Coins,
  Users,
  TrendingUp,
  Building2,
  Zap,
  Shield,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Store,
  CreditCard,
  Gift,
  BarChart3,
  Globe,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  Star,
  Award,
  TrendingDown,
  UsersRound,
  ShoppingBag,
  MessageSquare,
  Heart,
  Sparkles,
  Calculator,
  Rocket,
  AlertCircle
} from 'lucide-react'

// Slide data
const slides = [
  { id: 'cover', title: 'Cover' },
  { id: 'problem', title: 'The Problem' },
  { id: 'positioning', title: 'Positioning' },
  { id: 'why-now', title: 'Why Now' },
  { id: 'building', title: 'What We Build' },
  { id: 'loop', title: 'Rewards Loop' },
  { id: 'network', title: 'Network' },
  { id: 'intelligence', title: 'REZ Intelligence' },
  { id: 'ai-smarter', title: 'AI Gets Smarter' },
  { id: 'market', title: 'Market' },
  { id: 'competition', title: 'Competition' },
  { id: 'earn', title: 'How We Earn' },
  { id: 'cluster', title: 'Cluster Economics' },
  { id: 'economics', title: 'Unit Economics' },
  { id: 'goal', title: 'The Goal' },
  { id: 'accelerate', title: 'Why Growth Accelerates' },
  { id: 'traction', title: 'Traction' },
  { id: 'founder', title: 'The Founder' },
  { id: 'gtm', title: 'The GTM' },
  { id: 'ask', title: 'The Ask' },
  { id: 'legal', title: 'Legal & Compliance' },
  { id: 'close', title: 'Close' },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// Components
const SlideIndicator = ({ current, total, onGoTo }: { current: number; total: number; onGoTo: (i: number) => void }) => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-dark-800/90 backdrop-blur-sm rounded-full px-4 py-2">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => onGoTo(i)}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === current ? 'bg-primary-500 w-6' : 'bg-dark-600 hover:bg-dark-500'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
)

const Navigation = ({ current, total, onPrev, onNext }: { current: number; total: number; onPrev: () => void; onNext: () => void }) => (
  <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
    <button
      onClick={onPrev}
      disabled={current === 0}
      className="p-2 rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-700 hover:bg-dark-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <div className="text-center text-sm text-gray-400 py-2">
      {current + 1}/{total}
    </div>
    <button
      onClick={onNext}
      disabled={current === total - 1}
      className="p-2 rounded-full bg-dark-800/80 backdrop-blur-sm border border-dark-700 hover:bg-dark-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
)

const Slide = ({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className={`min-h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-16 py-12 ${className}`}
  >
    {children}
  </motion.section>
)

const SlideTitle = ({ children, subtitle, icon: Icon }: { children: React.ReactNode; subtitle?: string; icon?: React.ElementType }) => (
  <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
    {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-500 mb-4" />}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{children}</h2>
    {subtitle && <p className="text-lg md:text-xl text-gray-400 max-w-2xl">{subtitle}</p>}
  </motion.div>
)

const StatCard = ({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon: React.ElementType; delay?: number }) => (
  <motion.div
    variants={fadeInUp}
    className="glass rounded-2xl p-4 md:p-6 text-center"
    custom={delay}
  >
    <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
)

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <motion.div variants={fadeInUp} className="glass rounded-xl p-4 md:p-6">
    <Icon className="w-8 h-8 text-primary-500 mb-3" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
)

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <motion.div variants={fadeInUp} className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
      <span className="text-primary-500 font-bold text-lg">{number}</span>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
)

const TeamMember = ({ name, role, bio }: { name: string; role: string; bio: string }) => (
  <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-4 flex items-center justify-center">
      <span className="text-2xl font-bold">{name.charAt(0)}</span>
    </div>
    <h3 className="font-semibold text-lg mb-1">{name}</h3>
    <p className="text-primary-500 text-sm mb-3">{role}</p>
    <p className="text-gray-400 text-sm">{bio}</p>
  </motion.div>
)

// Main Page Component
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setMenuOpen(false)
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide()
        else prevSlide()
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSlide])

  return (
    <div ref={containerRef} className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="font-bold text-white text-sm">R</span>
            </div>
            <span className="font-bold text-xl">REZ</span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#problem" onClick={() => goToSlide(1)} className="text-sm text-gray-400 hover:text-white transition-colors">Problem</a>
            <a href="#positioning" onClick={() => goToSlide(2)} className="text-sm text-gray-400 hover:text-white transition-colors">Positioning</a>
            <a href="#intelligence" onClick={() => goToSlide(7)} className="text-sm text-gray-400 hover:text-white transition-colors">Intelligence</a>
            <a href="#market" onClick={() => goToSlide(9)} className="text-sm text-gray-400 hover:text-white transition-colors">Market</a>
            <a href="#traction" onClick={() => goToSlide(16)} className="text-sm text-gray-400 hover:text-white transition-colors">Traction</a>
            <a href="#ask" onClick={() => goToSlide(19)} className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-sm font-medium transition-colors">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-800 border-b border-dark-700 p-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {slides.slice(1, -1).map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(i + 1)}
                  className="text-left text-gray-300 hover:text-white transition-colors py-2 text-sm"
                >
                  <span className="text-primary-400 mr-2">{i + 1}.</span> {slide.title}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Scrollable Slides */}
      <main className="pt-16">
        {/* Slide 1: Cover */}
        <Slide id="cover" className="min-h-[calc(100vh-4rem)] justify-center text-center items-center bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800">
          <motion.div variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-400 text-sm font-semibold">
                Pre-Seed Round Open
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="gradient-text">REZ</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 font-light">
              The Future of Local Commerce
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-2 font-medium">
              Merchant-Owned Commerce Intelligence
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              India has 50+ million SMBs. 80% fail in 5 years because they never learn who their customers are.
              REZ changes that by giving merchants ownership of their customer relationships and the AI intelligence to grow them.
            </motion.p>

            {/* Hero stats — canonical upstream numbers */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
              <div className="glass rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black gradient-text mb-1">₹42L Cr</div>
                <div className="text-xs md:text-sm text-gray-400">TAM</div>
              </div>
              <div className="glass rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black gradient-text mb-1">5%</div>
                <div className="text-xs md:text-sm text-gray-400">vs 25% Aggregator Fees</div>
              </div>
              <div className="glass rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-black gradient-text mb-1">6-8 mo</div>
                <div className="text-xs md:text-sm text-gray-400">To Profitability</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#problem"
                onClick={(e) => { e.preventDefault(); goToSlide(1) }}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                View Pitch <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:investors@rez.money"
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 border border-dark-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Contact Us
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16">
              <ChevronDown className="w-8 h-8 text-gray-500 mx-auto animate-bounce" />
            </motion.div>
          </motion.div>
        </Slide>

        {/* Slide 2: The Problem */}
        <Slide id="problem" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={TrendingDown} subtitle='"India has 50+ million SMBs. 80% fail in 5 years."'>
              The Problem
            </SlideTitle>

            {/* D2C Fashion Brand Example — vivid upstream framing */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8 bg-gradient-to-r from-red-900/10 to-orange-900/10 border-red-900/30">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-red-400">👕 D2C Fashion Brand Example</h3>
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-6">
                <div className="bg-dark-900/50 rounded-lg p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-red-400">₹500</div>
                  <div className="text-xs text-gray-400">CAC (Meta Ads)</div>
                </div>
                <div className="bg-dark-900/50 rounded-lg p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-yellow-400">8%</div>
                  <div className="text-xs text-gray-400">Repeat Rate</div>
                </div>
                <div className="bg-dark-900/50 rounded-lg p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-orange-400">70%</div>
                  <div className="text-xs text-gray-400">Ad Waste</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300">
                They burn ₹50L/month on Meta/Google ads. Every customer is a stranger.
                <span className="text-red-400 font-semibold"> No data, no repeat, no loyalty.</span>
              </p>
            </motion.div>

            {/* Three failure modes */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-8">
              <FeatureCard
                icon={DollarSign}
                title="Burn Money on Ads"
                description="Pay ₹500+ per customer to Meta/Google. 70% wasted on wrong audience."
              />
              <FeatureCard
                icon={BarChart3}
                title="Zero Customer Data"
                description="Customers disappear after purchase. No email, no phone, no history."
              />
              <FeatureCard
                icon={UsersRound}
                title="No Repeat Customers"
                description="One-time buyers. CAC never decreases. CAC > LTV. Unsustainable."
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-900/30">
              <p className="text-lg md:text-xl font-semibold text-red-400">
                Result: <span className="text-white">80% of SMBs fail within 5 years.</span>
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 3: Positioning */}
        <Slide id="positioning" className="bg-dark-900">
          <div className="max-w-5xl mx-auto">
            <SlideTitle icon={Award} subtitle="What REZ is, and what REZ is NOT">
              Our Positioning
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 md:p-12 mb-8 bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/30 text-center">
              <blockquote className="text-2xl md:text-4xl font-bold gradient-text italic">
                "REZ only earns more when merchants grow."
              </blockquote>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-2 border-primary-500/50">
                <div className="text-primary-500 text-sm font-semibold mb-2">WE ARE</div>
                <div className="text-xl md:text-2xl font-bold mb-2">Merchant-owned commerce intelligence</div>
                <div className="text-sm text-gray-400">Behavioral graph of local commerce</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6">
                <div className="text-red-400 text-sm font-semibold mb-2">WE ARE NOT</div>
                <div className="text-xl md:text-2xl font-bold mb-2">QR startup, wallet app, loyalty program</div>
                <div className="text-sm text-gray-400">We don't compete on payments. We win on relationships.</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-base md:text-lg text-gray-400">
                Aggregators own the <span className="text-white font-semibold">transaction</span>.<br />
                REZ owns the <span className="text-primary-400 font-semibold">relationship</span>.
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 4: Why Now */}
        <Slide id="why-now" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Zap} subtitle="The timing is RIGHT. Merchants are DESPERATE.">
              Why Now?
            </SlideTitle>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-12">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-green-500 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-green-400">UPI Ready</h3>
                <div className="text-2xl md:text-3xl font-black mb-2">22.6B</div>
                <div className="text-sm text-gray-400">transactions/month</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-blue-500 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-400">SMB Digitization</h3>
                <div className="text-base md:text-lg font-bold mb-2 mt-4">Merchants want</div>
                <div className="text-sm text-gray-400">direct channels</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-purple-500 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-purple-400">AI Infrastructure</h3>
                <div className="text-2xl md:text-3xl font-black mb-2">90%</div>
                <div className="text-sm text-gray-400">cheaper ML inference</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/30 text-center">
              <p className="text-lg md:text-xl text-gray-300">
                The timing is <span className="text-primary-400 font-bold">RIGHT</span>.
                Merchants are <span className="text-red-400 font-bold">DESPERATE</span>.
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 5: What We're Building */}
        <Slide id="building" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Sparkles} subtitle="The behavioral graph of local commerce.">
              What We're Building
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-12 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30">
              <h3 className="text-lg font-bold mb-6">How It Works</h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
                <div className="glass rounded-xl p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-2">🏪</div>
                  <div className="font-bold mb-1">Merchant</div>
                  <div className="text-xs md:text-sm text-primary-400">Pays 5%</div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary-500 mx-auto hidden md:block" />
                <div className="glass rounded-xl p-4 md:p-6 border-2 border-primary-500/50">
                  <div className="text-3xl md:text-4xl mb-2">💰</div>
                  <div className="font-bold mb-1">REZ</div>
                  <div className="text-xs md:text-sm text-primary-400">Gives 5% Cashback</div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary-500 mx-auto hidden md:block" />
                <div className="glass rounded-xl p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-2">👤</div>
                  <div className="font-bold mb-1">Customer</div>
                  <div className="text-xs md:text-sm text-primary-400">+ Social Reward</div>
                </div>
              </div>

              <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
                <span className="text-primary-400 font-semibold">Merchant-funded.</span> Zero burn. No VC subsidy.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold mb-4">How REZ is Different:</h3>
              <div className="space-y-3">
                {[
                  'Merchant pays 5% → Customer gets 5% cashback',
                  'Customer shares on Instagram/YouTube → Gets extra BRAND COINS',
                  'Every transaction → AI learns behavior',
                  'Repeat customers → Merchant grows → REZ grows',
                  'No burning VC money. Self-sustaining loop.'
                ].map((line, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 6: Rewards Loop */}
        <Slide id="loop" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Award} subtitle='"The closed-loop economy. No VC money burned. Self-sustaining."'>
              Merchant-Funded Rewards Loop
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-center text-center">
                <div className="glass rounded-xl p-3 md:p-4">
                  <div className="text-2xl md:text-3xl mb-1">🏪</div>
                  <div className="text-xs md:text-sm font-bold">Merchant</div>
                  <div className="text-xs text-primary-400">Pays 5%</div>
                </div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-primary-500 mx-auto hidden md:block" />
                <div className="glass rounded-xl p-3 md:p-4 border-2 border-primary-500/50">
                  <div className="text-2xl md:text-3xl mb-1">💎</div>
                  <div className="text-xs md:text-sm font-bold">REZ Coins</div>
                  <div className="text-xs text-primary-400">5% Cashback</div>
                </div>
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-primary-500 mx-auto hidden md:block" />
                <div className="glass rounded-xl p-3 md:p-4">
                  <div className="text-2xl md:text-3xl mb-1">👤</div>
                  <div className="text-xs md:text-sm font-bold">Customer</div>
                  <div className="text-xs text-primary-400">Saves 5%+</div>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-xs md:text-sm">
                → Shares on IG/YT → +Extra Coins (loop continues)
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-6">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 border-l-4 border-primary-500">
                <h3 className="text-lg font-bold mb-4 text-primary-400">MERCHANT BENEFITS</h3>
                <div className="space-y-2">
                  {['Own Customer Data', 'Repeat Customers', 'AI Predictions', 'Cheaper than Ads'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-bold mb-4 text-green-400">CONSUMER BENEFITS</h3>
                <div className="space-y-2">
                  {['Earn 5%+ Back', 'Redeem Anywhere', 'Social Rewards', 'Save Every Time'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-6 text-xs md:text-sm text-gray-400">
              <span className="text-primary-400 font-semibold">Network Effect:</span> More merchants → More to earn → More consumers → More value → More merchants
            </motion.div>
          </div>
        </Slide>

        {/* Slide 7: Network */}
        <Slide id="network" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Globe} subtitle='"Like a credit card works because you can use it everywhere."'>
              Every Merchant. One Network.
            </SlideTitle>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '🍽️', name: 'Restaurants & Cafes' },
                { icon: '💇', name: 'Salons & Spas' },
                { icon: '🛒', name: 'Retail & Grocery' },
                { icon: '💪', name: 'Fitness & Gyms' },
                { icon: '⚕️', name: 'Clinics & Pharmacies' },
                { icon: '🏨', name: 'Hotels & Stays' },
              ].map((cat, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass rounded-xl p-6 text-center hover:bg-dark-700/30 transition-colors">
                  <div className="text-3xl md:text-4xl mb-2">{cat.icon}</div>
                  <div className="text-sm md:text-base font-semibold">{cat.name}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-8">
              <p className="text-lg md:text-xl text-gray-300">
                One QR code. One wallet. One loyalty program. <span className="text-primary-400 font-semibold">Works everywhere.</span>
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 8: REZ Intelligence */}
        <Slide id="intelligence" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Sparkles} subtitle='"The AI that never stops learning."'>
              REZ Intelligence
            </SlideTitle>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center border-t-4 border-primary-500">
                <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text">LEARNS</h3>
                <div className="text-3xl md:text-4xl font-black mt-4 mb-2">Every</div>
                <div className="text-sm text-gray-400">transaction</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center border-t-4 border-primary-500">
                <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text">OPTIMIZES</h3>
                <div className="text-3xl md:text-4xl font-black mt-4 mb-2">Every</div>
                <div className="text-sm text-gray-400">pricing</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center border-t-4 border-primary-500">
                <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text">AUTOMATES</h3>
                <div className="text-3xl md:text-4xl font-black mt-4 mb-2">Every</div>
                <div className="text-sm text-gray-400">offer</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-primary-500/10 to-transparent border-l-4 border-primary-500 text-center">
              <p className="text-base md:text-lg italic text-gray-300">
                "The longer REZ operates in a locality, the stronger the intelligence advantage becomes."
              </p>
            </motion.div>

            {/* Capability timeline */}
            <motion.div variants={fadeInUp} className="mt-8 glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold mb-4">AI Capability Timeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-dark-900/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-primary-400 font-semibold">MONTH 3</div>
                  <div className="text-sm mt-1">Churn prediction: 15% accuracy</div>
                </div>
                <div className="bg-dark-900/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-primary-400 font-semibold">MONTH 6</div>
                  <div className="text-sm mt-1">Churn prediction: 78% accuracy</div>
                </div>
                <div className="bg-dark-900/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-primary-400 font-semibold">MONTH 12</div>
                  <div className="text-sm mt-1">Demand forecast: 85% accuracy</div>
                </div>
                <div className="bg-dark-900/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-primary-400 font-semibold">YEAR 2+</div>
                  <div className="text-sm mt-1">City-wide patterns</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 9: AI Gets Smarter */}
        <Slide id="ai-smarter" className="bg-dark-900">
          <div className="max-w-4xl mx-auto">
            <SlideTitle icon={TrendingUp} subtitle="Concrete examples of REZ Intelligence in action">
              AI Gets Smarter
            </SlideTitle>

            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="text-5xl md:text-7xl font-black gradient-text mb-2">78%</div>
              <p className="text-lg md:text-xl text-gray-300">
                churn prediction accuracy in 6 months.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-10 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30">
              <p className="text-base md:text-lg text-gray-300 mb-4">Example in production:</p>
              <blockquote className="text-xl md:text-2xl text-white italic font-semibold mb-4">
                "Priya hasn't visited in 12 days"
              </blockquote>
              <div className="flex items-center gap-4">
                <ArrowRight className="w-5 h-5 text-primary-500" />
                <span className="text-base md:text-lg text-primary-400 font-semibold">21% conversion on retention offer</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 text-center text-sm md:text-base text-gray-400">
              The AI model improves with every transaction. The longer REZ operates, the harder it is to replicate.
            </motion.div>
          </div>
        </Slide>

        {/* Slide 10: Market */}
        <Slide id="market" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Globe} subtitle='"India has millions of merchants. Almost none own their customer relationships."'>
              The Market
            </SlideTitle>

            {/* TAM/SAM callouts */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary-500">
                <div className="text-sm text-primary-400 uppercase tracking-wider mb-2">Total Addressable Market</div>
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">₹42 Lakh Cr</div>
                <div className="text-gray-400 text-sm">India SMB commerce & services</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center border-l-4 border-blue-500">
                <div className="text-sm text-blue-400 uppercase tracking-wider mb-2">Serviceable Addressable Market</div>
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">₹8.4 Lakh Cr</div>
                <div className="text-gray-400 text-sm">T2-T3 SMBs we can realistically reach</div>
              </motion.div>
            </motion.div>

            {/* City-level table */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold mb-4">City-Level Targets</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-700">
                      <th className="text-left p-3 text-primary-400 font-semibold">City</th>
                      <th className="text-right p-3 text-primary-400 font-semibold">SMBs</th>
                      <th className="text-right p-3 text-primary-400 font-semibold">Year 1 Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700">
                    <tr><td className="p-3 font-medium">Bangalore</td><td className="p-3 text-right text-gray-300">280,000</td><td className="p-3 text-right text-primary-400 font-bold">2,000</td></tr>
                    <tr><td className="p-3 font-medium">Mumbai</td><td className="p-3 text-right text-gray-300">350,000</td><td className="p-3 text-right text-gray-300">3,000</td></tr>
                    <tr><td className="p-3 font-medium">Delhi</td><td className="p-3 text-right text-gray-300">400,000</td><td className="p-3 text-right text-gray-300">3,000</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 11: Competition */}
        <Slide id="competition" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Award} subtitle="Aggregators own the transaction. REZ owns the relationship.">
              The Competition
            </SlideTitle>

            <motion.div variants={fadeInUp} className="overflow-x-auto mb-8">
              <table className="w-full glass rounded-2xl overflow-hidden">
                <thead className="bg-dark-800">
                  <tr>
                    <th className="text-left p-4 font-semibold">Dimension</th>
                    <th className="text-left p-4 font-semibold text-red-400">Aggregators</th>
                    <th className="text-left p-4 font-semibold text-primary-400">REZ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-700">
                  <tr><td className="p-4 font-medium">Commission</td><td className="p-4 text-red-400">25%</td><td className="p-4 text-primary-400 font-bold">5%</td></tr>
                  <tr><td className="p-4 font-medium">Owns Customer Data</td><td className="p-4 text-red-400">No</td><td className="p-4 text-green-400 font-bold">Yes</td></tr>
                  <tr><td className="p-4 font-medium">Repeat Behavior</td><td className="p-4 text-red-400">Aggregated away</td><td className="p-4 text-primary-400">Merchant-owned</td></tr>
                  <tr><td className="p-4 font-medium">AI Insights</td><td className="p-4 text-red-400">Black-box</td><td className="p-4 text-primary-400">Transparent</td></tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
              <h3 className="text-lg font-bold mb-3 text-green-400">The Moat</h3>
              <p className="text-base md:text-lg text-gray-300 mb-3">
                Aggregators <span className="text-red-400">can't copy this</span> without cannibalizing their 25% commission.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Adding merchant-owned loyalty would destroy their own business model. They are structurally locked out.
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 12: How We Earn */}
        <Slide id="earn" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={DollarSign} subtitle="Merchant-funded. Performance-based. Self-sustaining.">
              How We Earn
            </SlideTitle>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-2 border-primary-500/50">
                <div className="text-primary-500 text-sm font-semibold mb-2">STREAM 1 (PRIMARY)</div>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">5%</div>
                <div className="text-lg font-semibold mb-1">Core Transaction Fee</div>
                <div className="text-sm text-gray-400">All REZ-powered transactions</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8">
                <div className="text-primary-500 text-sm font-semibold mb-2">STREAM 2 (UPSELL)</div>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">+5%</div>
                <div className="text-lg font-semibold mb-1">Promoted Sales Fee</div>
                <div className="text-sm text-gray-400">ONLY on AI-driven conversions</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/30">
              <h3 className="text-lg font-bold mb-4">Why Merchants Adopt</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black gradient-text mb-1">3x</div>
                  <div className="text-sm text-gray-400">higher conversion than manual targeting</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black gradient-text mb-1">5%</div>
                  <div className="text-sm text-gray-400">vs 25% aggregators take</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black gradient-text mb-1">$0</div>
                  <div className="text-sm text-gray-400">upfront cost — performance-based</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 text-center text-sm text-gray-400">
              <span className="text-primary-400 font-semibold">Stream 3 (Future):</span> SaaS subscriptions ₹299-₹2,999/mo for advanced AI, white-label, and API access.
            </motion.div>
          </div>
        </Slide>

        {/* Slide 13: Cluster Economics */}
        <Slide id="cluster" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={MapPin} subtitle='"The unit of scale is one neighborhood cluster."'>
              Cluster Economics
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30">
              <pre className="text-xs md:text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`MONTH 1-2: 30 merchants,   300 consumers    (Foundation)
MONTH 3-4: 100 merchants,  2,000 consumers   (Network Effects)
MONTH 5-6: 250 merchants,  6,000 consumers   (Density — 35%+ repeat)
MONTH 7-8: 400 merchants,  12,000 consumers  (PROFITABLE)`}
              </pre>
              <p className="text-center text-base md:text-lg text-primary-400 font-semibold mt-6">
                Each cluster becomes self-sustaining in 6-8 months.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={Store} value="30" label="Merchants (M1-2)" />
              <StatCard icon={Users} value="100" label="Merchants (M3-4)" />
              <StatCard icon={Coins} value="250" label="Merchants (M5-6)" />
              <StatCard icon={Award} value="400" label="Profitable (M7-8)" />
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 text-center text-sm md:text-base text-gray-400">
              The unit of scale isn't "India" — it's <span className="text-primary-400 font-semibold">one neighborhood cluster</span>.
              Prove the model there, then replicate.
            </motion.div>
          </div>
        </Slide>

        {/* Slide 14: Unit Economics */}
        <Slide id="economics" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={BarChart3} subtitle="AOV, ARPU, LTV, CAC — all transparent.">
              Unit Economics
            </SlideTitle>

            {/* Headline metrics — canonical upstream numbers */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-xl p-4 text-center border-2 border-primary-500/50">
                <div className="text-3xl md:text-4xl font-black text-primary-400 mb-1">₹650</div>
                <div className="text-sm text-gray-400">AOV</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-4 text-center border-2 border-blue-500/50">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">₹195</div>
                <div className="text-sm text-gray-400">ARPU / month</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-4 text-center border-2 border-green-500/50">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">₹3,900</div>
                <div className="text-sm text-gray-400">LTV</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-4 text-center border-2 border-purple-500/50">
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-1">₹76</div>
                <div className="text-sm text-gray-400">CAC</div>
              </motion.div>
            </motion.div>

            {/* LTV/CAC ratio hero */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 text-center">
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">LTV : CAC Ratio</div>
              <div className="text-5xl md:text-7xl font-black gradient-text mb-2">51.3x</div>
              <div className="text-sm text-gray-400">Industry-leading ratio for SMB SaaS</div>
            </motion.div>

            {/* Why this matters */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold mb-4">Why This Matters</h3>
              <p className="text-sm md:text-base text-gray-300">
                With <span className="text-primary-400 font-semibold">CAC ₹76</span> and <span className="text-primary-400 font-semibold">LTV ₹3,900</span>,
                every rupee spent on merchant acquisition returns <span className="text-primary-400 font-semibold">₹51</span> over merchant lifetime.
                This means we can afford to spend aggressively on growth — and still be wildly profitable per merchant.
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 15: The Goal */}
        <Slide id="goal" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Target} subtitle="Compounding density. Exponential growth.">
              The Goal
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-700">
                      <th className="text-left p-3 md:p-4 text-primary-400 font-semibold">Year</th>
                      <th className="text-right p-3 md:p-4 text-primary-400 font-semibold">Cities</th>
                      <th className="text-right p-3 md:p-4 text-primary-400 font-semibold">Merchants</th>
                      <th className="text-right p-3 md:p-4 text-primary-400 font-semibold">GMV/Month</th>
                      <th className="text-right p-3 md:p-4 text-primary-400 font-semibold">ARR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-700">
                    <tr><td className="p-3 md:p-4 font-bold text-white">Y1</td><td className="p-3 md:p-4 text-right">5</td><td className="p-3 md:p-4 text-right">2,000</td><td className="p-3 md:p-4 text-right">₹12 Cr</td><td className="p-3 md:p-4 text-right text-primary-400 font-bold">₹11 Cr</td></tr>
                    <tr><td className="p-3 md:p-4 font-bold text-white">Y2</td><td className="p-3 md:p-4 text-right">32</td><td className="p-3 md:p-4 text-right">10,000</td><td className="p-3 md:p-4 text-right">₹64 Cr</td><td className="p-3 md:p-4 text-right text-primary-400 font-bold">₹55 Cr</td></tr>
                    <tr><td className="p-3 md:p-4 font-bold text-white">Y3</td><td className="p-3 md:p-4 text-right">120</td><td className="p-3 md:p-4 text-right">40,000</td><td className="p-3 md:p-4 text-right">₹240 Cr</td><td className="p-3 md:p-4 text-right text-primary-400 font-bold">₹200 Cr</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/30 text-center">
              <p className="text-base md:text-lg text-gray-300">
                Year 1 ARR math: 2,000 merchants × ₹60,000 GMV/mo × <span className="text-primary-400 font-semibold">5% core + 2% promoted</span> + ₹300 SaaS = <span className="gradient-text font-bold">₹10.8 Cr ARR</span>
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 16: Why Growth Accelerates */}
        <Slide id="accelerate" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={TrendingUp} subtitle="The more REZ grows, the faster REZ grows.">
              Why Growth Accelerates
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30">
              <pre className="text-xs md:text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`FIRST CLUSTER:   8-10 months  (learning)
SECOND CLUSTER:  6 months     (playbook works)
THIRD CLUSTER:   4 months     (referrals emerge)
5+ CITIES:       Growth becomes self-reinforcing`}
              </pre>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 text-center border-t-4 border-green-500">
                <div className="text-xs text-green-400 font-semibold mb-1">3-5 CLUSTERS</div>
                <div className="text-2xl md:text-3xl font-black mt-2 mb-1">2x</div>
                <div className="text-sm text-gray-400">faster time-to-profit</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 text-center border-t-4 border-blue-500">
                <div className="text-xs text-blue-400 font-semibold mb-1">10+ CLUSTERS</div>
                <div className="text-base md:text-lg font-bold mt-2 mb-1">Consumer</div>
                <div className="text-sm text-gray-400">loop emerges</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 text-center border-t-4 border-purple-500">
                <div className="text-xs text-purple-400 font-semibold mb-1">5+ CITIES</div>
                <div className="text-base md:text-lg font-bold mt-2 mb-1">AI</div>
                <div className="text-sm text-gray-400">compounds exponentially</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-8">
              <p className="text-lg md:text-xl italic text-primary-400 font-semibold">
                "This is NOT linear growth. This is COMPOUNDING DENSITY."
              </p>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 17: Traction */}
        <Slide id="traction" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={TrendingUp} subtitle="What we have today. Beta in Bangalore, India.">
              The Traction
            </SlideTitle>

            <motion.div variants={fadeInUp} className="text-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold">
                📍 Bangalore, India
              </span>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center border-2 border-primary-500/50">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">10</div>
                <div className="text-sm text-gray-400">Merchants (beta)</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center border-2 border-blue-500/50">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">200</div>
                <div className="text-sm text-gray-400">Users</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center border-2 border-green-500/50">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">28%</div>
                <div className="text-sm text-gray-400">Repeat Rate</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 text-center border-2 border-purple-500/50">
                <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">+62</div>
                <div className="text-sm text-gray-400">Merchant NPS</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold mb-4">Live in Production</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Core platform', 'Reward redemption', 'AI predictions', 'Merchant retention'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center text-base md:text-lg text-gray-400">
              We've proven <span className="text-primary-400 font-semibold">retention mechanics work</span> at small scale.
              This raise funds cluster expansion to validate the <span className="text-primary-400 font-semibold">density model</span>.
            </motion.div>
          </div>
        </Slide>

        {/* Slide 18: The Founder */}
        <Slide id="founder" className="bg-dark-800">
          <div className="max-w-4xl mx-auto">
            <SlideTitle icon={Users} subtitle="The person behind REZ">
              The Founder
            </SlideTitle>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 md:p-10 text-center mb-8 bg-gradient-to-r from-primary-500/10 to-transparent border-l-4 border-primary-500">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-4 flex items-center justify-center text-4xl font-bold">R</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Rejaul Karim</h3>
              <p className="text-primary-400 font-semibold mb-4">Founder & CEO</p>
              <div className="text-left max-w-2xl mx-auto space-y-2 text-sm md:text-base text-gray-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Former CTO at cybersecurity startup</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Built digital marketing company (India + GCC)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Worked with restaurants, salons, retail SMBs across India</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 text-center">
              <blockquote className="text-lg md:text-2xl italic text-gray-300">
                "I kept seeing merchants spend money to acquire customers…<br />
                <span className="text-primary-400 font-semibold">but never own the relationship.</span><br />
                That became REZ."
              </blockquote>
              <p className="text-sm text-gray-500 mt-4">— Rejaul Karim, Founder</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 text-center text-xs md:text-sm text-gray-500">
              Executive team (CTO, Head of Growth, Bangalore Ops Lead) to be hired with this round. <a href="mailto:investors@rez.money" className="text-primary-400 hover:underline">Detailed hiring plan in data room →</a>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 19: The GTM */}
        <Slide id="gtm" className="bg-dark-900">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={MapPin} subtitle="MAP → ACTIVATE → RETAIN. Repeatable. Documented. Tested.">
              The GTM
            </SlideTitle>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-12">
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-primary-500">
                <div className="text-xs text-primary-400 font-semibold mb-2">PHASE 1</div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">MAP</h3>
                <div className="text-sm text-gray-300">Area scanning, merchant discovery</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
                <div className="text-xs text-blue-400 font-semibold mb-2">PHASE 2</div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">ACTIVATE</h3>
                <div className="text-sm text-gray-300">QR setup, staff training</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 border-l-4 border-green-500">
                <div className="text-xs text-green-400 font-semibold mb-2">PHASE 3</div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">RETAIN</h3>
                <div className="text-sm text-gray-300">AI insights, referrals</div>
              </motion.div>
            </motion.div>

            {/* Bangalore launch plan */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-6 bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/30">
              <h3 className="text-lg font-bold mb-4">Bangalore Launch Plan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-primary-400 font-semibold mb-2">4 ZONES</div>
                  <div className="text-sm">BTM · HSR · Koramangala · Jayanagar</div>
                </div>
                <div>
                  <div className="text-xs text-primary-400 font-semibold mb-2">500+ MERCHANTS</div>
                  <div className="text-sm">Mapped and ready for activation</div>
                </div>
                <div>
                  <div className="text-xs text-primary-400 font-semibold mb-2">10 COLLEGE FESTS</div>
                  <div className="text-sm">Month 1 consumer acquisition</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center text-sm md:text-base text-gray-400">
              12 acquisition channels including college ambassadors, WhatsApp viral loops, merchant referrals. <a href="mailto:investors@rez.money" className="text-primary-400 hover:underline">Full plan in marketing.html →</a>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 20: The Ask */}
        <Slide id="ask" className="bg-dark-800">
          <div className="max-w-5xl mx-auto text-center">
            <SlideTitle icon={Heart} subtitle="₹2 Crores to prove the density model in Bangalore">
              The Ask
            </SlideTitle>

            <motion.div variants={fadeInUp} className="mb-10">
              <div className="text-5xl md:text-7xl font-black gradient-text mb-2">₹2 Crores</div>
              <div className="text-lg md:text-xl text-gray-400">Pre-Seed Round</div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4 mb-10 text-left">
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-l-4 border-primary-500">
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">₹140L</div>
                <div className="text-sm text-gray-400 mb-1">70%</div>
                <div className="font-semibold">Cluster Activation & Growth</div>
                <div className="text-xs text-gray-500 mt-1">Ground team, merchant success, support</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-l-4 border-blue-500">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">₹40L</div>
                <div className="text-sm text-gray-400 mb-1">20%</div>
                <div className="font-semibold">Product & AI</div>
                <div className="text-xs text-gray-500 mt-1">Platform improvements, ML models</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-l-4 border-green-500">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-1">₹20L</div>
                <div className="text-sm text-gray-400 mb-1">10%</div>
                <div className="font-semibold">Operations</div>
                <div className="text-xs text-gray-500 mt-1">Legal, compliance, admin</div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-6 bg-primary-500/10 border border-primary-500/30">
              <h3 className="text-xl font-bold mb-4">18-Month Milestones</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">2,000 merchants</div>
                    <div className="text-xs text-gray-400">in Bangalore</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">40%+ repeat rate</div>
                    <div className="text-xs text-gray-400">validated retention</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">5 cities launched</div>
                    <div className="text-xs text-gray-400">replication proven</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-sm md:text-base text-gray-400 mb-6">
              SAFE structure · ₹20L minimum check · Detailed terms in data room
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a
                href="/ask-20l"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-500/40 bg-primary-500/10 hover:bg-primary-500/20 rounded-xl font-semibold text-primary-400 transition-all"
              >
                <Rocket className="w-5 h-5" />
                Smaller Bridge Round? See the ₹20 Lakh App-Launch Round →
              </a>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 21: Legal & Compliance */}
        <Slide id="legal" className="bg-dark-800">
          <div className="max-w-6xl mx-auto">
            <SlideTitle icon={Shield} subtitle="A rewards & loyalty wallet, not a payment instrument. No RBI PPI license required today.">
              Legal & Compliance
            </SlideTitle>

            {/* 30-second investor answer — callout box */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 md:p-8 mb-8 bg-primary-500/10 border border-primary-500/30">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">30-Second Answer for Investors</div>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed italic">
                    &ldquo;REZ Wallet is a closed-loop rewards and loyalty wallet. It stores only non-transferable promotional rewards and cashback earned within the REZ ecosystem. It does not hold customer funds, allow peer-to-peer transfers, or function as a payment instrument. Therefore, we are not currently operating a regulated payment wallet. As we expand into regulated financial services, we will do so through appropriate licenses or partnerships with RBI-regulated financial institutions.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What REZ Wallet does vs doesn't do */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Does */}
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-l-4 border-green-500 text-left">
                <h3 className="text-lg font-bold mb-3 text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What REZ Wallet Does
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Non-transferable rewards</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Cashback credits (merchant-funded 5%)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Promotional credits</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Merchant rewards</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Loyalty points (REZ Coins)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Redeemable only within REZ merchant network</li>
                </ul>
              </motion.div>

              {/* Does NOT */}
              <motion.div variants={fadeInUp} className="glass rounded-xl p-6 border-l-4 border-red-500 text-left">
                <h3 className="text-lg font-bold mb-3 text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  What REZ Wallet Does NOT Do
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> Store INR deposits</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> Allow wallet top-ups by users</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> P2P transfers between users</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> Bank transfers</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> Cash withdrawal to bank account</li>
                  <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> Conversion to fiat or crypto</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Phased regulatory roadmap */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Phased Regulatory Roadmap</h3>
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-4">
                <motion.div variants={fadeInUp} className="glass rounded-xl p-5 text-left">
                  <div className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Phase 1 — Now</div>
                  <h4 className="font-bold mb-2">Loyalty & Rewards</h4>
                  <p className="text-sm text-gray-400 mb-3">Closed-loop merchant-funded cashback. No regulated activity.</p>
                  <div className="text-xs text-gray-500">No RBI license required</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="glass rounded-xl p-5 text-left">
                  <div className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Phase 2 — Year 2</div>
                  <h4 className="font-bold mb-2">Partner with Regulated Entities</h4>
                  <p className="text-sm text-gray-400 mb-3">UPI, stored-value wallet, cards via licensed partners.</p>
                  <div className="text-xs text-gray-500">Partner-led, not license-led</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="glass rounded-xl p-5 text-left">
                  <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wide">Phase 3 — Year 3+</div>
                  <h4 className="font-bold mb-2">Evaluate Own Licenses</h4>
                  <p className="text-sm text-gray-400 mb-3">PPI, PA, NBFC — only if commercially justified.</p>
                  <div className="text-xs text-gray-500">Strategic, not rushed</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Compliance Stack — internal architecture */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-6">
              <h3 className="text-base font-bold mb-3 text-center">Built-In Compliance Stack (Even with Partners)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs text-gray-400">
                <div className="glass rounded p-2">KYC Orchestration</div>
                <div className="glass rounded p-2">AML Monitoring</div>
                <div className="glass rounded p-2">Fraud Detection</div>
                <div className="glass rounded p-2">Transaction Limits</div>
                <div className="glass rounded p-2">Audit Logs</div>
                <div className="glass rounded p-2">Encryption at Rest</div>
                <div className="glass rounded p-2">Data Privacy (DPDP)</div>
                <div className="glass rounded p-2">Reconciliation</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-6 text-xs text-gray-500">
              Detailed regulatory mapping in <a href="/regulatory-strategy" className="text-primary-400 hover:underline">/regulatory-strategy</a> (data room) · Indian fintech counsel review pre-Series Seed
            </motion.div>
          </div>
        </Slide>

        {/* Slide 22: Close */}
        <Slide id="close" className="bg-gradient-to-b from-dark-900 via-dark-800 to-primary-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-black mb-6">
                Not building an app.<br />
                <span className="gradient-text">Building the behavioral graph of local commerce.</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-3 mb-10">
                <blockquote className="text-lg md:text-xl text-gray-300 italic">
                  "REZ becomes stronger as merchant density increases."
                </blockquote>
                <blockquote className="text-lg md:text-xl text-gray-300 italic">
                  "This is NOT linear growth. This is <span className="text-primary-400 font-semibold">COMPOUNDING DENSITY</span>."
                </blockquote>
                <blockquote className="text-lg md:text-xl text-gray-300 italic">
                  "We raise ₹2 Cr to prove the density model in Bangalore, then replicate."
                </blockquote>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-4">₹2 Crores</div>
                <p className="text-gray-400 mb-6">To prove the density model in Bangalore, then replicate cluster-by-cluster</p>
                <a
                  href="mailto:investors@rez.money"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold transition-all text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <a href="mailto:investors@rez.money" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  investors@rez.money
                </a>
                <a href="/ask-20l" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                  <Rocket className="w-4 h-4" />
                  ₹20L Bridge Round →
                </a>
                <a href="https://rez.money" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  rez.money
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bangalore, India
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Slide>
      </main>


      {/* Navigation */}
      <Navigation current={currentSlide} total={slides.length} onPrev={prevSlide} onNext={nextSlide} />
      <SlideIndicator current={currentSlide} total={slides.length} onGoTo={goToSlide} />

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-dark-800">
        <p>© 2026 REZ. Confidential Investor Deck. Version 3.0 · May 2026 · Bangalore, India</p>
      </footer>
    </div>
  )
}
