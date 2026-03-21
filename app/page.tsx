import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Specialties } from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Specialties />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
