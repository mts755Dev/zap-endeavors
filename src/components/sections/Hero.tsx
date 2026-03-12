"use client";

import { useTranslations, useLocale } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — aerial construction drone shot */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
          alt="Zap Endeavors — aerial construction site"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Orange left accent */}
      <div className="absolute top-0 start-0 w-1.5 h-full bg-gradient-to-b from-orange-500 via-orange-400 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/40 backdrop-blur-sm text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 font-semibold">
              {t("badge")}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-3 sm:mb-4">
            {t("title")}
            <br />
            <span className="text-orange-500">{t("titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8 sm:mb-10 mt-3 sm:mt-4">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href={`/${locale}/services`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 sm:px-8 text-sm sm:text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 no-underline justify-center"
              )}
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/40 bg-white/10 backdrop-blur-sm !text-white hover:bg-white/20 hover:border-white/60 font-semibold px-6 sm:px-8 text-sm sm:text-base transition-all duration-300 no-underline justify-center"
              )}
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
