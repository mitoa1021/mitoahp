import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle,
  ClipboardList,
  Globe,
  Layers,
  Loader2,
  Lock,
  Menu,
  MessageCircle,
  Repeat2,
  Shield,
  ShieldCheck,
  Slack,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const painPoints = [
  {
    title: "データを整理して初期構築する手間が大きく、着手できない",
    image: "/lpkadai1.PNG",
  },
  {
    title: "AIが誤った回答をしたら責任を負えず、導入に踏み切れない",
    image: "/lpkadai2.PNG",
  },
  {
    title: "チャットボットの文言を直したいのに、エンジニアに依頼しないと変えられない",
    image: "/lpkadai3.PNG",
  },
  {
    title: "社内データがAIの学習に使われないのか、セキュリティ的に不安…",
    image: "/lpkadai4.PNG",
  },
];

const coreHighlights = [
  { title: "ゼロ推測で誤回答を防ぐ" },
  { title: "答えられなかった質問が管理画面に届く" },
  { title: "自動で学習データに追加" },
  { title: "一度学習させたデータもノーコードで更新" },
];

const knowledgeSteps = [
  {
    title: "集まる",
    description: "チャット上で未回答を自動抽出。質問の背景や参照URLも合わせて記録します。",
  },
  {
    title: "引き出す",
    description: "管理画面で回答草案を作成。承認フローや注釈の入力で暗黙知を形式化します。",
  },
  {
    title: "資産化",
    description: "承認後は全チャネルへ即反映。履歴と出典が紐づき、再利用率と一次回答率が向上します。",
  },
];

const timeline = [
  {
    phase: "Week 1–2",
    title: "当社が初期モデルを構築",
    description:
      "要件整理と資料受領で初期モデルを構築。資料に加えて当社独自の業界別FAQを組み込み、最適な形にデータを処理し、チャットボットと管理用Webアプリをお渡しします。",
    image: "/week1.PNG",
  },
  {
    phase: "Week 2–4",
    title: "現場検証で精度向上",
    description:
      "平常業務の中で出てきた質問をチャットボットにそのまま投げるだけでOK。チャットボットが答えられなかったら有識者がWebアプリ上で回答し、\"育つ\"体験を共有します。",
    image: "/week2.PNG",
  },
  {
    phase: "Week 4〜",
    title: "本番運用スタート",
    description: "リリース可能と判断したら社内外へ公開。毎日の質問を数分で補完し、回答精度を100%へ近づけます。",
    image: "/week3.PNG",
  },
];

const integrations = [
  { icon: Slack, label: "Slack（社内）" },
  { icon: MessageCircle, label: "LINE公式アカウント（住民・学生）" },
  { icon: Globe, label: "Web埋め込み（サイト・ポータル）" },
];

const dashboardFeatures = [
  "よくある質問の可視化とクラスター分析",
  "成功回答の根拠確認・参照元チェック",
  "未回答の一括処理と優先度付け",
  "チャネル別の利用量と効果測定",
];

const securityPoints = [
  "通信はTLSで暗号化、保存時も暗号化を徹底",
  "テナント分離とRBACで部署ごとに権限管理",
  "日本リージョン優先のAWS基盤で運用",
  "外部AIは推論目的のみ。学習利用は一切なし",
  "監査ログでアクセス履歴をトレース可能",
];

const pricingPlans = [
  {
    name: "Light",
    price: "月額 3万円",
    quota: "3,000回答 / 月",
    features: ["登録ナレッジ無制限", "チャネル 2 まで", "メールサポート"],
  },
  {
    name: "Standard",
    price: "月額 5万円",
    quota: "8,000回答 / 月",
    features: ["登録ナレッジ無制限", "チャネル 3 まで", "週次レポート", "優先サポート"],
  },
  {
    name: "Pro",
    price: "月額 10万円",
    quota: "20,000回答 / 月",
    features: ["登録ナレッジ無制限", "チャネル無制限", "運用伴走ミーティング", "SLA オプション"],
  },
];

const pricingNotes = [
  "初期セットアップ：30万〜100万円（資料 500〜10,000 件の目安）",
  "回答上限超過分は 1 回答あたり ¥5〜（プランにより変動）",
  "お支払いは月末締め翌月末払い。最低利用期間は 6 か月です。",
];

const useCases = [
  {
    title: "A大学",
    description: "学務・教務FAQを学部別に構造化し、受験生サイトにも同一ナレッジを展開。",
  },
  {
    title: "A市役所",
    description: "証明書・子育て・介護・災害情報をLINEとWebで同時公開。夜間問い合わせを自動化。",
  },
  {
    title: "B大学病院",
    description: "職種別に規程や連絡手順を検索。夜間帯は推測禁止設定で安全に運用。",
  },
];

