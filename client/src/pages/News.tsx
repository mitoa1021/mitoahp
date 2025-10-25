import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "2025年10月21日",
      title: "株式会社MiToA設立のお知らせ",
      category: "お知らせ",
      excerpt: "AIチャットbotを活用した業務自動化とDX導入支援を専門とする株式会社MiToAが設立されました。",
      content: "この度、AIチャットbotを活用した業務自動化とDX導入支援を専門とする株式会社MiToAが設立されました。企業のデジタルトランスフォーメーションを推進し、生産性向上と競争力強化を実現するため、全力でサポートいたします。",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-[66%] py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 ml-[-4cm]">
            <img src="/logo.png" alt="MiToA" className="h-24 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              事業内容
            </Link>
            <Link href="/mitoa" className="text-foreground hover:text-primary transition-colors">
              MiToAのチャットボット
            </Link>
            <Link href="/news" className="text-primary font-semibold">
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
            ニュース
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            MiToAの最新情報、お知らせ、ブログ記事をお届けします。
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="border-b border-border pb-8 last:border-b-0">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                <Button variant="outline" className="gap-2">
                  記事を読む <ArrowRight className="w-4 h-4" />
                </Button>
              </article>
            ))}
          </div>

          {/* Empty State Message */}
          {newsItems.length === 1 && (
            <div className="mt-16 p-8 rounded-xl bg-card border border-border text-center">
              <p className="text-foreground/70 mb-4">
                今後、MiToAの最新情報やお知らせを随時更新予定です。
              </p>
              <p className="text-sm text-foreground/60">
                最新情報をお見逃しなく、定期的にチェックしてください。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            最新情報をお受け取りください
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            MiToAの最新情報やお知らせをメールでお届けします。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="gap-2">
              登録する <ArrowRight className="w-4 h-4" />
            </Button>
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
            MiToAのサービスについてのご質問やご相談は、
            いつでもお気軽にお問い合わせください。
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

