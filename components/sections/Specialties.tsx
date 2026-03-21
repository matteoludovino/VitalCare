import {
  Stethoscope, Heart, Scissors, Sparkles, Activity, Baby,
  Users, Droplets, Shield, HeartPulse, Brain, Eye,
  Microscope, Ear, Zap, BrainCircuit,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { specialties } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Heart, Scissors, Sparkles, Activity, Baby,
  Users, Droplets, Shield, HeartPulse, Brain, Eye,
  Microscope, Ear, Zap, BrainCircuit,
};

interface SpecialtyCardProps {
  icon: string;
  name: string;
  description: string;
  delay?: number;
}

function SpecialtyCard({ icon, name, description, delay = 0 }: SpecialtyCardProps) {
  const Icon = iconMap[icon] ?? Stethoscope;

  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover h-full flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-base mb-1.5">{name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Specialties() {
  return (
    <section id="specialties" className="bg-gradient-brand section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeader
            eyebrow="O que oferecemos"
            title="Nossas Especialidades"
            description="Uma equipe completa de especialistas dedicados ao cuidado da sua saúde e bem-estar."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {specialties.map((s, i) => (
            <SpecialtyCard
              key={s.id}
              icon={s.icon}
              name={s.name}
              description={s.description}
              delay={(i % 4) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
