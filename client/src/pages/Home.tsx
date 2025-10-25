import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Settings, Zap, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-[66%] py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 ml-[-4cm]">
            <img src="/logo.png" alt="MiToA" className="h-24 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm">
              ホーム
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors text-sm">
              事業内容
            </Link>
            <Link href="/mitoa" className="text-foreground hover:text-primary transition-colors text-sm">
              MiToAのチャットボット
            </Link>
            <Link href="/news" className="text-foreground hover:text-primary transition-colors text-sm">
              ニュース
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm">
              お問い合わせ
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-[6.25rem] md:py-[12.5rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10 h-full">
          <div className="grid md:grid-cols-2 gap-12 items-center h-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                自動で賢くなるチャットボット
                <br />
                <span className="text-primary">社員の知識を会社の資産に</span>
              </h1>
              <ul className="text-lg md:text-xl text-foreground/80 mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>対応できなかった質問を自動収集</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>質問に答えると自動で育つ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>エンジニア不要で運用可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>カスタマーサポートや社内FAQ対応に利用可能</span>
                </li>
              </ul>
              <div className="grid grid-cols-3 gap-3 mb-8 max-w-2xl">
                <div className="relative group bg-white/80 rounded-lg p-4 border border-sky-400/40 hover:border-sky-400/80 transition-all hover:shadow-xl hover:shadow-sky-400/30 h-24 flex items-center justify-center backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center relative z-10">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-1 whitespace-nowrap">65%時短</div>
                    <div className="text-[10px] md:text-xs text-foreground/70">圧倒的な効率化</div>
                  </div>
                </div>
                <div className="relative group bg-white/80 rounded-lg p-4 border border-sky-400/40 hover:border-sky-400/80 transition-all hover:shadow-xl hover:shadow-sky-400/30 h-24 flex items-center justify-center backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center relative z-10">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-1 whitespace-nowrap">自社で管理</div>
                    <div className="text-[10px] md:text-xs text-foreground/70">格安の維持費</div>
                  </div>
                </div>
                <div className="relative group bg-white/80 rounded-lg p-4 border border-sky-400/40 hover:border-sky-400/80 transition-all hover:shadow-xl hover:shadow-sky-400/30 h-24 flex items-center justify-center backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center relative z-10">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-1 whitespace-nowrap">24/365</div>
                    <div className="text-[10px] md:text-xs text-foreground/70">いつでも即応答</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/mitoa">
                  <Button size="lg" className="gap-2">
                    MiToAについて詳しく見る <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    お問い合わせ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/ai-brain.png" alt="AI Technology" className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-cover" />
      </section>

      {/* Service Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-2">SERVICE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              事業内容
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AIチャットbot開発",
                desc: "最先端のAI技術を活用したカスタムチャットbotの開発・導入。顧客対応の自動化から社内業務の効率化まで、幅広いニーズに対応します。",
              },
              {
                title: "DX導入支援",
                desc: "企業のデジタルトランスフォーメーション全体をサポート。戦略立案から実装、運用まで、一貫したコンサルティングサービスを提供します。",
              },
              {
                title: "業務自動化ソリューション",
                desc: "定型業務の自動化により、人的リソースを有効活用。生産性向上とコスト削減を同時に実現します。",
              },
              {
                title: "システム導入・運用支援",
                desc: "既存システムとの連携からシステム導入、継続的な運用サポートまで、トータルでサポートします。",
              },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline">
                すべて表示
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-2">BENEFIT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              わたしたちの強み
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "エンジニア不要で運用可能",
                desc: "専門知識がなくても、誰でも簡単に使いこなせる直感的な操作性。導入後の保守や更新にエンジニアは不要です。ITリソースに制約がある企業でも、すぐに活用を開始できます。",
              },
              {
                icon: Sparkles,
                title: "社員の知識を会社の資産に",
                desc: "社員が日々蓄積する知識やノウハウを、チャットボットという形で会社の資産として永続化。属人化を防ぎ、組織全体で活用できる知識基盤を構築します。退職や異動があっても、大切な知識は失われません。",
              },
              {
                icon: TrendingUp,
                title: "使うほど自動で育つ",
                desc: "対応できなかった質問を自動収集し、社員が回答するだけでチャットボットが自動的に学習。使えば使うほど賢くなり、対応できる質問の範囲が広がっていきます。",
              },
              {
                icon: Users,
                title: "AIと人間の協働で高品質",
                desc: "最新のAIが回答の叩き台を作成し、人間がレビュー・修正。AIの効率性と人間の判断力を組み合わせることで、短時間で高品質な回答を作成できます。",
              },
              {
                icon: Settings,
                title: "多様な用途に対応",
                desc: "カスタマーサポート、社内FAQ、新人研修など、様々な場面で活用可能。一つのプラットフォームで複数の課題を解決し、組織全体の業務効率化を実現します。",
              },
              {
                icon: Clock,
                title: "短期間でROI実現",
                desc: "作業時間65%削減、年間数百万円のコスト削減を実現。投資回収期間はわずか3~6ヶ月。導入後すぐに効果を実感でき、長期的に高い費用対効果を維持します。",
              },
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div key={idx} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-2">ABOUT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              わたしたちについて
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                私たちは、最先端テクノロジーでお客様のビジネスを革新する技術パートナーです。高度なAIおよびLLM技術でデータから新たな価値を創造し、徹底的に磨き上げたUI/UXで誰もが直感的に使える体験を提供します。これらすべてをエンタープライズ要件に準拠した堅牢なセキュリティで支え、お客様が安心してイノベーションに挑戦できる環境を実現します。この価値を創造するのは、情熱にあふれた私たちのチームです。
              </p>
              <Link href="/services">
                <Button className="gap-2">
                  わたしたちについてもっと知る <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="/logo.png" alt="MiToA Logo" className="max-w-sm w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-2">NEWS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ニュース
            </h2>
          </div>
          <div className="space-y-6 mb-12">
            {[
              {
                date: "2025.10.21",
                title: "株式会社MiToA設立のお知らせ",
                desc: "AIチャットbotを活用した業務自動化とDX導入支援を専門とする株式会社MiToAが設立されました。",
              },
            ].map((news, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <p className="text-sm text-primary font-semibold mb-2">{news.date}</p>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{news.title}</h3>
                <p className="text-foreground/70 mb-4">{news.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/news">
              <Button variant="outline">
                すべて表示
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container text-center">
          <p className="text-primary text-sm font-semibold mb-4">CONTACT US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            お問い合わせ
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            お客様からのお問い合わせをお待ちしております。お困りのことやご不明な点がございましたら、お気軽にお問い合わせください。弊社では、迅速かつ丁寧な対応を心がけております。
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              お問い合わせはこちら <ArrowRight className="w-4 h-4" />
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
                ご質問やご相談は、
                <br />
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

