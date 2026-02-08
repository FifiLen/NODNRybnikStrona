"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  transparent?: boolean;
}

interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
  submenu?: NavItem[];
}


const navLinks: NavItem[] = [
  { href: "/", label: "Strona główna" },
  {
    href: "/o-nas",
    label: "O nas",
    submenu: [
      { href: "/o-nas", label: "O NODN" },
      { href: "/o-nas/referencje", label: "Referencje" },
    ],
  },
  { href: "/szkolenia", label: "Szkolenia/Kursy" },
  { href: "/strefa-rodzica", label: "Strefa Nauczyciela/Rodzica" },

  { href: "/#co-za-nami", label: "Projekty" },

  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/dokumenty", label: "Dokumenty" },
  { href: "/skorzystaj", label: "Skorzystaj" },


  {
    href: "https://shop.rybnikonline.eu/",
    label: "Sklep",
    isExternal: true,
  },

  { href: "https://vr.rybnikonline.eu/", label: "VR/AR", isExternal: true },
  { href: "/kontakt", label: "Kontakt" },
];

const useDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, [closeDropdowns]);

  return {
    activeDropdown,
    setActiveDropdown,
    mobileActiveDropdown,
    setMobileActiveDropdown,
  };
};

const Logo = ({
  logoClasses,
  textClasses,
}: {
  logoClasses: string;
  textClasses: string;
}) => (
  <Link href="/" className="flex items-center group shrink-0">
    <div
      className={`w-16 h-16 ${logoClasses} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden`}
    >
      <Image
        height={64}
        width={64}
        src="/images/logo-nodn.jpg"
        alt="NODN Rybnik Logo"
        className="object-contain w-full h-full"
        priority
      />
    </div>
    <div className="ml-3 min-w-0">
      <div
        className={`text-lg font-bold transition-colors duration-300 ${textClasses} leading-tight`}
      >
        NODN Rybnik
      </div>
      <div
        className={`text-xs transition-colors duration-300 ${textClasses
          .replace("white", "white/80")
          .replace("gray-900", "gray-600")} leading-tight`}
      >
        Niepubliczny Ośrodek Doskonalenia Nauczycieli
      </div>
    </div>
  </Link>
);

