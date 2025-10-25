import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield, TrendingUp, Users, Zap, Brain } from "lucide-react";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Mitoa() {
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
            <Link href="/mitoa" className="text-primary font-semibold">
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
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            使うほど賢くなる
            <br />
            チャットボット運用プラットフォーム
            <br />
            <span className="text-primary">MiToA（ミトア）</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            カスタマーサポートの質問を自動収集・AI分析し、
            <br />
            チャットボットを継続的に進化させる新しいソリューション
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                無料相談を申し込む <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              デモを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            こんな課題はありませんか？
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "チャットボットを導入したが、思うように賢くならない",
              "サポート担当者が質問対応に追われている",
              "新商品リリース時に問い合わせが殺到する",
              "担当者によって回答品質にバラつきがある",
              "ベテラン社員の知識が属人化している",
              "チャットボットの更新作業が手間になっている",
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="text-red-500 mt-1">❌</div>
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            MiToAが解決します
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "作業時間65%削減", desc: "10分 → 3.5分に短縮" },
              { icon: Brain, title: "AIと人間の協働", desc: "高品質な回答を効率的に作成" },
              { icon: TrendingUp, title: "継続的に賢くなる", desc: "チャットボットへ自動同期" },
              { icon: Users, title: "新人でもベテラン品質", desc: "音声入力・AI予測で簡単" },
              { icon: Shield, title: "組織の知識を資産化", desc: "永続的に活用可能" },
              { icon: Clock, title: "24時間365日対応", desc: "いつでも高品質な自動応答" },
            ].map((solution, idx) => {
              const IconComponent = solution.icon;
              return (
                <div key={idx} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{solution.title}</h3>
                  <p className="text-foreground/70 text-sm">{solution.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            MiToAの仕組み
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "自動収集", desc: "Webhookで未回答質問を自動リスト化" },
                { step: "2", title: "AI支援", desc: "AIが回答の叩き台を作成\n音声入力で最大3倍速" },
                { step: "3", title: "自動同期", desc: "ワンクリックでチャットボットの学習データへ反映" },
                { step: "4", title: "継続進化", desc: "チャットボットが賢くなり、次回から自動回答" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70 whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center p-6 bg-primary/5 rounded-lg">
              <p className="text-lg font-semibold text-primary">
                → サイクルを回すほど業務が楽になる
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            活用シーン
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "カスタマーサポート",
                icon: "💬",
                platforms: [
                  "ウェブサイト埋め込みウィジェット",
                  "LINE公式アカウント",
                  "など",
                ],
              },
              {
                title: "社内FAQ",
                icon: "📚",
                platforms: [
                  "Slack等のワークスペース",
                  "社内ポータルサイト",
                ],
              },
              {
                title: "製品マニュアル",
                icon: "📖",
                platforms: [
                  "製品公式サイト",
                  "製品アプリ内",
                ],
              },
              {
                title: "新人研修",
                icon: "🎓",
                platforms: [
                  "Slack等のワークスペース",
                  "研修用ウェブサイト",
                  "社内研修アプリ",
                ],
              },
            ].map((useCase, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative bg-gradient-to-br from-background via-background to-primary/5 rounded-xl p-6 border border-border shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground/70">適したプラットフォーム：</p>
                        <ul className="space-y-1">
                          {useCase.platforms.map((platform, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="text-accent mt-0.5">✓</span>
                              <span>{platform}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by User Type */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            誰にメリットがあるのか？
          </h2>
          <Tabs defaultValue="support" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="support">サポート担当者</TabsTrigger>
              <TabsTrigger value="manager">管理者</TabsTrigger>
              <TabsTrigger value="customer">エンドユーザー</TabsTrigger>
              <TabsTrigger value="executive">経営層</TabsTrigger>
            </TabsList>

            <TabsContent value="support" className="mt-8">
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    作業時間65%削減
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">音声入力で最大3倍速</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">AI予測で叩き台自動作成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">一括操作で効率アップ</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    質の高い回答を簡単に
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">AI提案で参考URLも自動抽出</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">過去の回答を即座に検索</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">5つの検索クエリを自動抽出</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    進捗の見える化
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">6つのタブで状態管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">履歴タブで過去対応を確認</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manager" className="mt-8">
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">📈 継続的な品質改善サイクル</h3>
                  <p className="text-foreground/70 mb-4">顧客の質問 → Webhook自動収集 → チームで回答作成（AI支援）→ チャットボットの学習データに自動同期 → チャットボットが賢くなる → 顧客満足度向上</p>
                </div>

                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">💰 コスト削減効果</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">人的コスト: サポート担当者の作業時間65%削減</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">応答時間短縮: 未回答質問を迅速に処理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">自動化: 同期作業が自動 → 手動転記のミスゼロ</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">🔐 安全な組織管理</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">招待制: 不正アクセスリスクゼロ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">ロールベース権限: メンバーは閲覧・編集のみ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">マルチテナント: 組織ごとにデータ完全分離</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customer" className="mt-8">
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">⚡ より正確で迅速な回答</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">知識の蓄積: 人間がレビューした高品質な回答が常に更新</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">検索性向上: 5つの検索クエリで多様な表現に対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">24時間対応: 深夜でも正確に回答</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">😊 顧客体験の向上</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">待ち時間削減: MiToAで学習したチャットボットが即座に回答</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">一貫性: 同じ質問には同じ高品質な回答</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">最新情報: 継続的に更新される知識ベース</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="executive" className="mt-8">
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-background border border-border">
                  <h3 className="text-xl font-bold mb-4 text-foreground">💼 ビジネスインパクト</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">コスト面:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">年間数百万円削減の可能性（5名体制で月30-50万円削減）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">マルチテナントで複数部署・グループ会社に展開可能</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">売上面:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">顧客満足度向上 → リピート率・NPS向上</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">サポート品質向上 → ブランド価値向上</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">競争優位性:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">先進技術の活用: 最新AI搭載</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">データ資産化: 顧客の質問データが組織のナレッジに</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            投資対効果（ROI）
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-lg font-bold mb-4 text-foreground">前提条件</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>・サポート担当者: 5名</li>
                  <li>・1日の問い合わせ: 50件</li>
                  <li>・処理時間削減: 6.5分/件</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="text-lg font-bold mb-4 text-foreground">年間効果</h3>
                <ul className="space-y-2">
                  <li className="text-foreground/70">削減時間: <span className="font-bold text-primary">1,300時間/年</span></li>
                  <li className="text-foreground/70">人件費削減: <span className="font-bold text-primary">約390万円/年</span></li>
                  <li className="text-foreground/70">投資回収期間: <span className="font-bold text-primary">3~6ヶ月</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            まずは無料相談から
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="p-4 bg-background rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">デモンストレーション実施中</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">ROI試算シミュレーション提供</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold">導入事例のご紹介</p>
            </div>
          </div>
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
                AIチャットボットで業務を自動化
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link href="/services" className="hover:text-primary transition-colors">事業内容</Link></li>
                <li><Link href="/mitoa" className="hover:text-primary transition-colors">MiToAチャットボット</Link></li>
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
