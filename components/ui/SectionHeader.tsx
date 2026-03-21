import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
