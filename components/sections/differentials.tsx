"use client";

import { StaggerGroup, StaggerItem, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { OrbitRings, SparkleBurst } from "@/components/illustrations";
import { differentials } from "@/lib/data";
import { slideInRight } from "@/lib/motion";

export function Differentials() {
  return (
    <section id="diferenciais" className="section-y relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07]"
        aria-hidden
      />
      <OrbitRings className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] text-white" />

      <div className="container-px relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Por que a Auria"
            title="Diferenciais que elevam o padrão do seu tratamento"
            description="Unimos tecnologia, especialização e um ambiente cuidadosamente desenhado para oferecer uma experiência odontológica sem igual."
            light
          />

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <SparkleBurst className="size-8 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-white/70">
                &ldquo;Nosso compromisso é transformar cada visita em uma experiência
                confortável, precisa e transparente.&rdquo; — Direção Clínica Auria
              </p>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          {differentials.map((item) => (
            <StaggerItem key={item.title} variants={slideInRight}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.07]">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
