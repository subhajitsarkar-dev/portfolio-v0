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

          <nav>
            <Link href="" className=""></Link>
            <Link href="" className=""></Link>
            <Link href="" className=""></Link>
          </nav>

          {/* <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/"
                className={path === "/" ? `font-bold` : `font-normal`}
              >
                About
              </Link>
              <Link
                href="/skill"
                className={path === "/skill" ? `font-bold` : `font-normal`}
              >
                Skill
              </Link>
              <Link
                href="/project"
                className={path === "/project" ? `font-bold` : `font-normal`}
              >
                Project
              </Link>
            </div>
            <ThemeToggle />
            <MobileNav />
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
