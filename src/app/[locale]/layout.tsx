import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import "../globals.css";

// Inter — industry-standard professional sans-serif for English UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Cairo — purpose-built for Arabic, excellent Latin coverage too
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: {
      default: isAr
        ? "زاب إندفرز | شركة متكاملة الخدمات"
        : "Zap Endeavors | Full-Service Company",
      template: isAr ? "%s | زاب إندفرز" : "%s | Zap Endeavors",
    },
    description: isAr
      ? "زاب إندفرز — شركة رائدة في الإنشاءات وقطع الأحجار والخدمات اللوجستية والبرمجيات والسياحة في المملكة العربية السعودية"
      : "Zap Endeavors — a leading company in construction, stone works, logistics, software development, and tourism in Saudi Arabia.",
    keywords: isAr
      ? ["زاب إندفرز", "شركة إنشاءات", "قطع أحجار", "خدمات لوجستية", "برمجيات", "سياحة", "مباني سكنية", "مباني تجارية", "المملكة العربية السعودية"]
      : ["Zap Endeavors", "construction company", "stone cutting", "logistics services", "software development", "tourism", "residential buildings", "commercial buildings", "Saudi Arabia"],
    authors: [{ name: "Zap Endeavors" }],
    creator: "Zap Endeavors",
    publisher: "Zap Endeavors",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      url: "https://zapendeavors.com",
      siteName: isAr ? "زاب إندفرز" : "Zap Endeavors",
    },
    alternates: {
      canonical: `https://zapendeavors.com/${locale}`,
      languages: {
        ar: "https://zapendeavors.com/ar",
        en: "https://zapendeavors.com/en",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isAr = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isAr ? "rtl" : "ltr"}
      className={`${inter.variable} ${cairo.variable}`}
      style={{
        fontFamily: isAr
          ? "var(--font-cairo), system-ui, sans-serif"
          : "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zap Endeavors",
              url: "https://zapendeavors.com",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Arabic", "English"],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
