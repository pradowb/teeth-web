import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Differentials } from "@/components/sections/differentials";
import { Gallery } from "@/components/sections/gallery";
import { Team } from "@/components/sections/team";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { BookingProvider } from "@/components/booking-context";
import { BookingDialog } from "@/components/booking-dialog";

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <Team />
        <Process />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <BookingDialog />
    </BookingProvider>
  );
}
