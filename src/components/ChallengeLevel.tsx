import type { Challenge } from "../types/types";
import { ChallengeCard } from "./ChallengeCard";

type Props = {
  level: string;
  items: Challenge[];
};

export function ChallengeLevel({ level, items }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 capitalize border-l-4 border-gray-800 pl-3">
        {level} Challenges
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No challenges available for this level.
        </p>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((challenge) => (
            <ChallengeCard key={challenge.path} challenge={challenge} />
          ))}
        </div>
      )}
    </div>
  );
}