const comparisonRows = [
  {
    label: "信頼性",
    ours: {
      description: "推測ゼロ。「分からない」が成長に繋がる",
      statLabel: "誤回答率",
      statValue: "<5%",
    },
    others: {
      description: "AIが勝手に推測して回答。間違った情報を提供するリスクあり。",
      statLabel: "推測回答率",
      statValue: "15%+",
    },
  },
  {
    label: "スピード",
    ours: {
      description: "1分で情報の追加や編集が可能",
      statLabel: "改善リードタイム",
      statValue: "1営業日",
    },
    others: {
      description: "エンジニアへの依頼が必要。改善までに数週間かかる。",
      statLabel: "改善リードタイム",
      statValue: "2〜4週間",
    },
  },
  {
    label: "使いやすさ",
    ours: {
      description: "Webアプリだけで完結。\nノーコードで誰でも簡単。",
      statLabel: "1回答の編集時間",
      statValue: "3分",
    },
    others: {
      description: "複雑な管理画面で迷子に。編集や承認に時間がかかる。",
      statLabel: "1回答の編集時間",
      statValue: "30分+",
    },
  },
  {
    label: "柔軟性",
    ours: {
      description: "あらゆるワークスペース・公式ライン・WEBページ埋め込みにも対応",
      statLabel: "同時展開",
      statValue: "3チャネル標準",
    },
    others: {
      description: "チャネルごとに別々のシナリオ作成が必要。管理工数が倍増。",
      statLabel: "管理負荷",
      statValue: "チャネル数に比例",
    },
  },
  {
    label: "コスト",
    ours: {
      description: "エンジニア不要で業界最安級\n月額19,800〜",
      statLabel: "初期費用",
      statValue: "30万円〜",
    },
    others: {
      description: "FAQ・シナリオ数で課金。充実させると予算オーバーに。月額15〜50万円が相場。",
      statLabel: "課金単位",
      statValue: "FAQ/シナリオ毎",
    },
  },
];

const faqs = [
  {
    question: "追加・編集は誰が担当できますか？",
    answer:
      "権限を付与された担当者であれば、ノーコードで回答を編集できます。承認フローを通すことで品質担保も可能です。",
  },
  {
    question: "誤回答はどのように防ぎますか？",
    answer:
      "登録データ以外では回答しないルールを徹底し、確信度が低い場合はフォールバックで担当者に引き継ぎます。履歴と出典も記録されます。",
  },
  {
    question: "導入までどれくらいかかりますか？",
    answer:
      "最短 4 週間で本番運用を開始できます。初期資料が揃っている場合はさらに短縮も可能です。",
  },
  {
    question: "既存FAQの取り込みはできますか？",
    answer:
      "CSV・Excel・PDF 等から自動変換ツールで取り込み可能です。重複や古い情報の整理もサポートします。",
  },
  {
    question: "セキュリティ面の配慮は？",
    answer:
      "AWS 基盤上でテナント分離・暗号化・監査ログを実施。お客様データは学習利用せず、推論目的に限定します。",
  },
];

const formInitialState = {
  organizationType: "",
  department: "",
  channels: "",
  contentVolume: "",
  startTiming: "",
  message: "",
};

const heroStatImages = [
  { src: "/95percent-plus.PNG", alt: "95%以上の正答率" },
  { src: "/sokuji.PNG", alt: "即時の回答スピード" },
  { src: "/2~4weeks.PNG", alt: "導入期間は2〜4週間" },
  { src: "/getugaku.PNG", alt: "月額制 業界最安級" },
];

const exclusiveStrengths: Array<{
  title: string;
  image: string;
  icon: LucideIcon;
}> = [
  {
    title: 'Chatbotが"育つ"仕組み',
    image: "/tuyomi1.PNG",
    icon: Repeat2,
  },
  {
    title: "エンジニア不要で低価格",
    image: "/tuyomi2.PNG",
    icon: ShieldCheck,
  },
  {
    title: "初期構築不要",
    image: "/tuyomi3.PNG",
    icon: Layers,
  },
  {
    title: "独自のデータ処理でハイパフォーマンス",
    image: "/tuyomi4.PNG",
    icon: Brain,
  },
];

