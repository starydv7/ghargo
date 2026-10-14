
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "../css/Navbar.css";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore helpers", href: "/helpers" },
  { label: "How it works", href: "/#how-it-works" },
];

function GharGoLogo() {
  return (
    <Link href="/" className="ghargo-logo" aria-label="GharGo home">
      <span className="ghargo-logo-mark" aria-hidden="true">
        <svg
          viewBox="0 0 48 48"
          width="34"
          height="34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 22.5 24 9l16.5 13.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20.5V38h22V20.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 38V27h7v11"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 5v7M34.5 8.5h7"
            stroke="#D8FF67"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="ghargo-logo-copy">
        <strong>GharGo<span>.</span></strong>
        <small>HOME HELP, MADE HUMAN</small>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="ghargo-announcement">
        <span className="announcement-spark">✳</span>
        <span>Making everyday life a little lighter.</span>
        <span className="announcement-divider">·</span>
        <span className="announcement-city">Now starting in Patna, Bihar</span>
      </div>

      <header className="ghargo-navbar">
        <div className="ghargo-navbar-inner">
          <GharGoLogo />

          <nav
            className={`ghargo-nav-links ${menuOpen ? "ghargo-nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : link.href === "/helpers"
                    ? pathname.startsWith("/helpers")
                    : false;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ghargo-nav-link ${active ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="ghargo-mobile-actions">
              <Link
                href="/booking"
                className="ghargo-booking-link"
                onClick={() => setMenuOpen(false)}
              >
                My bookings <span>↗</span>
              </Link>
              <Link
                href="/helpers"
                className="ghargo-primary-cta"
                onClick={() => setMenuOpen(false)}
              >
                Find home help <span>↗</span>
              </Link>
            </div>
          </nav>

          <div className="ghargo-nav-right">
            <div className="ghargo-location">
              <span className="ghargo-location-icon">⌖</span>
              <span>
                <small>YOUR LOCATION</small>
                <strong>Patna, Bihar</strong>
              </span>
              <span className="ghargo-location-chevron">⌄</span>
            </div>

            <Link href="/booking" className="ghargo-booking-link">
              My bookings
            </Link>

            <Link href="/helpers" className="ghargo-primary-cta">
              Find home help <span>↗</span>
            </Link>
          </div>

          <button
            type="button"
            className={`ghargo-menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
