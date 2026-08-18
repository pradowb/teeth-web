"use client";

import { StaggerGroup, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { InstagramGlyph, LinkedinGlyph } from "@/components/illustrations";
import { team } from "@/lib/data";

const palettes = [
  "from-primary to-emerald-800",
  "from-emerald-700 to-teal-900",
  "from-amber-600 to-primary",
  "from-teal-700 to-emerald-950",
  "from-primary to-teal-800",
  "from-emerald-800 to-slate-900",
];

export function Team() {
  return (
    <section id="equipe" className="section-y bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Especialistas dedicados ao seu sorriso"
          description="Um time multidisciplinar que combina experiência clínica, atualização constante e atenção genuína a cada paciente."
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <StaggerItem key={member.name}>
              <div className="group overflow-hidden rounded-3xl border border-border/70 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${palettes[index % palettes.length]}`}
                >
                  <span className="font-display text-5xl font-medium text-white/90">
                    {member.initials}
                  </span>
                  <div className="absolute inset-0 flex items-end justify-center gap-2 bg-ink/0 pb-4 opacity-0 transition-all duration-300 group-hover:bg-ink/20 group-hover:opacity-100">
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-ink">
                      <InstagramGlyph className="size-4" />
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-ink">
                      <LinkedinGlyph className="size-4" />
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
