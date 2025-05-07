import web3Desktop from '@assets/news-homepage/images/image-web-3-desktop.jpg';
import web3Mobile from '@assets/news-homepage/images/image-web-3-mobile.jpg';

export const MainArticle: React.FC = () => {
  return (
    <article>
      {/* Responsive Image */}
      <picture>
        <source media="(max-width: 768px)" srcSet={web3Mobile} />
        <img
          src={web3Desktop}
          alt="Web 3.0 abstract bright colors"
          className="w-full h-auto"
        />
      </picture>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <h1
          className="text-3xl md:text-6xl font-extrabold leading-none m-0"
        >
          The Bright Future of Web 3.0?
        </h1>
        <section className="flex flex-col justify-between gap-4 md:gap-0">
          <p className='text-lg tracking-wider leading-relaxed' style={{ color: 'hsl(236, 13%, 42%)' }}>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the
            hands of the people. But is it really fulfilling its promise?
          </p>
          <button
            className="w-1/2 md:w-1/2 px-6 py-3 uppercase tracking-wider border-none cursor-pointer transition-colors duration-300 font-bold text-sm"
            style={{
              backgroundColor: 'hsl(5, 85%, 63%)',
              color: 'hsl(0, 0%, 100%)',
              letterSpacing: '2px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(240, 100%, 5%)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'hsl(5, 85%, 63%)')}
          >
            Read more
          </button>
        </section>
      </div>
    </article>
  );
};