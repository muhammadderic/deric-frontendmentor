import {
  BackButton,
  MDericAttribution
} from "@shared/components";
import { CountriesPage } from "./CountriesPage";

export function RESTCountriesContainerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4 transition-colors duration-300 bg-bg-light dark:bg-bg-dark text-text-light-mode dark:text-white-custom">
      <div>
        <BackButton to="/" />
      </div>

      <CountriesPage />

      {/* Attribution */}
      <MDericAttribution />
    </div>
  );
}
