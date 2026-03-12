import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "تواصل معنا" : "Contact Us",
    description: isAr
      ? "تواصل مع زاب إندفرز للحصول على استشارة مجانية ومناقشة مشروعك"
      : "Contact Zap Endeavors for a free consultation and to discuss your project.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tp = await getTranslations({ locale, namespace: "pages.contact" });

  return (
    <>
      <PageHero
        title={tp("title")}
        subtitle={tp("subtitle")}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        imageAlt="Contact Zap Endeavors"
        breadcrumbs={[{ label: tp("title") }]}
        locale={locale}
      />

      <Contact />
    </>
  );
}
