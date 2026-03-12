"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, CheckSquare, Users, Layers } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { value: "10+", label: t("years"), icon: TrendingUp },
    { value: "200+", label: t("projects"), icon: CheckSquare },
    { value: "500+", label: t("clients"), icon: Users },
    { value: "7", label: t("services"), icon: Layers },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{t("title")}</h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  duration={2000}
                  className="text-3xl sm:text-5xl font-black text-white mb-1 sm:mb-2 tabular-nums"
                />
                <div className="text-gray-400 font-medium text-xs sm:text-sm leading-snug">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
