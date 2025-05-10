interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
}

export function SubmitButton({ text, onClick }: SubmitButtonProps) {
  return (
    <button
      className="px-6 py-2 text-sm bg-[hsl(238,40%,52%)] text-white border-none rounded-lg hover:bg-[hsl(239,57%,85%)] transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
}