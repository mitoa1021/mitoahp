import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Menu, X, Loader2, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// GoogleフォームのEntry ID設定
// 正しいEntry IDを確認するには：
// 1. Googleフォーム編集画面で「プレビュー」をクリック
// 2. プレビュー画面で右クリック →「検証」を開く
// 3. 「entry.」で検索して各フィールドのIDを確認
const GOOGLE_FORM_CONFIG = {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSenzlLJqh4gRB03Q6QB70mq2KyJCcgwDD58GKC9Wiffbrz__A/formResponse',
  entryIds: {
    name: 'entry.2102490600',      // お名前フィールドのEntry ID
    company: 'entry.1732818920',   // 会社名フィールドのEntry ID
    email: 'entry.535788086',      // メールアドレスフィールドのEntry ID
    phone: 'entry.502257731',      // 電話番号フィールドのEntry ID
    message: 'entry.1910158148',   // お問い合わせ内容フィールドのEntry ID
  }
};

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.name, formData.name);
      googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.company, formData.company);
      googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
      googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.phone, formData.phone || '');
      googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.message, formData.message);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors', // Required for Google Forms
      });

      // no-corsモードでは実際のレスポンスを受け取れないため、
      // 送信が完了したことを前提に処理します
      setSubmitSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      // 3秒後に成功メッセージを非表示
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("送信中にエラーが発生しました。お手数ですが、メール(info@mitoa-ai.com)または電話(090-8475-3941)にて直接お問い合わせください。");
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Contact Form Section - Dark Design */}
      <section className="min-h-screen py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)'
      }}>
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-[0.2em]">
              CONTACT
            </h1>
            <p className="text-white/80 text-lg tracking-wide">
              お問い合わせ
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-3 flex items-center gap-2">
                お名前 <span className="px-2 py-0.5 bg-blue-500/90 text-white text-xs rounded">必須</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="田中 太郎"
                className="w-full px-5 py-4 rounded-xl border-0 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">
                会社名
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="株式会社MiToA"
                className="w-full px-5 py-4 rounded-xl border-0 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-3 flex items-center gap-2">
                メールアドレス <span className="px-2 py-0.5 bg-blue-500/90 text-white text-xs rounded">必須</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@abc.com"
                className="w-full px-5 py-4 rounded-xl border-0 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
            </div>

            {/* Phone Number - New Field */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-3">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="000-123-4567"
                className="w-full px-5 py-4 rounded-xl border-0 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-3">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="お問い合わせ内容は、こちらに記載ください"
                rows={6}
                className="w-full px-5 py-4 rounded-xl border-0 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none shadow-lg"
              />
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <div className="flex items-center gap-3 p-5 bg-green-500/20 border border-green-400/50 rounded-xl text-white backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-300" />
                <p className="text-sm font-medium">
                  お問い合わせありがとうございます。確認後、ご連絡させていただきます。
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 py-6 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-white/60 text-center pt-2">
              送信いただいた情報は、お問い合わせへの対応のみに使用いたします。
            </p>
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">メール</h3>
                <a
                  href="mailto:info@mitoa-ai.com"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  info@mitoa-ai.com
                </a>
              </div>
              <div>
                <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">電話</h3>
                <a
                  href="tel:+81-90-8475-3941"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  090-8475-3941
                </a>
              </div>
              <div>
                <div className="w-6 h-6 mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">時</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">営業時間</h3>
                <p className="text-white/70 text-sm">
                  平日 9:00 - 18:00
                </p>
              </div>
            </div>
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
