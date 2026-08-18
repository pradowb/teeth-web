import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";

import { ToothMark } from "@/components/illustrations";
import { navLinks, site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <ToothMark className="size-5" />
              </span>
              <span className="font-display text-xl font-medium text-white">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Odontologia avançada com cuidado humano — tecnologia digital e
              especialistas dedicados ao seu sorriso.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {site.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`tel:+${site.whatsapp}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-medium uppercase tracking-wider text-white">
              Horário de atendimento
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.hours.map((item) => (
                <li key={item.day} className="flex items-center justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="text-white/50">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {year} {site.fullName}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gold">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-gold">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
