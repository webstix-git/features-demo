import { ReactNode } from "react";

interface VariantSectionProps {
  label: string;
  title: string;
  children: ReactNode;
}

const VariantSection = ({ label, title, children }: VariantSectionProps) => (
  <div className="mb-16 last:mb-0">
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        {label}
      </span>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    {children}
  </div>
);

export default VariantSection;
