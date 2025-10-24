import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Lock, Settings, Zap, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="MiToA" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm">
              ホーム
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors text-sm">
              事業内容
            </Link>
            <Link href="/news" className="text-foreground hover:text-primary transition-colors text-sm">
              ニュース
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm">
              お問い合わせ
            </Link>
          </div>
          <Button variant="default" size="sm">
            お問い合わせ
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              AIチャットbotで
              <br />
              <span className="text-primary">業務を自動化</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              最先端のAI技術を活用した業務自動化とDX導入支援で、
              企業の生産性向上と競争力強化を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                詳しく知る <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
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
                icon: Sparkles,
                title: "最先端のAI/LLM技術",
                desc: "最新のAIおよび大規模言語モデル（LLM）をコア技術とし、これまで人手に頼っていた複雑な作業を自動化します。高度なデータ分析や示唆に富んだインサイトを提供し、お客様のビジネスを新たなステージへと導きます。",
              },
              {
                icon: Clock,
                title: "直感的で洗練されたUI/UX",
                desc: "シンプルさを追求した美しいデザインと、ストレスを感じさせない高速な動作を実現しました。ITツールに不慣れな方でも、導入したその日から誰もが直感的に使いこなせる、優れたユーザー体験を提供します。",
              },
              {
                icon: Lock,
                title: "エンタープライズレベルのセキュリティ",
                desc: "大企業の厳しい要求水準を満たす、セキュリティ体制を構築しています。お客様の大切なデータをあらゆる脅威から保護し、プライバシーを確保することで、事業継続性に貢献し、安心してご利用いただけます。",
              },
              {
                icon: Settings,
                title: "柔軟なカスタマイズ性",
                desc: "お客様独自の業務フローやビジネス要件に合わせて、機能を柔軟に設定・拡張できます。変化の速い市場環境や多様なニーズに迅速に対応し、常に最適な形でご活用いただくことが可能です。",
              },
              {
                icon: Zap,
                title: "導入・運用コストの最適化",
                desc: "優れた操作性により、導入時の学習コストや社員へのトレーニング時間を大幅に削減します。誰でもすぐに活用できるため、費用対効果を最大化し、スムーズな社内浸透を実現します。",
              },
              {
                icon: Lightbulb,
                title: "安定性と信頼性",
                desc: "緻密に構造化されたシステム設計により、常に安定したパフォーマンスを発揮します。お客様のビジネス規模の拡大に合わせて柔軟にスケールし、将来にわたって信頼できるパートナーであり続けます。",
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
              <img src="/logo.jpg" alt="MiToA Logo" className="max-w-sm w-full h-auto" />
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
              <img src="/logo.jpg" alt="MiToA" className="h-8 w-auto mb-4" />
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

