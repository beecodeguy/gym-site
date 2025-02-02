import { NAV_LINKS } from "@/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialLinks } from "./social-links";

const NavLink = ({ href, title }: { href: string; title: string }) => (
  <Link
    href={href}
    className="uppercase text-xl font-bold hover:text-red-500 transition-all ease-in"
  >
    {title}
  </Link>
);

export const Navbar = () => {
  return (
    <div className="rounded-sm p-4 flex items-center justify-between shadow-lg border-b">
      <Link href="/" className="text-2xl font-bold tracking-wider">
        <div className="flex items-center">
          <Image width={90} height={90} alt="logo" src="/img/logo.png" />
        </div>
      </Link>
      <nav className="hidden md:flex md:items-center gap-6">
        {NAV_LINKS.map((navLink) => (
          <NavLink key={navLink.href} {...navLink} />
        ))}
      </nav>
      <SocialLinks />
    </div>
  );
};
