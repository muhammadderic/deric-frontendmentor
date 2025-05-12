import type { ReactNode } from "react";

interface CalculatorButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant: 'number' | 'operator' | 'function';
  span?: boolean;
}

export function CalculatorBtn({
  children,
  onClick,
  variant,
}: CalculatorButtonProps) {
  const baseStyles = 'w-full rounded-xl py-3 text-xl font-medium transition-all active:scale-95 cursor-pointer';

  const variantStyles = {
    number: 'bg-gray-700 hover:bg-gray-600 text-white',
    operator: 'bg-orange-500 hover:bg-orange-600 text-white',
    function: 'bg-gray-600 hover:bg-gray-500 text-white',
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