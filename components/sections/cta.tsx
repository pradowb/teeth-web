"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { OrbitRings, SparkleBurst } from "@/components/illustrations";
import { site } from "@/lib/data";
import { useBooking } from "@/components/booking-context";

export function Cta() {
  const { openBooking } = useBooking();

  return (
    <section className="container-px mx-auto max-w-7xl py-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center shadow-2xl shadow-primary/20 sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-10" aria-hidden />
          <OrbitRings className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 text-white/50" />
          <OrbitRings className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 text-white/30" />
          <SparkleBurst className="pointer-events-none absolute left-14 top-10 h-6 w-6 text-gold" />
          <SparkleBurst className="pointer-events-none absolute bottom-12 right-16 h-8 w-8 text-gold" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Vagas limitadas esta semana
            </span>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              Seu novo sorriso começa com uma avaliação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Agende agora e receba um diagnóstico digital completo, sem compromisso,
              com um de nossos especialistas.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={openBooking}
                className="group h-12 rounded-full bg-white px-7 text-base text-primary hover:bg-white/90"
              >
                Agendar minha avaliação
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href={`tel:+${site.whatsapp}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
                >
                  <PhoneCall className="size-4" />
                  {site.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
