"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import {
  Globe2, Award, Clock, HeadphonesIcon, DollarSign, Users2,
} from "lucide-react";

const icons = [Globe2, Award, Clock, HeadphonesIcon, DollarSign, Users2];

export default function WhyUs() {
  const t = useTranslations("whyUs");

  const items = Array.from({ length: 6 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
  }));

  return (
    <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration — only visible on large screens */}
      <div className="hidden lg:block absolute top-0 end-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 origin-top-end -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left header */}
          <div>
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
              {t("badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {t("title")}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              {t("subtitle")}
            </p>

            {/* Visual accent bars */}
            <div className="flex flex-col gap-2.5">
              {[35, 70, 50].map((w, i) => (
                <div key={i} className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon
                      size={19}
                      className="text-orange-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
