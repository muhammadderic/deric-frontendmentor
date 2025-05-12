import type { ReactNode } from "react";

interface CalculatorButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant: 'number' | 'operator' | 'function' | 'display' | 'text';
  span?: boolean;
}

export function CalculatorBtn({
  children,
  onClick,
  variant,
}: CalculatorButtonProps) {
  const baseStyles = 'rounded-xl py-3 text-xl font-medium transition-all active:scale-95 cursor-pointer';

  const variantStyles = {
    number: 'bg-gray-700 hover:bg-gray-600 text-white',
    operator: 'bg-orange-500 hover:bg-orange-600 text-white',
    function: 'bg-gray-600 hover:bg-gray-500 text-white',
    display: 'bg-gray-800 text-gray-300 cursor-default',
    text: 'bg-transparent text-gray-400 cursor-default',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${variant === 'display' ? 'text-right px-4' : 'text-center'
        }`}
      disabled={variant === 'display' || variant === 'text'}
    >
      {children}
    </button>
  );
};