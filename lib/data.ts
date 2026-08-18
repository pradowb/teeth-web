import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Wand2,
  ScanFace,
  ShieldCheck,
  Baby,
  Smile,
  Microscope,
  Cpu,
  HeartHandshake,
  Gem,
  Clock,
  Award,
  PhoneCall,
  CalendarCheck,
  ClipboardList,
  Stethoscope,
  PartyPopper,
} from "lucide-react";
import { InstagramGlyph, FacebookGlyph, LinkedinGlyph } from "@/components/illustrations";

export const site = {
  name: "Auria",
  fullName: "Auria Odontologia",
  tagline: "Odontologia avançada, sorrisos autênticos",
  phone: "(11) 4002-8922",
  whatsapp: "5511940028922",
  email: "ola@auriaodontologia.com.br",
  address: "Alameda Santos, 1200 — Jardins, São Paulo/SP",
  hours: [
    { day: "Segunda a sexta", time: "08h às 20h" },
    { day: "Sábado", time: "09h às 14h" },
    { day: "Domingo", time: "Fechado" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: InstagramGlyph },
    { label: "Facebook", href: "https://facebook.com", icon: FacebookGlyph },
    { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinGlyph },
  ],
};

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Equipe", href: "#equipe" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: "18+", label: "Anos de experiência" },
  { value: "12k", label: "Sorrisos transformados" },
  { value: "4.9", label: "Avaliação média" },
];

export const aboutBenefits = [
  {
    icon: Microscope,
    title: "Diagnóstico digital de precisão",
    description:
      "Scanner intraoral 3D e tomografia própria para planejar cada tratamento com exatidão milimétrica.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado verdadeiramente humano",
    description:
      "Consultas sem pressa, explicações claras e um time que acompanha você em cada etapa do tratamento.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos de biossegurança premium",
    description:
      "Esterilização certificada e materiais de alto padrão em todos os procedimentos, sem exceções.",
  },
  {
    icon: Gem,
    title: "Resultados estéticos naturais",
    description:
      "Planejamento digital do sorriso para harmonizar cada detalhe ao seu rosto antes de iniciar o tratamento.",
  },
];

export const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    title: "Odontologia Estética",
    description:
      "Facetas de porcelana, lentes de contato dental e clareamento para um sorriso naturalmente luminoso.",
  },
  {
    icon: ScanFace,
    title: "Design Digital do Sorriso",
    description:
      "Simulação 3D do resultado final antes de começar, alinhando estética facial e expectativas.",
  },
  {
    icon: Wand2,
    title: "Implantodontia",
    description:
      "Implantes guiados por computador com cicatrização mais rápida e previsibilidade cirúrgica.",
  },
  {
    icon: Smile,
    title: "Ortodontia Invisível",
    description:
      "Alinhadores transparentes personalizados para corrigir o sorriso com máximo conforto e discrição.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    description:
      "Atendimento lúdico e acolhedor para que os pequenos cresçam com uma relação saudável com o dentista.",
  },
  {
    icon: Stethoscope,
    title: "Periodontia & Prevenção",
    description:
      "Tratamento de gengivas e programas preventivos que protegem a saúde bucal a longo prazo.",
  },
];

export const differentials = [
  {
    icon: Cpu,
    title: "Tecnologia de ponta",
    description:
      "Scanner 3D, tomografia digital e planejamento guiado por inteligência artificial em todas as etapas.",
  },
  {
    icon: Award,
    title: "Equipe multiespecialista",
    description:
      "Especialistas certificados que atuam em conjunto para entregar um tratamento verdadeiramente completo.",
  },
  {
    icon: Clock,
    title: "Agilidade sem pressa",
    description:
      "Agenda otimizada para reduzir o tempo de espera, mantendo a atenção total em cada consulta.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de satisfação",
    description:
      "Acompanhamento pós-tratamento dedicado, com ajustes incluídos para o resultado ideal.",
  },
];

export const galleryItems = [
  { title: "Recepção & Lounge", category: "Ambiente", tone: "from-emerald-800 to-emerald-950" },
  { title: "Suíte de Diagnóstico Digital", category: "Tecnologia", tone: "from-teal-700 to-emerald-900" },
  { title: "Consultório Premium", category: "Ambiente", tone: "from-amber-700 to-emerald-950" },
  { title: "Planejamento Digital do Sorriso", category: "Tecnologia", tone: "from-emerald-700 to-teal-950" },
  { title: "Centro Cirúrgico", category: "Estrutura", tone: "from-emerald-900 to-slate-950" },
  { title: "Espaço Kids", category: "Ambiente", tone: "from-amber-600 to-emerald-900" },
];

