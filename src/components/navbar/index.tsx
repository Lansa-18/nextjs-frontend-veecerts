"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ellipseAddress } from "@/lib/utils/text";
import { useAtomValue } from "jotai";
import { agentAtom } from "@/stores/atoms/icp-agents";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Label } from "recharts";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const store = useAtomValue(agentAtom);
  const pathName = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "pricing", label: "Pricing" },
    { id: "socials", label: "Socials" },
    { id: "teams", label: "Teams", href: "/teams" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between text-gray items-center px-[47px] py-[4px] lg:px-[47px]">
        {/* Logo */}
        <Link href="/">
          <Image src="/veeLogo.svg" width={190.33} height={57} alt="Logo" />
        </Link>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-5">
          {navLinks.map((link, index) => {
            if (link.href) {
              return (
                <Link
                  className={`text-gray-600 hover:text-gray-800 ${pathName === link.href ? "text-blue" : ""}`}
                  href={link.href}
                  key={index}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-gray-800"
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Language and Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <span>English</span>
          {store.profile ? (
            <>
              <Button variant="secondary" className="w-full">
                {ellipseAddress(store.profile?.principal.toString(), 10)}
              </Button>
              <Link
                href="/signout"
                className="border-2 rounded-xl px-6 p-1  border-black"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="border-2 rounded-xl px-6 p-1  border-black"
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white shadow-lg px-6 py-4`}
      >
        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-5 text-gray">
          {navLinks.map((link, index) => {
            if (link.href) {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-800 text-left"
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Language and Buttons */}
        <div className="flex flex-col gap-5 mt-4 text-gray">
          <span className="pt-2">English</span>
          <Link
            href="/signin"
            className="border-2 rounded-xl px-6 p-1  border-black"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
