"use client";

import { ArrowUpRight } from "lucide-react";

import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";
import { useBooking } from "@/components/booking-context";

export function Services() {
  const { openBooking } = useBooking();

  return (
    <section id="servicos" className="section-y bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Tratamentos completos para cada etapa do seu sorriso"
            description="Da prevenção à reabilitação estética, cada procedimento é conduzido por especialistas com tecnologia digital de ponta."
          />
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <button
                onClick={openBooking}
                className="group relative flex h-full w-full flex-col items-start rounded-3xl border border-border/70 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Saiba mais
                  <ArrowUpRight className="size-4" />
                </span>
                <span className="pointer-events-none absolute right-6 top-6 text-4xl font-display text-primary/5 transition-colors duration-300 group-hover:text-primary/10">
                  0{services.indexOf(service) + 1}
                </span>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
