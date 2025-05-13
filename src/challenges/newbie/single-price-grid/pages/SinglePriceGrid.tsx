import { SectionGrid } from "../components/SingleGrid";

export function SinglePriceGrid() {
  return (
    <div className="min-h-screen bg-[#E6EFF6] font-['Karla',sans-serif] flex items-center justify-center p-4 md:p-6">
      <div className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">
        {/* Join our community section */}
        <div className="bg-white p-6 md:p-10">
          <h1 className="text-[#2AB2AF] text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Join our community
          </h1>
          <p className="text-[#C0DF34] text-base md:text-lg font-semibold mb-3 md:mb-4">
            30-day, hassle-free money back guarantee
          </p>
          <p className="text-[#98A6BD] text-sm md:text-base leading-relaxed">
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>

        {/* Bottom sections - Grid layout */}
        <div className="grid md:grid-cols-2">
          {/* Monthly Subscription */}
          <SectionGrid
            title="Monthly Subscription"
            className="bg-[#2AB2AF] text-white"
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl md:text-4xl font-bold">$29</span>
              <span className="text-[#E6EFF6] text-sm opacity-70">per month</span>
            </div>
            <p className="text-sm md:text-base mb-6 md:mb-8">
              Full access for less than $1 a day
            </p>
            <button className="w-full bg-[#C0DF34] text-white py-3 rounded-md font-semibold shadow-md hover:bg-[#b0cf24] transition-colors duration-200 cursor-pointer">
              Sign Up
            </button>
          </SectionGrid>

          {/* Why Us */}
          <SectionGrid
            title="Why Us"
            className="bg-[#2AB2AF] opacity-80 text-white"
          >
            <ul className="space-y-1 text-sm md:text-base text-[#E6EFF6] opacity-90">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </SectionGrid>
        </div>
      </div>
    </div>
  );
};