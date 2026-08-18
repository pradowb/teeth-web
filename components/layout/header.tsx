"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ToothMark } from "@/components/illustrations";
import { navLinks, site } from "@/lib/data";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useActiveSection } from "@/hooks/use-active-section";
import { useBooking } from "@/components/booking-context";

export function Header() {
  const scrolled = useScrollPosition(20);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));
  const { openBooking } = useBooking();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/70 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ToothMark className="size-5" />
          </span>
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+${site.whatsapp}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary"
          >
            <PhoneCall className="size-4" />
            {site.phone}
          </a>
          <Button onClick={openBooking} className="h-10 rounded-full px-5">
            Agendar avaliação
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 font-display text-lg">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <ToothMark className="size-4" />
                </span>
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 px-4">
              <a
                href={`tel:+${site.whatsapp}`}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70"
              >
                <PhoneCall className="size-4" />
                {site.phone}
              </a>
              <SheetClose asChild>
                <Button
                  onClick={openBooking}
                  className="w-full rounded-full"
                >
                  Agendar avaliação
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
