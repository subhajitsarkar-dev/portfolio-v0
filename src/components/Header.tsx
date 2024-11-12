"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import profile from "../../public/dp.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname();
  return (
    <>
      <header className="fixed top-0 w-full border-b">
        <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
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
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/"
              className={router === "/" ? `font-bold` : `font-normal`}
            >
              About
            </Link>
            <Link
              href="/skill"
              className={router === "/skill" ? `font-bold` : `font-normal`}
            >
              Skill
            </Link>
            <Link
              href="/project"
              className={router === "/project" ? `font-bold` : `font-normal`}
            >
              Project
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
