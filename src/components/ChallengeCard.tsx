import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { Challenge } from "../types/types";

type Props = {
  challenge: Challenge;
};

export function ChallengeCard({ challenge }: Props) {
  return (
    <Link
      to={challenge.path}
      className="group block rounded-lg border border-gray-200 bg-white p-5 shadow-sm 
                 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {challenge.title}
        </span>

        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </Link>
  );
}