"use client";

import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Hammer,
  Building2,
  Hotel,
  Truck,
  Package,
  Code2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const serviceImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=75",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=75",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=75",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=75",
];

const serviceIcons = [Hammer, Building2, Hotel, Truck, Package, Code2, MapPin];

const categoryColors: Record<string, string> = {
  "إنشاء وبناء": "bg-amber-100 text-amber-700 border-amber-200",
  Construction: "bg-amber-100 text-amber-700 border-amber-200",
  لوجستيات: "bg-blue-100 text-blue-700 border-blue-200",
  Logistics: "bg-blue-100 text-blue-700 border-blue-200",
  تقنية: "bg-violet-100 text-violet-700 border-violet-200",
  Technology: "bg-violet-100 text-violet-700 border-violet-200",
  سياحة: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Tourism: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const services = Array.from({ length: 7 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    category: t(`items.${i}.category`),
    icon: serviceIcons[i],
    image: serviceImages[i],
  }));

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
            {t("badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 start-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  {/* Category */}
                  <div className="absolute top-4 end-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm bg-white/90 ${
                        categoryColors[service.category] ||
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900 leading-snug">
                      {service.title}
                    </CardTitle>
                    <ArrowUpRight
                      size={16}
                      className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                    />
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
