"use client";

import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  Hammer, Building2, Hotel, Truck, Package, Code2, MapPin, ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const serviceImages = [
  // 1. Stone cutting & shaping — workers shaping stone blocks outdoors
  "https://images.unsplash.com/photo-1766499431070-8fb607724818?w=600&q=85",
  // 2. Residential construction
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=85",
  // 3. Non-residential (schools, hospitals, hotels)
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
  // 4. Logistics
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=85",
  // 5. Software publishing
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=85",
  // 6. Custom software development
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=85",
  // 7. Tourist accommodation booking
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=85",
];

const serviceIcons = [Hammer, Building2, Hotel, Truck, Package, Code2, MapPin];

const categoryColors: Record<string, string> = {
  "إنشاء وبناء": "bg-amber-100 text-amber-700",
  Construction: "bg-amber-100 text-amber-700",
  لوجستيات: "bg-blue-100 text-blue-700",
  Logistics: "bg-blue-100 text-blue-700",
  تقنية: "bg-violet-100 text-violet-700",
  Technology: "bg-violet-100 text-violet-700",
  سياحة: "bg-emerald-100 text-emerald-700",
  Tourism: "bg-emerald-100 text-emerald-700",
};

// Shows only first 3 services on the home page
export default function HomeServices() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = Array.from({ length: 3 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    category: t(`items.${i}.category`),
    icon: serviceIcons[i],
    image: serviceImages[i],
  }));

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-3 px-4 py-1.5 font-semibold">
              {t("badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              {t("title")}
            </h2>
          </div>
          <Link
            href={`/${locale}/services`}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex-shrink-0 border-orange-200 text-orange-600 hover:bg-orange-50 font-semibold no-underline self-start sm:self-auto"
            )}
          >
            {t("viewAll")} →
          </Link>
        </div>

        {/* Services Grid — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 start-4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="absolute top-4 end-4">
                    <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90", categoryColors[service.category])}>
                      {service.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {service.title}
                    </CardTitle>
                    <ArrowUpRight size={16} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-500 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile "view all" button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href={`/${locale}/services`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-orange-500 hover:bg-orange-600 text-white font-bold no-underline"
            )}
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
