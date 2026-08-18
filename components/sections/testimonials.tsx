"use client";

import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

const palettes = [
  "from-primary to-emerald-800",
  "from-amber-600 to-primary",
  "from-teal-700 to-emerald-950",
  "from-emerald-700 to-slate-900",
];

export function Testimonials() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="depoimentos" className="section-y bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Histórias reais de quem confiou no seu sorriso à Auria"
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.15} className="mt-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay]}
            className="mx-auto max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/2">
                  <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-white p-8 shadow-sm">
                    <Quote className="size-8 text-gold" />
                    <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-display text-sm font-medium text-white ${palettes[index % palettes.length]}`}
                      >
                        {testimonial.initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5 text-gold">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
