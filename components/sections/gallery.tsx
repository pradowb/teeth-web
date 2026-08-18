"use client";

import { Maximize2 } from "lucide-react";

import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ToothMark } from "@/components/illustrations";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { scaleIn } from "@/lib/motion";

export function Gallery() {
  return (
    <section id="galeria" className="section-y bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galeria"
          title="Um ambiente pensado para o seu conforto"
          description="Conheça os espaços da clínica — projetados para unir tecnologia de ponta e uma atmosfera acolhedora em cada detalhe."
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-14 grid auto-rows-[16rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {galleryItems.map((item, index) => (
            <StaggerItem
              key={item.title}
              variants={scaleIn}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                index === 0 && "col-span-2 row-span-2 md:col-span-2",
                index === 3 && "md:row-span-2"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-110",
                  item.tone
                )}
              />
              <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/35" />
              <ToothMark className="absolute -bottom-6 -right-6 h-28 w-28 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:text-white/15" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {item.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-white">
                  {item.title}
                </h3>
              </div>

              <span className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
