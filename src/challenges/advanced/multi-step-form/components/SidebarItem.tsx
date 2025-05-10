interface SidebarItemProps {
  number: string;
  title: string;
  text: string;
  status: boolean;
}

export function SidebarItem({
  number,
  title,
  text,
  status
}: SidebarItemProps) {
  return (
    <div className="flex gap-4 lg:gap-4 xl:gap-4">
      <div className={`
        h-10 w-10 lg:h-[30px] lg:w-[30px] xl:h-10 xl:w-10
        flex items-center justify-center
        text-white border border-white rounded-full
        ${status ? 'bg-[#ADBFFF] text-black' : ''}
      `}>
        {number}
      </div>
      <div className="hidden lg:flex lg:flex-col text-white">
        <p className="text-xs lg:text-xs xl:text-base uppercase tracking-wide">
          {title}
        </p>
        <p className="text-xs lg:text-xs xl:text-base font-bold uppercase tracking-wider">
          {text}
        </p>
      </div>
    </div>
  );
}