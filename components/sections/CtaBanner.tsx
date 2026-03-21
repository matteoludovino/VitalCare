import { Phone, CalendarDays } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { benefits } from "@/lib/data";
import { Clock, ShieldCheck, Heart, Award } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Clock, ShieldCheck, Heart, Award,
};

export function CtaBanner() {
  return (
    <section className="bg-gradient-brand section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Heart;
            return (
              <AnimatedSection key={b.title} delay={i * 80} direction="up">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up">
          <div className="relative bg-brand-700 rounded-3xl px-8 py-14 md:px-14 overflow-hidden text-white">
            <div
              aria-hidden
              className="absolute top-0 right-0 w-72 h-72 bg-brand-600/40 rounded-full blur-3xl translate-x-16 -translate-y-16"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/30 rounded-full blur-2xl -translate-x-10 translate-y-10"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <span className="inline-block text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">
                  Pronto para cuidar de você
                </span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Agende sua consulta hoje
                  <br className="hidden md:block" /> e dê o primeiro passo.
                </h2>
                <p className="mt-3 text-brand-200 max-w-lg mx-auto lg:mx-0">
                  Nossa equipe está pronta para atendê-lo com excelência e cuidado. Entre em contato agora mesmo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                <Button
                  href="#specialties"
                  size="lg"
                  variant="light"
                >
                  <CalendarDays className="w-5 h-5" />
                  Agendar Online
                </Button>
                <a
                  href="tel:+5521983947259"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-brand-400 text-white font-semibold hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300 text-base"
                >
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
