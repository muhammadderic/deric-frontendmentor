import type { Country } from '../types/types';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="overflow-hidden rounded-md shadow-medium bg-white-custom dark:bg-elements-dark transition-transform hover:scale-105">
      <div className="h-40 w-full">
        <img src={country.flags.svg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-lg font-bold">
          {country.name}
        </h2>

        <div className="flex flex-col gap-1 text-sm">
          <p>
            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
          </p>

          <p className="capitalize">
            <span className="font-semibold">Region:</span> {country.region}
          </p>

          <p className="capitalize">
            <span className="font-semibold">Capital:</span> {country.capital || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};