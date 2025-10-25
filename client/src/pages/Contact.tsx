import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
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
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-full md:max-w-[66%] py-2 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 ml-0 md:ml-[-4cm]">
            <img src="/logo.png" alt="MiToA" className="h-12 md:h-24 w-auto" />
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
            <Link href="/news" className="text-foreground hover:text-primary transition-colors">
              ニュース
            </Link>
            <Link href="/contact" className="text-primary font-semibold">
              お問い合わせ
            </Link>
          </div>
        </div>
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

