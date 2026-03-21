import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="stats" className="bg-white py-12 border-y border-gray-100">
      <div className="container-narrow px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              direction="up"
              delay={i * 100}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-brand-600 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1.5 text-sm md:text-base text-gray-500 font-medium">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
