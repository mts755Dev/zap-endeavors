import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
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
    title: isAr ? "من نحن" : "About Us",
    description: isAr
      ? "تعرف على زاب إندفرز، شركة متعددة التخصصات في الإنشاءات والتقنية والسياحة واللوجستيات"
      : "Learn about Zap Endeavors, a multi-disciplinary company in construction, technology, tourism, and logistics.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tp = await getTranslations({ locale, namespace: "pages.about" });
  const isAr = locale === "ar";

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  const values = [
    {
      icon: Target,
      title: isAr ? "التميز" : "Excellence",
      desc: isAr
        ? "نسعى دائماً لتقديم أفضل ما لدينا في كل مشروع وكل خدمة"
        : "We always strive to deliver our best in every project and service.",
    },
    {
      icon: Heart,
      title: isAr ? "النزاهة" : "Integrity",
      desc: isAr
        ? "نعمل بشفافية ومصداقية كاملة مع عملائنا وشركائنا"
        : "We operate with full transparency and credibility with our clients and partners.",
    },
    {
      icon: Eye,
      title: isAr ? "الابتكار" : "Innovation",
      desc: isAr
        ? "نتبنى أحدث التقنيات والأساليب لتقديم حلول مبتكرة ومتطورة"
        : "We embrace the latest technologies and methods to deliver innovative and advanced solutions.",
    },
  ];

  return (
    <>
      <PageHero
        title={tp("title")}
        subtitle={tp("subtitle")}
        image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=85"
        imageAlt="Zap Endeavors team"
        breadcrumbs={[{ label: tp("title") }]}
        locale={locale}
      />

      {/* Main About Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85"
                  alt="Zap Endeavors team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="hidden sm:block absolute -bottom-5 -end-5 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-orange-500">10+</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm leading-tight">
                      {isAr ? "سنوات خبرة" : "Years of Expertise"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -start-6 w-28 h-28 bg-orange-500/10 rounded-full blur-2xl -z-10 hidden lg:block" />
            </div>

            {/* Content */}
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
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {t("description2")}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
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

      {/* Mission / Vision / Values */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
              {t("valuesTitle")}
            </h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target size={26} className="text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t("missionTitle")}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t("missionText")}</p>
            </div>
            {/* Vision */}
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-7 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye size={26} className="text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{t("visionTitle")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t("visionText")}</p>
            </div>
            {/* Values */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart size={26} className="text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{isAr ? "قيمنا" : "Our Values"}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {isAr
                  ? "التميز، النزاهة، الابتكار، والالتزام بأعلى معايير الجودة في كل ما نقدمه"
                  : "Excellence, integrity, innovation, and commitment to the highest quality standards in everything we offer."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />
    </>
  );
}
