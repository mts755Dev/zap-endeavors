import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import { Badge } from "@/components/ui/badge";
import {
  Globe2, Award, Clock, HeadphonesIcon, DollarSign, Users2,
} from "lucide-react";
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
    title: isAr ? "لماذا نحن" : "Why Choose Us",
    description: isAr
      ? "تعرف على ما يميز زاب إندفرز ويجعلنا الخيار الأمثل لشراكتك"
      : "Discover what sets Zap Endeavors apart and makes us the ideal choice for your partnership.",
  };
}

const icons = [Globe2, Award, Clock, HeadphonesIcon, DollarSign, Users2];

export default async function WhyUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyUs" });
  const tp = await getTranslations({ locale, namespace: "pages.whyUs" });

  const items = Array.from({ length: 6 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
  }));

  return (
    <>
      <PageHero
        title={tp("title")}
        subtitle={tp("subtitle")}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85"
        imageAlt="Zap Endeavors team"
        breadcrumbs={[{ label: tp("title") }]}
        locale={locale}
      />

      {/* Main Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <Badge className="bg-orange-100 text-orange-600 border-orange-200 mb-4 px-4 py-1.5 font-semibold">
              {t("badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {t("title")}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-6 sm:p-7 rounded-2xl border border-gray-100 bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-orange-500 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2.5 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 sm:mt-16 text-center">
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              {locale === "ar"
                ? "هل أنت مستعد للعمل معنا؟ تواصل معنا واحصل على استشارة مجانية"
                : "Ready to work with us? Contact us and get a free consultation."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg no-underline"
              )}
            >
              {locale === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <Stats />
    </>
  );
}
