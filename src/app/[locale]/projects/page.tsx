"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Construction, ArrowLeft, ArrowRight, Hammer, Building2, Code2 } from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  { icon: Hammer, delay: "0s", position: "top-[15%] start-[8%]", size: 20 },
  { icon: Building2, delay: "0.4s", position: "top-[20%] end-[10%]", size: 24 },
  { icon: Code2, delay: "0.8s", position: "bottom-[25%] start-[6%]", size: 18 },
  { icon: Construction, delay: "1.2s", position: "bottom-[20%] end-[8%]", size: 22 },
];

export default function ProjectsPage() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 start-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-orange-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating service icons */}
      {floatingIcons.map(({ icon: Icon, delay, position, size }, i) => (
        <div
          key={i}
          className={`absolute ${position} hidden lg:flex w-12 h-12 bg-white/5 border border-white/10 rounded-2xl items-center justify-center animate-bounce`}
          style={{ animationDelay: delay, animationDuration: "3s" }}
        >
          <Icon size={size} className="text-orange-500/60" />
        </div>
      ))}

      {/* Orange top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Back button */}
      <div className="absolute top-24 start-4 sm:start-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors text-sm font-medium group"
        >
          <ArrowIcon
            size={16}
            className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform"
          />
          {isAr ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto py-24">

        {/* Animated icon */}
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 bg-orange-500/10 border border-orange-500/20 rounded-3xl flex items-center justify-center mx-auto">
            <Construction size={44} className="text-orange-500" />
          </div>
          {/* Ping ring */}
          <span className="absolute inset-0 rounded-3xl animate-ping bg-orange-500/10" style={{ animationDuration: "2s" }} />
        </div>

        {/* Logo mark */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">Z</span>
          </div>
          <span className="text-white/40 font-semibold text-sm tracking-widest uppercase">
            {isAr ? "زاب إندفرز" : "Zap Endeavors"}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          {isAr ? "مشاريعنا" : "Our Projects"}
        </h1>

        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full px-5 py-2 text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          {isAr ? "قريباً جداً" : "Coming Soon"}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {isAr
            ? "نعمل بجد على تجميع معرض مشاريعنا المميزة. ترقبوا قائمة شاملة من أعمالنا في الإنشاءات والتقنية والسياحة واللوجستيات."
            : "We're working hard to put together our portfolio of distinguished projects. Stay tuned for a comprehensive showcase of our work across construction, technology, tourism, and logistics."}
        </p>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>{isAr ? "نسبة الإنجاز" : "Progress"}</span>
            <span className="text-orange-400 font-semibold">75%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000"
              style={{ width: "75%" }}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-xl shadow-orange-500/20 no-underline"
            )}
          >
            {isAr ? "تواصل معنا الآن" : "Contact Us Now"}
          </Link>
          <Link
            href={`/${locale}/services`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/15 bg-white/5 text-white hover:bg-white/10 font-semibold px-8 no-underline"
            )}
          >
            {isAr ? "استعرض خدماتنا" : "View Our Services"}
          </Link>
        </div>
      </div>

      {/* Bottom orange bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </div>
  );
}
