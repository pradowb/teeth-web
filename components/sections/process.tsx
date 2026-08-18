"use client";

import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="processo" className="section-y bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como funciona"
          title="Sua jornada até um novo sorriso"
          description="Um processo transparente, do primeiro contato ao resultado final, com acompanhamento próximo em cada etapa."
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="relative mt-16 grid gap-8 md:grid-cols-5 md:gap-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {process.map((item) => (
            <StaggerItem key={item.step} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-sm">
                <item.icon className="size-6" />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-gold-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
