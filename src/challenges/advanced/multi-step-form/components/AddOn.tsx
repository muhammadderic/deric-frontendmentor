interface AddOnProps {
  title: string;
  text: string;
  price: number;
  status: boolean;
  clickHandler: (status: boolean, title: string) => void;
}

export function AddOn({
  title,
  text,
  price,
  status,
  clickHandler
}: AddOnProps) {
  return (
    <div
      className={`
        p-4 flex items-center gap-4
        border border-[#9699ab] rounded-lg
        cursor-pointer
        hover:border-[#473dff]
        transition-colors
        ${status ? "bg-[#eef5ff]" : ""}
      `}
      onClick={() => clickHandler(status, title)}
    >
      <input
        type="checkbox"
        id={`check-${title.replace(/\s+/g, '-').toLowerCase()}`}
        name="check"
        className="w-5 h-5 cursor-pointer accent-[#473dff]"
        defaultChecked={status}
        onChange={() => { }} // Controlled by parent click handler
      />
      <div className="flex-1">
        <p className="text-sm lg:text-sm xl:text-base font-bold text-[#02295a]">
          {title}
        </p>
        <p className="text-sm lg:text-sm xl:text-base text-[#9699ab]">
          {text}
        </p>
      </div>
      <div className="text-[#473dff]">
        +${price}/mo
      </div>
    </div>
  );
}