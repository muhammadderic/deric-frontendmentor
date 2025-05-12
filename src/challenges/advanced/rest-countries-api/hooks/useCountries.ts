import { 
  useState, 
  useMemo 
} from 'react';

import type { Country } from '../types/types';
import countryData from '../constants/data.json';

export const useCountries = () => {
  const itemsPerPage = 8;

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const allCountries = countryData as Country[];

  const filteredCountries = useMemo(() => {
    // Reset to page 1 whenever search or region changes
    setCurrentPage(1); 
    
    return allCountries.filter((country) => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === "" || country.region === region;
      return matchesSearch && matchesRegion;
    });
  }, [search, region, allCountries]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return {
    search,
    setSearch,
    region,
    setRegion,
    currentPage,
    totalPages,
    currentItems,
    goToNextPage,
    goToPrevPage,
  };
};