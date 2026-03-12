"use client";

import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <section className="py-14 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85"
                  alt="Zap Endeavors - Professional team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Stats Card — hidden on small mobile */}
            <div className="hidden sm:block absolute -bottom-5 -end-5 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-black text-orange-500">10+</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">سنوات خبرة</div>
                  <div className="text-gray-500 text-xs">Years of expertise</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -start-6 w-28 h-28 bg-orange-500/10 rounded-full blur-2xl -z-10 hidden lg:block" />
            <div className="absolute -bottom-10 -end-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10 hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
              {t("badge")}
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 leading-tight">
              {t("title")}
            </h2>
            <h3 className="text-lg sm:text-xl text-orange-500 font-semibold mb-5">
              {t("titleSub")}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              {t("description1")}
            </p>
            <p className="text-gray-600 leading-relaxed mb-7 text-sm sm:text-base">
              {t("description2")}
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/about`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg hover:shadow-orange-200 transition-all duration-300 no-underline"
              )}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
