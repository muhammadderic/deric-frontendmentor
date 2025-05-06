import { Link } from "react-router-dom";
import { ArrowLeftSquare } from "lucide-react";

type BackButtonProps = {
  to: string;
  title?: string;
};

export function BackButton({ to, title = "Back" }: BackButtonProps) {
  return (
    <Link
      to={to}
      title={title}
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
    >
      <ArrowLeftSquare className="w-8 h-8" />
    </Link>
  );
}
