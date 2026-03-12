"use client";

import { useTranslations, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const isAr = locale === "ar";

  const navLinks = [
    { href: `/${locale}`, label: tNav("home") },
    { href: `/${locale}/about`, label: tNav("about") },
    { href: `/${locale}/services`, label: tNav("services") },
    { href: `/${locale}/projects`, label: tNav("projects") },
    { href: `/${locale}/why-us`, label: tNav("whyUs") },
    { href: `/${locale}/contact`, label: tNav("contact") },
  ];

  const serviceLinks = [
    {
      label: isAr ? "قطع وتشكيل الأحجار" : "Stone Cutting & Shaping",
      href: `/${locale}/services`,
    },
    {
      label: isAr ? "إنشاءات المباني السكنية" : "Residential Construction",
      href: `/${locale}/services`,
    },
    {
      label: isAr ? "الخدمات اللوجستية" : "Logistics Services",
      href: `/${locale}/services`,
    },
    {
      label: isAr ? "تطوير البرمجيات" : "Software Development",
      href: `/${locale}/services`,
    },
    {
      label: isAr ? "الخدمات السياحية" : "Tourism Services",
      href: `/${locale}/services`,
    },
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-5 w-fit">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">Z</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-lg text-white">
                  {isAr ? "زاب" : "ZAP"}
                </span>
                <span className="text-orange-500 font-semibold text-[10px] tracking-widest uppercase">
                  {isAr ? "إندفرز" : "ENDEAVORS"}
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              {t("description")}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                  >
                    <Icon size={15} className="text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              {t("ourServices")}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom bar */}
        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-start">
            © {new Date().getFullYear()} {t("company")} — {t("rights")}
          </p>
          <Link
            href={`/${locale === "ar" ? "en" : "ar"}`}
            className="text-gray-500 hover:text-orange-400 text-xs sm:text-sm transition-colors"
          >
            {locale === "ar" ? "English" : "عربي"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
