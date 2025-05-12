import type { ReactNode } from "react";

interface CalculatorButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant: 'secondary' | 'primary' | 'accent';
  span?: boolean;
}

export function CalculatorBtn({
  children,
  onClick,
  variant,
}: CalculatorButtonProps) {
  const baseStyles = 'w-full rounded-xl py-2 text-xl font-medium transition-all active:scale-95 cursor-pointer';

  const variantStyles = {
    primary: 'key-primary',
    secondary: 'key-secondary',
    accent: 'key-accent',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
};