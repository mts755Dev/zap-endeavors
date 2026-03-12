import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  locale: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
  locale,
}: PageHeroProps) {
  const isAr = locale === "ar";

  return (
    <section className="relative pt-16 sm:pt-20 overflow-hidden">
      {/* Background */}
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Orange left accent */}
        <div className="absolute top-0 start-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-orange-400/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            {/* Breadcrumbs */}
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm mb-3 flex-wrap"
            >
              <Link
                href={`/${locale}`}
                className="flex items-center gap-1 hover:text-orange-400 transition-colors"
              >
                <Home size={13} />
                <span className="hidden sm:inline">
                  {isAr ? "الرئيسية" : "Home"}
                </span>
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {isAr ? (
                    <ChevronLeft size={13} className="flex-shrink-0" />
                  ) : (
                    <ChevronRight size={13} className="flex-shrink-0" />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {title}
            </h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom orange accent line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />
    </section>
  );
}
