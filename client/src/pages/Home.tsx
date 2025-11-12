import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { ArrowRight, Sparkles, Clock, Settings, Zap, TrendingUp, Users, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NetworkAnimation from "@/components/NetworkAnimation";

export default function Home() {
  useDocumentTitle();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll for card indicators
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setActiveCardIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)' }}>
        <div className="py-2 flex items-center justify-between pl-0 pr-4 md:pr-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-white.png"
              alt="MiToA"
              className="h-20 md:h-32 w-auto ml-4 md:ml-6"
            />
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-white hover:text-primary transition-colors text-sm font-bold">
              ホーム
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/services" className="text-white hover:text-primary transition-colors text-sm font-bold">
              事業内容
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/contact" className="text-white hover:text-primary transition-colors text-sm font-bold">
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col py-4">
              <Link href="/" className="text-white hover:bg-white/10 px-6 py-3 text-sm font-bold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                ホーム
              </Link>
              <div className="border-t border-white/10 mx-6"></div>
              <Link href="/services" className="text-white hover:bg-white/10 px-6 py-3 text-sm font-bold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                事業内容
              </Link>
              <div className="border-t border-white/10 mx-6"></div>
              <Link href="/contact" className="text-white hover:bg-white/10 px-6 py-3 text-sm font-bold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Network Animation Background */}
        <NetworkAnimation />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <motion.h1
                className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight"
                style={{
                  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.3)',
                  fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif",
                  whiteSpace: 'nowrap'
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                知を整え、AIで回す。
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white leading-relaxed font-medium"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif"
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              >
                小さく始めて大きく効く。実用AIで継続的な改善を。
              </motion.p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              {/* Right side - previously had ai-brain-new image */}
            </div>
          </div>
        </div>
      </section>

      {/* MiToA Product Section */}
      <section className="py-20 md:py-32 bg-zinc-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-sm font-bold mb-4">OUR FLAGSHIP PRODUCT</p>
                <div className="mb-6 p-6 bg-zinc-800 rounded-xl border-l-4 border-white">
                  <p className="text-2xl md:text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
                    自動で賢くなるAIチャットボット
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-300 mt-2" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
                    MiToA
                  </p>
                </div>
              </motion.div>
              <motion.p
                className="text-lg text-gray-300 mb-6 leading-relaxed font-medium"
                style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                社員の知識を会社の資産に変えるMiToA Chatbot Studio。
              </motion.p>
              <motion.ul
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  "対応できなかった質問を自動収集",
                  "質問に答えると自動で育つ",
                  "エンジニア不要で運用可能",
                  "カスタマーサポートや社内FAQ対応に利用可能"
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white mt-1">✓</span>
                    <span className="text-gray-300" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    size="lg"
                    className="gap-2 bg-transparent text-white hover:bg-white hover:text-black border border-white transition-all duration-300 font-bold shadow-lg hover:shadow-2xl"
                  >
                    導入相談をする <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="/hero-image.png"
                alt="MiToA Platform"
                className="rounded-xl shadow-2xl border border-border w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-6xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-6xl md:text-7xl font-extrabold text-gray-200 uppercase leading-none" style={{ letterSpacing: '0.05em' }}>SERVICE</p>
            <h2 className="-mt-6 md:-mt-8 text-4xl md:text-5xl font-extrabold text-gray-900" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>事業内容</h2>
          </motion.div>

          <div className="space-y-32">
            {/* AIチャットbot開発 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="/PC&iPhone.PNG"
                  alt="MiToA Chatbot Studioの画面イメージ"
                  className="w-full h-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href="/services/chatbot" className="group block">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-105">
                      MiToA Chatbot Studio
                    </h3>
                    <ArrowRight className="w-8 h-8 text-gray-900 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    “答えられなかった”をチャンスに変える。管理画面で回答するだけでAIが賢くなり続ける、運用負担ゼロのチャットボット。AIの成長に最適化された革新的なサービスです。
                  </p>
                </Link>
              </motion.div>
            </div>

            {/* AI活用プラットフォーム */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 md:order-1 flex items-center justify-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src="/senior_platform.png"
                  alt="AI活用プラットフォーム"
                  className="w-full h-auto rounded-3xl border border-border shadow-lg object-cover"
                />
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">AI活用プラットフォーム</h3>
                  <ArrowRight className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  暮らしの中にAIを。老後の人生にゆとりと彩りを。<br />
                  シニア世代を中心に暮らしをより良くするための生成AI活用プラットフォームを提供しております。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-20 pb-32 md:pt-32 md:pb-48 bg-gray-50 overflow-hidden">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-5xl md:text-6xl font-extrabold text-gray-200 uppercase leading-none" style={{ letterSpacing: '0.05em' }}>OUR STRENGTHS</p>
          <h2 className="-mt-4 md:-mt-6 text-4xl md:text-5xl font-extrabold text-gray-900" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>わたしたちの強み</h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 px-4 md:px-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Card 1 */}
            <div className="flex-shrink-0 w-full snap-center">
              <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-200 to-slate-100 rounded-[3rem] p-8 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative">
                <p className="text-sm text-gray-500 mb-4">技術の民主化</p>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Democratization</h3>

                <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-4">01 - 技術の民主化</p>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        最新AI技術を誰でも使える形に
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        AI活用の難しいところは "使える形"で導入すること
                      </p>
                      <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                        <p className="text-gray-700 text-sm">
                          複雑な導入作業は当社が行い、導入後はお客様自身で簡単に保守・管理できる仕組みを提供します。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Central circle */}
                          <circle cx="100" cy="100" r="30" fill="#4F46E5" opacity="0.2"/>
                          <circle cx="100" cy="100" r="20" fill="#4F46E5"/>

                          {/* Connecting lines and nodes */}
                          <line x1="100" y1="100" x2="150" y2="50" stroke="#4F46E5" strokeWidth="2"/>
                          <circle cx="150" cy="50" r="12" fill="#10B981"/>

                          <line x1="100" y1="100" x2="50" y2="50" stroke="#4F46E5" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="12" fill="#F59E0B"/>

                          <line x1="100" y1="100" x2="150" y2="150" stroke="#4F46E5" strokeWidth="2"/>
                          <circle cx="150" cy="150" r="12" fill="#EF4444"/>

                          <line x1="100" y1="100" x2="50" y2="150" stroke="#4F46E5" strokeWidth="2"/>
                          <circle cx="50" cy="150" r="12" fill="#8B5CF6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 w-full snap-center">
              <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-200 to-slate-100 rounded-[3rem] p-8 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative">
                <p className="text-sm text-gray-500 mb-4">人に寄り添う姿勢</p>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Human-Centered</h3>

                <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-4">02 - 人に寄り添う姿勢</p>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        非エンジニアからシニア世代まで、誰もが活用できる
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        テクノロジーの恩恵を、すべての人に届けます。
                      </p>
                      <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                        <p className="text-gray-700 text-sm">
                          年齢や職種を問わず、誰もが使いやすいサービス、UI・UXを心がけています。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Three people silhouettes */}
                          {/* Person 1 - Young */}
                          <circle cx="60" cy="80" r="18" fill="#10B981"/>
                          <path d="M 40 130 Q 60 100, 80 130" fill="#10B981"/>

                          {/* Person 2 - Middle */}
                          <circle cx="100" cy="70" r="20" fill="#4F46E5"/>
                          <path d="M 78 125 Q 100 90, 122 125" fill="#4F46E5"/>

                          {/* Person 3 - Senior */}
                          <circle cx="140" cy="80" r="18" fill="#F59E0B"/>
                          <path d="M 120 130 Q 140 100, 160 130" fill="#F59E0B"/>

                          {/* Heart in center */}
                          <path d="M 100 140 L 110 130 Q 115 125, 115 120 Q 115 115, 110 115 Q 105 115, 100 120 Q 95 115, 90 115 Q 85 115, 85 120 Q 85 125, 90 130 Z" fill="#EF4444"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 w-full snap-center">
              <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-200 to-slate-100 rounded-[3rem] p-8 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative">
                <p className="text-sm text-gray-500 mb-4">実践主義</p>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Practical</h3>

                <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-4">03 - 実践主義</p>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        小さく始めて大きく効く
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        導入後も成長し続けるサービス設計を心がけます。
                      </p>
                      <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                        <p className="text-gray-700 text-sm">
                          すぐに始められて、継続的に価値を生み出すアプローチを提供します。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Growth stages - 3 bars */}
                          <rect x="30" y="140" width="35" height="40" rx="5" fill="#10B981" opacity="0.7"/>
                          <rect x="80" y="110" width="35" height="70" rx="5" fill="#10B981" opacity="0.85"/>
                          <rect x="130" y="70" width="35" height="110" rx="5" fill="#10B981"/>

                          {/* Upward arrow */}
                          <path d="M 170 50 L 180 60 L 175 60 L 175 80 L 165 80 L 165 60 L 160 60 Z" fill="#4F46E5"/>

                          {/* Circular arrows indicating cycle */}
                          <path d="M 100 30 Q 120 30, 130 40" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round"/>
                          <path d="M 132 38 L 130 40 L 128 38" fill="#F59E0B"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCardIndex === index ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-6xl md:text-7xl font-extrabold text-gray-200 uppercase leading-none" style={{ letterSpacing: '0.05em' }}>ABOUT</p>
            <h2 className="-mt-6 md:-mt-8 text-4xl md:text-5xl font-extrabold text-foreground" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
              わたしたちについて
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed font-medium" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
                情報格差のない社会を目指して。AIを、すべての人の手に届けます。専門知識がなくても、シニア世代でも、誰もが最新技術を活用できる世界を実現します。小さく始めて継続的に成長する実践的なアプローチで、お客様の暮らしとビジネスをより良くします。
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img src="/logo.png" alt="MiToA Logo" className="max-w-sm w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#1a2332' }}>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
                AI導入の「はじめの一歩」をご一緒に。<br />
                MIToAまでお気軽にご相談ください。
              </h2>
            </motion.div>

            {/* Right side - Circle Design */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Background blue circle */}
              <div className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full" style={{ backgroundColor: '#2d3f5f', top: '-1rem', right: '-1rem' }}></div>

              {/* Main orange circle with contact */}
              <Link href="/contact" className="relative z-10">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#ff8c42' }}>
                  <p className="text-xs mb-2 md:text-sm" style={{ color: '#1a2332' }}>お問い合わせ</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2332' }}>Contact</h3>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white md:w-6 md:h-6" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div className="flex flex-col gap-6">
              <img src="/logo-white.png" alt="MiToA" className="w-20 h-auto md:w-24 -ml-2 md:-ml-3" />
              <p className="text-xs text-white/40">
                &copy; 2025 株式会社MiToA. All rights reserved.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">サービス</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/services" className="transition-colors hover:text-primary">
                    AIチャットbot
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-primary">
                    生成AI活用プラットフォーム
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">会社情報</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-primary">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">ご質問・ご相談</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                お客様の課題に合わせた最適なご提案をいたします。まずはお気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
