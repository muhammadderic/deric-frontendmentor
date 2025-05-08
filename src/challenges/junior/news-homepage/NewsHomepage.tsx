import { MDericAttribution } from "@shared/components/MDericAttribution";
import {
  Navbar,
  MainArticle,
  NewsSidebar,
  TopicsGrid
} from "@challenges/junior/news-homepage/components";
import { BackButton } from "@shared/components/BackButton";

const NewsHomepage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-200 font-sans p-4">
      <div>
        <BackButton to="/" />
      </div>

      <div className="news-homepage min-h-screen">
        {/* Main container with max width and auto margins for centering on large screens */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-24 py-0">
          <Navbar />
          <main className="pb-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <MainArticle />
            </div>
            <div className="md:col-span-1">
              <NewsSidebar />
            </div>
          </main>
          <TopicsGrid />
        </div>
      </div>

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
};

export default NewsHomepage;