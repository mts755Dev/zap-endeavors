import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Hammer, Building2, Hotel, Truck, Package, Code2, MapPin, ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "خدماتنا" : "Our Services",
    description: isAr
      ? "خدمات زاب إندفرز: قطع الأحجار، الإنشاءات، الخدمات اللوجستية، البرمجيات، والسياحة"
      : "Zap Endeavors services: stone cutting, construction, logistics, software development, and tourism.",
  };
}

const serviceImages = [
  // 1. Stone cutting & shaping — workers shaping stone blocks outdoors
  "https://images.unsplash.com/photo-1766499431070-8fb607724818?w=700&q=85",
  // 2. Residential construction — modern villa exterior
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85",
  // 3. Non-residential (schools, hospitals, hotels) — glass commercial building
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=85",
  // 4. Logistics — warehouse & supply chain
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=85",
  // 5. Software publishing — analytics dashboard on screen
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
  // 6. Custom software development — developer writing code
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=85",
  // 7. Tourist accommodation — luxury hotel pool & resort
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=85",
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const tp = await getTranslations({ locale, namespace: "pages.services" });

  const services = Array.from({ length: 7 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    category: t(`items.${i}.category`),
    icon: serviceIcons[i],
    image: serviceImages[i],
  }));

  return (
    <>
      <PageHero
        title={tp("title")}
        subtitle={tp("subtitle")}
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=85"
        imageAlt="Zap Endeavors services"
        breadcrumbs={[{ label: tp("title") }]}
        locale={locale}
      />

      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
              {t("badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">
              {t("title")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              {t("subtitle")}
            </p>
          </div>

          {/* 7-card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 start-4 w-11 h-11 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="absolute top-4 end-4">
                      <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90", categoryColors[service.category] || "text-gray-700")}>
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

          {/* CTA */}
          <div className="mt-14 sm:mt-16 text-center bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
              {locale === "ar"
                ? "هل تبحث عن خدمة معينة؟"
                : "Looking for a specific service?"}
            </h3>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              {locale === "ar"
                ? "تواصل معنا وسيتولى فريقنا المتخصص تقديم الحل المناسب لك"
                : "Contact us and our specialized team will provide the right solution for you."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg no-underline"
              )}
            >
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
