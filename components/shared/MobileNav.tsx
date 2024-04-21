"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <ThemeSwitch />
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/images/menu.png"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 sheet-background-color">
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={152}
                height={23}
              />

              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-color`}
                      key={link.route}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className="icon-brightness"
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <ThemeSwitch />
          <Button asChild className="button bg-orange-gradient bg-cover ml-2">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
