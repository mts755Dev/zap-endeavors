"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const services = [
    locale === "ar" ? "قطع وتشكيل الأحجار" : "Stone Cutting & Shaping",
    locale === "ar" ? "إنشاءات المباني السكنية" : "Residential Construction",
    locale === "ar" ? "إنشاءات المباني غير السكنية" : "Non-Residential Construction",
    locale === "ar" ? "الخدمات اللوجستية" : "Logistics Services",
    locale === "ar" ? "نشر البرامج الجاهزة" : "Software Publishing",
    locale === "ar" ? "تصميم وبرمجة البرمجيات" : "Software Development",
    locale === "ar" ? "حجز الوحدات السياحية" : "Tourist Accommodation",
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.email"),
      value: "info@zapendeavors.com",
      href: "mailto:info@zapendeavors.com",
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: "+966 XX XXX XXXX",
      href: "tel:+966XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: t("info.address"),
      value: t("info.addressValue"),
      href: "#",
    },
    {
      icon: Clock,
      label: t("info.hours"),
      value: t("info.hoursValue"),
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
            {t("badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {locale === "ar" ? "تم الإرسال بنجاح!" : "Message Sent!"}
                  </h3>
                  <p className="text-gray-500">
                    {locale === "ar"
                      ? "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن."
                      : "Thank you for reaching out. We'll get back to you soon."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-orange-200 text-orange-600 hover:bg-orange-50"
                    )}
                  >
                    {locale === "ar" ? "إرسال رسالة أخرى" : "Send Another"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {t("form.phone")}
                      </label>
                      <input
                        type="tel"
                        placeholder={t("form.phonePlaceholder")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("form.service")}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm text-gray-600">
                      <option value="">{t("form.servicePlaceholder")}</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {t("form.message")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-base rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t("form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{t("info.title")}</h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a key={i} href={info.href} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                        <Icon
                          size={18}
                          className="text-orange-400 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs font-medium mb-0.5">
                          {info.label}
                        </div>
                        <div className="text-white font-medium text-sm">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-48 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
              <div className="text-center">
                <MapPin size={40} className="text-orange-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-700">
                  {locale === "ar" ? "المملكة العربية السعودية" : "Kingdom of Saudi Arabia"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
