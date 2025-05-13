interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

export function SocialIcon({
  href,
  children
}: SocialIconProps) {
  return (
    <a
      href={href}
      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/60 text-white/60 hover:border-[hsl(300,69%,71%)] hover:text-[hsl(300,69%,71%)] flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      {children}
    </a>
  );
}
