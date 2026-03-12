import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import HomeServices from "@/components/sections/HomeServices";
import About from "@/components/sections/About";
import HomeCTA from "@/components/sections/HomeCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الرئيسية" : "Home",
    description: isAr
      ? "زاب إندفرز — شركة رائدة في الإنشاءات وقطع الأحجار والخدمات اللوجستية والبرمجيات والسياحة"
      : "Zap Endeavors — leading company in construction, stone works, logistics, software, and tourism.",
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="stats">
        <Stats />
      </div>
      <About />
      <HomeServices />
      <HomeCTA />
    </>
  );
}