export const team = [
  {
    name: "Dra. Marina Ayres",
    role: "Diretora Clínica · Implantodontia",
    initials: "MA",
  },
  {
    name: "Dr. Rafael Toniolo",
    role: "Ortodontia Invisível",
    initials: "RT",
  },
  {
    name: "Dra. Camila Duprat",
    role: "Odontologia Estética",
    initials: "CD",
  },
  {
    name: "Dr. Lucas Venturi",
    role: "Periodontia",
    initials: "LV",
  },
  {
    name: "Dra. Beatriz Salum",
    role: "Odontopediatria",
    initials: "BS",
  },
  {
    name: "Dr. Igor Manzano",
    role: "Cirurgia Bucomaxilofacial",
    initials: "IM",
  },
];

export const process = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Primeiro contato",
    description: "Você entra em contato e nossa equipe entende sua necessidade e agenda a avaliação.",
  },
  {
    icon: ScanFace,
    step: "02",
    title: "Diagnóstico digital",
    description: "Scanner 3D e exames de imagem para mapear com precisão a saúde do seu sorriso.",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Plano personalizado",
    description: "Apresentamos o plano de tratamento, prazos e investimento, sem surpresas.",
  },
  {
    icon: CalendarCheck,
    step: "04",
    title: "Início do tratamento",
    description: "Consultas confortáveis, com acompanhamento próximo em cada sessão.",
  },
  {
    icon: PartyPopper,
    step: "05",
    title: "Sorriso renovado",
    description: "Resultado final revelado com manutenção e suporte contínuo pós-tratamento.",
  },
];

export const testimonials = [
  {
    name: "Fernanda Lacerda",
    role: "Paciente desde 2021",
    initials: "FL",
    quote:
      "Troquei de dentista depois de anos com medo de consultório. Na Auria fui tratada com tanto cuidado que hoje não perco uma revisão sequer.",
    rating: 5,
  },
  {
    name: "Eduardo Prado",
    role: "Implante dentário",
    initials: "EP",
    quote:
      "O planejamento digital me mostrou o resultado antes mesmo de começar o tratamento. Foi exatamente o que vi na simulação — impressionante.",
    rating: 5,
  },
  {
    name: "Juliana Matos",
    role: "Design do Sorriso",
    initials: "JM",
    quote:
      "Equipe extremamente atenciosa. Expliquei minhas inseguranças e saí com um sorriso que parece meu, só que melhor.",
    rating: 5,
  },
  {
    name: "Rodrigo Salles",
    role: "Ortodontia invisível",
    initials: "RS",
    quote:
      "Consegui alinhar meus dentes sem ninguém perceber o tratamento no trabalho. Atendimento pontual e ambiente impecável.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Como funciona a primeira consulta na Auria?",
    answer:
      "Na primeira visita realizamos uma anamnese completa, escaneamento digital 3D e avaliação clínica detalhada. Em seguida, apresentamos um plano de tratamento personalizado com prazos e valores transparentes.",
  },
  {
    question: "Vocês atendem convênios odontológicos?",
    answer:
      "Trabalhamos com os principais convênios do mercado e também oferecemos condições especiais para tratamentos particulares, com parcelamento facilitado direto na clínica.",
  },
  {
    question: "Quanto tempo dura um tratamento de Design do Sorriso?",
    answer:
      "Varia conforme a complexidade do caso, mas a maioria dos tratamentos estéticos é concluída entre 3 e 6 semanas, sempre com simulação prévia do resultado.",
  },
  {
    question: "Os alinhadores invisíveis servem para qualquer caso?",
    answer:
      "Os alinhadores atendem a maioria dos casos de desalinhamento leve a moderado. Na avaliação digital, indicamos com precisão se essa é a melhor solução para você.",
  },
  {
    question: "Como é feita a esterilização dos materiais?",
    answer:
      "Seguimos protocolos rígidos de biossegurança com autoclaves certificadas e materiais individuais esterilizados, garantindo total segurança em cada atendimento.",
  },
];
