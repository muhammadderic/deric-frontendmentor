import {
  useState,
  useEffect
} from 'react';
import {
  Moon,
  Sun
} from 'lucide-react';

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user already saved a preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';

    // Otherwise, check their system/browser preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <nav className="flex h-20 items-center justify-between px-4 shadow-sm md:px-20 
                    bg-white-custom dark:bg-elements-dark 
                    text-text-light-mode dark:text-white-custom 
                    transition-colors duration-300">

      <h1 className="text-lg font-extrabold md:text-2xl">
        Where in the world?
      </h1>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity cursor-pointer focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {/* Icon switches based on state */}
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}

        {/* Text switches based on state */}
        <span className="text-sm md:text-base">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </nav>
  );
};