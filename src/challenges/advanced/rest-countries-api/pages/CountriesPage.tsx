import { Search } from 'lucide-react';
import {
  CountryCard,
  Navbar
} from '../components';
import { useCountries } from '../hooks';

export const CountriesPage = () => {
  const {
    setSearch,
    setRegion,
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPrevPage,
  } = useCountries();

  return (
    <div className="min-h-screen w-full transition-colors duration-300 bg-bg-light dark:bg-bg-dark text-text-light-mode dark:text-white-custom">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:px-20">
        {/* Search & Filter Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="flex-grow md:max-w-md relative group">
            <Search
              className="absolute left-8 top-1/2 -translate-y-1/2 text-input-light dark:text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full py-4 pr-4 pl-18 rounded-md shadow-medium outline-none 
               bg-white-custom dark:bg-elements-dark 
               placeholder:text-input-light dark:placeholder:text-gray-400
               transition-colors duration-300"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="w-48">
            <select
              className="w-full p-4 rounded-md shadow-medium outline-none cursor-pointer 
                         bg-white-custom dark:bg-elements-dark"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        {/* The Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {currentItems.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex justify-center items-center gap-4 pb-10">
          <button
            disabled={currentPage === 1}
            onClick={goToPrevPage}
            className="px-6 py-2 rounded shadow-medium bg-white-custom dark:bg-elements-dark disabled:opacity-50 transition-opacity hover:opacity-80 cursor-pointer"
          >
            Back
          </button>

          <span className="font-bold">
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={goToNextPage}
            className="px-6 py-2 rounded shadow-medium bg-white-custom dark:bg-elements-dark disabled:opacity-50 transition-opacity hover:opacity-80 cursor-pointer"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};