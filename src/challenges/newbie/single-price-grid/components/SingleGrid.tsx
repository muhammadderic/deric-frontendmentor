interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionGrid({ title, children, className = '' }: CardProps) {
  return (
    <div className={`p-6 md:p-8 ${className}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}