import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cog, TrendingUp, Users, CheckCircle, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-full md:max-w-[66%] py-2 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 ml-0 md:ml-[-4cm]">
            <img src="/logo.png" alt="MiToA" className="h-12 md:h-24 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/services" className="text-primary font-semibold">
              事業内容
            </Link>
            <Link href="/mitoa" className="text-foreground hover:text-primary transition-colors">
              MiToAのチャットボット
            </Link>
            <Link href="/news" className="text-foreground hover:text-primary transition-colors">
              ニュース
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            事業内容
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            AIチャットbotを活用した業務自動化とDX導入支援で、
            企業の課題を解決し、未来のビジネスを実現します。
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            主要サービス
          </h2>

          {/* Service 1: AI Chatbot */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-12 flex items-center justify-center min-h-80">
                  <Bot className="w-32 h-32 text-primary/30" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  MiToA
                </h3>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  エンジニア不要で運用できる、自動で賢くなるチャットボット。
                  対応できなかった質問を自動で集め、答えるだけで賢くなります。
                  保守・運用コストを抑え、無駄なやり取りを削減します。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">エンジニア不要: 専門知識なしで誰でも運用可能</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">低コスト: 保守・運用費用を大幅削減</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">自動収集: 対応できなかった質問を自動でリスト化</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">AI支援: 回答の下書きを自動作成、確認するだけ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">効率化: 作業時間65%削減、無駄なやり取りを排除</span>
                  </li>
                </ul>
                <Link href="/mitoa">
                  <Button className="gap-2">
                    詳しく見る <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: DX Support */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  DX導入支援
                </h3>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  企業のデジタルトランスフォーメーション全体をサポート。
                  戦略立案から実装、運用まで、
                  一貫したコンサルティングサービスを提供します。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">DX戦略立案・コンサルティング</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">業務プロセス改善</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">システム導入・運用支援</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">人材育成・研修</span>
                  </li>
                </ul>
                <Button className="gap-2">
                  詳しく知る <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-12 flex items-center justify-center min-h-80">
                  <Cog className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Business Automation */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-12 flex items-center justify-center min-h-80">
                  <TrendingUp className="w-32 h-32 text-primary/30" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  業務自動化ソリューション
                </h3>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  定型業務の自動化により、人的リソースを有効活用。
                  生産性向上とコスト削減を同時に実現します。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">RPA導入・運用</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">ワークフロー自動化</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">データ処理の自動化</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">効果測定・最適化</span>
                  </li>
                </ul>
                <Button className="gap-2">
                  詳しく知る <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            実装プロセス
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "ヒアリング", desc: "企業の課題と目標を詳しくお聞きします" },
              { step: "2", title: "提案", desc: "最適なソリューションをご提案します" },
              { step: "3", title: "実装", desc: "プロフェッショナルチームが実装を進めます" },
              { step: "4", title: "運用・改善", desc: "継続的なサポートと最適化を提供します" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            MiToAが選ばれる理由
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">経験豊富なチーム</h3>
                <p className="text-foreground/70">
                  AI・DX分野での豊富な実績と経験を持つプロフェッショナルチーム
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">格安の維持費用</h3>
                <p className="text-foreground/70">
                  導入後エンジニアが不要なため、維持費用を大幅に削減できます
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Cog className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">カスタムソリューション</h3>
                <p className="text-foreground/70">
                  企業ごとの課題に合わせた最適なソリューションを提供
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Bot className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">継続的なサポート</h3>
                <p className="text-foreground/70">
                  導入後も継続的なサポートと改善を提供
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ご質問やご相談はお気軽に
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            AIチャットbotやDX導入についてのご質問、
            ご相談は、いつでもお気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              お問い合わせフォームへ <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="MiToA" className="h-8 w-auto mb-4" />
              <p className="text-sm text-foreground/60">
                AIチャットbotで業務を自動化
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/services" className="hover:text-primary transition-colors">事業内容</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">AIチャットbot</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">DX導入支援</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">会社</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/" className="hover:text-primary transition-colors">ホーム</Link></li>
                <li><Link href="/news" className="hover:text-primary transition-colors">ニュース</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">お問い合わせ</h4>
              <p className="text-sm text-foreground/70">
                ご質問やご相談は、<br />
                お気軽にお問い合わせください。
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 株式会社MiToA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

