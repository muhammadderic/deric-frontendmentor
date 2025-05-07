import { newsItems } from "@challenges/junior/news-homepage/constants/newsHomepage.contants";
import React from "react";

export const NewsSidebar: React.FC = () => {
  return (
    <aside
      className="flex flex-col p-5 md:p-6 h-full"
      style={{ backgroundColor: 'hsl(240, 100%, 5%)', color: 'hsl(0, 0%, 100%)' }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold m-0 pb-2"
        style={{ color: 'hsl(35, 77%, 62%)' }}
      >
        New
      </h2>

      <div className="mt-2 flex-grow flex flex-col">
        {newsItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <div className="py-6 flex-1 flex flex-col justify-center">
              <h3
                className="text-2xl font-bold cursor-pointer transition-colors duration-200"
                style={{ color: 'hsl(0, 0%, 100%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(35, 77%, 62%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(0, 0%, 100%)')}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-loose tracking-widest mt-2"
                style={{ color: 'hsl(233, 8%, 79%)' }}
              >
                {item.description}
              </p>
            </div>

            {/* This renders the line ONLY between items */}
            {index !== newsItems.length - 1 && (
              <div
                className="h-[1px] w-full"
                style={{ backgroundColor: 'hsla(210, 1%, 37%, 1.00)' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};