interface MainContentTitleProps {
  title: string;
  subtitle: string;
}

export function MainContentTitle({ title, subtitle }: MainContentTitleProps) {
  return (
    <div className="py-3 lg:pb-4 xl:py-4 xl:pb-8">
      <h1 className="mb-2 lg:my-0.5 text-4xl text-[#02295a] font-extrabold">
        {title}
      </h1>
      <p className="text-base lg:text-sm leading-6 text-[#9699ab]">
        {subtitle}
      </p>
    </div>
  )
}