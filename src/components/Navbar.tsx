"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isAr = locale === "ar";

  // Determine if we are on the home page to use transparent nav
  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    // Replace locale segment in current path
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath || `/${nextLocale}`);
  };

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/why-us`, label: t("whyUs") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isTransparent = isHome && !scrolled;

  const isActive = (href: string) => {
    if (href === `/${locale}` || href === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md group-hover:bg-orange-600 transition-colors">
              <span className="text-white font-black text-base sm:text-lg">Z</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-black text-base sm:text-lg transition-colors",
                  isTransparent ? "text-white" : "text-gray-900"
                )}
              >
                {isAr ? "زاب" : "ZAP"}
              </span>
              <span className="text-orange-500 font-semibold text-[10px] tracking-widest uppercase">
                {isAr ? "إندفرز" : "ENDEAVORS"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(link.href)
                    ? "text-orange-500 bg-orange-50"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={switchLocale}
              className={cn(
                "flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-orange-600 border",
                isTransparent
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-gray-200 text-gray-700 hover:bg-orange-50"
              )}
              aria-label={isAr ? "Switch to English" : "التبديل للعربية"}
            >
              <Globe size={14} />
              <span className="text-xs sm:text-sm">{isAr ? "EN" : "عربي"}</span>
            </button>

            {/* CTA Button - desktop only */}
            <Link
              href={`/${locale}/contact`}
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-orange-200 transition-all duration-200 no-underline text-sm"
              )}
            >
              {t("cta")}
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Menu size={20} />
              </SheetTrigger>
              <SheetContent
                side={isAr ? "right" : "left"}
                className="w-[280px] sm:w-[320px] bg-white p-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile header */}
                  <div className="flex items-center p-5 border-b bg-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black">Z</span>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="font-black text-gray-900 text-sm">
                          {isAr ? "زاب إندفرز" : "Zap Endeavors"}
                        </span>
                        <span className="text-orange-500 text-[10px] font-medium">
                          {isAr ? "شركة متكاملة الخدمات" : "Full-Service Company"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile nav links */}
                  <nav className="flex flex-col p-3 gap-1 flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl font-medium transition-all text-sm",
                          isActive(link.href)
                            ? "bg-orange-50 text-orange-600 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t bg-gray-50 space-y-2">
                    <Link
                      href={`/${locale}/contact`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full flex justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold no-underline"
                      )}
                    >
                      {t("cta")}
                    </Link>
                    <button
                      onClick={switchLocale}
                      className="w-full flex items-center justify-center gap-2 py-2 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                    >
                      <Globe size={14} />
                      {isAr ? "Switch to English" : "التبديل إلى عربي"}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
