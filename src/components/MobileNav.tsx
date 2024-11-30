"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const path = usePathname();

  const closeSheetFn = () => setOpenSheet(false);
  return (
    <>
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild className="cursor-pointer sm:hidden">
          <RxHamburgerMenu size={28} />
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>

            <SheetDescription></SheetDescription>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeSheetFn}
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
                onClick={closeSheetFn}
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
                onClick={closeSheetFn}
                className={
                  path === "/project"
                    ? `font-medium text-foreground`
                    : `font-medium text-foreground/60`
                }
              >
                Project
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
