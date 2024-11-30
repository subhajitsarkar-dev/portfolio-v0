"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import profile from "../../public/dp.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-foreground/20 backdrop-blur">
        <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-2">
          <div className="">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={profile}
                alt="profile Image"
                height={40}
                width={40}
                className="rounded-full"
              />

              <div className="text-2xl font-semibold">Subhajit</div>
            </Link>
          </div>

          <nav className="hidden grid-cols-4 place-items-center gap-2 sm:grid">
            <Link
              href="/"
              className={
                path === "/"
                  ? `font-medium text-foreground`
                  : `font-medium text-foreground/60`
              }
            >
              About
            </Link>
            <Link
              href="/skill"
              className={
                path === "/skill"
                  ? `font-medium text-foreground`
                  : `font-medium text-foreground/60`
              }
            >
              Skill
            </Link>
            <Link
              href="/project"
              className={
                path === "/project"
                  ? `font-medium text-foreground`
                  : `font-medium text-foreground/60`
              }
            >
              Project
            </Link>
            <div className="">
              <ThemeToggle />
            </div>
          </nav>

          <nav className="grid grid-flow-col place-items-center gap-2 sm:hidden">
            <div className="">
              <ThemeToggle />
            </div>
            <div className="">
              <MobileNav />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
