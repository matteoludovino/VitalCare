import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  delay?: number;
}

function TestimonialCard({ name, role, rating, text, delay = 0 }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover h-full flex flex-col gap-5 relative overflow-hidden">
        <Quote
          className="absolute top-4 right-5 w-10 h-10 text-brand-100"
          aria-hidden
        />
        <StarRating count={rating} />
        <p className="text-gray-600 leading-relaxed text-sm flex-1">&ldquo;{text}&rdquo;</p>
        <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
          <div className="w-10 h-10 rounded-full bg-brand-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-tight">{name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que nossos pacientes dizem"
            description="A confiança dos nossos pacientes é o maior reconhecimento pelo nosso trabalho."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              role={t.role}
              rating={t.rating}
              text={t.text}
              delay={i * 100}
            />
          ))}
        </div>

        <AnimatedSection direction="up" delay={300} className="flex justify-center">
          <Button variant="outline" href="#">
            Ver mais avaliações
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
