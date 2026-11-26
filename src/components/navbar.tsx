"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  registrationUrl: string;
}

export function Navbar({ navLinks, registrationUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-30 mx-auto flex h-24 w-full max-w-[1380px] items-center justify-between px-6 sm:px-10 lg:px-12">
      {/* Brand Logo */}
      <a
        href="https://wealthconomy.org"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Wealthconomy Home"
        className="group flex items-center transition-opacity hover:opacity-90"
        onClick={handleLinkClick}
      >
        <img
          src="/wealthconomy-logo-new.png"
          alt="Wealthconomy"
          className="h-[40px] sm:h-[46px] lg:h-[50px] w-auto object-contain brightness-0 invert"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] font-medium text-white/95 transition-colors hover:text-[#f8c860] xl:text-[15px]"
          >
            {link.label}
          </a>
        ))}
        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-flex items-center justify-center rounded-full bg-[#f8c860] px-7 py-3 text-[14px] font-bold text-[#0E4547] transition-all hover:bg-[#ffd768] active:scale-95"
        >
          Register free
        </a>
      </nav>

      {/* Mobile Hamburger Menu Button */}
      <div className="flex items-center lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#f8c860] active:scale-95"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown Container */}
          <div className="absolute left-4 right-4 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/20 bg-[#0E4547]/95 p-5 shadow-2xl backdrop-blur-xl sm:left-10 sm:right-10 lg:hidden">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold text-white/95 transition-colors hover:bg-white/10 hover:text-[#f8c860] active:bg-white/15"
                >
                  <span>{link.label}</span>
                  <svg
                    className="h-4 w-4 text-[#f8c860]/75"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-white/15">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center rounded-full bg-[#f8c860] py-3.5 text-center text-[15px] font-bold text-[#0E4547] shadow-lg transition-all hover:bg-[#ffd768] active:scale-[0.98]"
              >
                Register free
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
