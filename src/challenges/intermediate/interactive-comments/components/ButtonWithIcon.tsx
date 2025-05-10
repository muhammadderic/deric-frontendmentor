interface ButtonWithIconProps {
  image: string;
  text: string;
  onClick?: () => void;
}

export function ButtonWithIcon({ image, text, onClick }: ButtonWithIconProps) {
  return (
    <button
      className="p-0 flex items-center bg-white border-none"
      onClick={onClick}
    >
      <img
        src={image}
        alt="icon to manage chat"
        className="w-[15px] h-[15px]"
      />
      <p className="ml-2 font-bold text-[hsl(238,40%,52%)] hover:text-[hsl(239,57%,85%)]">
        {text}
      </p>
    </button>
  );
}