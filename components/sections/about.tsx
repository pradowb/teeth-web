"use client";

import { CheckCircle2 } from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ToothMark, OrbitRings, SparkleBurst } from "@/components/illustrations";
import { aboutBenefits } from "@/lib/data";
import { slideInLeft } from "@/lib/motion";

export function About() {
  return (
    <section id="sobre" className="section-y relative overflow-hidden bg-background">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal variants={slideInLeft} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-emerald-950 shadow-2xl shadow-primary/20">
              <OrbitRings className="absolute inset-0 h-full w-full text-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ToothMark className="h-40 w-40 text-white/90" />
              </div>
              <SparkleBurst className="absolute right-10 top-10 h-8 w-8 text-gold" />
              <SparkleBurst className="absolute bottom-14 left-10 h-5 w-5 text-white/60" />
            </div>

            <div className="absolute -bottom-8 -right-6 w-52 rounded-2xl border border-border/70 bg-white p-5 shadow-xl">
              <p className="font-display text-3xl font-medium text-primary">18 anos</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Cuidando de sorrisos com excelência clínica
              </p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre a Auria"
            title="Odontologia que combina precisão clínica e acolhimento genuíno"
            description="Somos uma clínica multiespecialista dedicada a oferecer diagnósticos precisos e tratamentos personalizados, em um ambiente que coloca o seu bem-estar no centro de cada decisão."
          />

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
            {aboutBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="group h-full rounded-2xl border border-border/70 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <benefit.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-medium text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
              <CheckCircle2 className="size-4" />
              Certificação em biossegurança e atualização contínua da equipe
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
