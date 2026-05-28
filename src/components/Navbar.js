"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine navbar appearance
  const isDarkBackground = isHomePage && !scrolled;
  const textColor = isDarkBackground ? "text-white" : "text-gray-900";
  const textHover = isDarkBackground ? "hover:text-yellow-400" : "hover:text-yellow-600";
  const bgStyle = isDarkBackground
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100";

  const links = [
    { href: "/", label: "Home" },
    { href: "/solar", label: "Solar Services" },
    { href: "/electrical", label: "Electrical" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgStyle}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/images/jah-logo.png"
                  alt="Jah Solar Energy and Electrical"
                  fill
                  className="object-contain transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <span
                className={`font-bold text-sm lg:text-base transition-colors duration-500 ${textColor} ${textHover}`}
              >
                Jah Solar Energy and Electrical
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/25"
                        : `${textColor} ${textHover} hover:bg-yellow-500/10`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="tel:+2347035362804"
                className="ml-3 inline-flex items-center gap-2 bg-yellow-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-60 p-2 rounded-lg transition-colors ${
                isDarkBackground && !isOpen
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(17, 24, 39, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-3 px-6">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl sm:text-3xl font-bold py-3 px-6 rounded-2xl transition-all duration-300 w-full text-center ${
                  isActive
                    ? "bg-yellow-500 text-white"
                    : "text-white hover:bg-white/5 hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="w-full h-px bg-white/10 my-4"></div>
          
          <a
            href="tel:+2347035362804"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-yellow-500/30 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call 0703 536 2804
          </a>
          <a
            href="tel:+2348128830809"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call 0812 883 0809
          </a>
        </div>
      </div>
    </>
  );
}