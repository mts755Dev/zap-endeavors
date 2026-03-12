"use client";

import { useTranslations, useLocale } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeCTA() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 px-6 sm:px-12 py-12 sm:py-16 text-center">
          {/* Decorative blobs */}
          <div className="absolute top-0 start-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 end-0 w-64 h-64 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 start-1/2 w-96 h-96 bg-orange-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

          {/* Orange top line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
              <ArrowUpRight size={28} className="text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              {t("title")}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href={`/${locale}/contact`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 no-underline text-base"
                )}
              >
                {t("button")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-8 py-3 no-underline text-base"
                )}
              >
                {t("buttonSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
