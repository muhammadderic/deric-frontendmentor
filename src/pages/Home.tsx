import { ArrowRight } from "lucide-react";

import { challenges } from "@shared/constants/challenges";
import { ChallengeLevel } from "@shared/components/ChallengeLevel";

export default function Home() {
  const hasChallenges = Object.values(challenges).some(
    (items) => items.length > 0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header section */}
        <div className="pt-8 pb-4 border-b border-gray-200 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            My Frontend <span className="text-blue-600">Live</span> Showcase
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            A collection of my completed{" "}
            <a
              href="https://www.frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline"
            >
              Frontend Mentor
            </a>{" "}
            challenges.
          </p>

          <div className="w-full flex">
            <div className="mt-3 mx-auto flex flex-col sm:flex-row sm:items-center text-gray-600">
              <p className="text-sm">
                Built by <span className="font-medium text-gray-800">muhammadderic</span>
              </p>
              <span className="hidden sm:inline mx-2">•</span>
              <a
                href="https://github.com/muhammadderic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-red-900 transition-colors flex items-center mt-1 sm:mt-0"
              >
                github.com/muhammadderic
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
              <span className="hidden sm:inline mx-2">•</span>
              <a
                href="https://www.frontendmentor.io/profile/muhammadderic?tab=solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-red-900 transition-colors flex items-center mt-1 sm:mt-0"
              >
                frontendmentor/muhammadderic
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Challenges grid */}
        <div className="space-y-10">
          {!hasChallenges && (
            <div className="text-center py-10 text-gray-500">
              No challenges available yet.
            </div>
          )}

          {Object.entries(challenges).map(([level, items]) => (
            <ChallengeLevel key={level} level={level} items={items} />
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Muhammad Deric • Building Digital Experiences</p>
        </div>
      </div>
    </div>
  );
}