const DesktopSubMenuItem = ({ sublink }: { sublink: NavItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const LinkComponent: any = sublink.isExternal ? "a" : Link;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LinkComponent
        href={sublink.href}
        {...(sublink.isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block px-4 py-3 text-sm transition-all duration-200 relative group/sub text-gray-700 hover:text-navy-600 hover:bg-navy-50"
      >
        <div className="flex items-center justify-between">
          <span>{sublink.label}</span>
          {sublink.submenu && (
            <ChevronRight className="h-4 w-4 transition-transform group-hover/sub:translate-x-1" />
          )}
        </div>
      </LinkComponent>
      {sublink.submenu && (
        <div
          className={`
            absolute top-0 left-full ml-1 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/20
            transition-all duration-300 origin-left
            ${
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="py-2">
            {sublink.submenu.map((nestedLink) => (
              <DesktopSubMenuItem key={nestedLink.href} sublink={nestedLink} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DesktopNavItem = ({
  link,
  isActive,
  activeDropdown,
  setActiveDropdown,
  baseTextClass,
}: {
  link: NavItem;
  isActive: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
  baseTextClass: string;
}) => {
  const isDropdownOpen = activeDropdown === link.href;
  const LinkComponent: any = link.isExternal ? "a" : Link;

  return (
    <div
      className="relative"
      onMouseEnter={() => link.submenu && setActiveDropdown(link.href)}
      onMouseLeave={() => link.submenu && setActiveDropdown(null)}
    >
      <div className="py-3">
        <LinkComponent
          href={link.href}
          {...(link.isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`
            relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1 whitespace-nowrap
            ${baseTextClass}
            ${isActive ? "bg-black/10 backdrop-blur-sm" : "hover:bg-black/10"}
          `}
          onClick={(e: any) => e.stopPropagation()}
        >
          {link.label}
          {link.isExternal && <ExternalLink className="w-3 h-3 ml-1" />}
          {link.submenu && (
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </LinkComponent>
      </div>

      {link.submenu && (
        <div
          className={`
            absolute top-full left-0 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/20
            transition-all duration-300 origin-top-left z-50
            ${
              isDropdownOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="py-2">
            {link.submenu.map((sublink) => (
              <DesktopSubMenuItem key={sublink.href} sublink={sublink} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenuItem = ({
  link,
  isActiveLink,
  closeMenu,
  level = 0,
}: {
  link: NavItem;
  isActiveLink: (href: string) => boolean;
  closeMenu: () => void;
  level?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const LinkComponent: any = link.isExternal ? "a" : Link;

  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <LinkComponent
          href={link.href}
          {...(link.isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`flex-1 p-3 rounded-lg flex items-center gap-2 ${
            isActiveLink(link.href)
              ? "text-navy-600 bg-navy-50"
              : "text-gray-700"
          } ${level > 0 ? "text-base" : "text-lg font-medium"}`}
          onClick={() => !link.submenu && closeMenu()}
        >
          {link.label}
          {link.isExternal && <ExternalLink className="w-4 h-4" />}
        </LinkComponent>
        {link.submenu && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-3"
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>
      {link.submenu && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
          style={{ paddingLeft: `${(level + 1) * 16}px` }}
        >
          <div className="border-l-2 border-gray-200 space-y-1 py-1">
            {link.submenu.map((sublink) => (
              <MobileMenuItem
                key={sublink.href}
                link={sublink}
                isActiveLink={isActiveLink}
                closeMenu={closeMenu}
                level={level + 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  navLinks,
  isActiveLink,
}: {
  isMenuOpen: boolean;
  closeMenu: () => void;
  navLinks: NavItem[];
  isActiveLink: (href: string) => boolean;
}) => (
  <div
    className={`
      absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl lg:hidden z-40
      transition-all duration-500 origin-top
      ${
        isMenuOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-95 pointer-events-none"
      }
    `}
  >
    <nav className="flex flex-col p-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
      {navLinks.map((link) => (
        <MobileMenuItem
          key={link.href}
          link={link}
          isActiveLink={isActiveLink}
          closeMenu={closeMenu}
        />
      ))}
      <div className="pt-4 mt-2 border-t">
        <Button
          asChild
          className="w-full bg-[#9E368C] hover:bg-[#8B2E7A] text-white"
        >
          <a
            href="https://odn.rybnikonline.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Platforma szkoleniowa NODN <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </nav>
  </div>
);

export function Header({ transparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeDropdown, setActiveDropdown } = useDropdown();
  const pathname = usePathname();

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      if (href === "/o-nas")
        return ["/o-nas", "/projekty"].some((p) => pathname.startsWith(p));
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const headerClasses = transparent
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`
    : "sticky top-0 z-50 bg-white shadow-sm";

  const textClasses =
    transparent && !isScrolled ? "text-white" : "text-gray-900";
  const logoClasses =
    transparent && !isScrolled ? "bg-white/20" : "bg-navy-600";
  const baseTextClass =
    transparent && !isScrolled ? "text-white/90" : "text-gray-700";
  const borderColor =
    transparent && !isScrolled ? "border-white/20" : "border-gray-200/80";

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="h-20 flex items-center justify-between">
            <Logo logoClasses={logoClasses} textClasses={textClasses} />
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex">
                <Button
                  asChild
                  size="sm"
                  className="bg-[#9E368C] hover:bg-[#8B2E7A] text-white"
                >
                  <a
                    href="https://odn.rybnikonline.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Platforma szkoleniowa NODN{" "}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className={textClasses} />
                  ) : (
                    <Menu className={textClasses} />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <nav
          className={`hidden lg:flex w-full border-t ${borderColor}`}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="container mx-auto px-4 lg:px-6 flex justify-center items-center h-14">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <DesktopNavItem
                  key={link.href}
                  link={link}
                  isActive={isActiveLink(link.href)}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  baseTextClass={baseTextClass}
                />
              ))}
            </div>
          </div>
        </nav>

        <div className="relative">
          <MobileMenu
            isMenuOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
            navLinks={navLinks}
            isActiveLink={isActiveLink}
          />
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
