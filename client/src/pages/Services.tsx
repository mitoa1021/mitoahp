import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      <section className="py-20 md:py-32">
        <div className="container max-w-6xl space-y-20">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-6xl md:text-7xl font-extrabold text-gray-200 uppercase leading-none" style={{ letterSpacing: '0.05em' }}>SERVICE</p>
            <h2 className="-mt-6 md:-mt-8 text-4xl md:text-5xl font-extrabold text-foreground" style={{ fontFamily: "'Zen Kaku Gothic New', 'Inter', sans-serif" }}>
              事業内容
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.img
                src="/PC&iPhone.PNG"
                alt="MiToA Chatbot Studioの画面イメージ"
                className="w-full h-auto"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              />
            </div>
            <motion.div
              className="order-1 md:order-2 space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href="/services/chatbot" className="group space-y-3 block">
                <span className="text-xs uppercase tracking-[0.4em] text-foreground/50">AI CHATBOT</span>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground transition-transform duration-300 group-hover:scale-105">
                    MiToA Chatbot Studio
                  </h2>
                  <ArrowRight className="h-8 w-8 text-foreground transition-transform duration-300 group-hover:translate-x-2" />
                </div>
                <p className="text-base text-foreground/70 leading-relaxed">
                  “答えられなかった”をチャンスに変える。管理画面で回答するだけでAIが賢くなり続ける、運用負担ゼロのチャットボット。
                  AIの成長に最適化された革新的なサービスです。
                </p>
              </Link>
              <ul className="space-y-3 text-sm text-foreground/80">
                {["管理画面からの回答登録で即時学習・アップデート", "カスタマーサポート業務、社内問い合わせ対応に最適", "問い合わせ用公式LINEやWebサイトへの即時展開が可能", "Teams・Slack・LINE WORKSなど既存システムとの柔軟な連携"].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/services/chatbot">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-foreground/30 text-foreground/70 hover:bg-foreground/5"
                  >
                    詳細を見る <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
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
              className="order-1 md:order-2 space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.4em] text-foreground/50">AI PLATFORM</span>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI活用プラットフォーム</h2>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed">
                  暮らしの中にAIを。老後の人生にゆとりと彩りを。
                  シニア世代を中心に暮らしをより良くするための生成AI活用プラットフォームを提供しております。
                </p>
              </div>
              <div>
                <Button
                  type="button"
                  disabled
                  variant="outline"
                  className="gap-2 bg-white text-foreground/60 border-foreground/30 disabled:bg-white disabled:text-foreground/60 disabled:border-foreground/30 disabled:opacity-100 disabled:cursor-default"
                >
                  Coming soon...
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div className="flex flex-col gap-6">
              <img src="/logo-white.png" alt="MiToA" className="w-24 h-auto md:w-28 -ml-2 md:-ml-3" />
              <p className="text-xs text-white/40">
                &copy; 2025 株式会社MiToA. All rights reserved.
              </p>
            </div>
            <div className="space-y-5">
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
            <div className="space-y-5">
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