export default function ServicesChatbot() {
  useDocumentTitle(import.meta.env.VITE_APP_LP_TITLE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [hasMoreHighlights, setHasMoreHighlights] = useState(true);
  const highlightScrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState(formInitialState);
  const [isChatOpen, setIsChatOpen] = useState(false);
  type ChatMessage = { id: string; role: "user" | "bot"; text: string; timestamp: string };

  const formatTime = () => {
    const date = new Date();
    return date.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
  };

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: "MiToAへのご質問をどうぞ。よくある質問やサービス概要をすぐにご案内します。",
      timestamp: formatTime(),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const nextMessageId = useCallback(() => {
    messageIdRef.current += 1;
    return `msg-${messageIdRef.current}`;
  }, []);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!isChatOpen) return;
    const container = chatScrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages, isChatOpen]);

  const sendChatMessage = useCallback(async () => {
    const trimmed = chatInput.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = {
      id: nextMessageId(),
      role: "user",
      text: trimmed,
      timestamp: formatTime(),
    };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsSending(true);

    try {
      const response = await fetch("https://api-mebo.dev/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: "19b7d84e-5d9a-499c-a863-63383c2663dd19a4c7d4656107", // TODO: 本番運用ではサーバー経由で秘匿する
          agent_id: "2961509b-b7b7-477e-aa23-13ee239f236419a4a3b08fb2fe",
          utterance: trimmed,
          uid: "mitoa_lp_widget",
        }),
      });

      if (!response.ok) {
        throw new Error(`MiToA chatbot request failed with status ${response.status}`);
      }

      const data = await response.json();
      const replyText =
        data?.bestResponse?.utterance ??
        data?.utterance ??
        "申し訳ありません。回答を取得できませんでした。";

      setChatMessages((prev) => [
        ...prev,
        { id: nextMessageId(), role: "bot", text: replyText, timestamp: formatTime() },
      ]);
    } catch (error) {
      console.error(error);
      setChatMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          role: "bot",
          text: "通信エラーが発生しました。時間をおいて再度お試しください。",
          timestamp: formatTime(),
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }, [chatInput, isSending, nextMessageId]);

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void sendChatMessage();
  };

  useEffect(() => {
    const container = highlightScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveHighlightIndex(Math.min(Math.max(index, 0), coreHighlights.length - 1));
      setHasMoreHighlights(scrollLeft + clientWidth < scrollWidth - 8);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollHighlightsTo = (direction: "prev" | "next") => {
    const container = highlightScrollRef.current;
    if (!container) return;

    const { clientWidth, scrollLeft } = container;
    const delta = direction === "next" ? clientWidth : -clientWidth;

    container.scrollTo({
      left: scrollLeft + delta,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual submission logic.
    alert("ご入力ありがとうございます。担当者よりご連絡いたします。");
    setFormData(formInitialState);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
        <div className="py-1 flex items-center justify-between pl-0 pr-4 md:pr-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo.png" alt="MiToA" className="h-20 md:h-32 w-auto ml-4 md:ml-6" />
          </Link>
          <div className="hidden md:flex items-center gap-6 pr-2">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm font-bold" onClick={() => window.scrollTo(0, 0)}>
                ホーム
              </Link>
              <span className="text-foreground/30">|</span>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors text-sm font-bold">
                事業内容
              </Link>
              <span className="text-foreground/30">|</span>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-bold" onClick={() => window.scrollTo(0, 0)}>
                お問い合わせ
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden rounded-md border-2 border-primary/80 px-7 py-3 text-sm md:text-base font-semibold text-primary shadow-[0_0_14px_rgba(59,130,246,0.25)] transition-all duration-300 hover:border-primary hover:shadow-[0_0_26px_rgba(59,130,246,0.45)] hover:-translate-y-0.5"
                >
                  無料で相談する
                </Button>
              </Link>
              <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  size="lg"
                  className="relative overflow-hidden rounded-md bg-primary px-7 py-3 text-sm md:text-base font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.55)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_38px_rgba(59,130,246,0.7)] hover:-translate-y-0.5"
                >
                  資料ダウンロード
                </Button>
              </Link>
            </div>
          </div>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t border-border">
            <div className="flex flex-col py-4">
              <Link href="/" className="text-foreground hover:bg-slate-100 px-6 py-3 text-sm font-bold transition-colors" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                ホーム
              </Link>
              <div className="border-t border-border mx-6" />
              <Link href="/services" className="text-foreground hover:bg-slate-100 px-6 py-3 text-sm font-bold transition-colors" onClick={() => setMobileMenuOpen(false)}>
                事業内容
              </Link>
              <div className="border-t border-border mx-6" />
              <Link href="/contact" className="text-foreground hover:bg-slate-100 px-6 py-3 text-sm font-bold transition-colors" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
        {/* Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-900 via-lime-400 to-cyan-400 animate-pulse"
             style={{
               backgroundSize: '200% 100%',
               animation: 'gradientShift 3s ease infinite'
             }}
        />
      </nav>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        [data-animate="fade"] {
          transform: none;
        }

        [data-animate="fade"].animate-in {
          opacity: 1;
        }

      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container relative z-10 py-8 md:py-12">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:items-start">
            {/* Right Side - Image (shown first on mobile) */}
            <motion.div
              className="relative md:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="/PC&iPhone.PNG"
                alt="MiToA Chatbot Studio"
                className="w-full"
                style={{ clipPath: 'inset(0 0 15% 0)' }}
              />
            </motion.div>

            {/* Left Side - Copy & CTA (shown second on mobile) */}
            <motion.div
              className="space-y-6 md:space-y-8 mt-4 md:mt-16 md:order-1 md:flex md:flex-col md:items-center md:text-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold">
                  AIチャットボット運用プラットフォーム
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground">
                  エンジニア不要。
                  <br />
                  知識が育つ。
                  <br />
                  これぞ最適解。
                </h1>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row sm:justify-center items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative w-full sm:w-auto overflow-hidden rounded-md border-[3px] border-primary/80 px-10 py-7 text-lg font-semibold text-primary shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:bg-primary/5 hover:shadow-[0_0_36px_rgba(56,189,248,0.45)] hover:-translate-y-1"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 transition group-hover:opacity-100" />
                    <span className="relative tracking-[0.08em]">無料で相談する</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group relative w-full sm:w-auto overflow-hidden rounded-md bg-gradient-to-r from-primary via-sky-500 to-cyan-400 px-10 py-7 text-lg font-semibold text-white shadow-[0_0_36px_rgba(56,189,248,0.55)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(56,189,248,0.75)] hover:-translate-y-1"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-white/15 opacity-0 transition group-hover:opacity-30" />
                    <span className="relative tracking-[0.12em] uppercase">資料ダウンロード</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mt-2 md:-mt-6 lg:-mt-8 animate-hero-fade-up animate-hero-delay-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStatImages.map((stat) => (
                <div key={stat.src} className="flex justify-center">
                  <div className="flex items-center justify-center h-32 md:h-40 w-full">
                    <img
                      src={stat.src}
                      alt={stat.alt}
                      className="max-h-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Strengths */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 py-20 md:py-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 h-32 w-32 rounded-full border-4 border-white" />
          <div className="absolute bottom-20 left-10 h-24 w-24 rotate-45 border-4 border-white" />
          <div className="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-white" />
          <div className="absolute bottom-1/4 right-1/3 h-20 w-20 rotate-12 border-4 border-white" />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              MiToAが選ばれる3つの理由
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-yellow-300"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Reason 1 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 flex justify-center items-center min-h-[220px]">
                  <img
                    src="/tuyomi1.PNG"
                    alt="成長する仕組み"
                    className="w-full max-w-[200px] object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
                    Chatbotが<span className="text-yellow-500">"育つ"</span>仕組み<br />運用しながら賢くなる
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    届いた質問に答えるだけでChatbotが賢くなる仕組み。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 2 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 flex justify-center items-center min-h-[220px] overflow-hidden">
                  <img
                    src="/tuyomi2.PNG"
                    alt="低価格で導入"
                    className="w-full max-w-[250px] h-[220px] object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
                    エンジニア不要で<br /><span className="text-yellow-500">業界最安級価格</span>
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    自分たちで育てる仕組みだからこそ、導入後のエンジニアとの連携不要で時間・価格が抑えられる
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Reason 3 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-2 flex justify-center items-center min-h-[220px]">
                  <img
                    src="/tuyomi4.PNG"
                    alt="データ処理技術"
                    className="w-full max-w-[280px] object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight">
                    独自のデータ処理で<br />正答率<span className="text-yellow-500">90%以上</span>を実現
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    性能に大きく関わる初期設計・構築は専門家にお任せ。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xs uppercase tracking-[0.45em] text-primary/70">Pain Points</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              こんな不安もMiToAが解消します。
            </h2>
            <p className="mt-4 text-sm md:text-base text-foreground/60">
              チャットボットの導入・運用の面倒・不安は一切ございません！
            </p>
            <div
              className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-primary via-sky-500 to-cyan-400"
              style={{ backgroundSize: "160% 100%" }}
            />
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="flex flex-col items-center rounded-[2rem] border border-slate-100 bg-white px-8 py-12 text-center shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img
                  src={point.image}
                  alt={`${point.title}をイメージした図`}
                  className="mb-8 h-40 w-auto object-contain"
                />
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
                  {point.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MiToA Solution & Core Highlights - Combined Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 overflow-hidden">
        <div className="container">
          {/* White Card Container */}
          <motion.div
            className="relative mx-auto w-full max-w-6xl rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-blue-200/40"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-120px" }}
            >
              <p
                className="text-5xl md:text-6xl font-extrabold uppercase leading-none text-primary/20"
                style={{ letterSpacing: "0.12em" }}
              >
                MiToA VALUE
              </p>
              <h3 className="-mt-5 md:-mt-6 text-3xl md:text-4xl font-bold text-foreground">MiToAチャットボットのコア価値</h3>
              <div
                className="mx-auto mt-3 h-1 w-28 md:w-44 bg-gradient-to-r from-blue-900 via-lime-400 to-cyan-400"
                style={{ backgroundSize: "200% 100%" }}
              />
            </motion.div>
            <div className="relative">
              <motion.div
                ref={highlightScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-0 pb-6 scrollbar-hide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {coreHighlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex-shrink-0 w-full snap-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <div
                      className="h-full w-full rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8 shadow-xl"
                    >
                      <div className="bg-white/95 backdrop-blur rounded-[2rem] p-4 md:p-6 h-full shadow-lg border border-blue-100/60 flex flex-col justify-between">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, margin: "-120px" }}
                      >
                        <p className="text-sm text-primary/70 uppercase tracking-[0.3em]">Value {String(index + 1).padStart(2, "0")}</p>
                        <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">{item.title}</h3>
                        {index === 0 && (
                          <div className="mt-8 space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                              <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100/40">
                                <img
                                  src="/with-knowledge.png"
                                  alt="登録ナレッジ内での回答イメージ"
                                  className="mx-auto h-48 w-auto object-contain"
                                />
                                <p className="mt-4 text-xl font-semibold text-foreground text-center md:text-left leading-relaxed">
                                  知識がある場合は正しく答える
                                </p>
                              </div>
                              <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100/40">
                                <img
                                  src="/non-knowledge.png"
                                  alt="未登録ナレッジ時のフォールバックイメージ"
                                  className="mx-auto h-48 w-auto object-contain"
                                />
                                <p className="mt-4 text-xl font-semibold text-foreground text-center md:text-left leading-relaxed">
                                  知識がない場合は「分からない」
                                </p>
                              </div>
                            </div>
                            <p className="text-center text-2xl md:text-3xl font-bold px-6 leading-relaxed">
                              <span className="text-foreground">推測で答えず、</span>
                              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                                分からない質問は「分からない」
                              </span>
                              <span className="text-foreground">と答える。</span>
                            </p>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="mt-8 flex flex-col items-center">
                            <div className="h-72 flex items-center justify-center mb-6">
                              <img
                                src="/value02.png"
                                alt="未回答が管理画面に届くイメージ"
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <p className="text-center text-2xl md:text-3xl font-bold px-6 leading-relaxed">
                              <span className="text-foreground">チャットボットの</span>
                              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">「分からない」が集まる</span>
                            </p>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="mt-8 flex flex-col items-center">
                            <div className="h-72 flex items-center justify-center mb-6">
                              <img
                                src="/value03.png"
                                alt="補助機能で回答を作成するイメージ"
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <p className="text-center text-2xl md:text-3xl font-bold text-foreground px-6 leading-relaxed">
                              届いた質問に答えるだけで
                              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                                チャットボットが育ちます
                              </span>
                              。
                            </p>
                          </div>
                        )}
                        {index === 3 && (
                          <div className="mt-8 flex flex-col items-center">
                            <div className="h-72 flex items-center justify-center mb-6">
                              <img
                                src="/value04.png"
                                alt="ノーコードで即時更新のイメージ"
                                className="max-h-full max-w-full object-contain rounded-2xl border border-blue-100/40 shadow-sm"
                              />
                            </div>
                            <p className="text-center text-2xl md:text-3xl font-bold px-6 leading-relaxed">
                              <span className="text-foreground">データ編集で</span>
                              <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                                変更データを即反映
                              </span>
                            </p>
                          </div>
                        )}
                      </motion.div>
                      <div className="mt-4 h-1 w-24 rounded-full bg-primary/30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
              {activeHighlightIndex > 0 && (
                <motion.button
                  type="button"
                  onClick={() => scrollHighlightsTo("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-foreground/90 p-3 text-background shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="前のカードへ"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>
              )}
              {hasMoreHighlights && (
                <motion.button
                  type="button"
                  onClick={() => scrollHighlightsTo("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-foreground/90 p-3 text-background shadow-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="次のカードへ"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              )}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {coreHighlights.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeHighlightIndex === index ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Flow */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950" />
          <img
            src="/ai-brain.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 left-0 right-0 h-72 opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.45), transparent 55%), radial-gradient(circle at 70% 20%, rgba(14,165,233,0.4), transparent 50%), radial-gradient(circle at 60% 80%, rgba(16,185,129,0.4), transparent 45%)",
            }}
          />
          <div className="absolute inset-0">
            {[
              { top: "10%", left: "12%", delay: "0.2s" },
              { top: "25%", left: "65%", delay: "0.4s" },
              { top: "55%", left: "20%", delay: "0.1s" },
              { top: "70%", left: "75%", delay: "0.3s" },
            ].map((shape) => (
              <div
                key={`${shape.top}-${shape.left}`}
                className="absolute h-16 w-16 bg-gradient-to-br from-cyan-300/80 via-sky-400/70 to-indigo-500/80 opacity-60 rotate-12 blur-[0.5px]"
                style={{
                  top: shape.top,
                  left: shape.left,
                  animation: `floatShape 8s ease-in-out infinite`,
                  animationDelay: shape.delay,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">点在するナレッジを、循環する企業資産へ</h2>
            <div
              className="mx-auto mt-4 h-1 w-44 md:w-72 bg-gradient-to-r from-blue-900 via-lime-400 to-cyan-400"
              style={{ backgroundSize: "200% 100%" }}
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start lg:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col gap-4 justify-center lg:pl-16">
              {[
                { step: "STEP 1", action: "集まる" },
                { step: "STEP 2", action: "答える" },
                { step: "STEP 3", action: "賢くなる" },
                { step: "STEP 4", action: "資産化" },
              ].map(({ step, action }, index) => (
                <motion.div
                  key={step}
                  className="relative rounded-[1.75rem] border border-primary/20 bg-white/95 px-4 py-5 shadow-md shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 lg:max-w-xs"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <div className="flex items-baseline gap-3 text-primary">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/60">{step}</span>
                    <span className="text-2xl md:text-3xl font-semibold">{action}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-120px" }}
            >
              <img
                src="/shikumi.png"
                alt="ナレッジ循環イメージ"
                className="w-full max-w-3xl lg:max-w-none lg:w-[640px] rounded-[2.5rem] border border-primary/20 shadow-2xl shadow-primary/20"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-xl md:text-2xl font-bold leading-relaxed whitespace-pre-line">
              単なる質問応答の枠を超え、<span className="text-primary">組織のナレッジを整理・最大化</span>し
              <span className="text-primary/90 inline-block ml-1">資産へと変える。</span>
              {"\n"}
              <span className="text-foreground">それが </span>
              <span className="bg-gradient-to-r from-primary/80 to-sky-500 bg-clip-text text-transparent text-3xl md:text-4xl align-baseline">MiToA のチャットボット</span>
              <span className="text-foreground">です。</span>
            </p>
          </motion.div>
        </div>
      </section>


      {/* Integrations */}
      <section className="pt-14 pb-4 md:pt-20 md:pb-6 bg-card/60">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">様々な既存ツールと連携可能</h2>
            <div
              className="mx-auto mt-4 h-1 w-32 md:w-56 bg-gradient-to-r from-blue-900 via-lime-400 to-cyan-400"
              style={{ backgroundSize: "200% 100%" }}
            />
            <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
              Slack や LINE、社内ポータル、既存の業務システムまで。同じナレッジをそのまま API 連携し、部署ごとに必要なチャネルへ展開できます。
            </p>
          </motion.div>
          <motion.div
            className="mt-10 md:mt-12"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src="/renkei2.PNG"
              alt="既存ツールとの連携イメージ"
              className="w-full max-w-2xl mx-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ clipPath: 'inset(0 0 10% 0)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">2~4週間でのスムーズな導入</h2>
              <p className="mt-3 text-base text-foreground/70">
                現場の業務を止めずに導入。受け入れ基準も明確にし、安心感を持って本番運用へ移行できます。
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-md bg-gradient-to-r from-primary via-sky-500 to-cyan-400 px-10 py-7 text-lg font-semibold text-white shadow-[0_0_36px_rgba(56,189,248,0.55)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(56,189,248,0.75)] hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute inset-0 bg-white/15 opacity-0 transition group-hover:opacity-30" />
                <span className="relative tracking-[0.12em] uppercase flex items-center gap-2">
                  資料ダウンロード <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </Link>
          </motion.div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {timeline.map((item, index) => (
              <div key={item.phase} className="relative h-full">
                <motion.div
                  className="relative rounded-3xl p-[3px] h-full"
                  style={{
                    background: 'linear-gradient(to right, rgb(30, 58, 138), rgb(163, 230, 53), rgb(34, 211, 238))',
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 3s ease infinite'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative rounded-3xl bg-white p-6 shadow-sm h-full flex flex-col">
                    <div className="mb-4 flex justify-center items-center h-48 md:h-56">
                      <img src={item.image} alt={`${item.title}のイメージ`} className="max-h-full w-auto object-contain" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{item.phase}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-foreground/70 leading-relaxed flex-1">{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-5 h-8 w-8 -translate-y-1/2 text-primary/60" />
                  )}
                </motion.div>
                {index < timeline.length - 1 && (
                  <ArrowDown className="md:hidden mx-auto mt-4 h-8 w-8 text-primary/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">他社比較</h2>
            <p className="mt-4 text-base text-foreground/70">
              運用モデル・編集性・展開の柔軟さで、MiToAはワンランク上の体験を提供します。
            </p>
          </motion.div>

          {/* Desktop version - Table */}
          <motion.div
            className="mt-8 overflow-hidden rounded-3xl border border-border bg-background shadow-sm hidden md:block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <table className="w-full text-left text-base md:text-lg text-foreground border-collapse">
              <colgroup>
                <col className="w-[12%]" />
                <col className="w-[44%]" />
                <col className="w-[44%]" />
              </colgroup>
              <thead className="bg-gradient-to-r from-blue-50 to-cyan-50 text-foreground">
                <tr>
                  <th className="px-4 py-5 font-bold text-base border-r-2 border-border text-center align-middle">観点</th>
                  <th className="px-6 py-5 font-bold border-r-2 border-border align-middle">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl md:text-3xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">MiToA</span>
                      <img
                        src="/PC&iPhone.PNG"
                        alt="MiToA"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-5 font-bold text-base align-middle">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-center">よくある生成AI<br/>チャットボット</span>
                      <img
                        src="/generalchatbot.PNG"
                        alt="一般的なチャットボット"
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <motion.tbody className="divide-y divide-border">
                {comparisonRows.map((row, index) => (
                  <motion.tr
                    key={row.label}
                    className="hover:bg-slate-50/50 transition-colors"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-120px" }}
                  >
                    <td className="px-4 py-5 font-bold text-foreground border-r-2 border-border text-center align-top text-sm">{row.label}</td>
                    <td className="px-6 py-5 border-r-2 border-border align-top">
                      {row.label === "信頼性" ? (
                        <p className="leading-relaxed font-semibold text-foreground">
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">推測ゼロ</span>
                          <span className="text-foreground">。「分からない」が成長に繋がる</span>
                        </p>
                      ) : row.label === "スピード" ? (
                        <p className="leading-relaxed font-semibold text-foreground">
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">1分</span>
                          <span className="text-foreground">で情報の</span>
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">追加や編集</span>
                          <span className="text-foreground">が可能</span>
                        </p>
                      ) : row.label === "使いやすさ" ? (
                        <p className="leading-relaxed font-semibold text-foreground">
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">Webアプリ</span>
                          <span className="text-foreground">だけで完結。</span>
                          <br />
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">ノーコード</span>
                          <span className="text-foreground">で誰でも簡単。</span>
                        </p>
                      ) : row.label === "柔軟性" ? (
                        <p className="leading-relaxed font-semibold text-foreground">
                          <span className="text-foreground">あらゆる</span>
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">ワークスペース</span>
                          <span className="text-foreground">・</span>
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">公式ライン</span>
                          <span className="text-foreground">・</span>
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">WEBページ</span>
                          <span className="text-foreground">埋め込みにも対応</span>
                        </p>
                      ) : row.label === "コスト" ? (
                        <p className="leading-relaxed font-semibold text-foreground">
                          <span className="text-foreground">エンジニア不要で業界最安級</span>
                          <br />
                          <span className="text-foreground">月額</span>
                          <span className="text-xl md:text-2xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">19,800円</span>
                          <span className="text-foreground">〜</span>
                        </p>
                      ) : (
                        <p className="leading-relaxed font-semibold text-foreground whitespace-pre-line">{row.ours.description}</p>
                      )}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <p className="leading-relaxed text-foreground/70 font-semibold">{row.others.description}</p>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>

          {/* Mobile version - Cards */}
          <div className="mt-8 space-y-6 md:hidden">
            {comparisonRows.map((row, index) => (
              <motion.div
                key={row.label}
                className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-4">
                  <h3 className="font-bold text-lg text-foreground">{row.label}</h3>
                </div>

                {/* MiToA */}
                <div className="px-5 py-5 border-b-2 border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">MiToA</span>
                  </div>
                  {row.label === "信頼性" ? (
                    <p className="leading-relaxed font-semibold text-foreground">
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">推測ゼロ</span>
                      <span className="text-foreground">。「分からない」が成長に繋がる</span>
                    </p>
                  ) : row.label === "スピード" ? (
                    <p className="leading-relaxed font-semibold text-foreground">
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">1分</span>
                      <span className="text-foreground">で情報の</span>
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">追加や編集</span>
                      <span className="text-foreground">が可能</span>
                    </p>
                  ) : row.label === "使いやすさ" ? (
                    <p className="leading-relaxed font-semibold text-foreground">
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">Webアプリ</span>
                      <span className="text-foreground">だけで完結。</span>
                      <br />
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">ノーコード</span>
                      <span className="text-foreground">で誰でも簡単。</span>
                    </p>
                  ) : row.label === "柔軟性" ? (
                    <p className="leading-relaxed font-semibold text-foreground">
                      <span className="text-foreground">あらゆる</span>
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">ワークスペース</span>
                      <span className="text-foreground">・</span>
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">公式ライン</span>
                      <span className="text-foreground">・</span>
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">WEBページ</span>
                      <span className="text-foreground">埋め込みにも対応</span>
                    </p>
                  ) : row.label === "コスト" ? (
                    <p className="leading-relaxed font-semibold text-foreground">
                      <span className="text-foreground">エンジニア不要で業界最安級</span>
                      <br />
                      <span className="text-foreground">月額</span>
                      <span className="text-xl bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">19,800円</span>
                      <span className="text-foreground">〜</span>
                    </p>
                  ) : (
                    <p className="leading-relaxed font-semibold text-foreground whitespace-pre-line">{row.ours.description}</p>
                  )}
                </div>

                {/* Others */}
                <div className="px-5 py-5 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-foreground/80">よくある生成AIチャットボット</span>
                  </div>
                  <p className="leading-relaxed font-semibold text-foreground/70 whitespace-pre-line">{row.others.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Pricing */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Security */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                安心のセキュリティ体制
              </h2>
              <p className="text-base text-white/80 mb-8">
                情報が重要な大学・自治体でも安心して使えるよう、セキュリティポリシーと運用体制を整備しています。
              </p>

              <div className="space-y-6">
                <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <img src="/aws.PNG" alt="AWS" className="h-16 w-16 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">AWS</span>で厳格管理
                      </h3>
                      <p className="text-sm text-foreground/70">
                        日本リージョン優先のAWS基盤で運用。通信はTLSで暗号化し、保存時も暗号化を徹底しています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <img src="/securitysafe.PNG" alt="セキュリティ" className="h-16 w-16 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">学習に使いません</span>
                      </h3>
                      <p className="text-sm text-foreground/70">
                        お客様データを外部AIの学習には一切使用しません。推論目的のみで利用し、データの安全性を確保します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                料金体系
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                <span className="text-3xl md:text-4xl font-extrabold text-cyan-300">月額19,800円</span>から選べる3つのプラン
              </p>

              <div className="space-y-4">
                <div className="rounded-3xl border-4 border-primary bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-8 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-2">STARTER PLAN</p>
                      <h3 className="text-4xl md:text-5xl font-extrabold text-foreground">
                        <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-400 bg-clip-text text-transparent">¥19,800</span>
                        <span className="text-xl font-normal text-foreground/70">/月</span>
                      </h3>
                    </div>
                    <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                  </div>
                  <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                    小規模チーム向け。まずは試してみたい方に最適なプランです。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">ご利用イメージ</h2>
            <p className="mt-4 text-base text-foreground/70">
              社内問い合わせとカスタマーサポート、両方のシーンでご活用いただけます
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* 社内問い合わせ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  社内問い合わせ
                </h3>
                <p className="text-sm text-foreground/70">従業員からの社内手続きや規程に関する質問に対応</p>
              </div>

              <div>
                <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-primary/20">
                  <div className="space-y-6">
                    {/* Q&A 1 */}
                    <div className="space-y-4">
                      {/* 質問 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-bold">
                          社員
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-foreground">有給休暇の申請方法を教えてください</p>
                        </div>
                      </div>

                      {/* 回答 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                          <p className="text-sm text-foreground leading-relaxed">
                            有給休暇の申請は社内ポータルから行えます。<br />
                            手順：ポータル → 勤怠管理 → 休暇申請 → 有給休暇を選択<br />
                            承認は通常1営業日以内に完了します。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 区切り線 */}
                    <div className="border-t border-slate-200"></div>

                    {/* Q&A 2 */}
                    <div className="space-y-4">
                      {/* 質問 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-bold">
                          社員
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-foreground">経費精算の締め日はいつですか？</p>
                        </div>
                      </div>

                      {/* 回答 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                          <p className="text-sm text-foreground leading-relaxed">
                            経費精算の締め日は毎月末です。<br />
                            月末までに申請された経費は、翌月15日に振り込まれます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* カスタマーサポート */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-purple-600" />
                  カスタマーサポート
                </h3>
                <p className="text-sm text-foreground/70">顧客からの製品・サービスに関する質問に対応</p>
              </div>

              <div>
                <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-purple-300">
                  <div className="space-y-6">
                    {/* Q&A 1 */}
                    <div className="space-y-4">
                      {/* 質問 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-bold">
                          顧客
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-foreground">配送状況を確認したいのですが</p>
                        </div>
                      </div>

                      {/* 回答 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                          <p className="text-sm text-foreground leading-relaxed">
                            配送状況は注文番号で確認できます。<br />
                            マイページ → 注文履歴 → 配送状況を確認<br />
                            お急ぎの場合は追跡番号をお伝えください。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 区切り線 */}
                    <div className="border-t border-purple-200"></div>

                    {/* Q&A 2 */}
                    <div className="space-y-4">
                      {/* 質問 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm font-bold">
                          顧客
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-foreground">返品の手続き方法を教えてください</p>
                        </div>
                      </div>

                      {/* 回答 */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                          <p className="text-sm text-foreground leading-relaxed">
                            返品は商品到着後14日以内に受付可能です。<br />
                            マイページから返品申請を行い、返送先住所をご確認ください。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">よくあるご質問</h2>
            <p className="mt-4 text-base text-foreground/70">
              右下のチャットボットでもお気軽にご相談いただけます
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                className="rounded-2xl border border-border bg-card/60 p-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <summary className="cursor-pointer text-base font-semibold text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <motion.div
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                AI導入の<br />「はじめの一歩」を<br />ご一緒に。
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                MIToAまでお気軽にご相談ください。
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <motion.a
                href="/contact"
                className="group relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="text-sm font-medium mb-2">お問い合わせ</span>
                <span className="text-3xl md:text-4xl font-bold mb-4">Contact</span>
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.a>

              <motion.a
                href="/chatbot-consultation"
                className="group relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="text-sm font-medium mb-2">チャットボット導入相談</span>
                <span className="text-2xl md:text-3xl font-bold mb-4 leading-tight px-4">Chatbot<br />Consultation</span>
                <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div className="flex flex-col gap-6">
              <img src="/logo-white.png" alt="MiToA" className="w-24 h-auto md:w-28 -ml-2 md:-ml-3" />
              <p className="text-xs text-white/40">&copy; 2025 株式会社MiToA. All rights reserved.</p>
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
                  <Link href="/" className="transition-colors hover:text-primary" onClick={() => window.scrollTo(0, 0)}>
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-primary" onClick={() => window.scrollTo(0, 0)}>
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

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
        {isChatOpen && (
          <div className="w-[320px] md:w-[380px] rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_60px_rgba(15,23,42,0.18)] overflow-hidden">
            <div className="flex items-center justify-between bg-gradient-to-r from-primary via-sky-500 to-cyan-400 px-5 py-4 text-white">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/30 shadow-inner">
                  <img src="/chatboticon.png" alt="チャットボットアイコン" className="h-7 w-7 rounded-full object-cover object-center" />
                </div>
                <span className="text-base font-semibold tracking-wide">MiToA Chatbot</span>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-full bg-white/10 p-1 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="チャットを閉じる"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex h-[420px] flex-col bg-slate-50">
              <div
                ref={chatScrollRef}
                className="flex-1 overflow-y-auto px-5 py-5 space-y-4 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent"
              >
                {chatMessages.map((message) => {
                  const isBot = message.role === "bot";
                  if (isBot) {
                    return (
                      <div key={message.id} className="flex w-full justify-start">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm overflow-hidden">
                            <img src="/chatboticon.png" alt="MiToA" className="h-full w-full object-cover" />
                          </div>
                          <div className="flex flex-col gap-1">
                        <div className="max-w-[230px] rounded-[22px] border border-slate-200 bg-white px-5 py-3 shadow-sm">
                              <p className="text-sm leading-relaxed text-slate-700 break-words">{message.text}</p>
                            </div>
                            <span className="text-[11px] text-slate-400">{message.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={message.id} className="flex w-full justify-end">
                      <div className="flex max-w-[80%] flex-col items-end gap-1">
                        <div className="max-w-[230px] rounded-[24px] bg-[#25D366] px-5 py-3 text-sm leading-relaxed text-white shadow-sm">
                          <span className="break-words">{message.text}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">{message.timestamp}</span>
                      </div>
                    </div>
                  );
                })}
                {isSending && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-[20px] border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-sm">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span>回答を生成しています...</span>
                    </div>
                  </div>
                )}
              </div>
              <form
                onSubmit={handleChatSubmit}
                className="border-t border-primary/10 bg-white px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="ご質問を入力してください"
                    className="flex-1 rounded-full border border-primary/20 bg-white px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    disabled={isSending}
                  />
                  <button
                    type="submit"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/50"
                    disabled={isSending || !chatInput.trim()}
                    aria-label="メッセージを送信"
                  >
                    {isSending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {!isChatOpen && (
          <button
            type="button"
            onClick={() => setIsChatOpen(true)}
            className="group relative h-40 w-48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="MiToAにについて質問する"
          >
            <img
              src="/migisita.PNG"
              alt="チャットを開く"
              className="h-full w-full object-contain transition duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            />
          </button>
        )}
      </div>
    </div>
  );
}
