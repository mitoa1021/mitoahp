import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create form data for Google Forms
    const googleFormData = new FormData();
    googleFormData.append('entry.1561324777', formData.name);
    googleFormData.append('entry.2019402489', formData.email);
    googleFormData.append('entry.1012941448', formData.company);
    googleFormData.append('entry.1173601591', formData.subject);
    googleFormData.append('entry.1147612083', formData.message);

    // Submit to Google Forms
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSenzlLJqh4gRB03Q6QB70mq2KyJCcgwDD58GKC9Wiffbrz__A/formResponse';

    fetch(googleFormUrl, {
      method: 'POST',
      body: googleFormData,
      mode: 'no-cors', // Required for Google Forms
    }).then(() => {
      alert("お問い合わせありがとうございます。確認後、ご連絡させていただきます。");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }).catch((error) => {
      console.error('Error submitting form:', error);
      alert("送信中にエラーが発生しました。もう一度お試しください。");
    });
  };

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
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            お問い合わせ
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            ご質問やご相談は、お気軽にお問い合わせください。
            確認後、ご連絡させていただきます。
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">所在地</h3>
                    <p className="text-foreground/70">
                      愛知県名古屋市千種区猫洞通５<br />
                      ドムス本山401
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">メール</h3>
                    <a
                      href="mailto:info@mitoa-ai.com"
                      className="text-primary hover:underline"
                    >
                      info@mitoa-ai.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">電話</h3>
                    <a
                      href="tel:+81-90-8475-3941"
                      className="text-primary hover:underline"
                    >
                      090-8475-3941
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-bold text-foreground mb-3">営業時間</h3>
                  <p className="text-foreground/70 text-sm">
                    平日 9:00 - 18:00<br />
                    (土日祝日を除く)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="山田太郎"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="株式会社○○"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">選択してください</option>
                  <option value="AIチャットbotについて">AIチャットbotについて</option>
                  <option value="DX導入支援について">DX導入支援について</option>
                  <option value="業務自動化について">業務自動化について</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="ご質問やご相談の内容をお聞かせください"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full gap-2">
                送信する <Send className="w-4 h-4" />
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                送信いただいた情報は、お問い合わせへの対応のみに使用いたします。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            よくあるご質問
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "AIチャットbotの導入にはどのくらいの期間がかかりますか？",
                a: "プロジェクトの規模や要件により異なりますが、一般的には2～4週間程度で導入可能です。詳しくはお問い合わせください。",
              },
              {
                q: "既存システムとの連携は可能ですか？",
                a: "はい、ほとんどのシステムとの連携が可能です。詳しくはお問い合わせの際にご相談ください。",
              },
              {
                q: "導入後のサポートはありますか？",
                a: "はい、導入後も継続的なサポートと改善を提供いたします。",
              },
              {
                q: "費用はどのように決まりますか？",
                a: "企業の要件や規模により異なります。無料でお見積もりさせていただきますので、お気軽にお問い合わせください。",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-bold text-foreground mb-3">Q: {item.q}</h3>
                <p className="text-foreground/70">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 text-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div className="flex flex-col gap-6">
              <img src="/logo-white.png" alt="MiToA" className="w-20 h-auto md:w-24 -ml-2 md:-ml-3" />
              <p className="text-xs text-white/40 sm:text-sm">
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
