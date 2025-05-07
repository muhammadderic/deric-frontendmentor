import { topicItems } from "@challenges/junior/news-homepage/constants/newsHomepage.contants";

export const TopicsGrid: React.FC = () => {
  return (
    <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
      {topicItems.map((topic) => (
        <div key={topic.id} className="flex gap-4 items-start">
          <img src={topic.image} alt={topic.alt} className="h-28 w-auto object-cover" />
          <div className="flex flex-col justify-between h-full">
            <h2
              className="text-3xl font-bold m-0"
              style={{ color: 'hsl(233, 8%, 79%)' }}
            >
              {topic.rank}
            </h2>
            <h3
              className="text-lg font-extrabold m-0 mt-2 cursor-pointer transition-colors duration-200"
              style={{ color: 'hsl(240, 100%, 5%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(5, 85%, 63%)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(240, 100%, 5%)')}
            >
              {topic.title}
            </h3>
            <p
              className="text-[15px] leading-relaxed mt-1"
              style={{ color: 'hsl(236, 13%, 42%)' }}
            >
              {topic.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};