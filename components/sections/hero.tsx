"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { OrbitRings, SparkleBurst } from "@/components/illustrations";
import { heroStats } from "@/lib/data";
import { fadeUp, scaleIn } from "@/lib/motion";
import { useBooking } from "@/components/booking-context";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-noise opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Coluna de texto */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
              <Sparkles className="size-3.5 text-gold" />
              Odontologia de alta precisão
            </span>
          </Reveal>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="mt-6 font-display text-4xl font-medium leading-[1.08] text-balance text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Um sorriso planejado com{" "}
            <span className="relative inline-block text-primary">
              ciência
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-gold"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            e cuidado de verdade.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A Auria une tecnologia de diagnóstico digital, especialistas dedicados e
            um ambiente pensado para o seu conforto — para transformar sua saúde
            bucal em confiança visível.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" onClick={openBooking} className="group h-12 rounded-full px-7 text-base">
              Agendar avaliação gratuita
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="#processo">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/20 bg-white px-7 text-base text-ink hover:bg-primary/5"
              >
                <PlayCircle className="size-5 text-primary" />
                Como funciona
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.32 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-border/70 pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-medium text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Coluna visual */}
        <div className="relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={scaleIn}
            transition={{ delay: 0.1 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/40 bg-ink shadow-2xl shadow-primary/20"
          >
            <video
              className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Animação 3D de um dente em corte anatômico"
            >
              <source src="/videos/hero-tooth.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/5 to-transparent" />
            <OrbitRings className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 text-white/40" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Diagnóstico 3D
              </p>
              <p className="mt-1 font-display text-lg text-white">
                Cada detalhe do seu sorriso, mapeado com precisão
              </p>
            </div>
          </motion.div>

          {/* Cartão flutuante — avaliação */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-6 top-10 hidden w-48 rounded-2xl border border-border/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:block"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">4.9 de satisfação</p>
            <p className="text-xs text-muted-foreground">+1.200 avaliações</p>
          </motion.div>

          {/* Cartão flutuante — biossegurança */}
          <motion.div
            initial={{ opacity: 0, y: -20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 bottom-16 hidden w-52 rounded-2xl border border-border/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Biossegurança total</p>
              <p className="text-xs text-muted-foreground">Protocolos certificados</p>
            </div>
          </motion.div>

          <SparkleBurst className="pointer-events-none absolute -bottom-6 left-8 hidden h-10 w-10 text-gold md:block" />
        </div>
      </div>
    </section>
  );
}
