interface SectionTitleProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className = "text-center mb-12 md:mb-16",
  titleClassName = "text-3xl md:text-4xl font-bold text-navy-900",
  subtitleClassName = "text-lg text-gray-600 mt-2 max-w-3xl mx-auto",
}: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
}
