"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="section-y bg-background">
      <div className="container-px mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que ouvimos com frequência"
          description="Não encontrou o que procurava? Fale com nossa equipe e responderemos com todo o cuidado."
        />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-2xl border border-border/70 bg-white px-6 mb-3 data-[state=open]:border-primary/25 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-ink hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
